import React from 'react'

export const FavoritesList = ({isOpen, closeFav}) => {
  return (
        <div className={`favoriteList ${isOpen && "isOpen"}`}>
            <div className='favoriteItem'>
                <img src="http://hp-api.herokuapp.com/images/filch.jpg" alt="nombre" />
                <span>Luna Lovegood</span>
                <i className="ph-trash white"></i>
            </div>
            <div className='favoriteItem'>
            <img src="http://hp-api.herokuapp.com/images/filch.jpg" alt="nombre" />
            <span>Luna Lovegood</span>
            <i className="ph-trash white"></i>
            </div>
            
        </div>
  )
}
