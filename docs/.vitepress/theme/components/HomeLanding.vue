<template>
  <main class="landing">
    <section class="hero reveal">
      <div class="hero__content">
        <p class="hero__eyebrow">OpenSHTU · SHTU Manual</p>

        <pre class="wordmark" aria-hidden="true">
███████╗██╗  ██╗████████╗██╗   ██╗
██╔════╝██║  ██║╚══██╔══╝██║   ██║
███████╗███████║   ██║   ██║   ██║
╚════██║██╔══██║   ██║   ██║   ██║
███████║██║  ██║   ██║   ╚██████╔╝
╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ </pre>
        <p class="wordmark__caption" aria-hidden="true">SHTU Manual</p>

        <h1>SHTU Manual</h1>
        <p class="hero__subtitle">
          面向上海科技大学学生的校园手册：从新生入门、学习规划到日常生活，把分散经验整理成可以直接查阅的路径。
        </p>

        <div class="prompt-box" aria-label="站点快速入口">
          <p class="prompt-box__copy">
            <b>{{ active.title }}</b>
            <span>{{ active.copy }}</span>
          </p>
          <div class="prompt-box__footer">
            <span class="prompt-box__counter">{{ counter }} / {{ total }}</span>
            <button
              class="prompt-box__nav"
              type="button"
              aria-label="上一项"
              @click="prev"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6 L9 12 L15 18" /></svg>
            </button>
            <button
              class="prompt-box__nav"
              type="button"
              aria-label="下一项"
              @click="next"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6 L15 12 L9 18" /></svg>
            </button>
            <a class="prompt-box__button" :href="withBase(active.href)">前往 {{ active.title }}</a>
          </div>
        </div>
      </div>

      <div class="hero__visual">
        <div
          class="badge-emblem"
          :class="{ 'badge-emblem--intro': showBadgeIntro }"
          aria-hidden="true"
        >
          <img :src="logoRed" alt="" />
        </div>

        <div class="visual-card visual-card--main">
          <div class="visual-card__bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p class="visual-card__label">SHTU Manual</p>
          <strong>上科大校园手册</strong>
          <div class="visual-card__progress">
            <span style="--w: 62%"></span>
          </div>
          <ul>
            <li><span>新生入门</span><b>先看这里</b></li>
            <li><span>学习规划</span><b>选课科研</b></li>
            <li><span>校园生活</span><b>衣食住行</b></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="rows" aria-label="核心栏目">
      <a
        v-for="(item, idx) in links"
        :key="item.href"
        :href="withBase(item.href)"
        class="row"
      >
        <div class="row__index">{{ item.index }}</div>
        <div class="row__body">
          <strong>{{ item.title }}</strong>
          <small>{{ item.desc }}</small>
        </div>
        <div class="row__visual" aria-hidden="true">
          <svg v-if="item.anim==='freshman'" viewBox="0 0 320 88" class="anim anim-freshman" preserveAspectRatio="xMidYMid meet">
            <path class="fm-route" d="M46 58 C92 18 130 72 168 36 S238 28 274 58" />
            <g class="fm-pin fm-pin-a" transform="translate(46 58)">
              <path d="M0 -18 C-10 -18 -17 -10 -17 -1 C-17 12 0 25 0 25 C0 25 17 12 17 -1 C17 -10 10 -18 0 -18Z" />
              <circle r="5" />
            </g>
            <g class="fm-pin fm-pin-b" transform="translate(274 58)">
              <path d="M0 -18 C-10 -18 -17 -10 -17 -1 C-17 12 0 25 0 25 C0 25 17 12 17 -1 C17 -10 10 -18 0 -18Z" />
              <circle r="5" />
            </g>
            <circle class="fm-dot fm-d-1" cx="96" cy="35" r="4" />
            <circle class="fm-dot fm-d-2" cx="148" cy="48" r="4" />
            <circle class="fm-dot fm-d-3" cx="205" cy="32" r="4" />
          </svg>

          <svg v-else-if="item.anim==='study'" viewBox="0 0 320 88" class="anim anim-study" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(76 18)">
              <rect class="st-book st-book-l" x="0" y="8" width="70" height="52" rx="5" />
              <rect class="st-book st-book-r" x="70" y="8" width="70" height="52" rx="5" />
              <path class="st-fold" d="M70 10 V68" />
              <line class="st-line st-l-1" x1="15" y1="25" x2="55" y2="25" />
              <line class="st-line st-l-2" x1="15" y1="38" x2="48" y2="38" />
              <line class="st-line st-l-3" x1="88" y1="25" x2="125" y2="25" />
              <line class="st-line st-l-4" x1="88" y1="38" x2="118" y2="38" />
            </g>
            <g class="st-credit" transform="translate(214 28)">
              <circle r="22" />
              <path d="M-8 1 L-1 8 L11 -8" />
            </g>
          </svg>

          <svg v-else-if="item.anim==='life'" viewBox="0 0 320 88" class="anim anim-life" preserveAspectRatio="xMidYMid meet">
            <g class="lf-card" transform="translate(74 18)">
              <rect width="172" height="52" rx="12" />
              <line x1="20" y1="16" x2="152" y2="16" />
              <line x1="20" y1="36" x2="152" y2="36" />
            </g>
            <g class="lf-icon lf-food" transform="translate(104 44)">
              <path d="M-10 -14 V14 M-2 -14 V14 M-10 -2 H-2 M10 -14 C18 -4 16 8 8 14" />
            </g>
            <g class="lf-icon lf-field" transform="translate(160 44)">
              <rect x="-16" y="-12" width="32" height="24" rx="12" />
              <line x1="-16" y1="0" x2="16" y2="0" />
            </g>
            <g class="lf-icon lf-bus" transform="translate(216 44)">
              <rect x="-16" y="-12" width="32" height="21" rx="4" />
              <circle cx="-8" cy="13" r="3" />
              <circle cx="8" cy="13" r="3" />
              <line x1="-10" y1="-2" x2="10" y2="-2" />
            </g>
          </svg>

          <svg v-else-if="item.anim==='growth'" viewBox="0 0 320 88" class="anim anim-growth" preserveAspectRatio="xMidYMid meet">
            <path class="gr-link" d="M160 44 L96 24 M160 44 L96 64 M160 44 L224 24 M160 44 L224 64" />
            <g class="gr-node gr-center" transform="translate(160 44)">
              <circle r="18" />
              <path d="M-7 6 C-5 -2 5 -2 7 6 M-5 -6 A5 5 0 1 0 5 -6 A5 5 0 1 0 -5 -6" />
            </g>
            <circle class="gr-node gr-n-1" cx="96" cy="24" r="10" />
            <circle class="gr-node gr-n-2" cx="96" cy="64" r="10" />
            <circle class="gr-node gr-n-3" cx="224" cy="24" r="10" />
            <circle class="gr-node gr-n-4" cx="224" cy="64" r="10" />
          </svg>

          <svg v-else-if="item.anim==='faq'" viewBox="0 0 320 88" class="anim anim-faq" preserveAspectRatio="xMidYMid meet">
            <g class="fq-bubble fq-q" transform="translate(84 19)">
              <rect width="112" height="30" rx="15" />
              <text x="20" y="20">Q</text>
            </g>
            <g class="fq-bubble fq-a" transform="translate(132 43)">
              <rect width="112" height="30" rx="15" />
              <circle cx="36" cy="15" r="3" />
              <circle cx="52" cy="15" r="3" />
              <circle cx="68" cy="15" r="3" />
            </g>
          </svg>

          <svg v-else-if="item.anim==='contribute'" viewBox="0 0 320 88" class="anim anim-contribute" preserveAspectRatio="xMidYMid meet">
            <path class="ct-branch" d="M94 22 V66 M94 44 C126 44 126 22 158 22 H224 M94 44 C126 44 126 66 158 66 H224" />
            <circle class="ct-commit ct-c-1" cx="94" cy="22" r="8" />
            <circle class="ct-commit ct-c-2" cx="94" cy="66" r="8" />
            <circle class="ct-commit ct-c-3" cx="224" cy="22" r="8" />
            <g class="ct-pr" transform="translate(208 50)">
              <rect width="42" height="28" rx="8" />
              <path d="M11 15 L18 21 L31 8" />
            </g>
          </svg>
        </div>
      </a>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { withBase } from 'vitepress'
