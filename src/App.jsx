// App.jsx — Root React Application
function App() {
    return React.createElement(React.Fragment, null,
        React.createElement(Navbar),
        React.createElement(Hero),
        React.createElement(About),
        React.createElement(Skills),
        React.createElement(Experience),
        React.createElement(Projects),
        React.createElement(Education),
        React.createElement(Contact),
        React.createElement(Footer)
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
