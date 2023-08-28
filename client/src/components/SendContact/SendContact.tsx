import { useEffect, useState } from 'react';
import styles from './SendContact.module.scss';
import { gql, useMutation, useQuery } from '@apollo/client';

const SAVE_NUMBER = gql`
mutation Mutation($createCakesNumberId: String!, $number: String!) {
  createCakesNumber(id: $createCakesNumberId, number: $number) {
    id
    number
  }
}
`

function SendContact() {  
  const [number, setNumber] = useState('');
  const [saveNumber] = useMutation(SAVE_NUMBER)
  
  const handleSaveNumber = () => {
    if (number) {
      saveNumber({
        variables: {
          createCakesNumberId: `${Math.floor(Math.random() * (100000000 - 0 + 1)) + 0}`,
          number: number
        }
      })
    }
  }
  
  return (
    <article className={styles["send-contact"]}>
      <h2 className={styles["send-contact__title"]}>
        Оставьте номер и мы поможем с выбором торта
      </h2>
      <span className={styles["send-contact__input-container"]}>
        <input type="text" className={styles["send-contact__input"]} onChange={(e) => setNumber(e.target.value)} placeholder='Телефон' />
        <button className={`${styles["send-contact__button"]} ${number.length !== 11 && styles["send-contact__button_deactive"]}`} onClick={number.length === 11 ? handleSaveNumber : () => ''} type='button'>Позвоните мне</button>
      </span>
    </article>
  )
}

export default SendContact;