import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  flex: 1;
`;

export const Title = styled.input`
  font-size: 1.3rem;
  font-weight: 600;
  border: none;
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.main};
  background: transparent;
`;

export const Textarea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  flex: 1;
  background: transparent;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .select_tag {
    border: none;
    outline: none;
    background: ${(props) => props.theme.main};
    font-size: 0.75rem;
    color: ${(props) => props.theme.color};
    height: 100%;
    padding: 0 10px;
    appearance: none;
    border-radius: 5px;
  }

  .check {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.75rem;

    span {
      font-size: 0.65rem;
    }
  }
`;