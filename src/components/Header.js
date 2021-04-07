const data = require('../data.json'); 

const Header = () => { 

  return ( 
      <div className='starter-template text-center w-100 h-100 pt-5'>
        <header className="masthead pt-5">
            <div className=" text-center pt-5 text-light">
              <h1 className="h1 display-2 bold ">{data.header.title}</h1> 
              <p className="h4 p-3">{data.header.subtitle}</p> 
              <form >
                  <div className="input-group header_input">
                    <input type="email" className="form-control" size="50" placeholder="Email Address" autoFocus required></input>
                    <div className="input-group-btn">
                        <button type="submit" className="btn btn-danger">Subscribe</button>
                    </div>
                  </div>
              </form>
            </div>
        </header>
      </div> 
  )
}

export default Header
