import { useTranslation } from 'react-i18next'

const Portal = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="title-text">{t('portal.title')}</h1>
    </div>
  )
}

export default Portal
