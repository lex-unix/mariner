import { Gallery, Bread } from '../../components/items'
import Layout from '../../components/layouts/article'
import { catTwoMedia } from '../../lib/marine-media'

const Lipari = () => {
  const t = 'Lipari 41'
  return (
    <Layout title={t}>
      <Bread title={t} isMarina />
      <Gallery media={catTwoMedia} />
    </Layout>
  )
}

export default Lipari
export { getServerSideProps } from '../../components/chakra'
