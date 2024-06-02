// pages/contact.tsx
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Contact Me</h1>
        <p className="text-center">This is the contact page.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