import logoRed from '../assets/logo_badge.svg'

const links = [
  {
    index: '01', title: '新生篇', desc: '入学前后最先要看的入口',
    copy: '从这里开始：目前先链接 GeekPie 新生手册，后续会补充报到、宿舍、校园基础流程等内容。',
    href: '/freshman/', anim: 'freshman'
  },
  {
    index: '02', title: '学习篇', desc: '选课、升学、就业与科研',
    copy: '把选课与学分、出国、保研、考研、实习就业和科研入门拆成独立子篇目，方便按阶段查找。',
    href: '/study/', anim: 'study'
  },
  {
    index: '03', title: '生活篇', desc: '餐厅、体育、交通与周边',
    copy: '科大餐厅、体育场使用、校园交通和附近商场推荐都会放在这里，先把日常生活运转起来。',
    href: '/life/', anim: 'life'
  },
  {
    index: '04', title: '成长篇', desc: '组织、群聊、行政窗口与实践',
    copy: '学生组织、社团、常用行政窗口、勤工助学与实习资源会统一放在成长篇，减少信息散落。',
    href: '/growth/', anim: 'growth'
  },
  {
    index: '05', title: '常见问题', desc: '高频疑问集中整理',
    copy: '把重复出现的问题集中成 FAQ，后续可以按学习、生活、行政流程继续拆分。',
    href: '/faq/', anim: 'faq'
  },
  {
    index: '06', title: '贡献与更新', desc: 'PR、issue 与联系方式',
    copy: '想补充内容、修订错误或提出建议，可以从贡献与更新页开始，后续会补 GitHub/GitBook 提交教程。',
    href: '/contribute/', anim: 'contribute'
  }
]

