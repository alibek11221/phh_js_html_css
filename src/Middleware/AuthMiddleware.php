<?php

declare(strict_types=1);

namespace App\Middleware;


use App\Core\Routes;
use Pecee\Http\Middleware\IMiddleware;
use Pecee\Http\Request;
use Pecee\SimpleRouter\SimpleRouter;

class AuthMiddleware implements IMiddleware
{

    use AuthenticatedUserDataTrait;
    /**
     * {@inheritDoc}
     */
    public function handle(Request $request): void
    {
        $request->user = $this->getAuthenticatedUser();
        if ($request->user === null) {
            SimpleRouter::response()->redirect(Routes::NOT_FOUND, 301);
        }
    }
}