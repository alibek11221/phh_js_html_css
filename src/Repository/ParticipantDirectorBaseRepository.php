<?php

declare(strict_types=1);

namespace App\Repository;

use App\Config\TableNames;
use App\Domain\AuthenticatedUser;
use App\Domain\User;
use DI\Annotation\Injectable;

/**
 * Class ParticipantDirectorRepository
 * @package App\Repository
 * @Injectable(lazy=true)
 */
class ParticipantDirectorBaseRepository extends AbstractBaseRepository
{

    public function findAuthenticatedUsersData(): ?AuthenticatedUser
    {
        $stmt = $this->dbo->prepare(sprintf("SELECT * FROM %s WHERE id = :id", $this::getTableName()));
        $stmt->execute([':id' => (int)$_SESSION['id']]);
        return $stmt->fetchObject(AuthenticatedUser::class);
    }

    /**
     * @return string
     */
    final public static function getTableName(): string
    {
        return TableNames::PARTICIPANT_DIRECTOR;
    }

    public function findUserData(int $id): ?User
    {
        $stmt = $this->dbo->prepare(sprintf("SELECT * FROM %s WHERE id = :id", $this::getTableName()));
        $stmt->execute([':id' => $id]);
        return $stmt->fetchObject(User::class);
    }
}