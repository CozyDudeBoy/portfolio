// =========================
// 0) 프로필 링크
// =========================
const PROFILE_LINKS = {
  github: "https://github.com/CozyDudeBoy",
  resume: "https://drive.google.com/drive/folders/1E2dSRAc49BwO6jxfQUTkBtAp-VMZX5sc",
  email: "ihatethiscode999@gmail.com"
};

// =========================
// 1) 썸네일 경로
// =========================
const THUMBS = {
  ping: "assets/thumbs/thumb_ping.jpg",
  webzen: "assets/thumbs/thumb_webzen.jpg",
  koreanair: "assets/thumbs/thumb_koreanair.jpg",
  casper: "assets/thumbs/thumb_casper.jpg",
  pascucci: "assets/thumbs/thumb_pascucci.jpg"
};

// =========================
// 2) 프로젝트 데이터
// =========================
const PROJECTS = [
  {
    id: "ping",
    badge: "TEAM",
    title: "PING 프로젝트",
    desc: "디자인 이미지에 핀(좌표)을 찍어 구조화된 피드백을 주고받는 플랫폼",
    period: "2026.01.05 – 2026.02.13",
    role: "개발 (프론트 30% · 백엔드 70%)",
    tech: ["React", "Sass", "MySQL"],
    summary:
      "PING은 디자인 이미지 위에 좌표 기반 핀을 생성해 질문/답변을 남길 수 있는 피드백 플랫폼입니다. " +
      "서비스 흐름(업로드 → 탐색 → 디테일 → 핀 기반 Q&A)을 고려해 기능을 설계했고, 백엔드/DB 구조를 중심으로 구현했습니다.",
    features: [
      "핀(좌표) 기반 피드백 흐름 설계 및 구현",
      "게시물·핀·답변 관계형 데이터 구조 설계/연동",
      "서비스형 구조(관리자/사용자 플로우) 기반 화면 구성",
      "배포 환경에서 동작하는 실사용 링크 제공"
    ],
    testAccount: "관리자: admin / 1234\n사용자: user1, user2, user3 / 1234",
    live: "https://web-ping-frontend-mkvwe63p223f9070.sel3.cloudtype.app/",
    github: "https://github.com/Kwag-hoon/react-ping",
    thumb: THUMBS.ping
  },
  {
    id: "webzen",
    badge: "TEAM",
    title: "Webzen 게임사이트 리뉴얼",
    desc: "PHP·MySQL 기반 게시판/FAQ 및 관리자 기능을 구현한 게임 포털 리뉴얼",
    period: "2025.11.11 – 2025.12.12",
    role: "백엔드 개발",
    tech: ["PHP", "MySQL", "Bootstrap", "Sass", "JavaScript"],
    summary:
      "Webzen 게임 포털 사이트를 리뉴얼하며 사용자/관리자 구조를 포함한 기능을 구현했습니다. " +
      "PHP와 MySQL을 기반으로 CRUD(게시판/FAQ) 로직과 데이터 연동을 구성해 서비스 운영 형태를 재현했습니다.",
    features: [
      "MySQL 기반 DB 설계 및 테이블 관계 구성",
      "게시판·FAQ CRUD 기능 구현 (등록/수정/삭제/조회)",
      "관리자 로그인 및 권한 분리(운영 구조) 구현",
      "Bootstrap·Sass 기반 UI 구조 정리"
    ],
    testAccount: "관리자: admin / 1234",
    live: "https://ihatethiscode.dothome.co.kr/webzen/",
    github: "https://github.com/kmrjsals-ops/project",
    thumb: THUMBS.webzen
  },
  {
    id: "koreanair",
    badge: "PERSONAL",
    title: "대한항공 리뉴얼 랜딩페이지",
    desc: "대한항공 메인 랜딩을 기준으로 정보 구조/가독성을 개선해 리뉴얼한 퍼블리싱 프로젝트",
    period: "2025.09.10 – 2025.09.26",
    role: "전체 제작",
    tech: ["HTML", "CSS", "JavaScript"],
    summary:
      "대한항공 공식 사이트를 기반으로 메인 랜딩페이지를 리뉴얼했습니다. " +
      "메인 비주얼/검색 영역/프로모션 섹션을 재구성해 콘텐츠 밀도를 조절하고, 자연스러운 시선 흐름을 목표로 제작했습니다.",
    features: [
      "메인 히어로/프로모션 섹션 레이아웃 재구성",
      "카드 UI 정리 및 가독성 중심 타이포/여백 개선",
      "JavaScript 기반 간단 인터랙션 적용",
      "반응형 레이아웃 구성"
    ],
    testAccount: "",
    live: "https://ihatethiscode.dothome.co.kr/project1/",
    github: "https://github.com/CozyDudeBoy/p1_koreanair",
    thumb: THUMBS.koreanair
  },
  {
    id: "casper",
    badge: "MINI",
    title: "현대 캐스퍼 랜딩페이지",
    desc: "캐스퍼 온라인 구매 사이트를 참고해 제품 소개 중심의 랜딩을 간단 구현",
    period: "2025.11.06 – 2025.11.13",
    role: "전체 제작",
    tech: ["HTML", "CSS", "SCSS", "JavaScript", "PHP"],
    summary:
      "캐스퍼 온라인 구매 사이트를 참고해 제품 소개 중심의 랜딩페이지를 제작했습니다. " +
      "섹션 구성과 시각적 흐름을 정리하고, SCSS로 스타일 구조를 정돈했습니다.",
    features: [
      "메인 비주얼/특징 섹션/구매 유도 CTA 구성",
      "SCSS 기반 스타일 구조화",
      "반응형 레이아웃 구현",
      "JavaScript 기반 간단 인터랙션 적용"
    ],
    testAccount: "",
    live: "https://cozydudeboy.github.io/2025casper/",
    github: "https://github.com/CozyDudeBoy/2025casper",
    thumb: THUMBS.casper
  },
  {
    id: "pascucci",
    badge: "MINI",
    title: "파스쿠찌 랜딩페이지",
    desc: "브랜드 콘셉트를 살려 제작한 카페 랜딩페이지 퍼블리싱",
    period: "2025.09.29 – 2025.10.01",
    role: "전체 제작",
    tech: ["HTML", "CSS"],
    summary:
      "파스쿠찌 브랜드 톤을 살려 랜딩페이지를 퍼블리싱했습니다. " +
      "브랜드 컬러/레이아웃/여백을 중심으로 시각적 분위기와 콘텐츠 흐름을 정리했습니다.",
    features: [
      "메인 비주얼 및 브랜드 섹션 구성",
      "CSS 기반 레이아웃/타이포/여백 정리",
      "기본 반응형 구조 적용",
      "깔끔한 퍼블리싱 마감"
    ],
    testAccount: "",
    live: "https://cozydudeboy.github.io/passcu/index.html",
    github: "https://github.com/CozyDudeBoy/passcu",
    thumb: THUMBS.pascucci
  }
];

