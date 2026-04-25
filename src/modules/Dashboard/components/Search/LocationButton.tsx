// LocationButton
import { LocationIcon } from '@/assets'
import type { LocationButtonProps } from '@/types'

export const LocationButton = ({ clickHandler }: LocationButtonProps) => {
  return (
    <button
      className="group button-icon relative flex items-center justify-center rounded-r-xl rounded-l-[4px] p-[7px]"
      onClick={clickHandler}
      type="button"
    >
      <LocationIcon className="text-2xl text-slate-500 group-hover:text-slate-700 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] dark:text-slate-400 group-hover:dark:text-white dark:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
    </button>
  )
}
