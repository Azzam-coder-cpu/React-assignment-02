import { NavLink } from "react-router";
import "./Home.css";
import image from "../../assets/todo.png"

type Project = {
  id: number;
  title: string;
  img: string;
  github: string;
  live: string;
  path: string;
};

function Home() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Todo App",
      img: image,
      github: "https://github.com/Azzam-coder-cpu/Todo-app.git",
      live: "https://beautiful-cannoli-e264d4.netlify.app/",
      path: "/todo",
    },
    {
      id: 2,
      title: "Quiz App",
      img: "",
      github: "",
      live: "",
      path: "/quiz",
    },
    {
      id: 3,
      title: "Multi-step form",
      img: "",
      github: "",
      live: "",
      path: "/form",
    },
  ];

  return (
    <div className="home">
      <h1 className="title">My React Toy Projects</h1>
      <div className="card-grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <h2 className="card-title">{project.title}</h2>
            <img src={project.img} alt={project.title} className="card-img" />
            <div className="links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live
              </a>
              <NavLink to={project.path}>Open</NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
