// convertRegionNames
const convertRegionNames = (countryCode: string) => {
  const regionNames = new Intl.DisplayNames('en', { type: 'region' })
  return regionNames.of(countryCode.toString())
}

export default convertRegionNames
