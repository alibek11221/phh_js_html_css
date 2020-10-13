<?php


namespace App\Services;


use App\Repository\RsurIntermediateElementResultsRepository;
use App\Repository\RsurIntermediateTestResultsRepository;

class IntermService
{
    /**
     * @var RsurIntermediateTestResultsRepository
     */
    private $intermediateTestResultsRepository;
    /**
     * @var RsurIntermediateElementResultsRepository
     */
    private $intermediateElementResultsRepository;

    public function __construct(
            RsurIntermediateTestResultsRepository $intermediateTestResultsRepository,
            RsurIntermediateElementResultsRepository $intermediateElementResultsRepository
    ) {
        $this->intermediateTestResultsRepository = $intermediateTestResultsRepository;
        $this->intermediateElementResultsRepository = $intermediateElementResultsRepository;
    }

    public function getIntermediateRazdelResults(int $testId, int $razdelid, string $participantCode): array
    {
        $testResults = $this->intermediateTestResultsRepository->getResultsForTeachrSide(
                $participantCode,
                $testId,
                $razdelid
        );
        $testResults['elements'] = $this->intermediateElementResultsRepository->getResultsForTeachrSide(
                $participantCode,
                $testId,
                $razdelid
        );
        return $testResults;
    }

}