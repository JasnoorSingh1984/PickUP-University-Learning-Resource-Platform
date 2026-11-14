import { useEffect, useRef } from "react";

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width;
    let height;

    const particles = [];

    const pointer = {
      x: -9999,
      y: -9999,
      active: false,
    };

    const particleCount = () =>
      Math.max(
        60,
        Math.min(
          180,
          Math.floor((window.innerWidth * window.innerHeight) / 10000)
        )
      );

    const getColors = () => {
      const light = document.body.getAttribute("data-theme") === "light";
      return light
        ? {
            dot: "rgba(16,32,56,.45)",
            line: "rgba(16,32,56,.14)",
          }
        : {
            dot: "rgba(185,225,255,.52)",
            line: "rgba(156,211,255,.14)",
          };
    };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      particles.length = 0;

      for (let i = 0; i < particleCount(); i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          ox: 0,
          oy: 0,
          r: 0.6 + Math.random() * 1.2,
        });
      }
    }

    function animate() {
      const colors = getColors();
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 170 && dist > 0) {
            const force = (1 - dist / 170) * 0.85;
            p.ox += (dx / dist) * force;
            p.oy += (dy / dist) * force;
          }
        }

        p.ox *= 0.92;
        p.oy *= 0.92;

        p.x += p.vx + p.ox;
        p.y += p.vy + p.oy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 120) {
            ctx.strokeStyle = colors.line;
            ctx.globalAlpha = 1 - dist / 120;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        ctx.globalAlpha = 1;
        ctx.fillStyle = colors.dot;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    }

    resize();

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const onLeave = () => {
      pointer.active = false;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (animId) {
        cancelAnimationFrame(animId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-particles" />;
}

export default ParticleBackground;