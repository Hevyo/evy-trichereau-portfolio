import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import "./index.scss"
import skillList from "../../datas/skills.json"
import works from "../../datas/works.json"
import MappedList from "../../components/MappedList"
import WorkCard from "../../components/Card"
import ContactForm from "../../components/Form"

function Home({ homeRef, abilitiesRef, projectsRef, contactRef }) {
    const tools = skillList[1].skills
    const languages = skillList[0].skills
    const fullText = "Développeuse web fullstack"
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        let index = -1
        const timer = setInterval(() => {
            setDisplayedText((prev) => {
                if (index < fullText.length) {
                    const updatedText = prev + fullText[index]
                    return updatedText
                } else {
                    clearInterval(timer)
                    return prev
                }
            })
            index++
        }, 40)
        return () => clearInterval(timer)
    }, [fullText])

    const { ref: graduateInfoRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.01,
    })

    return (
        <main className="mainContainer">
            <header id="home" ref={homeRef} className="mainContainer__banner">
                <h1 className="mainContainer__banner--title">Evy Trichereau</h1>
                <p className="mainContainer__banner--subtitle">
                    {displayedText}
                </p>
                <i className="fa-solid fa-code mainContainer__banner--icon"></i>
            </header>
            <section
                id="abilities"
                ref={abilitiesRef}
                className="mainContainer__skills"
            >
                <h2 className="mainContainer__skills--title">
                    Mes compétences
                </h2>
                <div className="mainContainer__skills--skillsContainer">
                    <MappedList data={languages} type="tab" />
                    <MappedList data={tools} type="badge" />
                </div>
                <p
                    ref={graduateInfoRef}
                    className={`mainContainer__skills--graduateInfo ${
                        inView ? "animate" : ""
                    }`}
                >
                    Diplômée de la formation développeur web d'OpenClassrooms
                </p>
            </section>
            <section
                id="projects"
                ref={projectsRef}
                className="mainContainer__projects"
            >
                <h2 className="mainContainer__projects--title">Mes projets</h2>
                <ul className="mainContainer__projects__projectsContainer">
                    {works.map((work) => (
                        <li
                            className="mainContainer__projects__projectsContainer--project"
                            key={work.id}
                        >
                            <WorkCard {...work} />
                        </li>
                    ))}
                </ul>
            </section>
            <section
                id="contact"
                ref={contactRef}
                className="mainContainer__contact"
            >
                <h2 className="mainContainer__contact--title">Contact</h2>
                <ContactForm />
            </section>
        </main>
    )
}

export default Home
