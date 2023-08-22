import { useState } from 'react';
import styles from './ConfiguratorMenu.module.scss';
import { Link } from 'react-router-dom';

function ConfiguratorMenu({configuratorMenuData}: {configuratorMenuData: {setOpen: any}}) {
  const [step, setStep] = useState(1)

  const onClose = () => {
    configuratorMenuData.setOpen(false)
    setStep(1)

    if (document.querySelector('html')) {
      const html = document.querySelector('html') as HTMLHtmlElement
      html.style.overflow = 'visible'
    }
  }
  
  const nextStep = () => {
    setStep((item) => item < 3 ? item + 1 : item)
  }

  const prevStep = () => {
    setStep((item) => item > 1 ? item - 1 : item)
  }

  if (document.querySelector('html')) {
    const html = document.querySelector('html') as HTMLHtmlElement
    html.style.overflow = 'hidden'
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
            <textarea name="" id="" className={styles["configurator-menu__textarea"]}></textarea>
          </div>
        }
        {step === 3 &&
          <div className={styles["configurator-menu__content-container"]}>
            <p className={styles["configurator-menu__text"]}>Контактные данные</p>
            <div className={styles["configurator-menu__input-list"]}>
              <input type="text" className={styles["configurator-menu__input"]} placeholder='Ваше имя и фамилия' />
              <input type="text" className={styles["configurator-menu__input"]} placeholder='Ваш e-mail' />
              <input type="text" className={styles["configurator-menu__input"]} placeholder='+7' />
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
          <button className={`${styles["configurator-menu__next-step"]} ${step === 3 ? styles["configurator-menu__next-step_deactive"] : ''}`} onClick={nextStep}>Следующий шаг →</button>
        </div>
      </div>
    </article>
  )
}

export default ConfiguratorMenu;