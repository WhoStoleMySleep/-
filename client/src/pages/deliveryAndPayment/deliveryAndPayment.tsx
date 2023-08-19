import styles from './deliveryAndPayment.module.scss';
import yurga from '../../assets/image/yurga.png'
import yurginskyDistrict from '../../assets/image/yurginsky-district.png'

function DeliveryAndPayment() {
  return (
    <main className={styles["main"]}>
      <div className={styles["main__head"]}></div>
      <div className={styles["main__row"]}>
        <div className={styles["main__column"]}>
          <h2 className={styles["main__title"]}>
            Доставка тортов
          </h2>
          <p className={styles["main__additionaly"]}>
            По Юрге и Юргинской области
          </p>
        </div>
        <div className={styles["main__column"]}>
          <p className={styles["main__text"]}>
            Доставляем торты ежедневно.
          </p>
          <br />
          <br />
          <p className={styles["main__text"]}>
            Доставка осуществляется на следующий день при заказе до 16:00.
          </p>
          <p className={styles["main__text"]}>
            После 16:00 - заказы принимаем на последующие дни.
          </p>
          <p className={styles["main__text"]}>
            В воскресенье заказы не обрабатываем.
          </p>
          <br />
          <br />
          <p className={styles["main__text"]}>
            При оформлении доставки можно выбрать временные интервалы:
          </p>
          <ul className={styles["main__timeline"]}>
            <li className={styles["main__timeline-element"]}>
              <p>с 9:00 до 12:00</p>
            </li>
            <li className={styles["main__timeline-element"]}>
              <p>с 12:00 до 15:00</p>
            </li>
            <li className={styles["main__timeline-element"]}>
              <p>с 15:00 до 18:00</p>
            </li>
            <li className={styles["main__timeline-element"]}>
              <p>с 18:00 до 22:00</p>
            </li>
          </ul>
          <p className={styles["main__text"]}>
            В воскресенье
          </p>
          <p className={styles["main__text"]}>
            осуществляем доставку в интервале с 18:00 до 22:00
          </p>
        </div>
      </div>
      <article className={styles["main__content-row"]}>
        <img src={yurga} alt="" className={styles["main__content-image"]} />
        <div className={styles["main__content-column"]}>
          <h3 className={styles["main__content-title"]}>Доставка по Юрге</h3>
          <br />
          <br />
          <p className={styles["main__content-text"]}>
            Доставка по Юрге, от 1 дня 1000 р
          </p>
          <p className={styles["main__content-text"]}>
            При заказе от 3000 рублей бесплатная доставка
          </p>
          <br />
          <br />
          <p className={styles["main__content-text"]}>
            Доставка осуществляется на следующий день при заказе до 16:00.
          </p>
          <p className={styles["main__content-text"]}>
            После 16:00 - заказы принимаем на последующие дни.
          </p>
          <p className={styles["main__content-text"]}>
            В воскресенье заказы не обрабатываем.
          </p>
          <br />
          <br />
          <p className={styles["main__content-text"]}>
            При оформлении доставки можно выбрать временные интервалы:
          </p>
          <ul className={styles["main__content-timeline"]}>
            <li className={styles["main__content-timeline-element"]}>
              <p>
                с 9:00 до 12:00
              </p>
            </li>
            <li className={styles["main__content-timeline-element"]}>
              <p>
                с 12:00 до 15:00
              </p>
            </li>
            <li className={styles["main__content-timeline-element"]}>
              <p>
                с 15:00 до 18:00
              </p>
            </li>
            <li className={styles["main__content-timeline-element"]}>
              <p>
                с 18:00 до 22:00
              </p>
            </li>
          </ul>
          <br />
          <br />
          <p className={styles["main__content-text"]}>
            В воскресенье
          </p>
          <p className={styles["main__content-text"]}>
            осуществляем доставку в интервале с 18:00 до 22:00
          </p>
        </div>
      </article>
      <article className={styles["main__content-row"]}>
        <img src={yurginskyDistrict} alt="" className={styles["main__content-image"]} />
        <div className={styles["main__content-column"]}>
          <h3 className={styles["main__content-title"]}>Доставка по Юргинской области</h3>
          <br />
          <p className={styles["main__content-text"]}>
            Доставка по Юргинской области, от 1 дня 1700 р
          </p>
          <p className={styles["main__content-text"]}>
            При заказе от 3000 рублей бесплатная доставка
          </p>
          <br />
          <br />
          <p className={styles["main__content-text"]}>
            Доставка осуществляется на следующий день при заказе до 16:00.
          </p>
          <p className={styles["main__content-text"]}>
            После 16:00 - заказы принимаем на последующие дни.
          </p>
          <p className={styles["main__content-text"]}>
            В воскресенье заказы не обрабатываем.
          </p>
          <br />
          <br />
          <p className={styles["main__content-text"]}>
            При оформлении доставки можно выбрать временные интервалы:
          </p>
          <ul className={styles["main__content-timeline"]}>
            <li className={styles["main__content-timeline-element"]}>
              <p>
                с 9:00 до 12:00
              </p>
            </li>
            <li className={styles["main__content-timeline-element"]}>
              <p>
                с 12:00 до 15:00
              </p>
            </li>
            <li className={styles["main__content-timeline-element"]}>
              <p>
                с 15:00 до 18:00
              </p>
            </li>
            <li className={styles["main__content-timeline-element"]}>
              <p>
                с 18:00 до 22:00
              </p>
            </li>
          </ul>
          <br />
          <p className={styles["main__content-text"]}>
            В воскресенье
          </p>
          <p className={styles["main__content-text"]}>
            осуществляем доставку в интервале с 18:00 до 22:00
          </p>
        </div>
      </article>
    </main>
  )
}

export default DeliveryAndPayment;