const step = ref(0)
const showBadgeIntro = ref(false)
const active = computed(() => links[step.value])
const counter = computed(() => String(step.value + 1).padStart(2, '0'))
const total = computed(() => String(links.length).padStart(2, '0'))
const prev = () => { step.value = (step.value - 1 + links.length) % links.length }
const next = () => { step.value = (step.value + 1) % links.length }

let observer = null
let badgeIntroTimer = null

onMounted(() => {
  if (typeof window === 'undefined') return

  try {
    const key = 'shanke-guide-badge-intro-seen'
    if (!localStorage.getItem(key)) {
      showBadgeIntro.value = true
      localStorage.setItem(key, '1')
      badgeIntroTimer = window.setTimeout(() => {
        showBadgeIntro.value = false
      }, 2300)
    }
  } catch {
    showBadgeIntro.value = true
    badgeIntroTimer = window.setTimeout(() => {
      showBadgeIntro.value = false
    }, 2300)
  }

  if (!('IntersectionObserver' in window)) return
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          observer.unobserve(e.target)
        }
      }
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
  if (badgeIntroTimer) window.clearTimeout(badgeIntroTimer)
})
</script>

<style scoped>
:global(.landing-page .VPDoc) {
  padding: 0;
}

:global(.landing-page .VPDoc .container),
:global(.landing-page .VPDoc .content),
:global(.landing-page .VPDoc .content-container),
:global(.landing-page .vp-doc) {
  max-width: none;
  padding: 0;
}

:global(.landing-page .vp-doc > div) {
  margin: 0;
}

