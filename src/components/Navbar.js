/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useMoralis } from "react-moralis";
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Feed', href: '/feed', current: false },
  { name: 'Buckets', href: '/buckets', current: false },
  { name: 'Mint', href: '/new', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {
  const { logout, isAuthenticating } = useMoralis();
  const { authenticate, isAuthenticated, user } = useMoralis();
  
  const LogoutButton = () => {
    if (!isAuthenticated) {
      return (
        <button className="m-3 text-white p-1 flex text-sm rounded-full  bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080]" onClick={() => authenticate()
        }>
      Connect wallet
        </button >);
    }
     else {return(<button className="m-3 text-white p-1 flex text-sm rounded-full  bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080]" onClick={() => logout()} disabled={isAuthenticating}>
      Logout
      </button >)
     }
    
  };



return (
  <Disclosure as="nav" className="bg-black">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block h-8 w-auto"
                  src="./assets/bucketLogo.svg"
                  alt="Workflow"
                />

              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gradient-to-bl from-violet-400 via-cyan-600 to-indigo-400 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                {/* ALSO LOGIN BUTTON */}
                <LogoutButton/>
              </Menu>
            </div>
            {!isAuthenticated?<button onClick={() => authenticate()}>Authenticate</button>:<div><button onClick={() => logout()}>logout</button> </div>}
          </div>
        </div>

 
      </>
    )}
  </Disclosure>
)
}
