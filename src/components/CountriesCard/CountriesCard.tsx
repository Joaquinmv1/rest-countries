import { Link } from "react-router-dom"
import { CountrieDetail, CountriesItems, CountriesList } from "../../pages/Countries"
import { Country } from "../../types/types"

interface Props {
  countries: Array<Country>
  isLoading: boolean
}

export const CountriesCard = ({ countries, isLoading, }: Props) => (
  <article>
    <CountriesList>
      {!isLoading && countries.map((countrie: Country, i: number) => (
        <Link to={`countrie/${countrie.name.common}`} key={i}>
          <CountriesItems>
            <CountrieDetail>
              <img src={countrie.flags.png} alt="" />
              <div className="country-info">
                <h2>{countrie.name.common}</h2>
                <p>Population: <span>{countrie.population}</span></p>
                <p>Region: <span>{countrie.region}</span> </p>
                <p>Capital: <span>{countrie.capital}</span> </p>
              </div>
            </CountrieDetail>
          </CountriesItems>
        </Link>))}
    </CountriesList>
  </article>
)


