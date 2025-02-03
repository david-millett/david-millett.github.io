import { animateScroll, scroller } from 'react-scroll'

// Styles
import styles from './NavBar.module.scss'

// Icons
// import { 
//     FaArrowUp,
//     FaFireAlt,
//     FaFolderOpen,
//     FaUser,
//     FaRegSmile,
//     FaRegAddressCard,
// } from 'react-icons/fa'

// const navLinks = [
//     {
//         name: '',
//         section: '',
//         icon: '',

//     }
// ]


const NavBar = () => {
    
    const scrolly = (destination) => {
        scroller.scrollTo(destination,  {
            duration: 1500,
            smooth: 'easeInOutCubic',
            offset: -80,
        })
    }
    
    return (
        <ul className={styles.container} id='desktopNav'>
            {/* <li>[</li> */}
            <a onClick={() => animateScroll.scrollToTop()}><li>Home</li></a>
            <a onClick={() => scrolly('projects')}><li>Projects</li></a>
            <a onClick={() => scrolly('aboutme')}><li>About Me</li></a>
            <a className='widescreenOnly' onClick={() => scrolly('skillsExp')}><li>Skills/Experience</li></a>
            <a className='widescreenNone' onClick={() => scrolly('skills')}><li>Skills</li></a>
            <a className='widescreenNone' onClick={() => scrolly('experience')}><li>Experience</li></a>
            <a onClick={() => scrolly('contact')}><li>Contact</li></a>
            {/* <li>]</li> */}
        </ul>
    //     <ul className={styles.container} id='desktopNav'>
    //         <a onClick={() => animateScroll.scrollToTop()}><li><FaArrowUp /></li></a>
    //         <a onClick={() => scrolly('projects')}><li><FaFolderOpen /></li></a>
    //         <a onClick={() => scrolly('aboutme')}><li><FaRegSmile /></li></a>
    //         <a className='widescreenOnly' onClick={() => scrolly('skillsExp')}><li>Skills/Experience</li></a>
    //         <a className='widescreenNone' onClick={() => scrolly('skills')}><li><FaFireAlt /></li></a>
    //         <a className='widescreenNone' onClick={() => scrolly('experience')}><li><FaUser /></li></a>
    //         <a onClick={() => scrolly('contact')}><li><FaRegAddressCard /></li></a>
    // </ul>
    )
}

export default NavBar