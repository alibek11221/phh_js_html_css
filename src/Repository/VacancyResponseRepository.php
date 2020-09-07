<?php

declare(strict_types=1);

namespace App\Repository;

use App\Config\TableNames;
use DI\Annotation\Injectable;

/**
 * Class VacancyResponseRepository
 * @package App\Repository
 * @Injectable(lazy=true)
 */
class VacancyResponseRepository extends AbstractRepository
{
    public function findById(int $id): array
    {
        $query = sprintf("SELECT * FROM %s WHERE id = :id", self::getTableName());
        $stmt = $this->dbo->prepare($query);
        $stmt->execute(['id' => $id]);
        return $stmt->fetch();
    }

    final public static function getTableName(): string
    {
        return TableNames::VACANCY_RESPONSES;
    }

    public function findByVacancyId($vacancyId): array
    {
        $query = sprintf(
                "SELECT vr.id      AS response_id,
                               vr.response_day,
                               pd.id      AS prticip_id,
                               q.name     AS quality_name,
                               st.value   AS particip_staj,
                               a.name     AS area_name,
                               pd.birthday,
                               pd.dopinfo,
                               pd.doljnost,
                               pd.name,
                               pd.secondname,
                               pd.surname,
                               pd.telefon,
                               pd.email,
                               vr.response_comment,
                               vr.is_accepted
                        FROM %s vr
                                 JOIN %s pd ON pd.id = vr.user_id
                                 LEFT OUTER JOIN %s a ON pd.areas = a.Code
                                 LEFT OUTER JOIN %s st ON st.id = pd.staj
                                 LEFT OUTER JOIN %s q ON q.id = pd.qualificationid
                        WHERE vacancy_id = :id",
                $this::getTableName(),
                TableNames::PARTICIPANT_DIRECTOR,
                TableNames::AREA,
                TableNames::EXPERIENCE,
                TableNames::QUALIFICATION
        );
        $stmt = $this->dbo->prepare($query);
        $stmt->execute(['id' => $vacancyId]);
        return $stmt->fetchAll();
    }

    public function countOfResponsesWith(int $userId, int $vacancyId): int
    {
        $query = sprintf(
                "SELECT COUNT(*) FROM %s WHERE user_id = :userId AND vacancy_id = :vacancyId",
                $this::getTableName()
        );
        $stmt = $this->dbo->prepare($query);
        $stmt->execute([':userId' => $userId, 'vacancyId' => $vacancyId]);
        return $stmt->fetchColumn();
    }

    public function saveResponse(
            int $vacancyId,
            int $userId,
            int $responseDate,
            string $responseComment,
            string $responseDay
    ): int {
        $stmt = $this->dbo->prepare(
                sprintf(
                        "INSERT INTO %s(vacancy_id, user_id, response_date, response_comment, response_day) VALUES(:vid, :uid, :redate, :recomm, :rday)",
                        $this::getTableName()
                )
        );
        $stmt->execute(
                [
                        ':vid' => $vacancyId,
                        ':uid' => $userId,
                        ':redate' => $responseDate,
                        ':recomm' => $responseComment,
                        ':rday' => $responseDay
                ]
        );
        return (int)$this->dbo->lastInsertId();
    }

    public function setAccepted(int $responseId): void
    {
        $query = "UPDATE vacancy_responses SET is_accepted = 1 WHERE id = :id";
        $stmt = $this->dbo->prepare($query);
        $stmt->execute(['id' => $responseId]);
    }

    public function findResponsesByUser(int $userId): array
    {
        $stmt = $this->dbo->prepare(
                sprintf(
                        "SELECT vr.id,
                               response_comment,
                               response_day,
                               is_accepted,
                               dop_info,
                               zp as payment,
                               sch.name as school,
                               d.name as position,
                               value as expirience
                        FROM %s as vr
                        JOIN %s v on vr.vacancy_id = v.id
                        JOIN %s d on v.doljnost_id = d.id
                        JOIN %s s on v.staj_id = s.id
                        JOIN %s sch on v.schoolid = sch.id
                        WHERE user_id = :id",
                        self::getTableName(),
                        TableNames::VACANCY,
                        TableNames::POSITION,
                        TableNames::EXPERIENCE,
                        TableNames::SCHOOL
                )
        );
        $stmt->execute(['id' => $userId]);
        return $stmt->fetchAll();
    }
}