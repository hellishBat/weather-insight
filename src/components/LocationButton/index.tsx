// LocationButton
import { FC } from 'react'
import LocationIcon from '@/assets/images/svg/location.svg'

type FunctionTypes = {
  clickHandler: () => void
}

const LocationButton: FC<FunctionTypes> = ({ clickHandler }) => {
  return (
    <button
      className="py-2 px-3 rounded-md bg-slate-700 border border-white/5 font-medium text-white hover:transition-colors  md:hover:shadow-sm md:hover:bg-slate-600 md:hover:dark:bg-slate-600"
      onClick={clickHandler}
      type="button"
    >
      <LocationIcon />
    </button>
  )
}

export default LocationButton
