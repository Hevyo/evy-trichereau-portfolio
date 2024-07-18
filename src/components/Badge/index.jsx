import BadgeBootstrap from 'react-bootstrap/Badge';
import "./index.scss"

function Badge({title, picture, size}) {
    const sizeClass = size === 'small' ? 'smallBadge' : "none";
    return (
        <BadgeBootstrap className={sizeClass} bg="info">
            <img className={size === 'small' ? 'smallBadge__picture' : 'badge__picture'} src={picture} alt={`logo de ${title}`}></img>
            <p className={size === 'small' ? 'smallBadge__title' : 'badge__title'}>{title}</p>
        </BadgeBootstrap>
    )
}

export default Badge