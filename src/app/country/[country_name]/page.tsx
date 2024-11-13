
// import Link from "next/link";     
// import Country from "@/app/components/Country"

// export default function CountryName({params} : any) {

//     const countries : {
//         name: string;
//         population: number;
//         capital: string;
//     }[] = [
//         {
//             name: "Australia",
//             capital: "Carberra",
//             population: 25600000,
//         },
//         {
//             name: "Canada",
//             capital: "Ottawa",
//             population: 38000000, 
//         },
//         {
//             name: "Germany",
//             capital: "Berlin", 
//             population: 83000000,
//         },
//         {
//             name: "Japan",
//             capital: "Tokyo", 
//             population: 126000000,
//         },
//         {
//             name: "Brazil",
//             capital: "Brasilia", 
//             population: 212000000,
//         }
//     ];


//     function findCountry(country_url:string){
//         return countries.find
//         (country => country.name == country_url);
//     }

//     let result = findCountry(params.country_name);

//     return (
//     <div>   
//         <Country countryInfo = {result}/>
//         {/* <div>   
//             { result ? (
//                 <div>
//                     <h1>Country Name : {result.name}</h1>
//                     <h1>Country Capital : {result.capital}</h1>
//                     <h1>Country Population : {result.population}</h1>
//                 </div>
//             ) : (
//                 <h1>Country not Found</h1>
//             )
//             }
//         </div> */}
//             <div>
//                 <Link href="/" style={{fontSize: 30, color: "blue", textDecoration: "none"}}>Back To Country List</Link>
//             </div>
//     </div>
//     )
// }



// import Link from "next/link";
// import Country from "@/app/components/Country";

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

//   function findCountry(country_url: string): { name: string; population: number; capital: string } | undefined {
//     return countries.find((country) => country.name === country_url);
//   }

//   const result = findCountry(params.country_name) || null; // if no result, set to null

//   return (
//     <div>
//       <Country countryInfo={result} />
//       <div>
//         <Link href="/" className="text-blue-500 text-xl no-underline">
//           Back To Country List
//         </Link>
//       </div>
//     </div>
//   );
// }

// import Link from "next/link";
// import Country from "@/app/components/Country";

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

//   const result = findCountry(params.country_name);

//   return (
//     <div>
//       <Country countryInfo={result} />
//       <div>
//         <Link href="/" className="text-blue-500 text-xl no-underline">
//           Back To Country List
//         </Link>
//       </div>
//     </div>
//   );
// }


import Link from "next/link";
import CountryDetails from "@/app/components/Country"; // Make sure this import is correct

type Params = {
  country_name: string;
};

export default function CountryName({ params }: { params: Params }) {
  const countries: { name: string; population: number; capital: string }[] = [
    {
      name: "Australia",
      capital: "Canberra",
      population: 25600000,
    },
    {
      name: "Canada",
      capital: "Ottawa",
      population: 38000000,
    },
    {
      name: "Germany",
      capital: "Berlin",
      population: 83000000,
    },
    {
      name: "Japan",
      capital: "Tokyo",
      population: 126000000,
    },
    {
      name: "Brazil",
      capital: "Brasilia",
      population: 212000000,
    },
  ];

  function findCountry(country_url: string): { name: string; population: number; capital: string } | null {
    return countries.find((country) => country.name === country_url) ?? null;
  }

  const countryInfo = findCountry(params.country_name);

  // Wrap countryInfo in a result object or pass null if not found
  const result = countryInfo ? { countryInfo } : null;

  return (
    <div>
      <CountryDetails result={result} />  {/* Pass the result to CountryDetails */}
      <div>
        <Link href="/" className="text-blue-500 text-xl no-underline">
          Back To Country List
        </Link>
      </div>
    </div>
  );
}
