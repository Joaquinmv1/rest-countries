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
      {!isLoading && countries.map((country: Country, i: number) => (
        <Link to={`countrie/${country.name.common}`} key={i}>
          <CountriesItems>
            <CountrieDetail>
              <img src={country.flags.png} alt="" />
              <div className="country-info">
                <h2>{country.name.common}</h2>
                <p>Population: <span>{country.population}</span></p>
                <p>Region: <span>{country.region}</span> </p>
                {country.capital && country.capital.length > 0 && (
                  <p>Capital: <span>{country.capital}</span> </p>
                )}
              </div>
            </CountrieDetail>
          </CountriesItems>
        </Link>))}
    </CountriesList>
  </article>
)


