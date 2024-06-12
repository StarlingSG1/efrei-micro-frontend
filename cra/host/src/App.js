import React from 'react';

const RemoteButton = React.lazy(() => import('remote/Button'));
const Header = React.lazy(() => import('sharedComponents/Header'));
const Footer = React.lazy(() => import('sharedComponents/Footer'));
const App = () => (
  <div>
    <React.Suspense fallback={"Loading Footer"}>
      <Header/>
    </React.Suspense>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <Footer />
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
