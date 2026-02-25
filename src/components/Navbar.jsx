// Navbar.jsx
window.Navbar = function Navbar() {
    const { useState, useEffect } = React;
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

    return (
        React.createElement('nav', { className: `navbar${scrolled ? ' scrolled' : ''}`, id: 'navbar' },
            React.createElement('div', { className: 'nav-logo' }, 'RK', React.createElement('span', { className: 'dot' }, '.')),
            React.createElement('ul', { className: 'nav-links', style: menuOpen ? { display: 'flex', flexDirection: 'column', position: 'absolute', top: '70px', left: 0, right: 0, background: 'rgba(5,11,24,0.97)', padding: '1rem 2rem', borderBottom: '1px solid rgba(99,179,237,0.1)' } : {} },
                links.map(l => React.createElement('li', { key: l },
                    React.createElement('a', { href: `#${l.toLowerCase()}`, onClick: () => setMenuOpen(false) }, l)
                ))
            ),
            React.createElement('a', { href: '#contact', className: 'nav-cta' }, 'Hire Me'),
            React.createElement('button', { className: 'hamburger', onClick: () => setMenuOpen(o => !o) },
                React.createElement('i', { className: `fas fa-${menuOpen ? 'times' : 'bars'}` })
            )
        )
    );
};
