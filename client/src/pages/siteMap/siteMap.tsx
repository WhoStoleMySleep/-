import { Link } from 'react-router-dom';
import styles from './siteMap.module.scss';

function SiteMap() {
  return (
    <main className={styles["main"]}>
      <div className={styles["main__row"]}>
        <h2 className={styles["main__row-title"]}>Тортули</h2>
        <ul className={styles["main__link-list"]}>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/'} className={styles["main__link"]}>Тортули - магазин тортов</Link>
            Кондитерское производство тортов с доставкой в юрге и по району. Онлайн заказ и цены на сайте.
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/privacy-policy'} className={styles["main__link"]}>Политика конфиденциальности</Link>
            Политика обработки персональных данных пользователей сайта кондитерской Тортули
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/catalog'} className={styles["main__link"]}>Каталог тортов</Link>
            Каталог готовых тортов кондитерской Тортули в Юрге. Онлайн-заказ и цены на сайте
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/about-confectionery'} className={styles["main__link"]}>О кондитерской</Link>
            Мы производим кондитерские изделия на заказ, а также доставляем готовые торты оптом и в розницу по Юрге и по району
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/contacts'} className={styles["main__link"]}>Контакты</Link>
            Контакты кондитерского производства Тортули
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/delivery-and-payment'} className={styles["main__link"]}>Доставка и оплата</Link>
            Информация о доставке и оплате тортов в Юрге в кондитерской Тортули
          </li>
        </ul>
      </div>
      <div className={styles["main__row"]}>
        <h2 className={styles["main__row-title"]}>Торты</h2>
        <ul className={styles["main__link-list"]}>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/configurator'} className={styles["main__link"]}>Торты на заказ в Юрге</Link>
            На сайте кондитерской Тортули можно заказать торт с доставкой по Юрге и по району
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/catalog'} className={styles["main__link"]}>Торты на День рождения</Link>
            В кондитерской Тортули можно заказать онлайн торты на День рождения для ребенка и взрослого с доставкой по Юрге и по району
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/catalog'} className={styles["main__link"]}>Классические торты</Link>
            На сайте кондитерской Тортули можно заказать онлайн классические торты с доставкой по Юрге и по району
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/contacts'} className={styles["main__link"]}>Бисквитные торты</Link>
            На сайте кондитерской Тортули можно заказать онлайн бисквитные торты с доставкой по Юрге и по району
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/contacts'} className={styles["main__link"]}>Детские торты</Link>
            На сайте кондитерской Тортули можно заказать детские торты для мальчиков и девочек с доставкой по Юрге и по району
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/contacts'} className={styles["main__link"]}>Украшения для тортов</Link>
            На сайте кондитерской Тортули можно заказать украшения для готовых тортов с доставкой по Юрге и по району
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/contacts'} className={styles["main__link"]}>Веганские десерты</Link>
            На сайте кондитерской Тортули можно заказать онлайн веганские десерты с доставкой по Юрге и по району
          </li>
          <li className={styles["main__link-list-element"]}>
            <Link to={'/contacts'} className={styles["main__link"]}>Каталог тортов</Link>
            Каталог готовых тортов кондитерской Тортули в Москве. Онлайн-заказ и цены на сайте
          </li>
        </ul>
      </div>
    </main>
  )
}

export default SiteMap;