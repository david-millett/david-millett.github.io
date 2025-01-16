

// Styles
import styles from './NavBar.module.scss'

// Icons
import { FaHome } from 'react-icons/fa'


const NavBar = () => {
    

    
    
    return (
        <ul className={styles.container}>
            <a href='#top'><li><FaHome /></li></a>
            <a href={'#skills'}><li>Skills</li></a>
            <a href={'#projects'}><li>Projects</li></a>
            <a href={'#experience'}><li>Experience</li></a>
            <a href={'#aboutme'}><li>About Me</li></a>
            <a href={'#contact'}><li>Contact</li></a>
        </ul>
    )
}

export default NavBar