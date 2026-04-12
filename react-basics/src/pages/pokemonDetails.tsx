import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router";
import { fetchData } from "../apis";
import { useEffect, useState } from "react";


const Demography = ({ pokemon }: { pokemon: any }) => {
    return <>
        <p>Height: {pokemon?.height}</p>
        <p>Weight: {pokemon?.weight}</p>
    </>
}


const TypesAndAbilities = ({ pokemon }: { pokemon: any }) => {
    return <>
        <p>Types: {pokemon?.types.map((type: any) => type.type.name).join(', ')}</p>
        <p>Abilities: {pokemon?.abilities.map((ability: any) => ability.ability.name).join(', ')}</p>
    </>
}

const Stats = ({ pokemon }: { pokemon: any }) => {
    return <>
        <p>Stats: {pokemon?.stats.map((stat: any) => stat.stat.name).join(', ')}</p>
        <p>Moves: {pokemon?.moves.map((move: any) => move.move.name).join(', ')}</p>
        <p>Held Items: {pokemon?.held_items.map((item: any) => item.item.name).join(', ')}</p>

    </>
}

function PokemonDetails() {

    const { id } = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    const [selectedTab, setSelectedTab] = useState<string>(searchParams.get('tab') ?? 'demography');

    const { data: pokemonData, isLoading } = useQuery({
        queryKey: ["pokemon", id],
        queryFn: () => fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`)
    })


    useEffect(() => {
        setSearchParams({ tab: selectedTab })
    }, [selectedTab])


    if (isLoading) return <div>Loading...</div>;

    return <div>
        <h2 className="text-3xl font-bold">{pokemonData?.name}</h2>
        <img src={pokemonData?.sprites.front_default} alt={pokemonData?.name} />

        <div className="flex gap-2">
            <button
                className={`${selectedTab === 'demography' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'} p-2 rounded-md`}
                onClick={() => setSelectedTab('demography')}>
                Demography
            </button>
            <button
                className={`${selectedTab === 'types and abilities' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'} p-2 rounded-md`}
                onClick={() => setSelectedTab('types and abilities')}>
                Types and Abilities
            </button>
            <button
                className={`${selectedTab === 'stats' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'} p-2 rounded-md`}
                onClick={() => setSelectedTab('stats')}>
                Stats
            </button>
        </div>

        <div>
            {selectedTab === 'demography' && <Demography pokemon={pokemonData} />}
            {selectedTab === 'types and abilities' && <TypesAndAbilities pokemon={pokemonData} />}
            {selectedTab === 'stats' && <Stats pokemon={pokemonData} />}
        </div>

    </div>
}

export default PokemonDetails;