import MobileNavigation from '../components/MobileNavigation';
import logoHorizontalGreen from '../assets/logoHorizontalGreen.png';
import './styles/normalize.css';
import './styles/header.css';

function Header() {
    return (
        <>
            <header>
                <section role="banner" aria-label="Header">
                    <img
                        src={logoHorizontalGreen}
                        alt="Little Lemon Logo"
                        title="Little Lemon Logo"
                    />
                    <MobileNavigation />
                </section>
            </header>
        </>
    );
}

export default Header;