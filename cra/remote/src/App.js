import React from "react"
import LocalButton from './Button';
import { Title } from './components/Title';
const Header = React.lazy(() => import('sharedComponents/Header'));
const Footer = React.lazy(() => import('sharedComponents/Footer'));
const App = () => (
  <div>
    <React.Suspense fallback={"Loading Header"}>
      <Header/>
    </React.Suspense>
    <Title title={"Voici le Remote"}/>
    <React.Suspense fallback={"Loading Footer"}>
      <Footer/>
    </React.Suspense>
    <LocalButton />
  </div>
);

export default App;
