import React from 'react';

export default function Background() {
  return (
    <>
      <div className="fixed inset-0 bg-[#030014]" />
      <div className="fixed inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-blue-900/10" />
      <div className="fixed inset-0 mask-radial-faded">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-[0.02]" />
      </div>
      <div className="fixed inset-0">
        <div className="absolute -top-[40rem] -left-[40rem] w-[80rem] h-[80rem] bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-[40rem] -right-[40rem] w-[80rem] h-[80rem] bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000" />
      </div>
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light" />
    </>
  );
}