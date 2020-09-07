<?php


namespace App\Repository;


use App\Config\TableNames;

class RsurIntermediateTestResultsRepository extends AbstractRepository
{

    public function saveResult(int $particip, int $razdel, array $grades, bool $exists, int $testId): void
    {
        $res = $this->getGrade($grades);
        if (!$exists) {
            $sql = sprintf(
                    'INSERT INTO %s (rsur_particip_code, rsur_test_id, rsur_razdel_id, round_percent, pure_percent, grade)
                            VALUE (:particip, :test, :razdel, :round, :pure, :grade)',
                    $this::getTableName()
            );
            $this->executeQuerry(
                    $sql,
                    [
                            'particip' => $particip,
                            'test' => $testId,
                            'razdel' => $razdel,
                            'round' => $res['round_percent'],
                            'pure' => $res['pure_percent'],
                            'grade' => $res['grade']
                    ]
            );
        } else {
            $sql = sprintf(
                    'UPDATE %s
                        SET round_percent = :round, pure_percent = :pure, grade = :grade, updated_at = now()
                        WHERE rsur_particip_code = :particip
                        AND rsur_razdel_id = :razdel
                        AND rsur_test_id = :test',
                    $this::getTableName()
            );
            $this->executeQuerry(
                    $sql,
                    [
                            'particip' => $particip,
                            'test' => $testId,
                            'razdel' => $razdel,
                            'round' => $res['round_percent'],
                            'pure' => $res['pure_percent'],
                            'grade' => $res['grade']
                    ]
            );
        }
    }

    private function getGrade(array $elementGrades): array
    {
        $output = [];
        $good = 0;
        foreach ($elementGrades as $grade) {
            if ((int)$grade['grade'] > 2) {
                $good++;
            }
        }
        $pure = $good / count($elementGrades) * 100;
        $proc = round($pure);
        $output['pure_percent'] = $pure;
        $output['round_percent'] = $proc;
        if ($proc >= 70) {
            $output['grade'] = 5;
        } else {
            $output['grade'] = 2;
        }
        return $output;
    }

    final public static function getTableName(): string
    {
        return TableNames::RSUR['intermediate_tests'];
    }

    public function getResult(int $participCode, int $testId, int $razdelId): array
    {
        $sql = sprintf(
                'SELECT * FROM %s
                WHERE rsur_razdel_id = :razdel
                AND rsur_test_id = :test
                AND rsur_particip_code = :particip',
                $this::getTableName()
        );

        return $this->getOne($sql, ['razdel' => $razdelId, 'test' => $testId, 'particip' => $participCode]);
    }
}