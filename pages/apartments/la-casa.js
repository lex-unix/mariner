import { Gallery, Bread } from '../../components/items'
import Layout from '../../components/layouts/article'

import { apartOneMedia } from '../../lib/apartment-media'

const Defour = () => {
  const t = 'La Casa'
  return (
    <Layout title={t}>
      <Bread title={t} />
      <Gallery media={apartOneMedia} />
    </Layout>
  )
}

export default Defour
export { getServerSideProps } from '../../components/chakra'
