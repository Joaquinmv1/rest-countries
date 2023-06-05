import styled from "styled-components"

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width:650px) {
    flex-direction: column;
  }
`

export const InputSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.elements};
  color: ${({ theme }) => theme.color.text};
  padding-inline: 1rem;
  border: none;
  margin-block:1rem;
`

export const InputSearch = styled.input`
  background-color: ${({ theme }) => theme.color.elements};
  color: ${({ theme }) => theme.color.text};
  padding: 1rem;
  border: none;

  &:focus{
    border: none;
    outline: none;
  }
`

export const SelectContainer = styled.select`
  background-color: ${({ theme }) => theme.color.elements};
  color: ${({ theme }) => theme.color.text};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.elements};
  outline: none;
  
  @media screen and (max-width:650px) {
    margin-block: 1rem;
    padding-inline: 4.2rem;

  }
`