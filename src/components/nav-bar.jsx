import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function NavBar() {
  return (
    <div className="fixed flex justify-center-safe items-center top-0 left-1/2 -translate-x-1/2 px-[95px] w-[1110px] h-[70px] z-50 bg-[#1B1B1B] rounded-b-lg">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-8 text-white text-[14px] font-normal tracking-[0.01em] font-ibm-mono">
          <button>Home</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
        <div className="flex flex-row items-center gap-8 text-white">
          <a href="https://github.com/Mayochia" target="_blank" rel="noopener noreferrer" >
            <SiGithub size={18}/>
          </a>
          <a href="https://www.linkedin.com/in/may-ochia-086267270/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin size={18}/>
          </a>
        </div>
      </div>
      
    </div>
  )
}