import React from 'react';

import NavigatinBar from '../components/Nav';
import WelcomeContent from '../components/Welcome';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Test from '../components/Test';
import Blog from '../components/Blog';
import Coft from '../components/Coft';
import Monarch from '../components/Monarch';

function Home(){
    return(
        <>
      <header className='header'>
         <NavigatinBar />
         <WelcomeContent />
        
      </header>
      <main>
       <section>
         <Services />
       </section>
       <section>
         <Portfolio />
       </section>
       <section>
         <Test />
       </section>
       <section>
         <Blog />
       </section>
       <section>
         <Coft />
       </section>
      </main>
      <fotter>
        <Monarch />
      </fotter>
        </>
    )
}

export default Home;