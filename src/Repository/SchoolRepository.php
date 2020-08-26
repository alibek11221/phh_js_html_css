<?php

declare(strict_types=1);

namespace App\Repository;

use App\Config\TableNames;
use DI\Annotation\Injectable;

/**
 * Class SchoolRepository
 * @package App\Repository
 * @Injectable(lazy=true)
 */
class SchoolRepository extends AbstractRepository
{

    public function findAll(): array
    {
        $stmt = $this->dbo->query(sprintf("SELECT * FROM %s WHERE id != 0000", $this::getTableName()));
        return $stmt->fetchAll();
    }

    final public static function getTableName(): string
    {
        return TableNames::SCHOOL;
    }

    public function getByAreaCode(int $areaCode): array
    {
        $stmt = $this->dbo->prepare(sprintf("SELECT * FROM %s WHERE AreaCode = :areacode", $this::getTableName()));
        $stmt->execute([':areacode' => $areaCode]);
        return $stmt->fetchAll();
    }

    public function findById(string $id): array
    {
        $stmt = $this->dbo->prepare(sprintf("SELECT * FROM %s WHERE id = :id", $this::getTableName()));
        $stmt->execute([':id' => $id]);
        return $stmt->fetch();
    }
}