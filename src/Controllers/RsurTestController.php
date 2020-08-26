<?php


namespace App\Controllers;


use App\Repository\ResurRazdelsRepos;
use App\Repository\RsurElementsRepository;
use App\Repository\RsurGeneratedTestRepository;
use App\Repository\RsurResultsRepository;
use App\Repository\RsurSubElementsRepository;
use App\Repository\RsurSubResultsRepository;
use App\Repository\RsurTestsRepository;

class RsurTestController extends AbstractController
{
    /**
     * @var RsurTestsRepository
     */
    private $rsurTestsRepository;
    /**
     * @var RsurElementsRepository
     */
    private $rsurElementsRepository;
    /**
     * @var RsurResultsRepository
     */
    private $rsurResultsRepository;
    /**
     * @var RsurSubElementsRepository
     */
    private $rsurSubElementsRepository;
    /**
     * @var RsurSubResultsRepository
     */
    private $rsurSubResultsRepository;
    /**
     * @var RsurGeneratedTestRepository
     */
    private $generatedTestRepository;
    /**
     * @var ResurRazdelsRepos
     */
    private $razdelsRepos;

    public function __construct(
            RsurTestsRepository $rsurTestsRepository,
            RsurElementsRepository $rsurElementsRepository,
            RsurResultsRepository $rsurResultsRepository,
            RsurSubElementsRepository $rsurSubElementsRepository,
            RsurSubResultsRepository $rsurSubResultsRepository,
            RsurGeneratedTestRepository $generatedTestRepository,
            ResurRazdelsRepos $razdelsRepos
    ) {
        $this->rsurTestsRepository = $rsurTestsRepository;
        $this->rsurElementsRepository = $rsurElementsRepository;
        $this->rsurResultsRepository = $rsurResultsRepository;
        $this->rsurSubElementsRepository = $rsurSubElementsRepository;
        $this->rsurSubResultsRepository = $rsurSubResultsRepository;
        $this->generatedTestRepository = $generatedTestRepository;
    }

    public function getTestsAndElements(): string
    {
        $year = (int)$this->inputHandler->get('year')->getValue();
        $subject = (int)$this->inputHandler->get('subject')->getValue();
        $particip = (int)$this->inputHandler->get('particip')->getValue();

        $test['incoming'] = $this->rsurTestsRepository->findTestByYearSubjectAndType($year, $subject, 1);

        $test['out'] = $this->rsurTestsRepository->findTestByYearSubjectAndType($year, $subject, 2);

        $test['particip'] = $particip;

        return $this->render('Blocks.html.twig', ['test' => $test]);
    }
}
