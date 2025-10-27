"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

type ProductCardProps = {
  src: string;
  alt: string;
};

export default function ProductCard({ src, alt }: ProductCardProps) {
  
  const [isOpen, setIsOpen] = useState(false);

  // zoom / pan state
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [lastPointer, setLastPointer] = useState<{ x: number; y: number } | null>(null);
  const [touchInfo, setTouchInfo] = useState<{ distance: number; mid: { x: number; y: number } } | null>(null);

  const resetZoom = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    setIsPanning(false);
    setLastPointer(null);
    setTouchInfo(null);
  };

  const openModal = () => {
    resetZoom();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    resetZoom();
  };

  // mouse wheel zoom
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.0015; // adjust sensitivity
    setScale((prev) => {
      const next = Math.min(4, Math.max(1, +(prev + delta).toFixed(3)));
      return next;
    });
  };

  // pointer drag to pan
  const onPointerDown = (e: React.PointerEvent) => {
    if (scale === 1) return; // only allow panning when zoomed
    e.preventDefault(); // prevent native drag/select behavior
    (e.target as Element).setPointerCapture(e.pointerId);
    setIsPanning(true);
    setLastPointer({ x: e.clientX, y: e.clientY });
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isPanning || !lastPointer) return;
    const dx = e.clientX - lastPointer.x;
    const dy = e.clientY - lastPointer.y;
    setTranslate((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    setLastPointer({ x: e.clientX, y: e.clientY });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    try { (e.target as Element).releasePointerCapture(e.pointerId); } catch {}
    setIsPanning(false);
    setLastPointer(null);
  };

  // double click toggles zoom
  const onDoubleClick = () => {
    if (scale <= 1) {
      setScale(2);
    } else {
      resetZoom();
    }
  };

  // simple touch pinch handling
  const distanceBetween = (t1: Touch, t2: Touch) => Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const d = distanceBetween(e.touches[0], e.touches[1]);
      const mid = { x: (e.touches[0].clientX + e.touches[1].clientX) / 2, y: (e.touches[0].clientY + e.touches[1].clientY) / 2 };
      setTouchInfo({ distance: d, mid });
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchInfo) {
      const newD = distanceBetween(e.touches[0], e.touches[1]);
      const ratio = newD / touchInfo.distance;
      setScale((prev) => {
        const next = Math.min(4, Math.max(1, +(prev * ratio).toFixed(3)));
        return next;
      });
      // update touchInfo distance for incremental updates
      setTouchInfo((prev) => prev ? { ...prev, distance: newD } : null);
    } else if (e.touches.length === 1 && scale > 1) {
      // single finger pan on touch
      const t = e.touches[0];
      if (!lastPointer) {
        setLastPointer({ x: t.clientX, y: t.clientY });
        setIsPanning(true);
      } else {
        const dx = t.clientX - lastPointer.x;
        const dy = t.clientY - lastPointer.y;
        setTranslate((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
        setLastPointer({ x: t.clientX, y: t.clientY });
      }
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) setTouchInfo(null);
    if (e.touches.length === 0) {
      setIsPanning(false);
      setLastPointer(null);
    }
  };

  return(
    <div className='flex flex-col justify-center items-center overflow-hidden bg-background rounded-xl'>
      <div id='image-card' className='flex w-full h-64 max-h-64 object-contain overflow-hidden rounded-xl'>
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300} 
          loading='lazy'
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className='object-cover min-w-full h-full self-center p-2 overflow-hidden cursor-pointer select-none'
          onClick={openModal}
        />

        {isOpen && (
          <div
            className='fixed inset-0 w-full h-full p-10 bg-foreground/80 z-[9999] flex justify-center items-center'
            onClick={closeModal}
          >
            <div
              // stop click from bubbling to backdrop close
              onClick={(e) => e.stopPropagation()}
              onWheel={onWheel}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onDoubleClick={onDoubleClick}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onContextMenu={(e) => e.preventDefault()} // prevent browser context menu while interacting
              className='relative w-full h-full max-w-4xl max-h-[80vh] bg-transparent overflow-hidden'
              style={{
                touchAction: 'none', // allow custom touch handling (pinch & pan)
                cursor: isPanning ? 'grabbing' : scale > 1 ? 'grab' : 'auto',
                userSelect: 'none' // prevent selection during drag
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={1200}
                loading='lazy'
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className='object-contain min-w-full h-full self-center select-none pointer-events-none'
                style={{
                  transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
                  transition: isPanning ? 'none' : 'transform 200ms ease',
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div className='capitalize'>{alt}</div>
    </div>
  );
}