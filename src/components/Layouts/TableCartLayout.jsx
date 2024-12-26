import { useState } from "react"
import Button from "../Elements/Button/Button"

const TableCartLayout = (props) => {
    const { children } = props
    const [totalItem, setTotalItem] = useState(0)

    return(
        <div className="bg-white px-5 py-10 rounded-md">
            <h1 className="text-2xl font-bold text-red-500">Your Cart (0)</h1>
            {children}

            <div className="flex justify-between py-5">
                <p>Order Total</p>
                <p className="text-2xl font-semibold">${totalItem}</p>
            </div>

            <div className="flex items-center justify-center bg-rose-50 px-5 py-3 rounded-md mb-5">
                <img src="/images/icon-carbon-neutral.svg" alt="" />
                <p className="text-sm">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
            </div>

            <Button label="Confirm Order"/>
        </div>
    )
}

export default TableCartLayout