import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {

    const [validated, setValidated] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });

    const handleInputChange = (event) => {
        const {id , value} = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
    
          const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            message: formData.message,
            reply_to: formData.email,
          };
    
          emailjs.send(
            'service_xktdmk7',
            'template_fz1z6mq',
            templateParams,
            'u1nhmwQ3mrfuhVaGO'
          )
          .then((response) => {
            console.log('Email envoyé avec succès!', response.status, response.text);
            alert('Email envoyé avec succès');
          })
          .catch((err) => {
            console.error('Erreur lors de l\'envoi de l\'email:', err);
            alert('Erreur lors de l\'envoi de l\'email');
          });
        }
    
        setValidated(true);
      };

    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <FloatingLabel label="Prénom" controlId="firstName">
                        <Form.Control required placeholder="Prénom" value={formData.firstName} onChange={handleInputChange}/>
                        <Form.Control.Feedback type="invalid">
                            Veuillez entrer votre prénom.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <FloatingLabel label="Nom" controlId="lastName">
                        <Form.Control required placeholder="Nom" value={formData.lastName} onChange={handleInputChange}/>
                        <Form.Control.Feedback type="invalid">
                            Veuillez entrer votre nom.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <FloatingLabel label="Adresse mail" controlId="email">
                    <Form.Control required type="email" placeholder="Adresse mail" value={formData.email} onChange={handleInputChange}/>
                    <Form.Control.Feedback type="invalid">
                        Veuillez entrer une adresse mail valide.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel label="Votre message" controlId="message">
                <Form.Control required as="textarea" style={{ height: '100px' }} placeholder="Enter email" value={formData.message} onChange={handleInputChange}/>
                <Form.Control.Feedback type="invalid">
                    Veuillez entrer votre message.
                </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>
            <Button variant="primary" type="submit">
                Envoyer
            </Button>
        </Form>
    )
}

export default ContactForm