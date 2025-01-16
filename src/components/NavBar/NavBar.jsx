import { animateScroll, scroller } from 'react-scroll'

// Styles
import styles from './NavBar.module.scss'

// Icons
import { FaHome } from 'react-icons/fa'

const NavBar = () => {
    
    const scrolly = (destination) => {
        scroller.scrollTo(destination,  {
            duration: 1500,
            // delay: 100,
            smooth: 'easeInOutCubic',
            offset: -100,
        })
    }
    
    return (
        <ul className={styles.container}>
            <a onClick={() => animateScroll.scrollToTop()}><li><FaHome /></li></a>
            <a onClick={() => scrolly('skills')}><li>Skills</li></a>
            <a onClick={() => scrolly('projects')}><li>Projects</li></a>
            <a onClick={() => scrolly('experience')}><li>Experience</li></a>
            <a onClick={() => scrolly('aboutme')}><li>About Me</li></a>
            <a onClick={() => scrolly('contact')}><li>Contact</li></a>
        </ul>
    )
}

export default NavBar