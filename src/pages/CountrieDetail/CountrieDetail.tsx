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
        {!isLoading ? currentCountrie.slice(0, 1).map((country: Country) => (
          <Detail key={country.name.common}>
            <img src={country.flags.png} alt={`country: ${country.name.common}`} />
            <div>
              <h1>{country.name.common}</h1>
              <InfoCountrie>
                <div>
                  <p><span>Native Name: </span>{getString(Object.values(country.name?.nativeName), 'common')}</p>
                  <p><span>Population: </span>{country.population.toLocaleString()}</p>
                  <p><span>Region: </span>{country.region}</p>
                  <p><span>Sub Region: </span>{country.subregion}</p>
                  <p><span>Capital: </span>{country.capital}</p>
                </div>
                <div>
                  <p><span>Top Level Domain: </span>{country.tld}</p>
                  <p><span>Currencies: </span>{getString(Object.values(country?.currencies), 'name')}</p>
                  <p><span>Languages: </span>{Object.values(country.languages).join(', ')}</p>
                </div>
              </InfoCountrie>
            </div>
          </Detail>
        )) : <Loader><SyncLoader color="#000" size={10} /></Loader>}
      </SectionContainer>
    </ContainerDetail>
  )
}