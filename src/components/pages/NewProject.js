import ProjectForm from "../projects/ProjectForm"
import styles from "./NewProject.module.css"

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie o seu projeto para então adicionar as despesas e controlar o seu orçamento</p>
            <ProjectForm btnText="Criar projeto" />
        </div>
    )
}

export default NewProject   