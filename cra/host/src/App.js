import React, {useEffect, useState} from 'react';
import { Hero } from './component/Hero';
import axios, { Axios } from 'axios';

const RemoteButton = React.lazy(() => import('remote/Button'));
const Header = React.lazy(() => import('sharedComponents/Header'));
const Footer = React.lazy(() => import('sharedComponents/Footer'));
const Publication = React.lazy(() => import('sharedComponents/Publication'))

const App = () => {
  const [publications, setPublications] = useState([])
  const [numberOfPublicationDisplay, setNumberOfPublicationDisplay] = useState(5)

  const getPublications = async () => {
    const { data } = await axios.get(`https://666967282e964a6dfed4fe45.mockapi.io/api/news?limit=${numberOfPublicationDisplay}`)
    setPublications(data)
  }

  function loadMoreTodos () {
    setNumberOfPublicationDisplay(numberOfPublicationDisplay + 5)
  }

  useEffect(() => {
    getPublications()
  }, [numberOfPublicationDisplay]);

  return (
    <div className={'app-container'}>
      <React.Suspense fallback={"Loading Footer"}>
        <Header/>
      </React.Suspense>
      <main className={'app-main-container'}>
        <Hero title={"Host"} />
        <div className={'publications-container'}>
          <h2 className={'title-2'}>Dernière news</h2>
          <React.Suspense fallback="Loading Publications">
            {
              publications.map((publication) => (
                <Publication publication={publication} />
              ))
            }
          </React.Suspense>
        </div>
      </main>
      <React.Suspense fallback="Loading Button">
        <Footer />
      </React.Suspense>
    </div>
  )
};

export default App;
