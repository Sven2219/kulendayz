import Text from 'src/components/text'

interface Props {
  introTitle: string
  introDescription: string
}

const AuthIntro = ({ introTitle, introDescription }: Props) => {
  return (
    <div className="intro-wrapper">
      <Text as="h1" variant="title" className="intro-title">
        {introTitle}
      </Text>
      <Text as="h2" variant="subtitle" className="intro-subtitle">
        {introDescription}
      </Text>
    </div>
  )
}

export default AuthIntro
