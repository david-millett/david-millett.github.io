// Styles
import styles from './NavBarBar.module.scss'

// Components
import NavBar from '../NavBar/NavBar'
// import NavBarMobile from '../NavBarMobile/NavBar'

const NavBarBar = () => {
    return (
        <>
        <div className={styles.container}>
            <NavBar />
        </div>
        
        {/* <NavBarMobile closeMenu={closeMenu} menuOpen={menuOpen} handleMenuStateChange={handleMenuStateChange} /> */}
        </>
        
    )
}

export default NavBarBar