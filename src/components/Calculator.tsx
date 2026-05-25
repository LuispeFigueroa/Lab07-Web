import { useState } from 'react'
import Display from './Display'
import Keypad from './Keypad'

const Calculator = () => {
    const [display, setDisplay] = useState('0')

    const handleDigit = (digit: string) => {
        setDisplay(display + digit)
    }

    return (
        <div>
            <Display value={display} />
            <Keypad onDigit={handleDigit} />
        </div>
    )
}
export default Calculator