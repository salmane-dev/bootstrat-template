import Header from '../components/Header'
import Meta from '../components/Meta'

const Unsubscribe = () => {
  // page content
  const pageTitle = 'Unsubscribe'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Unsubscribe