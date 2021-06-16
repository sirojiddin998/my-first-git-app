
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
const Home = lazy(()=> import('./page/Home'));


function App() {
  return (
    <div className="App">
     <Suspense fallback={<><h1 className='text-center'>404 NOT FOUND</h1></>}>
       <BrowserRouter>
       <Switch>
          <Route exact path='/' component={ Home }/>
       </Switch>
       </BrowserRouter>
     </Suspense>
    </div>
  );
}

export default App;
     
