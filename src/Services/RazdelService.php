<?php


namespace App\Services;


use App\Repository\RsurElementseRepository;
use App\Repository\RsurRazdelsRepos;

class RazdelService
{
    /**
     * @var RsurElementseRepository
     */
    private $elementsRepository;
    /**
     * @var RsurRazdelsRepos
     */
    private $razdelsRepos;

    public function __construct(
            RsurElementseRepository $elementsRepository,
            RsurRazdelsRepos $razdelsRepos
    ) {
        $this->elementsRepository = $elementsRepository;
        $this->razdelsRepos = $razdelsRepos;
    }

    public function getGrade(int $razdelId, string $participId): int
    {
        $elements = $this->elementsRepository->getElementsByRazdelWithGrades($razdelId, $participId);
        return $this->calculateGrade($elements);
    }

    private function calculateGrade(array $elements): int
    {
        $all = count($elements);
        if ($all > 0) {
            $passed = 0;
            foreach ($elements as $element) {
                if ((int)$element['grade'] === 5) {
                    $passed++;
                }
            }
            $proc = round($passed / $all * 100);
            if ($proc >= 70) {
                return 5;
            }
            return 2;
        }
        return 0;
    }

    public function getRazdelsByTestForIntermediateTests(int $testId): array
    {
        $razdels = $this->razdelsRepos->findByTestId($testId);
        foreach ($razdels as &$razdel) {
            if (checkInRange($razdel['begin_date'], $razdel['end_date'], date('d.m.Y'))) {
                $razdel['enable'] = true;
                $razdel['passed'] = false;
            } elseif (isGone($razdel['begin_date'], date('d.m.Y'))) {
                $razdel['enable'] = true;
                $razdel['passed'] = true;
            } else {
                $razdel['enable'] = false;
                $razdel['passed'] = false;
            }
        }
        unset($razdel);
        return $razdels;
    }

    public function getResultsForTeacherSide(string $participCode, int $razdelId): array
    {
        return $this->elementsRepository->getElementsByRazdelWithGradesForReport($razdelId, $participCode);
    }

}