<?php


namespace App\Repository;


use App\Config\TableNames;

class ResurRazdelsRepos extends AbstractRepository
{

    public function findByTestId(int $testId): array
    {
        $sql = sprintf('SELECT * FROM %s WHERE rsur_test_id = :testId', $this::getTableName());
        return $this->getMany($sql, ['testId' => $testId]);
    }

    public static function getTableName(): string
    {
        return TableNames::RSUR['razdels'];
    }
}