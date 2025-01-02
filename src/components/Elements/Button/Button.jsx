const Button = (props) => {
    const { label, onClick } = props

    return (
        <button className="bg-red-500 w-full py-3 text-white rounded-full font-semibold hover:bg-red-800"  onClick={() => onClick()}>{label}</button>
    )
}

export default Button