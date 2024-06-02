// pages/index.tsx
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto flex-1 p-6">
        <h1 className="text-4xl font-bold text-center my-8">Welcome to My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Project 1"
            description="This is a description of project 1."
            imageUrl="/images/project1.jpg"
            projectUrl="#"
          />
          <ProjectCard
            title="Project 2"
            description="This is a description of project 2."
            imageUrl="/images/project2.jpg"
            projectUrl="#"
          />
          <ProjectCard
            title="Project 3"
            description="This is a description of project 3."
            imageUrl="/images/project3.jpg"
            projectUrl="#"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
