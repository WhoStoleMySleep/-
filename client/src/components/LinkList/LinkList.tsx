import { Link } from 'react-router-dom';
import styles from './LinkList.module.scss';

function LinkList({linkListData}: {linkListData: {title: string, links: {title: string, link: string}[]}}) {
  const { title, links } = linkListData
  
  return (
    <article className={styles["link-list"]}>
      <p className={styles["link-list__title"]}>
        {title}
      </p>
      <ul className={styles["link-list__list"]}>
        {links.map(link => (
          <li className={styles["link-list__list-element"]} key={link.title}>
            <Link className={styles["link-list__link"]} to={link.link}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default LinkList;