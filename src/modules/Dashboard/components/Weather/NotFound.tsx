// Not Found
import { ErrorIcon } from '@/assets'
import data from '@/data/index.json'

const { text } = data?.error || {}

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center" role="status">
      <h2 className="with-icon gap-2 text-2xl font-bold">
        <ErrorIcon />
        <span>{text}</span>
      </h2>
    </div>
  )
}
