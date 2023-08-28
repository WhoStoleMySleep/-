import styles from './TimelineRadio.module.scss';

function TimelineRadio({radioData, onChange, checked}: {radioData: {name: string, text: string}, onChange: () => void, checked?: boolean}) {
  const { name, text } = radioData
  
  return (
    <label className={styles["timeline-checkbox"]}>
      <input type="radio" checked={checked} name={name} id="" onChange={() => onChange()} className="timeline-checkbox__deluvery-checkbox" />
      {text}
    </label>
  )
}

export default TimelineRadio;