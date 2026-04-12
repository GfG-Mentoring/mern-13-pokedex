import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../apis"
import { Link } from "react-router"

export default function PokemonCard({pokemon}: {pokemon: any}) {
    const {data: pokemonData, isLoading} = useQuery({
        queryKey: ["pokemon", pokemon.name],
        queryFn: () => fetchData(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    })


    if(isLoading) return <div>Loading...</div>

    if(!pokemonData) return <div>No pokemon found</div>

    return <Link to={`/pokemon/${pokemon.name}`}>   
    <div className="border-2 w-52 text-center border-gray-300 rounded-md p-4">
        <h3 className="text-lg font-bold capitalize">{pokemon.name}</h3>
        <img src={pokemonData.sprites.front_default} className="w-full" alt={pokemon.name} />
    </div>
    </Link>
}