.landing {
  --red-1: #c8102e;
  --red-2: #9d0a12;
  --red-3: #ff3b54;
  --red-soft: rgba(200, 16, 46, 0.12);
  --ink: #1a1014;
  --ink-2: rgba(26, 16, 20, 0.66);
  --ink-3: rgba(26, 16, 20, 0.44);
  --glass: rgba(255, 255, 255, 0.62);
  --glass-strong: rgba(255, 255, 255, 0.82);
  --glass-border: rgba(26, 16, 20, 0.1);
  --field-border: rgba(255, 255, 255, 0.9);
  --nav-fill: rgba(255, 255, 255, 0.7);
  --surface: rgba(255, 255, 255, 0.9);
  --surface-hover: rgba(255, 255, 255, 0.98);
  --card-surface: rgba(255, 255, 255, 0.88);
  --line-soft: rgba(26, 16, 20, 0.08);
  --line-strong: rgba(26, 16, 20, 0.22);
  --track-soft: rgba(26, 16, 20, 0.12);
  --node-fill: #fff;
  --button-text: #fff;
  --progress-start: #ffd6dc;
  --accent-fill: rgba(200, 16, 46, 0.25);
  --shadow-soft: rgba(120, 22, 38, 0.08);
  --shadow-medium: rgba(120, 22, 38, 0.12);
  --shadow-strong: rgba(120, 22, 38, 0.18);
  --glow-soft: rgba(200, 16, 46, 0.18);
  --glow-medium: rgba(200, 16, 46, 0.55);
  --glow-strong: rgba(200, 16, 46, 0.65);
  --container: min(1180px, calc(100% - 144px));

  min-height: calc(100vh - var(--vp-nav-height));
  overflow-x: hidden;
  overflow-y: visible;
  background:
    radial-gradient(circle at 78% 18%, rgba(255, 60, 90, 0.18), transparent 32%),
    radial-gradient(circle at 12% 84%, rgba(255, 200, 210, 0.55), transparent 38%),
    linear-gradient(145deg, #f7eaec 0%, #fbf3f4 50%, #fdf8f9 100%);
  color: var(--ink);
}

:global(.dark) .landing {
  --red-1: #ff687a;
  --red-2: #ff8d9a;
  --red-3: #ffd0d6;
  --red-soft: rgba(255, 104, 122, 0.18);
  --ink: #fff4f6;
  --ink-2: rgba(255, 232, 237, 0.72);
  --ink-3: rgba(255, 220, 226, 0.5);
  --glass: rgba(36, 20, 27, 0.6);
  --glass-strong: rgba(42, 24, 32, 0.78);
  --glass-border: rgba(255, 213, 220, 0.16);
  --field-border: rgba(255, 141, 154, 0.24);
  --nav-fill: rgba(255, 255, 255, 0.08);
  --surface: rgba(31, 31, 35, 0.9);
  --surface-hover: rgba(39, 39, 43, 0.98);
  --card-surface: rgba(38, 22, 30, 0.86);
  --line-soft: rgba(255, 213, 220, 0.1);
  --line-strong: rgba(255, 213, 220, 0.26);
  --track-soft: rgba(255, 213, 220, 0.14);
  --node-fill: #1a0e13;
  --button-text: #1a0e13;
  --progress-start: rgba(255, 208, 214, 0.95);
  --accent-fill: rgba(255, 104, 122, 0.32);
  --shadow-soft: rgba(3, 1, 2, 0.28);
  --shadow-medium: rgba(3, 1, 2, 0.42);
  --shadow-strong: rgba(3, 1, 2, 0.58);
  --glow-soft: rgba(255, 104, 122, 0.2);
  --glow-medium: rgba(255, 104, 122, 0.58);
  --glow-strong: rgba(255, 104, 122, 0.72);
  background:
    radial-gradient(circle at 78% 18%, rgba(255, 104, 122, 0.16), transparent 32%),
    radial-gradient(circle at 12% 84%, rgba(104, 35, 48, 0.38), transparent 38%),
    linear-gradient(145deg, #10070b 0%, #160b10 52%, #0d0609 100%);
}

/* --- scroll reveal --- */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 700ms cubic-bezier(.2,.7,.2,1) var(--delay, 0ms),
    transform 700ms cubic-bezier(.2,.7,.2,1) var(--delay, 0ms);
  will-change: transform, opacity;
}
.reveal.is-visible,
.row.reveal {
  opacity: 1;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}

.hero {
  width: var(--container);
  min-height: calc(100vh - var(--vp-nav-height) - 230px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.9fr);
  align-items: center;
  gap: 28px;
  padding: 44px 0 14px;
}

.hero__content { position: relative; z-index: 2; }

.hero__eyebrow {
  margin: 0 0 16px;
  color: var(--red-2);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero h1 {
  max-width: 560px;
  margin: 12px 0 0;
  font-size: clamp(28px, 3vw, 44px);
  line-height: 1.08;
  font-weight: 850;
  letter-spacing: 0;
  color: var(--ink);
}

.hero__subtitle {
  max-width: 560px;
  margin: 14px 0 0;
  color: var(--ink-2);
  font-size: clamp(13px, 0.9vw, 15px);
  line-height: 1.6;
  font-weight: 500;
}

.wordmark {
  width: min(100%, 700px);
  margin: 0 0 8px;
  padding: 0;
  font-family: ui-monospace, "JetBrains Mono", "Fira Code", "Cascadia Code", monospace;
  font-size: clamp(8px, 1vw, 13px);
  line-height: 1.05;
  color: var(--red-1);
  background: linear-gradient(120deg, var(--red-2) 0%, var(--red-1) 45%, var(--red-3) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: pre;
  overflow: hidden;
  user-select: none;
}

.wordmark__caption {
  margin: 0;
  color: var(--red-2);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.36em;
  text-transform: uppercase;
}

.prompt-box {
  width: min(580px, 100%);
  margin-top: 24px;
  padding: 18px 20px 16px;
  border: 1px solid var(--field-border);
  border-radius: 18px;
  background: var(--glass-strong);
  backdrop-filter: blur(18px) saturate(1.2);
  box-shadow: 0 22px 48px var(--shadow-medium);
}

.prompt-box__copy {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 60px;
}
.prompt-box__copy b {
  color: var(--ink);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.prompt-box__copy span {
  color: var(--ink-2);
  font-size: 14px;
  line-height: 1.55;
  font-weight: 500;
}

.prompt-box__footer {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
}

.prompt-box__counter {
  margin-right: auto;
  color: var(--ink);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  font-variant-numeric: tabular-nums;
}

.prompt-box__nav,
.prompt-box__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;
  cursor: pointer;
}

.prompt-box__nav {
  width: 36px;
  height: 36px;
  border: 1.5px solid var(--ink);
  border-radius: 50%;
  color: var(--ink);
  background: var(--nav-fill);
  padding: 0;
}
.prompt-box__nav svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.prompt-box__nav:hover {
  background: var(--red-1);
  color: var(--button-text);
  border-color: var(--red-1);
  transform: translateY(-1px);
}
.prompt-box__nav:active { transform: translateY(0) scale(0.96); }

.prompt-box__button {
  min-height: 40px;
  padding: 0 20px;
  border-radius: 999px;
  color: var(--button-text);
  font-size: 13px;
  background: linear-gradient(120deg, var(--red-2), var(--red-1) 60%, var(--red-3));
  box-shadow: 0 12px 24px color-mix(in srgb, var(--red-1) 32%, transparent);
}
.prompt-box__button:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 30px color-mix(in srgb, var(--red-1) 40%, transparent);
}

.hero__visual {
  position: relative;
  min-height: 440px;
  perspective: 1100px;
  isolation: isolate;
}

.hero__visual::before {
  content: "";
  position: absolute;
  right: -8%;
  bottom: 8%;
  width: 80%;
  height: 22%;
  border-radius: 50%;
  background: radial-gradient(ellipse, var(--glow-soft), transparent 66%);
  filter: blur(18px);
}

.badge-emblem {
  position: absolute;
  top: 30px;
  left: 30px;
  width: 200px;
  height: 200px;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  transform: translate(-48px, -48px) scale(0.9);
  transition:
    opacity 540ms cubic-bezier(.22,.7,.22,1),
    transform 640ms cubic-bezier(.22,.7,.22,1),
    filter 540ms ease;
  filter: drop-shadow(0 0 0 rgba(157, 10, 18, 0));
  will-change: transform, opacity;
}

.badge-emblem img { width: 100%; height: 100%; display: block; }

.hero__visual:hover .badge-emblem,
.badge-emblem--intro {
  opacity: 0.55;
  transform: translate(0, 0) scale(1);
  filter: drop-shadow(0 18px 28px var(--glow-soft));
}

@media (prefers-reduced-motion: reduce) {
  .badge-emblem { transition: opacity 200ms ease; transform: none; }
}

/* --- glass card --- */
.visual-card {
  position: absolute;
  z-index: 2;
  border: 1px solid var(--glass-border);
  background: var(--card-surface);
  box-shadow: 0 30px 70px var(--shadow-strong);
  backdrop-filter: blur(22px) saturate(1.18);
  -webkit-backdrop-filter: blur(22px) saturate(1.18);
}

.visual-card--main {
  top: 38px;
  right: 0;
  width: min(360px, 90%);
  padding: 24px 26px;
  border-radius: 32px;
  transform: rotate(4deg) rotateY(-10deg);
}

.visual-card__bar { display: flex; gap: 7px; margin-bottom: 26px; }
.visual-card__bar span {
  width: 9px; height: 9px; border-radius: 50%;
  background: var(--track-soft);
}

.visual-card__label {
  margin: 0 0 6px;
  color: var(--ink-3);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.visual-card strong {
  display: block;
  color: var(--ink);
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 1.15;
}

.visual-card__progress {
  height: 8px;
  margin: 18px 0 16px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--line-soft);
}

.visual-card__progress span {
  display: block;
  width: var(--w);
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--progress-start), var(--red-1) 70%, var(--red-2));
}

