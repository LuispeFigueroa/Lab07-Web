import './Keypad.css'

interface Props {
    value: string
}

const Display = ({ value }: Props) => {
    return (
        <div className="display">
            <span role="status">{value}</span>
        </div>
    )
}

export default Display