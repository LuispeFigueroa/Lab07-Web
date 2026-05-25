interface Props {
    value: string
}

const Display = ({ value }: Props) => {
    return (
        <div>
            <span>{value}</span>
        </div>
    )
}

export default Display