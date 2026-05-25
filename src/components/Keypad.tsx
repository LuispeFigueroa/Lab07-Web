import Button from "./Button";

interface Props {
    onDigit: (digit: string) => void
}

const KEYS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']

const keypad = ({ onDigit }: Props) => {
    return (
        <div>
            {KEYS.map((key) => (
                <Button key={key} label={key} onClick={() => onDigit(key)} />
            ))}
        </div>
    )
}

export default keypad