import { Menu } from '@headlessui/react'
import React from 'react'

interface Props {
  href: string
  children: React.ReactNode
}

export default function DropdownMenuItem({ href, children }: Props) {
  return (
    <Menu.Item>
      <a href={href} className="block px-4 py-2 text-base hover:opacity-70">
        {children}
      </a>
    </Menu.Item>
  )
}
