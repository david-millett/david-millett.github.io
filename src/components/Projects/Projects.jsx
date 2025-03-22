// Style
import styles from './Projects.module.scss'

// Components
import ProjectButtons from '../Buttons/ProjectButtons'
import ReadMeButton from '../Buttons/ReadmeButton'

// Icons
import { FaJs, FaNodeJs, FaPython, FaReact, FaSass, FaFolderOpen } from 'react-icons/fa'
import { DiMongodb, DiHtml5, DiCss3 } from 'react-icons/di'
import { SiExpress, SiDjango, SiPostgresql } from 'react-icons/si'

// Images
import minecreeper from './minecreeper.png'
import bokunostyle from './bokunostyle.png'
import plantshelf from './plantshelf.png'
import localheroes from './localheroes.png'

const portfolio = [
    {
        number: 4,
        name: 'plantshelf',
        link: 'https://plantshelf.netlify.app/',
        readme: 'https://github.com/david-millett/plantshelf-frontend',
        timeframe: '1 week',
        team: 'Solo',
        subtitle: 'A house plant collecting and care app',
        techstack: [
            {icon: <FaPython />, text: 'Python'},
            {icon: <SiDjango />, text: 'Django'},
            {icon: <FaReact />, text: 'React'},
            {icon: <SiPostgresql />, text: 'PostgreSQL'},
            {icon: <FaSass />, text: 'Sass'},
        ],
        picture: plantshelf,
        description: "A full-stack app that allows users learn about different house plants and add them to a virtual shelf to track their collection. Designed to look like a bookshelf, this 'plant shelf' is dynamically generated based on how many plants the user owns. The app also tracks when each plant was last watered and, based on the plant's species, informs users when the next watering is due.",
        colour: '#ed57d1',
    },
    {
        number: 3,
        name: 'Local Heroes',
        link: 'https://localheroesapp.netlify.app/',
        readme: 'https://github.com/david-millett/local-heroes-frontend',
        timeframe: '1 week',
        team: 'Group',
        subtitle: 'A volunteering portal for local communities',
        techstack: [
            {icon: <DiMongodb />, text: 'MongoDB'},
            {icon: <SiExpress />, text: 'Express'},
            {icon: <FaReact />, text: 'React'},
            {icon: <FaNodeJs />, text: 'Node.js'},
            {icon: <FaSass />, text: 'Sass'},
        ],
        picture: localheroes,
        description: "Created as part of a group of three, Local Heroes is a community volunteering portal that allows users to post odd jobs and everyday tasks they need help with. Users can also create 'helper profiles' to showcase their skills and desire/availability to help.",
        colour: '#eace51',
    },
    {
        number: 2,
        name: 'Boku no Style',
        link: 'https://boku-no-style.netlify.app/',
        readme: 'https://github.com/david-millett/boku-no-style',
        timeframe: '1 week',
        team: 'Solo',
        subtitle: 'A community for Japanese streetwear enthusiasts',
        techstack: [
            {icon: <DiMongodb />, text: 'MongoDB'},
            {icon: <SiExpress />, text: 'Express'},
            {icon: <FaNodeJs />, text: 'Node.js'},
            {icon: <DiCss3 />, text: 'CSS'},
        ],
        picture: bokunostyle,
        description: "A website designed for people interested in and want to share their interest in Japanese streetwear and fashion. It allows users to browse different brands, keep track of their favourites, and post photos to each brands gallery - where they can share selfies and clothing hauls.",
        colour: '#86d0d6',
    },
    {
        number: 1,
        name: 'Minecreeper',
        link: 'https://david-millett.github.io/minecreeper/',
        readme: 'https://github.com/david-millett/minecreeper',
        timeframe: '5 days',
        team: 'Solo',
        subtitle: 'A horror-themed minesweeper with pixel art style',
        techstack: [
            {icon: <DiHtml5 />, text: 'HTML'},
            {icon: <FaJs />, text: 'JavaScript'},
            {icon: <DiCss3 />, text: 'CSS'},
        ],
        picture: minecreeper,
        description: "Minecreeper is a browser-based minesweeper-style game with a horror twist, substituting the traditional mines and flags for undead skeletons and tombstones! The first click is set to always implement a flood fill to improve player experience. Players can also double click to reveal all nearby squares if the correct number of tombstones have been set.",
        colour: '#ed5151',
    },
]

const currentProjects = [
    {
        number: 1,
        name: 'GLog',
        // link: '',
        readme: 'https://github.com/david-millett/glog-backend',
        // timeframe: '',
        // team: '',
        subtitle: "A workout tracking and logging app",
        techstack: [
            {icon: <FaPython />, text: 'Python'},
            {icon: <SiDjango />, text: 'Django'},
            // {icon: <FaReact />, text: 'React'},
            // {icon: <SiPostgresql />, text: 'PostgreSQL'},
            // {icon: <FaSass />, text: 'Sass'},
        ],
        // picture: '',
        description: "An app that enables users to easily create, view, and update workout routines. Also logs sessions to track progress. Watch this space...",
        colour: '#3e97e4',
    },
]

const Projects = () => {
    return (
        <main className={styles.container}>
            <div className="headingIntro">
                <h1 id='projects'><span className='logo'><FaFolderOpen /></span>Projects</h1>
            </div>
            <ul>
                {portfolio.map(project => {
                    return (
                        <li
                            key={project.number}
                            className={`${styles.project} ${project.number % 2 ? styles.odd : ''}`}
                            // style={{borderColor: project.colour, boxShadow: `0px 0px 10px ${project.colour}`}}
                        >
                            <div className={styles.projInfo}>
                                <div className={styles.projectTitle}>
                                    <h1 style={{color: project.colour}}>{project.name}</h1>
                                    <div style={{color: project.colour}} className={styles.techstack}>
                                        {project.techstack.map(tech => {
                                            return (
                                                <h2 key={tech.text}>{tech.icon}<p>{tech.text}</p></h2>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className={styles.projText}>
                                    <h3>{project.subtitle}</h3>
                                    <p>{project.team} project - {project.timeframe}</p>
                                    <p className={styles.description}>{project.description}</p>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <ProjectButtons link={project.link} readme={project.readme} colour={project.colour} />
                                </div>
                            </div>
                            <img className={styles.image} src={project.picture} />
                        </li>
                    )
                })}
            </ul>

            <h1 className={styles.workingHeader}>Working on...</h1>
            <ul>
                {currentProjects.map(project => {
                    return (
                        <li key={project.number} className={`${styles.project} ${styles.current}`}>
                            <div className={styles.projInfo}>
                                <div className={styles.projectTitle}>
                                    <h1 style={{color: project.colour}}>{project.name}</h1>
                                    <div style={{color: project.colour}} className={styles.techstack}>
                                        {project.techstack.map(tech => {
                                            return (
                                                <h2 key={tech.text}>{tech.icon}<p>{tech.text}</p></h2>
                                            )
                                        })}
                                    </div>
                                </div>
                                <h3>{project.subtitle}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.buttonContainer}>
                                    <ReadMeButton readme={project.readme} colour={project.colour} />
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Projects