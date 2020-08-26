<?php

declare(strict_types=1);

namespace App\Repository;

use App\Config\TableNames;
use DI\Annotation\Injectable;

/**
 * Class AreaRepository
 * @package App\Repository
 * @Injectable(lazy=true)
 */
class AreaRepository extends AbstractRepository
{
    protected $primary = 'Code';
    protected $isSoftDelete = true;
    protected $actualValue = "''";
    protected $actualColumn = 'ActualCode';


    final public static function getTableName(): string
    {
        return TableNames::AREA;
    }
}
