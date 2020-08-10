import React from 'react'
import Me from './me'
import searchIcon from '../../images/search.png'
import '../styles/msg.scss'

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
