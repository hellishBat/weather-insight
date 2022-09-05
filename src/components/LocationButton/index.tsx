// LocationButton
import { FC } from 'react'
import { LocationButtonTypes } from '@/types'
import { LocationIcon } from '@/assets'
import { styles } from '@/styles'

const LocationButton: FC<LocationButtonTypes> = ({ clickHandler }) => {
  return (
    <button
      className={`${styles.button.filled} ${styles.button.common}`}
      onClick={clickHandler}
      type="button"
    >
      <LocationIcon className="text-[1.5em]" />
    </button>
  )
}

export default LocationButton
