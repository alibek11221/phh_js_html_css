<?php


namespace App\Repository;


use App\Config\TableNames;
use App\Core\Dbo;

class ResurRazdelsRepos extends AbstractRepository
{
    /**
     * @var RsurElementsRepository
     */
    private $elementsRepository;
    /**
     * @var RsurSubElementsRepository
     */
    private $rsurSubElementsRepository;

    public function __construct(
            Dbo $dbo,
            RsurElementsRepository $elementsRepository,
            RsurSubElementsRepository $rsurSubElementsRepository
    ) {
        parent::__construct($dbo);
        $this->elementsRepository = $elementsRepository;
        $this->rsurSubElementsRepository = $rsurSubElementsRepository;
    }

    public function findByTestId(int $testId): array
    {
        $sql = sprintf('SELECT * FROM %s WHERE rsur_test_id = :testId', $this::getTableName());
        return $this->getAll($sql, ['testId' => $testId]);
    }

    public static function getTableName(): string
    {
        return TableNames::RSUR['razdels'];
    }
}