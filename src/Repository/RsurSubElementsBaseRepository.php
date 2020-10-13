<?php


namespace App\Repository;


use App\Config\TableNames;

class RsurSubElementsBaseRepository extends AbstractBaseRepository
{
    protected $isSoftDelete = true;
    protected $actualValue = 1;
    protected $archiveValue = 0;

    public function findSubElementsByElementId(int $elementId): array
    {
        $sql = sprintf(
                'SELECT * FROM  %s WHERE element_id = :element',
                $this::getTableName()
        );
        return $this->getMany($sql, ['element' => $elementId]);
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
                RsurElementseRepository::getTableName(),
                RsurRazdelsRepos::getTableName()
        );
        return $this->getMany($sql, ['razdel' => $razdel]);
    }


}