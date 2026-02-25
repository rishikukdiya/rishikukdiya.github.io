// Skills.jsx
window.Skills = function Skills() {
    const { useEffect, useRef } = React;
    const e = React.createElement;

    const skillsData = [
        { icon: 'fa-chart-line', cls: 's1', cat: 'Data Analytics', pills: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Excel', 'SQL', 'EDA'] },
        { icon: 'fa-robot', cls: 's2', cat: 'Machine Learning', pills: ['Scikit-learn', 'Random Forest', 'SVM', 'XGBoost', 'Feature Engineering'] },
        { icon: 'fa-brain', cls: 's3', cat: 'Generative AI & LLMs', pills: ['LLMs', 'RAG', 'Prompt Engineering', 'Context Management', 'AI Architecture'] },
        { icon: 'fa-link', cls: 's4', cat: 'LLM Frameworks', pills: ['LangChain', 'LangGraph', 'Agentic AI', 'Tool Calling', 'Chain Orchestration'] },
        { icon: 'fa-database', cls: 's5', cat: 'Vector Databases', pills: ['FAISS', 'Nomic Embeddings', 'Semantic Search', 'Multi-doc Retrieval', 'Document Q&A'] },
        { icon: 'fa-code', cls: 's6', cat: 'Tools & Deployment', pills: ['Git', 'Flask', 'FastAPI', 'Streamlit', 'Ollama', 'OpenAI', 'Gemini'] },
    ];

    const gridRef = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    const delay = en.target.dataset.delay || 0;
                    setTimeout(() => en.target.classList.add('visible'), parseInt(delay));
                }
            });
        }, { threshold: 0.15 });
        if (gridRef.current) {
            gridRef.current.querySelectorAll('.skill-card').forEach(el => obs.observe(el));
        }
        return () => obs.disconnect();
    }, []);

    return (
        e('section', { className: 'section skills-section', id: 'skills' },
            e('div', { className: 'container' },
                e('div', { className: 'section-tag centered' }, '// technical skills'),
                e('h2', { className: 'section-title centered' }, 'My ', e('span', { className: 'gradient-text' }, 'Tech Stack')),
                e('div', { className: 'skills-grid', ref: gridRef },
                    skillsData.map((s, i) =>
                        e('div', { className: 'skill-card', key: s.cat, 'data-delay': i * 100 },
                            e('div', { className: `skill-icon-wrap ${s.cls}` }, e('i', { className: `fas ${s.icon}` })),
                            e('h3', { className: 'skill-cat' }, s.cat),
                            e('div', { className: 'skill-pills' },
                                s.pills.map(p => e('span', { key: p }, p))
                            )
                        )
                    )
                )
            )
        )
    );
};
