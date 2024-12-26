import { useEffect, useState } from "react"

const TableCart = (props) => {
    const { name, quantity, price } = props
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(price * quantity)
    },[])

    return (
        <div className="flex justify-between items-center border-b-[1px] border-rose-300 py-5">
            <div className="">
                <h1 className="font-semibold text-rose-900">{name}</h1>

                <div className="flex gap-1">
                    <p className="font-semibold text-red-500">{quantity}x</p>
                    <p className="text-rose-400">@ {price}</p>
                    <p className="font-semibold text-rose-500">${totalPrice}</p>
                </div>
            </div>

            <div className="border-[1px] border-rose-300 rounded-full p-1 ">
                <img src="/images/icon-remove-item.svg" alt="icon-remove-item" />
            </div>
        </div>
    )
}

export default TableCart