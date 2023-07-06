import GITHUB_SVG from 'resources/svg/qr_code/github.svg';
import LINKEDIN_SVG from 'resources/svg/qr_code/linkedin.svg';

import photo from 'resources/images/photo.jpeg';

import HTML_SVG from 'resources/svg/skills/HTML.svg';
import PHP_SVG from 'resources/svg/skills/PHP.svg';
import CSS_SVG from 'resources/svg/skills/CSS.svg';
import JAVASCRIPT_SVG from 'resources/svg/skills/Javascript.svg';
import TYPESCRIPT_SVG from 'resources/svg/skills/Typescript.svg';
import GIT_SVG from 'resources/svg/skills/Git.svg';
import COMPOSER_SVG from 'resources/svg/skills/Composer.svg';
import YARN_SVG from 'resources/svg/skills/Yarn.svg';
import NPM_SVG from 'resources/svg/skills/NPM.svg';
import DOCKER_SVG from 'resources/svg/skills/Docker.svg';
import ANSIBLE_SVG from 'resources/svg/skills/Ansible.svg';
import MERCURE_SVG from 'resources/svg/skills/Mercure.svg';
import RABBITMQ_SVG from 'resources/svg/skills/RabbitMQ.svg';
import REACT_SVG from 'resources/svg/skills/React.svg';
import ANGULAR_SVG from 'resources/svg/skills/Angular.svg';
import MUI_SVG from 'resources/svg/skills/MUI.svg';
import BOOTSTRAP_SVG from 'resources/svg/skills/Bootstrap.svg';
import SEMANTIC_SVG from 'resources/svg/skills/Semantic.svg';
import LESS_SVG from 'resources/svg/skills/LESS.svg';
import JQUERY_SVG from 'resources/svg/skills/jQuery.svg';
import SYMFONY_SVG from 'resources/svg/skills/Symfony.svg';
import APIPLATFORM_SVG from 'resources/svg/skills/ApiPlatform.svg';
import SYLIUS_SVG from 'resources/svg/skills/Sylius.svg';
import MYSQL_SVG from 'resources/svg/skills/MySQL.svg';
import MARIADB_SVG from 'resources/svg/skills/MariaDB.svg';
import MSSQL_SVG from 'resources/svg/skills/MsSQL.svg';
import FIREBIRD_SVG from 'resources/svg/skills/Firebird.svg';

import SOGEXIA_SVG from 'resources/svg/logo/Sogexia.svg';
import CNERTA_SVG from 'resources/svg/logo/Cnerta.svg';
import AERAULIQUE_SVG from 'resources/svg/logo/Aeraulique Construction.svg';
import INFINIT_SVG from 'resources/svg/logo/Infinit.svg';

