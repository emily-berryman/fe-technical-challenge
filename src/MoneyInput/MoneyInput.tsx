import styles from './MoneyInput.module.css'
import { useState } from 'react'

interface MoneyInputProps {
  inputState: string
  hoverStyle?: boolean
  focusStyle?: boolean
  errorStyle?: boolean
  disabledStyle?: boolean
  locale: string
  isLabel?: boolean
}

export default function MoneyInput({
  inputState = "",
  hoverStyle = false,
  focusStyle = false,
  errorStyle = false,
  disabledStyle = false,
  locale,
  isLabel = false,
}: MoneyInputProps) {
  const [inputValue, setInputValue] = useState(0)

  const inputClasses = `
    ${styles.moneyInput} 
    ${hoverStyle && styles.moneyInputHoverState}
    ${focusStyle && styles.moneyInputFocusState} 
    ${errorStyle && styles.moneyInputErrorState} 
    ${disabledStyle && styles.moneyInputDisabledState}
  `
  const formatCurrencyDisplay = (value: number, locale: string) => {
    const formattedValue = (value / 100).toLocaleString(locale, {
      style: 'currency',
      currency: 'EUR',
    })
    return formattedValue
  }

  const handleInputChange = (value: string) => {
    const numericInputValue = value.replace(/[^0-9]/g, '')

    if (numericInputValue !== '') {
      // Convert string value into an integer in cents
      const centsValue = parseInt(numericInputValue, 10)
      console.log(`Current value is ${centsValue} cents`)
      // Update the input value state to an integer in cents
      setInputValue(centsValue)
    } else {
      // Update the input value state to 0 if the numericInputValue is empty
      setInputValue(0)
    }
  }

  return (
    <form>
      <div className={isLabel ? styles.labelStateContainer : styles.inputStateContainer }>
        {isLabel ? (
          <label htmlFor="money-input" className={styles.defaultLabel}>Label*</label>
        ) : (
          <label htmlFor="money-input" className={styles.inputStateLabel}>
              <span>State:</span>
              <span>{inputState}</span>
          </label>
        )}
        <input
          className={inputClasses}
          id="money-input"
          disabled={disabledStyle}
          type="text"
          onChange={(e) => handleInputChange(e.target.value)}
          onBlur={(e) => handleInputChange(e.target.value)}
          value={formatCurrencyDisplay(inputValue, locale)}
        />
      </div>
    </form>
  )
}
