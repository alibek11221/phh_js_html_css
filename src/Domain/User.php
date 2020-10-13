<?php


namespace App\Domain;


class User
{
    /**
     * @var int
     */
    public $id;
    /**
     * @var string
     */
    public $schoolid;
    /**
     * @var string
     */
    public $surname;
    /**
     * @var string
     */
    public $name;
    /**
     * @var string
     */
    public $secondname;

    /**
     * @return string
     */
    public function getName(): string
    {
        return sprintf("%s %s %s", $this->surname, $this->name, $this->secondname);
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    public function __set($name, $value)
    {
    }
}