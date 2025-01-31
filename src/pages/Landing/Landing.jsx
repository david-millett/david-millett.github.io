// * Components
import AboutMe from "../../components/AboutMe/AboutMe"
import Banner from "../../components/Banner/Banner"
import ContactMe from "../../components/ContactMe/ContactMe"
import Experience from "../../components/Experience/Experience"
import NavBarBar from "../../components/NavBarBar/NavBarBar"
import Projects from "../../components/Projects/Projects"
import Skills from "../../components/Skills/Skills"

// Icons
import { FaFireAlt } from "react-icons/fa"
// import { FaUser } from 'react-icons/fa'

const Landing = () => {
    return (
        <main className="content">
            <NavBarBar />
            <Banner />
            <Projects />
            <AboutMe />
            <div id='skillsExp' className='headingIntro widescreenOnly'>
                <h1 id='skills'><span className='logo'><FaFireAlt /></span>Skills and Experience</h1>
            </div>
            <div className="twins">
                <Skills />
                <Experience />
            </div>
            <ContactMe />
        </main>
    )
}

export default Landing