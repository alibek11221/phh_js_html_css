<?php

declare(strict_types=1);

namespace App\Controllers;


use App\Domain\Dialog;
use App\Domain\DialogParticipant;
use App\Repository\DialogsRepository;
use App\Repository\ParticipantDirectorBaseRepository;
use App\Repository\VacancyResponseBaseRepository;
use Pecee\SimpleRouter\SimpleRouter;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class VacancyResponseController extends AbstractController
{
    /**
     * @var VacancyResponseBaseRepository
     */
    private $vacancyResponseRepository;
    /**
     * @var DialogsRepository
     */
    private $dialogsRepository;
    /**
     * @var ParticipantDirectorBaseRepository
     */
    private $participantDirectorRepository;

    /**
     * VacancyResponseController constructor.
     * @param VacancyResponseBaseRepository $vacancyResponseRepository
     * @param DialogsRepository $dialogsRepository
     * @param ParticipantDirectorBaseRepository $participantDirectorRepository
     */
    public function __construct(
            VacancyResponseBaseRepository $vacancyResponseRepository,
            DialogsRepository $dialogsRepository,
            ParticipantDirectorBaseRepository $participantDirectorRepository
    ) {
        $this->vacancyResponseRepository = $vacancyResponseRepository;
        $this->dialogsRepository = $dialogsRepository;
        $this->participantDirectorRepository = $participantDirectorRepository;
    }

    public function create()
    {
        $vacancyId = (int)$this->inputHandler->post('vid')->getValue();
        if ($this->respondedAlready(SimpleRouter::request()->user->id, $vacancyId)) {
            return $this->invalidRequest(407, 'Вы уже отправили отклик на данную вакансию');
        }
        $responseDate = time();
        $responseComment = $this->inputHandler->post('comment')->getValue();
        $responseDay = date("d.m.Y");
        SimpleRouter::response()->httpCode(201);
        return json_encode(
                $this->vacancyResponseRepository->saveResponse(
                        $vacancyId,
                        SimpleRouter::request()->user->id,
                        $responseDate,
                        $responseComment,
                        $responseDay
                )
        );
    }

    private function respondedAlready(int $userId, int $vacancyId): bool
    {
        return $this->vacancyResponseRepository->countOfResponsesWith($userId, $vacancyId) > 0;
    }

    /**
     * @param int $id
     * @return string
     */
    public function delete(int $id): string
    {
        return (string)$this->vacancyResponseRepository->delete($id);
    }

    /**
     * @param int $responseId
     */
    public function accept(int $responseId): void
    {
        $teacherId = $this->vacancyResponseRepository->findById($responseId)['user_id'];
        $teacher = $this->participantDirectorRepository->findUserData($teacherId);
        $user = SimpleRouter::request()->user;
        $this->vacancyResponseRepository->setAccepted($responseId);
        $this->dialogsRepository->save(new Dialog($responseId, $user, $teacher));
    }

    /**
     * @return string
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function showUsersResponses(): string
    {
        $params = [
                'responses' => $this->vacancyResponseRepository->findResponsesByUser(SimpleRouter::request()->user->id),
                'name' => SimpleRouter::request()->user->name
        ];
        return $this->render('Responses.html.twig', $params);
    }

    /**
     * @param int $responseId
     * @return string
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function getDialog(int $responseId): string
    {
        $user = SimpleRouter::request()->user;
        return $this->render(
                'Dialog.html.twig',
                [
                        'name' => $user->getName(),
                        'id' => $user->id,
                        'role' => $user->type,
                        'responseId' => $responseId
                ]
        );
    }
}
