import './index.scss'
import { useState} from "react"
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Tab({title, description, picture}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="d-grid gap-2 tab">
        <Button
        className='tab__button'
        variant='secondary'
        onClick={() => setOpen(!open)}
        aria-controls="collapse-text"
        aria-expanded={open}
        >
            <div className='tab__button__groupTitle'>
                <img className="tab__button__groupTitle--logo" src={picture} alt={`logo de ${title}`}/>
                <h3 className="tab__button__groupTitle--title">{title}</h3>
            </div>
            <i
                className={
                    open
                        ? "fa-solid fa-bars tab__button--arrowDown"
                        : "fa-solid fa-bars tab__button--arrow"
                }
            />
        </Button>
        <Collapse in={open}>
          <div id="collapse-text" className='tab__boxInfo'>
            <p className='tab__boxInfo--description'>
                {description}
            </p>
          </div>
        </Collapse>
      </div>
    )
}

export default Tab
