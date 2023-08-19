import styles from './Product.module.scss';
import close from '../../assets/image/close.png'

function Product({productData, handleOpen}: {productData: {image: string, title: string, amount: string, article: string, description: string, mass: string, content: string, composition: string, additionally: string}, handleOpen: any}) {
  const {image, title, amount, article, description, mass, content, composition, additionally} = productData
  const cleared = {image: '', title: '', amount: '', article: '', description: '', mass: '', content: '', composition: '', additionally: ''}
  
  return (
    <article className={styles["product"]}>
      <span className={styles["product__header"]}>
        <button className={styles["product__back-text"]} type='button' onClick={() => handleOpen(cleared)}>
          больше продуктов
        </button>
        <button className="product__back-button" type='button' onClick={() => handleOpen(cleared)}>
          <img src={close} alt="close" />
        </button>
      </span>
      <span className={styles["product__wrapper"]}>
        <img src={image} alt="" className={styles["product__image"]} />
        <div className={styles["product__column"]}>
          <h2 className={styles["product__title"]}>{title}</h2>
          <p className={styles["product__article"]}>Артикул: {article}</p>
          <p className={styles["product__amount"]}>{amount}</p>
          <button className={styles["product__buy"]}>Заказать</button>
          <p className={styles["product__description"]}>{description}</p>
          <p className={styles["product__mass"]}>Вес: {mass}</p>
          <p className={styles["product__content"]}>{content}</p>
          <p className={styles["product__composition"]}>
            <span className={styles["product__composition-col"]}>
              Состав:
            </span>
            <span className={styles["product__composition-col"]}>
              {composition}
            </span>
          </p>
          <p className={styles["product__additionaly"]}>{additionally}</p>
        </div>
      </span>
    </article>
  )
}

export default Product;