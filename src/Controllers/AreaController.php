<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Repository\AreaBaseRepository;
use App\Repository\SchoolBaseRepository;
use Pecee\Http\Response;

class AreaController extends AbstractController
{
    /**
     * @var AreaBaseRepository
     */
    private $areaRepository;
    /**
     * @var SchoolBaseRepository
     */
    private $schoolRepository;

    /**
     * AreaController constructor.
     * @param AreaBaseRepository $areaRepository
     * @param SchoolBaseRepository $schoolRepository
     */
    public function __construct(AreaBaseRepository $areaRepository, SchoolBaseRepository $schoolRepository)
    {
        $this->areaRepository = $areaRepository;
        $this->schoolRepository = $schoolRepository;
    }

    /**
     * @return Response
     */
    public function index(): Response
    {
        return $this->json($this->areaRepository->findAll(), 200);
    }

    /**
     * @param int $code
     * @return Response
     */
    public function show(int $code): Response
    {
        return $this->json($this->areaRepository->find($code), 200);
    }

    /**
     * @param int $code
     * @return Response
     */
    public function showSchools(int $code): Response
    {
        return $this->json($this->schoolRepository->getByAreaCode($code), 200);
    }
}
