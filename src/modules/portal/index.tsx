import { useTranslation } from 'react-i18next'

import Text from 'src/components/text'

const Portal = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Text as="h1" variant="title">
        {t('portal.title')}
      </Text>
    </div>
  )
}

export default Portal
