// import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Boton from '../SharedComponents/Button';
import styles from './Table.module.css';
import { removeSoc } from '../../redux/Socios/socio.actions';

const Tabla = () => {
  const socios = useSelector((state) => state.Reduc.socios);
  const dispatch = useDispatch();
  return (
    <tbody>
      {socios.length > 0 ? (
        socios.map((socio, key) => (
          <tr key={key}>
            <td className={styles.tdDatos}>{socio.dni}</td>
            <td className={styles.tdDatos}>{socio.name}</td>
            <td className={styles.tdDatos}>{socio.surename}</td>
            <td className={styles.tdDatos}>{socio.tel}</td>
            <td className={styles.tdDatos}>{socio.mail}</td>
            <td className={styles.tdBotones}>
              <Link to={`/edit/${socio.id}`}>
                <Boton tipo="editProd" texto="Editar" />
              </Link>
              <button
                className={styles.elimSoc}
                onClick={() => dispatch(removeSoc(socio.id))}
              >
                {' '}
                Eliminar{' '}
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6}>No hay socios cargados</td>
        </tr>
      )}
    </tbody>
  );
};
export default Tabla;
