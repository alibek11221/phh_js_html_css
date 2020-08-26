<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Repository\AreaRepository;
use App\Repository\SchoolRepository;
use Pecee\Http\Response;

class AreaController extends AbstractController
{
    /**
     * @var AreaRepository
     */
    private $areaRepository;
    /**
     * @var SchoolRepository
     */
    private $schoolRepository;

    /**
     * AreaController constructor.
     * @param AreaRepository $areaRepository
     * @param SchoolRepository $schoolRepository
     */
    public function __construct(AreaRepository $areaRepository, SchoolRepository $schoolRepository)
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
