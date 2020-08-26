<?php


namespace App\Controllers;


use App\Domain\DialogParticipant;
use App\Repository\DialogsRepository;
use App\Repository\ParticipantDirectorRepository;
use App\Repository\VacancyResponseRepository;
use Pecee\SimpleRouter\SimpleRouter;

class DialogsController extends AbstractController
{
    /**
     * @var DialogsRepository
     */
    private $dialogsRepository;
    /**
     * @var ParticipantDirectorRepository
     */
    private $participantDirectorRepository;
    /**
     * @var VacancyResponseRepository
     */
    private $vacancyResponseRepository;


    public function __construct(
            DialogsRepository $dialogsRepository,
            ParticipantDirectorRepository $participantDirectorRepository,
            VacancyResponseRepository $vacancyResponseRepository
    ) {
        $this->dialogsRepository = $dialogsRepository;
        $this->participantDirectorRepository = $participantDirectorRepository;
        $this->vacancyResponseRepository = $vacancyResponseRepository;
    }

//    public function accept(int $vacancyId, int $teacherId): void
//    {
//        $teacher = $this->participantDirectorRepository->findAuthenticatedUsersData($teacherId);
//        $responseId = (int)$this->inputHandler->post('respid')->getValue();
//        $user = SimpleRouter::request()->user;
//        $this->vacancyResponseRepository->setAccepted($responseId);
//        $this->dialogsRepository->save(
//                $vacancyId,
//                SimpleRouter::request()->user,
//                $th
//        );
//        return $this->render()
//    }

    public function getDialogsByParticipant(int $teacherId): string
    {
        $dialogId = $this->dialogsRepository->findInterlocutorsByParticipantId(
                SimpleRouter::request()->user->id,
                $teacherId
        );
        $params = [
                'id' => SimpleRouter::request()->user->id,
                'roomid' => $dialogId,
                'type' => SimpleRouter::request()->user->type
        ];
        return $this->render('dialog.html.twig', $params);
    }
}