'use client'

import { useEffect, useState } from 'react'

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-ring" />
      </div>
    </div>
  )
}