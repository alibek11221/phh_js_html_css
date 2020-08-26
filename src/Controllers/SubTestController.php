<?php


namespace App\Controllers;


use App\Repository\RsurSubElementsRepository;
use App\Repository\RsurSubGeneratedTestsRepository;

class SubTestController extends AbstractController
{
    /**
     * @var RsurSubGeneratedTestsRepository
     */
    private $rsurSubGeneratedTestsRepository;
    /**
     * @var RsurSubElementsRepository
     */
    private $rsurSubElementsRepository;

    public function __construct(
            RsurSubGeneratedTestsRepository $rsurSubGeneratedTestsRepository,
            RsurSubElementsRepository $rsurSubElementsRepository
    ) {
        $this->rsurSubGeneratedTestsRepository = $rsurSubGeneratedTestsRepository;
        $this->rsurSubElementsRepository = $rsurSubElementsRepository;
    }

    public function saveResult(int $element): int
    {
        $particip = (int)$this->inputHandler->post('user')->getValue();
        $elements = $this->inputHandler->post('elements');
        $minsAndMaxs = $this->rsurSubElementsRepository->getMinsAndMaxs($element);
        return $this->rsurSubGeneratedTestsRepository->saveResult($elements, $particip, $minsAndMaxs, $element);
    }
}