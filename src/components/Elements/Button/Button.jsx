const Button = (props) => {
    const { label } = props

    return (
        <button className="bg-red-500 w-full py-3 text-white rounded-full font-semibold">{label}</button>
    )
}

export default Button