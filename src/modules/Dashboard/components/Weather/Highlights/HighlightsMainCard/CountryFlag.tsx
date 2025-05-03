// CountryFlag
import Flag from 'react-world-flags'

import countries from 'i18n-iso-countries'
import en from 'i18n-iso-countries/langs/en.json'

countries.registerLocale(en)

export const CountryFlag = ({ countryName }: { countryName: string }) => {
  const countryCode = countries.getAlpha2Code(countryName, 'en')

  return countryCode ? <Flag code={countryCode} className="h-4" /> : null
}
