<?php


namespace App\Domain;


class Dialog
{
    /**
     * @var int
     */
    public $responseid;

    /**
     * @var User
     */
    public $director;
    /**
     * @var User
     */
    public $teacher;

    public function __construct(int $responseId, User $director, User $teacher)
    {
        $this->responseid = $responseId;
        $this->director = $director;
        $this->teacher = $teacher;
    }
}