import { cakes, Cake } from "@/data/cakes";
import {
  Image,
  Chip,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Divider,
  Button,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Catalog() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("全部");
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const rightScrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isClickScrolling = useRef(false);

  const categories = ["全部", "经典系列", "美食专家", "匠心工艺", "季节限定"];

  /* 分类分组 */
  const groupedCakes = useMemo(() => {
    const map: Record<string, Cake[]> = {};

    categories.forEach(cat => {
      if (cat === "全部") {
        map[cat] = cakes;
      } else {
        map[cat] = cakes.filter(c => c.category === cat);
      }
    });

    return map;
  }, []);

  /* 打开详情 */
  const handleOpenDetail = (cake: Cake) => {
    setSelectedCake(cake);
    onOpen();
  };

  /* 点击分类定位 */
  const handleCategoryClick = (cat: string) => {
    const container = rightScrollRef.current;
    const el = sectionRefs.current[cat];

    if (!container || !el) return;

    setActiveCategory(cat);

    isClickScrolling.current = true;

    const containerRect = container.getBoundingClientRect();
    const targetRect = el.getBoundingClientRect();

    const offset = container.scrollTop + (targetRect.top - containerRect.top) - 10;

    container.scrollTo({
      top: offset,
      behavior: "smooth",
    });

    // setTimeout(() => {
    isClickScrolling.current = false;
    // }, 400);
  };

  /* 右侧滚动联动分类 */
  useEffect(() => {
    const container = rightScrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const scrollTop = container.scrollTop;

      let current = categories[0];

      for (const cat of categories) {
        const el = sectionRefs.current[cat];

        if (el && el.offsetTop - 30 <= scrollTop) {
          current = cat;
        }
      }

      setActiveCategory(current);
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col bg-white overflow-hidden w-full max-w-full"
      style={{ height: "100dvh" }}>
      {/* Header */}
      <header className="px-3 pt-3 pb-2 bg-white shrink-0">
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => navigate("/englishTool")}
            className="flex items-center justify-center text-stone-800 shrink-0"
            style={{ width: 28, height: 28 }}>
            ←
          </button>

          <h1
            className="font-bold text-stone-900 truncate"
            style={{ fontSize: "14px" }}>
            L'Art du Gâteau 艺术烘焙
          </h1>
        </div>

        <div className="bg-stone-50 rounded-lg px-2.5 py-1.5 flex items-center gap-2">
          <div
            className="rounded-md overflow-hidden shrink-0"
            style={{ width: 28, height: 28 }}>
            <img
              src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=200"
              style={{ width: 28, height: 28, objectFit: "cover" }}
            />
          </div>

          <span
            className="text-white rounded font-bold shrink-0"
            style={{
              fontSize: "9px",
              background: "#f59e0b",
              padding: "1px 5px",
            }}>
            品牌店
          </span>

          <span className="text-stone-400 truncate" style={{ fontSize: "10px" }}>
            评分 5.0 · 配送约 45 分钟
          </span>

          <span
            className="text-stone-300 shrink-0"
            style={{ fontSize: "10px", fontStyle: "italic" }}>
            创始于 2026
          </span>
        </div>
      </header>

      {/* 主内容 */}
      <main className="flex-grow flex overflow-hidden border-t border-stone-100">
        {/* 左侧分类 */}
        <nav
          className="bg-stone-50 overflow-y-auto no-scrollbar shrink-0"
          style={{
            width: 60,
            WebkitOverflowScrolling: "touch",
          }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`w-full  px-1 text-center transition-all relative ${
                activeCategory === cat
                  ? "bg-white text-stone-900 font-bold"
                  : "text-stone-400"
              }`}
              style={{ fontSize: "11px", lineHeight: "1.4" }}>
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCat"
                  className="absolute left-0 -top-0  rounded-r-full bg-amber-600"
                  style={{ width: 3, height: 20 }}
                />
              )}

              {cat}
            </button>
          ))}
        </nav>

        {/* 商品列表 */}
        <section
          ref={rightScrollRef}
          className="flex-grow overflow-y-auto overflow-x-hidden bg-white min-w-0"
          style={{
            padding: "0 10px",
            WebkitOverflowScrolling: "touch",
          }}>
          {categories.map(cat => {
            const list = groupedCakes[cat];

            if (!list?.length) return null;

            return (
              <div
                key={cat}
                ref={el => (sectionRefs.current[cat] = el) as any}
                className="py-2"
                style={{ scrollMarginTop: 40 }}>
                <h2
                  className="font-bold text-stone-400 mb-2 sticky top-0 bg-white/90 backdrop-blur-sm z-10 py-1"
                  style={{ fontSize: "11px" }}>
                  {cat}
                </h2>

                <div className="space-y-3">
                  {list.map(cake => (
                    <motion.div
                      key={cake.id}
                      whileTap={{ scale: 0.97 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      onClick={() => handleOpenDetail(cake)}
                      className="flex gap-2">
                      <div
                        className="rounded-lg overflow-hidden shrink-0 shadow-sm bg-stone-100"
                        style={{ width: 72, height: 72 }}>
                        <Image
                          removeWrapper
                          src={cake.image}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-grow flex flex-col justify-between py-0.5 min-w-0">
                        <div>
                          <h3
                            className="font-bold text-stone-900 line-clamp-1 mb-0.5"
                            style={{ fontSize: "12px" }}>
                            {cake.name}
                          </h3>

                          <p
                            className="text-stone-400 line-clamp-2 leading-relaxed"
                            style={{ fontSize: "10px" }}>
                            {cake.description}
                          </p>
                        </div>

                        <div className="flex justify-between items-end mt-1">
                          <div className="flex items-center gap-1">
                            <span
                              className="font-bold text-amber-700"
                              style={{ fontSize: "14px" }}>
                              ¥{cake.price}
                            </span>

                            <span
                              className="text-stone-300 line-through"
                              style={{ fontSize: "10px" }}>
                              ¥{Math.floor(cake.price * 1.2)}
                            </span>
                          </div>

                          <div
                            className="text-amber-600 font-medium bg-amber-50 rounded shrink-0"
                            style={{ fontSize: "10px", padding: "2px 8px" }}>
                            详情
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}

          <div style={{ height: 24 }} />
        </section>
      </main>

      {/* 商品详情 */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
        scrollBehavior="inside"
        className="m-0 bg-white">
        <ModalContent>
          {onClose => (
            <ModalBody className="p-0">
              {selectedCake && (
                <div className="flex flex-col h-full bg-stone-50">
                  <div className="relative" style={{ height: "35vh" }}>
                    <Image
                      removeWrapper
                      src={selectedCake.image}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-white rounded-t-3xl -mt-6 px-4 pt-5 pb-10 flex-grow overflow-y-auto">
                    <div className="flex justify-between items-start mb-3">
                      <h2 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                        {selectedCake.name}
                      </h2>

                      <span
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          color: "#b45309",
                        }}>
                        ¥{selectedCake.price}
                      </span>
                    </div>

                    <Divider className="my-4" />

                    <p style={{ fontSize: "13px", lineHeight: 1.6 }}>
                      {selectedCake.longDescription}
                    </p>
                  </div>

                  <Button onPress={onClose}>返回</Button>
                </div>
              )}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
