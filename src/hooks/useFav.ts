import { useState } from 'react'

export const useFav = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue)
    const openFav = () => setIsOpen(true)

    return [ isOpen, openFav] as const
}
