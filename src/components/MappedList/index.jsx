import Badge from '../../components/Badge'
import Tab from '../../components/Tab'
import './index.scss'

function MappedList({data, type}) {
    const SkillsList = ({ skills, type }) => (
        <ul className={type === 'tab' ? "typeOfSkillContainer__tabsList" : "typeOfSkillContainer__badgesList"}>
        {skills.map((skill, index) => (
            <li key={index} className={type === 'tab' ? "typeOfSkillContainer__tabsList--skill" : "typeOfSkillContainer__badgesList--skill"}>
            {type === 'tab' ? (
                <Tab {...skill} />
            ) : (
                <Badge {...skill} />
            )}
            </li>
        ))}
        </ul>
  )
  console.log(data.skills)
  return(
    
    <div className="typeOfSkillContainer">
        <SkillsList skills={data.skills} type={type} />
    </div>
  )
}

export default MappedList