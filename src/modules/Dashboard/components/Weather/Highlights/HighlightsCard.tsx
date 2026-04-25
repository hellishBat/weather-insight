// HighlightsCard
import type { HighlightsProps } from '@/types'

export const HighlightsCard = ({ data }: HighlightsProps) => {
  const { icon, color = '', label, value, unit } = data || {}
  const displayValue =
    value !== undefined && !isNaN(value) ? (
      <>
        <span className="card-highlighted-text">
          {value}
        </span>
        <span className="ml-1 text-lg font-medium text-slate-700 dark:text-slate-300">
          {unit}
        </span>
      </>
    ) : (
      <span className="text-3xl font-semibold opacity-60">N/A</span>
    )

  return (
    <article className="card flex flex-col items-center justify-center p-8 motion-duration-500 motion-delay-200 intersect:motion-preset-pop md:p-6">
      <div className="glass-highlight" />
      <div className="relative z-10 flex items-center gap-4">
        <figure className={`drop-shadow-md [&>*]:h-14 [&>*]:w-14 ${color}`}>
          {icon}
        </figure>
        <div className="flex flex-col">
          <h3 className="card-label mb-1">{label}</h3>
          <div className="card-highlighted-text flex items-baseline drop-shadow-sm">
            {displayValue}
          </div>
        </div>
      </div>
    </article>
  )
}
