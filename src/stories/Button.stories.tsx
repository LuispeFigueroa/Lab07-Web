import type { Meta, StoryObj } from '@storybook/react'
import Button from '../components/Button'

const meta: Meta<typeof Button> = {
    title: 'Calculadora/Button',
    component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Digit: Story = {
    args: { label: "744", variant: 'digit' }
}

export const Operador: Story = {
    args: { label: '+', variant: 'operator' }
}

export const Igual: Story = {
    args: { label: '=', variant: 'equals' }
}

export const Limpiar: Story = {
    args: { label: 'C', variant: 'clear' }
}