export interface IConversionConfigurate {
  min: number
  max: number
  shouldConvert: boolean
  conversionFactor: number
}

export interface IRangeValidationConfigurate {
  value: number
  min: number
  max: number
  name: string
  unit: string
}

export interface IValidationLimits {
  min: number
  max: number
}
