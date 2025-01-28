// Styles
import styles from './NavBarBar.module.scss'

// Components
import NavBar from '../NavBar/NavBar'

const NavBarBar = () => {
    return (
        <div className={styles.container}>
            <NavBar />
        </div>
    )
}

export default NavBarBar