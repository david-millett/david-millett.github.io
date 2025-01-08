import { Link } from "react-router-dom"

// Styles
import styles from "./Buttons.module.scss"

// Icons
import { FaGithub } from "react-icons/fa"

const ProjectButtons = ({ link, readme }) => {
    return (
        <main className={styles.container}>
            <Link to={link} target='_blank'><li>Check it out</li></Link>
            <Link to={readme} target='_blank'><li><FaGithub />ReadMe</li></Link>
        </main>
    )
}

export default ProjectButtons