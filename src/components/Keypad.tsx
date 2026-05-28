import Button from './Button'
import './Keypad.css'

interface Props {
    onDigit: (digit: string) => void
    onOperator: (op: string) => void
    onEquals: () => void
    onClear: () => void
    onSign: () => void
}

const KEYS = [
    { label: 'C', variant: 'clear' as const },
    { label: '+/-', variant: 'operator' as const },
    { label: '%', variant: 'operator' as const },
    { label: '÷', variant: 'operator' as const },
    { label: '7', variant: 'digit' as const },
    { label: '8', variant: 'digit' as const },
    { label: '9', variant: 'digit' as const },
    { label: '×', variant: 'operator' as const },
    { label: '4', variant: 'digit' as const },
    { label: '5', variant: 'digit' as const },
    { label: '6', variant: 'digit' as const },
    { label: '-', variant: 'operator' as const },
    { label: '1', variant: 'digit' as const },
    { label: '2', variant: 'digit' as const },
    { label: '3', variant: 'digit' as const },
    { label: '+', variant: 'operator' as const },
    { label: '0', variant: 'digit' as const },
    { label: '.', variant: 'digit' as const },
    { label: '=', variant: 'equals' as const },
]

const OPERATORS = ['÷', '×', '-', '+', '%']

const Keypad = ({ onDigit, onOperator, onEquals, onClear, onSign }: Props) => {
    const handle = (label: string, variant: string) => {
        if (variant === 'clear') return onClear()
        if (label === '=') return onEquals()
        if (label === '+/-') return onSign()
        if (OPERATORS.includes(label) || label === '%') return onOperator(label)
        onDigit(label)
    }

    return (
        <div className="keypad">
            {KEYS.map(({ label, variant }) => (
                <Button key={label} label={label} onClick={() => handle(label, variant)} variant={variant} />
            ))}
        </div>
    )
}

export default Keypad