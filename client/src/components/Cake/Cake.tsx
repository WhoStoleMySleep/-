import styles from './Cake.module.scss';
import { Link } from 'react-router-dom';

function Cake({data}: {data: {logo: string, discription: string}}) {
  const { logo, discription } = data
  
  return (
    <Link to={'/'} className={styles["cake"]}>
      <img src={logo} alt="" className={styles["cake__logo"]} />
      <p className={styles["cake__description"]}>
        {discription}
      </p>
    </Link>
  )
}

export default Cake;