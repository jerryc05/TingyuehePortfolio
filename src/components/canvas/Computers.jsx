import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const 亭子 = () => {
  const pic = useGLTF(
    "./亭子/scene.gltf"
  );

  return (
    <primitive object={pic.scene} scale={0.38} position-y={-1.5} position-x={2.5}/>
  );
};

const tingZiCanvas = ({icon}) => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40,
        near: 0.05,
        far: 250,
        position: [-3,8,6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // 可以让亭子转动
          autoRotate
          enableZoom={false}
          //view: front the around, but also can 把亭子转起来，变成从底向上望的视角 -> if changed to Math.PI
          maxPolarAngle={Math.PI / 2}
          //view: seeing from the bottom -> if change to Math.PI
          minPolarAngle={Math.PI / 2}
        />
        {/* <Computers isMobile={isMobile} /> */}
        <亭子 />
       <Preload all />
      </Suspense>
    </Canvas>
  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   // Add a listener for changes to the screen size
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");

  //   // Set the initial value of the `isMobile` state variable
  //   setIsMobile(mediaQuery.matches);

  //   // Define a callback function to handle changes to the media query
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };

  //   // Add the callback function as a listener for changes to the media query
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   // Remove the listener when the component is unmounted
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);
  );
};

export default tingZiCanvas;
