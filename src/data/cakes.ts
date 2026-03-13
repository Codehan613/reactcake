export interface Cake {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  ingredients: string[];
}

export const cakes: Cake[] = [
  {
    id: "1",
    name: "经典丝绒之梦",
    description: "浓郁可可口味配合丝滑奶油芝士糖霜。",
    longDescription:
      "我们的招牌红丝绒蛋糕是平衡的杰作。湿润纤细的海绵蛋糕融入了特级可可和天然酪乳，并覆盖一层厚厚的马达加斯加香草奶油芝士糖霜。非常适合追求优雅的庆典。",
    price: 88,
    image: "https://images.unsplash.com/photo-1586788611468-acabc99fb543?q=80&w=1000",
    category: "经典系列",
    rating: 4.9,
    ingredients: ["酪乳", "荷兰可可", "奶油芝士", "香草豆"],
  },
  {
    id: "2",
    name: "午夜松露",
    description: "颓废的黑巧克力层，填满顺滑的甘纳许和食用金箔。",
    longDescription:
      "献给真正的巧克力鉴赏家。这款蛋糕采用 70% 比例的比利时黑巧克力甘纳许，夹在无面粉巧克力海绵层之间。点缀以 24k 食用金箔，是奢华的极致表达。",
    price: 128,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000",
    category: "美食专家",
    rating: 5.0,
    ingredients: ["70% 比利时巧克力", "重奶油", "金箔", "浓缩咖啡"],
  },
  {
    id: "3",
    name: "抹茶禅意交响曲",
    description: "特级宇治抹茶层，搭配轻盈蓬松的白巧克力慕斯。",
    longDescription:
      "体验日本茶文化的宁静。我们使用礼仪级宇治抹茶打造精致的绿茶海绵，并与轻如蝉翼的白巧克力和马斯卡彭慕斯完美平衡。",
    price: 95,
    image: "https://images.unsplash.com/photo-1616030846238-c39f7363403d?q=80&w=1000",
    category: "匠心工艺",
    rating: 4.8,
    ingredients: ["宇治抹茶", "马斯卡彭", "白巧克力", "草莓"],
  },
  {
    id: "4",
    name: "黄金芒果微风",
    description: "新鲜阿尔方索芒果片，置于热带戚风和椰奶奶油之上。",
    longDescription:
      "充满阳光气息的美味，选用“芒果之王”。轻盈的戚风层之间夹着新鲜的阿尔方索芒果酱和注入椰香的打发奶油。一次清爽的热带逃离。",
    price: 78,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1000",
    category: "季节限定",
    rating: 4.7,
    ingredients: ["阿尔方索芒果", "椰浆", "戚风海绵", "百香果"],
  },
  {
    id: "5",
    name: "薰衣草蜂蜜迷雾",
    description: "融入微弱薰衣草香的海绵蛋糕，淋上有机野花蜂蜜。",
    longDescription:
      "一种在味蕾上跳舞的飘渺风味。我们的海绵蛋糕注入了食用薰衣草花蕾，并浸泡在有机精选野花蜂蜜中。最后涂抹一层轻盈的蜂蜜奶油霜。",
    price: 110,
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000",
    category: "匠心工艺",
    rating: 4.9,
    ingredients: ["食用薰衣草", "野花蜂蜜", "有机面粉", "柠檬皮"],
  },
  {
    id: "6",
    name: "巴黎覆盆子腮红",
    description: "酸甜的覆盆子果酱，夹在精致的杏仁蛋白饼层之间。",
    longDescription:
      "灵感源自巴克路（Rue du Bac）的糕点店。精致的杏仁蛋白饼的坚果香气与新鲜覆盆子凝冻的鲜亮酸甜和白巧克力香缇奶油完美碰撞。",
    price: 105,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000",
    category: "美食专家",
    rating: 4.8,
    ingredients: ["新鲜覆盆子", "杏仁粉", "蛋白", "香缇奶油"],
  },
  {
    id: "7",
    name: "草莓奶油蛋糕",
    description: "新鲜草莓点缀在轻盈的奶油蛋糕上。",
    longDescription: "轻盈的奶油蛋糕，顶部装饰着新鲜的草莓切片和奶油霜。",
    price: 65,
    image: "https://images.unsplash.com/photo-1586788611468-acabc99fb543?q=80&w=1000",
    category: "经典系列",
    rating: 4.8,
    ingredients: ["新鲜草莓", "奶油", "海绵蛋糕"],
  },
  {
    id: "8",
    name: "巧克力蛋糕",
    description: "浓郁的可可粉和奶油芝士糖霜。",
    longDescription: "湿润的海绵蛋糕融入了特级可可，并覆盖一层厚厚的奶油芝士糖霜。",
    price: 75,
    image: "https://images.unsplash.com/photo-1586788611468-acabc99fb543?q=80&w=1000",
    category: "经典系列",
    rating: 4.8,
    ingredients: ["新鲜草莓", "奶油", "海绵蛋糕"],
  },
  {
    id: "9",
    name: "草莓奶油蛋糕",
    description: "新鲜草莓点缀在轻盈的奶油蛋糕上。",
    longDescription: "轻盈的奶油蛋糕，顶部装饰着新鲜的草莓切片和奶油霜。",
    price: 65,
    image: "https://images.unsplash.com/photo-1586788611468-acabc99fb543?q=80&w=1000",
    category: "   经典系列",
    rating: 4.8,
    ingredients: ["新鲜草莓", "奶油", "海绵蛋糕"],
  },
  {
    id: "10",
    name: "巧克力蛋糕",
    description: "浓郁的可可粉和奶油芝士糖霜。",
    longDescription: "湿润的海绵蛋糕融入了特级可可，并覆盖一层厚厚的奶油芝士糖霜。",
    price: 75,
    image: "https://images.unsplash.com/photo-1586788611468-acabc99fb543?q=80&w=1000",
    category: "经典系列",
    rating: 4.8,
    ingredients: ["新鲜草莓", "奶油", "海绵蛋糕"],
  },
  {
    id: "11",
    name: "草莓奶油蛋糕",
    description: "新鲜草莓点缀在轻盈的奶油蛋糕上。",
    longDescription: "轻盈的奶油蛋糕，顶部装饰着新鲜的草莓切片和奶油霜。",
    price: 65,
    image: "https://images.unsplash.com/photo-1586788611468-acabc99fb543?q=80&w=1000",
    category: "经典系列",
    rating: 4.8,
    ingredients: ["新鲜草莓", "奶油", "海绵蛋糕"],
  },
];
