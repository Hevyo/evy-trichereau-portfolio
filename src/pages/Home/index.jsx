import './index.scss'
import Badge from '../../components/Badge'
import Tab from '../../components/Tab'
import skillsData from '../../datas/skills.json'

function Home() {
  const tools = skillsData[1]
  const languages = skillsData[0]
  console.log(tools.picture)
    return (
      <div className='mainContainer'>
        <div className='mainContainer__banner'>
          <h1>Evy Trichereau</h1>
          <p>Développeuse web fullstack</p>
        </div>
        <div className='mainContainer__skills'>
          <h2>Mes compétences</h2>
          <ul>
            {languages.skills.map(({title, picture, description}) => (
              <li>
                <Tab title={title} picture={picture} description={description}/>
              </li>
            ))}
          </ul>
          <ul>
                {tools.skills.map(({title, picture}) => (
                    <li>
                        <Badge title={title} picture={picture} />
                    </li>
                ))}
            </ul>
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