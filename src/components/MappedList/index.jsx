import Badge from '../../components/Badge'
import Tab from '../../components/Tab'
import './index.scss'

function MappedList({data, type,size}) {
    const SkillsList = ({ skills, type, size }) => (
        <ul className={type === 'tab' ? "SkillsContainer__tabsList" : "SkillsContainer__badgesList"}>
        {skills.map((skill, index) => (
            <li key={`${skill.title}-${index}`} className={type === 'tab' ? "SkillsContainer__tabsList--skill" : "SkillsContainer__badgesList--skill"}>
            {type === 'tab' ? (
                <Tab {...skill} />
            ) : (
                <Badge {...skill} size={size} />
            )}
            </li>
        ))}
        </ul>
  )

  return(
    
    <div className="SkillsContainer">
        <SkillsList skills={data} type={type} size={size}/>
    </div>
  )
}

export default MappedList