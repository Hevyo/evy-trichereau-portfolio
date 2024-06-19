import './index.scss'
import skillsData from '../../datas/skills.json'
import MappedList from '../../components/MappedList'

function Home() {
  const tools = skillsData[1]
  const languages = skillsData[0]
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
        </div>
        <div className='mainContainer__Contact'>
          <h2>Contact</h2>
        </div>
      </div>
    )
}

export default Home