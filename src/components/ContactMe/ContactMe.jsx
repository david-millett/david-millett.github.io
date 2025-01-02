

const ContactMe = () => {
    return (
        <main>
            <div className="headingIntro">
                <h2>Get in touch!</h2>
                <p>Thank you for checking me out! Want to get in touch? Feel free to zip over an email or find me on LinkedIn and GitHub. Or, simply fill in the form to reach out!</p>
            </div>
            <ul>
                <li>Email</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
            </ul>
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