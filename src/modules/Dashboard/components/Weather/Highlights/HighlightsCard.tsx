// HighlightsCard
import type { HighlightsProps } from '@/types'

export const HighlightsCard = ({ data }: HighlightsProps) => {
  const { icon, color = '', label, value, unit } = data || {}
  const displayValue =
    value !== undefined && !isNaN(value) ? (
      <>
        <span className="text-3xl font-semibold">{value}</span>
        <span>{unit}</span>
      </>
    ) : (
      <span className="text-3xl font-semibold">N/A</span>
    )

  return (
    <article className="card motion-preset-pop flex flex-col items-center justify-center p-8 motion-duration-500 motion-delay-200 md:p-4">
      <div className="flex gap-3 align-baseline">
        <figure
          className={`motion-preset-rebound-left motion-duration-300 motion-delay-300 [&>*]:h-14 [&>*]:w-14 ${color}`}
        >
          {icon}
        </figure>
        <div>
          <h3 className="card-label-sm motion-preset-rebound-right motion-duration-300 motion-delay-500">
            {label}
          </h3>
          <div className="card-highlighted-text motion-preset-rebound-down flex items-baseline motion-duration-300 motion-delay-500">
            {displayValue}
          </div>
        </div>
      </div>
    </article>
  )
}
