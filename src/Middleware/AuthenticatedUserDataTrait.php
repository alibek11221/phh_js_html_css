<?php


namespace App\Middleware;


use App\Domain\AuthenticatedUser;
use App\Repository\ParticipantDirectorRepository;
use DI\Annotation\Inject;

trait AuthenticatedUserDataTrait
{
    /**
     * @Inject
     * @var ParticipantDirectorRepository
     */
    private $participantDirectorRepository;

    public function getAuthenticatedUser(): ?AuthenticatedUser
    {
        return $this->participantDirectorRepository->findAuthenticatedUsersData();
    }
}