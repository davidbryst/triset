const LinearProgress = ({technoImg, technoName, percent}:{technoImg: string, technoName: string, percent: number}) => {
  return (
    <div className="flex h-10 text-white gap-2 items-center justify-end">
      <div className="flex-1">{technoName}</div>
      <div className=""></div>
      <div style={{width: "13rem"}} className="bg-slate-900 h-2 rounded-md flex ">
        <div style={{width: percent*13/100+"rem"}} className="bg-slate-400 rounded-md"></div>
      </div>
      <div className="font-semibold w-10">{percent}%</div>
    </div>
  );
};

export default LinearProgress;
