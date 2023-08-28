import { useState } from 'react';
import styles from './ShoppingCart.module.scss';
import shop from '../../assets/image/shop.svg'
import Bill from '../Bill/Bill';
import scrollingBan from '../../utils/scrollingBan';
import { ALL_CAKES } from '../../GraphQl.queries';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { setCakes } from '../../redux/reducers/cakes';

function ShoppingCart() {
  const [onOpen, setOnOpen] = useState(false)
  const dispatch = useDispatch();
  const { data } = useQuery(ALL_CAKES)

  if (data) {
    dispatch(setCakes(data))
  }
  
  if (onOpen) {
    scrollingBan(true)
  } else {
    scrollingBan(false)
  }
  
  return (
    <article className={styles["shopping-cart"]}>
      {!onOpen ?
        <button className={styles["shopping-cart__open-button"]} onClick={() => setOnOpen(true)}>
          <img src={shop} alt="" className={styles["shopping-cart__open-button-image"]} />
          <p className={styles["shopping-cart__quantity-product"]}>2</p>
        </button> :
        <div className={styles["shopping-cart__container"]}>
          <button className={styles["shopping-cart__close-button"]} onClick={() => setOnOpen(false)}></button>
          <div className={styles["shopping-cart__bill-wrapper"]}>
            <Bill billData={undefined} setOnOpen={setOnOpen}/>
          </div>
        </div>
      }
    </article>
  )
}

export default ShoppingCart;