// Experience.jsx
window.Experience = function Experience() {
    const e = React.createElement;
    const stack1 = ['Python', 'LangChain', 'LangGraph', 'FAISS', 'Ollama', 'RAG', 'FastAPI', 'OpenAI', 'Gemini'];

    return (
        e('section', { className: 'section experience-section', id: 'experience' },
            e('div', { className: 'container' },
                e('div', { className: 'section-tag centered' }, '// work experience'),
                e('h2', { className: 'section-title centered' }, 'Professional ', e('span', { className: 'gradient-text' }, 'Journey')),
                e('div', { className: 'timeline' },
                    // Job 1
                    e('div', { className: 'timeline-item' },
                        e('div', { className: 'timeline-dot' }),
                        e('div', { className: 'timeline-card' },
                            e('div', { className: 'tc-header' },
                                e('div', null,
                                    e('h3', { className: 'tc-role' }, 'Generative AI Engineer / AI Systems Developer'),
                                    e('div', { className: 'tc-company' },
                                        e('i', { className: 'fas fa-building' }), ' Ultralink IT Services LLC'
                                    )
                                ),
                                e('div', { className: 'tc-date' },
                                    e('i', { className: 'fas fa-calendar' }), ' Oct 2025 – Present'
                                )
                            ),
                            e('div', { className: 'tc-badge' }, 'Current Role'),
                            e('ul', { className: 'tc-bullets' },
                                e('li', null, 'Designed and developed ', e('strong', null, 'LLM-powered AI chatbots'), ' for real-world business use cases including an SOP Chatbot and a Supplier Portal Chatbot.'),
                                e('li', null, 'Implemented end-to-end ', e('strong', null, 'RAG pipelines'), ' — document ingestion, chunking, vector indexing with FAISS, semantic search, multi-document retrieval, and conversation memory.'),
                                e('li', null, 'Built scalable AI systems with ', e('strong', null, 'HTML, CSS, JavaScript'), ' frontends and ', e('strong', null, 'Flask/FastAPI'), ' backends, focused on modular, production-level architecture.')
                            ),
                            e('div', { className: 'tc-stack' },
                                stack1.map(s => e('span', { key: s }, s))
                            )
                        )
                    ),
                    // Job 2
                    e('div', { className: 'timeline-item' },
                        e('div', { className: 'timeline-dot edu' }),
                        e('div', { className: 'timeline-card' },
                            e('div', { className: 'tc-header' },
                                e('div', null,
                                    e('h3', { className: 'tc-role' }, 'Data Science & Generative AI Bootcamp'),
                                    e('div', { className: 'tc-company' },
                                        e('i', { className: 'fas fa-graduation-cap' }), ' Geekster | NSDC & IIT Guwahati'
                                    )
                                ),
                                e('div', { className: 'tc-date' }, e('i', { className: 'fas fa-calendar' }), ' 2024')
                            ),
                            e('ul', { className: 'tc-bullets' },
                                e('li', null, 'Completed ', e('strong', null, '20+ real-world case studies'), ' across Finance, Healthcare, and E-commerce using SQL, Python, and Power BI.'),
                                e('li', null, 'Built ', e('strong', null, 'AI-driven solutions'), ' using Scikit-learn, Hugging Face, LangChain, and LLMs with end-to-end data analysis.')
                            )
                        )
                    )
                )
            )
        )
    );
};