.visual-card ul { display: grid; gap: 0; margin: 0; padding: 0; list-style: none; }

.visual-card li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 11px 0;
  border-top: 1px solid var(--line-soft);
  color: var(--ink-3);
  font-size: 13px;
  font-weight: 600;
}

.visual-card li b { color: var(--ink); font-size: 13px; font-weight: 700; }

/* --- rows --- */
.rows {
  width: min(1060px, calc(100% - 112px));
  margin: 0 auto;
  display: grid;
  gap: 18px;
  padding: 0 0 80px;
}

.row {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) clamp(270px, 34%, 360px);
  align-items: center;
  gap: 30px;
  min-height: 128px;
  padding: 28px 34px;
  text-decoration: none;
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  background: var(--surface);
  backdrop-filter: blur(14px) saturate(1.15);
  -webkit-backdrop-filter: blur(14px) saturate(1.15);
  color: var(--ink);
  box-shadow: 0 14px 32px var(--shadow-soft);
  transition:
    transform 220ms ease,
    background 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;
}

.row:hover {
  transform: translateY(-3px);
  background: var(--surface-hover);
  border-color: color-mix(in srgb, var(--red-1) 32%, transparent);
  box-shadow: 0 22px 44px var(--shadow-medium);
}

.row__index {
  color: var(--red-1);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.row__body strong {
  display: block;
  color: var(--ink);
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 4px;
}

.row__body small {
  display: block;
  color: var(--ink-2);
  font-size: 14px;
  line-height: 1.55;
}

.row__visual {
  position: relative;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  contain: paint;
}

.row__visual .anim {
  width: min(100%, 320px);
  height: 100%;
  overflow: hidden;
  flex: 0 1 320px;
  display: block;
}

.anim-freshman *,
.anim-study *,
.anim-life *,
.anim-growth *,
.anim-faq *,
.anim-contribute * {
  vector-effect: non-scaling-stroke;
}

/* === freshman: bounded route map === */
.anim-freshman .fm-route {
  fill: none;
  stroke: color-mix(in srgb, var(--red-1) 32%, transparent);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 8 8;
  animation: fm-route 2.8s linear infinite;
}
.anim-freshman .fm-pin path {
  fill: var(--node-fill);
  stroke: var(--red-1);
  stroke-width: 1.6;
}
.anim-freshman .fm-pin circle {
  fill: var(--red-1);
}
.anim-freshman .fm-pin-a { animation: fm-pin 2.8s ease-in-out infinite; transform-origin: 46px 58px; }
.anim-freshman .fm-pin-b { animation: fm-pin 2.8s ease-in-out infinite 0.8s; transform-origin: 274px 58px; }
.anim-freshman .fm-dot {
  fill: var(--red-1);
  opacity: 0.25;
  animation: fm-dot 2.8s ease-in-out infinite;
}
.anim-freshman .fm-d-2 { animation-delay: 0.35s; }
.anim-freshman .fm-d-3 { animation-delay: 0.7s; }
@keyframes fm-route { to { stroke-dashoffset: -32; } }
@keyframes fm-pin {
  0%, 100% { translate: 0 0; }
  45% { translate: 0 -4px; }
}
@keyframes fm-dot {
  0%, 25% { opacity: 0.25; transform: scale(0.85); }
  45%, 70% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.25; transform: scale(0.85); }
}

