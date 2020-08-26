<?php


namespace App\Core;


use PDO;

class Dbo extends PDO
{
    public function __construct()
    {
        $dsn = getenv("DATABASE_URL");
        $user = getenv("DB_USER");
        $password = getenv("DB_PASSWORD");
        $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
        ];
        parent::__construct($dsn, $user, $password, $options);
    }
}
