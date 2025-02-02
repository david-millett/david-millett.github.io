// Styles
import styles from './ContactMe.module.scss'

// Components
import Buttons from '../Buttons/ContactButtons'

// Icons
import { FaRegAddressCard } from 'react-icons/fa'

const ContactMe = () => {
    return (
        <main className={styles.container}>
            <div className="headingIntro">
                <h1 id='contact'><span className='logo'><FaRegAddressCard /></span>Contact</h1>
            </div>
            <div className={styles.body}>
                {/* <div className={styles.image}></div> */}
                <h2>Thank you for your time, it was great to have you here! Want to get in touch? Catch me at one of these links:</h2>
                <ul><Buttons /></ul>
            </div>
        </main>
    )
}

export default ContactMe