/* === study: book and credit check === */
.anim-study .st-book {
  fill: var(--node-fill);
  stroke: color-mix(in srgb, var(--red-1) 28%, transparent);
  stroke-width: 1.2;
  filter: drop-shadow(0 5px 10px var(--shadow-soft));
}
.anim-study .st-book-l { transform-origin: 146px 44px; animation: st-page-l 3.2s ease-in-out infinite; }
.anim-study .st-book-r { transform-origin: 146px 44px; animation: st-page-r 3.2s ease-in-out infinite; }
.anim-study .st-fold,
.anim-study .st-line {
  fill: none;
  stroke: color-mix(in srgb, var(--red-1) 38%, transparent);
  stroke-width: 1.8;
  stroke-linecap: round;
}
.anim-study .st-line {
  stroke-dasharray: 42;
  animation: st-line 3.2s ease-in-out infinite;
}
.anim-study .st-l-2,
.anim-study .st-l-4 { animation-delay: 0.25s; }
.anim-study .st-credit circle {
  fill: var(--node-fill);
  stroke: var(--red-1);
  stroke-width: 1.8;
}
.anim-study .st-credit path {
  fill: none;
  stroke: var(--red-1);
  stroke-width: 2.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 30;
  animation: st-check 3.2s ease-in-out infinite;
}
@keyframes st-page-l {
  0%, 100% { transform: skewY(0); }
  50% { transform: skewY(-2deg); }
}
@keyframes st-page-r {
  0%, 100% { transform: skewY(0); }
  50% { transform: skewY(2deg); }
}
@keyframes st-line {
  0%, 20% { stroke-dashoffset: 42; opacity: 0.35; }
  45%, 100% { stroke-dashoffset: 0; opacity: 1; }
}
@keyframes st-check {
  0%, 42% { stroke-dashoffset: 30; }
  58%, 100% { stroke-dashoffset: 0; }
}

