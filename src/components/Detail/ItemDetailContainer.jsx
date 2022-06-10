import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const { id } = useParams()

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [itemElegido, setItemElegido] = useState()
    const [itemFiltrado, setItemFiltrado] = useState([])


    useEffect(()=>{
        const itemDetail = new Promise((res, rej) =>{
            setTimeout(()=>{
                res([
                    {id: 1, category: 'pantalones',img: 'jeanChupin.jpg', title: 'Jean chupin', precio: 3500, detalle: 'Jean chupin, pegado al cuerpo, un corte moderno, el largo es hasta los tobillos', talle: 'S', stock: 20},
                    {id: 2, category: 'pantalones',img: 'jeanAncho.jpg', title: 'Jean ancho', precio: 5500, detalle: 'Jean ancho abajo, el corte se va abriendo a medida', talle: 'M', stock: 17},
                    {id: 3, category: 'pantalones',img: 'jeanCorto.jpg', title: 'Jean corto', precio: 4700, detalle: 'Jean corto, una bermuda clasica de jean, excelente para el verano y elegante', talle: 'L', stock: 25},
                    {id: 4, category: 'pantalones',img: 'jeanChupin.jpg', title: 'Jean sin bolsillos', precio: 3200, detalle: 'Jean chupin sin bolsillos traseros, un estilo nuevo y unico', talle: 'XS', stock: 15},
                    {id: 5, category: 'pantalones',img: 'jeanCortado.jpg', title: 'Jean cortado', precio: 5300, detalle: 'Jean chupin cortado en las rodillas, corte moderno y muy lindo visualmente', talle: 'S', stock: 6},
                    {id: 6, category: 'pantalones',img: 'jeanSinCostura.jpg', title: 'Jean sin costuras', precio: 4500, detalle: 'Jean ancho sin costuras en sus terminaciones de los tobillos', talle: 'M', stock: 2},
                    {id: 7, category: 'pantalones',img: 'jeanBotones.jpg', title: 'Jean con botones', precio: 3500, detalle: 'Jean chupin con botones', talle: 'M', stock: 23},
                    {id: 8, category: 'pantalones',img: 'jeanBotonesDorados.jpg', title: 'Jean con botones dorados', precio: 7500, detalle: 'Jean chupin con botones dorados', talle: 'XL', stock: 14},
                    {id: 9, category: 'camisas', img: 'elGenoves.jpg', title: 'Camisa El Genoves', precio: 3500, detalle: 'Camisa Negra El Genoves Elastizada', talle: 'S', stock: 20},
                    {id: 10, category: 'camisas', img: 'taverniti.jpg', title: 'Camisa Taverniti', precio: 5500, detalle: 'Camisa Blanca Taverniti Soana', talle: 'M', stock: 17},
                    {id: 11, category: 'camisas', img: 'equus.jpg', title: 'Camisa Equus', precio: 5900, detalle: 'Camisa Blanca Equus Iñaki', talle: 'L', stock: 25},
                    {id: 12, category: 'camisas', img: 'oxfordPoloClub.jpg', title: 'Camisa Oxford Polo Club', precio: 4200, detalle: 'Camisa Roja Oxford Polo Club Perth', talle: 'XS', stock: 15},
                    {id: 13, category: 'camisas', img: 'mrTown.jpg', title: 'Camisa MR. Town', precio: 6300, detalle: 'Camisa Negra Mr.Town Paintings', talle: 'S', stock: 6},
                    {id: 14, category: 'camisas', img: 'equusRosa.jpg', title: 'Camisa Equus Rosa', precio: 5500, detalle: 'Camisa Rosa Equus Stevens', talle: 'M', stock: 2},
                    {id: 15, category: 'camisas', img: 'bensimon.jpg', title: 'Camisa Bensimon', precio: 4500, detalle: 'Camisa Roja Bensimon Rayada', talle: 'M', stock: 23},
                    {id: 16, category: 'camisas', img: 'levis.jpg', title: 'Camisa Levi`s', precio: 4500, detalle: 'Remera Blanca Penguin Raglan', talle: 'XL', stock: 14},
                    {id: 17, category: 'remeras',img: 'penguin.jpg', title: 'Remera Penguin', precio: 4500, detalle: 'Remera Blanca Lacoste Cols Roules', talle: 'S', stock: 20},
                    {id: 18, category: 'remeras',img: 'lacoste.jpg', title: 'Remera Lacoste', precio: 6500, detalle: 'Remera Negra Wintertex EVMNT', talle: 'M', stock: 17},
                    {id: 19, category: 'remeras',img: 'wintertex.jpg', title: 'Remera WinterTex', precio: 4700, detalle: 'Remera Blanca Polo Label', talle: 'L', stock: 25},
                    {id: 20, category: 'remeras',img: 'poloLabel.jpg', title: 'Remera Polo Label', precio: 2200, detalle: 'Remera Gris Vinson Makers', talle: 'XS', stock: 15},
                    {id: 21, category: 'remeras',img: 'gcuatro.jpg', title: 'Remera G4', precio: 2300, detalle: 'Remera Negra G4 Relax', talle: 'S', stock: 6},
                    {id: 22, category: 'remeras',img: 'adidas.jpg', title: 'Remera Adidas', precio: 3500, detalle: 'Remera Gris Adidas', talle: 'M', stock: 2},
                    {id: 23, category: 'remeras',img: 'howard.jpg', title: 'Remera Howard', precio: 2500, detalle: 'Polera Negra Howard', talle: 'M', stock: 23},
                    {id: 24, category: 'remeras',img: 'trooper.jpg', title: 'Remera Trooper', precio: 3900, detalle: 'Remera Azul Trooper Go Outside', talle: 'XL', stock: 14}
                ]);
            }, 2000);
        });

        itemDetail
            .then((result)=>{
                setItemElegido(result.find(item => item.id == id))
                setItemFiltrado(result.filter(item => item.id !== 1));
            })
            .catch((error)=>{
                setError(true);
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })

    },[]);
    console.log(itemElegido)
    
    useEffect(()=>{
    },[itemElegido])

    

    return ( 
        <div>
           <ItemDetail itemElegido ={itemElegido} itemFiltrado={itemFiltrado} />
        </div>
     );
}
 
export default ItemDetailContainer;