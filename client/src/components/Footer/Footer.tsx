import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import LinkList from '../LinkList/LinkList';
import linkListData from './linkListData';
import paymentCards from '../../assets/image/paymentCards.png'

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <article className={styles["footer__wrapper"]}>
        <span className={styles["footer__site-wrapper"]}>
          <p className={styles["footer__date"]}>© {new Date().getFullYear()} Тортули</p>
          <Link to={'/privacy-policy'} className={styles["footer__privacy-policy-link"]}>Политика конфиденциальности</Link>
        </span>
        <ul className={styles["footer__list"]}>
          <li className="footer__list-element">
            <LinkList linkListData={linkListData[0]} />
          </li>
          <li className="footer__list-element">
            <LinkList linkListData={linkListData[1]} />
          </li>
        </ul>
      </article>
      <article className={styles["footer__payment-method"]}>
        <span className={styles["footer__payment-method-container"]}>
          <p className={styles["footer__payment-method-text"]}>Способы оплаты</p>
          <img src={paymentCards} alt="" className={styles["footer__payment-method-cards"]} />
        </span>
      </article>
    </footer>
  )
}

export default Footer;