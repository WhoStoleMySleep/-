import styles from './contacts.module.scss';
import youtube from '../../assets/image/youtube.png'
import telegram from '../../assets/image/telegram.png'

function Contacts() {
  return (
    <main className={styles["main"]}>
      <h1 className={styles["main__title"]}>Контакты кондитерской Тортули</h1>
      <div className={styles["main__row"]}>
        <iframe className={styles["main__map"]} src="https://yandex.com/map-widget/v1/?um=constructor%3A7623655166b5d90de5a6932a7d5e34c19aadda49d97501a9cff69e14dafac16a&amp;source=constructor" width="50%" height="800"></iframe>
        <div className={styles["main__column"]}>
          <h2 className={styles["main__column-title"]}>Звоните и пишите — всегда поможем!</h2>
          <a href="tel:+74959847710" className={styles["main__column-number"]}>+7 (495) 984-77-10</a>
          <a href="tel:+79060518799" className={styles["main__column-number"]}>+7 (906) 051-87-99</a>
          <hr className={styles["main__line-separator"]} />
          <div className={styles["main__column-address"]}>
            <h3 className={styles["main__column-address-title"]}>
              Адрес производства
            </h3>
            <p className={styles["main__column-address-text"]}>
              г. Москва, ул. Красного Маяка, д. 16
            </p>
          </div>
          <div className={styles["main__column-address"]}>
            <h3 className={styles["main__column-address-title"]}>
              Юридический Адрес
            </h3>
            <p className={styles["main__column-address-text"]}>117570, г. Москва, улица Красного Маяка, дом 16, помещение VIII, комната 17, этаж 6</p>
          </div>
          <div className={styles["main__social-media"]}>
            <a href="https://www.youtube.com/channel/UC3y_HpoyHeM5N9AC1kOnkMw" className={styles["main__social-link"]}>
              <img src={youtube} alt="" />
            </a>
            <a href="https://t.me/creamroyalbakery" className={styles["main__social-link"]}>
              <img src={telegram} alt="" />
            </a>
          </div> 
        </div>
      </div>
    </main>
  )
}

export default Contacts;