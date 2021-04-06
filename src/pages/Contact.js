import Header from '../components/Header'
import Meta from '../components/Meta'

const Contact = () => {
  // page content
  const pageTitle = 'Contact Us'
  const pageDescription = 'Thank you for visiting Viewpointclub.com.'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />

      <div className="mw-75 w-75 mx-auto">
        <h3 className="">
        To receive our exclusive e-mail offers from Viewpointclub.com name companies,
         please complete the form bellow.
        </h3>
        <form className="m-6 mw-50 w-50 mx-auto">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Contact