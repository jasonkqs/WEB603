
import React from 'react';
import { Canvas } from '@react-vertex/core';
import { useViewportSize } from '@react-vertex/dom-hooks';
import Scene from './Scene';

function VertexOfSphere() {
  const { width, height } = useViewportSize();

  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
}

export default VertexOfSphere;
