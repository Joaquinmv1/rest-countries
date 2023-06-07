import styled from 'styled-components'

export const MainContainer = styled.main`
  background-color: ${({ theme }) => theme.color.background};
  transition: all 0.10s linear;
  min-height: 100vh;
`

export const LayoutContainer = styled.div`
  width: 80%;
  margin-inline: auto;

`

export const CountriesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: 1.2rem;
  list-style: none;
`

export const CountriesItems = styled.li`
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s;

  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  & img { 
    padding: 0;
    margin: 0;
    width: 100%;
    height: 200px;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }
`

export const CountrieDetail = styled.article`
  background-color: ${({ theme }) => theme.color.elements};
  padding-bottom:1rem;
  height: 380px;

  & p{
    color: ${({ theme }) => theme.color.text};
    font-weight: bold;
  }
  & h2{
    margin-bottom: 1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${({ theme }) => theme.color.text};
  }
  & span {
    font-weight: normal;
  }
`

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
`

export const NoCountries = styled.div`
  display: grid;
  place-items: center;
  min-height: 50vh;
  text-align: center;
  color:${({ theme }) => theme.color.text};
`