<?php


namespace App\Repository;


use App\Config\TableNames;

class RsurSubResultsRepository extends AbstractRepository
{

    public function findResultByElementAndParticip(int $elementId, int $participantCode)
    {
        $sql = sprintf(
                'SELECT * FROM %s WHERE rsur_element_id = :rsur_element_id AND rsur_particip_code = :rsur_particip_code',
                $this::getTableName()
        );
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute(['rsur_element_id' => $elementId, 'rsur_particip_code' => $participantCode]);
        if ($result = $stmt->fetch()) {
            return $result;
        }
        return [];
    }

    public static function getTableName(): string
    {
        return TableNames::RSUR['sub_results'];
    }
}