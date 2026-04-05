import { useEffect, useState } from "react";

export const useFetch = (url:string) => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<boolean>(false);

    const fetchData = async () => {
      try{
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const _data = await response.json();
        setData(_data);
      }catch(err){
        setIsError(true);
        console.log(err);
      }
      setIsLoading(false);
  }

    useEffect(()=>{
        fetchData();
    },[])

    return {data, isLoading, isError};
}