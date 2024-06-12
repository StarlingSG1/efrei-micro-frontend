import React from "react"
import LocalButton from './Button';
import { Title } from './components/Title';
const Header = React.lazy(() => import('sharedComponents/Header'));
const Footer = React.lazy(() => import('sharedComponents/Footer'));
const App = () => (
  <div className={'app-container'}>
    <React.Suspense fallback={"Loading Header"}>
      <Header/>
    </React.Suspense>
    <main className={'app-main-container'}>
      <h1>Basic Host-Remote</h1>
      <h2>Remote</h2>
    </main>
    <Title title={"Voici le Remote"}/>
    <React.Suspense fallback={"Loading Footer"}>
      <Footer/>
    </React.Suspense>
  </div>
);

export default App;
