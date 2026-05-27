import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Calculator from './Calculator'

describe('Calculator', () => {
    it('muestra 0 al inicio', () => {
        render(<Calculator />)
        expect(screen.getByRole('status')).toHaveTextContent('0')
    })

    it('muestra un número al presionar un botón', async () => {
        render(<Calculator />)
        await userEvent.click(screen.getByText('5'))
        expect(screen.getByRole('status')).toHaveTextContent('5')
    })

    it('concatena dígitos', async () => {
        render(<Calculator />)
        await userEvent.click(screen.getByText('4'))
        await userEvent.click(screen.getByText('2'))
        expect(screen.getByRole('status')).toHaveTextContent('42')
    })

    it('suma dos números correctamente', async () => {
        render(<Calculator />)
        await userEvent.click(screen.getByText('3'))
        await userEvent.click(screen.getByText('+'))
        await userEvent.click(screen.getByText('4'))
        await userEvent.click(screen.getByText('='))
        expect(screen.getByRole('status')).toHaveTextContent('7')
    })

    it('muestra ERROR si el resultado es negativo', async () => {
        render(<Calculator />)
        await userEvent.click(screen.getByText('3'))
        await userEvent.click(screen.getByText('-'))
        await userEvent.click(screen.getByText('9'))
        await userEvent.click(screen.getByText('='))
        expect(screen.getByRole('status')).toHaveTextContent('ERROR')
    })
})