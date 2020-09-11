<?php


namespace App\Controllers;


use App\Repository\RsurElementsRepository;
use App\Repository\RsurIntermediateElementResultsRepository;
use App\Repository\RsurIntermediateSubElementResultsRepository;
use App\Repository\RsurIntermediateTestResultsRepository;
use App\Repository\RsurParticipantRepository;

class RsurParticipantsController extends AbstractController
{

    /**
     * @var RsurParticipantRepository
     */
    private $participantRepository;
    /**
     * @var RsurElementsRepository
     */
    private $elementsRepository;
    /**
     * @var RsurIntermediateSubElementResultsRepository
     */
    private $intermediateSubElementResultsRepository;
    /**
     * @var RsurIntermediateTestResultsRepository
     */
    private $intermediateTestResultsRepository;
    /**
     * @var RsurIntermediateElementResultsRepository
     */
    private $intermediateElementResultsRepository;

    public function __construct(
            RsurParticipantRepository $participantRepository,
            RsurElementsRepository $elementsRepository,
            RsurIntermediateSubElementResultsRepository $intermediateSubElementResultsRepository,
            RsurIntermediateTestResultsRepository $intermediateTestResultsRepository,
            RsurIntermediateElementResultsRepository $intermediateElementResultsRepository
    ) {
        $this->participantRepository = $participantRepository;
        $this->elementsRepository = $elementsRepository;
        $this->intermediateSubElementResultsRepository = $intermediateSubElementResultsRepository;
        $this->intermediateTestResultsRepository = $intermediateTestResultsRepository;
        $this->intermediateElementResultsRepository = $intermediateElementResultsRepository;
    }

    public function getParticipantsWithBadGradesByTest(int $testId): string
    {
        $razdelId = (int)$this->inputHandler->get('razdel')->getValue();
        $passed = (int)$this->inputHandler->get('passed')->getValue() === 1;
        $participants = $this->participantRepository->findBySchoolWithBadGradesByTest('0014', $testId, $razdelId);
        $params['particips'] = $participants;
        $params['passed'] = $passed;
        if ($passed) {
            foreach ($params['particips'] as &$particip) {
                $particip['results']['razdel'] = $this->intermediateTestResultsRepository->getResult(
                        $particip['code'],
                        $testId,
                        $razdelId
                );
                $particip['results']['elements'] = $this->intermediateElementResultsRepository->getResult(
                        $particip['code'],
                        $testId,
                        $razdelId
                );
            }
            unset($particip);
        } else {
            foreach ($params['particips'] as &$particip) {
                if ($this->intermediateSubElementResultsRepository->resultExists(
                        (int)$particip['code'],
                        $razdelId,
                        $testId
                )) {
                    $particip['results'] = $this->intermediateSubElementResultsRepository->getResults(
                            (int)$particip['code'],
                            $razdelId,
                            $testId
                    );
                }
            }
            $params['elements'] = $this->elementsRepository->getElementsByRazdel($razdelId);
        }
        return $this->render('ParticipBlocks.html.twig', $params);
    }
}
