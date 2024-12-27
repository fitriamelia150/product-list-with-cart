import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

import { getDataProducts } from "../services/product.services"

import CardProduct from "../components/Fragments/CardProduct"
import TableCartLayout from "../components/Layouts/TableCartLayout"
import TableCart from "../components/Fragments/TableCart"
import TableCartEmpty from "../components/Fragments/TableCartEmpty"
import CardConfirmOrder from "../components/Fragments/CardConfirmOrder"
// import CardConfirmOrder from "../components/Fragments/CardConfirmOrder"

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const cart = useSelector((state) => state.cart.data)

    useEffect(() => {
        setProducts(getDataProducts)
    },[])

    const popUpConfirmOrder = useRef(null)

    return(
        <>
            <div className="px-5 py-10 flex flex-col gap-10 md:flex-wrap md:flex-row">
                <div className="">
                    <h1 className="text-2xl font-bold text-rose-950 mb-10">Desserts</h1>

                    <div className="flex flex-col gap-10 md:flex-row md:flex-wrap">
                        {
                            products.map((product) => {
                                return <CardProduct key={product.id} id={product.id} image={product.image} category={product.category} name={product.name} price={product.price}/>
                            })
                        }
                    </div>

                </div>

                <TableCartLayout ref={popUpConfirmOrder}>
                    {cart.length > 0 &&
                        cart.map((cartItem) => {
                            return <TableCart key={cartItem.id} id={cartItem.id} name={cartItem.name} quantity={cartItem.quantity} price={cartItem.price} ref={popUpConfirmOrder}/>
                        })
                    }

                    {cart.length === 0 &&
                        <TableCartEmpty/>
                    }
                </TableCartLayout>

            </div>
            
            {/* POPUP CONFIRM ORDER */}
            <div className="hidden" ref={popUpConfirmOrder}>
                <div className="bg-black opacity-30 min-h-screen absolute top-0 w-full z-50">backdrop</div>
                <div className="absolute bottom-0 w-full z-50">
                    <CardConfirmOrder/>
                </div>
            </div>

        </>
    )
}

export default ProductsPage