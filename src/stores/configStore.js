import { create } from "zustand"

const DEFAULT_LENGTH = 120
const DEFAULT_WIDTH = 60

const useConfigStore = create(
    (set, get) => ({
        default_length: DEFAULT_LENGTH,
        default_width: DEFAULT_WIDTH,
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
    })
)

export default useConfigStore