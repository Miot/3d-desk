import { Stage, CameraControls  } from '@react-three/drei'
import Desk from './Desk'
import { useEffect, useRef } from 'react'
import useConfigStore from '../stores/configStore'

const Experience = () => {
    const cameraControlsRef = useRef(null)
    const deskConfig = useConfigStore()

    useEffect(() => {
        if (cameraControlsRef.current) {
            deskConfig.setCameraControlsRef(cameraControlsRef.current)

            setTimeout(() => {
                if (cameraControlsRef.current) {
                    cameraControlsRef.current.setLookAt(
                        8, 5, 8,      // 远离物体的相机位置
                        0, 0.5, 0,    // 目标位置（桌子中心）
                        true         // 不使用动画，直接设置
                    )
                }
            }, 100);
        }

        return () => {
            deskConfig.setCameraControlsRef(null)
        }
    }, [cameraControlsRef])

    return (
        <>
            <color attach="background" args={['#e5e5e5']} />
            <Stage shadows={false} environment={"apartment"} intensity={1}
                preset="portrait" adjustCamera={false} control
            >
                <Desk></Desk>
            </Stage>

            <CameraControls
                //实现点击移动摄像机
                ref={cameraControlsRef}
                minDistance={7}
                >
            </CameraControls>
        </>
    )
}

export default Experience;
