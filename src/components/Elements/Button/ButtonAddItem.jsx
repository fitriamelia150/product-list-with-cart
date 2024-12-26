const ButtonAddItem = () => {
    return (
        <div className="flex justify-between gap-1 bg-red-500 px-5 py-3 rounded-full w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[54%] z-10 text-white font-bold">
            <div className="flex items-center justify-center border-[2px] border-rose-100 rounded-full p-1 ">
                <img src="/images/icon-decrement-quantity.svg" alt="" />
            </div>

            <p>3</p>

            <div className="flex items-center justify-center border-[2px] border-rose-100  rounded-full p-1 ">
                <img src="/images/icon-increment-quantity.svg" alt="" />
            </div>
        </div>
    )
}

export default ButtonAddItem