import SyncLoader from "react-spinners/SyncLoader";
import { LayoutContainer, LoadingDiv, MainContainer } from "."
import { CountriesCard, Search } from "../../components"
import { useFilter, useGetCountries } from "../../hooks"

export const Countries = () => {
  const { countries, isLoading } = useGetCountries();
  const { filter, changeCountries } = useFilter(countries)

  if (isLoading) {
    return <LoadingDiv><SyncLoader color="#000" /></LoadingDiv>
  }

  return (
    <MainContainer>
      <LayoutContainer>
        <Search
          changeCountries={changeCountries}
        />
        <CountriesCard
          countries={filter}
          isLoading={isLoading}
        />
      </LayoutContainer>
    </MainContainer>
  )
}
