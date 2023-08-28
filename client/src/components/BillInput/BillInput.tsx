import { ChangeEventHandler } from 'react';
import styles from './BillInput.module.scss';

function BillInput({billInputData, onChange}: {billInputData: {title: string, placeholder: string}, onChange: (event: any) => void}) {
  const { title, placeholder } = billInputData
  
  return (
    <div className={styles["bill-input"]}>
      <p className={styles["bill-input__title"]}>{title}</p>
      <input type="text" className={styles["bill-input__input"]} placeholder={placeholder} onChange={(event) => onChange(event)} />
    </div>
  )
}

export default BillInput;