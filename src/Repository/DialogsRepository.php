<?php

declare(strict_types=1);

namespace App\Repository;


use App\Domain\Dialog;
use App\Domain\DialogParticipant;
use App\Domain\User;

class DialogsRepository
{
    /**
     * @var string
     */
    private $path;
    /**
     * @var array
     */
    public $rooms;

    public function __construct()
    {
        $this->path = sprintf("%s/data/dialogs.json", dirname(__DIR__, 2));
        if (!file_exists($this->path)) {
            $file = fopen($this->path, 'wb');
            fclose($file);
        }
        $this->parseDialogs();
    }

    public function parseDialogs(): void
    {
        $rooms = json_decode(file_get_contents($this->path), true);
        if (is_array($rooms) > 0) {
            foreach ($rooms as $room) {
                $teacher = new User();
                $teacher->id = $room['teacher']['id'];
                $teacher->name = $room['teacher']['name'];
                $teacher->surname = $room['teacher']['surname'];
                $teacher->secondname = $room['teacher']['secondname'];
                $teacher->schoolid = $room['teacher']['schoolid'];
                $director = new User();
                $director->id = $room['director']['id'];
                $director->name = $room['director']['name'];
                $director->surname = $room['director']['surname'];
                $director->secondname = $room['director']['secondname'];
                $director->schoolid = $room['director']['schoolid'];
                $this->rooms[] = new Dialog($room['responseid'], $director, $teacher);
            }
        } else {
            $this->rooms = [];
        }
    }

    public function save(Dialog $dialog): void
    {
        $this->rooms[] = $dialog;
        file_put_contents($this->path, json_encode($this->rooms, JSON_PRETTY_PRINT, 512));
    }

    public function findByResponseId(int $id): ?Dialog
    {
        foreach ($this->rooms as $room) {
            if ($room->responseid === $id) {
                return $room;
            }
        }
        return null;
    }

    public function findInterlocutorsByParticipantId(int $directorId, int $participantId): ?int
    {
        foreach ($this->rooms as $roomId => $room) {
            if ((int)$room['roomParticipants'][1]['id'] === $directorId && (int)$room['roomParticipants'][2]['id'] === $participantId) {
                return $roomId;
            }
        }
        return null;
    }
}
