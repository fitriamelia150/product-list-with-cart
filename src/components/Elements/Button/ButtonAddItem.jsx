import { useDispatch, useSelector } from "react-redux"
import { addQtyItem, removeQtyItem } from "../../../redux/slices/cartSlice"

const ButtonAddItem = (props) => {
    const { id } = props
    const cart = useSelector((state) => state.cart.data)
    const cartItem = cart.find((cartItem) => cartItem.id === id)

    const dispatch = useDispatch()

    return (
        <div className="flex justify-between gap-1 bg-red-500 px-5 py-3 rounded-full w-2/3 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 text-white font-bold">
            <div className="flex items-center justify-center border-[1px] w-6 border-rose-100 rounded-full p-1 cursor-pointer" onClick={() => dispatch(removeQtyItem({id}))}>
                <svg className="fill-current text-white hover:text-red-500 transition-all" xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
            </div>

            <p>{cartItem.quantity}</p>

            <div className="flex items-center justify-center border-[1px] w-6 border-rose-100  rounded-full p-1 cursor-pointer" onClick={() => dispatch(addQtyItem({id}))}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
            </div>
        </div>
    )
}

export default ButtonAddItem