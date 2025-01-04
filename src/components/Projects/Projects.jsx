import { Link } from 'react-router-dom'

// Style
import styles from './Projects.module.scss'

// Icons
import { FaHtml5, FaJs, FaNodeJs, FaPython, FaReact, FaSass } from 'react-icons/fa'
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
        techstack: <><DiMongodb /><SiExpress /><FaReact /><FaNodeJs /><FaSass /></>,
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
        techstack: <><DiMongodb /><SiExpress /><FaNodeJs /><DiCss3 /></>,
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
        techstack: <><FaHtml5 /><DiCss3 /><FaJs /></>,
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
                            <div>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                            <p>{project.techstack}</p>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Projects