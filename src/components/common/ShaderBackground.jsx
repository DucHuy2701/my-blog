import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function ShaderPlane() {
  const materialRef = useRef();

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          uTime: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;

          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={`
            uniform float uTime;
            varying vec2 vUv;

            void main() {
            vec2 uv = vUv;

            // center về giữa
            uv -= 0.5;

            // khoảng cách từ tâm
            float dist = length(uv);

            // góc xoay
            float angle = atan(uv.y, uv.x);

            // swirl theo thời gian
            float swirl = angle + dist * 4.0 - uTime * 0.8;

            // tạo pattern
            float wave = sin(swirl * 3.0);

            // glow theo tâm
            float glow = 0.3 / (dist + 0.2);

            // màu cosmic
            vec3 color = vec3(
                0.4 + 0.4 * sin(wave + uTime),
                0.2 + 0.3 * cos(wave),
                0.8
            );

            color += glow;

            gl_FragColor = vec4(color, 1.0);
            }
        `}
      />
    </mesh>
  );
}

export default function ShaderBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
