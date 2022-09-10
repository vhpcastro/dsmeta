import Logo from '../../assets/img/header-logo.svg';

import './styles.css'

function Header() {

    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={Logo} alt="Logo do cabeçalho" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://github.com/vhpcastro/">Victor Hugo Pires</a></p>
                </div>
            </header>
        </>
    )
}

export default Header;