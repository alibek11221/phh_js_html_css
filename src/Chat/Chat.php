<?php

declare(strict_types=1);

namespace App\Chat;


use App\Config\MessageTypes;
use App\Domain\UserRoles;
use App\Repository\DialogsRepository;
use App\Repository\MessageRepository;
use Exception;
use Ratchet\ConnectionInterface;
use Ratchet\MessageComponentInterface;
use SplObjectStorage;

class Chat implements MessageComponentInterface
{

    /**
     * @var SplObjectStorage
     */
    private $clients;

    /**
     * @var DialogsRepository
     */
    private $roomsRepository;

    public function __construct()
    {
        $this->clients = new SplObjectStorage();
        $this->roomsRepository = new DialogsRepository();
    }


    public function onOpen(ConnectionInterface $conn): void
    {
        $conn->messageRepository = new MessageRepository();
        $this->roomsRepository->parseDialogs();
        $this->clients->attach($conn);
    }

    /**
     * @param ConnectionInterface $conn
     */
    public function onClose(ConnectionInterface $conn): void
    {
        $this->clients->detach($conn);
    }

    /**
     * @param ConnectionInterface $conn
     * @param Exception $e
     */
    public function onError(ConnectionInterface $conn, Exception $e): void
    {
        $conn->close();
    }

    /**
     * @param ConnectionInterface $from
     * @param string $msg
     */
    public function onMessage(ConnectionInterface $from, $msg): void
    {
        if ($messageData = json_decode($msg, true)) {
            switch ($messageData['type']) {
                case MessageTypes::INIT:
                    $from->responseId = (int)$messageData['responseId'];
                    $from->role = $messageData['role'];
                    $from->id = (int)$messageData['id'];
                    $dialog = $this->roomsRepository->findByResponseId((int)$from->responseId);
                    if ($from->role === UserRoles::DIRECTOR) {
                        $participant = $dialog->director;
                    } elseif ($from->role === UserRoles::TEACHER) {
                        $participant = $dialog->teacher;
                    } else {
                        $from->close();
                    }
                    if (isset($dialog, $participant) && $participant->id === $from->id) {
                        $from->name = $participant->name;
                        $from->messageRepository->setPath(sprintf('dialog_%s', (string)$from->responseId));
                        $outputData = [
                                'type' => MessageTypes::INIT,
                                'id' => $from->id,
                                'data' => $from->messageRepository->getMessagesByDialog()
                        ];
                        $from->send(json_encode($outputData, 0, 512));
                    } else {
                        $from->close();
                    }
                    break;
                case MessageTypes::MESSAGE:
                    if (!empty($messageData['text'])) {
                        $savedMessage = $from->messageRepository->saveMessage($from, $messageData['text']);
                        foreach ($this->clients as $client) {
                            if ($client->responseId === $from->responseId) {
                                $outputData = ['type' => MessageTypes::MESSAGE, 'message' => $savedMessage];
                                $client->send(json_encode($outputData));
                            }
                        }
                    }
                    break;
                default:
                    $from->close();
                    break;
            }
        } else {
            $from->close();
        }
    }
}