const TEAM_SLIDES = PROJECTS
  .filter(p => p.badge === "TEAM")
  .map(p => ({
    title: p.title,
    desc: p.desc,
    tech: p.tech,
    live: p.live,
    github: p.github,
    thumb: p.thumb
  }));

// =========================
// utils
// =========================
const $ = (sel, par = document) => par.querySelector(sel);
const $$ = (sel, par = document) => Array.from(par.querySelectorAll(sel));

function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove("show"), 1800);
}
function lockScroll(lock) { document.body.style.overflow = lock ? "hidden" : ""; }
function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// =========================
// 3) 프로필 링크 바인딩
// =========================
function bindProfileLinks() {
  $("#topGithubBtn").href = PROFILE_LINKS.github;
  $("#heroGithubBtn").href = PROFILE_LINKS.github;
  $("#contactGithubBtn").href = PROFILE_LINKS.github;

  $("#topResumeBtn").href = PROFILE_LINKS.resume;
  $("#heroResumeBtn").href = PROFILE_LINKS.resume;
  $("#contactResumeBtn").href = PROFILE_LINKS.resume;

  $("#emailText").textContent = PROFILE_LINKS.email;
}

// =========================
// 4) Projects 렌더링 + 검색
// =========================
const projectGrid = $("#projectGrid");

