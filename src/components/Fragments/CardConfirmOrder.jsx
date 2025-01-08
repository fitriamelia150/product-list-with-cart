import { forwardRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteFromCart } from "../../redux/slices/cartSlice"
import Button from "../Elements/Button/Button"

const CardConfirmOrder = forwardRef((props, ref) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const cart = useSelector((state) => state.cart.data)
    const dispatch = useDispatch()
    const refs = ref

    useEffect(() => {
        if(cart.length > 0){

            const sumPrice = cart.reduce((acc, item) => {
                return acc + item.price * item.quantity
            }, 0)

            setTotalPrice(sumPrice)
        }
    }, [cart])

    const startNewOrder = () => {
        dispatch(deleteFromCart())

        refs.current.popUpConfirmOrderRef.current.classList.add("hidden")
        refs.current.productMainRef.current.classList.remove("fixed")
    }

    return (
        <div className="bg-white min-h-[90vh] w-full py-10 px-7 flex flex-col gap-5 rounded-tl-2xl rounded-tr-2xl md:rounded-2xl md:min-h-fit md:w-[40%]">
            <img src="/images/icon-order-confirmed.svg" alt="icon-order-confirmed" className="w-10"/>

            <div className="">
                <h1 className="text-[2.5rem] leading-10 font-bold mb-3">Order Confirmed</h1>
                <p className="text-rose-500">We hope you enjoy your food!</p>
            </div>

            <div className="">
                <div className=" bg-rose-100 p-5 rounded-lg h-64 md:h-44 overflow-auto">

                    {cart.length > 0 &&
                        cart.map((cartItem) => {
                            const subTotalPrice = cartItem.quantity * cartItem.price

                            return(<div key={cartItem.id} className="flex items-center justify-between border-b-[1px] pb-5 border-rose-200">

                                <div className="flex gap-3 ">
                                    <img src={cartItem.image.thumbnail} alt="img-thumbnail" className="h-14 rounded-md"/>
        
                                    <div className="">
                                        <h1 className="font-semibold mb-2">{cartItem.name}</h1>
                                        <div className="flex gap-3">
                                            <p className="text-red-500 font-semibold">{cartItem.quantity}x</p>
                                            <p className="text-rose-400">@{cartItem.price}</p>
                                        </div>
                                    </div>
                                </div>
        
                                <p className="font-semibold">${subTotalPrice}</p>
                            </div>)
                        })
                    }

                    <div className="flex justify-between mt-5">
                        <h1>Order Total</h1>
                        <p className="text-2xl font-bold">${totalPrice}</p>
                    </div>

                </div>
            </div>

            <Button label="Start New Order" onClick={() => startNewOrder()}/>
        </div>
    )
})

export default CardConfirmOrder