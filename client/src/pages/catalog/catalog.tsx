import styles from './catalog.module.scss';
import catalogLogo from '../../assets/image/catalogLogo.webp'
import Card from '../../components/Card/Card';
import Cakes from '../../components/Cakes/Cakes';
import Product from '../../components/Product/Product';
import { useEffect, useState } from 'react';
import { cardData } from './catalogData';
import scrollToTop from '../../utils/scrollToTop';
import scrollingBan from '../../utils/scrollingBan';
import { useSelector } from 'react-redux';

function Catalog() {
  const data = useSelector((state: { cakes: any; }) => state.cakes)
  const windowWidth = document.documentElement.clientWidth
  const fontSize = windowWidth > 768 ? '42px' : '30px'
  const [isOpen, setIstOpen] = useState({
    __typename: '',
    id: '',
    image: '',
    title: '',
    category: '',
    amount: '',
    article: '',
    name: '',
    description: '',
    mass: '',
    content: '',
    composition: '',
    additionally: '',
  })

  const [cakesArray, setCakesArray] = useState([])
  const [countCakes, setCountCakes] = useState(10)

  useEffect(() => {
    scrollToTop()
  }, [])

  useEffect(() => {
    setCakesArray(data && data.cakes && data.cakes.cakes ? data.cakes.cakes.slice(0, countCakes) : [])
  }, [data])

  const handleOpen = (item: any) => {
    setIstOpen(item)

    if(item && item.id) {
      scrollingBan(true)
    } else {
      scrollingBan(false)
    }
  }

  const moreCakesList = () => {
    setCountCakes((item: number) => item + 10)
    setCakesArray(data && data.cakes && data.cakes.cakes ? data.cakes.cakes.slice(0, countCakes) : [])
  }

  const notNull = isOpen &&
  [
    '__typename',
    'id',
    'image',
    'title',
    'amount',
    'article',
    'description',
    'mass',
    'content',
    'composition',
    'additionally'
  ].every(prop => isOpen[prop as keyof typeof isOpen] !== '')
  
  return (
    <main className={styles["main"]}>
      {notNull &&
        <Product productData={isOpen} handleOpen={handleOpen} />
      }
      <div className="main__wrapper">
        <span className={styles["main__head"]}>
          <img src={catalogLogo} alt="" className={styles["main__head-logo"]} />
        </span>
        <article className={styles["main__catalog"]}>
          <h2 className={styles["main__catalog-title"]}>
            Каталог тортов
          </h2>
          <div className={styles["main__catalog-container"]}>
            <div className={styles["main__catalog-find"]}>
              <div className={styles["main__catalog-input-container"]}>
                <input type="text" className={styles["main__catalog-input"]} placeholder='Поиск' />
              </div>
              <select name="sort" id="" className={styles["main__catalog-sort"]}>
                <option value="">Порядок: по умолчанию</option>
                <option value="">Цена: по возрастанию</option>
                <option value="">Цена: по убыванию</option>
                <option value="">Название: А—Я</option>
                <option value="">Название: Я—А</option>
                <option value="">Порядок: сперва новые</option>
                <option value="">Порядок: сперва старые</option>
              </select>
            </div>
            <div className={styles["main__catalog-products"]}>
              <aside className={styles["main__catalog-sections"]}>
                <p className={styles["main__sections-head"]}>Раздел</p>
              </aside>
              <ul className={styles["main__catalog-list"]}>
                {cakesArray.map((item: any, index: number) => {
                  return (
                    <li className={styles["main__catalog-list-element"]} key={index} onClick={() => handleOpen(item)}>
                      <Card cardData={item} />
                    </li>
                  )
                })}
              </ul>
            </div>
            {data && data.cakes && data.cakes.cakes && data.cakes.cakes.length > countCakes &&
              <button className={styles["main__load-more"]} onClick={moreCakesList}>
                Загрузить еще
              </button>
            }
          </div>
        </article>
        <Cakes titles={{
          title: 'Категории тортов',
          titleStyles: {fontSize: fontSize, width: '100%', margin: '98px 0 53px 0', lineHeight: "1.35", padding: "0"}
        }} />
        <article className={styles["main__about"]}>
          <span className={styles["main__about-wrapper"]}>
            <span className={styles["main__about-main-col"]}>
              <h2 className={styles["main__about-title"]}>
                Готовые торты Тортули
              </h2>
              <p className={styles["main__about-main-description"]}>
                В кондитерской Тортули можно купить готовые торты с доставкой по Юрге и Юргинской области. Мы занимаемся изготовлением тортов с 2023 года и наш опыт позволяет предлагать лучшие цены от производителя. Для особых случаев и праздников у нас также можно заказать торт с индивидуальным дизайном и украшениями, выбрав любую начинку из готовых.
              </p>
            </span>
            <p className={styles["main__about-description"]}>
              В каталоге вы найдете более 40 видов тортов с начинками и коржами на любой вкус. Помимо классических тортов таких как: тирамису, морковный торт, медовик, красный бархат, киевский торт, торт птичье молоко, графские развалины, трюфель и чизкейки, вы найдете торты, изготовленные по авторскому рецепту от нашего шефа: маракайбо, бейлис, джованни и другие. Все торты свежие и в наличии и доступы для заказа онлайн на нашем сайте.
            </p>
          </span>
        </article>
      </div>
    </main>
  )
}

export default Catalog;