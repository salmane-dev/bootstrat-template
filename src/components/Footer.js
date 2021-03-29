const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center text-capitalize bg-secondary py-3'>
        copyright &copy; {year}
      </footer>
    </>
  )
}

export default Footer
