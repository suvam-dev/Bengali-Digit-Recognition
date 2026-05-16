import { RoadmapData } from "../types/roadmap";

export const roadmapData: RoadmapData = {
  modules: [
    {
      id: "react-basics",
      title: "React Fundamentals",
      icon: "Atom",
      description: "Transition from Vanilla JS to React components, state, and props.",
      lessons: [
        {
          id: "components",
          title: "Thinking in Components",
          description: "Learn how to build reusable UI pieces.",
          content: "<p>React is all about components. Instead of writing one huge HTML file, you break your UI down into small, reusable JavaScript functions that return HTML (JSX).</p>",
          initialCode: {
            "/App.js": `export default function App() {
  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#0f172a', height: '100vh' }}>
      <h1>Welcome to React</h1>
      <SpaceShip name="Apollo" />
      <SpaceShip name="Voyager" />
    </div>
  );
}

function SpaceShip({ name }) {
  return (
    <div style={{ border: '1px solid #3b82f6', padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>🚀 {name}</h3>
      <p>Ready for launch.</p>
    </div>
  );
}`
          }
        },
        {
          id: "state",
          title: "State and Interactivity",
          description: "Make your components dynamic with useState.",
          content: "<p>Use <code>useState</code> to keep track of data that changes over time, like user inputs or open/closed menus.</p>",
          initialCode: {
            "/App.js": `import { useState } from 'react';

export default function App() {
  const [launched, setLaunched] = useState(false);

  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#0f172a', height: '100vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        {launched ? '🚀 We have liftoff!' : '🌍 On the launchpad'}
      </h1>
      <button
        onClick={() => setLaunched(!launched)}
        style={{ padding: '10px 20px', fontSize: '1.2rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        {launched ? 'Abort' : 'Launch'}
      </button>
    </div>
  );
}`
          }
        }
      ]
    },
    {
      id: "nextjs-core",
      title: "Next.js Core",
      icon: "Server",
      description: "Master modern web development with Next.js App Router.",
      lessons: [
        {
          id: "routing",
          title: "File-based Routing",
          description: "Understand how folders become routes.",
          content: "<p>In Next.js, creating a new page is as simple as creating a folder and an <code>page.js</code> file inside it.</p><p><i>Note: Sandpack here runs basic React, but in your actual Next.js app, you'll use the App Router structure!</i></p>",
          initialCode: {
            "/App.js": `// Simulating Next.js Routing concept
export default function Page() {
  return (
    <div style={{ padding: '40px', color: 'white', backgroundColor: '#0f172a', height: '100vh' }}>
      <h1>Home Page (app/page.tsx)</h1>
      <p>Next.js handles routing automatically based on your file structure.</p>
      <div style={{ marginTop: '20px', padding: '20px', border: '1px dashed #3b82f6' }}>
        <h2>app/about/page.tsx</h2>
        <p>Would be accessible at /about</p>
      </div>
    </div>
  );
}`
          }
        }
      ]
    },
    {
      id: "gsap-animations",
      title: "GSAP Mastery",
      icon: "Sparkles",
      description: "Create buttery smooth animations that impress.",
      lessons: [
        {
          id: "gsap-basics",
          title: "Basic Tweens",
          description: "Animate elements from A to B.",
          content: "<p>GSAP (GreenSock) is the industry standard for web animation. Use <code>gsap.to()</code> to animate properties.</p>",
          dependencies: {
            "gsap": "^3.12.2"
          },
          initialCode: {
            "/App.js": `import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function App() {
  const boxRef = useRef(null);

  useEffect(() => {
    // Animate the box
    gsap.to(boxRef.current, {
      x: 200,
      rotation: 360,
      duration: 2,
      ease: 'bounce.out',
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <div style={{ padding: '40px', backgroundColor: '#0f172a', height: '100vh', overflow: 'hidden' }}>
      <h2 style={{ color: 'white', marginBottom: '40px' }}>GSAP Animation</h2>
      <div
        ref={boxRef}
        style={{ width: '100px', height: '100px', backgroundColor: '#8b5cf6', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}
      >
        GSAP
      </div>
    </div>
  );
}`
          }
        },
        {
          id: "scroll-trigger",
          title: "ScrollTrigger",
          description: "Animate elements as you scroll down the page.",
          content: "<p>ScrollTrigger is the secret behind NSSC's amazing scroll effects. It ties animations to the scrollbar.</p>",
          dependencies: {
            "gsap": "^3.12.2"
          },
          initialCode: {
            "/App.js": `import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const boxes = gsap.utils.toArray('.anim-box');

    boxes.forEach((box) => {
      gsap.fromTo(box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#0f172a', color: 'white', textAlign: 'center' }}>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Scroll Down ↓</h1>
      </div>

      <div style={{ padding: '100px 20px', minHeight: '100vh' }}>
        {[1, 2, 3].map(i => (
          <div key={i} className="anim-box" style={{ margin: '100px auto', width: '300px', height: '200px', backgroundColor: '#1e1b4b', border: '2px solid #3b82f6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
            Section {i}
          </div>
        ))}
      </div>
    </div>
  );
}
            `,
            "/styles.css": `
              body { margin: 0; padding: 0; }
            `
          }
        }
      ]
    },
    {
      id: "3d-web",
      title: "3D Web with Three.js",
      icon: "Box",
      description: "Bring the third dimension to the web.",
      lessons: [
        {
          id: "r3f-basics",
          title: "React Three Fiber Basics",
          description: "Declarative Three.js in React.",
          content: "<p>Instead of complex imperative Three.js code, use React components to build 3D scenes.</p>",
          dependencies: {
            "three": "^0.158.0",
            "@react-three/fiber": "^8.15.11",
            "@react-three/drei": "^9.88.16"
          },
          initialCode: {
            "/App.js": `import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';

function RotatingBox() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#030014' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <RotatingBox />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>

      <div style={{ position: 'absolute', top: 20, left: 20, color: 'white', fontFamily: 'sans-serif' }}>
        <h2>Welcome to 3D Space</h2>
        <p>Drag to rotate</p>
      </div>
    </div>
  );
}`
          }
        }
      ]
    }
  ]
};
