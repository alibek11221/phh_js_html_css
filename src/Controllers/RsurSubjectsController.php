<?php


namespace App\Controllers;


use App\Repository\RsurSubjectsRepository;
use Pecee\Http\Response;

class RsurSubjectsController extends AbstractController
{
    /**
     * @var RsurSubjectsRepository
     */
    private $rsurSubjectsRepository;

    /**
     * RsurSubjectsController constructor.
     * @param RsurSubjectsRepository $rsurSubjectsRepository
     */
    public function __construct(RsurSubjectsRepository $rsurSubjectsRepository)
    {
        $this->rsurSubjectsRepository = $rsurSubjectsRepository;
    }

    /**
     * @return Response
     */
    public function index(): Response
    {
        return $this->json($this->rsurSubjectsRepository->findAll());
    }
}