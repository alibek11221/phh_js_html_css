<?php


namespace App\Repository;


use App\Config\TableNames;

class RsurResultsBaseRepository extends AbstractBaseRepository
{

    public function getTestInfoByuser(string $participCode): array
    {
        $sql = sprintf(
                'SELECT rr.id              as result_id,
                               rsur_particip_code as particip_code,
                               rt.id              as test_id,
                               grade              as test_grade,
                               rs.code            as subject_code,
                               rs.name            as subject_name,
                               ry.id              as year_id,
                               ry.value           as year_value,
                               rtt.id             as test_type_id,
                               rtt.name           as test_type_name
                        FROM %s as rr
                                 JOIN %s rt on rr.test_id = rt.id
                                 JOIN %s rs on rs.code = rt.rsur_subject_code
                                 JOIN %s ry on rt.rsur_years_id = ry.id
                                 JOIN %s rtt on rt.rsur_test_type_id = rtt.id
                        WHERE rr.rsur_particip_code = :particip',
                $this::getTableName(),
                TableNames::RSUR['tests'],
                TableNames::RSUR['subjects'],
                TableNames::RSUR['years'],
                TableNames::RSUR['tests_type']
        );
        return $this->getMany($sql, ['particip' => $participCode]);
    }

    public static function getTableName(): string
    {
        return TableNames::RSUR['results'];
    }
}