
import React, { useEffect, useRef, useState } from "react";

export default function NeuralBackgroundDemo() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [config, setConfig] = useState({
    color: "#6366f1",
    trailOpacity: 0.15,
    particleCount: 600,
    speed: 1,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles = [];
    let animationFrameId;
    let mouse = { x: -1000, y: -1000 };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 200 + 100;
      }

      update() {
        const angle =
          (Math.cos(this.x * 0.005) + Math.sin(this.y * 0.005)) * Math.PI;

        this.vx += Math.cos(angle) * 0.2 * config.speed;
        this.vy += Math.sin(angle) * 0.2 * config.speed;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          this.vx -= dx * force * 0.05;
          this.vy -= dy * force * 0.05;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95;
        this.vy *= 0.95;

        this.age++;
        if (this.age > this.life) {
          this.reset();
        }

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 200 + 100;
      }

      draw(context) {
        context.fillStyle = config.color;
        const alpha = 1 - Math.abs(this.age / this.life - 0.5) * 2;
        context.globalAlpha = alpha;
        context.fillRect(this.x, this.y, 1.5, 1.5);
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${config.trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      init();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    init();
    animate();

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [config]);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative w-full h-full bg-black overflow-hidden"
      >
        <canvas ref={canvasRef} className="block w-full h-full" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Neural Background
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Move your mouse to interact with particles
          </p>
        </div>

        {/* Control Panel */}
        {/* <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg shadow-xl pointer-events-auto max-w-xs">
          <h3 className="text-white font-semibold mb-4">Controls</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-gray-300 text-sm block mb-2">
                Color
              </label>
              <input
                type="color"
                value={config.color}
                onChange={(e) =>
                  setConfig({ ...config, color: e.target.value })
                }
                className="w-full h-10 rounded cursor-pointer"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm block mb-2">
                Trail Opacity: {config.trailOpacity.toFixed(2)}
              </label>
              <input
                type="range"
                min="0.05"
                max="0.5"
                step="0.01"
                value={config.trailOpacity}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    trailOpacity: parseFloat(e.target.value),
                  })
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm block mb-2">
                Particles: {config.particleCount}
              </label>
              <input
                type="range"
                min="100"
                max="1200"
                step="50"
                value={config.particleCount}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    particleCount: parseInt(e.target.value),
                  })
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm block mb-2">
                Speed: {config.speed.toFixed(1)}x
              </label>
              <input
                type="range"
                min="0.1"
                max="3"
                step="0.1"
                value={config.speed}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    speed: parseFloat(e.target.value),
                  })
                }
                className="w-full"
              />
            </div>

            <button
              onClick={() =>
                setConfig({
                  color: "#6366f1",
                  trailOpacity: 0.15,
                  particleCount: 600,
                  speed: 1,
                })
              }
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded transition-colors"
            >
              Reset to Default
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}