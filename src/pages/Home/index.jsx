import './index.scss'
import skillList from '../../datas/skills.json'
import works from '../../datas/works.json'
import MappedList from '../../components/MappedList'
import WorkCard from '../../components/Card'

function Home() {
  const tools = skillList[1].skills
  const languages = skillList[0].skills
    return (
      <div className='mainContainer'>
        <div className='mainContainer__banner'>
          <h1>Evy Trichereau</h1>
          <p>Développeuse web fullstack</p>
        </div>
        <div className='mainContainer__skills'>
          <h2 className='mainContainer__skills--title'>Mes compétences</h2>
          <div className='mainContainer__skills--skillsContainer'>
            <MappedList data={languages} type="tab"/>
            <MappedList data={tools} type="badge"/>
          </div>
        </div>
        <div className='mainContainer__projects'>
          <h2>Mes projets</h2>
          <ul>
            {works.map((work, index) => (
              <li>
                <WorkCard {...work} key={index}/>
              </li>
            ))}
          </ul>
        </div>
        <div className='mainContainer__Contact'>
          <h2>Contact</h2>
        </div>
      </div>
    )
}

export default Home