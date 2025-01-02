import { Link } from 'react-router-dom'

// Styles
import styles from './ContactMe.module.scss'

// Icons
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

const ContactMe = () => {
    return (
        <main className={styles.container}>
            <div className="headingIntro">
                <h2>Get in touch!</h2>
                <p>It was so nice to have you here! Want to get in touch? Feel free to zip over an email or find me on LinkedIn and GitHub. 🤗</p>
            </div>
            <ul>
                <li><FaEnvelope />Email</li>
                <Link to={'https://www.linkedin.com/in/d-millett'} target='_blank'><li><FaLinkedin />LinkedIn</li></Link>
                <Link to={'http://github.com/david-millett'} target='_blank'><li><FaGithub />GitHub</li></Link>
            </ul>
            <p>Or, simply fill in the form to reach out!</p>
            <h3>Say hey</h3>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        // value={}
                        // onChange={}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        // value={}
                        // onChange={}
                    />
                </div>
                <div>
                    <label htmlFor="name">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        // value={}
                        // onChange={}
                    />
                </div>
                <div>
                    <label htmlFor="name">Message</label>
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="6"
                        // value={}
                        // onChange={}
                    />
                </div>
                <button>Send</button>
            </form>
        </main>
    )
}

export default ContactMe