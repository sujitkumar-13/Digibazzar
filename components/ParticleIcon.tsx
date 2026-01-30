"use client";

import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    baseColor: string;
    size: number;
    ease: number;
    opacity: number;
    vx: number;
    vy: number;
    isAmbient: boolean;
    friction: number;
}

const ParticleIcon: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const mouse = useRef({ x: 0, y: 0, radius: 100, active: false });
    const animationFrameId = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        const handleResize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
            mouse.current.active = true;
        };

        const handleMouseLeave = () => {
            mouse.current.active = false;
        };

        const init = () => {
            particles.current = [];
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Adjust logo size to ensure it doesn't hit edges
            const scale = Math.min(canvas.width / 600, canvas.height / 500, 1.2);
            const logoW = 300 * scale;
            const logoH = 150 * scale;
            const radius = 75 * scale;

            // Offscreen canvas for scanning - use a fixed size to avoid any tiling/scaling issues
            const offCanvas = document.createElement('canvas');
            offCanvas.width = canvas.width;
            offCanvas.height = canvas.height;
            const offCtx = offCanvas.getContext('2d');
            if (!offCtx) return;

            // Clear everything just in case
            offCtx.clearRect(0, 0, offCanvas.width, offCanvas.height);

            // Draw ONLY in the center
            offCtx.fillStyle = 'white';
            offCtx.beginPath();
            // Left half (D side)
            offCtx.roundRect(centerX - logoW / 2, centerY - logoH / 2, logoW / 2, logoH, [radius, 0, 0, radius]);
            offCtx.fill();

            // Cut 'D'
            offCtx.globalCompositeOperation = 'destination-out';
            offCtx.font = `bold ${100 * scale}px Helvetica, Arial, sans-serif`;
            offCtx.textAlign = 'center';
            offCtx.textBaseline = 'middle';
            offCtx.fillText('D', centerX - (logoW / 4), centerY + (5 * scale));

            // Right half (B side)
            offCtx.globalCompositeOperation = 'source-over';
            offCtx.strokeStyle = 'white';
            offCtx.lineWidth = 3 * scale;
            offCtx.beginPath();
            offCtx.roundRect(centerX, centerY - logoH / 2, logoW / 2, logoH, [0, radius, radius, 0]);
            offCtx.stroke();

            // Draw 'B'
            offCtx.fillStyle = 'white';
            offCtx.fillText('B', centerX + (logoW / 4), centerY + (5 * scale));

            const data = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height).data;

            // Scan only around the center area to prevent any artifacts at edges
            const scanMargin = 50;
            const startX = Math.max(0, centerX - logoW / 2 - scanMargin);
            const endX = Math.min(canvas.width, centerX + logoW / 2 + scanMargin);
            const startY = Math.max(0, centerY - logoH / 2 - scanMargin);
            const endY = Math.min(canvas.height, centerY + logoH / 2 + scanMargin);

            const scanStep = 2.5;
            for (let y = startY; y < endY; y += scanStep) {
                for (let x = startX; x < endX; x += scanStep) {
                    const index = (Math.floor(y) * offCanvas.width + Math.floor(x)) * 4;
                    if (data[index + 3] > 128) {
                        particles.current.push({
                            x: x,
                            y: y,
                            originX: x,
                            originY: y,
                            baseColor: '#FFD74B',
                            size: Math.random() * 1.5 + 0.5,
                            ease: 0.05 + Math.random() * 0.05,
                            opacity: Math.random() * 0.7 + 0.3,
                            vx: 0,
                            vy: 0,
                            isAmbient: false,
                            friction: 0.9
                        });
                    }
                }
            }

            // galaxy ambient particles (finer, more numerous)
            const ambientCount = 600;
            for (let i = 0; i < ambientCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.current.push({
                    x: x,
                    y: y,
                    originX: x,
                    originY: y,
                    baseColor: i % 10 === 0 ? '#FFFFFF' : '#FFD74B',
                    size: Math.random() * 1.1,
                    ease: 0.01,
                    opacity: Math.random() * 0.2,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    isAmbient: true,
                    friction: 1
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.current.forEach(p => {
                if (p.isAmbient) {
                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x < 0) p.x = canvas.width;
                    if (p.x > canvas.width) p.x = 0;
                    if (p.y < 0) p.y = canvas.height;
                    if (p.y > canvas.height) p.y = 0;

                    if (mouse.current.active) {
                        let dx = mouse.current.x - p.x;
                        let dy = mouse.current.y - p.y;
                        let dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < mouse.current.radius * 2) {
                            p.opacity = Math.min(p.opacity + 0.01, 0.4);
                        } else {
                            p.opacity = Math.max(p.opacity - 0.01, 0.15);
                        }
                    } else {
                        p.opacity = Math.max(p.opacity - 0.005, 0.15);
                    }
                } else {
                    let dx = mouse.current.x - p.x;
                    let dy = mouse.current.y - p.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (mouse.current.active && distance < mouse.current.radius) {
                        let force = (mouse.current.radius - distance) / mouse.current.radius;
                        let angle = Math.atan2(dy, dx);
                        p.vx -= Math.cos(angle) * force * 15;
                        p.vy -= Math.sin(angle) * force * 15;
                        p.opacity = Math.min(p.opacity + 0.05, 1);
                    } else {
                        p.vx += (p.originX - p.x) * p.ease;
                        p.vy += (p.originY - p.y) * p.ease;
                        p.opacity = Math.max(p.opacity - 0.01, 0.7);
                    }

                    p.vx *= p.friction;
                    p.vy *= p.friction;
                    p.x += p.vx;
                    p.y += p.vy;

                    if (!mouse.current.active || distance > mouse.current.radius) {
                        p.x += (Math.random() - 0.5) * 0.2;
                        p.y += (Math.random() - 0.5) * 0.2;
                    }
                }

                ctx.fillStyle = p.baseColor;
                ctx.globalAlpha = p.opacity;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <div className="w-full h-full relative overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
            />
        </div>
    );
};

export default ParticleIcon;