function renderProjects(list) {
  projectGrid.innerHTML = "";
  if (!list.length) {
    projectGrid.innerHTML = `
          <div class="muted" style="grid-column:1/-1; padding:14px;">
            검색 결과가 없습니다.
          </div>
        `;
    return;
  }

  for (const p of list) {
    const card = document.createElement("article");
    card.className = "proj-card";
    card.dataset.id = p.id;

    const tags = p.tech.slice(0, 4)
      .map(t => `<span class="mini-tag">${escapeHTML(t)}</span>`)
      .join("");

    const badge = `
          <span class="mini-tag" style="color:#e5e7eb;border-color:rgba(125,211,252,.25);background:rgba(125,211,252,.08)">
            ${escapeHTML(p.badge)}
          </span>
        `;

    card.innerHTML = `
          <div class="thumb" aria-hidden="true">
            <img src="${escapeHTML(p.thumb)}" alt="" loading="lazy" />
          </div>
          <div class="proj-body">
            <div class="tag-row" style="margin-bottom:10px;">${badge}</div>
            <h3 class="proj-title">${escapeHTML(p.title)}</h3>
            <p class="proj-desc">${escapeHTML(p.desc)}</p>
            <div class="tag-row">${tags}</div>
            <div class="proj-actions">
              <a class="link-btn" href="${escapeHTML(p.live)}" target="_blank" rel="noreferrer">Live</a>
              <a class="link-btn" href="${escapeHTML(p.github)}" target="_blank" rel="noreferrer">GitHub</a>
              <button class="link-btn detail" type="button" data-open="modal">Detail</button>
            </div>
          </div>
        `;

    card.addEventListener("click", (e) => {
      const openBtn = e.target.closest('[data-open="modal"]');
      if (e.target.tagName === "A") return;
      if (openBtn || e.currentTarget === card) {
        openProjectModal(p.id);
      }
    });

    projectGrid.appendChild(card);
  }
}

function filterProjects(keyword) {
  const q = keyword.trim().toLowerCase();
  if (!q) return PROJECTS;
  return PROJECTS.filter(p => {
    const hay = [
      p.badge, p.title, p.desc, p.period, p.role,
      p.tech.join(" "),
      p.features.join(" "),
      p.summary,
      (p.testAccount || "")
    ].join(" ").toLowerCase();
    return hay.includes(q);
  });
}

// =========================
// 5) Modal
// =========================
const overlay = $("#modalOverlay");
let lastFocusedElement = null;

function getFocusableElements(el) {
  return Array.from(el.querySelectorAll(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
  ));
}

function openProjectModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  $("#modalTitle").textContent = p.title;
  $("#modalMeta").textContent = `${p.period} · ${p.role}`;
  $("#modalSummary").textContent = p.summary;

  // ✅ 모달 이미지 (썸네일만)
  const shot = $("#modalShot");
  shot.innerHTML = `<img src="${escapeHTML(p.thumb)}" alt="${escapeHTML(p.title)}의 상세 스크린샷" />`;

  // Test account
  const testWrap = $("#modalTestWrap");
  const testBox = $("#modalTest");
  if (p.testAccount && p.testAccount.trim()) {
    testWrap.style.display = "";
    testBox.innerHTML = `<b>계정</b><br>${escapeHTML(p.testAccount).replaceAll("\n", "<br>")}`;
  } else {
    testWrap.style.display = "none";
    testBox.textContent = "";
  }

  $("#modalFeatures").innerHTML = p.features.map(x => `<li>${escapeHTML(x)}</li>`).join("");
  $("#modalTech").innerHTML = p.tech.map(x => `<span class="mini-tag">${escapeHTML(x)}</span>`).join("");

  $("#modalLive").href = p.live;
  $("#modalGithub").href = p.github;

  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
  lockScroll(true);

  // Focus management
  lastFocusedElement = document.activeElement;
  const firstFocusable = getFocusableElements(overlay)[0];
  if (firstFocusable) firstFocusable.focus();
}

