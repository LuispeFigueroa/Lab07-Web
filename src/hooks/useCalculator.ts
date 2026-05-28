import { useState } from 'react'

const MAX_VALUE = 999999999

const formatResult = (n: number): string => {
    if (n < 0) return 'ERROR'
    if (n > MAX_VALUE) return 'ERROR'
    const str = String(n)
    if (str.length > 9) return str.slice(0, 9)
    return str
}

export const useCalculator = () => {
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
        } else if (display.length >= 9) {
            return
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
        if (operand === null || operator === null) return
        const current = parseFloat(display)
        let result = 0
        if (operator === '+') result = operand + current
        if (operator === '-') result = operand - current
        if (operator === '×') result = operand * current
        if (operator === '÷') result = operand / current
        if (operator === '%') result = operand % current
        setDisplay(formatResult(result))
        setOperand(null)
        setOperator(null)
        setWaitingForNext(true)
    }
    const handleToggleSign = () => {
        const val = parseFloat(display) * -1
        if (val > 0) {
            setDisplay(formatResult(val))
        } else {
            const str = String(val)
            if (str.length <= 9) setDisplay(str)
        }
    }

    const handleClear = () => {
        setDisplay('0')
        setOperand(null)
        setOperator(null)
        setWaitingForNext(false)
    }

    return { display, operator, handleDigit, handleOperator, handleEquals, handleClear, handleToggleSign }
}