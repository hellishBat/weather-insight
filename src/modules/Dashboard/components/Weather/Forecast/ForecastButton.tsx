// ForecastButton
import type { ForecastButtonProps } from '@/types'

export const ForecastButton: React.FC<ForecastButtonProps> = ({
  isSelected,
  onClick,
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className={`button-base button-hover ${
        isSelected ? `button-selected` : ''
      }`}
    >
      {label}
    </button>
  )
}
