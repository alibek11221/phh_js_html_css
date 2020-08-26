<?php


namespace App\Repository;


use App\Config\TableNames;

class ExperienceRepository extends AbstractRepository
{

    /**
     * @return string
     */
    final public static function getTableName(): string
    {
        return TableNames::EXPERIENCE;
    }
}