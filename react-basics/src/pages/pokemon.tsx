import PokemonList from "../components/pokemonList";
import Search from "../components/search";

export default function Pokemon() {
 
return <div className="flex m-2 justify-center items-center flex-col">
    <h2 className="text-3xl font-bold">Pokemons</h2>
    <Search />
    <PokemonList />
  </div>
}