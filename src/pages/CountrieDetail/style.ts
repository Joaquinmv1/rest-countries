import styled from 'styled-components'

export const ButtonBack = styled.button`
  background-color: ${({ theme }) => theme.color.elements};
  color:${({ theme }) => theme.color.text};
  border: none;
  padding: 1rem 2.5rem;
  cursor: pointer;
  margin: 2rem;
  font-weight: bold;
  text-align: center;
`

export const ContainerDetail = styled.main`
  width: 100%;
  color:${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  min-height: 896px;
`

export const SectionContainer = styled.section`
`

export const Detail = styled.article`
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
min-height: 50vh;

& h1 {
  font-size: 36px;
  margin-block: 1rem;
}

& img {
  width:700px;
  aspect-ratio: 16/9;  
  object-fit: contain; 
}

  @media screen and (max-width: 1210px){
    flex-direction: column;
    min-height: 90vh;
  }

  @media screen and (max-width: 700px){
   & img {
    width: 100%;
   }
  }
`

export const InfoCountrie = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  & span{
    font-weight: bold;
  }

  & p {
    padding-block: .5rem;
  }

  @media screen and (max-width: 550px){
    flex-direction: column;
  }
`

export const Error = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 896px;
  background-color: ${({ theme }) => theme.color.background};
  color:${({ theme }) => theme.color.text};
`

export const Loader = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
