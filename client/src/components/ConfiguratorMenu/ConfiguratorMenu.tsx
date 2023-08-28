import { useState } from 'react';
import styles from './ConfiguratorMenu.module.scss';
import { Link } from 'react-router-dom';
import scrollingBan from '../../utils/scrollingBan';
import { useMutation } from '@apollo/client';
import { SAVE_CUSTOM_CAKES } from '../../GraphQl.queries';

function ConfiguratorMenu({configuratorMenuData}: {configuratorMenuData: {setOpen: any}}) {
  const [saveCustomCakes] = useMutation(SAVE_CUSTOM_CAKES)
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    id: `${Math.floor(Math.random() * (100000000 - 0 + 1)) + 0}`,
    image: '1',
    description: '',
    name: '',
    email: '',
    number: '',
  })

  type ConfiguratorInputData = {
    id: string
    image: string
    description: string
    name: string
    email: string
    number: string
  }

  const onClose = () => {
    configuratorMenuData.setOpen(false)
    setStep(1)

    scrollingBan(false)
  }
  
  const nextStep = () => {
    setStep((item) => item < 3 ? item + 1 : item)
  }

  const prevStep = () => {
    setStep((item) => item > 1 ? item - 1 : item)
  }

  scrollingBan(true)

  const editData = (param: string, value: string) => {
    setData((item: ConfiguratorInputData) => ({...item, [param]: value}))
  }

  function submitOrder() {
    if (data) {
      saveCustomCakes({variables: {
        id: data.id,
        image: data.image,
        description: data.description,
        name: data.name,
        email: data.email,
        number: data.number
      }})
    }
  }
  
  return (
    <article className={styles["configurator-menu"]}>
      <div className={styles["configurator-menu__close-button"]} onClick={onClose}></div>
      <div className={styles["configurator-menu__wrapper"]}>
        {step === 1 &&
          <div className={styles["configurator-menu__content-container"]}>
            <p className={styles["configurator-menu__text"]}>Прикрепите фотографии с дизайном тортов, которые вам нравятся. Мы сможем повторить или взять за основу любой ваш дизайн</p>
            <input type="file" name="" id="" className={styles["configurator-menu__input-file"]} />
          </div>
        }
        {step === 2 &&
          <div className={styles["configurator-menu__content-container"]}>
            <p className={styles["configurator-menu__text"]}>Введите описание торта</p>
            <textarea name="" id="" className={styles["configurator-menu__textarea"]} onChange={(e) => editData('description', e.target.value)}></textarea>
          </div>
        }
        {step === 3 &&
          <div className={styles["configurator-menu__content-container"]}>
            <p className={styles["configurator-menu__text"]}>Контактные данные</p>
            <div className={styles["configurator-menu__input-list"]}>
              <input type="text" className={styles["configurator-menu__input"]} placeholder='Ваше имя и фамилия' onChange={(e) => editData('name', e.target.value)} />
              <input type="text" className={styles["configurator-menu__input"]} placeholder='Ваш e-mail' onChange={(e) => editData('email', e.target.value)} />
              <input type="text" className={styles["configurator-menu__input"]} placeholder='+7' onChange={(e) => editData('number', e.target.value)} />
            </div>
            <p className={styles["configurator-menu__text"]}>
              Менеджер свяжется с вами по телефону для выяснения деталей заказа. <br />
              Также сможет проконсультировать по составу начинок и ответить на все вопросы.
              <br />
              <br />
              Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <Link className={styles["configurator-menu__link"]} to={'/privacy-policy'}>политикой конфендициальности</Link>
            </p>
          </div>
        }
        <div className={styles["configurator-menu__controller"]}>
          <button className={`${styles["configurator-menu__prev-step"]} ${step === 1 ? styles["configurator-menu__prev-step_deactive"] : ''}`} onClick={prevStep}>← Предыдущий шаг</button>
          <div className={styles["configurator-menu__controller-step"]}>{step}/3</div>
          <button className={styles["configurator-menu__next-step"]} onClick={step === 3 ? submitOrder : nextStep}>{step !== 3 ? 'Следующий шаг →' : 'Подтвердить'}</button>
        </div>
      </div>
    </article>
  )
}

export default ConfiguratorMenu;