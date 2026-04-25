// ForecastButton
import type { ForecastButtonProps } from '@/types'

export const ForecastButton = ({
  isSelected,
  onClick,
  label,
}: ForecastButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button-base ${
        isSelected ? 'button-selected' : 'button-hover'
      }`}
    >
      {label}
    </button>
  )
}
