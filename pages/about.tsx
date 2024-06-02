// pages/about.tsx
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">About Me</h1>
        <p className="text-center">This is the about page.</p>
      </main>
      <Footer />
    </div>
  )
}

export default About
