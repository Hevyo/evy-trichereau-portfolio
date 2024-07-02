import './index.scss'
import skillList from '../../datas/skills.json'
import works from '../../datas/works.json'
import MappedList from '../../components/MappedList'
import WorkCard from '../../components/Card'
import ContactForm from '../../components/Form'

function Home({ homeRef, abilitiesRef, projectsRef, contactRef }) {
  const tools = skillList[1].skills
  const languages = skillList[0].skills

    return (
      <main className='mainContainer'>
        <header ref={homeRef} className='mainContainer__banner'>
          <h1>Evy Trichereau</h1>
          <p>Développeuse web fullstack</p>
        </header>
        <section ref={abilitiesRef} className='mainContainer__skills'>
          <i className="fa-solid fa-bookmark"></i>
          <h2 className='mainContainer__skills--title'>Mes compétences</h2>
          <div className='mainContainer__skills--skillsContainer'>
            <MappedList data={languages} type="tab"/>
            <MappedList data={tools} type="badge"/>
          </div>
        </section>
        <section ref={projectsRef} className='mainContainer__projects'>
          <h2 className='mainContainer__projects--title'>Mes projets</h2>
          <ul className='mainContainer__projects__projectsContainer'>
            {works.map((work) => (
              <li className='mainContainer__projects__projectsContainer--project' key={work.id}>
                <WorkCard {...work}/>
              </li>
            ))}
          </ul>
        </section>
        <section ref={contactRef} className='mainContainer__Contact'>
          <h2>Contact</h2>
          <ContactForm/>
        </section>
      </main>
    )
}

export default Home