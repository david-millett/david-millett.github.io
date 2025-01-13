// Style
import styles from './Projects.module.scss'

// Components
import ProjectButtons from '../Buttons/ProjectButtons'

// Icons
import { FaJs, FaNodeJs, FaPython, FaReact, FaSass } from 'react-icons/fa'
import { DiMongodb, DiHtml5, DiCss3 } from 'react-icons/di'
import { SiExpress, SiDjango, SiPostgresql } from 'react-icons/si'

const portfolio = [
    {
        number: 4,
        name: 'plantshelf',
        link: 'https://plantshelf.netlify.app/',
        readme: 'https://github.com/david-millett/plantshelf-frontend',
        timeframe: '1 week',
        team: 'Solo',
        subtitle: 'A house plant collecting and care app',
        techstack: <><FaPython /> <SiDjango /> <SiPostgresql /> <FaSass /></>,
        picture: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        colour: '#d881cc',
    },
    {
        number: 3,
        name: 'Local Heroes',
        link: 'https://localheroesapp.netlify.app/',
        readme: 'https://github.com/david-millett/local-heroes-frontend',
        timeframe: '1 week',
        team: 'Group',
        subtitle: 'A volunteering portal for local communities',
        techstack: <><DiMongodb /> <SiExpress /> <FaReact /> <FaNodeJs /> <FaSass /></>,
        picture: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        colour: '#f1d388',
    },
    {
        number: 2,
        name: 'Boku no Style',
        link: 'https://boku-no-style.netlify.app/',
        readme: 'https://github.com/david-millett/boku-no-style',
        timeframe: '1 week',
        team: 'Solo',
        subtitle: 'A community for Japanese streetwear enthusiasts',
        techstack: <><DiMongodb /> <SiExpress /> <FaNodeJs /> <DiCss3 /></>,
        picture: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        colour: '#a0cdd1',
    },
    {
        number: 1,
        name: 'Minecreeper',
        link: 'https://david-millett.github.io/minecreeper/',
        readme: 'https://github.com/david-millett/minecreeper',
        timeframe: '5 days',
        team: 'Solo',
        subtitle: 'A horror-themed minesweeper with pixel art style',
        techstack: <><DiHtml5 /> <DiCss3 /> <FaJs /></>,
        picture: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        colour: '#d76e6e',
    },
]

const Projects = () => {
    return (
        <main className={styles.container}>
            <div className="headingIntro">
                <h1>Projects</h1>
            </div>
            {/* <p>Check out some of my projects, built using a range of technologies across the front and back ends.</p> */}
            <ul>
                {portfolio.map(project => {
                    return (
                        <li key={project.number} className={styles.project}>
                            <div className={styles.projectTitle}>
                                <h1 style={{color: project.colour}}>{project.name}</h1>
                                <h2 style={{color: project.colour}}>{project.techstack}</h2>
                            </div>
                            <h3>{project.subtitle}</h3>
                            <p>{project.team} project - {project.timeframe}</p>
                            <p className={styles.description}>{project.description}</p>
                            <ProjectButtons link={project.link} readme={project.readme} />
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Projects