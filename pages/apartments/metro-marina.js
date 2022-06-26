import { Gallery, Bread } from '../../components/items'
import Layout from '../../components/layouts/article'

import { apartTwoMedia } from '../../lib/apartment-media'

const Defour = () => {
  const t = 'Metro Marina'
  return (
    <Layout title={t}>
      <Bread title={t} />
      <Gallery media={apartTwoMedia} />
    </Layout>
  )
}

export default Defour
export { getServerSideProps } from '../../components/chakra'
