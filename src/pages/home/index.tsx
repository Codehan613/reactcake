import { cakes, Cake } from "@/data/cakes";
import {
  Card,
  Image,
  CardFooter,
  Button,
  Chip,
  CardHeader,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

export default function HomeIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const categories = ["All", "Classic", "Gourmet", "Artisan", "Seasonal"];

  const filteredCakes = useMemo(() => {
    if (activeCategory === "All") return cakes;
    return cakes.filter(cake => cake.category === activeCategory);
  }, [activeCategory]);

  const handleOpenDetail = (cake: Cake) => {
    setSelectedCake(cake);
    onOpen();
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] pb-10">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden flex items-center justify-center mb-8 md:mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2000')",
            filter: "brightness(0.5)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-8xl font-serif text-white mb-2 md:mb-4 tracking-tighter">
            L'Art du Gâteau
          </motion.h1>
          <div className="h-[1px] w-32 bg-amber-400 mx-auto my-4 md:my-6" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs md:text-lg text-amber-200 font-light tracking-[0.4em] uppercase">
            Haute Couture Patisserie
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Navigation / Filtering */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex flex-wrap justify-center gap-3 md:gap-8 border-b border-stone-200 w-full pb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-sm md:text-base font-medium transition-colors ${
                  activeCategory === cat
                    ? "text-amber-700"
                    : "text-stone-400 hover:text-stone-600"
                }`}>
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredCakes.map(cake => (
              <motion.div
                key={cake.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}>
                <Card
                  isPressable
                  className="group border-none bg-white rounded-[2px] shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden h-full flex flex-col"
                  onPress={() => handleOpenDetail(cake)}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      removeWrapper
                      alt={cake.name}
                      className="z-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      src={cake.image}
                    />
                    <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                      <Button
                        fullWidth
                        className="bg-white/90 backdrop-blur-md text-stone-900 rounded-none font-serif italic text-lg shadow-xl">
                        Discover More
                      </Button>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col items-center text-center flex-grow">
                    <span className="text-amber-600 text-[10px] tracking-[0.2em] uppercase mb-2 font-bold">
                      {cake.category}
                    </span>
                    <h3 className="text-2xl font-serif text-stone-800 mb-2 group-hover:text-amber-800 transition-colors">
                      {cake.name}
                    </h3>
                    <p className="text-stone-400 font-light text-sm italic mb-6">
                      {cake.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-stone-100 w-16">
                      <span className="text-xl font-light text-stone-700">
                        ${cake.price}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <footer className="mt-32 text-center pb-12">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-stone-200" />
            <span className="text-stone-300 font-serif italic text-2xl">B de L</span>
            <div className="h-[1px] w-12 bg-stone-200" />
          </div>
          <p className="text-stone-400 text-[11px] tracking-[0.3em] uppercase">
            EST. 2026 • Paris • Tokyo • New York
          </p>
        </footer>
      </div>

      {/* Detail & Preview Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        scrollBehavior="inside"
        className="rounded-none bg-[#faf9f6]"
        backdrop="blur"
        motionProps={{
          variants: {
            enter: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
            exit: { y: 30, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
          },
        }}>
        <ModalContent>
          {onClose => (
            <>
              <ModalBody className="p-0 overflow-x-hidden">
                {selectedCake && (
                  <div className="flex flex-col lg:flex-row min-h-[600px]">
                    {/* Large Image Preview Section */}
                    <div className="lg:w-3/5 relative bg-stone-100 overflow-hidden group/modal-img">
                      <Image
                        removeWrapper
                        src={selectedCake.image}
                        alt={selectedCake.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 cursor-zoom-in"
                        title="Click to zoom"
                      />
                      <div className="absolute top-6 left-6 z-20">
                        <Chip className="bg-white/80 backdrop-blur font-medium text-stone-800 rounded-none h-8">
                          {selectedCake.category}
                        </Chip>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-2/5 p-8 md:p-12 flex flex-col">
                      <div className="mb-8">
                        <div className="flex items-center gap-1 mb-2 text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < Math.floor(selectedCake.rating)
                                  ? "text-amber-500"
                                  : "text-stone-200"
                              }>
                              ★
                            </span>
                          ))}
                          <span className="text-stone-400 text-xs ml-2">
                            ({selectedCake.rating})
                          </span>
                        </div>
                        <h2 className="text-4xl font-serif text-stone-900 mb-4">
                          {selectedCake.name}
                        </h2>
                        <span className="text-2xl font-light text-amber-700">
                          ${selectedCake.price}
                        </span>
                      </div>

                      <Divider className="my-6 bg-stone-200/50" />

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-800 mb-3">
                            Description
                          </h4>
                          <p className="text-stone-600 font-light leading-relaxed">
                            {selectedCake.longDescription}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-800 mb-3">
                            Key Ingredients
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedCake.ingredients.map(ing => (
                              <Chip
                                key={ing}
                                variant="bordered"
                                className="border-stone-200 text-stone-500 rounded-none text-[10px]"
                                size="sm">
                                {ing}
                              </Chip>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto pt-10 flex gap-4">
                        <Button className="bg-stone-900 text-white flex-grow rounded-none h-14 font-medium tracking-widest text-xs uppercase">
                          Reserve Online
                        </Button>
                        <Button
                          isIconOnly
                          variant="bordered"
                          className="border-stone-200 rounded-none h-14 w-14">
                          ♥
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
