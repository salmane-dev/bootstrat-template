const data = require('../data.json'); 


const Body = ({ img1,img2 }) => {
  return (
    <div>
      <div className="container about"> 
              <div id="about" class="container-fluid">
                <div class="row">
                  <div class="col-sm-8">
                    <h2>About Company Page</h2> 
                    <h4>You've found {data.header.website} dedicated to finding the best money-saving offers on the Web and delivering them directly to you, the consumer.
                          Business profiles contain comprehensive information on contacts, products, services, 
                          trade experience and technology.
                    </h4> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button type="button" class="btn btn-outline-dark fs-4">Join us now</button>
                  </div>
                  <div class="col-sm-4">
                    <span class="glyphicon glyphicon-signal logo">
                          <img src={data.body.img1} alt="first image" className="w-100"/>
                    </span>
                  </div>
                </div>
              </div>

              <div class="container-fluid bg-grey">
                <div class="row">
                  <div class="col-sm-4">
                    <span class="glyphicon glyphicon-globe logo ">
                          <img src={data.body.img2} alt="Second image" className="w-100"/>
                    </span>
                  </div>
                  <div class="col-sm-8 grph2">
                    <h2>Our Values</h2> 
                    <h4>We strive to provide the highest quality and lowest prices available to our customers,
                        resulting in one of the best satisfaction ratings in the industry.
                        If you're not already receiving our money-saving
                        offers and web-only specials,contact us today.
                    </h4> 
                  </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Body
