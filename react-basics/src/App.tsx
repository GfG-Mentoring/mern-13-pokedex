import PokemonList from "./components/pokemonList";
import Search from "./components/search";

export default function App() {
  return <div className="flex m-2 justify-center items-center flex-col">
    <h2 className="text-3xl font-bold">Pokemons</h2>
    <Search />
    <PokemonList />
  </div>
} 










// import { useEffect, useState } from 'react'
// import { useFetch } from './hooks/useFetch'
// import { useQuery } from '@tanstack/react-query'
// import { fetchData } from './apis';


// export default function App() {

//   // const {data: employees, isLoading } = useFetch("https://jsonplaceholder.typicode.com/users")

//   const {data: employees, isLoading } =  useQuery({
//     queryKey: ["employees"],
//     queryFn: () => fetchData("https://jsonplaceholder.typicode.com/users")
//   })  

//   console.log({employees});

//   if(isLoading){
//     return <p>Loading...</p>
//   }

//   return <div>
//     <h1 className='text-3xl font-bold underline'>Employees</h1>
//     {employees?.length > 0 ? employees.map(emp => <Card
//       key={emp.id}
//       title={emp.name}
//       description={emp.email}
//     />
//     ) : <p> no employees found</p>}
//   </div>
// }


// // import { useState } from 'react'
// // import './App.css'

// function Card({ title, description }: { title: string, description: string }) {
//   return (
//     <div className="card">
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   )
// }


// // function App() {

// //   const [searchValue, setSearchValue] = useState("");

// //   const employees = [
// //     {
// //       name: "Jhon Wick",
// //       age: 45,
// //       email: "john.wick@example.com",
// //       image: "https://randomuser.me/api/portraits/men/3.jpg"
// //     },
// //     {
// //       name: "John Doe",
// //       age: 30,
// //       email: "john.doe@example.com",
// //       image: "https://randomuser.me/api/portraits/men/1.jpg"
// //     },
// //     {
// //       name: "Jane Doe",
// //       age: 25,
// //       email: "jane.doe@example.com",
// //       image: "https://randomuser.me/api/portraits/women/1.jpg"
// //     },
// //     {
// //       name: "Jim Doe",
// //       age: 35,
// //       email: "jim.doe@example.com",
// //       image: "https://randomuser.me/api/portraits/men/2.jpg"
// //     }
// //   ]

// //   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const searchValue = event.target.value;
// //     if (searchValue.length) {
// //       // jhon
// //       setSearchValue(searchValue);
// //     } else {
// //       setSearchValue("");
// //     }
// //   }

// //   const employeesToShow = employees.filter((employee) => {
// //     if (!searchValue.length) return true;
// //     return employee.name.toLowerCase().includes(searchValue.toLowerCase());
// //   })

// //   return <>
// //     <input type="search" placeholder="Search" onChange={handleSearch} />
// //     {employeesToShow.length > 0 ?
// //       employeesToShow.map((employee) =>
// //         <Card
// //           key={employee.email}
// //           title={employee.name}
// //           description={employee.email}
// //           image={employee.image}
// //         />
// //       ) :
// //       <p>No employees found</p>
// //     }
// //   </>
// // }

// // export default App
