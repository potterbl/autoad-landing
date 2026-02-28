'use client';

import { useEffect, useRef } from 'react';

export function FlyingTriangles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Triangle objects
    const triangles: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    // Colors for triangles
    const colors = [
      'rgba(59, 130, 246, 0.3)',   // blue-500
      'rgba(147, 51, 234, 0.25)',  // purple-600
      'rgba(99, 102, 241, 0.2)',   // indigo-500
      'rgba(168, 85, 247, 0.3)',   // violet-500
      'rgba(34, 197, 94, 0.2)',    // green-500
    ];

    // Create triangles
    for (let i = 0; i < 12; i++) {
      triangles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        size: Math.random() * 40 + 15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      triangles.forEach((triangle) => {
        ctx.save();
        ctx.translate(triangle.x, triangle.y);
        ctx.rotate(triangle.rotation);
        ctx.globalAlpha = triangle.opacity;

        // Draw triangle
        ctx.beginPath();
        ctx.moveTo(0, -triangle.size / 2);
        ctx.lineTo(-triangle.size / 2, triangle.size / 2);
        ctx.lineTo(triangle.size / 2, triangle.size / 2);
        ctx.closePath();

        // Fill with color
        ctx.fillStyle = triangle.color;
        ctx.fill();

        // Optional stroke
        ctx.strokeStyle = triangle.color.replace(/[\d\.]+\)$/g, '0.5)');
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();

        // Update position
        triangle.x += triangle.speedX;
        triangle.y += triangle.speedY;
        triangle.rotation += triangle.rotationSpeed;

        // Wrap around screen
        if (triangle.x < -triangle.size) triangle.x = canvas.offsetWidth + triangle.size;
        if (triangle.x > canvas.offsetWidth + triangle.size) triangle.x = -triangle.size;
        if (triangle.y < -triangle.size) triangle.y = canvas.offsetHeight + triangle.size;
        if (triangle.y > canvas.offsetHeight + triangle.size) triangle.y = -triangle.size;

        // Slightly vary opacity for breathing effect
        triangle.opacity += Math.sin(Date.now() * 0.002 + triangle.x * 0.01) * 0.02;
        triangle.opacity = Math.max(0.1, Math.min(0.8, triangle.opacity));
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
