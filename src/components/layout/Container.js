import styles from './Container.module.css'

function Container(props) {
    return <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>  // os children do container que virem na props serão inseridos aqui, customClass = classe recebida via props dinamicamente, atenção para a sintaxe
}

export default Container