import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm(props) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="insira o Valor total"
      />
      <Select name="category_id" text="selecione a categoria" />
      <SubmitButton text={props.btnText}/>
    </form>
  );
}

export default ProjectForm;
