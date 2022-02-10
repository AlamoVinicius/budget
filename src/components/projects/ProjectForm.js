import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";

function ProjectForm(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //useeffect faz com o que o react não envie milhares de requests para o db
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <Select
        name="category_id"
        text="selecione a categoria"
        options={categories}
      />
      <SubmitButton text={props.btnText} />
    </form>
  );
}

export default ProjectForm;
