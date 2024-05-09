import { signOut, useSession } from 'next-auth/react';
import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/router';

const DashboardHeader = () => {
  const { data: session } = useSession();
  const router = useRouter();


  async function logout() {
    await router.push('/');
    await signOut();
  }
  return <>
    <div className="flex justify-between items-center">
      <button
        // onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
    </div>

    <aside className={`fixed z-40 w-80 h-auto transition-transform -translate-x-full sm:translate-x-0`}>
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <ul className="space-y-2 font-medium">
          <li>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <div className="flex flex-col items-center p-3">
                <img src={session?.user?.image} alt={session?.user.name} className='w-24 h-24 mb-3 rounded-full shadow-lg' />
                <h5 className="mb-1 text-xl font-medium text-gray-900">{session?.user.name}</h5>
                <span className="text-sm text-gray-600">
                  {session?.user.email}
                </span>
                <Button variant='outline' className='w-full mt-2' onClick={() => { window.location.href = '/dashboard' }}>
                  Dashboard
                </Button>
                <Button variant='outline' onClick={logout} className='w-full mt-2'>
                  Logout
                </Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  </>
}

export default DashboardHeader