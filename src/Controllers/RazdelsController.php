<?php


namespace App\Controllers;


use App\Repository\ResurRazdelsRepos;
use App\Services\RazdelService;

class RazdelsController extends AbstractController
{
    /**
     * @var ResurRazdelsRepos
     */
    private $razdelsRepos;
    /**
     * @var RazdelService
     */
    private $razdelService;

    public function __construct(ResurRazdelsRepos $razdelsRepos, RazdelService $razdelService)
    {
        $this->razdelsRepos = $razdelsRepos;
        $this->razdelService = $razdelService;
    }

    public function getByTest(int $testId): string
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
        return $this->render('Razdels.html.twig', ['razdels' => $razdels, 'testid' => $testId]);
    }
}