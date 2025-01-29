// * Components
import AboutMe from "../../components/AboutMe/AboutMe"
import Banner from "../../components/Banner/Banner"
import ContactMe from "../../components/ContactMe/ContactMe"
import Experience from "../../components/Experience/Experience"
import NavBarBar from "../../components/NavBarBar/NavBarBar"
import Projects from "../../components/Projects/Projects"
import Skills from "../../components/Skills/Skills"

const Landing = () => {
    return (
        <main className="content">
            <NavBarBar />
            <Banner />
            <Projects />
            <AboutMe />
            <Skills />
            <Experience />
            <ContactMe />
        </main>
    )
}

export default Landing