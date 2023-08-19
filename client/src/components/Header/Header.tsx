import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import telegram from '../../assets/image/telegram.png'
import styles from './Header.module.scss';

function Header() {
  const windowWidth = document.documentElement.clientWidth
  
  return (
    <header className={styles["header"]}>
      <span className={styles["header__wrapper"]}>
        <Link to={'/'} className={styles["header__logo"]}>
          <img src={logo} alt="home"  className={styles["header__logo-img"]}/>
        </Link>

        <nav className={styles["header__menu"]}>
          <details open={windowWidth > 768 ? true : false}>
            <summary>☰</summary>
            <ul className={styles["header__link-list"]}>
              <li className={styles["header__link-element"]}>
                <Link to={'/catalog'} className={styles["header__link"]}>ТОРТЫ</Link>
              </li>
              <li className={styles["header__link-element"]}>
                <Link to={'/configurator'} className={styles["header__link"]}>ТОРТЫ НА ЗАКАЗ</Link>
              </li>
              <li className={styles["header__link-element"]}>
                <Link to={'/about-confectionery'} className={styles["header__link"]}>О КОНДИТЕРСКОЙ</Link>
              </li>
              <li className={styles["header__link-element"]}>
                <Link to={'/delivery-and-payment'} className={styles["header__link"]}>ДОСТАВКА И ОПЛАТА</Link>
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
          </details>
        </nav>
      </span>
    </header>
  )
}

export default Header;