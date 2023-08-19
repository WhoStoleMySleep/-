import styles from './GuideСard.module.scss';

function GuideCard({cardData}: {cardData: {number: number, title: string, description: string, image: string}}) {
  const {number, title, description, image} = cardData
  
  return (
    <article className={styles["guide-card"]}>
      <p className={styles["guide-card__number"]}>{number}</p>
      <h4 className={styles["guide-card__title"]}>{title}</h4>
      <p className={styles["guide-card__description"]}>{description}</p>
      <img src={image} alt="" className={styles["guide-card__image"]}/>
    </article>
  )
}

export default GuideCard;