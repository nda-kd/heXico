import React from 'react'
import Me from '../Me/me'
import searchIcon from '../../../assets/search.png'
import './contacts.scss'

class Contacts extends React.Component {
  render () {
    return (
      <div className='contacts-me-search-wraps'>
        <Me />
        <div className='contacts-search-wrap'>
          <img src={searchIcon} alt='Search Icon' />
          <input type='text' name='search' placeholder='Search...' />
        </div>
        <div className='contact-lists' />
      </div>
    )
  }
}

export default Contacts
