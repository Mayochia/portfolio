import Profile from '../components/icons/profile';

export default function Hero() {
  return (
    <div className="px-[95px] w-full h-full py-[65px]">
      <div className="flex flex-row items-center w-full h-full">
        <div className="flex-1 h-full text-left pr-[95px]">
          <h1 className="font-raleway font-extrabold text-[44px] leading-auto tracking-[0%] mb-4">May G. Ochia</h1>
          <p className="text-sm font-normal tracking-[0.01em] font-ibm-mono"> I am a Computer Engineering student driven by curiosity and logic.
            I specialize in solving complex problems through clean code and hardware integration. Currently, I am focused on mastering
            [Insert Interest, e.g., Embedded Systems or Full-Stack Development] and building projects that push the boundaries of what’s possible. </p>
        </div>
        <div className="w-auto h-full py-[20px] flex items-center justify-center">
          <Profile />
        </div>
      </div>
    </div>
  )
}