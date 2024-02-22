import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import './index.css'

function App() {
  

  return (
    <>
    
      <Navbar />
      <div className=''>
      <About />
      </div>
      <div>
          <Services />
      </div>
      <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-20">
      <div className="md:flex md:gap-8 md:md-10">
        <Contact />
      </div>
      </main>
      <div>
      <Footer />
      </div>
      
    </>
  )
}

export default App
