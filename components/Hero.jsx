import React from 'react'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react';

const Hero = () => {
  const { data: session } = useSession();
  return <>
    <div className="relative overflow-hidden">
      <div className="pb-16 pt-20 sm:pt-24 lg:pb-24 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Your Destination for <span className="text-green-600">Developer</span> Templates
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Looking for a quick start on your next project? Welcome to <span className="text-indigo-600">DevDex</span>, where developers like you share their expertise through a diverse collection of <span className="text-red-600">templates</span>. Whether you&apos;re building a <span className="text-yellow-600">website</span>, <span className="text-blue-600">mobile app</span>, or diving into a new framework, find the <span className="text-purple-600">perfect</span> starting point right here.
            </p>
          </div>
          <div className="mt-12 text-center">
            {session ? (
              <Button variant="custom" onClick={() => { window.location.href = '/dashboard' }}>
                Share your templates
              </Button>
            ) : (
              <Button variant="custom" onClick={() => { window.location.href = '/login' }}>
                Sign In to start sharing your templates
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Hero