import { Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center px-4">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000')",
            filter: "blur(4px) brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>

      {/* Floating Cake Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 mb-8 md:mb-12"
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
             <Image
                src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600"
                alt="Featured Cake"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.2)]"
              />
          </motion.div>
          {/* Decorative Rings - contained within parent */}
          <div className="absolute inset-[-8px] border border-amber-500/20 rounded-full animate-pulse" />
          <div className="absolute inset-[-16px] border border-amber-500/10 rounded-full animate-ping [animation-duration:3s]" />
        </div>
      </motion.div>

      {/* Hero Text */}
      <div className="relative z-10 text-center px-2 sm:px-6 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-amber-500 font-medium tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 block">
            至臻艺术 · 甜点殿堂
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-serif text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            每一刻 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">
              都值得珍藏
            </span>
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm md:text-lg mb-8 sm:mb-12 max-w-xl mx-auto font-light leading-relaxed">
            融合极致美学与顶级食材，为您定制专属的味觉盛宴。
            在 L'Art du Gâteau，我们不只是制作蛋糕，我们是在雕琢回忆。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center w-full"
        >
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold h-12 sm:h-14 md:h-16 px-8 sm:px-10 md:px-12 rounded-full text-sm sm:text-base md:text-lg shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto max-w-[320px]"
            onPress={() => navigate("/englishTool/catalog")}
          >
            立即开启味蕾之旅
          </Button>
          <Button
            variant="bordered"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 h-12 sm:h-14 md:h-16 px-8 sm:px-10 md:px-12 rounded-full text-sm sm:text-base md:text-lg backdrop-blur-md transition-all w-full sm:w-auto max-w-[320px]"
          >
            了解我们的传承
          </Button>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-amber-500/50 to-transparent" />
      </motion.div>
    </div>
  );
}
