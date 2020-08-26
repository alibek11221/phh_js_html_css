<?php

declare(strict_types=1);

namespace App\Controllers;


use App\Core\Routes;
use DI\Annotation\Inject;
use Pecee\Http\Input\InputHandler;
use Pecee\Http\Response;
use Pecee\SimpleRouter\SimpleRouter;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use Twig\Extension\DebugExtension;

abstract class AbstractController
{
    /**
     * @Inject
     * @var InputHandler
     */
    protected $inputHandler;

    /**
     * @Inject
     * @var Environment
     */
    private $view;

    protected function json(array $data, int $httpResponseCode = 200): Response
    {
        SimpleRouter::response()->httpCode(200);
        SimpleRouter::response()->json($data, JSON_PRETTY_PRINT, 512);
        return SimpleRouter::response();
    }

    protected function invalidRequest(int $code = 400, string $message = 'Bad request'): Response
    {
        SimpleRouter::response()->httpCode($code);
        SimpleRouter::response()->json(['reason' => $message]);
        return SimpleRouter::response();
    }


    /**
     * @param string $template
     * @param array $params
     * @return string
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    protected function render(string $template, array $params): string
    {
        $baseroute = Routes::BASE_ROUTE === '/' ? Routes::BASE_ROUTE : '/' . Routes::BASE_ROUTE . '/';
        $this->view->addGlobal('baseroute', $baseroute);
        $this->view->enableDebug();
        $this->view->addExtension(new DebugExtension());
        return $this->view->load($template)->render($params);
    }
}
