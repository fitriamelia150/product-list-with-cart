import { useEffect, useState } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import { getDataProducts } from "../services/product.services"
import TableCartLayout from "../components/Layouts/TableCartLayout"
import TableCart from "../components/Fragments/TableCart"
import TableCartEmpty from "../components/Fragments/TableCartEmpty"


const fakeCarts = [
    {
        "id":4,
        "name": "Classic Tiramisu",
        "price": 5.50,
        "quantity": 1
    },
    {
        "id":2,
        "name": "Vanilla Bean Crème Brûlée",
        "price": 7.00,
        "quantity": 4
    },
    {
        "id":9,
        "name": "Vanilla Panna Cotta",
        "price": 6.50,
        "quantity": 2
    }
]

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        setProducts(getDataProducts)
        setCart(fakeCarts)
    },[])

    return(
        <div className="px-5 py-10 flex flex-col">
            <h1 className="text-2xl font-bold text-rose-950 ">Desserts</h1>

            {
                products.map((product) => {
                    return <CardProduct key={product.id} image={product.image.mobile} category={product.category} name={product.name} price={product.price}/>
                })
            }

            <TableCartLayout>
                {cart.length > 0 &&
                    cart.map((cartItem) => {
                        return <TableCart key={cartItem.id} name={cartItem.name} quantity={cartItem.quantity} price={cartItem.price}/>
                    })
                }

                {cart.length === 0 &&
                    <TableCartEmpty/>
                }
            </TableCartLayout>
        </div>
    )
}

export default ProductsPage