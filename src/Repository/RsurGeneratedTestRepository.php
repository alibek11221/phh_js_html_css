<?php


namespace App\Repository;


use App\Config\TableNames;

class RsurGeneratedTestRepository extends AbstractRepository
{

    public static function getTableName(): string
    {
        return TableNames::RSUR['generated'];
    }

    public function findGrade($elementId, $participId, $testId)
    {
        $sql = 'SELECT grade
                FROM rsur_generated_tests
                WHERE rsur_element_id = :element
                  AND rsur_particip_code = :particip
                  AND rsur_test_id = :test';
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute(['element' => $elementId, 'particip' => $participId, 'test' => $testId]);
        return $stmt->fetch();
    }
}