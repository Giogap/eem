import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <nav>
          <a href='/' className='Site-title'>El Escarraman Music</a>
          <ul>
            <li>
                <a href='/' className='App-home'>Home</a>
            </li>
            <li>
                <a href='/bandas' className='App-bandas'>Bandas</a>
            </li>
            <li>
                <a href='/pais' className='App-paises'>País</a>
            </li>
          </ul>
        </nav>
        </>
    );
}

export default Navbar;