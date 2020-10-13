<?php


namespace App\Repository;


use App\Config\TableNames;
use App\Core\Dbo;
use Exception;

class RsurIntermediateSubElementResultsRepository extends AbstractBaseRepository
{
    /**
     * @var RsurIntermediateElementResultsRepository
     */
    private $intermediateElementResults;

    public function __construct(Dbo $dbo, RsurIntermediateElementResultsRepository $intermediateElementResults)
    {
        parent::__construct($dbo);
        $this->intermediateElementResults = $intermediateElementResults;
    }

    public function saveResult(int $participCode, int $razdelId, array $marks, int $testId): void
    {
        $this->dbo->beginTransaction();
        try {
            $exists = $this->resultExists($participCode, $razdelId, $testId);
            if (!$exists) {
                $sql = sprintf(
                        'INSERT INTO %s (rsur_particip_code, rsur_test_id, rsur_razdel_id, rsur_element_id, sub_element_id, mark)
                            VALUE (:particip, :test, :razdel, :element, :subelement, :mark)',
                        $this::getTableName()
                );
                foreach ($marks as $element => $subMarks) {
                    foreach ($subMarks as $subelement => $mark) {
                        $this->executeQuerry(
                                $sql,
                                [
                                        'particip' => $participCode,
                                        'test' => $testId,
                                        'razdel' => $razdelId,
                                        'element' => $element,
                                        'subelement' => $subelement,
                                        'mark' => $mark
                                ]
                        );
                    }
                }
            } else {
                $sql = sprintf(
                        'UPDATE %s
                                    SET mark = :mark,  updated_at = now()
                                    WHERE rsur_particip_code = :particip
                                    AND rsur_test_id = :test
                                    AND rsur_razdel_id = :razdel
                                    AND rsur_element_id = :element
                                    AND sub_element_id = :subelement',
                        $this::getTableName()
                );
                foreach ($marks as $element => $subMarks) {
                    foreach ($subMarks as $subelement => $mark) {
                        $this->executeQuerry(
                                $sql,
                                [
                                        'particip' => $participCode,
                                        'test' => $testId,
                                        'razdel' => $razdelId,
                                        'element' => $element,
                                        'subelement' => $subelement,
                                        'mark' => $mark
                                ]
                        );
                    }
                }
            }
            $this->intermediateElementResults->saveResult($participCode, $razdelId, $marks, $exists, $testId);
            $this->dbo->commit();
        } catch
        (Exception $exception) {
            $this->dbo->rollBack();
            throw $exception;
        }
    }

    public function resultExists(int $particip, int $razdel, int $testId): bool
    {
        $sql = sprintf(
                'SELECT COUNT(*) FROM %s
                            WHERE rsur_particip_code = :particip
                            AND rsur_test_id = :test
                            AND rsur_razdel_id = :razdel',
                $this::getTableName()
        );
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute(['particip' => $particip, 'test' => $testId, 'razdel' => $razdel]);
        $count = $stmt->fetchColumn();
        return $count > 0;
    }

    final public static function getTableName(): string
    {
        return TableNames::RSUR['intermediate_subelements'];
    }

    public function getResults(int $participCode, int $razdelId, int $testId): array
    {
        $sql = sprintf(
                'SELECT * FROM %s
                            WHERE rsur_particip_code = :particip
                            AND rsur_test_id = :test
                            AND rsur_razdel_id = :razdel',
                $this::getTableName()
        );
        return $this->getMany($sql, ['particip' => $participCode, 'test' => $testId, 'razdel' => $razdelId]);
    }
}