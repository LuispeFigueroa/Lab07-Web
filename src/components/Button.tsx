import './Button.css'

interface Props {
    label: string
    onClick: () => void
    variant?: 'digit' | 'operator' | 'equals' | 'clear'
}

const Button = ({ label, onClick, variant = 'digit' }: Props) => {
    const className = `btn ${variant !== 'digit' ? `btn-${variant}` : ''}`
    return (
        <button className={className} onClick={onClick} type="button">
            {label}
        </button>
    )
}

export default Button