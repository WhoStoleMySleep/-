import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

function Card({cardData}: {cardData: {image: string, title: string, amount: string}}) {
  const { image, title, amount } = cardData
  
  return (
    <button className={styles["card"]}>
      <img src={image} alt="" className={styles["card__image"]} />
      <p className={styles["card__title"]}>{title}</p>
      <p className={styles["card__amount"]}>{amount}</p>
    </button>
  )
}

export default Card;