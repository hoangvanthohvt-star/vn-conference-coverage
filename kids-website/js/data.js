// 生命科学单元内容 - 面向 5-6 岁小朋友
const SUBJECT = {
  title: "生命科学",
  subtitle: "认识身边奇妙的生命",
  mascot: "🦉"
};

const UNITS = [
  {
    id: "plants",
    title: "植物",
    icon: "🌱",
    color: "#4CAF7D",
    slides: [
      { text: "植物是活的生命。", emoji: "🌱" },
      { text: "植物生长需要阳光、水和空气。", emoji: "☀️💧🌬️" },
      { text: "植物有根、茎、叶子和花。", emoji: "🌿🌸" },
      { text: "根在泥土里,帮助植物喝水。", emoji: "🪴" },
      { text: "叶子在阳光下,帮植物做食物。", emoji: "🍃" },
      { text: "小小的种子,会长成新的植物。", emoji: "🌰➡️🌱" }
    ],
    quiz: [
      {
        q: "植物生长需要什么?",
        options: [
          { text: "阳光和水", emoji: "☀️💧" },
          { text: "玩具", emoji: "🧸" },
          { text: "电视", emoji: "📺" }
        ],
        answer: 0
      },
      {
        q: "植物的哪个部分长在泥土里?",
        options: [
          { text: "花", emoji: "🌸" },
          { text: "根", emoji: "🌿" },
          { text: "叶子", emoji: "🍃" }
        ],
        answer: 1
      },
      {
        q: "小小的种子长大后会变成什么?",
        options: [
          { text: "石头", emoji: "🪨" },
          { text: "云朵", emoji: "☁️" },
          { text: "新的植物", emoji: "🌱" }
        ],
        answer: 2
      },
      {
        q: "叶子在阳光下帮助植物做什么?",
        options: [
          { text: "做食物", emoji: "🍽️" },
          { text: "睡觉", emoji: "😴" },
          { text: "唱歌", emoji: "🎵" }
        ],
        answer: 0
      }
    ]
  },
  {
    id: "animals",
    title: "动物",
    icon: "🐾",
    color: "#F2994A",
    slides: [
      { text: "动物也是活的生命。", emoji: "🐾" },
      { text: "有些动物住在陆地上,有些住在水里。", emoji: "🐘🐠" },
      { text: "小动物的宝宝有可爱的名字,比如小狗宝宝。", emoji: "🐶" },
      { text: "动物用叫声和动作互相沟通。", emoji: "🐕🐓" },
      { text: "动物要吃饭、喝水、休息才能长大。", emoji: "🍖💧😴" }
    ],
    quiz: [
      {
        q: "小鱼住在哪里?",
        options: [
          { text: "水里", emoji: "🐠" },
          { text: "树上", emoji: "🌳" },
          { text: "天上", emoji: "☁️" }
        ],
        answer: 0
      },
      {
        q: "哪一个是小狗的宝宝?",
        options: [
          { text: "小狗宝宝", emoji: "🐶" },
          { text: "小鸭子", emoji: "🦆" },
          { text: "小鱼", emoji: "🐟" }
        ],
        answer: 0
      },
      {
        q: "动物长大需要做什么?",
        options: [
          { text: "只需要玩", emoji: "🎮" },
          { text: "吃饭喝水休息", emoji: "🍽️💧😴" },
          { text: "什么都不用做", emoji: "🚫" }
        ],
        answer: 1
      },
      {
        q: "大象通常住在哪里?",
        options: [
          { text: "陆地上", emoji: "🐘" },
          { text: "海里", emoji: "🌊" },
          { text: "天空中", emoji: "🕊️" }
        ],
        answer: 0
      }
    ]
  },
  {
    id: "body",
    title: "我的身体",
    icon: "🧑",
    color: "#5B8DEF",
    slides: [
      { text: "我们的身体很神奇。", emoji: "🧑" },
      { text: "眼睛帮我们看东西。", emoji: "👀" },
      { text: "耳朵帮我们听声音。", emoji: "👂" },
      { text: "鼻子帮我们闻味道。", emoji: "👃" },
      { text: "手帮我们摸东西,脚帮我们走路。", emoji: "✋🦶" },
      { text: "多吃蔬菜、多运动,身体会更棒。", emoji: "🥦🏃" }
    ],
    quiz: [
      {
        q: "我们用什么看东西?",
        options: [
          { text: "眼睛", emoji: "👀" },
          { text: "耳朵", emoji: "👂" },
          { text: "鼻子", emoji: "👃" }
        ],
        answer: 0
      },
      {
        q: "我们用什么听声音?",
        options: [
          { text: "手", emoji: "✋" },
          { text: "耳朵", emoji: "👂" },
          { text: "脚", emoji: "🦶" }
        ],
        answer: 1
      },
      {
        q: "我们用什么闻味道?",
        options: [
          { text: "鼻子", emoji: "👃" },
          { text: "眼睛", emoji: "👀" },
          { text: "手", emoji: "✋" }
        ],
        answer: 0
      },
      {
        q: "怎样照顾身体最好?",
        options: [
          { text: "只吃糖果", emoji: "🍬" },
          { text: "一直看电视", emoji: "📺" },
          { text: "吃蔬菜多运动", emoji: "🥦🏃" }
        ],
        answer: 2
      }
    ]
  },
  {
    id: "lifecycle",
    title: "生命周期",
    icon: "🦋",
    color: "#B15BE0",
    slides: [
      { text: "蝴蝶的一生会慢慢变化。", emoji: "🦋" },
      { text: "先是一颗小小的卵。", emoji: "🥚" },
      { text: "卵变成了毛毛虫。", emoji: "🐛" },
      { text: "毛毛虫变成了蛹,安静地长大。", emoji: "🍃" },
      { text: "最后,蛹变成了美丽的蝴蝶。", emoji: "🦋" },
      { text: "这样一步一步长大,叫做生命周期。", emoji: "🔄" }
    ],
    quiz: [
      {
        q: "蝴蝶最开始是什么样子?",
        options: [
          { text: "卵", emoji: "🥚" },
          { text: "蝴蝶", emoji: "🦋" },
          { text: "花朵", emoji: "🌸" }
        ],
        answer: 0
      },
      {
        q: "卵变成了什么?",
        options: [
          { text: "小鸟", emoji: "🐦" },
          { text: "毛毛虫", emoji: "🐛" },
          { text: "小鱼", emoji: "🐟" }
        ],
        answer: 1
      },
      {
        q: "毛毛虫最后变成了什么?",
        options: [
          { text: "蜜蜂", emoji: "🐝" },
          { text: "蜗牛", emoji: "🐌" },
          { text: "蝴蝶", emoji: "🦋" }
        ],
        answer: 2
      },
      {
        q: "一步一步长大的过程叫做什么?",
        options: [
          { text: "生命周期", emoji: "🔄" },
          { text: "天气", emoji: "🌦️" },
          { text: "颜色", emoji: "🎨" }
        ],
        answer: 0
      }
    ]
  },
  {
    id: "habitats",
    title: "动物的家",
    icon: "🏡",
    color: "#3FB6A8",
    slides: [
      { text: "栖息地就是动物居住的地方。", emoji: "🏡" },
      { text: "鱼儿住在海洋或河流里。", emoji: "🌊🐟" },
      { text: "北极熊住在冰雪世界。", emoji: "❄️" },
      { text: "猴子住在热带雨林里。", emoji: "🐒🌴" },
      { text: "骆驼住在沙漠里。", emoji: "🐫🏜️" },
      { text: "每一种动物都有适合自己的家。", emoji: "💛" }
    ],
    quiz: [
      {
        q: "北极熊住在哪里?",
        options: [
          { text: "冰雪世界", emoji: "❄️" },
          { text: "沙漠", emoji: "🏜️" },
          { text: "雨林", emoji: "🌴" }
        ],
        answer: 0
      },
      {
        q: "骆驼住在哪里?",
        options: [
          { text: "海洋", emoji: "🌊" },
          { text: "沙漠", emoji: "🏜️" },
          { text: "雨林", emoji: "🌴" }
        ],
        answer: 1
      },
      {
        q: "猴子最喜欢住在哪里?",
        options: [
          { text: "冰雪世界", emoji: "❄️" },
          { text: "沙漠", emoji: "🏜️" },
          { text: "热带雨林", emoji: "🌴" }
        ],
        answer: 2
      },
      {
        q: "鱼儿住在哪里?",
        options: [
          { text: "水里", emoji: "🌊" },
          { text: "树上", emoji: "🌳" },
          { text: "沙子里", emoji: "🏖️" }
        ],
        answer: 0
      }
    ]
  }
];
