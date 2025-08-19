import { FaHubspot } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";
import './Maz.css'





const Maz = () => {
  return (
    <div className="Lastf flex w-full flex-col items-center justify-center gap-16 md:gap-32 bg-black">

        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
            <FaHubspot className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hober:-translate-y-5 sm:text-[100px] md:text-[120]" />
            <TbBrandVite className="cursor-pointer text-[80px] text-yellow-300 transition-all duration-300 hober:-translate-y-5 sm:text-[100px] md:text-[120]" />
            <FaRobot className="cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hober:-translate-y-5 sm:text-[100px] md:text-[120]" />
            <FaGithubAlt className="cursor-pointer text-[80px] text-pink-500 transition-all duration-300 hober:-translate-y-5 sm:text-[100px] md:text-[120]" />
            <SiIndeed className="cursor-pointer text-[80px] text-white transition-all duration-300 hober:-translate-y-5 sm:text-[100px] md:text-[120]" />
        </div>
    </div>
  )
}

export default Maz