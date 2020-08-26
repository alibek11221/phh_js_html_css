<?php

declare(strict_types=1);

namespace App\Repository;


use App\Core\Dbo;

abstract class AbstractRepository
{
    /**
     * @var Dbo
     */
    protected $dbo;
    /**
     * @var string
     */
    protected $primary = 'id';
    /**
     * @var bool
     */
    protected $isSoftDelete;
    /**
     * @var string
     */
    protected $actualColumn = 'actual';
    /**
     * @var string
     */
    protected $actualValue = '1';
    /**
     * @var string
     */
    protected $archiveValue = '0';
    /**
     * AbstractRepository constructor.
     * @param Dbo $dbo
     */
    public function __construct(Dbo $dbo)
    {
        $this->dbo = $dbo;
    }

    public function findAll(): array
    {
        if ($this->isSoftDelete) {
            $sql = sprintf(
                    'SELECT * FROM %s WHERE %s = %s',
                    static::getTableName(),
                    $this->actualColumn,
                    $this->actualValue
            );
        } else {
            $sql = sprintf('SELECT * FROM %s', static::getTableName());
        }
        $stmt = $this->dbo->query($sql);
        return $stmt->fetchAll();
    }

    abstract public static function getTableName(): string;

    public function where(string $column, $value): array
    {
        if ($this->isSoftDelete) {
            $sql = sprintf(
                    'SELECT * FROM %s WHERE %s = :value AND %s = %s',
                    static::getTableName(),
                    $column,
                    $this->actualColumn,
                    $this->actualValue
            );
        } else {
            $sql = sprintf('SELECT * FROM %s WHERE %s = :value ', static::getTableName(), $column);
        }
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute(['value' => $value]);
        return $stmt->fetchAll() ?? [];
    }

    public function find($primaryValue): array
    {
        if ($this->isSoftDelete) {
            $sql = sprintf(
                    'SELECT * FROM %s WHERE %s = :id AND %s = %s',
                    static::getTableName(),
                    $this->primary,
                    $this->actualColumn,
                    $this->actualValue
            );
        } else {
            $sql = sprintf('SELECT * FROM %s WHERE %s = :id', static::getTableName(), $this->primary);
        }
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute(['id' => $primaryValue]);
        return $stmt->fetch();
    }

    public function delete($primary): int
    {
        if ($this->isSoftDelete) {
            $sql = sprintf(
                    'UPDATE %s SET %s = %s WHERE %s = :id',
                    static::getTableName(),
                    $this->actualColumn,
                    $this->primary,
                    $this->archiveValue
            );
        } else {
            $sql = sprintf('DELETE FROM %s WHERE %s = :id', static::getTableName(), $this->primary);
        }
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute(['primary' => $primary]);
        return $primary;
    }


    protected function getOne(string $sql, array $params): array
    {
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute($params);
        if ($output = $stmt->fetch()) {
            return $output;
        }
        return [];
    }

    protected function getAll(string $sql, array $params): array
    {
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll();
    }
}
