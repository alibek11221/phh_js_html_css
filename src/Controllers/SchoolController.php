<?php

declare(strict_types=1);

namespace App\Controllers;


use App\Repository\SchoolRepository;
use DI\Annotation\Injectable;
use Pecee\Http\Response;

/**
 * Class SchoolController
 * @package App\Controllers
 * @Injectable(lazy=true)
 */
class SchoolController extends AbstractController
{
    /**
     * @var SchoolRepository
     */
    private $repository;

    /**
     * SchoolController constructor.
     * @param SchoolRepository $repository
     */
    public function __construct(SchoolRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(): Response
    {
        return $this->json($this->repository->findAll());
    }


    public function show(string $id): Response
    {
        return $this->json($this->repository->findById($id));
    }

}