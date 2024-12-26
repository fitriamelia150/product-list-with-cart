import ButtonAddItem from "../Elements/Button/ButtonAddItem"
// import ButtonAddToCart from "../Elements/Button/ButtonAddToCart"

const CardProduct = (props) => {
    const { image, category, name, price } = props

    return (
        <div className="relative mb-10">
            <div className="flex flex-col justify-center items-center">
                {/* <ButtonAddToCart/> */}
                <ButtonAddItem/>
                <img src={image} alt={category} className="rounded-md mb-10"/>
            </div>

            <div className="">
                <h1 className="text-rose-300 text-sm font-semibold">{category}</h1>
                <h2 className="font-bold text-rose-900 text-lg">{name}</h2>
                <h3 className="font-bold text-red-600 text-lg">${price}</h3>
            </div>

        </div>
    )
}

export default CardProduct