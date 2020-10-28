import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface StyleProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<StyleProps>`
  & + div {
    margin-top: 8px;
  }

  color: #666360;
  background: #232129;
  border-radius: 8px;
  border: 2px solid #232129;

  height: 56px;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  ${props => props.isErrored && css`
    border-color: #C53030;
  `}

  ${props => props.isFocused && css`
    border-color: #FF9000;
    color: #FF9000;
  `}

  ${props => props.isFilled && css`
    color: #FF9000;
  `}

  svg {
    margin-right: 16px;
  }

  input {
    color: #F4EDE8;
    background: transparent;
    flex: 1;
    border: 0;
    
    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin-right: 0;
  }

  span {
    background-color: #C53030;
    color: #FFF;

    &::before {
      border-color: #C53030 transparent;
    }
  }
`;