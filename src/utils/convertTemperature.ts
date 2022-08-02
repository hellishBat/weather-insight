// convertTemperature

// Convert Kelvin to Celsius
export const convertToC = (tempK: number) => {
  return tempK - 273.15
}

// Convert Kelvin to Fahrenheit
export const convertToF = (tempK: number) => {
  return convertToC(tempK) * 1.8 + 32
}
