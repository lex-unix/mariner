import Head from 'next/head'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ title, children }) => {
  const t = `${title} - Mariner`
  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
          <meta property="og:title" content={t} />
          <meta name="twitter:title" content={t} />
        </Head>
      )}
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.275 }}
        style={{ position: 'relative' }}
      >
        {children}
      </motion.div>
    </>
  )
}

export default Layout
