
export default function CountryDetails(result:any) {      
    return (
      
         <div>
          {result ? (
            <div>
              <h1>Country Name: {result.countryInfo.name}</h1>
              <h1>Capital: {result.countryInfo.capital}</h1>
              <h1>Population: {result.countryInfo.population}</h1>
            </div>
          ) : (
            <h1>Country Not Found</h1>
          )} 
        </div> 
      
    )
  }    