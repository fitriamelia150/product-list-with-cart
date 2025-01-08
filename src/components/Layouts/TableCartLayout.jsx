import { forwardRef, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Button from "../Elements/Button/Button"

const TableCartLayout = forwardRef((props, ref) => {
    const { children } = props
    const refs = ref

    const cart = useSelector((state) => state.cart.data)

    const [totalItem, setTotalItem] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if(cart.length >= 0){
            const totalQty = cart.reduce((acc, item) => {
                return acc + item.quantity
            }, 0)

            setTotalItem(totalQty)

            const sumPrice = cart.reduce((acc, item) => {
                return acc + item.price * item.quantity
            }, 0)

            setTotalPrice(sumPrice)
        }
    }, [cart])

    const showConfirmOrder = () => {
        refs.current.popUpConfirmOrderRef.current.classList.remove("hidden")
        refs.current.productMainRef.current.classList.add("fixed")
    }

    return(
            <div className="bg-white px-5 py-10 rounded-md h-fit w-full lg:w-80">
                <h1 className="text-2xl font-bold text-red-500">Your Cart ({totalItem})</h1>

                {children}

                {cart.length > 0 &&
                    <>
                        <div className="flex justify-between py-5">
                            <p>Order Total</p>
                            <p className="text-2xl font-semibold">${totalPrice}</p>
                        </div>

                        <div className="flex items-center justify-center bg-rose-50 px-5 py-3 rounded-md mb-5">
                            <img src="/images/icon-carbon-neutral.svg" alt="img-carbon-neutral" />
                            <p className="text-sm">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
                        </div>

                        <Button label="Confirm Order" onClick={showConfirmOrder}/>
                    </>
                }
            </div>
    )
})

export default TableCartLayout