import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/slices/cartSlice"

const ButtonAddToCart = (props) => {
    const { id, name, price, image } = props
    const dispatch = useDispatch()

    return (
        <div 
            className="flex justify-center items-center gap-1 bg-rose-50 px-5 py-3 rounded-full w-1/2 border-[1px] border-rose-400 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 md:w-2/3 cursor-pointer hover:border-red-500 group" 
            onClick={() => dispatch(addToCart({id, name, quantity: 1, price, image}))}>
            <img src="/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
            <p className="text-rose-900 font-semibold md:text-xs group-hover:text-red-500">Add to cart</p>
        </div>
    )
}

export default ButtonAddToCart