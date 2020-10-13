<?php

declare(strict_types=1);

namespace App\Controllers;


use App\Repository\ParticipantDirectorBaseRepository;
use App\Repository\VacancyBaseRepository;
use App\Repository\VacancyResponseBaseRepository;
use Pecee\Http\Response;
use Pecee\SimpleRouter\SimpleRouter;

class VacancyController extends AbstractController
{
    /**
     * @var VacancyBaseRepository
     */
    private $vacancyRepository;
    /**
     * @var VacancyResponseBaseRepository
     */
    private $vacancyResponseRepository;
    /**
     * @var ParticipantDirectorBaseRepository
     */


    /**
     * VacancyController constructor.
     * @param VacancyBaseRepository $vacancyRepository
     * @param VacancyResponseBaseRepository $vacancyResponseRepository
     */
    public function __construct(
            VacancyBaseRepository $vacancyRepository,
            VacancyResponseBaseRepository $vacancyResponseRepository
    ) {
        $this->vacancyRepository = $vacancyRepository;
        $this->vacancyResponseRepository = $vacancyResponseRepository;
    }

    /**
     * @return Response
     */
    public function showSorted(): Response
    {
        $areaCode = (int)$this->inputHandler->get('ac')->getValue();
        $schoolId = (string)$this->inputHandler->get('schid')->getValue();
        $positionId = (int)$this->inputHandler->get('pid')->getValue();
        $payment['min'] = (int)$this->inputHandler->get('pmin')->getValue();
        $payment['max'] = (int)$this->inputHandler->get('pmax')->getValue();
        if ($payment['min'] === 0 && $payment['max'] === 0) {
            $payment = null;
        }
        $experienceId = (int)$this->inputHandler->get('staid')->getValue();
        $offset = (int)$this->inputHandler->get('page')->getValue();
        return $this->json(
                $this->vacancyRepository->findBy(
                        $areaCode,
                        $schoolId,
                        $positionId,
                        $payment,
                        $experienceId,
                        $offset * 9
                )
        );
    }

    /**
     * @return Response
     */
    public function showBySchool(): Response
    {
        $vacancies = $this->vacancyRepository->findBySchoolId(SimpleRouter::request()->user->schoolid);
        foreach ($vacancies as &$vacancy) {
            $vacancy['resp'] = $this->vacancyResponseRepository->findByVacancyId((int)$vacancy['id']);
        }
        return $this->json($vacancies);
    }

    /**
     * @param int $id
     * @return string
     */
    public function delete(int $id): string
    {
        return (string)$this->vacancyRepository->delete($id);
    }

    /**
     * @return Response
     */
    public function create(): Response
    {
        $positionId = (int)$this->inputHandler->post('pid')->getValue();
        if ($this->vacancyExists($positionId, SimpleRouter::request()->user->schoolid)) {
            return $this->invalidRequest(406, 'Данная вакансия уже существует');
        }
        $experienceId = (int)$this->inputHandler->post('staid')->getValue();
        $paymentAmount = $this->inputHandler->post('payment')->getValue(
        ) === null ? 'no' : (int)$this->inputHandler->post('payment')->getValue();
        $dopInfo = $this->inputHandler->post('dopinfo')->getValue();
        $dateInsert = date("d.m.Y");
        if ($positionId !== 0 && $experienceId !== 0) {
            $vacancy = $this->vacancyRepository->saveVacancy(
                    $positionId,
                    $paymentAmount,
                    $experienceId,
                    $dopInfo,
                    SimpleRouter::request()->user->id,
                    SimpleRouter::request()->user->schoolid,
                    (int)SimpleRouter::request()->user->areas,
                    $dateInsert
            );
            $vacancy['resp'] = [];
            return $this->json($vacancy);
        }
        return $this->invalidRequest();
    }

    /**
     * @param int $positionId
     * @param string $schoolId
     * @return bool
     */
    public function vacancyExists(
            int $positionId,
            string $schoolId
    ): bool {
        return $this->vacancyRepository->countOfVacanciesWith($positionId, $schoolId) > 0;
    }

    /**
     * @param int $id
     * @return Response
     */
    public function update(int $id): Response
    {
        $params = json_decode(file_get_contents("php://input"), true);
        $paymentValue = $params['payment'];
        $positionId = $params['pid'];
        $experienceId = $params['staid'];
        $dopInfo = $params['dopinfo'];
        if ($positionId !== null && $this->vacancyExists((int)$positionId, SimpleRouter::request()->user->schoolid)) {
            return $this->invalidRequest(406, "Такая вакансия уже существует");
        }
        $vacancy = $this->vacancyRepository->updateVacancy(
                $id,
                $positionId,
                (int)$paymentValue,
                (int)$experienceId,
                $dopInfo
        );
        $vacancy['resp'] = [];
        return $this->json($vacancy, 200);
    }

    public function showResponses(int $id): Response
    {
        return $this->json($this->vacancyResponseRepository->findByVacancyId($id));
    }
}
