import Text from 'src/components/text'
import styles from './index.module.scss'

interface Props {
  title: string
  isActive?: boolean
  onClick: () => void
}

const Tab = ({ title, isActive, onClick }: Props) => {
  return (
    <button
      className={`${styles['tab-container']} ${
        isActive && styles['active-tab']
      }`}
      onClick={onClick}>
      <Text variant="subtitle" className={styles['tab-title']}>
        {title}
      </Text>
    </button>
  )
}

export default Tab
