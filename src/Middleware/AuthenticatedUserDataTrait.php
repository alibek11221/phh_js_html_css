<?php


namespace App\Middleware;


use App\Domain\AuthenticatedUser;
use App\Repository\ParticipantDirectorBaseRepository;
use DI\Annotation\Inject;

trait AuthenticatedUserDataTrait
{
    /**
     * @Inject
     * @var ParticipantDirectorBaseRepository
     */
    private $participantDirectorRepository;

    public function getAuthenticatedUser(): ?AuthenticatedUser
    {
        return $this->participantDirectorRepository->findAuthenticatedUsersData();
    }
}