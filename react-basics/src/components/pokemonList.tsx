import { fetchData } from "../apis"
import { useInfiniteQuery  } from "@tanstack/react-query"
import PokemonCard from "./pokemonCard"
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";

export default function PokemonList() {
    const limit = 20;

    const [ref, entry]  = useIntersectionObserver({
        root: null,
        rootMargin: "0px",
        threshold: 0.98,
    })

    const {data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["pokemons"],
        queryFn: ({pageParam}) => fetchData(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${pageParam}`),
        getNextPageParam: (lastPage, pages) => {
            const lastPageOffset = pages.length * limit;
            return lastPageOffset + limit
        },
        initialPageParam: 0,
    })

    useEffect(()=>{
        if(entry?.isIntersecting) {
            fetchNextPage()
        }
    }, [entry])

    const pokemons:any = data?.pages.flatMap(page=> page.results) ?? [];

    if(isLoading) return <div>Loading...</div>

    if(pokemons?.length === 0) return <div>No pokemons found</div>

    return <div className="w-full">
          
        {/* POKEMON LIST */}
        <div className="flex flex-wrap justify-center gap-4">
        {pokemons?.map((pokemon: any) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
        </div>

      
      {/* LOAD MORE BUTTON */}
     <button  ref={ref}
        className={`bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed`}
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>


    </div>
}