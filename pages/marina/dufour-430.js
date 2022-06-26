import { Gallery, Bread } from '../../components/items'
import Layout from '../../components/layouts/article'
import { yachtMedia } from '../../lib/marine-media'

const Defour = () => {
  const t = 'Defour 430 Grand Large'
  return (
    <Layout title={t}>
      <Bread title={t} isMarina />
      <Gallery media={yachtMedia} />
    </Layout>
  )
}

export default Defour
export { getServerSideProps } from '../../components/chakra'
