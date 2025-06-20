import textures, { frameTypes, frameColors } from "../stores/detail";
import useConfigStore from "../stores/configStore";

const Configurator = () => {
  const deskConfig = useConfigStore();

  return (
    <div className="flex flex-col h-full overflow-y-auto space-y-4 select-none">
      <div className="font-semibold text-xl pl-2">面板选择</div>
      <hr />
      <div className="flex flex-col">
        {Object.values(textures).map((item) => {
          return (
            <button
              key={item.id}
              className={`
                flex 
                items-center 
                border-2 
                space-x-2 
                w-full 
                hover:bg-zinc-300 
                transtition-all
                p-2 
                mt-4 
                cursor-pointer
                rounded-full
                ${
                  deskConfig.topMaterial === item.id
                    ? "bg-zinc-300"
                    : "bg-white"
                }`}
              onClick={() => deskConfig.setTopMaterial(item.id)}
            >
              <img
                src={item.texture.map}
                alt="img"
                className="w-14 h-14 rounded-full"
              />
              <div className="font-semibold">{item.name}</div>
            </button>
          );
        })}
      </div>
      <h2 className="font-semibold text-xl pl-2">桌腿选择</h2>
      <hr />
      <div className="flex flex-row gap-1">
        {frameTypes.map((item) => {
          return (
            <button
              key={item.id}
              className={`
                flex
                items-center 
                border-2 
                space-x-2 
                w-full 
                hover:bg-zinc-300 
                transtition-all
                p-2 
                mt-4 
                rounded-3xl 
                cursor-pointer
                ${
                  deskConfig.frameType === item.id ? "bg-zinc-300" : "bg-white"
                }`}
              onClick={() => {
                deskConfig.setFrameType(item.id);
                if (item.id == "standard") deskConfig.setElectric(false);
              }}
            >
              <div className="font-semibold grow">{item.name}</div>
            </button>
          );
        })}
      </div>
      <div className="font-semibold text-xl pl-2">桌腿颜色</div>
      <hr />
      <div className="flex flex-col">
        {frameColors.map((item) => {
          return (
            <button
              key={item.id}
              className={`
                flex 
                items-center 
                border-2 
                space-x-2 
                w-full 
                hover:bg-zinc-300 
                transtition-all
                 p-2 
                 mt-4 
                 rounded-full
                 cursor-pointer 
                 ${
                   deskConfig.frameColor === item.id
                     ? "bg-zinc-300"
                     : "bg-white"
                 }`}
              onClick={() => deskConfig.setFrameColor(item.id)}
            >
              <div
                className="h-14 w-14 rounded-full"
                style={{ backgroundColor: item.id }}
              ></div>
              <div className="font-semibold">{item.name}</div>
            </button>
          );
        })}
      </div>
      {deskConfig.frameType == "adjustable" && (
        <>
          <h2 className="font-semibold text-xl pl-2">电动升降</h2>
          <hr />
          <div className="flex flex-row">
            <button className={`
              flex 
              items-center 
              border-2 
              space-x-2 
              w-full 
              hover:bg-zinc-300 
              transtition-all
              p-2 
              mt-4 
              rounded-3xl 
              cursor-pointer 
              ${deskConfig.electric ? "bg-zinc-300" : "bg-white"}`}
              onClick={() => {
                deskConfig.setElectric(!deskConfig.electric)
                if (!deskConfig.electric) deskConfig.moveCameraToElectricView()
              }}
            >
              <div className={`relative h-6 w-12 rounded-full p-1 transition-colors duration-300 ${deskConfig.electric ? 'bg-slate-800' : 'bg-gray-300'}`}>
                <div className={`absolute h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-300 ${deskConfig.electric ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </div>
              <div className="font-semibold">
                {deskConfig.electric ? "已选" : "未选"}
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Configurator;
