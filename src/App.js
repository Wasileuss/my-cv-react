import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { RouterProvider } from 'react-router-dom';
import Router from './router/Router'

function App() {
    const containerRef = useRef(null), [ init, setInit ] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, [ init ]);

    const particlesLoaded = useCallback(
        (container) => {
            containerRef.current = container;
            window.particlesContainer = container;
        },
        [ containerRef ]
    ),
    options = useMemo(
        () => ({
            particles: {
                number: {
                    value: 500,
                    density: {
                        enable: true,
                        area: 800
                    }
                },
                color: {
                    value: "#ff0000",
                    animation: {
                        enable: true,
                        speed: 5,
                        sync: true
                    }
                },
                shape: {
                    type: "circle",
                    options: {
                        polygon: {
                            sides: 5
                        }
                    }
                },
                stroke: {
                    width: 0
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    animation: {
                        enable: false,
                        speed: 3,
                        minimumValue: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    animation: {
                        enable: false,
                        speed: 20,
                        minimumValue: 0.1,
                        sync: false
                    }
                },
                links: {
                    enable: true,
                    distance: 100,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    outMode: "out",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        links: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 0.8
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        quantity: 4
                    },
                    remove: {
                        quantity: 2
                    }
                }
            },
            detectRetina: true,
            background: {
                color: "#101720",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover"
            }
        }),
        []
    );

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles" 
                    className="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            )}
            <RouterProvider router={Router} />
        </>
    );
}

export default App;