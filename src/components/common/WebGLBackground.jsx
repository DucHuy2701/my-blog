import { useRef, useState } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function Particles() {
  const ref = useRef();

  // generate positions 1 lần
  const [positions] = useState(() => {
    const arr = new Float32Array(3000 * 3);

    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 10;     // x
      arr[i + 1] = (Math.random() - 0.5) * 10; // y
      arr[i + 2] = Math.random() * -20;        // z (đẩy sâu vào)
    }

    return arr;
  });

  useFrame(() => {
    const positionsArray = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < positionsArray.length; i += 3) {
      // di chuyển theo trục Z (tiến về camera)
      positionsArray[i + 2] += 0.02;

      // reset khi đi quá gần
      if (positionsArray[i + 2] > 5) {
        positionsArray[i + 2] = -20;
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="white"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function WebGLBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  );
}