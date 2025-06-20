import { useGLTF, useTexture } from "@react-three/drei";
import textures from '../stores/detail'
import useConfigStore from '../stores/configStore'
import * as THREE from 'three'
import { useMemo } from "react";

const useTextureWithSettings = (textureConfig) => {
    const textureProps = useTexture({
        map: textureConfig.texture.map,
    })
    textureProps.map.repeat.set(4,4)
    textureProps.map.rotation = Math.PI / 2
    textureProps.map.wrapS = THREE.RepeatWrapping
    textureProps.map.wrapT = THREE.RepeatWrapping

    return textureProps
}

const Desk = () => {
    const { nodes } = useGLTF('./models/desk.glb')
    const deskConfig = useConfigStore()
    const woodTextureProps = useTextureWithSettings(textures[deskConfig.topMaterial])
    const computedLengthRadio = useMemo(() => deskConfig.length / deskConfig.defaultLength, [deskConfig.length])

    return (
        <group dispose={null}>
            {/* 桌面 */}
            <mesh geometry={nodes.Top.geometry} scale={[computedLengthRadio, 1, 1]} position={nodes.Top.position}>
                <meshStandardMaterial {...woodTextureProps} roughness={.3} />
            </mesh>
            {/* 可调节桌腿 */}
            <mesh geometry={nodes.IStand1.geometry} scale={[1, 1, 1]} position={nodes.IStand1.position} visible={deskConfig.frameType == 'adjustable'}>
                <meshStandardMaterial metalness={.3} roughness={.1} color={deskConfig.frameColor} />
            </mesh>
            <mesh geometry={nodes.IStand2.geometry} scale={[1, 1, 1]} position={nodes.IStand2.position} visible={deskConfig.frameType == 'adjustable'}>
                <meshStandardMaterial metalness={.3} roughness={.1} color={deskConfig.frameColor} />
            </mesh>
            {/* 经典桌腿 */}
            <mesh geometry={nodes.ClassicStand1.geometry} scale={[1, 1, 1]} position={nodes.ClassicStand1.position} visible={deskConfig.frameType == 'standard'}>
                <meshStandardMaterial metalness={.3} roughness={.1} color={deskConfig.frameColor} />
            </mesh>
            <mesh geometry={nodes.ClassicStand2.geometry} scale={[1, 1, 1]} position={nodes.ClassicStand2.position} visible={deskConfig.frameType == 'standard'}>
                <meshStandardMaterial metalness={.3} roughness={.1} color={deskConfig.frameColor} />
            </mesh>
            {/* 升降面板 */}
            <mesh geometry={nodes.Panel.geometry} scale={[1, 1, 1]} position={nodes.Panel.position} visible={deskConfig.electric}>
                <meshStandardMaterial metalness={.3} roughness={.1} color={deskConfig.frameColor} />
            </mesh>
            {/* 线缆 */}
            <mesh geometry={nodes.Wires.geometry} scale={[1, 1, 1]} position={nodes.Wires.position} visible={deskConfig.electric}>
                <meshStandardMaterial metalness={.3} roughness={.1} color={deskConfig.frameColor} />
            </mesh>
            {/* 横梁 */}
            <mesh geometry={nodes.CrossBeam.geometry} scale={[1, 1, 1]} position={nodes.CrossBeam.position} visible={deskConfig.frameType == 'adjustable'}>
                <meshStandardMaterial metalness={.3} roughness={.1} color={deskConfig.frameColor} />
            </mesh>
        </group>
    )
}

export default Desk;
