<?php


namespace App\Controllers;


use App\Repository\RsurSubElementsRepository;

class RsurSubElementsController extends AbstractController
{
    /**
     * @var RsurSubElementsRepository
     */
    private $rsurSubElementsRepository;

    /**
     * RsurSubElementsController constructor.
     * @param RsurSubElementsRepository $rsurSubElementsRepository
     */
    public function __construct(
            RsurSubElementsRepository $rsurSubElementsRepository
    ) {
        $this->rsurSubElementsRepository = $rsurSubElementsRepository;
    }

    public function getSubelementsByElement(): string
    {
        $razdel = (int)$this->inputHandler->get('razdel')->getValue();
        $subElements = $this->rsurSubElementsRepository->findSubElementsByRazdelId($razdel);
        return $this->render('ElementInputs.html.twig', ['subelements' => $subElements,]);
    }

}