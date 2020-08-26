<?php


namespace App\Middleware;


use App\Core\Routes;
use Pecee\Http\Middleware\IMiddleware;
use Pecee\Http\Request;
use Pecee\SimpleRouter\SimpleRouter;

class ApiMiddleWare implements IMiddleware
{

    /**
     * @inheritDoc
     */
    public function handle(Request $request): void
    {
        if (!$request->isAjax()) {
            SimpleRouter::response()->redirect(url(''));
        }
    }
}
