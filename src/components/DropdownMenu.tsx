import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import DropdownMenuItem from './DropdownMenuItem'
import { MenuIcon } from 'lucide-react'

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left z-[100001]">
      <div>
        <Menu.Button className="inline-flex justify-center rounded-md p-2 bg-gray-200 dark:bg-gray-600">
          <MenuIcon size={20} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 overflow-visible mt-3 w-56 origin-top-right rounded-md bg-gray-200 dark:bg-gray-700 shadow-lg focus:outline-none">
          <div className="px-1 py-2">
            <DropdownMenuItem href="/">Home</DropdownMenuItem>
            <DropdownMenuItem href="/marina">Marina</DropdownMenuItem>
            <DropdownMenuItem href="/apartments">Apartments</DropdownMenuItem>
            <DropdownMenuItem href="/routes">Routes</DropdownMenuItem>
            <DropdownMenuItem href="/contact-us">Contact Us</DropdownMenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
