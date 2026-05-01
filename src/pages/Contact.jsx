import React, { useState } from 'react'
import styled from "styled-components";
import emailjs from '@emailjs/browser';

const Container = styled.div`
  background-color: #06132f;
  color: #fff;
  padding: 4rem 6rem;
  min-height: 100vh;
  font-family: 'Georgia', serif;

  @media (max-width: 768px) {
    padding: 4rem 3rem;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1rem;

  span {
    display: block;
    font-size: 1rem;
    color: #a0aec0;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  color: #a0aec0;
  font-size: 0.9rem;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Input = styled.input`
  background: transparent;
  color: #fff;
  border: 1px solid #a0aec0;  
  padding: 0.8rem 1rem;
  border-radius: 5px;
  flex: 1 1 45%;

  &:focus {
    outline: 2px solid #4fd1c5;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const TextArea = styled.textarea`
  background: transparent;
  color: #fff;
  border: 1px solid #a0aec0;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  resize: vertical;

  &:focus {
    outline: 2px solid #4fd1c5;
  }
`;

const Legend = styled.p`
  font-size: 0.75rem;
  color: #a0aec0;
  margin-bottom: 1.5rem;
  margin-top: -1rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.9rem 2rem;
  border: 1px solid #a0aec0;
  border-radius: 25px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #4fd1c5;
  }
`;

const StatusMsg = styled.p`
  color: ${({ $error }) => ($error ? '#fc8181' : '#68d391')};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [status, setStatus] = useState({ sending: false, msg: '', error: false });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, msg: '', error: false });

    try {
      await emailjs.send(
        'service_erazqdx',    // EmailJS
        'template_h52ysd9',   // EmailJS
        {
          from_name:  formData.name,
          from_email: formData.email,
          phone:      formData.phone,
          subject:    formData.subject,
          message:    formData.message,
        },
        '1XmQFSioPdgaQMcWj'     // EmailJS
      );

      setStatus({ sending: false, msg: 'Mensagem enviada com sucesso!', error: false });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    } catch (err) {
      setStatus({ sending: false, msg: 'Erro ao enviar. Tente novamente.', error: true });
    }
  };

  return (
    <Container>
      <Title>
        <span>|| Get In Touch</span>
        Se você tem um projeto em mente ou precisa de ajuda, fale comigo.
      </Title>
      <Description> Estou sempre aberto a novas oportunidades, colaborações e desafios. Seja para discutir uma ideia inovadora, criar uma solução sob medida para o seu negócio ou simplesmente trocar experiências, ficarei feliz em ouvir você. Sinta-se à vontade para me mandar uma mensagem com os detalhes do que precisa. Retornarei o mais breve possível!</Description>

      <Form onSubmit={handleSubmit}>
      <Input name="name"    value={formData.name}    onChange={handleChange} placeholder="Nome *"            required />
      <Input name="email"   value={formData.email}   onChange={handleChange} placeholder="Email *"           type="email" required />
      <Input name="phone"   value={formData.phone}   onChange={handleChange} placeholder="Telefone (opcional)" />
      <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Assunto (opcional)" />
      <TextArea name="message" value={formData.message} onChange={handleChange} placeholder="Mensagem *"     required />
      
        <Button type="submit" disabled={status.sending}>
          {status.sending ? 'Enviando...' : 'Envie sua mensagem'}
        </Button>

        {status.msg && <StatusMsg error={status.error}>{status.msg}</StatusMsg>}
      </Form>
    </Container>
  );
};

export default Contact;