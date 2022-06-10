import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
    const { id } = useParams()
    const [filtrado, setFiltrado] = useState([])
    const arr = [
        {categoria: 'pantalon', id: 10, name: 'rober'},
        {categoria: 'remeras', id: 11, name: 'siro'},
        {categoria: 'pantalon', id: 12, name: 'ro'},
        {categoria: 'pantalon', id: 13, name: 'rob'}
    ]

    useEffect(()=>{
        setFiltrado(arr.filter(a => a.categoria == id))
        console.log(id)
    },[id])
    console.log(filtrado)

    return (
        <>

        </>
    );
}
 
export default Category;