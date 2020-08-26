<?php


namespace App\Config;


class TableNames
{
    public const AREA = 'Areas';
    public const EXPERIENCE = 'staj';
    public const PARTICIPANT_DIRECTOR = 'Particips_Directors';
    public const POSITION = 'doljnost';
    public const QUALIFICATION = 'qualification';
    public const SCHOOL = 'schools';
    public const VACANCY = 'vacancy';
    public const VACANCY_RESPONSES = 'vacancy_responses';
    public const RSUR = [
            'tests' => 'rsur_tests',
            'subjects' => 'rsur_subjects',
            'razdels' => 'rsur_razdels',
            'elements' => 'rsur_elements',
            'generated' => 'rsur_generated_tests',
            'results' => 'rsur_results',
            'periods' => 'rsur_period',
            'participants' => 'rsur_particips',
            'tests_type' => 'rsur_tests_type',
            'sub_elements' => 'rsur_sub_elements',
            'sub_generated_test' => 'rsur_sub_generated_test',
            'sub_results' => 'rsur_sub_results',
            'years' => 'rsur_years'
    ];
}