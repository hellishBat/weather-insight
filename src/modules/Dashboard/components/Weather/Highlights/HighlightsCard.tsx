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
    <article className="card flex flex-col items-center justify-center p-8 motion-duration-500 motion-delay-200 intersect:motion-preset-pop md:p-4">
      <div className="flex gap-3 align-baseline">
        <figure className={`[&>*]:h-14 [&>*]:w-14 ${color}`}>{icon}</figure>
        <div>
          <h3 className="card-label-sm">{label}</h3>
          <div className="card-highlighted-text flex items-baseline">
            {displayValue}
          </div>
        </div>
      </div>
    </article>
  )
}
