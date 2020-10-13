<?php

declare(strict_types=1);

namespace App\Repository;

use App\Config\TableNames;
use DI\Annotation\Injectable;

/**
 * Class PositionRepository
 * @package App\Repository
 * @Injectable(lazy=true)
 */
class PositionBaseRepository extends AbstractBaseRepository
{

    /**
     * @return string
     */
    final public static function getTableName(): string
    {
        return TableNames::POSITION;
    }
}