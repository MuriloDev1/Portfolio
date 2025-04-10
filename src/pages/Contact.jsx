import React from 'react'

import styled from "styled-components";

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

const Contact = () => {
  return (
    <Container>
      <Title>
        <span>|| Get In Touch</span>
        If you have any project or need help. Contact me
      </Title>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Description>
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Phone" />
        <Input type="text" placeholder="Subject" />
        <TextArea placeholder="Comment" />
        <Button type="submit">Submit Message</Button>
      </Form>
    </Container>
  );
};

export default Contact