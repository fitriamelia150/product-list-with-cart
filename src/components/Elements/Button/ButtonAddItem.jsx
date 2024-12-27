import { useDispatch, useSelector } from "react-redux"
import { addQtyItem, removeQtyItem } from "../../../redux/slices/cartSlice"

const ButtonAddItem = (props) => {
    const { id } = props
    const cart = useSelector((state) => state.cart.data)
    const cartItem = cart.find((cartItem) => cartItem.id === id)

    const dispatch = useDispatch()

    return (
        <div className="flex justify-between gap-1 bg-red-500 px-5 py-3 rounded-full w-1/2 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 text-white font-bold">
            <div className="flex items-center justify-center border-[1px] w-6 border-rose-100 rounded-full p-1" onClick={() => dispatch(removeQtyItem({id}))}>
                <img src="/images/icon-decrement-quantity.svg" alt="" />
            </div>

            <p>{cartItem.quantity}</p>

            <div className="flex items-center justify-center border-[1px] w-6 border-rose-100  rounded-full p-1 " onClick={() => dispatch(addQtyItem({id}))}>
                <img src="/images/icon-increment-quantity.svg" alt="" />
            </div>
        </div>
    )
}

export default ButtonAddItem