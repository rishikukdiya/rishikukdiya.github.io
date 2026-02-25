// About.jsx
window.About = function About() {
    const e = React.createElement;
    return (
        e('section', { className: 'section about-section', id: 'about' },
            e('div', { className: 'container' },
                e('div', { className: 'about-grid' },
                    // Left — Visual
                    e('div', { className: 'about-visual' },
                        e('div', { className: 'avatar-ring' },
                            e('div', { className: 'avatar-core' },
                                e('i', { className: 'fas fa-brain avatar-icon' })
                            ),
                            e('div', { className: 'orbit orbit-1' }, e('div', { className: 'orbit-dot d1' })),
                            e('div', { className: 'orbit orbit-2' }, e('div', { className: 'orbit-dot d2' })),
                            e('div', { className: 'orbit orbit-3' }, e('div', { className: 'orbit-dot d3' }))
                        ),
                        e('div', { className: 'code-card floating' },
                            e('div', { className: 'code-header' },
                                e('span', { className: 'cc-dot r' }),
                                e('span', { className: 'cc-dot y' }),
                                e('span', { className: 'cc-dot g' }),
                                e('span', { className: 'cc-title' }, 'rag_pipeline.py')
                            ),
                            e('pre', { className: 'code-body' },
                                e('span', { className: 'kw' }, 'from'), ' langchain ', e('span', { className: 'kw' }, 'import'), ' FAISS\n',
                                e('span', { className: 'kw' }, 'from'), ' ollama ', e('span', { className: 'kw' }, 'import'), ' LLM\n\n',
                                e('span', { className: 'kw' }, 'def'), ' ', e('span', { className: 'fn-name' }, 'build_rag'), '(docs):\n',
                                '  embeddings = ', e('span', { className: 'cls-name' }, 'Embeddings'), '()\n',
                                '  db = FAISS.', e('span', { className: 'fn-name' }, 'from_docs'), '(docs)\n',
                                '  ', e('span', { className: 'kw' }, 'return'), ' db.', e('span', { className: 'fn-name' }, 'as_retriever'), '()'
                            )
                        )
                    ),
                    // Right — Text
                    e('div', { className: 'about-text' },
                        e('div', { className: 'section-tag' }, '// about me'),
                        e('h2', { className: 'section-title' },
                            'Building the Future', e('br'),
                            e('span', { className: 'gradient-text' }, 'with Artificial Intelligence')
                        ),
                        e('p', { className: 'about-para' },
                            'Detail-oriented ', e('strong', null, 'Data Science and Generative AI Engineer'),
                            ' with hands-on experience building LLM-powered chatbots, AI systems, and data-driven applications.'
                        ),
                        e('p', { className: 'about-para' },
                            'Proven ability to design ', e('strong', null, 'RAG pipelines'),
                            ', semantic search systems, and AI chat interfaces using LangChain, FAISS, Ollama, and LLMs.'
                        ),
                        e('p', { className: 'about-para' },
                            'Experience across ', e('strong', null, 'Healthcare, Pharma, Finance,'),
                            ' and Supplier Portals — passionate about building scalable, real-world AI solutions.'
                        ),
                        e('div', { className: 'about-tags' },
                            ['🤖 LLM Systems', '🔍 RAG Pipelines', '⚡ Agentic AI', '📊 Data Science', '🧠 NLP', '🔗 LangChain'].map(t =>
                                e('span', { className: 'tag', key: t }, t)
                            )
                        )
                    )
                )
            )
        )
    );
};
