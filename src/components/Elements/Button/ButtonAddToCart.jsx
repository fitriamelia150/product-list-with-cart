const ButtonAddToCart = () => {
    return (
        <div className="flex justify-center gap-1 bg-rose-50 px-5 py-3 rounded-full w-1/2 border-[1px] border-rose-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[54%] z-10">
            <img src="/images/icon-add-to-cart.svg" alt="" />
            <p className="text-rose-900 font-semibold">Add to cart</p>
        </div>
    )
}

export default ButtonAddToCart