<?php


namespace App\Repository;


use App\Config\TableNames;

class RsurSubElementsRepository extends AbstractRepository
{
    protected $isSoftDelete = true;
    protected $actualValue = 1;
    protected $archiveValue = 0;

    public function findSubElementsByElementId(int $elementId): array
    {
        $sql = sprintf('SELECT * FROM %s WHERE element_id = :elementid', $this::getTableName());
        return $this->getAll($sql, ['elementid' => $elementId]);
    }

    public static function getTableName(): string
    {
        return TableNames::RSUR['sub_elements'];
    }

    public function findSubElementsByRazdelId(int $razdel): array
    {
        $sql = sprintf(
                'SELECT rse.* FROM %s rse
                JOIN %s re on rse.element_id = re.id
                JOIN %s rr on re.razdel_id = rr.id
                WHERE  razdel_id = :razdel',
                $this::getTableName(),
                RsurElementsRepository::getTableName(),
                ResurRazdelsRepos::getTableName()
        );
        return $this->getAll($sql, ['razdel' => $razdel]);
    }

    public function getMinsAndMaxs(int $elementId): array
    {
        $sql = sprintf('SELECT id, procent, max FROM %s WHERE element_id = :elementid', $this::getTableName());
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute(['elementid' => $elementId]);
        return $stmt->fetchAll();
    }

}