export const getCorrectColorOfTemperature = (
  actualTemperature: number,
  targetTemperature: number
) => {
  if (
    actualTemperature > targetTemperature + 0.5 ||
    actualTemperature < targetTemperature - 0.5
  )
    return 'text-red-700'
  return 'text-lime-500'
}
