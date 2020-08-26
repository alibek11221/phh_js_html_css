<?php


namespace App\Repository;


use App\Config\TableNames;

class SubResultsRepository extends AbstractRepository
{

    public static function getTableName(): string
    {
        return TableNames::RSUR['sub_results'];
    }

    public function getResultByElementId()
    {
    }
}