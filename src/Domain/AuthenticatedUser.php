<?php

declare(strict_types=1);

namespace App\Domain;


class AuthenticatedUser extends User
{

    /**
     * @var string
     */
    public $type;

    /**
     * @var string
     */
    public $areas;

    public function __construct()
    {
        $this->type = $_SESSION['work'] === '2' || $_SESSION['work'] === '6' ? UserRoles::DIRECTOR : UserRoles::TEACHER;
    }

}