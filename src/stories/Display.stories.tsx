import type { Meta, StoryObj } from '@storybook/react'
import Display from '../components/Display'

const meta: Meta<typeof Display> = {
    title: 'Calculadora/Display',
    component: Display,
}

export default meta
type Story = StoryObj<typeof Display>

export const Inicial: Story = {
    args: { value: '0' }
}

export const ConNumero: Story = {
    args: { value: '12345' }
}

export const Error: Story = {
    args: { value: 'ERROR' }
}

export const MaxDigitos: Story = {
    args: { value: '999999999' }
}