import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-title">
            <h1>Desafio Github API</h1>
            </div>
            <div className="home-subtitle">
            <h3>DevSuperior - Escola de programação</h3>
            </div>
            <Link to="/profile">
                <button className="btn btn-primary btn-lg start-button">Começar</button>
            </Link>
        </div>
    );
}

export default Home;
