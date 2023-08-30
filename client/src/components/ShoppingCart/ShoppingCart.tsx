import { useEffect, useState } from 'react';
import styles from './ShoppingCart.module.scss';
import shop from '../../assets/image/shop.svg'
import Bill from '../Bill/Bill';
import scrollingBan from '../../utils/scrollingBan';
import { ALL_CAKES } from '../../GraphQl.queries';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { setCakes } from '../../redux/reducers/cakes';
import selectedCakes from '../../redux/reducers/selectors/selectedCakes';

function ShoppingCart() {
  const [onOpen, setOnOpen] = useState(false)
  const [onVisble, setOnVisble] = useState(false)
  const dispatch = useDispatch();
  const dataCakes = useSelector(selectedCakes)
  const { data } = useQuery(ALL_CAKES)

  if (data) {
    dispatch(setCakes(data))
  }

  useEffect(() => {
    if (dataCakes[0]) {
      setOnVisble(true)
    } else {
      setOnVisble(false)
      scrollingBan(false)
      setOnOpen(false)
    }
  }, [dataCakes])
  
  if (onOpen) {
    scrollingBan(true)
  } else {
    scrollingBan(false)
  }
  
  return onVisble ? 
      <article className={styles["shopping-cart"]}>
        {!onOpen ?
          <button className={styles["shopping-cart__open-button"]} onClick={() => setOnOpen(true)}>
            <img src={shop} alt="" className={styles["shopping-cart__open-button-image"]} />
            <p className={styles["shopping-cart__quantity-product"]}>{dataCakes.length}</p>
          </button> :
          <div className={styles["shopping-cart__container"]}>
            <button className={styles["shopping-cart__close-button"]} onClick={() => setOnOpen(false)}></button>
            <div className={styles["shopping-cart__bill-wrapper"]}>
              <Bill billData={undefined} setOnOpen={setOnOpen}/>
            </div>
          </div>
        }
      </article> :
      <div></div>
}

export default ShoppingCart;