import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import MappedList from '../MappedList';
import skilllist from '../../datas/skills.json';
import Slider from '../Slider';
import './index.scss';

function WorkCard({...work}) {
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setIndex(0); // Reset index when showing the modal
        setShow(true);
    };

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? work.pictures.length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= work.pictures.length ? 0 : newIndex);
    };

    const filteredSkills = [];

    work.languagesandtools.forEach(language => {
        skilllist[0].skills.forEach(skill => {
            if (skill.title === language) {
                filteredSkills.push(skill);
            }
        });
    });

    const h3WithClassName = (className) => {
      return ({ children, ...props }) => <h3 className={className} {...props}>{children}</h3>;
    };

    return(
        <>
        <div variant="primary" onClick={handleShow}>
            <Card style={{ width: '25rem' }} className='card' border="dark">
                <Card.Img className="card__image" variant="top" src={work.pictures[0]} alt={`Screenshot du site ${work.title}`}/>
                <Card.Body className="card__body">
                    <Card.Title as={h3WithClassName('custom-title-class')} className="card__body--title">{work.title}</Card.Title>
                    <Card.Text className="card__body--description">{work.description}</Card.Text>
                    <MappedList data={filteredSkills} type="badge" size="small"/>
                    <div className="card__body--linkDiv">
                    <img className="card__body--linkDiv--logo" src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt={`Lien vers le code du site ${work.title} sur Github`}/>
                    <a className="card__body--linkDiv--link" href={work.github} target="_blank" rel="noopener noreferrer">
                        Lien vers le code sur Github
                    </a>
                    </div>
                </Card.Body>
            </Card>
        </div>

        <Modal className="modal" size="xl" show={show} onHide={handleClose}>
          <Modal.Header className="modal__header" closeButton>
            <Modal.Title className="text-secondary">{work.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal__body">
              <Slider
                pictures={work.pictures}
                title={work.title}
                index={index}
            />
          </Modal.Body>
          <Modal.Footer className="modal__footer">
          {work.pictures.length > 1 && (
                <div className='modal__footer__sliderControl'>
                    <Button variant="secondary" onClick={handlePrevious}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </Button>
                    <div className="modal__footer__sliderControl--indicators">
                        {work.pictures.map((_, idx) => (
                            <span
                                key={idx}
                                className={`modal__footer__sliderControl--indicators--indicator ${index === idx ? 'active' : ''}`}
                            ></span>
                        ))}
                    </div>
                    <Button variant="secondary" onClick={handleNext}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Button>
                </div>
            )}
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default WorkCard;