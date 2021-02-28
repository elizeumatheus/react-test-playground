import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'filled' | 'outlined' | 'text'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  className?: string
}
