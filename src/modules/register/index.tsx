import { useTranslation } from 'react-i18next'

import Text from 'src/components/text'

const Register = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Text as="h1" variant="title">
        {t('register.title')}
      </Text>
    </div>
  )
}

export default Register
