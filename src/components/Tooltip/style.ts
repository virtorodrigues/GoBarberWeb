import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  
  &:hover span {
      opacity: 1;
      visibility: visible;
    }

  span {

    position: absolute;
    background: #FF9000;
    border-radius: 4px;
    width: 160px;
    padding: 8px;
    font-size: 14px;
    font-weight: 500;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(100% + 12px);
    
    color: #312E38;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    &::before {
      content: '';
      border-style: solid;
      border-color: #FF9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

  }
`;