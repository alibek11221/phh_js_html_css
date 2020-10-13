<?php


namespace App\Repository;


use App\Config\TableNames;
use App\Core\Dbo;

class RsurElementseRepository extends AbstractBaseRepository
{
    protected $isSoftDelete = true;
    /**
     * @var RsurSubElementsBaseRepository
     */
    private $rsurSubElementsRepository;

    public function __construct(Dbo $dbo, RsurSubElementsBaseRepository $rsurSubElementsRepository)
    {
        parent::__construct($dbo);
        $this->rsurSubElementsRepository = $rsurSubElementsRepository;
    }

    public function getElementsByRazdelWithGrades(int $razdelId, int $participId): array
    {
        $sql = sprintf(
                'SELECT re.id, rgt.grade
                FROM %s re
                         JOIN %s rgt on re.id = rgt.rsur_element_id
                WHERE rgt.rsur_particip_code = :particip
                  AND re.razdel_id = :razdel',
                $this::getTableName(),
                TableNames::RSUR['generated']
        );
        return $this->getMany($sql, ['particip' => $participId, 'razdel' => $razdelId]);
    }

    public static function getTableName(): string
    {
        return TableNames::RSUR['elements'];
    }

    public function getElementsByRazdelWithGradesForReport(int $razdelId, string $participId): array
    {
        $sql = sprintf(
                'SELECT re.id, re.name, re.actual, rgt.grade, rgt.mark
                FROM %s re
                         JOIN %s rgt on re.id = rgt.rsur_element_id
                WHERE rgt.rsur_particip_code = :particip
                  AND re.razdel_id = :razdel',
                $this::getTableName(),
                TableNames::RSUR['generated']
        );
        return $this->getMany($sql, ['particip' => $participId, 'razdel' => $razdelId]);
    }

    public function getElementsByRazdel(int $razdelId): array
    {
        $sql = sprintf('SELECT * FROM %s WHERE razdel_id = :razdel', $this::getTableName());
        $elements = $this->getMany($sql, ['razdel' => $razdelId]);
        foreach ($elements as &$element) {
            $element['subelements'] = $this->rsurSubElementsRepository->findSubElementsByElementId((int)$element['id']);
        }
        unset($element);
        return $elements;
    }
}