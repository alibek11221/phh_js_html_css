<?php


namespace App\Repository;


use App\Config\TableNames;

class RsurResultsRepository extends AbstractRepository
{

    public function findByGrade(int $grade): array
    {
        $sql = sprintf('SELECT * FROM %s WHERE grade = :grade', self::getTableName());
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute(['grade' => $grade]);
        return $stmt->fetchAll();
    }

    final public static function getTableName(): string
    {
        return TableNames::RSUR['results'];
    }

    public function findResultByTestId(int $testId, int $participantCode)
    {
        $sql = sprintf(
                'SELECT * FROM %s WHERE test_id = :testid AND rsur_particip_code = :participocde',
                $this::getTableName()
        );
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute(['testid' => $testId, 'participocde' => $participantCode]);
        if ($result = $stmt->fetch()) {
            return $result;
        }
        return [];
    }
}