interface Props {
    label: string
    onClick: () => void
}

const Button = ({ label, onClick }: Props) => {
    return (
        <button onClick={onClick} type="button">
            {label}
        </button>
    )
}

export default Button