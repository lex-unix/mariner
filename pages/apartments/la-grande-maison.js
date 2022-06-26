import { Gallery, Bread } from '../../components/items'
import Layout from '../../components/layouts/article'

import { apartThreeMedia } from '../../lib/apartment-media'

const Defour = () => {
  const t = 'La Grande Maison'
  return (
    <Layout title={t}>
      <Bread title={t} />
      <Gallery media={apartThreeMedia} />
    </Layout>
  )
}

export default Defour
export { getServerSideProps } from '../../components/chakra'
