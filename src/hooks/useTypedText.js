// useTypedText.js — Custom React hook for typewriter effect
window.useTypedText = function useTypedText(roles) {
    const { useState, useEffect, useRef } = React;
    const [text, setText] = useState('');
    const state = useRef({ rIdx: 0, cIdx: 0, deleting: false });

    useEffect(() => {
        let timer;
        const tick = () => {
            const { rIdx, cIdx, deleting } = state.current;
            const cur = roles[rIdx];
            if (!deleting) {
                setText(cur.substring(0, cIdx + 1));
                state.current.cIdx++;
                if (state.current.cIdx === cur.length) {
                    state.current.deleting = true;
                    timer = setTimeout(tick, 2000);
                } else {
                    timer = setTimeout(tick, 80);
                }
            } else {
                setText(cur.substring(0, cIdx - 1));
                state.current.cIdx--;
                if (state.current.cIdx === 0) {
                    state.current.deleting = false;
                    state.current.rIdx = (rIdx + 1) % roles.length;
                }
                timer = setTimeout(tick, 45);
            }
        };
        timer = setTimeout(tick, 500);
        return () => clearTimeout(timer);
    }, []);

    return text;
};
