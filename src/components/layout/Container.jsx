import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    text-align: start;
    min-height: 100vh;
    width: 100%;
    margin-bottom: 1rem;
    padding: 2rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    background-color: ${({ $secondary }) =>
      $secondary ? "var(--secondary-background)" : "var(--primary-background)"};

    @media (max-width: 1024px) {
      padding: 2rem 3rem;
    }

    @media (max-width: 768px) {
      padding: 2rem 1.5rem;
    }
  `;