import Badge from '../../components/Badge'
import Tab from '../../components/Tab'
import './index.scss'

function MappedList({data, type}) {
    const SkillsList = ({ skills, type }) => (
        <ul className={type === 'tab' ? "SkillsContainer__tabsList" : "SkillsContainer__badgesList"}>
        {skills.map((skill, index) => (
            <li key={`${skill.title}-${index}`} className={type === 'tab' ? "SkillsContainer__tabsList--skill" : "SkillsContainer__badgesList--skill"}>
            {type === 'tab' ? (
                <Tab {...skill} />
            ) : (
                <Badge {...skill} />
            )}
            </li>
        ))}
        </ul>
  )

  return(
    
    <div className="SkillsContainer">
        <SkillsList skills={data} type={type} />
    </div>
  )
}

export default MappedList