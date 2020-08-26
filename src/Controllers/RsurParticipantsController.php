<?php


namespace App\Controllers;


use App\Repository\RsurParticipantRepository;
use App\Repository\RsurSubElementsRepository;

class RsurParticipantsController extends AbstractController
{

    /**
     * @var RsurParticipantRepository
     */
    private $participantRepository;
    /**
     * @var RsurSubElementsRepository
     */
    private $rsurSubElementsRepository;

    public function __construct(
            RsurParticipantRepository $participantRepository,
            RsurSubElementsRepository $rsurSubElementsRepository
    ) {
        $this->participantRepository = $participantRepository;
        $this->rsurSubElementsRepository = $rsurSubElementsRepository;
    }

    public function getParticipantsWithBadGradesByTest(int $testId): string
    {
        $razdelId = (int)$this->inputHandler->get('razdel')->getValue();
        $passed = (int)$this->inputHandler->get('passed')->getValue() === 1 ? true : false;
        $participants = $this->participantRepository->findBySchoolWithBadGradesByTest('0014', $testId, $razdelId);
        $params['particips'] = $participants;
        $params['passed'] = $passed;
        if ($passed) {
            $params['results'] = [];
        } else {
            $params['subelements'] = $this->rsurSubElementsRepository->findSubElementsByRazdelId($razdelId);
        }
        return $this->render('ParticipBlocks.html.twig', $params);
    }
}
