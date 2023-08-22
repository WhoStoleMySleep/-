import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.webp';
import telegram from '../../assets/image/telegram.webp'
import styles from './Header.module.scss';
import { useState } from 'react';

function Header() {
  const [onOpen, setOpen] = useState(false)
  const windowWidth = document.documentElement.clientWidth

  const changeClose = () => {
    setOpen(false)
  }

  const changeOpen = () => {
    setOpen((item: boolean) => !item)
  }
  
  return (
    <header className={styles["header"]}>
      <span className={styles["header__wrapper"]}>
        <Link to={'/'} className={styles["header__logo"]} onClick={changeClose}>
          <img src={logo} alt="home"  className={styles["header__logo-img"]}/>
        </Link>

        <nav className={styles["header__menu"]}>
          <div className={styles["header__bar"]} data-open={onOpen}>
            <p onClick={changeOpen} className={styles["header__burger"]}>☰</p>
            <ul className={styles["header__link-list"]} style={{display: `${windowWidth > 768 || onOpen ? "flex" : "none"}`}}>
              <li className={styles["header__link-element"]}>
                <Link to={'/catalog'} className={styles["header__link"]} onClick={changeClose}>ТОРТЫ</Link>
              </li>
              <li className={styles["header__link-element"]}>
                <Link to={'/configurator'} className={styles["header__link"]} onClick={changeClose}>ТОРТЫ НА ЗАКАЗ</Link>
              </li>
              <li className={styles["header__link-element"]}>
                <Link to={'/about-confectionery'} className={styles["header__link"]} onClick={changeClose}>О КОНДИТЕРСКОЙ</Link>
              </li>
              <li className={styles["header__link-element"]}>
                <Link to={'/delivery-and-payment'} className={styles["header__link"]} onClick={changeClose}>ДОСТАВКА И ОПЛАТА</Link>
              </li>
              <li className={styles["header__link-element"]}>
                <Link to={'tel:+74959847710'} className={styles["header__link_telephone"]}>+7 (495) 984-77-10</Link>
              </li>
              <li className={styles["header__link-element"]}>
                <Link to={'https://t.me/creamroyalbakery'} className={styles["header__link_telegram"]}>
                  <img src={telegram} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </span>
    </header>
  )
}

export default Header;