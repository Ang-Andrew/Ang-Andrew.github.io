import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Float, Stars } from '@react-three/drei';
import { Layers, Cpu, Wifi } from 'lucide-react';

const PROJECTS = [
  {
    id: 'switch',
    name: 'Ultra-Low Latency Switch',
    description: 'FPGA-based L1 switch with 94ns forwarding latency.',
    color: '#004d00', // Classic Green
    accent: '#ffd700', // Gold
    icon: Cpu
  },
  {
    id: 'metamux',
    name: 'MetaMux Aggregator',
    description: '39ns average latency ethernet aggregation for HFT.',
    color: '#00008b', // Deep Blue
    accent: '#00ffff', // Cyan
    icon: Layers
  },
  {
    id: 'iot',
    name: 'IoT Sensor Node',
    description: 'Low-power mesh networking device for agricultural monitoring.',
    color: '#8b0000', // Dark Red
    accent: '#ff4500', // Orange
    icon: Wifi
  }
];

// Placeholder PCB Model (Procedural)
const PCBModel = ({ color, accent, ...props }) => {
  const mesh = useRef();

  return (
    <group {...props} dispose={null}>
      {/* Main Board */}
      <mesh ref={mesh} scale={[4, 0.1, 2.5]}>
        <boxGeometry />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Gold Connectors (Edge) */}
      <mesh position={[1.9, 0, 0]} scale={[0.2, 0.12, 2]}>
        <boxGeometry />
        <meshStandardMaterial color={accent} metalness={1} roughness={0.2} />
      </mesh>

      {/* Large Chip (CPU/FPGA) */}
      <mesh position={[0, 0.1, 0]} scale={[1, 0.1, 1]}>
        <boxGeometry />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} />
      </mesh>
      {/* Chip Text/Logo Placeholder */}
      <mesh position={[0, 0.16, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial color="#333" />
      </mesh>

      {/* Smaller Chips/Components */}
      <mesh position={[-1, 0.1, -0.5]} scale={[0.5, 0.1, 0.5]}>
        <boxGeometry />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[-1, 0.1, 0.5]} scale={[0.5, 0.1, 0.5]}>
        <boxGeometry />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Capacitors (Cylinders) */}
      <mesh position={[1, 0.1, -0.8]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
        <meshStandardMaterial color="#888" metalness={0.9} />
      </mesh>
      <mesh position={[1.3, 0.1, -0.8]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
        <meshStandardMaterial color="#888" metalness={0.9} />
      </mesh>

      {/* Traces (Simulated with thin boxes) */}
      <mesh position={[0.5, 0.06, 0]} scale={[0.8, 0.01, 0.05]}>
        <boxGeometry />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

const PCBViewer = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  return (
    <div className="flex flex-col lg:flex-row gap-6">

      {/* 3D Viewer Area */}
      <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] bg-black/20 rounded-3xl overflow-hidden border border-white/10 relative group cursor-move">

        {/* Overlay Text */}
        <div className="absolute top-6 left-6 z-10 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            INTERACTIVE 3D
          </div>
          <h3 className="text-2xl font-bold text-white">{activeProject.name}</h3>
          <p className="text-neutral-400 text-sm max-w-xs mt-1">{activeProject.description}</p>
        </div>

        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 10], fov: 45 }}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          <Stage environment="city" intensity={0.5} contactShadow={false}>
            <Float
              speed={2}
              rotationIntensity={0.5}
              floatIntensity={0.5}
              floatingRange={[-0.1, 0.1]}
            >
              <PCBModel color={activeProject.color} accent={activeProject.accent} />
            </Float>
          </Stage>

          {/* Custom Lighting */}
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color={activeProject.accent} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="white" />

          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            enableZoom={true}
            minDistance={3}
            maxDistance={20}
          />
        </Canvas>
      </div>

      {/* Project Selector Sidebar */}
      <div className="w-full lg:w-1/3 flex flex-col gap-3">
        {PROJECTS.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className={`p-4 rounded-2xl border text-left transition-all duration-300 group ${activeProject.id === project.id
                ? 'bg-white/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                : 'bg-neutral-900/40 border-white/5 hover:bg-white/5 hover:border-white/10'
              }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg ${activeProject.id === project.id ? 'bg-blue-500 text-white' : 'bg-white/5 text-neutral-400 group-hover:text-white'
                }`}>
                <project.icon className="w-5 h-5" />
              </div>
              <span className={`font-bold ${activeProject.id === project.id ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                }`}>
                {project.name}
              </span>
            </div>
            <p className="text-xs text-neutral-500 pl-[52px]">
              {project.description}
            </p>
          </button>
        ))}

        <div className="mt-auto p-4 rounded-2xl bg-blue-900/10 border border-blue-500/20 text-xs text-blue-300">
          <p>
            <strong>Note:</strong> These are procedural visualizations.
            Real Altium design files can be loaded here.
          </p>
        </div>
      </div>

    </div>
  );
};

export default PCBViewer;
