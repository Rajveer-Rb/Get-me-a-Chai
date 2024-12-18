import React from 'react'

const Footer = () => {

  const currYear = new Date().getFullYear();
  return (
    <footer className='bg-blue-950 text-white flex justify-center px-4 items-center h-14'>
      <p>Copyright &copy; {currYear} Get me A Chai - All rights reserved</p>
    </footer>
  )
}

export default Footer
