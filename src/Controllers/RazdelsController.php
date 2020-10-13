<?php


namespace App\Controllers;


use App\Repository\RsurRazdelsRepos;
use App\Services\RazdelService;

class RazdelsController extends AbstractController
{
    /**
     * @var RsurRazdelsRepos
     */
    private $razdelsRepos;
    /**
     * @var RazdelService
     */
    private $razdelService;


    public function __construct(RsurRazdelsRepos $razdelsRepos, RazdelService $razdelService)
    {
        $this->razdelsRepos = $razdelsRepos;
        $this->razdelService = $razdelService;
    }

    public function getByTest(int $testId): string
    {
        $razdels = $this->razdelService->getRazdelsByTestForIntermediateTests($testId);
        return $this->render('Razdels.html.twig', ['razdels' => $razdels, 'testid' => $testId]);
    }

}