function closeModal() {
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
  lockScroll(false);

  if (lastFocusedElement) lastFocusedElement.focus();
}

$("#closeModal").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("show")) closeModal();

  // Focus trap
  if (e.key === "Tab" && overlay.classList.contains("show")) {
    const focusables = getFocusableElements(overlay);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
});

// =========================
// 6) Team Slider
// =========================
const track = $("#sliderTrack");
const dotsWrap = $("#sliderDots");
let slideIndex = 0;

function renderSlides() {
  track.innerHTML = "";
  dotsWrap.innerHTML = "";

  TEAM_SLIDES.forEach((s, idx) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
          <div class="shot" aria-hidden="true">
            <img src="${escapeHTML(s.thumb)}" alt="" loading="lazy" />
          </div>
          <div>
            <h3>${escapeHTML(s.title)}</h3>
            <p>${escapeHTML(s.desc)}</p>
            <div class="tag-row" style="margin-bottom:12px;">
              ${s.tech.map(x => `<span class="mini-tag">${escapeHTML(x)}</span>`).join("")}
            </div>
            <div class="proj-actions" style="max-width:420px;">
              <a class="link-btn" href="${escapeHTML(s.live)}" target="_blank" rel="noreferrer">Live</a>
              <a class="link-btn detail" href="${escapeHTML(s.github)}" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        `;
    track.appendChild(slide);

    const d = document.createElement("button");
    d.className = "dot" + (idx === 0 ? " active" : "");
    d.type = "button";
    d.setAttribute("aria-label", `go to slide ${idx + 1}`);
    d.addEventListener("click", () => goToSlide(idx));
    dotsWrap.appendChild(d);
  });

  goToSlide(0, true);
}

function goToSlide(i, instant = false) {
  slideIndex = (i + TEAM_SLIDES.length) % TEAM_SLIDES.length;
  track.style.transition = instant ? "none" : "transform .35s ease";
  track.style.transform = `translateX(${-slideIndex * 100}%)`;
  $$(".dot", dotsWrap).forEach((d, idx) => d.classList.toggle("active", idx === slideIndex));
}

$("#prevSlide").addEventListener("click", () => goToSlide(slideIndex - 1));
$("#nextSlide").addEventListener("click", () => goToSlide(slideIndex + 1));
window.addEventListener("keydown", (e) => {
  if (overlay.classList.contains("show")) return;
  if (e.key === "ArrowLeft") goToSlide(slideIndex - 1);
  if (e.key === "ArrowRight") goToSlide(slideIndex + 1);
});

// =========================
// 7) Contact 폼 (데모)
// =========================
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const msg = $("#message").value.trim();

  if (!name) return showToast("이름을 입력해줘!");
  if (!email || !email.includes("@")) return showToast("이메일 형식이 올바르지 않아!");
  if (msg.length < 5) return showToast("메시지를 5자 이상 작성해줘!");

  showToast("데모 전송 완료! (실제 전송은 아님)");
  e.target.reset();
});

$("#copyEmailBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(PROFILE_LINKS.email);
    showToast("이메일 복사 완료!");
  } catch {
    showToast("복사가 막혀있어. 직접 복사해줘!");
  }
});

// =========================
// 8) 검색
// =========================
const searchInput = $("#projectSearch");
$("#resetSearchBtn").addEventListener("click", () => {
  searchInput.value = "";
  renderProjects(PROJECTS);
  showToast("검색 초기화!");
});
searchInput.addEventListener("input", () => renderProjects(filterProjects(searchInput.value)));

// =========================
// init
// =========================
$("#year").textContent = new Date().getFullYear();
bindProfileLinks();
renderProjects(PROJECTS);
renderSlides();