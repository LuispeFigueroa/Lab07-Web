import { useState } from 'react'
import Display from './Display'
import Keypad from './Keypad'

const Calculator = () => {
    const [display, setDisplay] = useState('0')
    const [operand, setOperand] = useState<number | null>(null)
    const [operator, setOperator] = useState<string | null>(null)
    const [waitingForNext, setWaitingForNext] = useState(false)

    const handleDigit = (digit: string) => {

        if (waitingForNext) {
            setDisplay(digit)
            setWaitingForNext(false)
        } else if (display === '0') {
            setDisplay(digit)
        } else {
            setDisplay(display + digit)
        }
    }
    const handleOperator = (op: string) => {
        setOperand(parseFloat(display))
        setOperator(op)
        setWaitingForNext(true)
    }
    const handleEquals = () => {
        if (operand == null || operator === null) return
        const current = parseFloat(display)
        let result = 0

        if (operator === '+') result = operand + current
        if (operator === '-') result = operand - current
        if (operator === 'x') result = operand * current
        if (operator === '÷') result = operand / current

        setDisplay(String(result))
        setOperand(null)
        setOperator(null)
        setWaitingForNext(true)
    }

    return (
        <div>
            <Display value={display} />
            <Keypad onDigit={handleDigit} onOperator={handleOperator} />
        </div>
    )
}
export default Calculator