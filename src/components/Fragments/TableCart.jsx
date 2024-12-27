import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteFromCart } from "../../redux/slices/cartSlice"

const TableCart = (props) => {
    const { id, name, quantity, price } = props
    const [totalPrice, setTotalPrice] = useState(0)
    const cart = useSelector((state) => state.cart.data)

    const dispatch = useDispatch()

    useEffect(() => {
        setTotalPrice(price * quantity)
    },[cart])

    return (

            <div className="flex justify-between items-center border-b-[1px] border-rose-300 py-5">
                <div className="">
                    <h1 className="font-semibold text-rose-900 mb-2">{name}</h1>

                    <div className="flex gap-1">
                        <p className="font-semibold text-red-500">{quantity}x</p>
                        <p className="text-rose-400">@ {price}</p>
                        <p className="font-semibold text-rose-500">${totalPrice}</p>
                    </div>
                </div>

                <div className="border-[1px] border-rose-300 rounded-full p-1 " onClick={() => dispatch(deleteFromCart({id}))}>
                    <img src="/images/icon-remove-item.svg" alt="icon-remove-item" />
                </div>
            </div>
    )
}

export default TableCart