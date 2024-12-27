import { useSelector } from "react-redux"

import ButtonAddItem from "../Elements/Button/ButtonAddItem"
import ButtonAddToCart from "../Elements/Button/ButtonAddToCart"

const CardProduct = (props) => {
    const { id, image, category, name, price } = props
    const cart = useSelector((state) => state.cart.data)

    const isInCart = cart.some((cartItem) => cartItem.id === id)

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-center items-center relative">

                {isInCart ? 
                    (<ButtonAddItem key={id} id={id} name={name} price={price}/>) 
                    : 
                    (<ButtonAddToCart key={id} id={id} name={name} price={price} image={image}/>)
                    
                    
                }

                <img src={image.mobile} alt={category} className="rounded-md "/>
            </div>

            <div className="">
                <h1 className="text-rose-300 text-sm font-semibold">{category}</h1>
                <h2 className="font-bold text-rose-900 text-lg">{name}</h2>
                <h3 className="font-bold text-red-600 text-lg">${price.toLocaleString("id-ID", {styles: 'currency', currency: 'USD'})}</h3>
            </div>

        </div>
    )
}

export default CardProduct