export default {
    name: 'Florent TEDESCO',
    description: 'Web developer',
    status: null,
    tel: {
        icon: 'call',
        text: '(+1) 438 448-5350',
        url: 'tel:+14384485350',
    },
    email: {
        icon: 'alternate_email',
        text: 'tedesco.florent.1996@live.fr',
        url: 'mailto:tedesco.florent.1996@live.fr',
    },
    location: {
        icon: 'map',
        text: 'Québec',
        url: 'https://www.google.com/maps/place/Québec,+QC,+Canada',
    },
    linkedin: {
        image: LINKEDIN_SVG,
        url: 'https://www.linkedin.com/in/tedesco-florent',
    },
    github: {
        image: GITHUB_SVG,
        url: 'https://github.com/BigChicChicken',
    },
    about_me: {
        icon: 'comment',
        title: 'About me',
        photo,
        text: '@about_me',
    },
    career: {
        icon: 'work_history',
        title: 'Professional journey',
        data: [
            {
                company: 'Sogexia',
                name: 'IT engineer',
                logo: SOGEXIA_SVG,
                location: 'France',
                domain: 'Bank',
                date: {
                    begin: '2023-01',
                    end: '2023-06',
                },
                tasks: [...Array(8).keys()].map(
                    (key) => `@jobs.@sogexia.@tasks.${key}`
                ),
                skills: ['HTML', 'PHP', 'CSS', 'TypeScript', 'Angular'],
            },
            {
                company: 'Cnerta web',
                name: 'Web developer',
                logo: CNERTA_SVG,
                location: 'France',
                domain: 'Agronomy/Agrifood public institute',
                date: {
                    begin: '2021-01',
                    end: '2022-12',
                },
                tasks: [...Array(9).keys()].map(
                    (key) => `@jobs.@cnerta_web.@tasks.${key}`
                ),
                skills: [
                    'HTML',
                    'PHP',
                    'CSS',
                    'Javascript',
                    'MariaDB',
                    'Symfony',
                    'ApiPlatform',
                    'Sylius',
                    'React',
                    'MUI',
                    'Semantic',
                    'Less',
                    'Git',
                    'Composer',
                    'Yarn',
                    'NPM',
                    'Docker',
                    'Ansible',
                    'Mercure',
                ],
            },
            {
                company: 'Aéraulique Construction',
                name: 'Developer',
                logo: AERAULIQUE_SVG,
                location: 'France',
                domain: 'Sheet metal industry/Ventilation',
                date: {
                    begin: '2016-06',
                    end: '2021-01',
                },
                tasks: [...Array(11).keys()].map(
                    (key) => `@jobs.@aeraulique_construction.@tasks.${key}`
                ),
                skills: [
                    'HTML',
                    'PHP',
                    'CSS',
                    'Javascript',
                    'MariaDB',
                    'FireBird',
                    'Symfony',
                    'Composer',
                    'Yarn',
                    'RabbitMQ',
                ],
            },
            {
                company: 'Infin IT',
                name: 'Development internship',
                logo: INFINIT_SVG,
                location: 'France',
                domain: 'Communication',
                date: {
                    begin: '2015-01',
                    end: '2016-01',
                },
                tasks: [...Array(4).keys()].map(
                    (key) => `@jobs.@infin_it.@tasks.${key}`
                ),
                skills: [
                    'HTML',
                    'PHP',
                    'CSS',
                    'Javascript',
                    'MySQL',
                    'Bootstrap',
                    'jQuery',
                ],
            },
        ],
    },
    skills: {
        icon: 'code',
        title: 'Skills',
        data: [
            {
                category: 'Languages',
                items: [
                    { name: 'HTML', svg: HTML_SVG },
                    { name: 'PHP', svg: PHP_SVG },
                    { name: 'CSS', svg: CSS_SVG },
                    {
                        name: 'Javascript',
                        svg: JAVASCRIPT_SVG,
                    },
                    {
                        name: 'Typescript',
                        svg: TYPESCRIPT_SVG,
                    },
                ],
            },
            {
                category: 'Development tools',
                items: [
                    { name: 'Git', svg: GIT_SVG },
                    { name: 'Composer', svg: COMPOSER_SVG },
                    { name: 'Yarn', svg: YARN_SVG },
                    { name: 'NPM', svg: NPM_SVG },
                    { name: 'Docker', svg: DOCKER_SVG },
                    { name: 'Ansible', svg: ANSIBLE_SVG },
                    { name: 'Mercure', svg: MERCURE_SVG },
                    { name: 'RabbitMQ', svg: RABBITMQ_SVG },
                ],
            },
            {
                category: 'Framework - Front-End',
                items: [
                    { name: 'React', svg: REACT_SVG },
                    { name: 'Angular', svg: ANGULAR_SVG },
                    { name: 'MUI', svg: MUI_SVG },
                    {
                        name: 'Bootstrap',
                        svg: BOOTSTRAP_SVG,
                    },
                    { name: 'Semantic', svg: SEMANTIC_SVG },
                    { name: 'LESS', svg: LESS_SVG },
                    { name: 'jQuery', svg: JQUERY_SVG },
                ],
            },
            {
                category: 'Framework - Back-End',
                items: [
                    { name: 'Symfony', svg: SYMFONY_SVG },
                    {
                        name: 'ApiPlatform',
                        svg: APIPLATFORM_SVG,
                    },
                    { name: 'Sylius', svg: SYLIUS_SVG },
                ],
            },
            {
                category: 'Databases',
                items: [
                    { name: 'MySQL', svg: MYSQL_SVG },
                    { name: 'MariaDB', svg: MARIADB_SVG },
                    { name: 'MsSQL', svg: MSSQL_SVG },
                    { name: 'Firebird', svg: FIREBIRD_SVG },
                ],
            },
        ],
    },
    diplomas: {
        icon: 'history_edu',
        title: 'Diplomas',
        data: [
            {
                date: '2017-12',
                name: 'Licence Professionnelle',
                speciality:
                    "SIL, spécialité Système Intra/Internet pour l'Entreprise",
                equivalent: {
                    name: 'Baccalauréat',
                    speciality: "Sciences de l'informatique",
                },
            },
            {
                date: '2016-12',
                name: 'BTS',
                speciality:
                    'SIO, Solutions Logicielles et Applications Métiers',
                equivalent: {
                    name: 'DEC',
                    speciality: "Techniques de l'informatique",
                },
            },
            {
                date: '2014-12',
                name: 'Baccalauréat Technologique',
                speciality: "STI2D, Système d'Information et Numérique",
                equivalent: {
                    name: 'DEC',
                    speciality: 'Sciences informatiques et mathématiques',
                },
            },
        ],
    },
    equivalences: {
        icon: 'sync_alt',
        title: 'Equivalences',
    },
    recruitment: {
        icon: 'verified',
        title: 'Recruiter corner',
        text: '@recruitment',
        salary: {
            value: null,
            currency: '€',
            period: 'Year',
        },
    },
};
