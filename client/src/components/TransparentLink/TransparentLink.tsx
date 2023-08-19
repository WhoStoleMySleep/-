import { Link } from 'react-router-dom';
import styles from './TransparentLink.module.scss';

function TransparentLink({TransparentLinkData}: {TransparentLinkData: {link: string, text: string}}) {
  const {link, text} = TransparentLinkData
  
  return (
    <Link to={link} className={styles["transparent-link"]}>
      {text}
    </Link>
  )
}

export default TransparentLink;