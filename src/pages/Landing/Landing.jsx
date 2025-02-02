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
        <>
            <NavBarBar />
        <main className="content">
            <Banner />
            <Projects />
            <AboutMe />
            <div className='headingIntro widescreenOnly'>
                <h1 id='skillsExp'><span className='logo'><FaFireAlt /></span>Skills and Experience</h1>
            </div>
            <h3 id='skillsExpIntro' className="introLine widescreenOnly">I took a slightly roundabout path to becoming a software engineer... Along the way, I worked around the world, made connections with people, honed valuable skills including writing, design, and project management!</h3>
            <div className="twins">
                <Skills />
                <Experience />
            </div>
            <ContactMe />
        </main>
        </>
    )
}

export default Landing