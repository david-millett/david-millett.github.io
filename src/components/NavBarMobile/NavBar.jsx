import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { animateScroll, scroller } from 'react-scroll'

// Styles
import styles from './NavBar.module.scss'



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
                // width={ '100%' }
                isOpen={menuOpen}
                onStateChange={handleMenuStateChange}
                // customBurgerIcon={<BiMenu />}
                // customCrossIcon={<BiWindowClose />}
                >
                <ul className={styles.list}>
                    <a onClick={() => scrollyTop()}><li>Home</li></a>
                    <a onClick={() => scrolly('skills')}><li>Skills</li></a>
                    <a onClick={() => scrolly('projects')}><li>Projects</li></a>
                    <a onClick={() => scrolly('experience')}><li>Experience</li></a>
                    <a onClick={() => scrolly('aboutme')}><li>About Me</li></a>
                    <a onClick={() => scrolly('contact')}><li>Contact</li></a>
                </ul>
            </Menu>
        </main>
    )
}

export default NavBarMobile