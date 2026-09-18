import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white-text">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  )
}
