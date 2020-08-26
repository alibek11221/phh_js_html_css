<?php


namespace App\Repository;


use App\Config\TableNames;

class RsurSubjectsRepository extends AbstractRepository
{
    protected $primary = 'code';

    final public static function getTableName(): string
    {
        return TableNames::RSUR['subjects'];
    }
}