import './index.scss'
import skillList from '../../datas/skills.json'
import works from '../../datas/works.json'
import MappedList from '../../components/MappedList'
import WorkCard from '../../components/Card'

function Home() {
  const tools = skillList[1].skills
  const languages = skillList[0].skills
    return (
      <main className='mainContainer'>
        <div className='mainContainer__banner'>
          <h1>Evy Trichereau</h1>
          <p>Développeuse web fullstack</p>
        </div>
        <section className='mainContainer__skills'>
          <i class="fa-solid fa-bookmark"></i>
          <h2 className='mainContainer__skills--title'>Mes compétences</h2>
          <div className='mainContainer__skills--skillsContainer'>
            <MappedList data={languages} type="tab"/>
            <MappedList data={tools} type="badge"/>
          </div>
        </section>
        <section className='mainContainer__projects'>
          <h2 className='mainContainer__projects--title'>Mes projets</h2>
          <ul className='mainContainer__projects__projectsContainer'>
            {works.map((work) => (
              <li className='mainContainer__projects__projectsContainer--project' key={work.id}>
                <WorkCard {...work}/>
              </li>
            ))}
          </ul>
        </section>
        <section className='mainContainer__Contact'>
          <h2>Contact</h2>
        </section>
      </main>
    )
}

export default Home