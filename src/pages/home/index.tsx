import { Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center px-4"
      style={{ minHeight: '100dvh' }}
    >
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
        className="relative z-10 mb-4 sm:mb-8 md:mb-12"
      >
        <div className="relative mx-auto" style={{ width: 140, height: 140 }}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600"
              alt="Featured Cake"
              style={{ width: 140, height: 140 }}
              className="object-cover rounded-full border-4 border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.2)]"
            />
          </motion.div>
          {/* Decorative Rings */}
          <div className="absolute inset-[-6px] border border-amber-500/20 rounded-full animate-pulse" />
          <div className="absolute inset-[-14px] border border-amber-500/10 rounded-full animate-ping [animation-duration:3s]" />
        </div>
      </motion.div>

      {/* Hero Text */}
      <div className="relative z-10 text-center px-4 w-full" style={{ maxWidth: 480 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-amber-500 font-medium tracking-widest uppercase text-[10px] mb-2 block">
            至臻艺术 · 甜点殿堂
          </span>
          <h1 className="font-serif text-white tracking-tight leading-tight mb-3"
            style={{ fontSize: 'clamp(1.6rem, 8vw, 3.5rem)' }}
          >
            每一刻{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">
              都值得珍藏
            </span>
          </h1>
          <p className="text-stone-400 mb-6 font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.72rem, 3.2vw, 0.95rem)' }}
          >
            融合极致美学与顶级食材，为您定制专属的味觉盛宴。
            在 L'Art du Gâteau，我们不只是制作蛋糕，我们是在雕琢回忆。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col gap-3 items-center w-full"
        >
          <Button
            size="md"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full shadow-[0_0_24px_rgba(245,158,11,0.3)] transition-all active:scale-95 w-full"
            style={{ height: 48, fontSize: '0.9rem', maxWidth: 320 }}
            onPress={() => navigate("/englishTool/catalog")}
          >
            立即开启味蕾之旅
          </Button>
          <Button
            variant="bordered"
            size="md"
            className="border-white/20 text-white hover:bg-white/10 rounded-full backdrop-blur-md transition-all w-full"
            style={{ height: 44, fontSize: '0.85rem', maxWidth: 320 }}
          >
            了解我们的传承
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
