import React from 'react'
import { useAppSelector } from '../../store/hooks'

const getTimeGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

const UserGreeting: React.FC = () => {
  const user = useAppSelector((store) => store.user.user)
  const name = user?.userName?.trim() || user?.email?.split('@')[0] || 'there'
  const initial = name.charAt(0).toUpperCase()

  return (
    <section className="px-4 pt-8 md:px-12">
      <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-gradient-to-r from-red-700/90 via-red-900/70 to-black p-5 shadow-lg md:p-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold text-red-700 md:h-14 md:w-14 md:text-2xl">
          {initial}
        </div>
        <div className="min-w-0">
          <p className="text-sm text-zinc-300">{getTimeGreeting()}</p>
          <h1 className="truncate text-2xl font-bold text-white md:text-3xl">
            Hi {name} <span aria-hidden="true">👋</span>
          </h1>
          <p className="mt-1 text-sm text-zinc-300">Here's what's playing for you today.</p>
        </div>
      </div>
    </section>
  )
}

export default UserGreeting
