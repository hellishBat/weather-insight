// LocationButton
import { LocationIcon } from '@/assets'
import type { LocationButtonProps } from '@/types'

export const LocationButton = ({ clickHandler }: LocationButtonProps) => {
  return (
    <button
      className="absolute right-0 top-0 rounded-md border-none p-2 before:absolute before:left-0 before:top-1/2 before:h-2/3 before:w-0.5 before:-translate-y-1/2 before:bg-gray-400/30 active:opacity-80 dark:before:bg-gray-500/30 md:hover:text-slate-700/50 md:hover:transition-colors md:hover:dark:text-white/50"
      onClick={clickHandler}
      type="button"
    >
      <LocationIcon className="text-2xl" />
    </button>
  )
}
