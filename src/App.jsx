import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useMemo, useState } from 'react';
import { RouterProvider } from 'react-router/dom';
import Router from './router/Router';
import particlesOptions from './data/particles';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            const { loadSlim } = await import('@tsparticles/slim');
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => {
        if (!prefersReducedMotion()) {
            return particlesOptions;
        }

        // Static background: keep the look, drop the motion
        const { particles } = particlesOptions;
        return {
            ...particlesOptions,
            particles: {
                ...particles,
                color: { ...particles.color, animation: { enable: false } },
                move: { ...particles.move, enable: false },
            },
        };
    }, []);

    return (
        <>
            {init && <Particles id="tsparticles" className="tsparticles" options={options} />}
            <RouterProvider router={Router} />
        </>
    );
}

export default App;
