const CirculareProgress = ({percent, technoName, technoImg}:{percent:number, technoName: string, technoImg: string}) => {

  return (
    <div
      className=" w-28 h-28 relative flex flex-col items-center justify-center overflow-hidden rounded-full"
    >
            <div className="hidden">{technoImg}</div>

      <svg className="w-20 h-20">
        <circle
          className="text-gray-300"
          stroke-width="5"
          stroke="currentColor"
          fill="transparent"
          r="35"
          cx="40"
          cy="40"
        />
        <circle
          className="text-white"
          stroke-width="5"
          strokeDasharray={187}
          strokeDashoffset={187-percent/100*187}
          // :stroke-dasharray="circumference"
          // :stroke-dashoffset="circumference - percent / 100 * circumference"
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          r="35"
          cx="40"
          cy="40"
        />
      </svg>
      <span className="absolute mb-5 text-sm font-semibold text-white">{percent}%</span>
      <span className="text-sm font-semibold text-white"><span className="font-normal">{technoName}</span> </span>
      {/* <img className="absolute text-sm font-semibold text-white" src={technoImg} alt={technoName}/>
      <span className="text-sm font-semibold text-white"><span className="font-normal">{technoName}</span> {percent} %</span> */}
    </div>
  );
};

export default CirculareProgress;
