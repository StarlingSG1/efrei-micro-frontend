import React from "react"
import LocalButton from './Button';
const Header = React.lazy(() => import('sharedComponents/Header'));
const Footer = React.lazy(() => import('sharedComponents/Footer'));
const App = () => (
  <div>
    <React.Suspense fallback={"Loading Header"}>
      <Header/>
    </React.Suspense>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <React.Suspense fallback={"Loading Footer"}>
      <Footer/>
    </React.Suspense>
    <LocalButton />
  </div>
);

export default App;
