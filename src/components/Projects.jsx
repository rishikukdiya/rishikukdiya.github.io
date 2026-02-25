// Projects.jsx
window.Projects = function Projects() {
    const { useEffect } = React;
    const e = React.createElement;

    const projects = [
        {
            icon: 'fa-boxes-stacked', cls: 'p1',
            tags: ['RAG', 'LLM', 'FAISS'],
            title: 'Supplier AI Chatbot System',
            desc: 'AI-powered Supplier Portal Chatbot using LangChain, FAISS, and LLMs. Complete RAG pipeline — document ingestion, embeddings, vector search, retrieval, and response generation to answer supplier queries on onboarding, policies, and documentation.',
            features: ['Multi-document conversational AI', 'Context memory across turns', 'Flask / FastAPI REST backend', 'Interactive HTML/CSS/JS UI'],
            stack: ['Python', 'LangChain', 'FAISS', 'Flask', 'FastAPI', 'LLMs']
        },
        {
            icon: 'fa-file-medical', cls: 'p2',
            tags: ['SOP', 'NLP', 'RAG'],
            title: 'SOP Chatbot',
            desc: 'LLM-powered SOP Chatbot built with LangChain and FAISS. Employees query internal SOP documents through natural language with fast, accurate responses via semantic search and document-based Q&A, eliminating manual SOP lookups.',
            features: ['Optimized RAG pipeline', 'Multi-turn conversational memory', 'Streamlit interface', 'Reduced SOP lookup time significantly'],
            stack: ['Python', 'LangChain', 'FAISS', 'Streamlit', 'RAG']
        },
        {
            icon: 'fa-chart-bar', cls: 'p3',
            tags: ['Analytics', 'Power BI'],
            title: 'Data Analytics Case Studies',
            desc: 'Completed 20+ real-world case studies across Finance, Healthcare, and E-commerce using SQL, Python, and Power BI. Designed and deployed 10+ interactive dashboards for datasets with 50,000+ records.',
            features: ['20+ industry case studies', '10+ Power BI dashboards', '50,000+ record datasets'],
            stack: ['Python', 'SQL', 'Power BI', 'Pandas', 'EDA']
        }
    ];

    // 3D tilt effect
    useEffect(() => {
        const cards = document.querySelectorAll('.project-card');
        const onMove = (card) => (ev) => {
            const rect = card.getBoundingClientRect();
            const x = (ev.clientX - rect.left) / rect.width - 0.5;
            const y = (ev.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `translateY(-8px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
            card.style.transition = 'transform 0.1s ease';
        };
        const onLeave = (card) => () => {
            card.style.transform = '';
            card.style.transition = 'all 0.3s cubic-bezier(0.4,0,0.2,1)';
        };
        cards.forEach(c => { c.addEventListener('mousemove', onMove(c)); c.addEventListener('mouseleave', onLeave(c)); });
        return () => cards.forEach(c => { c.removeEventListener('mousemove', onMove(c)); c.removeEventListener('mouseleave', onLeave(c)); });
    }, []);

    return (
        e('section', { className: 'section projects-section', id: 'projects' },
            e('div', { className: 'container' },
                e('div', { className: 'section-tag centered' }, '// featured projects'),
                e('h2', { className: 'section-title centered' }, 'AI ', e('span', { className: 'gradient-text' }, 'Projects')),
                e('div', { className: 'projects-grid' },
                    projects.map(p =>
                        e('div', { className: 'project-card', key: p.title },
                            e('div', { className: 'proj-glow' }),
                            e('div', { className: 'proj-top' },
                                e('div', { className: `proj-icon ${p.cls}` }, e('i', { className: `fas ${p.icon}` })),
                                e('div', { className: 'proj-links' }, p.tags.map(t => e('span', { className: 'proj-tag', key: t }, t)))
                            ),
                            e('h3', { className: 'proj-title' }, p.title),
                            e('p', { className: 'proj-desc' }, p.desc),
                            e('div', { className: 'proj-features' },
                                p.features.map(f => e('div', { className: 'pf', key: f },
                                    e('i', { className: 'fas fa-check-circle' }), f
                                ))
                            ),
                            e('div', { className: 'proj-stack' }, p.stack.map(s => e('span', { key: s }, s)))
                        )
                    )
                )
            )
        )
    );
};
