import { useEffect, useState } from "react";

export default function useCarts() {
    const [carts,setCarts] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(data=> {
            setLoading(false)
            setCarts(data?.carts)
            console.log(data?.carts)

        });
    },[]);

    return [loading,carts]
}