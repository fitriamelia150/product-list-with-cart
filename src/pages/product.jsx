import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

import { getDataProducts } from "../services/product.services"

import CardProduct from "../components/Fragments/CardProduct"
import TableCartLayout from "../components/Layouts/TableCartLayout"
import TableCart from "../components/Fragments/TableCart"
import TableCartEmpty from "../components/Fragments/TableCartEmpty"
import CardConfirmOrder from "../components/Fragments/CardConfirmOrder"

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const cart = useSelector((state) => state.cart.data)

    useEffect(() => {
        setProducts(getDataProducts)
    },[])

    const productMainRef = useRef(null)
    const popUpConfirmOrderRef = useRef(null)

    const combinedRefs = useRef({
        productMainRef,
        popUpConfirmOrderRef,
    });

    return(
        <>
            <div ref={productMainRef} className="px-5 py-10 flex flex-col justify-between gap-10 md:flex-wrap md:flex-row md:px-20 md:py-20 md:gap-2 xl:px-80">
                <div className="lg:w-[60%]">
                    <h1 className="text-4xl font-bold text-rose-950 mb-10">Desserts</h1>

                    <div className="flex flex-col items-center justify-center w-full gap-10 md:gap-5 md:flex-row md:flex-wrap md:justify-normal">
                        {
                            products.map((product) => {
                                return <CardProduct key={product.id} id={product.id} image={product.image} category={product.category} name={product.name} price={product.price}/>
                            })
                        }
                    </div>

                </div>

                <TableCartLayout ref={combinedRefs}>
                    {cart.length > 0 &&
                        cart.map((cartItem) => {
                            return <TableCart key={cartItem.id} id={cartItem.id} name={cartItem.name} quantity={cartItem.quantity} price={cartItem.price}/>
                        })
                    }

                    {cart.length === 0 &&
                        <TableCartEmpty/>
                    }
                </TableCartLayout>

            </div>
            
            {/* POPUP CONFIRM ORDER */}
            <div className="hidden" ref={popUpConfirmOrderRef}>
                <div className="flex items-center justify-center">
                    <div className="absolute bottom-0 z-50 md:w-[500px] bg-black bg-opacity-50 min-h-screen min-w-full flex md:items-center pt-52 justify-center md:pt-0">
                        <CardConfirmOrder ref={combinedRefs}/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductsPage