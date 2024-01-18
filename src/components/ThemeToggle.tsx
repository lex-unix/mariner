import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from 'lucide-react'

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })
  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <button
      onClick={toggleTheme}
      className="p-2 bg-[#805AD5] text-white dark:text-black dark:bg-[#FCD38D] rounded-md"
    >
      {theme === 'light' ? <MoonIcon size={20} className='fill-white' /> : <SunIcon size={20} />}
    </button>
  ) : (
    <div />
  )
}
