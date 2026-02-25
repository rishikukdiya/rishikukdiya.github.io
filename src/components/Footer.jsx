// Footer.jsx
window.Footer = function Footer() {
    const e = React.createElement;
    return (
        e('footer', { className: 'footer' },
            e('div', { className: 'footer-inner' },
                e('div', { className: 'footer-logo' }, 'RK', e('span', { className: 'dot' }, '.')),
                e('p', { className: 'footer-copy' }, '© 2025 Rishi Kukadiya · Built with React & AI ⚡'),
                e('div', { className: 'footer-socials' },
                    e('a', { href: 'https://github.com/rishikukadiya', target: '_blank', 'aria-label': 'GitHub' },
                        e('i', { className: 'fab fa-github' })
                    ),
                    e('a', { href: 'https://www.linkedin.com/in/rishi-kukadiya-616118273/', target: '_blank', 'aria-label': 'LinkedIn' },
                        e('i', { className: 'fab fa-linkedin' })
                    )
                )
            )
        )
    );
};
