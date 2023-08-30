import styles from './Product.module.scss';
import close from '../../assets/image/close.svg'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCakes } from '../../redux/reducers/selectedCakes';
import { useEffect } from 'react';
import selectedCakes from '../../redux/reducers/selectors/selectedCakes';

function Product({productData, handleOpen}: {productData: {id: string, image: string, title: string, amount: string, article: string, description: string, mass: string, content: string, composition: string, additionally: string}, handleOpen: any}) {
  const {id, image, title, amount, description, mass, content, composition, additionally} = productData
  const cleared = {image: '', title: '', amount: '', article: '', description: '', mass: '', content: '', composition: '', additionally: ''}
  const data = useSelector(selectedCakes)
  const dispatch = useDispatch()

  const onSelectCakes = () => {
    if (!data.some(item => JSON.stringify(item) === JSON.stringify(productData))) {
      dispatch(setSelectedCakes([...data, productData]))
    }
  }

  return (
    <article className={styles["product"]}>
      <span className={styles["product__header"]}>
        <button className={styles["product__back-text"]} type='button' onClick={() => handleOpen(cleared)}>
          больше продуктов
        </button>
        <button className={styles["product__back-button"]} type='button' onClick={() => handleOpen(cleared)}>
          <img className={styles["product__back-button-image"]} src={close} alt="close" />
        </button>
      </span>
      <span className={styles["product__wrapper"]}>
        <img src={image} alt="" className={styles["product__image"]} />
        <div className={styles["product__column"]}>
          <h2 className={styles["product__title"]}>{title}</h2>
          <p className={styles["product__article"]}>Артикул: {id}</p>
          <p className={styles["product__amount"]}>{amount}</p>
          <button className={styles["product__buy"]} onClick={() => {handleOpen(cleared); onSelectCakes()}}>Заказать</button>
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