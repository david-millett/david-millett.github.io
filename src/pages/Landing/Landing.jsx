// * Components
// import AboutMe from "../../components/AboutMe/AboutMe"
import Banner from "../../components/Banner/Banner"
import ContactMe from "../../components/ContactMe/ContactMe"
import Experience from "../../components/Experience/Experience"
import Projects from "../../components/Projects/Projects"
import Skills from "../../components/Skills/Skills"

const Landing = () => {
    return (
        <main>
            <Banner />
            <Skills />
            <Projects />
            <Experience />
            {/* <AboutMe /> */}
            <ContactMe />
        </main>
    )
}

export default Landing