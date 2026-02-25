// Contact.jsx
window.Contact = function Contact() {
    const { useState } = React;
    const e = React.createElement;
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    // 🔥 REPLACE THIS with your actual Formspree URL after signing up at formspree.io
    const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

    const onChange = field => ev => setForm(f => ({ ...f, [field]: ev.target.value }));

    const onSubmit = async (ev) => {
        ev.preventDefault();
        setSending(true);
        setError(false);

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message
                })
            });

            if (response.ok) {
                setSending(false);
                setSent(true);
                setForm({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setSent(false), 6000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (err) {
            setSending(false);
            setError(true);
            setTimeout(() => setError(false), 5000);
        }
    };

    const infos = [
        { icon: 'fa-envelope', label: 'Email', value: 'rishikukadiya@gmail.com', href: 'mailto:rishikukadiya@gmail.com' },
        { icon: 'fa-linkedin fab', label: 'LinkedIn', value: 'linkedin.com/in/rishi-kukadiya-616118273', href: 'https://www.linkedin.com/in/rishi-kukadiya-616118273/' },
        { icon: 'fa-github fab', label: 'GitHub', value: 'github.com/rishikukadiya', href: 'https://github.com/rishikukadiya' },
        { icon: 'fa-map-marker-alt', label: 'Location', value: 'Ahmedabad, Gujarat, India', href: null },
    ];

    return (
        e('section', { className: 'section contact-section', id: 'contact' },
            e('div', { className: 'container' },
                e('div', { className: 'section-tag centered' }, '// contact'),
                e('h2', { className: 'section-title centered' }, "Let's ", e('span', { className: 'gradient-text' }, 'Connect')),
                e('p', { className: 'contact-sub' }, 'Open to exciting AI/ML opportunities, collaborations, and freelance projects.'),
                e('div', { className: 'contact-grid' },
                    // Info cards
                    e('div', { className: 'contact-info' },
                        infos.map(info =>
                            info.href
                                ? e('a', { className: 'contact-card', href: info.href, target: '_blank', key: info.label },
                                    e('div', { className: 'ci-icon' }, e('i', { className: `fas ${info.icon}` })),
                                    e('div', null,
                                        e('div', { className: 'ci-label' }, info.label),
                                        e('div', { className: 'ci-value' }, info.value)
                                    )
                                )
                                : e('div', { className: 'contact-card', key: info.label },
                                    e('div', { className: 'ci-icon' }, e('i', { className: `fas ${info.icon}` })),
                                    e('div', null,
                                        e('div', { className: 'ci-label' }, info.label),
                                        e('div', { className: 'ci-value' }, info.value)
                                    )
                                )
                        )
                    ),
                    // Form
                    e('form', { className: 'contact-form', onSubmit },
                        e('h3', { className: 'form-title' }, 'Send a Message'),
                        ['name', 'email', 'subject'].map(field =>
                            e('div', { className: 'form-group', key: field },
                                e('input', {
                                    type: field === 'email' ? 'email' : 'text',
                                    className: 'form-input',
                                    placeholder: field.charAt(0).toUpperCase() + field.slice(1),
                                    value: form[field],
                                    onChange: onChange(field),
                                    required: field !== 'subject'
                                })
                            )
                        ),
                        e('div', { className: 'form-group' },
                            e('textarea', {
                                className: 'form-input form-textarea',
                                placeholder: 'Your Message',
                                rows: 5,
                                value: form.message,
                                onChange: onChange('message'),
                                required: true
                            })
                        ),
                        e('button', { type: 'submit', className: 'btn-primary form-btn', disabled: sending },
                            e('i', { className: `fas ${sending ? 'fa-spinner fa-spin' : sent ? 'fa-check' : 'fa-paper-plane'}` }),
                            ' ',
                            sending ? 'Sending...' : sent ? 'Sent! ✅' : 'Send Message'
                        ),
                        sent && e('div', { className: 'form-success' }, '✅ Message sent! I\'ll get back to you soon.'),
                        error && e('div', { className: 'form-error', style: { color: '#ff4d6d', marginTop: '10px', fontSize: '0.9rem' } },
                            '❌ Oops! Something went wrong. Please try emailing directly at rishikukadiya@gmail.com'
                        )
                    )
                )
            )
        )
    );
};
