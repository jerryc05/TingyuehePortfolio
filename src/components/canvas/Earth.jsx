import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const maple = useGLTF("./moon/scene.gltf");
  // return (
  //   <primitive object={earth.scene} scale={1} position-y={11} rotation-y={0} />
  // );
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="pink" />
      <spotLight
        position={[-2, 50, 10]}
        angle={2}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1000}
      />
      <pointLight intensity={5} />
      <primitive
        object={maple.scene}
        scale={2.5}
        position-y={1}
        position-x={-2.5}
        rotation-x={0}
      />
    </mesh>
  );
};

const EarthCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
  // return (
  //   <Canvas
  //     shadows
  //     frameloop="demand"
  //     dpr={[1, 2]}
  //     gl={{ preserveDrawingBuffer: true }}
  //     camera={{
  //       fov: 45,
  //       near: 0.1,
  //       far: 200,
  //       position: [-4, 3, 6],
  //     }}
  //   >
  //     <Suspense fallback={<CanvasLoader />}>
  //       <OrbitControls
  //         autoRotate
  //         enableZoom={false}
  //         maxPolarAngle={Math.PI / 2}
  //         minPolarAngle={Math.PI / 2}
  //       />
  //       <Earth />

  //       <Preload all />
  //     </Suspense>
  //   </Canvas>
  // );
};

export default EarthCanvas;
