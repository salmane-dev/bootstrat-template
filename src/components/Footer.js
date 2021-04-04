const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <footer className='text-center text-light text-capitalize bg-secondary py-3'>
        copyright &copy; {year}
      </footer>
    </div>
  )
}

export default Footer
