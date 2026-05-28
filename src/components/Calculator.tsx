import { useCalculator } from '../hooks/useCalculator'
import Display from './Display'
import Keypad from './Keypad'
import './Calculator.css'

const Calculator = () => {
    const { display, handleDigit, handleOperator, handleEquals, handleClear, handleToggleSign } = useCalculator()

    return (
        <div className="calculator">
            <Display value={display} />
            <Keypad
                onDigit={handleDigit}
                onOperator={handleOperator}
                onEquals={handleEquals}
                onClear={handleClear}
                onSign={handleToggleSign}
            />
        </div>
    )
}

export default Calculator