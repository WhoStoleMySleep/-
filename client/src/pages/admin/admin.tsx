import { useEffect, useState } from 'react';
import styles from './admin.module.scss';
import {  useMutation, useQuery } from '@apollo/client';
import { ALL_CUSTOM_CAKES, ALL_NUMBERS, ALL_OUR_CAKES, REMOVE_CAKES_NUMBER, REMOVE_CUSTOM_CAKES, REMOVE_OUR_CAKES } from '../../GraphQl.queries';

function Admin() {
  const [step, setStep] = useState(0)
  const {cakesNumber, customCakes, ourCakes} = {
    cakesNumber: useQuery(ALL_NUMBERS).data,
    customCakes: useQuery(ALL_CUSTOM_CAKES).data,
    ourCakes: useQuery(ALL_OUR_CAKES).data
  }
  const {removeCakesNumber, removeCustomCakes, removeOurCakes} = {
    removeCakesNumber: useMutation(REMOVE_CAKES_NUMBER)[0],
    removeCustomCakes: useMutation(REMOVE_CUSTOM_CAKES)[0],
    removeOurCakes: useMutation(REMOVE_OUR_CAKES)[0]
  }

  function paramCheck(param: any, twoparam: string) {
    return (param && !!param[twoparam] && param[twoparam]) ? param[twoparam] : []
  }

  function removeCakes(id: string) {
    if (step === 0) {
      removeCakesNumber({variables: {
        id: id
      }})
    } 
    if (step === 1) {
      removeCustomCakes({variables: {
        id: id
      }})
    } 
    if (step === 2) {
      removeOurCakes({variables: {
        id: id
      }})
    }
  }
  
  return (
    <main className={styles["main"]}>
      <h1 className={styles["main__title"]}>Admin</h1>
      <div className={styles["main__select-category"]}>
        <button className={styles["main__select-button"]} onClick={() => setStep(0)}>Номера</button>
        <button className={styles["main__select-button"]} onClick={() => setStep(1)}>Заказы клиентских тортов</button>
        <button className={styles["main__select-button"]} onClick={() => setStep(2)}>Заказы готовых тортов</button>
      </div>
      <article className={styles["main__article"]}>
        <ul className={styles["main__list"]}>
          {step === 0 && paramCheck(cakesNumber, 'cakesNumber').map((item: any, index: number) => (
            <li className={styles["main__list-element"]} key={item.id}>
              <p className={styles["main__list-id"]}>{index + 1})</p>&nbsp;<p className={styles["main__list-element-number"]}>{item.number}</p>
              <p className="main__element-remove" onClick={() => removeCakes(item.id)}>x</p>
            </li>
          ))}
          {step === 1 && paramCheck(customCakes, 'customCakes').map((item: any, index: number) => (
            <li key={index} className='main__list-element'>
              <p className="main__list-element-id">{index + 1})</p>
              <p className="main__list-element-image">{item.image}</p>
              <p className="main__list-element-description">{item.description}</p>
              <p className="main__list-element-name">{item.name}</p>
              <p className="main__list-element-email">{item.email}</p>
              <p className="main__list-element-number">{item.number}</p>
            </li>
          ))}
          {step === 2 && paramCheck(ourCakes, 'ourCakes').map((item: any, index: number) => (
            <li className={styles["main__list-element"]} key={item.id}>
              <p className={styles["main__element-id"]}>{index + 1})</p>
              <ul className={styles["main__element-cakes"]}>
                {item.cakes.map((itemCakes: any, indexCakes: number) => (
                  <li key={indexCakes}>
                    <p className={styles["main__element-cakes-article"]}>{itemCakes[0]}</p>
                    <p className={styles["main__element-cakes-amount"]}>{itemCakes[1]}</p>
                  </li>
                ))}
              </ul>
              <p className="main__element-price">{item.price}</p>
              <p className="main__element-name">{item.name}</p>
              <p className="main__element-email">{item.email}</p>
              <p className="main__element-number">{item.number}</p>
              <p className="main__element-sity">{item.sity}</p>
              <p className="main__element-street">{item.street}</p>
              <p className="main__element-house">{item.house}</p>
              <p className="main__element-apartment">{item.apartment}</p>
              <p className="main__element-comment">{item.comment}</p>
              <p className="main__element-date">{item.date}</p>
              <p className="main__element-interval">{item.timeInterval}</p>
              <p className="main__element-paymentMethod">{item.paymentMethod}</p>
              <p className="main__element-remove" onClick={() => removeCakes(item.id)}>x</p>
            </li>
          ))}
        </ul>
      </article>
    </main>
  )
}

export default Admin;