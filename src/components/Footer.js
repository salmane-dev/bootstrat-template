const data = require('../data.json'); 


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <footer className='text-center text-light bg-secondary py-3'>
        Copyright &copy; {year}  <span>{data.header.website}</span>
      </footer>
    </div>
  )
}

export default Footer
