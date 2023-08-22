import TransparentLink from '../../components/TransparentLink/TransparentLink';
import { transparentLinkData } from './aboutСonfectioneryData'
import styles from './aboutСonfectionery.module.scss';
import people from '../../assets/image/people.webp'
import aboutConfectioneryImage1 from '../../assets/image/about-confectionery-image1.webp'
import aboutConfectioneryImage2 from '../../assets/image/about-confectionery-image2.webp'
import aboutConfectioneryImage3 from '../../assets/image/about-confectionery-image3.webp'

function AboutСonfectionery() {
  return (
    <main className={styles["main"]}>
      <div className={styles["main__head"]}>
        <div className={styles["main__head-wrapper"]}>
          <h1 className={styles["main__title"]}>
            Кондитерское производство тортов и пирожных
          </h1>
          <p className={styles["main__description"]}>
            Мы производим кондитерские изделия на заказ, а также доставляем готовые торты и наборы пирожных оптом и в розницу по Москве и области
          </p>
          <div className={styles["main__head-links"]}>
            <TransparentLink TransparentLinkData={transparentLinkData[0]} />
            <TransparentLink TransparentLinkData={transparentLinkData[1]} />
          </div>
        </div>
      </div>
      <article className={styles["main__about"]}>
        <div className={styles["main__about-row"]}>
          <div className={styles["main__about-row-text"]}>
            <h2 className={styles["main__about-title"]}>Иван Иванов</h2>
            <p className={styles["main__about-position"]}>Шеф-директор Кондитерской «Тортули»</p>
            <hr className={styles["main__line-separator"]} />
            <div className={styles["main__about-text-container"]}>
              <p className={styles["main__about-text"]}>
                Вадим по-настоящему любит свою работу.<br />Стоит лишь посмотреть на то вдохновение, с которым он говорит о своем деле, на его заразительный энтузиазм, на умение подходить ко всему творчески и удивлять окружающих своими работами.
              </p>
              <p className={styles["main__about-text"]}>
                Большинство изделий «Тортули» – авторские работы Вадима. Даже классические рецепты «Тирамису» и «Трюфель» в исполнении шефа оригинальны.
              </p>
            </div>
          </div>
          <img className={styles["main__about-image"]} src={people} alt="" />
        </div>
        <div className={styles["main__about-row"]}>
          <div className={styles["main__about-row-images"]}>
            <img src={aboutConfectioneryImage1} alt="" className={styles["main__about-row-image"]} />
            <img src={aboutConfectioneryImage2} alt="" className={styles["main__about-row-image"]} />
            <img src={aboutConfectioneryImage3} alt="" className={styles["main__about-row-image"]} />
          </div>
          <div className={styles["main__about-row-text"]}>
            <h2 className={styles["main__about-title"]}>Кондитерская тортов</h2>
            <p className={styles["main__about-text"]}>
              Кондитерское производство «Тортули» - семейный бизнес, созданный в 2023 году. <br /> Вся наша продукция изготавливается вручную с использованием исключительно натуральных ингредиентов. Именно поэтому все наши десерты безупречны по вкусу и заслуживают статуса премиум-качества. <br /> Уникальная технология заморозки позволяет выпустить натуральный продукт с учётом хранения, транспортировки и реализации.
            </p>
          </div>
        </div>
      </article>
      <article className={styles["main__corporate-clients"]}>
        <h2 className={styles["main__corporate-clients-title"]}>Корпоративным клиентам</h2>
        <p className={styles["main__corporate-clients-description"]}>Тортули поставляет свою продукцию в крупнейшие торговые сети, а также кафе и рестораны Юрги.</p>
        <a href="tel:+74959847710" className={styles["main__corporate-clients-telephone"]}>+7 (495) 984-77-10</a>
        <p className={styles["main__corporate-clients-additionally"]}>Свяжитесь с нами, если хотите торты высшего качества на своих прилавках.</p>
      </article>
    </main>
  )
}

export default AboutСonfectionery;