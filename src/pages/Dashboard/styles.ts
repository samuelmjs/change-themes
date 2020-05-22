import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.colors.title};
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    background: ${(props) => props.theme.colors.shape};
    border-radius: 5px 0 0 5px;
    color: ${(props) => props.theme.colors.title};
    border: 2px solid ${(props) => props.theme.colors.shape};

    ${(props) =>
      props.hasError &&
      css`
        border: 2px solid ${props.theme.colors.red};
      `}

    &::placeholder {
      color: ${(props) => props.theme.colors.description};
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${(props) => shade(0.2, props.theme.colors.primary)};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.red};
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: ${(props) => props.theme.colors.shape};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${(props) => props.theme.colors.text};
      }

      p {
        font-size: 18px;
        color: ${(props) => props.theme.colors.description};
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
