import styled from 'styled-components';

export const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 0.25rem;
  }

  > input {
    padding: 0.5rem;
    font-size: 1rem;
  }

  :not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;
