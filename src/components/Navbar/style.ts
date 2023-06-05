import styled from "styled-components"

export const Header = styled.header`
  width: 100%;
  background-color: ${({theme}) => theme.color.elements};
`

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 80%;
  margin-inline: auto;
  padding-block:1.5rem;
  cursor: pointer;

  & h3{ 
    color:${({theme}) => theme.color.text};
  }
  
  & button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color:${({theme}) => theme.color.text};
    text-align: center;
    font-size: .9rem;
    font-weight: bold;
    cursor: pointer;
    gap: 5px;
  }

  @media screen and (max-width:650px) {
    gap: 10px;
    flex-direction: column;
  }
`