'use client'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import clsx from 'clsx';
import { FaXmark, FaBarsStaggered  } from "react-icons/fa6";
import Link from 'next/link'
import { useRouter, usePathname} from 'next/navigation';


const navigation = [
  { name: 'Escuchanos', href: '/podcasters', current: true },
  { name: 'Temporadas', href: 'seasons', current: false },
  { name: 'Nosotros', href: '/about', current: false },
]


export const Navbar = () => {

  const router = useRouter()
  const pathname = usePathname()

  return (
    <Disclosure as="nav" className="bg-[#00113D] absolute z-50 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaXmark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBarsStaggered className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center  sm:justify-between">
                <div className="flex flex-shrink-0 items-center cursor-pointer hover:scale-105" onClick={() => router.replace('/')}>
                  <img
                    className="h-12 w-auto"
                    src='/logo/mblogo.png'
                    alt="LOGO MENTE BIBLICA"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                         pathname == item.href  ? ' text-white bg-[#477BFF]' : 'text-gray-300 hover:bg-[#477BFF] hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={pathname == item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    pathname == item.href ? 'bg-[#477BFF] text-white' : 'text-gray-300 hover:bg-gray-500 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={pathname == item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}