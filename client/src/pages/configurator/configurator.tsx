import { useEffect, useState } from 'react';
import ConfiguratorMenu from '../../components/ConfiguratorMenu/ConfiguratorMenu';
import CreateCake from '../../components/CreateCake/CreateCake';
import styles from './configurator.module.scss';
import scrollToTop from '../../utils/scrollToTop';

function Configurator() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    scrollToTop()
  }, [])

  const handleOpen = (e: any, setOpen: any) => {
    e.preventDefault()
    setOpen((item: boolean) => !item);
  }
  
  return (
    <main className={styles["main"]}>
      <span className={styles["main__head"]}></span>
      <h1 className={styles["main__title"]}>
        Торты на заказ в Юрге
      </h1>
      {open && <ConfiguratorMenu configuratorMenuData={{
        setOpen: setOpen
      }} />}
      <CreateCake createCakeData={{
        title: 'Создайте торт своей мечты.',
        description: 'У нас можно заказать авторский торт со своим дизайном и любой начинкой',
        onClickData: [setOpen],
        onClickLink: handleOpen,
        style: { 
          body: {
            padding: '0'
          },
          head: {
            maxWidth: '610px',
            padding: '60px 25px 0 25px',
          },
          title: {
            lineHeight: '1.5',
            fontSize: '24px',
            fontWeight: 300,
          },
          description: {
            lineHeight: '1.5',
            fontWeight: 300
          }
        }
      }} />
      <article className={styles["main__about"]}>
        <span className={styles["main__about-wrapper"]}>
          <span className={styles["main__about-main-col"]}>
            <h2 className={styles["main__about-title"]}>
              Заказать торт в Юрге
            </h2>
            <p className="main__about-title-description">
              Официальный сайт кондитерской Тортули
            </p>
            <p className={styles["main__about-main-description"]}>
              Ищете кондитерскую где заказать торт? Вы в правильном месте. Мы выполняем заказы тортов с любыми параметрами и для любого случая: на День рождения взрослых и детей, для корпоратива, свадьбы и других праздников. Осуществляем бесплатную доставку по Москве и Московской области.
            </p>
          </span>
          <p className={styles["main__about-description"]}>
            Воспользуйтесь нашим конструктором тортов, чтобы создать свой неповторимый и вкусный. Вы можете отправить нам фото любого торта и мы его с легкостью повторим, сделаем даже лучше. Добавьте поздравительную надпись на торт или украшения в виде фигурок, которые специально для вас сделает наш талантливый скульптор. Обычный срок изготовления торта 3-5 рабочих дней, но мы можем и быстрее! Делаем торты с вашим дизайном от 2 до 100 кг, с любой из 10 начинок на выбор. Закажите торт сейчас, а мы предложим вам вкусную цену. У нас все вкусное: и торты, и цены, и условия доставки.
          </p>
        </span>
      </article>
    </main>
  )
}

export default Configurator;