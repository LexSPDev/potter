import { useState } from 'react'

export const useFav = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue)
    const openFav = () => setIsOpen(!isOpen)

    return [ isOpen, openFav] as const
}
