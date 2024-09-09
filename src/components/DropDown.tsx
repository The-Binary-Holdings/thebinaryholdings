import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa6';

export default function DropDown(props: { label: string, list: Array<{label: string; href: string}> }) {
  return (
    <Menu as="div" className="relative inline-block text-left m-2">
      <div>
        <MenuButton className="inline-flex bg-green w-fit font-semibold text-black text-sm rounded-lg">
          {props.label}
          <FaChevronDown aria-hidden="true" className="ml-1 text-base" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute -left-2 z-10 mt-2 min-w-44 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className='overflow-hidden'>
            {props.list.map((item, index) => (
                <MenuItem key={index}>
                <a
                    href={item.href}
                    target='_blank'
                    className="block px-4 py-2 text-sm text-gray-200 data-[focus]:bg-gray-700 data-[focus]:text-gray-300"
                >
                    {item.label}
                </a>
                </MenuItem>
            ))}
        </div>
      </MenuItems>
    </Menu>
  )
}
