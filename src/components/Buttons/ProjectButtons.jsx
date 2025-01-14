import { Link } from "react-router-dom"

// Styles
import styles from "./Buttons.module.scss"

// Icons
import { FaGithub } from "react-icons/fa"
import { FaGlobe } from "react-icons/fa"

const ProjectButtons = ({ link, readme, colour }) => {
    return (
        <main className={styles.container}>
            <Link to={link} target='_blank'><li style={{color: colour, borderColor: colour}}><FaGlobe />Check it out</li></Link>
            <Link to={readme} target='_blank'><li style={{color: colour, borderColor: colour}}><FaGithub />ReadMe</li></Link>
        </main>
    )
}

export default ProjectButtons