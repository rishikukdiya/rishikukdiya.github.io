// Education.jsx
window.Education = function Education() {
    const e = React.createElement;
    const certs = [
        { cls: 'c1', icon: 'fa-medal', name: 'Data Science & Generative AI Bootcamp', org: 'NSDC & IIT Guwahati (Geekster)' },
        { cls: 'c2', icon: 'fa-chart-pie', name: 'Business Dashboards using Power BI', org: 'Tata Group' },
        { cls: 'c3', icon: 'fa-database', name: 'SQL – Basic & Intermediate', org: 'HackerRank' },
        { cls: 'c4', icon: 'fa-link', name: 'Generative AI & LangChain', org: 'Analytics Vidhya' },
        { cls: 'c5', icon: 'fa-brain', name: 'AI Fundamentals: Foundations for Understanding AI', org: 'IBM' },
    ];

    return (
        e('section', { className: 'section education-section', id: 'education' },
            e('div', { className: 'container' },
                e('div', { className: 'section-tag centered' }, '// education & certifications'),
                e('h2', { className: 'section-title centered' }, 'Academic ', e('span', { className: 'gradient-text' }, 'Background')),
                e('div', { className: 'edu-cert-grid' },
                    // Degree card
                    e('div', { className: 'edu-card' },
                        e('div', { className: 'edu-icon' }, e('i', { className: 'fas fa-university' })),
                        e('div', { className: 'edu-content' },
                            e('h3', { className: 'edu-degree' }, 'B.E. – Electronics & Communication Engineering'),
                            e('div', { className: 'edu-school' }, 'Government Engineering College, Gandhinagar (GTU)'),
                            e('div', { className: 'edu-meta' },
                                e('span', null, e('i', { className: 'fas fa-calendar' }), ' Aug 2020 – June 2024'),
                                e('span', null, e('i', { className: 'fas fa-star' }), ' CGPA: 7.06 / 10')
                            )
                        )
                    ),
                    // Certs
                    e('div', { className: 'certs-title' }, 'Certifications'),
                    e('div', { className: 'certs-grid' },
                        certs.map(c =>
                            e('div', { className: 'cert-card', key: c.name },
                                e('div', { className: `cert-icon ${c.cls}` }, e('i', { className: `fas ${c.icon}` })),
                                e('div', { className: 'cert-info' },
                                    e('div', { className: 'cert-name' }, c.name),
                                    e('div', { className: 'cert-org' }, c.org)
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};
