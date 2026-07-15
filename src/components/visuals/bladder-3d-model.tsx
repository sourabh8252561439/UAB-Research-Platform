'use client'

import * as React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Environment, ContactShadows, Html } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Interactive 3D bladder model built with React Three Fiber.
 * Users can rotate, zoom, and inspect the model.
 * Shows the bladder body, ureters (entering from top),
 * urethra (exiting from bottom), and highlights the detrusor muscle.
 */

interface BladderPartProps {
  color: string
  opacity?: number
}

function BladderBody({ highlighted }: { highlighted: boolean }) {
  const meshRef = React.useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current && highlighted) {
      // Gentle pulsing scale to simulate contraction
      const t = state.clock.getElapsedTime()
      const scale = 1 + Math.sin(t * 1.5) * 0.04
      meshRef.current.scale.set(scale, scale * 0.95, scale)
    }
  })

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshPhysicalMaterial
        color={highlighted ? '#dc2626' : '#3b82f6'}
        roughness={0.3}
        metalness={0.1}
        clearcoat={0.5}
        clearcoatRoughness={0.4}
        transmission={0.2}
        thickness={0.5}
        opacity={0.85}
        transparent
        emissive={highlighted ? '#7f1d1d' : '#1e3a8a'}
        emissiveIntensity={0.15}
      />
    </mesh>
  )
}

function Ureter({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <cylinderGeometry args={[0.12, 0.15, 1.4, 32]} />
      <meshPhysicalMaterial
        color="#8b5cf6"
        roughness={0.4}
        metalness={0.1}
        opacity={0.8}
        transparent
      />
    </mesh>
  )
}

function Urethra() {
  return (
    <mesh position={[0, -1.6, 0]} castShadow>
      <cylinderGeometry args={[0.18, 0.22, 1, 32]} />
      <meshPhysicalMaterial
        color="#06b6d4"
        roughness={0.3}
        metalness={0.2}
        opacity={0.9}
        transparent
      />
    </mesh>
  )
}

function Sphincter() {
  const ref = React.useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime()
      const scale = 1 + Math.sin(t * 2) * 0.08
      ref.current.scale.set(scale, 1, scale)
    }
  })
  return (
    <mesh ref={ref} position={[0, -2.05, 0]}>
      <torusGeometry args={[0.22, 0.07, 16, 32]} />
      <meshPhysicalMaterial color="#f59e0b" roughness={0.4} metalness={0.2} />
    </mesh>
  )
}

function Kidney({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} castShadow>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshPhysicalMaterial
        color="#a855f7"
        roughness={0.5}
        metalness={0.1}
        opacity={0.9}
        transparent
        emissive="#7c3aed"
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}

function Label({ position, text, color }: { position: [number, number, number]; text: string; color: string }) {
  return (
    <Html position={position} center distanceFactor={8}>
      <div
        style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          padding: '4px 10px',
          borderRadius: '8px',
          fontSize: '11px',
          fontWeight: 600,
          color: color,
          border: `1px solid ${color}30`,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}
      >
        {text}
      </div>
    </Html>
  )
}

function Scene({ showLabels, highlightDetrusor }: { showLabels: boolean; highlightDetrusor: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#60a5fa" />
      <pointLight position={[0, -3, 2]} intensity={0.5} color="#f59e0b" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <group>
          {/* Kidneys */}
          <Kidney position={[-1.6, 1.5, 0]} />
          <Kidney position={[1.6, 1.5, 0]} />
          {showLabels && <Label position={[-1.6, 2.1, 0]} text="Left Kidney" color="#7c3aed" />}
          {showLabels && <Label position={[1.6, 2.1, 0]} text="Right Kidney" color="#7c3aed" />}

          {/* Ureters */}
          <Ureter position={[-1.2, 0.6, 0]} rotation={[0, 0, 0.5]} />
          <Ureter position={[1.2, 0.6, 0]} rotation={[0, 0, -0.5]} />

          {/* Bladder */}
          <BladderBody highlighted={highlightDetrusor} />
          {showLabels && (
            <Label
              position={[0, 0, 1.4]}
              text={highlightDetrusor ? 'Detrusor Muscle (Affected)' : 'Urinary Bladder'}
              color={highlightDetrusor ? '#dc2626' : '#1e40af'}
            />
          )}

          {/* Urethra */}
          <Urethra />
          {showLabels && <Label position={[0.7, -1.6, 0]} text="Urethra" color="#0891b2" />}

          {/* Sphincter */}
          <Sphincter />
          {showLabels && <Label position={[0.7, -2.05, 0]} text="Sphincter" color="#d97706" />}
        </group>
      </Float>

      <ContactShadows
        position={[0, -3, 0]}
        opacity={0.3}
        scale={10}
        blur={2}
        far={4}
        resolution={512}
        color="#1e3a8a"
      />

      <Environment preset="studio" />

      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={10}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05
        }
      />
    </>
  )
}

export function Bladder3DModel({ className }: { className?: string }) {
  const [showLabels, setShowLabels] = React.useState(true)
  const [highlightDetrusor, setHighlightDetrusor] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div>
          <h3 className="font-bold text-foreground text-base">Interactive 3D Bladder Model</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Drag to rotate • Scroll to zoom • Auto-rotating</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowLabels((v) => !v)}
            className={`text-xs font-medium rounded-lg px-3 py-1.5 border transition-colors ${
              showLabels
                ? 'bg-[var(--medical)]/10 text-[var(--medical)] border-[var(--medical)]/30'
                : 'bg-background text-muted-foreground border-border'
            }`}
            aria-pressed={showLabels}
          >
            Labels
          </button>
          <button
            onClick={() => setHighlightDetrusor((v) => !v)}
            className={`text-xs font-medium rounded-lg px-3 py-1.5 border transition-colors ${
              highlightDetrusor
                ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30'
                : 'bg-background text-muted-foreground border-border'
            }`}
            aria-pressed={highlightDetrusor}
          >
            Highlight Detrusor
          </button>
        </div>
      </div>

      <div className="aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-[oklch(0.97_0.02_240)] to-[oklch(0.95_0.02_230)] dark:from-[oklch(0.2_0.02_257)] dark:to-[oklch(0.18_0.02_257)] border border-border overflow-hidden relative">
        {mounted ? (
          <Canvas
            shadows
            camera={{ position: [0, 0, 6], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <Scene showLabels={showLabels} highlightDetrusor={highlightDetrusor} />
          </Canvas>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground text-sm">Loading 3D model…</div>
          </div>
        )}
      </div>

      <p className="mt-3 text-[10px] text-muted-foreground italic leading-relaxed text-center">
        Interactive educational model. The detrusor muscle (highlighted in red) is the bladder wall layer that fails to contract properly in Underactive Bladder.
      </p>
    </div>
  )
}
