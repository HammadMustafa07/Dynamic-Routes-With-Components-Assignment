
import Link from "next/link";     
import Country from "@/app/components/Country"

export default function CountryName({params} : any) {

    const countries : {
        name: string;
        population: number;
        capital: string;
    }[] = [
        {
            name: "Australia",
            capital: "Carberra",
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
        }
    ];


    function findCountry(country_url:string){
        return countries.find
        (country => country.name == country_url);
    }

    let result = findCountry(params.country_name);

    return (
    <div>   
        <Country countryInfo = {result}/>
        {/* <div>   
            { result ? (
                <div>
                    <h1>Country Name : {result.name}</h1>
                    <h1>Country Capital : {result.capital}</h1>
                    <h1>Country Population : {result.population}</h1>
                </div>
            ) : (
                <h1>Country not Found</h1>
            )
            }
        </div> */}
            <div>
                <Link href="/" style={{fontSize: 30, color: "blue", textDecoration: "none"}}>Back To Country List</Link>
            </div>
    </div>
    )
}

