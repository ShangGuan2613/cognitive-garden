/**
 * 认知园内容数据 —— 由 learn-ai 的 course-data.js 结构改编。
 * Domain → part/topic，Point → lesson。维护本文件 + points/*.html。
 * Provenance: https://github.com/itshen/learn-ai (AGPL-3.0)
 */
window.COURSE = {
  meta: {
    title: "认知园",
    subtitle: "一座缓慢生长的理解树，不是课程。",
    brand: "认知园",
    author: "Dennis",
    authorUrl: "", github: "",
    focusQuestion: "当信息变得廉价，什么值得被我反复改写？",
    authorLine: "我把正在形成的判断写成可修订的点，而不是写成一节课。",
  },
  parts: [
  {
    "id": "d-understanding",
    "num": "主题 1",
    "title": "理解本身",
    "desc": "关于「弄懂一件事」时我真正在做什么。",
    "color": "#000000",
    "group": "main",
    "topics": [
      {
        "id": "t-understanding",
        "title": "理解本身",
        "desc": "关于「弄懂一件事」时我真正在做什么。",
        "lessons": [
          {
            "file": "points/claim-before-coverage.html",
            "title": "先立主张，再铺材料",
            "desc": "我用「主张句」当门槛：过不了这关，就不公开成点。",
            "tag": "high",
            "navTitle": "先立主张，再铺材料",
            "pointId": "claim-before-coverage",
            "claim": "一个理解点如果不能用一句话说清主张，它还只是笔记堆，不是理解。",
            "status": "public",
            "confidence": "high",
            "example": true,
            "updated": "2026-10-10"
          },
          {
            "file": "points/confidence-is-not-progress.html",
            "title": "置信度不是进度条",
            "desc": "用 low / medium / high 文字标签，拒绝环形进度与「学会了」。",
            "tag": "medium",
            "navTitle": "置信度不是进度条",
            "pointId": "confidence-is-not-progress",
            "claim": "置信度描述的是我此刻愿意押注的程度，不是学完了百分之多少。",
            "status": "public",
            "confidence": "medium",
            "example": true,
            "updated": "2026-10-08"
          },
          {
            "file": "points/tree-not-funnel.html",
            "title": "树先于漏斗",
            "desc": "地图与焦点问题优先；适合谁、证书预告、助教入口一律删除。",
            "tag": "medium",
            "navTitle": "树先于漏斗",
            "pointId": "tree-not-funnel",
            "claim": "首页应让人十秒感到结构，而不是十秒进入转化漏斗。",
            "status": "revising",
            "confidence": "medium",
            "example": true,
            "updated": "2026-10-12"
          }
        ]
      }
    ]
  },
  {
    "id": "d-building",
    "num": "主题 2",
    "title": "构建与取舍",
    "desc": "做产品与系统时，哪些判断会反复回来咬我。",
    "color": "#000000",
    "group": "main",
    "topics": [
      {
        "id": "t-building",
        "title": "构建与取舍",
        "desc": "做产品与系统时，哪些判断会反复回来咬我。",
        "lessons": [
          {
            "file": "points/cut-is-a-feature.html",
            "title": "删减是功能",
            "desc": "Cut 列表不是扫兴，是产品定义。",
            "tag": "high",
            "navTitle": "删减是功能",
            "pointId": "cut-is-a-feature",
            "claim": "对个人认知站，少一个壳子往往比多一个模块更接近产品完成。",
            "status": "public",
            "confidence": "high",
            "example": true,
            "updated": "2026-10-05"
          },
          {
            "file": "points/revision-as-product.html",
            "title": "修订史即产品表面",
            "desc": "日志与点内修订是反馈闭环；不做测验、不做点赞。",
            "tag": "medium",
            "navTitle": "修订史即产品表面",
            "pointId": "revision-as-product",
            "claim": "公开修订比公开完成度更能建立信任。",
            "status": "public",
            "confidence": "medium",
            "example": true,
            "updated": "2026-10-11"
          }
        ]
      }
    ]
  }
],
};
window.SITE = {
  "name": "认知园",
  "tagline": "一座缓慢生长的理解树，不是课程。",
  "author": "Dennis",
  "authorLine": "我把正在形成的判断写成可修订的点，而不是写成一节课。",
  "focusQuestion": "当信息变得廉价，什么值得被我反复改写？",
  "about": [
    "这是我的个人认知展示与迭代站：主题 → 笔记 → 更新。",
    "它不是网课，没有助教、证书或打卡。你看到的是我愿意公开辩护的主张，以及它们如何被改写。",
    "当前页面里带「示例」标记的内容，是为演示结构而写的种子，不是我的定论。"
  ],
  "domains": [
    {
      "id": "understanding",
      "title": "理解本身",
      "summary": "关于「弄懂一件事」时我真正在做什么。",
      "order": 1
    },
    {
      "id": "building",
      "title": "构建与取舍",
      "summary": "做产品与系统时，哪些判断会反复回来咬我。",
      "order": 2
    }
  ],
  "points": [
    {
      "id": "claim-before-coverage",
      "domainId": "understanding",
      "title": "先立主张，再铺材料",
      "claim": "一个理解点如果不能用一句话说清主张，它还只是笔记堆，不是理解。",
      "status": "public",
      "confidence": "high",
      "example": true,
      "order": 1,
      "updated": "2026-10-10",
      "summary": "我用「主张句」当门槛：过不了这关，就不公开成点。",
      "bodyHtml": "<p>我曾把长文等同于深度。后来发现，读者（和未来的我）真正需要的是一句可检验的主张，再加上理由、边界与修订史。</p><details><summary>展开：为何重要</summary><p>主张句强迫取舍。没有它，目录会膨胀成课程大纲，首页也会被「体系感」绑架。</p></details><h2>我曾误以为</h2><p>材料越全越专业。其实材料会掩盖我还没想清楚的部分。</p><h2>现在的结构</h2><p>每个点固定脊柱：主张 → 元信息 → 正文 → 相关点 → 修订。</p><h2>反例与边界</h2><p>探索性草稿可以没有主张，但不应出现在公开地图里。</p>",
      "related": [
        "confidence-is-not-progress",
        "tree-not-funnel"
      ],
      "revisions": [
        {
          "date": "2026-09-01",
          "note": "初稿：强调「一句话」。"
        },
        {
          "date": "2026-10-10",
          "note": "补上反例：草稿可以暂无主张，但不进地图。"
        }
      ]
    },
    {
      "id": "confidence-is-not-progress",
      "domainId": "understanding",
      "title": "置信度不是进度条",
      "claim": "置信度描述的是我此刻愿意押注的程度，不是学完了百分之多少。",
      "status": "public",
      "confidence": "medium",
      "example": true,
      "order": 2,
      "updated": "2026-10-08",
      "summary": "用 low / medium / high 文字标签，拒绝环形进度与「学会了」。",
      "bodyHtml": "<p>进度条暗示终点。理解很少有终点，更常有回撤。</p><details><summary>展开：运营含义</summary><p>公开站点若展示进度，读者会用完成度评价我，我会用完成度欺骗自己。置信度逼我回答：我有多敢站在这句主张后面？</p></details><h2>边界</h2><p>置信度不替代证据；它只是态度标记。</p>",
      "related": [
        "claim-before-coverage",
        "revision-as-product"
      ],
      "revisions": [
        {
          "date": "2026-09-20",
          "note": "从「不要徽章」改写成「置信 ≠ 进度」。"
        }
      ]
    },
    {
      "id": "tree-not-funnel",
      "domainId": "understanding",
      "title": "树先于漏斗",
      "claim": "首页应让人十秒感到结构，而不是十秒进入转化漏斗。",
      "status": "revising",
      "confidence": "medium",
      "example": true,
      "order": 3,
      "updated": "2026-10-12",
      "summary": "地图与焦点问题优先；适合谁、证书预告、助教入口一律删除。",
      "bodyHtml": "<p>漏斗把读者当转化对象。树把读者当同行者：你可以在任意点进入，也可以只读一个点就离开。</p><h2>相关取舍</h2><p>导航保持极简顶栏；空态用我自己的语气说明「还没有」，而不是塞推荐墙。</p>",
      "related": [
        "claim-before-coverage"
      ],
      "revisions": [
        {
          "date": "2026-10-12",
          "note": "正在改写：补「十秒测试」对照表。"
        }
      ]
    },
    {
      "id": "cut-is-a-feature",
      "domainId": "building",
      "title": "删减是功能",
      "claim": "对个人认知站，少一个壳子往往比多一个模块更接近产品完成。",
      "status": "public",
      "confidence": "high",
      "example": true,
      "order": 1,
      "updated": "2026-10-05",
      "summary": "Cut 列表不是扫兴，是产品定义。",
      "bodyHtml": "<p>助教、证书、打卡、评价墙都会把注意力从主张挪走。我把它们写成硬禁止，免得以后「顺便加一下」。</p><details><summary>展开：可维护性</summary><p>单源数据 + 静态页，让我改一个点不必碰框架。壳子越少，更新路径越短。</p></details>",
      "related": [
        "revision-as-product"
      ],
      "revisions": [
        {
          "date": "2026-10-05",
          "note": "首发。"
        }
      ]
    },
    {
      "id": "revision-as-product",
      "domainId": "building",
      "title": "修订史即产品表面",
      "claim": "公开修订比公开完成度更能建立信任。",
      "status": "public",
      "confidence": "medium",
      "example": true,
      "order": 2,
      "updated": "2026-10-11",
      "summary": "日志与点内修订是反馈闭环；不做测验、不做点赞。",
      "bodyHtml": "<p>我以「改过什么」代替「学会了没有」。读者若不同意，至少看得到我何时改口。</p><h2>反馈闭环</h2><p>站内只有链接：到相关点、到地图、到日志。没有代理控件冒充互动。</p>",
      "related": [
        "confidence-is-not-progress",
        "cut-is-a-feature"
      ],
      "revisions": [
        {
          "date": "2026-09-28",
          "note": "起草。"
        },
        {
          "date": "2026-10-11",
          "note": "对齐体验决策：links-only + log-and-revisions。"
        }
      ]
    },
    {
      "id": "draft-in-now",
      "domainId": "building",
      "title": "此刻只放三件正在咬我的事",
      "claim": "Now 不是待办箱，是公开承认的注意力上限。",
      "status": "draft",
      "confidence": "low",
      "example": true,
      "order": 3,
      "updated": "2026-10-12",
      "summary": "草稿：用于演示 draft 不进地图，但可出现在 Now。",
      "bodyHtml": "<p>这条是草稿示例，默认不出现在公开地图。</p>",
      "related": [
        "tree-not-funnel"
      ],
      "revisions": [
        {
          "date": "2026-10-12",
          "note": "草稿建立。"
        }
      ]
    }
  ],
  "log": [
    {
      "id": "log-2026-10-12",
      "date": "2026-10-12",
      "title": "站点骨架落地",
      "summary": "按决策册套上杂志风双色与树状地图；示例点就位。",
      "pointId": "tree-not-funnel"
    },
    {
      "id": "log-2026-10-11",
      "date": "2026-10-11",
      "title": "修订即产品表面",
      "summary": "把反馈闭环从测验改成日志与修订史。",
      "pointId": "revision-as-product"
    },
    {
      "id": "log-2026-10-05",
      "date": "2026-10-05",
      "title": "写下 Cut",
      "summary": "确认助教/证书/打卡等硬禁止。",
      "pointId": "cut-is-a-feature"
    }
  ],
  "nowIds": [
    "tree-not-funnel",
    "draft-in-now",
    "revision-as-product"
  ]
};
window.TAG_STYLE = {
  'high': { bg: '#fee2e2', fg: '#991b1b' },
  'medium': { bg: '#fef3c7', fg: '#92400e' },
  'low': { bg: '#e5e7eb', fg: '#374151' },
};
window.COURSE_FLAT = (function () {
  const flat = [];
  window.COURSE.parts.forEach(function (part) {
    part.topics.forEach(function (topic) {
      topic.lessons.forEach(function (lesson) {
        flat.push(Object.assign({}, lesson, {
          partId: part.id, partTitle: part.title, partNum: part.num,
          topicId: topic.id, topicTitle: topic.title,
        }));
      });
    });
  });
  return flat;
})();
