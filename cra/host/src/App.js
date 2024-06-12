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
    <main>
    <Hero/>
    </main>
    <React.Suspense fallback="Loading Button">
      <Footer />
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
