<?php

declare(strict_types=1);

namespace App\Controllers;


use App\Repository\SchoolBaseRepository;
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
     * @var SchoolBaseRepository
     */
    private $repository;

    /**
     * SchoolController constructor.
     * @param SchoolBaseRepository $repository
     */
    public function __construct(SchoolBaseRepository $repository)
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