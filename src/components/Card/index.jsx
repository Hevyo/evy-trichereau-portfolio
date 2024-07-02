import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import MappedList from '../MappedList';
import skilllist from '../../datas/skills.json'
import './index.scss'

function WorkCard({...work}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const filteredSkills = [];

    work.languagesandtools.forEach(language => {
        skilllist[0].skills.forEach(skill => {
                if (skill.title === language) {
                    filteredSkills.push(skill);
                }
            });
        });

    return(
        <>
        <div variant="primary" onClick={handleShow}>
            <Card style={{ width: '25rem' }}>
                <Card.Img className="cardImage" variant="top" src={work.pictures[0]} />
                <Card.Body>
                    <Card.Title>{work.title}</Card.Title>
                    <Card.Text>{work.description}</Card.Text>
                    <MappedList data={filteredSkills} type="badge"/>
                    <img className="logo" src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt={`Lien vers le code du site ${work.title} sur Github`}/>
                    <a href={work.github} target="_blank" rel="noopener noreferrer">
                        Lien vers le code sur Github
                    </a>
                </Card.Body>
            </Card>
        </div>
  
        <Modal size="xl" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{work.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {work.pictures.map((picture, index) => (
                <img className="workImages" src={picture} key={index} alt={`Capture d'écran du site ${work.title}`}/>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default WorkCard