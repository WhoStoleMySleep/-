import styles from './CreateCake.module.scss';
import GuideCard from '../GuideСard/GuideСard';
import { Link } from 'react-router-dom';
import { cardData } from './CreateCakeData';

function CreateCake({createCakeData}: {createCakeData: {
  title: string,
  description: string,
  onClickData?: any,
  onClickLink?: any,
  style?: {body?: any, title?: any, description?: any, head?: any} 
}}) {
  const {title, description, onClickData, onClickLink, style} = createCakeData
  
  return (
    <article className={styles["create-cake"]} style={style?.body}>
      <span className={styles["create-cake__head"]} style={style?.head}>
        <h2 className={styles["create-cake__title"]} style={style?.title}>
          {title}
        </h2>
        <h3 className={styles["create-cake__description"]} style={style?.description}>
          {description}
        </h3>
      </span>
      <ul className={styles["create-cake__cards"]}>
        {cardData.map((item, index) => (
          <li key={index} className={styles["create-cake__cards-element"]}>
            <GuideCard cardData={item} />
          </li> 
        ))}
      </ul>
      <Link to={'/configurator'} className={styles["create-cake__link"]} onClick={onClickLink && onClickData ? (e) => onClickLink(e, ...onClickData) : () => ''}>Создать авторский торт</Link>
    </article>
  )
}

export default CreateCake;