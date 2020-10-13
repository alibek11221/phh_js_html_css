<?php

declare(strict_types=1);

namespace App\Controllers;


use App\Repository\PositionBaseRepository;
use Pecee\Http\Response;

class PositionController extends AbstractController
{
    /**
     * @var PositionBaseRepository
     */
    private $repository;

    /**
     * PositionController constructor.
     * @param PositionBaseRepository $repository
     */
    public function __construct(PositionBaseRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return Response
     */
    public function index(): Response
    {
        return $this->json($this->repository->findAll());
    }
}
