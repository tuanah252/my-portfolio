/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/star-icon.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Star.geometry} material={materials['Material.003']} rotation={[Math.PI / 2, 0, 0]} scale={3.51} />
    </group>
  )
}

useGLTF.preload('/star-icon.glb')