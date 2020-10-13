<?php


namespace App\Repository;


use App\Config\TableNames;

class RsurYearsRepository extends AbstractBaseRepository
{

    public static function getTableName(): string
    {
        return TableNames::RSUR['years'];
    }

    public function findAllYearsWithEnteringTests(): array
    {
        $query = sprintf(
                'SELECT ry.id   AS year_id,
                           value   AS year,
                           rt.id   AS test_id,
                           rs.code AS subject_code,
                           name    AS subject
                    FROM %s AS ry
                             JOIN %s rt ON ry.id = rt.rsur_years_id
                             JOIN %s rs ON rs.code = rt.rsur_subject_code
                    WHERE rt.rsur_test_type_id = 1',
                $this::getTableName(),
                TableNames::RSUR['tests'],
                TableNames::RSUR['subjects']
        );

        return $this->getMany($query, []);
    }
}