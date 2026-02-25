// useNeuralCanvas.js — Custom React hook for animated neural network canvas
window.useNeuralCanvas = function useNeuralCanvas(canvasRef) {
    const { useEffect } = React;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let nodes = [], animId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createNodes = () => {
            nodes = [];
            const count = Math.floor((canvas.width * canvas.height) / 14000);
            for (let i = 0; i < count; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    r: Math.random() * 2.5 + 1,
                    pulse: Math.random() * Math.PI * 2
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const grad = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width * 0.8);
            grad.addColorStop(0, 'rgba(10,20,50,0.6)');
            grad.addColorStop(1, 'rgba(5,11,24,0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const time = Date.now() * 0.001;
            const maxDist = 140;

            nodes.forEach((node, i) => {
                node.x += node.vx; node.y += node.vy; node.pulse += 0.02;
                if (node.x < -20) node.x = canvas.width + 20;
                if (node.x > canvas.width + 20) node.x = -20;
                if (node.y < -20) node.y = canvas.height + 20;
                if (node.y > canvas.height + 20) node.y = -20;

                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[j].x - node.x; const dy = nodes[j].y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.35;
                        const hue = 210 + Math.sin(time + i) * 30;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `hsla(${hue},80%,70%,${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }

                const pulseA = 0.6 + Math.sin(node.pulse) * 0.4;
                const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 4);
                glow.addColorStop(0, `rgba(99,179,237,${pulseA})`);
                glow.addColorStop(1, 'transparent');
                ctx.beginPath(); ctx.arc(node.x, node.y, node.r * 4, 0, Math.PI * 2);
                ctx.fillStyle = glow; ctx.fill();
                ctx.beginPath(); ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99,179,237,${pulseA})`; ctx.fill();
            });

            animId = requestAnimationFrame(draw);
        };

        resize(); createNodes(); draw();
        window.addEventListener('resize', () => { resize(); createNodes(); });
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
    }, []);
};
