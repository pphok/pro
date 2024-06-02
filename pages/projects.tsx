// pages/projects.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Projects</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard />
          {/* Add more ProjectCard components as needed */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
