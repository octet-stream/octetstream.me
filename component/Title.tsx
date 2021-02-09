import Head from "next/head"

interface TitleProps {
  title?: string
}

const Title: React.FC<TitleProps> = ({title: pageTitle}) => (
  <Head>
    <title>{pageTitle}</title>
  </Head>
)

export default Title
