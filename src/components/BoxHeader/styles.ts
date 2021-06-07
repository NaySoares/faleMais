import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10rem;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    
    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin: 1rem;
      padding: 0.25rem;

      label {
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 2rem;
      }

      select {
        height: 2rem;
        width: 5rem;
        font-weight: bold;
      }

      select.plan {
        height: 2rem;
        width: 7rem;
      }

      input {
        height: 2rem;
        width: 5.5rem;
        font-weight: bold;        
      }

      button {
        font-size: 1rem; // 16px
        color: #FFFFFF;
        background: var(--blue-light);
        border: 0;
        margin-top: 1rem;
        padding: 0 1rem; // 32px
        border-radius: 0.25rem; // 4px
        height: 3rem; // 48px
        

        transition: filter 0.2s;
    
        &:hover {
          filter: brightness(0.9);
        }
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

    }
  }
`;