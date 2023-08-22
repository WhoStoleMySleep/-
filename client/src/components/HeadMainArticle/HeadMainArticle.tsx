import styles from './HeadMainArticle.module.scss';
import cake1 from '../../assets/image/cake1.webp';
import cake2 from '../../assets/image/cake2.webp';
import cake3 from '../../assets/image/cake3.webp';

function HeadMainArticle() {
  return (
    <article className={styles["head-main-article"]}>
      <span className={styles["head-main-article__wrapper"]}>
        <span className={styles["head-main-article__text"]}>
          <h1 className={styles["head-main-article__title"]}>
            Мы делаем вкусные торты
          </h1>
          <p className={styles["head-main-article__description"]}>
            У нас можно заказать авторский торт или купить готовый из каталога
          </p>
        </span>
        <span className={styles["head-main-article__cakes"]}>
          <img src={cake1} alt="" className={styles["head-main-article__cake-one"]} />
          <img src={cake2} alt="" className={styles["head-main-article__cake-two"]} />
          <img src={cake3} alt="" className={styles["head-main-article__cake-three"]} />
        </span>
      </span>
    </article>
  )
}

export default HeadMainArticle;