/* === life: canteen, field and transport in one bounded card === */
.anim-life .lf-card rect {
  fill: var(--node-fill);
  stroke: color-mix(in srgb, var(--red-1) 25%, transparent);
  stroke-width: 1.2;
}
.anim-life .lf-card line {
  stroke: color-mix(in srgb, var(--red-1) 18%, transparent);
  stroke-width: 1.2;
}
.anim-life .lf-icon {
  fill: none;
  stroke: var(--red-1);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: lf-bob 3s ease-in-out infinite;
}
.anim-life .lf-field { animation-delay: 0.22s; }
.anim-life .lf-bus { animation-delay: 0.44s; }
@keyframes lf-bob {
  0%, 100% { translate: 0 0; opacity: 0.72; }
  45% { translate: 0 -4px; opacity: 1; }
}

/* === growth: people, organizations and windows === */
.anim-growth .gr-link {
  fill: none;
  stroke: color-mix(in srgb, var(--red-1) 28%, transparent);
  stroke-width: 1.4;
  stroke-dasharray: 5 5;
  animation: gr-flow 2.8s linear infinite;
}
.anim-growth .gr-node {
  fill: var(--node-fill);
  stroke: var(--red-1);
  stroke-width: 1.6;
  animation: gr-node 3.2s ease-in-out infinite;
}
.anim-growth .gr-center {
  fill: none;
  stroke: var(--red-1);
}
.anim-growth .gr-center circle { fill: var(--node-fill); }
.anim-growth .gr-center path {
  fill: none;
  stroke: var(--red-1);
  stroke-width: 1.8;
  stroke-linecap: round;
}
.anim-growth .gr-n-2 { animation-delay: 0.25s; }
.anim-growth .gr-n-3 { animation-delay: 0.5s; }
.anim-growth .gr-n-4 { animation-delay: 0.75s; }
@keyframes gr-flow { to { stroke-dashoffset: -20; } }
@keyframes gr-node {
  0%, 100% { opacity: 0.68; }
  45% { opacity: 1; fill: var(--accent-fill); }
}

