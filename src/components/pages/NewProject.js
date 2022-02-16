import { useNavigate } from "react-router-dom";

import ProjectForm from "../projects/ProjectForm";

import styles from "./NewProject.module.css";

function NewProject() {
  const history = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("https://my-json-server.typicode.com/AlamoVinicius/backendBudget/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // redirect
        history('/projects', {state: {message: "Projeto criado com sucesso! "}})
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>
        Crie o seu projeto para então adicionar as despesas e controlar o seu
        orçamento
      </p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;
