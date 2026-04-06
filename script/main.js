// =========================
// 0) 프로필 링크
// =========================
const PROFILE_LINKS = {
  github: "https://github.com/CozyDudeBoy",
  resume: "./assets/resume.pdf",
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
      "이미지 위 좌표 기반 핀을 생성해 질문/답변을 연결하는 피드백 플랫폼",
    descDetail:
      "디자인 피드백 과정에서 발생하는 '어디를 말하는지 불명확한 문제'를 해결하기 위해 제작한 서비스입니다. " +
      "이미지 좌표 기반으로 핀을 생성하고 질문/답변을 연결하는 구조를 설계했습니다.",

    roleDetail: [
      "DB 설계 및 테이블 관계 구조 직접 설계",
      "핀 좌표(x, y) 저장 및 렌더링 로직 구현",
      "JWT 기반 로그인/인증 처리",
      "게시물 → 핀 → 답변 흐름 API 설계"
    ],

    trouble: [
      "좌표 기반 핀 위치 오차 문제 → % 좌표 방식으로 해결",
      "게시물/핀/답변 관계 설계 충돌 → ERD 재구성",
      "배포 환경 DB 연결 오류 → 환경 설정 수정"
    ],

    learn: [
      "데이터 구조 설계의 중요성 체감",
      "좌표 기반 인터랙션 설계 경험",
      "서비스 흐름 설계 경험"
    ],

    features: [
      "핀(좌표) 기반 피드백 시스템",
      "게시물·핀·답변 관계형 구조",
      "관리자/사용자 기능 분리",
      "실서비스 배포"
    ],

    testAccount: "관리자 : admin / 1234 (admin 페이지는 주소 끝에 admin을 추가해주세요 ) 유저 : user1/1234 , user2/1234",
    live: "https://web-ping-frontend-mkvwe63p223f9070.sel3.cloudtype.app/",
    githubFront: "https://github.com/CozyDudeBoy/ping_frontend",
    githubBack: "https://github.com/CozyDudeBoy/ping_backend",
    thumb: THUMBS.ping
  },

  {
    id: "webzen",
    badge: "TEAM",
    title: "Webzen 게임사이트 리뉴얼",
    desc: "PHP·MySQL 기반 게시판 및 관리자 기능 구현",
    period: "2025.11.11 – 2025.12.12",
    role: "백엔드 개발",
    tech: ["PHP", "MySQL", "Bootstrap"],
    summary:
      "사용자/관리자 기능을 포함한 게임 포털 구조 구현",
    descDetail:
      "게임 포털 사이트를 실제 서비스 구조로 구현한 프로젝트입니다. " +
      "게시판과 관리자 기능을 포함해 운영 흐름을 고려했습니다.",

    roleDetail: [
      "MySQL 테이블 구조 설계",
      "게시판/FAQ CRUD 구현",
      "관리자 권한 분리",
      "데이터 연동 처리"
    ],

    trouble: [
      "데이터 관계 충돌 → 테이블 재설계",
      "권한 처리 오류 → 로직 분리",
      "폼 데이터 처리 문제 → 요청 흐름 수정"
    ],

    learn: [
      "CRUD 구조 이해",
      "관리자 시스템 경험",
      "데이터 흐름 설계 능력 향상"
    ],

    features: [
      "게시판 CRUD",
      "FAQ 기능",
      "관리자 기능",
      "DB 연동"
    ],

    testAccount: "admin / 1234",
    live: "https://ihatethiscode.dothome.co.kr/webzen/",
    github: "https://github.com/kmrjsals-ops/project",
    thumb: THUMBS.webzen
  },

  {
    id: "koreanair",
    badge: "PERSONAL",
    title: "대한항공 랜딩페이지",
    desc: "정보 구조 개선 중심 랜딩 리뉴얼",
    period: "2025.09",
    role: "전체 제작",
    tech: ["HTML", "CSS", "JavaScript"],
    summary:
      "기존 사이트를 분석해 UI/UX 개선 중심으로 리뉴얼",
    descDetail:
      "대한항공 사이트를 분석해 정보 구조와 가독성을 개선한 프로젝트입니다.",

    roleDetail: [
      "레이아웃 구조 설계",
      "퍼블리싱 구현",
      "인터랙션 구현",
      "반응형 설계"
    ],

    trouble: [
      "정보 과다 → 구조 재배치",
      "레이아웃 깨짐 → grid 재설계"
    ],

    learn: [
      "정보 구조 설계 경험",
      "UI 흐름 중요성 이해"
    ],

    features: [
      "랜딩 UI 구조 개선",
      "반응형 디자인",
      "인터랙션"
    ],

    testAccount: "",
    live: "https://ihatethiscode.dothome.co.kr/project1/",
    github: "https://github.com/CozyDudeBoy/p1_koreanair",
    thumb: THUMBS.koreanair
  },

  {
    id: "casper",
    badge: "MINI",
    title: "캐스퍼 랜딩페이지",
    desc: "제품 소개 중심 랜딩 구현",
    period: "2025.11",
    role: "전체 제작",
    tech: ["HTML", "SCSS", "JavaScript"],
    summary:
      "제품 중심 구조 랜딩페이지 제작",
    descDetail:
      "제품 특징과 구매 유도 흐름을 중심으로 구성한 랜딩페이지입니다.",

    roleDetail: [
      "UI 구조 설계",
      "SCSS 구조화",
      "반응형 구현"
    ],

    trouble: [
      "레이아웃 정렬 문제 → 구조 수정"
    ],

    learn: [
      "랜딩 흐름 설계 경험"
    ],

    features: [
      "제품 소개 UI",
      "반응형",
      "스타일 구조화"
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
    desc: "브랜드 중심 퍼블리싱",
    period: "2025.10",
    role: "전체 제작",
    tech: ["HTML", "CSS"],
    summary:
      "브랜드 톤 중심 UI 제작",
    descDetail:
      "브랜드 컬러와 분위기를 살려 제작한 랜딩페이지입니다.",

    roleDetail: [
      "퍼블리싱",
      "레이아웃 구성"
    ],

    trouble: [
      "디자인 정렬 문제 → 구조 수정"
    ],

    learn: [
      "브랜드 표현 경험"
    ],

    features: [
      "브랜드 UI",
      "레이아웃"
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
    github: p.githubFront || p.github || "",
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

function lockScroll(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
}

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

    const cardGithub = p.githubFront || p.github || "#";

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
          <a class="link-btn" href="${escapeHTML(cardGithub)}" target="_blank" rel="noreferrer">GitHub</a>
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
      p.badge,
      p.title,
      p.desc,
      p.period,
      p.role,
      p.tech.join(" "),
      p.features.join(" "),
      p.summary,
      p.github || "",
      p.githubFront || "",
      p.githubBack || "",
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

  // 기본 정보
  $("#modalTitle").textContent = p.title;
  $("#modalMeta").textContent = `${p.period} · ${p.role}`;
  $("#modalSummary").textContent = p.summary;

  // 상세 영역
  $("#modalDesc").textContent = p.descDetail || "";

  $("#modalRole").innerHTML = (p.roleDetail || [])
    .map(x => `<li>${escapeHTML(x)}</li>`)
    .join("");

  $("#modalTrouble").innerHTML = (p.trouble || [])
    .map(x => `<li>${escapeHTML(x)}</li>`)
    .join("");

  $("#modalLearn").innerHTML = (p.learn || [])
    .map(x => `<li>${escapeHTML(x)}</li>`)
    .join("");

  // 이미지
  const shot = $("#modalShot");
  shot.innerHTML = `<img src="${escapeHTML(p.thumb)}" alt="${escapeHTML(p.title)}의 상세 스크린샷" />`;

  // 테스트 계정
  const testWrap = $("#modalTestWrap");
  const testBox = $("#modalTest");

  if (p.testAccount && p.testAccount.trim()) {
    testWrap.style.display = "";
    testBox.innerHTML = `<b>계정</b><br>${escapeHTML(p.testAccount).replaceAll("\n", "<br>")}`;
  } else {
    testWrap.style.display = "none";
    testBox.textContent = "";
  }

  // 기능 / 기술
  $("#modalFeatures").innerHTML = (p.features || [])
    .map(x => `<li>${escapeHTML(x)}</li>`)
    .join("");

  $("#modalTech").innerHTML = (p.tech || [])
    .map(x => `<span class="mini-tag">${escapeHTML(x)}</span>`)
    .join("");

  // 링크
  const liveBtn = $("#modalLive");
  const githubBtn = $("#modalGithub");
  const githubFrontBtn = $("#modalGithubFront");
  const githubBackBtn = $("#modalGithubBack");

  liveBtn.href = p.live || "#";

  // 일단 모두 숨김
  if (githubBtn) githubBtn.style.display = "none";
  if (githubFrontBtn) githubFrontBtn.style.display = "none";
  if (githubBackBtn) githubBackBtn.style.display = "none";

  // ping처럼 front/back이 있는 경우
  if (p.githubFront || p.githubBack) {
    if (githubFrontBtn && p.githubFront) {
      githubFrontBtn.style.display = "";
      githubFrontBtn.href = p.githubFront;
    }

    if (githubBackBtn && p.githubBack) {
      githubBackBtn.style.display = "";
      githubBackBtn.href = p.githubBack;
    }
  } else if (githubBtn && p.github) {
    // 일반 프로젝트는 기존 GitHub 버튼 하나만
    githubBtn.style.display = "";
    githubBtn.href = p.github;
  }

  // 모달 열기
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
  lockScroll(true);

  // 포커스 관리
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

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("show")) {
    closeModal();
  }

  // Focus trap
  if (e.key === "Tab" && overlay.classList.contains("show")) {
    const focusables = getFocusableElements(overlay);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (!first || !last) return;

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
          <a class="link-btn detail" href="${escapeHTML(s.github || "#")}" target="_blank" rel="noreferrer">GitHub</a>
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

  $$(".dot", dotsWrap).forEach((d, idx) => {
    d.classList.toggle("active", idx === slideIndex);
  });
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

searchInput.addEventListener("input", () => {
  renderProjects(filterProjects(searchInput.value));
});

// =========================
// init
// =========================
$("#year").textContent = new Date().getFullYear();
bindProfileLinks();
renderProjects(PROJECTS);
renderSlides();

const topBtn = document.getElementById("topBtn");

// 스크롤 시 버튼 표시
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

// 클릭 시 상단 이동
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});