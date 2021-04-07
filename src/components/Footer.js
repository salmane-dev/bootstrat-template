const data = require('../data.json'); 


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <footer className='text-center myfooter py-3'>
        Copyright &copy; {year}  <span>{data.header.website}</span>
      </footer>

      
      <style dangerouslySetInnerHTML={{__html: `
          .myfooter{
            background-color:`+ data.footer.background +`!important;
            color:`+ data.footer.textColor +`!important;
          }
       `}} />

    </div>
  )
}

export default Footer
