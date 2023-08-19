import styles from './SendContact.module.scss';

function SendContact() {
  return (
    <article className={styles["send-contact"]}>
      <h2 className={styles["send-contact__title"]}>
        Оставьте номер и мы поможем с выбором торта
      </h2>
      <span className={styles["send-contact__input-container"]}>
        <input type="text" className={styles["send-contact__input"]} placeholder='Телефон' />
        <button className={styles["send-contact__button"]} type='button'>Позвоните мне</button>
      </span>
    </article>
  )
}

export default SendContact;