<?php


namespace App\Repository;


use App\Config\StoredDataTypes;
use App\Config\TableNames;
use App\Core\Dbo;
use App\Services\RazdelService;

class RsurParticipantRepository extends AbstractRepository
{
    protected $primary = 'code';
    protected $isSoftDelete = true;
    protected $actualColumn = 'actualcode';
    protected $actualValue = 1;
    protected $archiveValue = 0;
    /**
     * @var RazdelService
     */
    private $razdelService;

    public function __construct(Dbo $dbo, RazdelService $razdelService)
    {
        parent::__construct($dbo);
        $this->razdelService = $razdelService;
    }

    public function findBySchoolWithBadGradesByTest(string $schoolId, int $testId, int $razdelId): array
    {
        $sql = sprintf(
                "SELECT code,
                               surname,
                               name,
                               secondname
                FROM %s AS rp
                         JOIN %s rr ON rr.rsur_particip_code = rp.code
                         JOIN %s rt on rr.test_id = rt.id
                WHERE rp.school_id = :schoolid
                  AND rt.id = :testid
                  AND rr.grade = 2
                  AND rt.actual = %d
                  AND rp.actualcode = %d",
                $this::getTableName(),
                TableNames::RSUR['results'],
                TableNames::RSUR['tests'],
                StoredDataTypes::IS_ACTUAL,
                StoredDataTypes::IS_ACTUAL
        );
        $particips = $this->getMany($sql, ['schoolid' => $schoolId, 'testid' => $testId]);
        $output = [];
        foreach ($particips as $particip) {
            if ($this->razdelService->GetGrade($razdelId, (int)$particip['code']) === 2) {
                $output[] = $particip;
            }
        }
        return $output;
    }

    final public static function getTableName(): string
    {
        return TableNames::RSUR['participants'];
    }


}
