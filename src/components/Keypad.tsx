import Button from "./Button";

interface Props {
    onDigit: (digit: string) => void
    onOperator: (op: string) => void
    onEquals: () => void
}

const KEYS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
const OPERATORS = ['+', '-', 'x', '÷']

const Keypad = ({ onDigit, onOperator, onEquals }: Props) => {
    return (
        <div>
            {OPERATORS.map((op) => (
                <Button key={op} label={op} onClick={() => onOperator(op)} />
            ))}
            {KEYS.map((key) => (
                <Button key={key} label={key} onClick={() => onDigit(key)} />
            ))}
            <Button label="=" onClick={onEquals} />
        </div>
    )
}

export default Keypad