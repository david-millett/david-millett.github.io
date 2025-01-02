
//Styles
import styles from './Skills.module.scss'

//Icons
import { FaHtml5, FaSass, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPython, FaNpm, FaGithub } from 'react-icons/fa'
import { DiMongodb, DiCss3 } from 'react-icons/di'
import { SiExpress, SiDjango, SiPostgresql } from 'react-icons/si'

const skillsList = [
    {name: 'HTML', icon: <FaHtml5 />},
    {name: 'CSS', icon: <DiCss3 />},
    {name: 'SASS', icon: <FaSass />},
    {name: 'JavaScript', icon: <FaJs />},
    {name: 'React.js', icon: <FaReact />},
    {name: 'Bootstrap', icon: <FaBootstrap />},
    {name: 'Node.js', icon: <FaNodeJs />},
    {name: 'MongoDB', icon: <DiMongodb />},
    {name: 'Express.js', icon: <SiExpress />},
    {name: 'Python', icon: <FaPython />},
    {name: 'Django', icon: <SiDjango />},
    {name: 'PostgreSQL', icon: <SiPostgresql />},
    {name: 'npm/pip', icon: <FaNpm />},
    {name: 'Git/GitHub', icon: <FaGithub />},
]

const Skills = () => {
    return (
        <main className={styles.container}>
            <div className='headingIntro'>
                <h2>Skills</h2>
                <p>Here are some of the key skills I have been using, and continue to learn about:</p>
            </div>
            <ul>
                {skillsList.map(skill => {
                    return (
                        <>
                            <li key={skill.name}>
                                {skill.icon}
                                {skill.name}
                            </li>
                        </>
                    )
                })}
            </ul>
        </main>
    )
}

export default Skills