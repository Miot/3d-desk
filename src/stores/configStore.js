import { create } from "zustand"

const DEFAULT_LENGTH = 120
const DEFAULT_WIDTH = 60

const useConfigStore = create(
    (set, get) => ({
        defaultLength: DEFAULT_LENGTH,
        defaultWidth: DEFAULT_WIDTH,
        length: DEFAULT_LENGTH,
        width: DEFAULT_WIDTH,
        topMaterial: 'oak',
        frameType: 'standard',
        frameColor: '#303030',
        electric: false,
        setLength: (length) => set({length}),
        setWidth: (width) => set({width}),
        setTopMaterial: (topMaterial) => set({topMaterial}),
        setFrameType: (frameType) => set({frameType}),
        setFrameColor: (frameColor) => set({frameColor}),
        setElectric: (electric) => set({electric}),
        setCameraControlsRef: (controls) => set({ cameraControls: controls }),

        // 移动相机到电动升降视角
        moveCameraToElectricView: () => {
            const { cameraControls } = get();
            if (cameraControls) {
            
            // 保存当前相机状态不需要手动处理，CameraControls会内部处理
            // 使用CameraControls的setLookAt方法
            // 参数: (eye.x, eye.y, eye.z, target.x, target.y, target.z, enableTransition)
            cameraControls.setLookAt(
                5, 1.5, 2.5,  // 相机位置 
                0, 0, 0,    // 目标位置
                true,         // 启用过渡动画
                0.5           // 过渡时间（秒）
            );
            }
        },
    })
)

export default useConfigStore