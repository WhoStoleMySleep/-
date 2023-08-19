import { Link } from 'react-router-dom';
import styles from './undefinedPage.module.scss';

function UndefinedPage() {
  return (
    <main className={styles["main"]}>
      <div className={styles["main__head"]}></div>
      <h1 className={styles["main__title"]}>
        Похоже, мы не можем найти нужную вам страницу
      </h1>
      <p className={styles["main__additional"]}>
        Вот несколько полезных ссылок:
      </p>
      <ul className={styles["main__link-list"]}>
        <li className={styles["main__link-list-element"]}>
          <Link className={styles["main__link"]} to={'/'}>Главная</Link>
        </li>
        <li className={styles["main__link-list-element"]}>
          <Link className={styles["main__link"]} to={'/configurator'}>Конструктор тортов</Link>
        </li>
        <li className={styles["main__link-list-element"]}>
          <Link className={styles["main__link"]} to={'/catalog'}>Каталог тортов</Link>
        </li>
        <li className={styles["main__link-list-element"]}>
          <Link className={styles["main__link"]} to={'/about-confectionery'}>О кондитерской</Link>
        </li>
        <li className={styles["main__link-list-element"]}>
          <Link className={styles["main__link"]} to={'/contacts'}>Контакты</Link>
        </li>
      </ul>
    </main>
  )
}

export default UndefinedPage;