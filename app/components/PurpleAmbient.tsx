"use client";

export function PurpleAmbient() {
  return (
    <div className="purple-ambient pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="purple-ambient__base" />
      <div className="purple-ambient__blob purple-ambient__blob--1" />
      <div className="purple-ambient__blob purple-ambient__blob--2" />
      <div className="purple-ambient__blob purple-ambient__blob--3" />
      <div className="purple-ambient__blob purple-ambient__blob--4" />
      <div className="purple-ambient__glow" />
    </div>
  );
}
