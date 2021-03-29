import Header from '../components/Header'
import Meta from '../components/Meta'

const Privacy = () => {
  // page content
  const pageTitle = 'Privacy'
  const pageDescription = 'Our pravacy agreement'

  return (
    <div>
       <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat tortor nec tortor efficitur ullamcorper. Quisque scelerisque dui vitae ante placerat, euismod aliquam magna egestas. Suspendisse quis velit ac odio aliquet pharetra fermentum in ligula. Proin eget eros massa. Aenean accumsan lectus vitae neque luctus lobortis. Donec quis fringilla lorem. Proin cursus sit amet nunc ac posuere. Donec in molestie lorem. Suspendisse potenti.
      </p>
      <p>
          Sed condimentum libero finibus aliquet cursus. Cras ac lectus vel tortor tristique aliquet. Quisque arcu risus, vehicula in tortor nec, efficitur placerat eros. Nunc at blandit metus. Donec feugiat, nisi ut ornare pharetra, orci nibh mollis diam, non laoreet ipsum ante id nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dignissim justo at orci placerat, quis tempor purus commodo.
      </p>
      <p>
          Nam at nunc arcu. Nullam venenatis, turpis et vehicula maximus, purus eros interdum nisl, vitae fermentum lorem sapien at augue. Donec sapien erat, eleifend non semper ornare, suscipit sit amet nisi. Sed a nunc sed nisl aliquam posuere sit amet ut ante. Maecenas rhoncus nisi a libero convallis, vitae ornare mi congue. Etiam eleifend laoreet augue efficitur euismod. Aenean pharetra magna gravida, fermentum dui vel, euismod metus.
      </p>
    </div>
  )
}

export default Privacy