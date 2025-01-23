import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { animateScroll, scroller } from 'react-scroll'

// Styles
import styles from './NavBar.module.scss'

// Icons
import { FaArrowUp, FaFireAlt, FaFileAlt, FaUser, FaRegSmile,FaRegAddressCard, FaWindowClose } from 'react-icons/fa'

const NavBarMobile = () => {
    
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleMenuStateChange = (state) => {
        setMenuOpen(state.isOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }
    
    const scrolly = (destination) => {
        scroller.scrollTo(destination,  {
            duration: 1500,
            // delay: 100,
            smooth: 'easeInOutCubic',
            offset: -80,
        })
        closeMenu()
    }

    const scrollyTop = () => {
        animateScroll.scrollToTop()
        closeMenu()
    }
    
    return (
        <main className={styles.container} id='mobileNav'>
            <Menu
                right
                width={ '100%' }
                // height={ '100%' }
                isOpen={menuOpen}
                onStateChange={handleMenuStateChange}
                // customBurgerIcon={<BiMenu />}
                // customCrossIcon={<BiWindowClose />}
                >
                <ul className={styles.list}>
                    <a onClick={() => scrollyTop()}><li><span className={styles.logo}><FaArrowUp /></span>Home</li></a>
                    <a onClick={() => scrolly('skills')}><li><span className={styles.logo}><FaFireAlt /></span>Skills</li></a>
                    <a onClick={() => scrolly('projects')}><li><span className={styles.logo}><FaFileAlt /></span>Projects</li></a>
                    <a onClick={() => scrolly('experience')}><li><span className={styles.logo}><FaUser /></span>Experience</li></a>
                    <a onClick={() => scrolly('aboutme')}><li><span className={styles.logo}><FaRegSmile /></span>About Me</li></a>
                    <a onClick={() => scrolly('contact')}><li><span className={styles.logo}><FaRegAddressCard /></span>Contact</li></a>
                    <a onClick={() => closeMenu()}><li><span className={styles.logo}><FaWindowClose /></span>Close</li></a>
                </ul>
            </Menu>
        </main>
    )
}

export default NavBarMobile