import { Gallery, Bread } from '../../components/items'
import Layout from '../../components/layouts/article'
import { catOneMedia } from '../../lib/marine-media'

const Lagoon = () => {
  const t = 'Lagoon 57'
  return (
    <Layout title={t}>
      <Bread title={t} isMarina />
      <Gallery media={catOneMedia} />
    </Layout>
  )
}

export default Lagoon
export { getServerSideProps } from '../../components/chakra'