/* === faq: Q/A bubbles === */
.anim-faq .fq-bubble rect {
  stroke: color-mix(in srgb, var(--red-1) 28%, transparent);
  stroke-width: 1.2;
}
.anim-faq .fq-q rect { fill: var(--node-fill); }
.anim-faq .fq-a rect { fill: var(--red-1); }
.anim-faq .fq-q text {
  fill: var(--red-1);
  font: 800 16px/1 ui-sans-serif, system-ui;
}
.anim-faq .fq-a circle {
  fill: var(--button-text);
  animation: fq-dot 1.2s ease-in-out infinite;
}
.anim-faq .fq-a circle:nth-of-type(2) { animation-delay: 0.18s; }
.anim-faq .fq-a circle:nth-of-type(3) { animation-delay: 0.36s; }
.anim-faq .fq-q { animation: fq-in 3s ease-in-out infinite; }
.anim-faq .fq-a { animation: fq-in 3s ease-in-out infinite 0.35s; opacity: 0; }
@keyframes fq-in {
  0% { opacity: 0; translate: 0 7px; }
  18%, 82% { opacity: 1; translate: 0 0; }
  100% { opacity: 0; translate: 0 -4px; }
}
@keyframes fq-dot {
  0%, 100% { opacity: 0.35; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-2px); }
}

/* === contribute: PR branch and merged check === */
.anim-contribute .ct-branch {
  fill: none;
  stroke: color-mix(in srgb, var(--red-1) 35%, transparent);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 7 6;
  animation: ct-branch 2.6s linear infinite;
}
.anim-contribute .ct-commit {
  fill: var(--node-fill);
  stroke: var(--red-1);
  stroke-width: 1.8;
  animation: ct-commit 2.8s ease-in-out infinite;
}
.anim-contribute .ct-c-2 { animation-delay: 0.25s; }
.anim-contribute .ct-c-3 { animation-delay: 0.5s; }
.anim-contribute .ct-pr rect {
  fill: var(--red-1);
  filter: drop-shadow(0 5px 10px var(--shadow-soft));
}
.anim-contribute .ct-pr path {
  fill: none;
  stroke: var(--button-text);
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 28;
  animation: ct-check 2.8s ease-in-out infinite;
}
@keyframes ct-branch { to { stroke-dashoffset: -26; } }
@keyframes ct-commit {
  0%, 100% { fill: var(--node-fill); }
  48% { fill: var(--accent-fill); }
}
@keyframes ct-check {
  0%, 38% { stroke-dashoffset: 28; }
  58%, 100% { stroke-dashoffset: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .row__visual *, .row__visual *::before, .row__visual *::after { animation: none !important; }
}

@media (max-width: 1080px) {
  .landing { --container: min(1080px, calc(100% - 80px)); }
  .rows { width: min(100% - 64px, 960px); }

  .hero {
    grid-template-columns: 1fr;
    gap: 24px;
    min-height: auto;
    padding-top: 36px;
  }

  .hero__visual { min-height: 400px; }
  .wordmark { font-size: clamp(7px, 1.55vw, 12px); }

  .badge-emblem { top: 24px; left: 24px; width: 170px; height: 170px; transform: translate(-40px, -40px) scale(0.9); }
}

@media (max-width: 680px) {
  .landing { --container: min(100% - 32px, 1080px); }
  .rows {
    width: min(100% - 32px, 1080px);
    gap: 14px;
    padding-bottom: 56px;
  }

  .hero { min-height: auto; padding-top: 26px; }
  .hero h1 { font-size: 30px; }
  .hero__subtitle { font-size: 13px; }
  .wordmark { font-size: clamp(5px, 1.8vw, 8px); }
  .wordmark__caption { font-size: 9px; letter-spacing: 0.28em; }
  .prompt-box { border-radius: 16px; }
  .prompt-box__footer { flex-wrap: wrap; }
  .prompt-box__footer span { width: 100%; }
  .hero__visual { min-height: 340px; }
  .visual-card--main { right: 0; width: min(320px, 90%); }
  .badge-emblem { width: 130px; height: 130px; }

  .row {
    grid-template-columns: 48px minmax(0, 1fr);
    grid-template-rows: auto auto;
    gap: 8px 16px;
    min-height: 150px;
    padding: 22px 20px;
  }

  .row__body strong { font-size: 20px; }
  .row__visual { grid-column: 1 / -1; height: 76px; }
}
</style>
