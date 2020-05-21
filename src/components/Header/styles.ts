import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 700px;

  display: flex;
  justify-content: space-between;

  button {
    border: 0;
    background: transparent;
    font-size: 14px;
    color: ${(props) => props.theme.colors.title};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.04s;

    &:hover {
      color: ${(props) => lighten(0.2, props.theme.colors.title)};

      svg {
        color: ${(props) => lighten(0.2, props.theme.colors.title)};
      }
    }

    strong {
      margin-left: 8px;
    }

    svg {
      color: ${(props) => props.theme.colors.title};
    }
  }
`;
