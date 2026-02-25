// Hero.jsx
window.Hero = function Hero() {
    const { useRef } = React;
    const canvasRef = useRef(null);
    const roles = ['LLM-powered Systems', 'RAG Pipelines', 'AI Chatbots', 'Semantic Search Engines', 'Agentic AI Workflows', 'Intelligent Applications'];
    useNeuralCanvas(canvasRef);
    const typedText = useTypedText(roles);

    return (
        React.createElement('section', { className: 'hero', id: 'home' },
            React.createElement('canvas', { id: 'neuralCanvas', ref: canvasRef }),
            React.createElement('div', { className: 'hero-content' },
                React.createElement('div', { className: 'hero-badge' },
                    React.createElement('span', { className: 'pulse-dot' }),
                    ' Gen AI Engineer @ Ultralink IT'
                ),
                React.createElement('h1', { className: 'hero-title' },
                    React.createElement('span', { className: 'greeting' }, "Hi, I'm"),
                    React.createElement('span', { className: 'name-glow' }, 'Rishi Kukadiya')
                ),
                React.createElement('div', { className: 'hero-roles' },
                    React.createElement('span', { className: 'role-prefix' }, 'I build '),
                    React.createElement('span', { className: 'typed-text' }, typedText),
                    React.createElement('span', { className: 'cursor-blink' }, '|')
                ),
                React.createElement('p', { className: 'hero-desc' },
                    'Generative AI Engineer crafting intelligent LLM systems, RAG pipelines, and AI-powered applications that solve real-world business challenges.'
                ),
                React.createElement('div', { className: 'hero-actions' },
                    React.createElement('a', { href: '#projects', className: 'btn-primary' },
                        React.createElement('i', { className: 'fas fa-rocket' }), ' View Projects'
                    ),
                    React.createElement('a', { href: '#contact', className: 'btn-outline' },
                        React.createElement('i', { className: 'fas fa-paper-plane' }), ' Get In Touch'
                    )
                ),
                React.createElement('div', { className: 'hero-stats' },
                    React.createElement('div', { className: 'stat' },
                        React.createElement('span', { className: 'stat-num' }, '2+'),
                        React.createElement('span', { className: 'stat-label' }, 'Years Exp')
                    ),
                    React.createElement('div', { className: 'stat-divider' }),
                    React.createElement('div', { className: 'stat' },
                        React.createElement('span', { className: 'stat-num' }, '10+'),
                        React.createElement('span', { className: 'stat-label' }, 'AI Projects')
                    ),
                    React.createElement('div', { className: 'stat-divider' }),
                    React.createElement('div', { className: 'stat' },
                        React.createElement('span', { className: 'stat-num' }, '20+'),
                        React.createElement('span', { className: 'stat-label' }, 'Case Studies')
                    )
                )
            ),
            React.createElement('div', { className: 'scroll-indicator' },
                React.createElement('div', { className: 'scroll-mouse' },
                    React.createElement('div', { className: 'scroll-wheel' })
                )
            )
        )
    );
};
