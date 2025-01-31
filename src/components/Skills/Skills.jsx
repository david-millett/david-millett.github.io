//Styles
import styles from './Skills.module.scss'

//Icons
import { FaSass, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPython, FaNpm, FaGithub, FaFireAlt } from 'react-icons/fa'
import { DiMongodb, DiHtml5, DiCss3 } from 'react-icons/di'
import { SiExpress, SiDjango, SiPostgresql } from 'react-icons/si'

const skillsList = [
    {name: 'HTML', icon: <DiHtml5 />},
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
            <div className='headingIntro widescreenNone'>
                <h1 id='skills'><span className='logo'><FaFireAlt /></span>Skills</h1>
            </div>
            {/* <p className="introLine">Here are some of the key skills I have been using, and continue to learn about: I adore to learn and improve, so watch this space!</p> */}
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
        </main>
    )
}

export default Skills