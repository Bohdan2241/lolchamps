import styled from 'styled-components';

export const ChampionName = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: EB Garamond, Arial, Helvetica, sans-serif;
  font-style: italic;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #fff;
  text-transform: uppercase;
  transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`;

export const WrapChampionName = styled.span`
  display: block;
  padding: 4% 6%;
  overflow: hidden;
  background-color: rgb(6, 28, 37);
  transition: background-color 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`;

export const ChampionImage = styled.img`
  transform: scale3d(1.05, 1.05, 1);
  transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`;

export const WrapChampionImage = styled.span`
  position: relative;
  display: block;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    width: 11%;
    padding-top: 11%;
    background-color: rgb(0, 9, 19);
    transition: transform 0.5s ease 0s;
    transform: translate(50%, -50%) rotate(45deg);
  }
`;

export const ChampionItem = styled.a`
  display: block;
  flex: 1 1 25%;
  max-width: 25%;
  padding: 20px 20px 0 0;

  &:hover ${ChampionImage} {
    transform: scale3d(1.001, 1.001, 1);
  }

  &:hover ${WrapChampionImage}::after {
    transform: translate(100%, -100%) rotate(45deg);
  }

  &:hover ${WrapChampionName} {
    background-color: rgb(0, 102, 128);
  }

  &:hover ${ChampionName} {
    transform: translate(10px, 0px);
  }
`;
