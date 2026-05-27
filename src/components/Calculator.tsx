import { useState } from 'react'
import Display from './Display'
import Keypad from './Keypad'
import './Calculator.css'

const Calculator = () => {
    const [display, setDisplay] = useState('0')
    const [operand, setOperand] = useState<number | null>(null)
    const [operator, setOperator] = useState<string | null>(null)
    const [waitingForNext, setWaitingForNext] = useState(false)


    const formatResult = (n: number): string => {
        if (n < 0) return 'ERROR'
        if (n > 999999999) return 'ERROR'
        const str = String(n)
        if (str.length > 9) return str.slice(0, 9)
        return str
    }

    const handleDigit = (digit: string) => {

        if (waitingForNext) {
            setDisplay(digit)
            setWaitingForNext(false)
        } else if (display === '0') {
            setDisplay(digit)
        } else if (display.length >= 9) {
            return
        }

        else {
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

        setDisplay(formatResult(result))
        setOperand(null)
        setOperator(null)
        setWaitingForNext(true)
    }

    return (
        <div className="calculator">
            <Display value={display} />
            <Keypad onDigit={handleDigit} onOperator={handleOperator} onEquals={handleEquals} />
        </div>
    )
}
export default Calculator