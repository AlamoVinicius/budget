import styles from './Home.module.css'

import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Seja bem-vindo ao <span>Budget</span> </h1>
            <p>Crie seus projetos e controle seu orçamento e gastos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar projeto" />
        </section>
    )
}

export default Home