const ItemListContainer = ({greeting, name, msg}) => {
    return ( 
        <div className="d-flex justify-content-center mt-5">
            {greeting + " " + name}<br/> {msg}
        </div>
     );
}
 
export default ItemListContainer;