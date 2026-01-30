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
    const mouse = useRef({ x: 0, y: 0, radius: 120, active: false });
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

            // Mask Canvas: Fixed size for guaranteed single-logo scanning
            const maskW = 400;
            const maskH = 200;
            const maskCanvas = document.createElement('canvas');
            maskCanvas.width = maskW;
            maskCanvas.height = maskH;
            const mCtx = maskCanvas.getContext('2d');
            if (!mCtx) return;

            // Scale for logo internal elements
            const innerScale = 1;
            const logoW = 320 * innerScale;
            const logoH = 160 * innerScale;
            const radius = 80 * innerScale;
            const mCX = maskW / 2;
            const mCY = maskH / 2;

            mCtx.clearRect(0, 0, maskW, maskH);
            mCtx.fillStyle = 'white';

            // Left Half (D container)
            mCtx.beginPath();
            mCtx.roundRect(mCX - logoW / 2, mCY - logoH / 2, logoW / 2, logoH, [radius, 0, 0, radius]);
            mCtx.fill();

            // Cut 'D'
            mCtx.globalCompositeOperation = 'destination-out';
            mCtx.font = `bold ${100 * innerScale}px Helvetica, Arial, sans-serif`;
            mCtx.textAlign = 'center';
            mCtx.textBaseline = 'middle';
            mCtx.fillText('D', mCX - logoW / 4, mCY + 4 * innerScale);

            // Right Half (B container)
            mCtx.globalCompositeOperation = 'source-over';
            mCtx.strokeStyle = 'white';
            mCtx.lineWidth = 3.5 * innerScale;
            mCtx.beginPath();
            mCtx.roundRect(mCX, mCY - logoH / 2, logoW / 2, logoH, [0, radius, radius, 0]);
            mCtx.stroke();

            // Draw 'B'
            mCtx.fillStyle = 'white';
            mCtx.fillText('B', mCX + logoW / 4, mCY + 4 * innerScale);

            const imageData = mCtx.getImageData(0, 0, maskW, maskH).data;
            const scanStep = 1.6; // Much higher density

            // Responsive Scaling Factor for the whole logo relative to screen
            const displayScale = Math.min(canvas.width / 500, canvas.height / 400, 1.3);

            for (let y = 0; y < maskH; y += scanStep) {
                for (let x = 0; x < maskW; x += scanStep) {
                    const index = (Math.floor(y) * maskW + Math.floor(x)) * 4;
                    if (imageData[index + 3] > 128) {
                        // Map mask coordinates to centered display coordinates
                        const originX = centerX + (x - mCX) * displayScale;
                        const originY = centerY + (y - mCY) * displayScale;

                        particles.current.push({
                            // Start totally scattered across the whole box
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            originX: originX,
                            originY: originY,
                            baseColor: '#FFD74B',
                            size: Math.random() * 1.5 + 0.5,
                            ease: 0.015 + Math.random() * 0.02, // Slower coalesce for dramatic entrance
                            opacity: 0,
                            vx: (Math.random() - 0.5) * 60, // High velocity explosion
                            vy: (Math.random() - 0.5) * 60,
                            isAmbient: false,
                            friction: 0.92
                        });
                    }
                }
            }

            // Atmospheric Background Particles
            const ambientCount = 500;
            for (let i = 0; i < ambientCount; i++) {
                const ax = Math.random() * canvas.width;
                const ay = Math.random() * canvas.height;
                particles.current.push({
                    x: ax,
                    y: ay,
                    originX: ax,
                    originY: ay,
                    baseColor: i % 12 === 0 ? '#FFFFFF' : '#FFD74B',
                    size: Math.random() * 1.2,
                    ease: 0.01,
                    opacity: Math.random() * 0.15,
                    vx: (Math.random() - 0.5) * 0.35,
                    vy: (Math.random() - 0.5) * 0.35,
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
                        const dx = mouse.current.x - p.x;
                        const dy = mouse.current.y - p.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < mouse.current.radius * 2) {
                            p.opacity = Math.min(p.opacity + 0.01, 0.35);
                        } else {
                            p.opacity = Math.max(p.opacity - 0.01, 0.1);
                        }
                    } else {
                        p.opacity = Math.max(p.opacity - 0.005, 0.1);
                    }
                } else {
                    const dx = mouse.current.x - p.x;
                    const dy = mouse.current.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (mouse.current.active && distance < mouse.current.radius) {
                        const force = (mouse.current.radius - distance) / mouse.current.radius;
                        const angle = Math.atan2(dy, dx);
                        p.vx -= Math.cos(angle) * force * 15;
                        p.vy -= Math.sin(angle) * force * 15;
                        p.opacity = Math.min(p.opacity + 0.05, 1);
                    } else {
                        p.vx += (p.originX - p.x) * p.ease;
                        p.vy += (p.originY - p.y) * p.ease;
                        // Smoothly transition opacity to baseline
                        if (p.opacity < 0.7) p.opacity += 0.008;
                        else p.opacity = Math.max(p.opacity - 0.01, 0.7);
                    }

                    p.vx *= p.friction;
                    p.vy *= p.friction;
                    p.x += p.vx;
                    p.y += p.vy;

                    if (!mouse.current.active || distance > mouse.current.radius) {
                        p.x += (Math.random() - 0.5) * 0.25;
                        p.y += (Math.random() - 0.5) * 0.25;
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
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
            />
        </div>
    );
};

export default ParticleIcon;
