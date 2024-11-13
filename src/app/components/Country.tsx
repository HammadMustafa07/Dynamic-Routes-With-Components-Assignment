
// export default function CountryDetails(result:any) {      
//     return (
      
//          <div>
//           {result ? (
//             <div>
//               <h1>Country Name: {result.countryInfo.name}</h1>
//               <h1>Capital: {result.countryInfo.capital}</h1>
//               <h1>Population: {result.countryInfo.population}</h1>
//             </div>
//           ) : (
//             <h1>Country Not Found</h1>
//           )} 
//         </div> 
      
//     )
//   }  

// interface CountryInfo {
//   name: string;
//   capital: string;
//   population: number;
// }

// interface CountryDetailsProps {
//   result: { countryInfo: CountryInfo } | null; // `result` can be `null` if no country is found
// }

// export default function CountryDetails({ result }: CountryDetailsProps) {
//   return (
//     <div>
//       {result ? (
//         <div>
//           <h1>Country Name: {result.countryInfo.name}</h1>
//           <h1>Capital: {result.countryInfo.capital}</h1>
//           <h1>Population: {result.countryInfo.population}</h1>
//         </div>
//       ) : (
//         <h1>Country Not Found</h1>
//       )}
//     </div>
//   );
// }

// import Link from "next/link";
// import CountryDetails from "@/app/components/Country"; // Assuming CountryDetails is the component you're using to render the country

// type Params = {
//   country_name: string;
// };

// export default function CountryName({ params }: { params: Params }) {
//   const countries: { name: string; population: number; capital: string }[] = [
//     {
//       name: "Australia",
//       capital: "Canberra",
//       population: 25600000,
//     },
//     {
//       name: "Canada",
//       capital: "Ottawa",
//       population: 38000000,
//     },
//     {
//       name: "Germany",
//       capital: "Berlin",
//       population: 83000000,
//     },
//     {
//       name: "Japan",
//       capital: "Tokyo",
//       population: 126000000,
//     },
//     {
//       name: "Brazil",
//       capital: "Brasilia",
//       population: 212000000,
//     },
//   ];

//   function findCountry(country_url: string): { name: string; population: number; capital: string } | null {
//     return countries.find((country) => country.name === country_url) ?? null;
//   }

//   const countryInfo = findCountry(params.country_name);

//   const result = countryInfo ? { countryInfo } : null;

//   return (
//     <div>
//       <CountryDetails result={result} />  {/* Pass the result as the prop */}
//       <div>
//         <Link href="/" className="text-blue-500 text-xl no-underline">
//           Back To Country List
//         </Link>
//       </div>
//     </div>
//   );
// }


interface CountryInfo {
  name: string;
  capital: string;
  population: number;
}

interface CountryDetailsProps {
  result: { countryInfo: CountryInfo } | null; // `result` can be `null` if no country is found
}

export default function CountryDetails({ result }: CountryDetailsProps) {
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
  );
}

