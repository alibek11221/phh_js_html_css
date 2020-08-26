<?php


namespace App\Repository;


use App\Config\TableNames;
use App\Core\Dbo;

class RsurTestsRepository extends AbstractRepository
{

    /**
     * @var ResurRazdelsRepos
     */
    private $razdelsRepos;

    public function __construct(Dbo $dbo, ResurRazdelsRepos $razdelsRepos)
    {
        parent::__construct($dbo);
        $this->razdelsRepos = $razdelsRepos;
    }

    final public static function getTableName(): string
    {
        return TableNames::RSUR['tests'];
    }


    public function findTestByYearSubjectAndType(int $year, int $subject, int $type): array
    {
        $sql = sprintf(
                'SELECT * FROM %s WHERE rsur_subject_code = :subject AND rsur_years_id = :year AND rsur_test_type_id = :type',
                $this::getTableName()
        );
        $test = $this->getOne($sql, ['year' => $year, 'subject' => $subject, 'type' => $type]);
        $test['razdels'] = $this->razdelsRepos->findByTestId($test['id']);
        return $test;
    }
}
