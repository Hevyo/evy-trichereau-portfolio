import './index.scss'
import { useState, useRef } from "react"

function Tab({title, description, picture}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const contentRef = useRef()

    return (
        <div className="tab" title={title} picture={picture} onClick={toggle}>
            <button className='tab__button'>
                <div className='tab__button__groupTitle'>
                    <img className="tab__button__groupTitle--logo" src={picture} alt={`logo de ${title}`}/>
                    <h3 className="tab__button__groupTitle--title">{title}</h3>
                </div>
                <i
                    className={
                        isOpen
                            ? "fa-solid fa-bars tab__button--arrowDown"
                            : "fa-solid fa-bars tab__button--arrow"
                    }
                />
            </button>
            <div
                className='tab__boxInfo'
                ref={contentRef}
                style={
                    isOpen
                        ? { height: contentRef.current.scrollHeight + "px" }
                        : { height: "0px" }
                }
            >
                <p className='tab__boxInfo--description'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Tab
