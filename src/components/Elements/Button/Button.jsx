const Button = (props) => {
    const { label, onClick } = props

    return (
        <button className="bg-red-500 w-full py-3 text-white rounded-full font-semibold"  onClick={() => onClick()}>{label}</button>
    )
}

export default Button