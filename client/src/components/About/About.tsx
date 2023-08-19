import styles from './About.module.scss';
import aboutImage1 from '../../assets/image/aboutImage1.png'
import aboutImage2 from '../../assets/image/aboutImage2.png'
import aboutImage3 from '../../assets/image/aboutImage3.png'

function About() {
  return (
    <article className={styles["about"]}>
      <h2 className={styles["about__title"]}>
        Работаем с любовью
      </h2>
      <span className={styles["about__wrapper"]}>
        <ul className={styles["about__wrapper"]}>
          <li className={styles["about__text-element"]}>
            <span className={styles["about__line"]}>
              <h3 className={styles["about__line-title"]}>
                Индивидуальный подход
              </h3>
              <p className={styles["about__line-description"]}>
                Выполняем любой торт по вашему описанию и воплощаем в жизнь любую задумку
              </p>
            </span>
            <span className={styles["about__line"]}>
              <h3 className={styles["about__line-title"]}>
                Ручная работа
              </h3>
              <p className={styles["about__line-description"]}>
                Каждое изделие дело рук наших кондитеров, а не ленты производства
              </p>
            </span>
          </li>
          <li className={styles["about__wrapper-images"]}>
            <img src={aboutImage1} alt="" className={styles["about__wrapper-image"]} />
            <img src={aboutImage2} alt="" className={styles["about__wrapper-image"]} />
            <img src={aboutImage3} alt="" className={styles["about__wrapper-image"]} />
          </li>
          <li className={styles["about__text-element"]}>
            <span className={styles["about__line"]}>
              <h3 className={styles["about__line-title"]}>
                Натуральные ингредиенты
              </h3>
              <p className={styles["about__line-description"]}>
                Мы используем только свежие продукты, натуральные красители и ароматизаторы
              </p>
            </span>
            <span className={styles["about__line"]}>
              <h3 className={styles["about__line-title"]}>
                Бесплатная доставка
              </h3>
              <p className={styles["about__line-description"]}>
                Бесплатная доставка от 3 тыс в пределах Юргинской области
              </p>
            </span>
          </li>
        </ul>
      </span>
    </article>
  )
}

export default About;