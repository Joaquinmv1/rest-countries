import { Link } from "react-router-dom"
import { Country } from '../../types/types'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { ButtonBack, ContainerDetail, Detail, InfoCountrie, Error, SectionContainer, Loader } from './style'
import { getString } from '../../utils/string'
import { useCountryParams } from '../../hooks/useCountryParams'
import SyncLoader from "react-spinners/SyncLoader"

export const CountrieDetail = () => {
  const { currentCountrie, isLoading, error } = useCountryParams()

  if (error) return <Error>{error}</Error>

  return (
    <ContainerDetail>
      <Link to='/'>
        <ButtonBack><AiOutlineArrowLeft /> Back</ButtonBack>
      </Link>
      <SectionContainer>
        {!isLoading ? currentCountrie.slice(0, 1).map((countrie: Country) => (
          <Detail key={countrie.name.common}>
            <img src={countrie.flags.png} alt="" />
            <div>
              <h1>{countrie.name.common}</h1>
              <InfoCountrie>
                <div>
                  <p><span>Native Name: </span>{getString(Object.values(countrie.name.nativeName), 'common')}</p>
                  <p><span>Population: </span>{countrie.population.toLocaleString()}</p>
                  <p><span>Region: </span>{countrie.region}</p>
                  <p><span>Sub Region: </span>{countrie.subregion}</p>
                  <p><span>Capital: </span>{countrie.capital}</p>
                </div>
                <div>
                  <p><span>Top Level Domain: </span>{countrie.tld}</p>
                  <p><span>Currencies: </span>{getString(Object.values(countrie.currencies), 'name')}</p>
                  <p><span>Languages: </span>{Object.values(countrie.languages).join(', ')}</p>
                </div>
              </InfoCountrie>
            </div>
          </Detail>
        )) : <Loader><SyncLoader color="#000" size={10}/></Loader>}
      </SectionContainer>
    </ContainerDetail>
  )
}