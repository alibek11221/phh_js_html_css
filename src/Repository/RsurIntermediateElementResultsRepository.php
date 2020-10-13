<?php


namespace App\Repository;


use App\Config\TableNames;
use App\Core\Dbo;

class RsurIntermediateElementResultsRepository extends AbstractBaseRepository
{

    /**
     * @var RsurIntermediateTestResultsRepository
     */
    private $intermediateTestResultsRepository;

    public function __construct(Dbo $dbo, RsurIntermediateTestResultsRepository $intermediateTestResultsRepository)
    {
        parent::__construct($dbo);
        $this->intermediateTestResultsRepository = $intermediateTestResultsRepository;
    }

    public function saveResult(int $particip, int $razdel, array $marks, bool $exists, int $test): void
    {
        $elementGrades = $this->getGrades($marks);
        if (!$exists) {
            $sql = sprintf(
                    'INSERT INTO %s (rsur_particip_code, rsur_razdel_id, rsur_test_id, rsur_element_id, round_percent, pure_percent, grade)
                            VALUE (:particip, :razdel, :test, :element, :round, :pure, :grade)',
                    $this::getTableName()
            );
            foreach ($elementGrades as $element => $res) {
                $this->executeQuerry(
                        $sql,
                        [
                                'particip' => $particip,
                                'test' => $test,
                                'razdel' => $razdel,
                                'element' => $element,
                                'round' => $res['round_percent'],
                                'pure' => $res['pure_percent'],
                                'grade' => $res['grade']
                        ]
                );
            }
        } else {
            $sql = sprintf(
                    'UPDATE %s
                        SET round_percent = :round, pure_percent = :pure, grade = :grade, updated_at = now()
                        WHERE rsur_particip_code = :particip
                        AND rsur_test_id = :test
                        AND rsur_razdel_id = :razdel
                        AND rsur_element_id = :element',
                    $this::getTableName()
            );
            foreach ($elementGrades as $element => $res) {
                $this->executeQuerry(
                        $sql,
                        [
                                'particip' => $particip,
                                'test' => $test,
                                'razdel' => $razdel,
                                'element' => $element,
                                'round' => $res['round_percent'],
                                'pure' => $res['pure_percent'],
                                'grade' => $res['grade']
                        ]
                );
            }
        }
        $this->intermediateTestResultsRepository->saveResult($particip, $razdel, $elementGrades, $exists, $test);
    }

    private function getGrades(array $marks): array
    {
        $output = [];
        foreach ($marks as $element => $submarks) {
            $good = 0;
            foreach ($submarks as $subelem => $submark) {
                if ((int)$submark === 1) {
                    $good++;
                }
            }
            $pure = $good / count($submarks) * 100;
            $proc = round($pure);
            $output[$element]['pure_percent'] = $pure;
            $output[$element]['round_percent'] = $proc;
            if ($proc >= 70) {
                $output[$element]['grade'] = 5;
            } else {
                $output[$element]['grade'] = 2;
            }
        }
        return $output;
    }

    final public static function getTableName(): string
    {
        return TableNames::RSUR['intermediate_elements'];
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

        return $this->getMany($sql, ['razdel' => $razdelId, 'test' => $testId, 'particip' => $participCode]);
    }

    public function getResultsForTeachrSide(string $participCode, int $testId, int $razdelId): array
    {
        $sql = sprintf(
                'SELECT pure_percent, round_percent, grade, created_at, updated_at FROM %s
                WHERE rsur_razdel_id = :razdel
                AND rsur_particip_code = :particip
                AND rsur_test_id = :test',
                $this::getTableName()
        );
        return $this->getMany($sql, ['razdel' => $razdelId, 'particip' => $participCode, 'test' => $testId]);
    }
}