<?php


namespace App\Controllers;


use App\Repository\RsurIntermediateSubElementResultsRepository;
use Exception;

class RsurIntermediateTestsController extends AbstractController
{
    /**
     * @var RsurIntermediateSubElementResultsRepository
     */
    private $rsurIntermediateTestsRepository;

    public function __construct(RsurIntermediateSubElementResultsRepository $rsurIntermediateTestsRepository)
    {
        $this->rsurIntermediateTestsRepository = $rsurIntermediateTestsRepository;
    }

    public function saveResult(): string
    {
        $particip = (int)$this->inputHandler->post('particip')->getValue();
        $razdel = (int)$this->inputHandler->post('razdel')->getValue();
        $test = (int)$this->inputHandler->post('test')->getValue();
        $marks = (array)$_POST['marks'];
        try {
            $this->rsurIntermediateTestsRepository->saveResult($particip, $razdel, $marks, $test);
        } catch (Exception $e) {
            return $this->invalidRequest(400, $e->getMessage());
        }
        return $this->json(['success' => true]);
    }
}