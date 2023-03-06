


export default function House({product}){
    
    return(
        <div className="house-item">
            <img src="https://placehold.jp/400x260.png"  alt={product?.title} />
            <h4> {product?.title} </h4>
            <p> Prix :  {product?.price} </p>
            <p> Voici une petite description de la maison de vos reves !!! </p>
        </div>
    )
}
