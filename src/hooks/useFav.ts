import { useState } from 'react'

export const useFav = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue)
    const openFav = () => setIsOpen(true)
    const closeFav = () => setIsOpen(false)

    return [ isOpen, openFav, closeFav]
}
