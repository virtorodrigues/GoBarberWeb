import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 24px;
  height: 56px;
  width: 100%;

  background-color: #FF9000;
  color: #312E38;

  border: 0;
  border-radius: 10px;

  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#FF9000')}
  }

`;