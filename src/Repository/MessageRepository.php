<?php


namespace App\Repository;


use App\Core\Cryptor;
use DateTime;
use Exception;
use Ratchet\ConnectionInterface;

class MessageRepository
{

    /**
     * @var string
     */
    private $path;

    /**
     * @return array
     * @throws Exception
     */
    public function getMessagesByDialog(): array
    {
        $messages = json_decode(file_get_contents($this->path), true) ?? [];
        foreach ($messages as &$message) {
            $message['text'] = Cryptor::Decrypt($message['text'], getenv('SECRET_KEY'));
        }
        return $messages;
    }

    /**
     * @param ConnectionInterface $from
     * @param string $text
     *
     * @return array
     * @throws Exception
     */
    public function saveMessage(ConnectionInterface $from, string $text): array
    {
        $messages = json_decode(file_get_contents($this->path), true);
        $message = [
                'participantId' => $from->id,
                'name' => $from->name,
                'text' => Cryptor::Encrypt($text, getenv("SECRET_KEY")),
                'date' => new DateTime('now')
        ];
        $messages[] = $message;
        file_put_contents($this->path, json_encode($messages, JSON_PRETTY_PRINT, 512));
        $message['text'] = $text;
        return $message;
    }

    /**
     * @param string $path
     * @return MessageRepository
     */
    public function setPath(string $path): MessageRepository
    {
        $this->path = sprintf("%s/data/messages/%s.json", dirname(__DIR__, 2), $path);
        if (!file_exists($this->path)) {
            $file = fopen($this->path, 'wb');
            fclose($file);
        }
        return $this;
    }
}