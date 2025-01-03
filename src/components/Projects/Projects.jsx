import { Link } from 'react-router-dom'

// Style
import styles from './Projects.module.scss'

// Icons
import { FaGithub, FaGlobe, FaPython, FaSass } from 'react-icons/fa'
import { DiMongodb, DiCss3 } from 'react-icons/di'
import { SiExpress, SiDjango, SiPostgresql } from 'react-icons/si'

const portfolio = [
    {
        number: 4,
        name: 'plantshelf',
        link: 'https://plantshelf.netlify.app/',
        readme: 'https://github.com/david-millett/plantshelf-frontend',
        timeframe: '1 week',
        team: 'solo',
        description: 'A house plant collecting and care app',
        techstack: <><FaPython /><SiDjango /><SiPostgresql /><FaSass /></>,
        picture: '',
    },
    {
        number: 3,
        name: 'Local Heroes',
        link: 'https://localheroesapp.netlify.app/',
        readme: 'https://github.com/david-millett/local-heroes-frontend',
        timeframe: '1 week',
        team: 'solo',
        description: 'A volunteering portal for local communities',
        techstack: 'MongoDB, Express, React, Node.js, SASS',
        picture: '',
    },
    {
        number: 2,
        name: 'Boku no Style',
        link: 'https://boku-no-style.netlify.app/',
        readme: 'https://github.com/david-millett/boku-no-style',
        timeframe: '1 week',
        team: 'solo',
        description: 'A community for Japanese streetwear enthusiasts',
        techstack: 'MongoDB, Express, Node.js, CSS',
        picture: '',
    },
    {
        number: 1,
        name: 'Minecreeper',
        link: 'https://david-millett.github.io/minecreeper/',
        readme: 'https://github.com/david-millett/minecreeper',
        timeframe: '5 days',
        team: 'solo',
        description: 'A horror-themed minesweeper game with pixel art style',
        techstack: 'HTML, CSS, JavaScript',
        picture: '',
    },
]

const Projects = () => {
    return (
        <main className={styles.container}>
            <div className="headingIntro">
                <h2>Projects</h2>
                <p>Check out some of my projects, built using a range of technologies across the front and back ends.</p>
            </div>
            <ul>
                {portfolio.map(project => {
                    return (
                        <li key={project.number}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            {/* <p>{project.timeframe} | {project.team}</p> */}
                            <p><strong>Tech stack:</strong> {project.techstack}</p>
                            <div>
                                {/* <p>More...</p> */}
                                {/* <Link to={project.readme} target='_blank'><FaGithub /> Readme</Link> */}
                                {/* <Link to={project.link} target='_blank'><FaGlobe /> Check it out</Link> */}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Projects