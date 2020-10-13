<?php

declare(strict_types=1);

namespace App\Controllers;


use App\Core\Routes;
use App\Middleware\AuthenticatedUserDataTrait;
use App\Repository\RsurElementseRepository;
use App\Repository\RsurYearsRepository;
use App\Repository\SchoolBaseRepository;
use App\Services\RazdelService;
use App\Services\ResultService;
use Pecee\SimpleRouter\SimpleRouter;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class IndexController extends AbstractController
{
    use AuthenticatedUserDataTrait;

    /**
     * @var SchoolBaseRepository
     */
    private $schoolRepository;
    /**
     * @var RsurYearsRepository
     */
    private $rsurYearsRepository;

    /**
     * @var RazdelService
     */
    private $razdelService;
    /**
     * @var RsurElementseRepository
     */
    private $elementsRepository;
    /**
     * @var ResultService
     */
    private $resultService;

    public function __construct(
            SchoolBaseRepository $schoolRepository,
            RsurYearsRepository $rsurYearsRepository,
            RazdelService $razdelService,
            RsurElementseRepository $elementsRepository,
            ResultService $resultService
    ) {
        $this->schoolRepository = $schoolRepository;
        $this->rsurYearsRepository = $rsurYearsRepository;
        $this->razdelService = $razdelService;
        $this->elementsRepository = $elementsRepository;
        $this->resultService = $resultService;
    }

    /**
     * @return string
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function index(): string
    {
        return $this->render('Login.html.twig', ['baseroute' => Routes::BASE_ROUTE]);
    }

    public function login(): void
    {
        $val = (int)input('exp', 0);
        if ($val === 1) {
            $_SESSION['id'] = "1251";
            $_SESSION['work'] = '2';
            redirect(url('director')->getPath());
        } elseif ($val === 2) {
            $_SESSION['id'] = "1253";
            $_SESSION['work'] = '1';
            redirect(url('teacher')->getPath());
        } elseif ($val === 3) {
            redirect(url('rsur_card')->getPath());
        } elseif ($val === 4) {
            redirect(url('rsur_teacher')->getPath());
        }
    }

    /**
     * @return string
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function teacher(): string
    {
        return $this->render('Teacher.html.twig', []);
    }

    /**
     * @return string
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function director(): string
    {
        $params['school'] = $this->schoolRepository->findById(SimpleRouter::request()->user->schoolid);
        return $this->render('Director.html.twig', $params);
    }

    /**
     * @return string
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function notFound(): string
    {
        return $this->render('404.html.twig', []);
    }

    public function card(): string
    {
        $tests = $this->rsurYearsRepository->findAllYearsWithEnteringTests();
        return $this->render('Card.html.twig', ['tests' => $tests]);
    }

    public function teacherCard(): string
    {
        $tests = $this->resultService->wrokFlow("1015");
        return $this->render('RsurTeacherSide.html.twig', ['tests' => $tests]);
    }
}
