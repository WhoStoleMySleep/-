import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './Bill.module.scss';
import BillInput from '../BillInput/BillInput';
import TimelineCheckbox from '../TimelineRadio/TimelineRadio';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SAVE_OUR_CAKES } from '../../GraphQl.queries';

function Bill({billData}: {billData: any, setOnOpen: Dispatch<SetStateAction<boolean>>}) {
  const [saveOurCakes] = useMutation(SAVE_OUR_CAKES)
  const [data, setData] = useState({
    cakes: [
      ['10188', '1'],
      ['10221', '1']
    ],
    price: '1',
    name: '',
    email: '',
    number: '',
    sity: '',
    street: '',
    house: '',
    apartment: '',
    comment: '',
    date: '',
    interval: 'С 9:00 до 12:00',
    paymentMethod: 'Наличными при получении',
  })

  useEffect(() => {
    console.log(data);
  }, [data])

  type BillInputData = {
    cakes: any
    price: string
    name: string
    email: string
    number: string
    sity: string
    street: string
    house: string
    apartment: string
    comment: string
    date: string
    interval: string
    paymentMethod: string
  }

  const editData = (param: string, value: string) => {
    setData((item: BillInputData) => ({...item, [param]: value}))
  }

  function submitOrder() {
    if (data) {
      saveOurCakes({variables: {
        id: `${Math.floor(Math.random() * (100000000 - 0 + 1)) + 0}` ,
        cakes: data.cakes,
        price: data.price,
        name: data.name,
        email: data.email,
        number: data.number,
        sity: data.sity,
        street: data.street,
        house: data.house,
        apartment: data.apartment,
        comment: data.comment,
        date: data.date,
        timeInterval: data.interval,
        paymentMethod: data.paymentMethod
      }})
    }
  }
  
  return (
    <article className={styles["bill"]}>
      <div className={styles["bill__wrapper"]}>
        <h2 className={styles["bill__title"]}>
          Ваш заказ:
        </h2>
        <ul className={styles["bill__product-list"]}>
          <li className={styles["bill__product-item"]}>
            <img src={'https://static.tildacdn.com/stor3335-6137-4666-a162-366536643865/89095657.jpg'} alt="" className={styles["bill__product-item-image"]} />
            <Link to="/" className={styles["bill__product-title"]}>
              Чиз-кейк "Нью-Йорк" с апельсином <br />
              <p className={styles["bill__product-article"]}>10188</p>
            </Link>
            <div className={styles["bill__product-item-calc"]}>
              <button className={styles["bill__product-calc-minus"]}>-</button>
              <p className={styles["bill__product-calc-input"]}>1</p>
              <button className={styles["bill__product-calc-plus"]}>+</button>
            </div>
            <p className={styles["bill__product-price"]}>1 200 ₽</p>
            <button className={styles["bill__product-remove"]}>
              <p className={styles["bill__product-remove-text"]}>
                +
              </p>
            </button>
          </li>
          <li className={styles["bill__product-item"]}>
            <img src={'https://static.tildacdn.com/stor3434-3632-4537-b937-623139393034/49901221.jpg'} alt="" className={styles["bill__product-item-image"]} />
            <Link to="/" className={styles["bill__product-title"]}>
              Карамельный <br />
              <p className={styles["bill__product-article"]}>10221</p>
            </Link>
            <div className={styles["bill__product-item-calc"]}>
              <button className={styles["bill__product-calc-minus"]}>-</button>
              <p className={styles["bill__product-calc-input"]}>1</p>
              <button className={styles["bill__product-calc-plus"]}>+</button>
            </div>
            <p className={styles["bill__product-price"]}>1 100 ₽</p>
            <button className={styles["bill__product-remove"]}>
              <p className={styles["bill__product-remove-text"]}>
                +
              </p>
            </button>
          </li>
        </ul>
        <p className={styles["bill__amount"]}>
          Сумма: 2 300 ₽
        </p>
        <div className={styles["bill__first-input-list"]}>
          <BillInput billInputData={{title: 'Фамилия Имя Отчество', placeholder: 'Иван Иванов Иванович'}} onChange={(event) => editData('name', event.target.value)} />
          <BillInput billInputData={{title: 'Ваш email', placeholder: 'example@mail.com'}} onChange={(event) => editData('email', event.target.value)} />
          <BillInput billInputData={{title: 'Ваш телефон', placeholder: '+7 (999) 999-99-99'}} onChange={(event) => editData('number', event.target.value)} />
        </div>
        <div className={styles["bill__delivery"]}>
          <h3 className={styles["bill__delivery-title"]}>
            Доставка
          </h3>
          <div className={styles["bill__first-input-row"]}>
            <BillInput billInputData={{title: 'Город', placeholder: ''}} onChange={(event) => editData('sity', event.target.value)} />
            <BillInput billInputData={{title: 'Улица', placeholder: ''}} onChange={(event) => editData('street', event.target.value)} />
            <BillInput billInputData={{title: 'Дом', placeholder: ''}} onChange={(event) => editData('house', event.target.value)} />
            <BillInput billInputData={{title: 'Квартира', placeholder: ''}} onChange={(event) => editData('apartment', event.target.value)} />
          </div>
          <BillInput billInputData={{title: 'Выберите дату доставки', placeholder: ''}} onChange={(event) => editData('date', event.target.value)} />
          <BillInput billInputData={{title: 'Коментарий', placeholder: 'Коментарий к заказу'}} onChange={(event) => editData('comment', event.target.value)} />
        </div>
        <div className={styles["bill__delivery-interval"]}>
          <p className={styles["bill__text"]}>
            Выберите интервал времени доставки
          </p>
          <div className={styles["bill__radio-list"]}>
            <TimelineCheckbox radioData={{ name: 'timeline', text: 'С 9:00 до 12:00' }} onChange={() => editData('interval', 'С 9:00 до 12:00')} checked={data.interval === '' || data.interval === 'С 9:00 до 12:00'} />
            <TimelineCheckbox radioData={{ name: 'timeline', text: 'С 12:00 до 15:00' }} onChange={() => editData('interval', 'С 12:00 до 15:00')} />
            <TimelineCheckbox radioData={{ name: 'timeline', text: 'С 15:00 до 18:00' }} onChange={() => editData('interval', 'С 15:00 до 18:00')} />
            <TimelineCheckbox radioData={{ name: 'timeline', text: 'С 18:00 до 22:00' }} onChange={() => editData('interval', 'С 18:00 до 22:00')} />
          </div>
          <div className={styles["bill__payment-method"]}>
            <TimelineCheckbox radioData={{ name: 'payment-method', text: 'Наличными при получении' }} onChange={() => editData('paymentMethod', 'Наличными при получении')} checked={data.paymentMethod === '' ||  data.paymentMethod === 'Наличными при получении'} />
            <TimelineCheckbox radioData={{ name: 'payment-method', text: 'Кредитной картой, ЮMoney, Google Pay или Apple Pay' }} onChange={() => editData('paymentMethod', 'Кредитной картой, ЮMoney, Google Pay или Apple Pay')} />
          </div>
          <div className={styles["bill__text-list"]}>
            <p className={styles["bill__text-amount"]}>Сумма: 2 300 ₽</p>
            <p className={styles["bill__text-delivery"]}>Доставка: 1 500 ₽</p>
            <p className={styles["bill__text-address"]}>Россия, Алтайский край, г Барнаул, ул 1 Мая</p>
            <p className={styles["bill__text-total"]}>Итоговая сумма: 3 800 ₽</p>
          </div>
          <button className={styles["bill__submit-button"]} onClick={submitOrder}>Оформить заказ</button>
        </div>
      </div>
    </article>
  )
}

export default Bill;