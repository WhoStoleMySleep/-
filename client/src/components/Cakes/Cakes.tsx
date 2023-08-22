import styles from './Cakes.module.scss';
import Cake from '../Cake/Cake';
import category1 from '../../assets/image/category1.webp'
import category2 from '../../assets/image/category2.webp'
import category3 from '../../assets/image/category3.webp'
import category4 from '../../assets/image/category4.webp'
import category5 from '../../assets/image/category5.webp'
import category6 from '../../assets/image/category6.webp'

function Cakes({titles}: {titles: {title: string, titleStyles: any}}) {
  const { title, titleStyles } = titles
  
  const data = [
    {logo: category1, discription: 'Торты на заказ в Юрге'},
    {logo: category2, discription: 'Торты на День рождения'},
    {logo: category3, discription: 'Классические торты'},
    {logo: category4, discription: 'Бисквитные торты'},
    {logo: category5, discription: 'Детские торты'},
    {logo: category6, discription: 'Украшения для тортов'},
  ]
  
  return (
    <article className={styles["cakes"]}>
      <h4 className={styles["cakes__title"]} style={titleStyles}>
        {title}
      </h4>
      <ul className={styles["cakes__list"]}>
        {data.map((item, index) => {
          return (
            <li key={index} className={styles["cakes__list-element"]}>
              <Cake data={item} />
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default Cakes;