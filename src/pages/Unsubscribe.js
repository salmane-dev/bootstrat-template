import Header from '../components/Header'
import Meta from '../components/Meta'

const data = require('../data.json'); 

const Unsubscribe = () => {
  // page content
  const pageTitle = 'Unsubscribe'
  const pageDescription = 'If at any time you\'d like to unsubscribe from our mailing list, please enter your email address below.'

  const home_screen_bg = {
    background: 'url(' + data.unsubscribe.img1 + ') ',
    backgroundSize:' cover ',
  }

  return (
    <div className="home-screen" style={home_screen_bg}>
      <Meta title={pageTitle}/> 
      <div className="container m-auto">
          <div className="unsubscribe p-5">
              <h2 className="fs-2">Unsubscribe :</h2>
              <p>
                  {pageDescription}
              </p>
          </div>

          <form>
              <div className="input-group header_input">
                  <input type="email" className="form-control" size="50" placeholder="Email Address" required></input> 
              </div>
                  <div className="input-group-btn text-center">
                      <button type="button" className="btn btn-danger px-5">Unsubscribe</button>
                  </div>
          </form>

      </div>
    </div>
  )
}

export default Unsubscribe