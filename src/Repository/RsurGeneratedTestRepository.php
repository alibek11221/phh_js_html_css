<?php


namespace App\Repository;


use App\Config\TableNames;

class RsurGeneratedTestRepository extends AbstractBaseRepository
{

    public static function getTableName(): string
    {
        return TableNames::RSUR['generated'];
    }

    public function getElementGradesByParticipAndTest(int $testId, string $particpCode): array
    {
        $sql = 'SELECT rsur_element_id, grade, mark, hash, subjectcode FROM rsur_generated_tests
                WHERE rsur_test_id = :test
                AND rsur_particip_code = :particip';
        return $this->getMany($sql, ['test' => $testId, 'particip' => $particpCode]);
    }
}