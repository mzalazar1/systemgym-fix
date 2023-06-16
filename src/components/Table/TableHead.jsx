import styles from './Table.module.css';

const TablaCabecera = () => {
  return (
    <thead>
      <tr>
        <th className={styles.thDatos}>DNI</th>
        <th className={styles.thDatos}>Nombre</th>
        <th className={styles.thDatos}>Apellido</th>
        <th className={styles.thDatos}>Teléfono</th>
        <th className={styles.thDatos}>Correo electrónico</th>
        <th className={styles.thBotones}>Acción</th>
      </tr>
    </thead>
  );
};

export default TablaCabecera;
