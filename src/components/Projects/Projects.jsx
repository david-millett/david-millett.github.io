// Style
import styles from './Projects.module.scss'

// Components
import ProjectButtons from '../Buttons/ProjectButtons'

// Icons
import { FaJs, FaNodeJs, FaPython, FaReact, FaSass, FaFileAlt } from 'react-icons/fa'
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
        techstack: <div className={styles.techstack}><FaPython /><SiDjango /><SiPostgresql /><FaSass /></div>,
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
        techstack: <div className={styles.techstack}><DiMongodb /><SiExpress /><FaReact /><FaNodeJs /><FaSass /></div>,
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
        techstack: <div className={styles.techstack}><DiMongodb /><SiExpress /><FaNodeJs /><DiCss3 /></div>,
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
        techstack: <div className={styles.techstack}><DiHtml5 /><DiCss3 /><FaJs /></div>,
        picture: minecreeper,
        description: "Minecreeper is a browser-based minesweeper-style game with a horror twist! While the traditional game tasks players with avoiding mines and setting down flags in their places on the grid-based board, Minecreeper substitues mines for undead skeletons - and the flags for tombstones. The first click is set to always implement a flood fill to improve player experience. Players can also double click to reveal all nearby squares if the correct number of tombstones have been set.",
        colour: '#ed5151',
    },
]

const Projects = () => {
    return (
        <main className={styles.container}>
            <div className="headingIntro">
                <h1 id='projects'><span className='logo'><FaFileAlt /></span>Projects</h1>
            </div>
            {/* <p className="introLine">Check out some of my projects, built using a range of technologies across the front and back ends.</p> */}
            <ul>
                {portfolio.map(project => {
                    return (
                        <li key={project.number} className={styles.project} style={{borderColor: project.colour, boxShadow: `0px 0px 10px ${project.colour}`}}>
                            <div className={styles.projectTitle}>
                                <h1 style={{color: project.colour}}>{project.name}</h1>
                                <h2 style={{color: project.colour}}>{project.techstack}</h2>
                            </div>
                            <h3>{project.subtitle}</h3>
                            <p>{project.team} project - {project.timeframe}</p>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.imageContainer}><img src={project.picture} /></div>
                            <div className={styles.buttonContainer}>
                                <ProjectButtons link={project.link} readme={project.readme} colour={project.colour} />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Projects