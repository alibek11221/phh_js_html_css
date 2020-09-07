<?php

declare(strict_types=1);

namespace App\Repository;


use App\Config\TableNames;
use DI\Annotation\Injectable;

/**
 * Class VacancyRepository
 * @package App\Repository
 * @Injectable(lazy=true)
 */
class VacancyRepository extends AbstractRepository
{


    /**
     * @param int $areaCode
     * @param string $schoolId
     * @param int $positionId
     * @param array|null $payment
     * @param int $experienceId
     * @param int $offset
     * @return array
     */
    public function findBy(
            int $areaCode,
            string $schoolId,
            int $positionId,
            ?array $payment,
            int $experienceId,
            int $offset = 0
    ): array {
        $flag = 0;
        $sql = sprintf(
                "SELECT  v.id             AS id,
                               zp               AS zp,
                               d.name           AS 'doljnost',
                               d.typedoljnostid AS doljtype,
                               a.name           AS areaname,
                               sch.name         AS schoolname,
                               st.value         AS staj,
                               v.dop_info,
                               v.date_insert
                        from %s v
                                 JOIN %s d ON v.doljnost_id = d.id
                                 JOIN %s a ON v.areacode = a.Code
                                 JOIN %s sch ON v.schoolid = sch.id
                                 JOIN %s st ON v.staj_id = st.id",
                $this::getTableName(),
                TableNames::POSITION,
                TableNames::AREA,
                TableNames::SCHOOL,
                TableNames::EXPERIENCE
        );
        if ($areaCode !== 0) {
            $cond = "v.areacode = {$areaCode}";
            $this->constructSql($sql, $cond, $flag);
        }
        if ($schoolId !== '0') {
            $cond = "v.schoolid = {$schoolId}";
            $this->constructSql($sql, $cond, $flag);
        }
        if ($positionId !== 0) {
            $cond = "v.doljnost_id = {$positionId}";
            $this->constructSql($sql, $cond, $flag);
        }
        if ($payment !== null) {
            $cond = sprintf("v.zp BETWEEN %s AND %s", $payment['min'], $payment['max']);
            $this->constructSql($sql, $cond, $flag);
        }
        if ($payment === null) {
            $cond = "v.zp = 'no'";
            $this->constructSql($sql, $cond, $flag);
        }
        if ($experienceId !== 0) {
            $cond = "v.staj_id = {$experienceId}";
            $this->constructSql($sql, $cond, $flag);
        }
        $sql .= " order by v.date_insert
				limit 9 offset {$offset}";
        return $this->dbo->query($sql)->fetchAll();
    }

    /**
     * @return string
     */
    final public static function getTableName(): string
    {
        return TableNames::VACANCY;
    }

    /**
     * @param string $sql
     * @param string $cond
     * @param int $flag
     * @return void
     */
    private function constructSql(string &$sql, string $cond, int &$flag): void
    {
        if ($flag === 0) {
            $flag = 1;
            $sql .= " WHERE " . $cond;
        } else {
            $sql .= " AND " . $cond;
        }
    }

    /**
     * @param string $schoolId
     * @return array
     */
    public function findBySchoolId(string $schoolId): array
    {
        $stmt = $this->dbo->prepare(
                sprintf(
                        "SELECT v.id,
                               v.zp,
                               v.date_insert,
                               v.dop_info,
                               v.schoolid,
                               v.id_directora,
                               v.doljnost_id,
                               v.staj_id,
                               d.name,
                               d.typedoljnostid as dtype,
                               s.value
                        FROM %s v
                                 JOIN %s d ON v.doljnost_id = d.id
                                 JOIN %s s on v.staj_id = s.id
                        WHERE schoolid = :schoolId",
                        $this::getTableName(),
                        TableNames::POSITION,
                        TableNames::EXPERIENCE
                )
        );
        $stmt->execute([':schoolId' => $schoolId]);
        return $stmt->fetchAll();
    }

    /**
     * @param int $positionId
     * @param string $schoolId
     * @return int
     */
    public function countOfVacanciesWith(int $positionId, string $schoolId): int
    {
        $sql = sprintf(
                "SELECT COUNT(*) FROM %s WHERE doljnost_id = %d AND schoolid = %s",
                $this::getTableName(),
                $positionId,
                $schoolId
        );
        $stmt = $this->dbo->query($sql);
        return $stmt->fetchColumn();
    }

    /**
     * @param int $positionId
     * @param int $paymentValue
     * @param int $experienceId
     * @param string $dopInfo
     * @param int $directorId
     * @param string $schoolId
     * @param int $areaCode
     * @param string $dateInsert
     * @return array
     */
    public function saveVacancy(
            int $positionId,
            int $paymentValue,
            int $experienceId,
            string $dopInfo,
            int $directorId,
            string $schoolId,
            int $areaCode,
            string $dateInsert
    ): array {
        $stmt = $this->dbo->prepare(
                sprintf(
                        "INSERT INTO %s(doljnost_id,
                                                   zp,
                                                   staj_id,
                                                   dop_info,
                                                   id_directora,
                                                   schoolid,
                                                   areacode,
                                                   date_insert)
                                            VALUE (:doljnostId,
                                                   :zp,
                                                   :staj_id,
                                                   :dop_info,
                                                   :id_directora,
                                                   :schoolId,
                                                   :areacode,
                                                   :date_insert)",
                        $this::getTableName()
                )
        );
        $stmt->execute(
                [
                        ':doljnostId' => $positionId,
                        ':zp' => $paymentValue,
                        ':staj_id' => $experienceId,
                        ':dop_info' => $dopInfo,
                        ':id_directora' => $directorId,
                        ':schoolId' => $schoolId,
                        ':areacode' => $areaCode,
                        'date_insert' => $dateInsert
                ]
        );
        $lastId = (int)$this->dbo->lastInsertId();
        return $this->findById($lastId);
    }

    /**
     * @param int $id
     * @return array
     */
    public function findById(int $id): array
    {
        $stmt = $this->dbo->prepare(
                sprintf(
                        "SELECT  v.id, v.zp, v.date_insert, v.dop_info, v.doljnost_id, v.staj_id, d.name, d.typedoljnostid as dtype, s.value
                                    FROM %s v
                                    JOIN %s d ON v.doljnost_id = d.id
                                    JOIN %s s ON v.staj_id = s.id
                                    WHERE v.id = :id",
                        $this::getTableName(),
                        TableNames::POSITION,
                        TableNames::EXPERIENCE
                )
        );
        $stmt->execute([':id' => $id]);
        return $stmt->fetch();
    }

    /**
     * @param int $id
     * @param string $positionId
     * @param int $paymentValue
     * @param int $experienceId
     * @param string $dopInfo
     * @return array
     */
    public function updateVacancy(
            int $id,
            ?string $positionId,
            ?int $paymentValue,
            int $experienceId,
            string $dopInfo
    ): array {
        $params = [
                'zp' => $paymentValue ?? 'no',
                'staj_id' => $experienceId,
        ];
        if ($positionId !== null) {
            $params['doljnost_id'] = $positionId;
        }
        if (!empty($dopInfo)) {
            $params['dop_info'] = $dopInfo;
        }
        $sql = sprintf("UPDATE %s SET ", $this::getTableName());
        foreach ($params as $key => $value) {
            $sql .= " {$key} = '{$value}',";
        }
        $sql = trim($sql, ',');
        $sql .= " WHERE id = :id";
        $stmt = $this->dbo->prepare($sql);
        $stmt->execute(['id' => $id]);
        return $this->findById($id);
    }
}
