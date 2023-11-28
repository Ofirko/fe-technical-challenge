import { HTMLInputTypeAttribute, InputHTMLAttributes, useState, useEffect } from 'react'
import _styles from './MoneyInput.module.css'


interface MoneyInputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  locale?: 'en-GB' | 'de-DE' | any; //this should be adjusted to the `locale` prop
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: number;
  disabled?: boolean;
  required?: boolean;
}
export default function MoneyInput({
  locale='en-GB',
  type='number',
  placeholder='Default',
  value,
  disabled= false,
  required=false,
  }: MoneyInputInterface
  & InputHTMLAttributes<HTMLInputElement>) {

  const [EnteredValue, setEnteredValue] = useState('');

  useEffect(() => {
      const formattedValue = i18nFormattedValue.format(value / 100)
      setEnteredValue(formattedValue)
  })

  const converEuroToCents = (value: number) => {
    console.log(i18nFormattedValue.format(value*100));
    // notice that formatted, this reads as full Euros and not cents
  }

  const handleChangeOrBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    converEuroToCents(e.target.valueAsNumber);
  }

  const i18nFormattedValue = new Intl
  .NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

  return ( <>
    <label 
      htmlFor='MoneyInputTag'
      className={_styles['MoneyInput_label']}>
      {locale.label || `label`}
    </label>
    <input 
      id='MoneyInputTag'
      type={type}
      placeholder={placeholder} 
      disabled={disabled} 
      required={required} 
      className={_styles['MoneyInput_input']}
      onChange={handleChangeOrBlur}
      onBlur={handleChangeOrBlur}
      data-testid="input"
      value={value}
    />
  </>
  )
}
