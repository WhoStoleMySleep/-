import { Link } from 'react-router-dom';
import About from '../../components/About/About';
import Cakes from '../../components/Cakes/Cakes';
import CreateCake from '../../components/CreateCake/CreateCake';
import HeadMainArticle from '../../components/HeadMainArticle/HeadMainArticle';
import SendContact from '../../components/SendContact/SendContact';
import scrollToTop from '../../utils/scrollToTop';

function Index() {
  scrollToTop()
    
  return (
    <main className="main">
      <HeadMainArticle />
      <Cakes titles={{
        title: 'ТОРТЫ',
        titleStyles: {borderBottom: '3px solid #C79393', letterSpacing: '1.5px'}
      }} />
      <About />
      <CreateCake createCakeData={{
        title: 'Заказать авторский торт',
        description: 'Создайте торт со своим дизайном и любой начинкой в нашем конструкторе',
        style: {
          title: {marginBottom: '43px'}
        }
      }} />
      <SendContact />
    </main>
  )
}

export default Index;