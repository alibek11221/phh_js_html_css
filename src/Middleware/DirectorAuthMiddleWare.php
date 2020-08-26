<?php


namespace App\Middleware;


use App\Core\Routes;
use App\Domain\UserRoles;
use Pecee\Http\Middleware\IMiddleware;
use Pecee\Http\Request;
use Pecee\SimpleRouter\SimpleRouter;

class DirectorAuthMiddleWare implements IMiddleware
{
    use AuthenticatedUserDataTrait;

    /**
     * @inheritDoc
     */
    public function handle(Request $request): void
    {
        $request->user = $this->getAuthenticatedUser();
        if ($request->user->type !== UserRoles::DIRECTOR) {
            SimpleRouter::response()->redirect(Routes::NOT_FOUND, 301);
        }
    }
}