import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { FiMoon } from 'react-icons/fi';

import logoLight from '../../assets/logo.svg';
import logoDark from '../../assets/logo-dark.svg';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }: Props) => {
  const { title } = useContext(ThemeContext);

  const logoImg = useMemo(() => (title === 'light' ? logoLight : logoDark), [
    title,
  ]);

  return (
    <Container>
      <img src={logoImg} alt="Github Explorer" />
      <button type="button" onClick={toggleTheme}>
        <FiMoon size={24} />
        <strong>
          Tema escuro:
          {title === 'light' ? ' Desativado' : ' Ativado'}
        </strong>
      </button>
    </Container>
  );
};

export default Header;
