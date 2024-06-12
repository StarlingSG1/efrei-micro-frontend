import React from 'react';
import { Hero } from './component/Hero';

const RemoteButton = React.lazy(() => import('remote/Button'));
const Header = React.lazy(() => import('sharedComponents/Header'));
const Footer = React.lazy(() => import('sharedComponents/Footer'));
const App = () => (
  <div>
    <React.Suspense fallback={"Loading Footer"}>
      <Header/>
    </React.Suspense>
    <main className={'app-main-container'}>
      <h1>Basic Host-Remote</h1>
      <h2>Host</h2>
    <main>
    <Hero/>
    </main>
    <React.Suspense fallback="Loading Button">
      <Footer />
    </React.Suspense>
  </div>
);

export default App;
