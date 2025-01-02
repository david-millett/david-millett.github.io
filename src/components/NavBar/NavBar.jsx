// Styles
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <ul className={styles.container}>
            <li>Top</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>About Me</li>
            <li>Contact</li>
        </ul>
    )
}

export default NavBar