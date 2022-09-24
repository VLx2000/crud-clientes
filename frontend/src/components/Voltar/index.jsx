import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function Voltar({ caminho }) {

    return(
        <div>
            <Link to={caminho}>
                <FontAwesomeIcon icon={faAngleLeft} /> Voltar
            </Link>
        </div>
    );
}

export default Voltar;