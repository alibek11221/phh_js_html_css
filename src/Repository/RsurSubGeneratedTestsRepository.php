<?php


namespace App\Repository;


use App\Config\TableNames;
use Exception;

class RsurSubGeneratedTestsRepository extends AbstractRepository
{

    public static function getTableName(): string
    {
        return TableNames::RSUR['sub_generated_test'];
    }

    public function saveResult(array $elementsAndMarks, int $participantCode, array $minMax, int $element): int
    {
        $sql = 'INSERT INTO rsur_sub_generated_tests(rsur_participi_code, rsur_element_id, rsur_sub_element_id, mark, hash, grade)
                VALUES (:particip, :element, :subElement, :mark, :hash, :grade)';
        $sql2 = 'INSERT INTO rsur_sub_results(rsur_particip_code, rsur_element_id, sum_marks, generated_test_hash, grade,
                             sum_true_sub_elements, procent)
                VALUES (:particip, :element, :summarks, :gen_hash, :grade, :sum, :proc)';
        $this->dbo->beginTransaction();
        try {
            $stmt = $this->dbo->prepare($sql);
            $stmt2 = $this->dbo->prepare($sql2);
            foreach ($elementsAndMarks as $subElement => $mark) {
                $marker = (int)$mark->getValue();
                $hash = hash("md5", $participantCode);
                $stmt->execute(
                        [
                                'particip' => $participantCode,
                                'element' => $element,
                                'subElement' => $subElement,
                                'mark' => $marker,
                                'grade' => $this->getGrade($minMax, $marker, $subElement),
                                'hash' => $hash
                        ]
                );
            }
            $resultInfo = $this->getSumMarks($participantCode, $element, $minMax);
            $stmt2->execute(
                    [
                            'particip' => $participantCode,
                            'element' => $element,
                            'summarks' => $resultInfo['summarks'],
                            'gen_hash' => $hash,
                            'grade' => $resultInfo['grade'],
                            'sum' => $resultInfo['passed'],
                            'proc' => $resultInfo['proc']
                    ]
            );
            $this->dbo->commit();
            return $resultInfo['proc'];
        } catch (Exception $exception) {
            $this->dbo->rollBack();
            return $exception->getMessage();
        }
    }

    private function getGrade(array $minMaxs, int $mark, int $subelement)
    {
        foreach ($minMaxs as $minMax) {
            if ((int)$minMax['id'] === $subelement) {
                if ($mark >= (int)$minMax['min']) {
                    return 5;
                }
                if ($mark <= (int)$minMax['min']) {
                    return 2;
                }
                if ($mark >= (int)$minMax['max']) {
                    return 2;
                }
            }
        }
        return null;
    }

    private function getSumMarks(int $particip, int $element, array $minMax)
    {
        $sql = 'SELECT SUM(mark)
                FROM rsur_sub_generated_tests
                WHERE rsur_participi_code = :particip
                AND rsur_element_id = :element';
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute(['particip' => $particip, 'element' => $element]);
        $sql2 = 'SELECT COUNT(mark)
                FROM rsur_sub_generated_tests
                WHERE rsur_participi_code = :particip
                AND rsur_element_id = :element
                AND grade = 5';
        $stmt2 = $this->dbo->prepare($sql2);
        $stmt2->execute(['particip' => $particip, 'element' => $element]);
        $output['summarks'] = $stmt->fetchColumn();
        $output['passed'] = $stmt2->fetchColumn();
        $gradeInfo = $this->getFinalGrade($minMax, (int)$output['passed']);
        $output['grade'] = $gradeInfo['grade'];
        $output['proc'] = $gradeInfo['procent'];
        return $output;
    }

    private function getFinalGrade(array $minMax, int $passedElems): array
    {
        $output['procent'] = round($passedElems / count($minMax) * 100);
        $output['grade'] = $output['procent'] > $minMax['proc'] ? 5 : 2;
        return $output;
    }
}