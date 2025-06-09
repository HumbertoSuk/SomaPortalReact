import styled from 'styled-components';
import colors from './colors';

export const Icon = styled.div`
  z-index: 10;
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, ${colors.darkBrown} 50%, ${colors.darkBrown} 50%, ${colors.lightBrown} 50%, ${colors.lightBrown} 100%);
  background-size: 200%;
  transition: .1s linear;
`;

export const IconAlt = styled.div`
  z-index: 10;
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, ${colors.lightBrown} 50%, ${colors.lightBrown} 50%, ${colors.darkBrown} 50%, ${colors.darkBrown} 100%);
  background-size: 200%;
  transition: .1s linear;
`;

export const ParentElement = styled.div`
  pointer-events: none;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
  &::before{
      height: 0px;
      width: 100%;
      background-color: ${colors.darkBrown};
      content: "";
      transform: translate(0px, 0px);
      transition: 0.2s;
      pointer-events: none;
    }
    &::after{
      height: 0px;
      width: 100%;
      background-color: ${colors.darkBrown};
      content: "";
      transform: translate(0px, 0px);
      transition: 0.2s;
      z-index: -1;
      pointer-events: none;
    }
    &:hover{
      &::before{
        height: 2px;
        width: 100%;
        content: "";
        transform: translate(0px, -8px);
        pointer-events: none;
    }
      &::after{
        height: 2px;
        z-index: -1;
        width: 100%;
        content: "";
        transform: translate(0px, 8px);
        pointer-events: none;
      }
    }
`;

export const Switch = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const ButtonParent = styled.div`
  pointer-events: auto;
  display: flex;
  height: 100%;
  padding: 10px;
  color: ${colors.darkBrown};
  background-image: linear-gradient(90deg, ${colors.lightBrown} 50%, ${colors.lightBrown} 50%, ${colors.darkBrown} 50%, ${colors.darkBrown} 100%);
  background-size: 200%;
  transition: .2s linear;
  &:hover{
    background-position: -100%;
    color: ${colors.lightYellow};
  }
  &:hover ${Icon}{
    background-position: -100%;
  }
`;

export const ButtonVariant = styled.button`
  pointer-events: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: left;
  height: 100%;
  width: 100%;
  padding: 10px;
  border: none;
  color: ${colors.darkBrown};
  background-image: linear-gradient(90deg, ${colors.lightBrown} 50%, ${colors.lightBrown} 50%, ${colors.darkBrown} 50%, ${colors.darkBrown} 100%);
  background-size: 200%;
  transition: .2s linear;
  &:hover{
    background-position: -100%;
    color: ${colors.lightYellow};
  }
  &:hover ${Icon}{
    background-position: -100%;
  }
  &:disabled{
    opacity: 0.6;
    pointer-events: none;
  }
`;

export const SwitchInput = styled.input.attrs({
  type: 'checkbox',
})`
width: 0;
height: 0;
opacity: 0;
&:checked + ${ButtonParent}{
  background-position: -100%;
  color: ${colors.lightYellow};
}
&:disabled + ${ButtonParent}{
  opacity: 0.6;
  pointer-events: none;
}
`;

export const Wrapper = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
  justify-content: left;
`;
