import BadgeBootstrap from 'react-bootstrap/Badge';
import "./index.scss"

function Badge({title, picture}) {
    return (
        <BadgeBootstrap className='badge' bg="secondary">
            <img className="badge__picture" src={picture} alt={`logo de ${title}`}></img>
            <p className="badge__title">{title}</p>
        </BadgeBootstrap>
    )
}

export default Badge