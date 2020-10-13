<?php


namespace App\Services;


use App\Repository\RsurRazdelsRepos;
use App\Repository\RsurResultsBaseRepository;

class ResultService
{
    public const FAIL = 2;
    public const PASS = 5;

    /**
     * @var RsurResultsBaseRepository
     */
    private $rsurResultsBaseRepository;

    /**
     * @var RazdelService
     */
    private $razdelService;
    /**
     * @var RsurRazdelsRepos
     */
    private $razdelsRepos;
    /**
     * @var IntermService
     */
    private $intermService;


    public function __construct(
            RsurResultsBaseRepository $rsurResultsBaseRepository,
            RazdelService $razdelService,
            RsurRazdelsRepos $razdelsRepos,
            IntermService $intermService
    ) {
        $this->rsurResultsBaseRepository = $rsurResultsBaseRepository;
        $this->razdelService = $razdelService;
        $this->razdelsRepos = $razdelsRepos;
        $this->intermService = $intermService;
    }

    public function wrokFlow(string $participCode): array
    {
        return $this->getTestResults($participCode);
    }

    private function getTestResults(string $participCode): array
    {
        $results = $this->rsurResultsBaseRepository->getTestInfoByuser($participCode);
        foreach ($results as &$result) {
            $result['razdels'] = $this->razdelsRepos->findByTestIdForTeacher($result['test_id']);
            foreach ($result['razdels'] as &$razdel) {
                $razdel['result']['grade'] = $this->razdelService->getGrade($razdel['id'], $participCode);
                $razdel['result']['elements'] = $this->razdelService->getResultsForTeacherSide(
                        $participCode,
                        $razdel['id']
                );
                if ($result['test_grade'] == self::FAIL && $razdel['result']['grade'] == self::FAIL) {
                    $razdel['result']['intermediate'] = $this->intermService->getIntermediateRazdelResults(
                            $result['test_id'],
                            $razdel['id'],
                            $participCode
                    );
                }
            }
        }
        return $results;
    }

}