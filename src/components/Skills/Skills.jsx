//Styles
import styles from './Skills.module.scss'

//Icons
import { FaSass, FaJs, FaReact, FaNodeJs, FaPython, FaNpm, FaGithub, FaFireAlt, FaVuejs } from 'react-icons/fa'
import { DiMongodb, DiHtml5, DiCss3 } from 'react-icons/di'
import { SiExpress, SiDjango, SiPostgresql, SiTypescript } from 'react-icons/si'
import { FiBookOpen } from 'react-icons/fi'

const skillsList = [
    {name: 'HTML', icon: <DiHtml5 />},
    {name: 'CSS', icon: <DiCss3 />},
    {name: 'SASS', icon: <FaSass />},
    {name: 'JavaScript', icon: <FaJs />},
    {name: 'TypeScript', icon: <SiTypescript />},
    {name: 'Python', icon: <FaPython />},
    {name: 'React', icon: <FaReact />},
    {name: 'Node.js', icon: <FaNodeJs />},
    {name: 'Django', icon: <SiDjango />},
    {name: 'Express', icon: <SiExpress />},
    {name: 'npm', icon: <FaNpm />},
    {name: 'MongoDB', icon: <DiMongodb />},
    {name: 'PostgreSQL', icon: <SiPostgresql />},
    {name: 'Git/GitHub', icon: <FaGithub />},
]

const learningSkills = [
    {name: 'Vue', icon: <FaVuejs />},
    {name: 'JavaScript', icon: <FaJs />},
]

const Skills = () => {
    return (
        <main className={styles.container}>
            <div className='headingIntro widescreenNone'>
                <h1 id='skills'><span className='logo'><FaFireAlt /></span>Skills</h1>
            </div>
            <ul>
                {skillsList.map((skill, index) => {
                    return (
                        <li key={index}>
                                <p className={styles.icon}>{skill.icon}</p>
                                <div></div>
                                <p className={styles.name}>{skill.name}</p>
                        </li>
                    )
                })}
            </ul>
            <h2><FiBookOpen /> Studying:</h2>
            <ul>
                {learningSkills.map((skill, index) => {
                    return (
                        <li key={index}>
                            <p className={styles.icon}>{skill.icon}</p>
                            <div></div>
                            <p className={styles.name}>{skill.name}</p>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Skills