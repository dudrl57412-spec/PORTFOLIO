/* ==========================================================================
   MAIN.JS - PORTFOLIO INTERACTION SCRIPT
   ========================================================================== */

/*──────── PROJECT MODAL DATA ────────*/
const PF_DATA = {
  kroven: {
    cardTitle: "KROVEN",
    images: ["image/kroven_detail.png"],
    title: "'KROVEN' 워커 브랜드 디자인(로고, 상세페이지, 카페24) 패키지",
    name: "KROVEN 브랜드 디자인 패키지",
    created: "2026/05/01 → 2026/05/18",
    type: [
      ["FIGMA", "#6b4a8b"],
      ["PhotoShop", "#8b4444"],
      ["Illerstrator", "#5a7a44"],
      ["Cafe24", "#0066cc"],
      ["ChatGPT", "#10a37f"],
      ["Gemini", "#4285f4"],
      ["PixverAI", "#552fff"],
      ["KlingAI", "#025709"],
    ],
    url: "https://www.figma.com/proto/AnWclskYKTj2nHfltQ0p3p/%EB%A1%9C%EA%B3%A0%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=1-2&t=p3IQ0SZkB6fKGeqo-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1 / https://www.figma.com/proto/xux52OjeMH8nHok5pt4fxa/%EB%A1%9C%EA%B3%A0%EB%94%94%EC%9E%90%EC%9D%B8-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=1-2&t=fRcv9BIl02D2DHb9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=115%3A559",
    siteUrl: "https://dankan.cafe24.com/",
    banner: "linear-gradient(155deg,#040404,#0d0d0d)",
    overview:
      "로고부터 웹사이트, 상세페이지까지 브랜드 전 과정을 1인 총괄로 디자인한 프로젝트",
    work: "• 브랜드 아이덴티티 및 컨셉 재정립\n• 비주얼 가이드·패키지 디자인 시스템 구축\n• 생성형 AI 기반 크리에이티브 디렉팅",
    team: "본인 1명 (1인 총괄 프로젝트) — 시장조사부터 UI/UX 디자인까지 전 과정 수행",
    result:
      "• 환경 친화적 가치 입증\n• 타깃 확장성 검증\n• 디자인 완성도 및 바이럴 최적화",
  },
  megawash: {
    cardTitle: "MEGA WASH",
    images: ["image/megawash_detail.png"],
    title:
      "대용량 생활화학 제품 브랜드 메가워시 세탁세제 상세페이지 분석 및 기획",
    name: "대용량 생활화학 제품 브랜드 메가워시 세탁세제 상세페이지",
    created: "2025/12/22 → 2025/12/26",
    type: [
      ["PhotoShop", "#8b4444"],
      ["Illerstrator", "#6b4a8b"],
    ],
    url: "https://www.figma.com/design/6tb8HKXOFXcoVhavAxGyZ4/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=0-1&t=1x6saWinSK02jiIe-1",
    banner: "linear-gradient(155deg,#030d16,#081a2c)",
    overview:
      "대용량 가성비와 세척력이 직관적으로 보이도록 상세페이지 정보 구조(IA) 설계",
    work: "• 핵심 셀링 포인트 기반 레이아웃 구조화\n• 인증 마크 및 신뢰도 강조 비주얼 배치\n• 대용량·가성비 강점 메인 카피 연결",
    team: "본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 소구점 카피라이팅으로 제품 신뢰도 확보\n• 인증 엠블럼 배치로 기능성 전문성 강화\n• 스캔러블 레이아웃으로 구매 전환율 제고",
  },
  alaska: {
    cardTitle: "ALASKA TOPPER",
    images: [
      "image/alaska_card_1.jpg",
      "image/alaska_card_2.jpg",
      "image/alaska_card_3.jpg",
    ],
    title: "이커머스 플랫폼 입사 전형 실무 디자인 능력 검증 테스트 (1인 총괄)",
    name: "이커머스 플랫폼 입사 전형 실무 디자인 능력 검증 테스트",
    created: "2026/01/05",
    type: [
      ["PhotoShop", "#8b4444"],
      ["Illerstrator", "#6b4a8b"],
    ],
    url: "비어 있음",
    banner: "linear-gradient(155deg,#040a14,#081628)",
    overview:
      "이커머스 플랫폼 입사 전형 실무 디자인 능력 검증 테스트 (1인 총괄)",
    work: "• 구매 전환 중심 배너 UI 기획 (할인율·판매량 강조)\n• 제품 콘셉트별 컬러 톤 다각화 시안 도출\n• 순위·인증 지표 엠블럼으로 신뢰도 강화",
    team: "• 본인 1명 (제한 기간 내 단독 과제 수행)",
    result:
      "• 폰트 스케일 강조로 모바일 가독성 강화\n• 얼음 그래픽 등 브랜드 맞춤형 비주얼 구현\n• 카피→제품→CTA 흐름 설계로 전환 최적화",
  },
  oneday: {
    cardTitle: "ONEDAY CREW",
    images: ["image/oneday_detail.png"],
    title: "원데이크루 프리미엄 소셜 모임 랜딩페이지 디자인",
    name: "20대와 30대 직장인을 위한 취향 기반 원데이 그루 서비스 구축 프로젝트",
    created: "2026/06/01 → 2026/06/05",
    type: [
      ["FIGMA", "#6b4a8b"],
      ["PhotoShop", "#8b4444"],
      ["ChatGPT", "#10a37f"],
      ["Gemini", "#4285f4"],
    ],
    url: "https://www.figma.com/proto/CrDkVKJIVRfvN9Lv6TAK2T/%EC%97%AC%EC%9E%AC%EC%A4%80---%EB%9E%9C%EB%94%A9%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=3-2&t=5DrMRH8ry34Pmjuq-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    banner: "linear-gradient(155deg,#0a0512,#180e2c)",
    overview:
      "20~30대 타깃 소셜 모임 서비스의 회원 가입 전환을 위한 랜딩페이지 UI/UX 디자인",
    work: "• 가입 전환율 제고를 위한 카드 슬라이더·폼 설계\n• 인디고·퍼플 컬러의 프리미엄 브랜드 비주얼\n• 12그리드 기반 반응형 와이어프레임 구축",
    team: "• 본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 컴포넌트화로 개발 협업 프로세스 최적화\n• 폰트 위계 조정으로 정보 전달 가독성 강화\n• 기획부터 그래픽까지 UI/UX 전 과정 총괄",
  },
  skin: {
    cardTitle: "BRAND BANNER",
    images: [
      "image/skin_1.png",
      "image/skin_2.png",
      "image/skin_3.png",
      "image/skin_4.png",
      "image/skin_5.png",
      "image/skin_6.png",
      "image/skin_7.png",
      "image/skin_8.png",
      "image/skin_9.png",
      "image/skin_10.png",
    ],
    layout: "skin-gallery",
    title: "이커머스 라이프스타일 브랜드 프로모션 배너 디자인",
    name: "브랜드 프로모션 배너 디자인",
    created: "2026/04/27 → 2026/04/30",
    type: [
      ["PhotoShop", "#8b4444"],
      ["Illerstrator", "#6b4a8b"],
    ],
    banner: "linear-gradient(155deg,#081303,#16280e)",
    overview:
      "이커머스 라이프스타일 브랜드의 시즌 프로모션 배너를 단독 기획·제작한 프로젝트",
    work: "• 카테고리별 무드보드 수립 (뷰티·바캉스 컬러 매칭)\n• 소구 카피 중심 레이아웃 구조화\n• 인물·텍스트 균형 배치로 디지털 뷰포트 최적화",
    team: "• 본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 컬러 블록·트렌디 쉐이프로 모바일 주목도 제고\n• 폰트 스케일 대비로 메시지 가독성 강화\n• 스캔러블 구성으로 커머스 레이아웃 완성",
  },
  miseki: {
    cardTitle: "VISUAL ARCHIVE",
    images: [
      "image/miseki_1.png",
      "image/miseki_2.png",
      "image/miseki_3.png",
      "image/notjust_1.png",
      "image/notjust_2.png",
      "image/notjust_3.png",
      "image/notjust_4.png",
      "image/notjust_5.png",
      "image/paradigm_1.png",
      "image/paradigm_2.png",
      "image/paradigm_3.png",
      "image/paradigm_4.png",
      "image/paradigm_5.png",
    ],
    layout: "multi-featured",
    title: "패션 브랜드 SNS 프로모션 및 비주얼 디자인 아카이브",
    name: "Fashion Brand SNS Promotion & Visual Design",
    created: "2026/05/01 → 2026/05/08",
    type: [["PhotoShop", "#8b4444"]],
    url: "비어 있음",
    banner: "linear-gradient(155deg,#0a0a0a,#141414)",
    overview:
      "패션 브랜드 3건의 SNS 프로모션 배너 및 메인 비주얼 디자인 (MisekiSeoul · MYNAMEISPETER · PARADIGMfilm) — 브랜드별 톤앤매너에 맞춘 감성 비주얼 기획",
    work: "",
    team: "",
    result: "",
  },
  notjust: {
    cardTitle: "FASHION ARTWORK",
    images: ["image/notjust_card_1.png", "image/notjust_card_2.png"],
    layout: "featured-duo",
    title: "영 타깃 중심의 스트리트 패션 그래픽 아트워크 시리즈",
    name: "영 타깃 중심의 스트리트 패션 그래픽 아트워크 시리즈",
    created: "2026/04/13 → 2026/04/15",
    type: [
      ["PhotoShop", "#8b4444"],
      ["Illerstrator", "#6b4a8b"],
    ],
    url: "비어 있음",
    banner: "linear-gradient(155deg,#040818,#0c1428)",
    overview:
      "2030 영 타깃을 겨냥한 스트리트 패션 아트워크 시리즈를 단독 기획·제작한 프로젝트",
    work: "• 캘리그라피·그라피티 서체로 타이포그래피 디자인\n• 핸드 드로잉·텍스처 레이어 오버레이 연출\n• 보색 대비 컬러로 비주얼 밸런스 설계",
    team: "• 본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 마스킹·오버레이로 하이엔드 그래픽 완성도 제고\n• 스트리트 브랜드 아이덴티티 감각적으로 재현\n• 다각적 레이어 구조로 정밀한 마크업 기반 마련",
  },
  bagel: {
    cardTitle: "POSTER DESIGN",
    images: [
      "image/poster_card_1.png",
      "image/poster_card_2.png",
      "image/poster_card_3.png",
      "image/poster_card_4.jpg",
    ],
    title: "콘셉트 맞춤형 시각 아트워크 및 광고 포스터 기획",
    name: "콘셉트 맞춤형 시각 아트워크 및 광고 포스터 기획",
    created: "2025/12/15 → 2025/12/19",
    type: [["PhotoShop", "#8b4444"]],
    url: "비어 있음",
    banner: "linear-gradient(155deg,#d8c090,#e8d4a8)",
    overview:
      "다양한 브랜드 콘셉트에 맞춘 시각 그래픽 및 광고 포스터를 단독 기획·제작한 프로젝트",
    work: "• 비즈니스별 맞춤형 무드보드 및 비주얼 그래픽 설계\n• 정밀 셀렉션 툴로 이미지 추출 및 레이어 합성\n• 타이포그래피·오브젝트 배치 최적화",
    team: "• 본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 감각적 배경 합성으로 브랜드 몰입감 극대화\n• 정밀한 이미지 프로세싱으로 완성도 제고\n• 스캔러블 정보 구조로 메시지 전달력 강화",
  },
  puzzly: {
    title: "YOUTH HUB ALL<br/>Plizy — Youth Community",
    name: "플랫폼 UI/UX 디자인 및 웹 퍼블리싱",
    created: "2026/05/29 → 2026/06/12",
    type: [
      ["FIGMA", "#6b4a8b"],
      ["PHOTOSHOP", "#8b4444"],
      ["Illustrator", "#b5651d"],
      ["Visual Studio Code", "#007acc"],
      ["ChatGPT", "#10a37f"],
      ["Gemini", "#3d7a5c"],
    ],
    siteUrl: "https://daitda-one.vercel.app/",
    overview:
      "청년 정책 정보를 한눈에 보여주는 플랫폼 UI/UX 디자인 및 웹 퍼블리싱 프로젝트",
    work: "• 웹 표준 기반 플랫폼 UI 구조 설계\n• 개발 구조 고려한 피그마 컴포넌트 시스템 구축\n• 생성형 AI 활용한 기획·퍼블리싱 리드",
    team: "팀원 참여 (UI/UX·퍼블리싱 담당) — 기획 조율 및 신속한 수정 대응",
    result:
      "• 사용자 중심 인터페이스 검증\n• 컴포넌트 모듈화로 개발 리드 타임 단축\n• 신속한 피드백 반영 및 디버깅 최적화",
  },
  "changwon-redesign": {
    title: "CHANGWON REDESIGN<br/>City Promotion Website",
    name: "창원특례시 홍보 사이트 리디자인",
    created: "2026/07/01 → 2026/07/10",
    type: [
      ["FIGMA", "#6b4a8b"],
      ["PHOTOSHOP", "#8b4444"],
      ["Illustrator", "#b5651d"],
      ["ChatGPT", "#10a37f"],
      ["Visual Studio Code", "#007acc"],
      ["Gemini", "#3d7a5c"],
    ],
    url: "비어 있음",
    siteUrl: "https://changwon-redesign.vercel.app/",
    overview:
      "기존 창원특례시 웹사이트의 복잡하고 노후화된 레이아웃을 전면 개편한 리디자인 프로젝트. 관공서 특유의 딱딱한 이미지에서 벗어나, 창원의 역사와 매력을 한눈에 전달하는 스토리텔링형 반응형 웹사이트 제작을 목표로 함",
    work: "• 메인 비주얼 개선: 꽉 막힌 메인 화면을 진해 야경 대형 히어로 이미지로 교체해 첫인상을 트렌디하게 바꿈\n• 구조 슬림화: 복잡했던 메뉴를 연대기, 3개 도시, 유명인, 축제, 맛집 5개로 압축하고 원페이지 스크롤로 설계함\n• 텍스트 시각화: 복잡한 줄글 정보들을 타임라인 형태와 바둑판식 카드 레이아웃으로 변경해 가독성을 높임\n• 코드 직접 구현: 디자인 시안을 바탕으로 직접 소스 코드를 수정하고 웹 퍼블리싱까지 완료함",
    team: "본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 관공서 이미지 탈피: 폰트, 여백, 감성적인 미디어를 활용해 현대적인 도시 브랜드 느낌을 냄\n• 정보 탐색 최적화: 불필요한 클릭 단계를 없애고 비주얼 중심으로 배치해 원하는 정보를 찾기 쉽게 만듦\n• 풀스택 역량 증명: UI/UX 기획부터 디자인, 퍼블리싱까지 전 과정을 혼자 이끌어내며 실무 능력을 입증함",
  },
  midnight: {
    title: "MIDNIGHT<br/>Shop When The City Sleeps",
    cardTitle: "MIDNIGHT",
    name: "MIDNIGHT",
    created: "",
    type: [],
    url: "비어 있음",
    siteUrl: "https://midnight-nu-ten.vercel.app/",
    overview: "",
    work: "",
    team: "",
    result: "",
  },
  "changwon-dark": {
    title: "CHANGWON FOODMAP<br/>Masan Restaurant Map",
    name: "Web Publishing",
    created: "2026/05/11 → 2026/05/22",
    type: [
      ["FIGMA", "#6b4a8b"],
      ["PHOTOSHOP", "#8b4444"],
      ["Illustrator", "#b5651d"],
      ["Visual Studio Code", "#007acc"],
      ["ChatGPT", "#10a37f"],
      ["Gemini", "#3d7a5c"],
    ],
    url: "#",
    siteUrl: "https://changwonfinish.vercel.app/",
    overview:
      "창원특례시 관광·맛집 정보를 스크롤 기반 인터페이스로 구현한 웹 퍼블리싱 프로젝트",
    work: "• 지역 정보(역사·관광·맛집·축제) 구조 설계\n• 슬로건·카드뉴스 스타일의 신뢰감 있는 비주얼 구성\n• 슬라이더·탭 구조 등 피그마 컴포넌트 설계",
    team: "본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 카드뉴스 형태 레이아웃으로 가독성 검증\n• 탭·슬라이더 모듈로 콘텐츠 탐색성 제고\n• 시맨틱 마크업으로 사이트 구조 안정성 확보",
  },
  dosirack: {
    title: "DOSIRAK USIM<br/>No Carrier Needed",
    name: "서비스 소개 웹사이트 클론 코딩",
    created: "2026/04/27 → 2026/05/04",
    type: [
      ["Visual Studio Code", "#8b4444"],
      ["ChatGPT", "#6b4a8b"],
      ["Gemini", "#3d7a5c"],
    ],
    url: "#",
    siteUrl: "https://dosirakclone.vercel.app/",
    overview: "해외여행 통신 서비스 브랜드 도시락통 메인 페이지 분석 및 클론코딩",
    work: "• 와이드 배너·비대칭 카드뉴스 레이아웃 마크업\n• AOS 라이브러리 연동 스크롤 애니메이션 구현\n• 자바스크립트 기반 탑 버튼 인터랙션 제작",
    team: "본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 와이드 배너·카드뉴스 균형 배치로 직관성 제고\n• AOS 연동으로 세련된 스크롤 인터랙션 연출\n• 탑 버튼 구현으로 탐색 편의성 강화",
  },
  stx: {
    title: "남선알미늄(STX건설)<br/>기업용 웹사이트 클론 코딩",
    name: "기업용 웹사이트 클론 코딩",
    created: "2026/04/17 → 2026/04/24",
    type: [
      ["Visual Studio Code", "#8b4444"],
      ["ChatGPT", "#6b4a8b"],
      ["Gemini", "#3d7a5c"],
    ],
    url: "https://stxclone.ve...",
    siteUrl: "https://stxclone.vercel.app/",
    overview: "남선알미늄 건설사업부문 메인 페이지 분석 및 클론코딩",
    work: "• 호버 시 슬라이드 다운되는 GNB 내비게이션 구현\n• 이미지 고정형 패럴랙스 스크롤 효과 제작\n• 웹 표준 준수 시맨틱 마크업 및 구조화",
    team: "본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 자바스크립트 기반 동적 인터랙션 전면 적용\n• 부드러운 드롭다운 GNB 호버 효과 완성\n• 패럴랙스 스크롤로 몰입감 있는 화면 전환 연출",
  },
  paris: {
    title: "PARIS CROISSANT<br/>No.1 Egg",
    name: "메인 페이지 클론 코딩",
    created: "2026/03/30 → 2026/04/10",
    type: [
      ["Visual Studio Code", "#8b4444"],
      ["ChatGPT", "#6b4a8b"],
      ["Gemini", "#3d7a5c"],
    ],
    url: "#",
    siteUrl: "https://pariscroissantclone.vercel.app/",
    overview: "파리크라상 브랜드 사이트 메인 페이지 분석 및 클론코딩",
    work: "• 대형 배너·3단 서비스 섹션 등 복잡 그리드 마크업\n• 인스타그램 12분할 멀티 카드 레이아웃 설계\n• 이미지·텍스트 오버레이 가독성 확보",
    team: "본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 복잡한 그리드·다차원 레이아웃 완벽 구현\n• 3단 서비스·12분할 인스타그램 다단 완성\n• 반응형 마크업으로 가독성 극대화",
  },
  musinsa: {
    title: "MUSINSA<br/>Clone Project",
    name: "메인 페이지 클론 코딩",
    created: "2026/03/20 → 2026/03/27",
    type: [
      ["Visual Studio Code", "#8b4444"],
      ["ChatGPT", "#6b4a8b"],
      ["FIGMA", "#b5651d"],
      ["Gemini", "#3d7a5c"],
    ],
    url: "#",
    siteUrl: "https://musinsa-pied.vercel.app/",
    overview: "프론트엔드 개발 입문 후 처음으로 진행한 단독 첫 클론 코딩 프로젝트",
    work: "• 무신사 메인 페이지 레이아웃 1:1 매칭 마크업\n• HTML/CSS 정적 하드코딩 실습\n• 상품 썸네일 이미지 비율 최적화",
    team: "본인 1명 (개발 입문 후 최초로 완수한 1인 단독 프로젝트)",
    result:
      "• 이커머스 플랫폼 구조 분석 및 첫 클론 코딩 완수\n• GNB~푸터 레이아웃 1:1 매칭 재현\n• 정적 마크업 실습으로 웹 퍼블리싱 기본기 확립",
  },
};

/* 전역 팝업 함수 선언 (HTML 버튼의 onclick 스크립트와 바인딩되도록 전역 윈도우 객체에 바인딩) */
window.openSiteUrl = function (id) {
  const d = PF_DATA[id];
  if (!d) return;
  const target = d.siteUrl || d.url;
  if (target && target !== "#" && !target.startsWith("비어")) {
    window.open(target, "_blank", "noopener,noreferrer");
  }
};

window.openInfoModal = function (id) {
  const d = PF_DATA[id];
  if (!d) return;
  document.getElementById("pf-info-title").innerHTML = d.cardTitle || d.title;
  document.getElementById("pf-meta-name").textContent = d.name;
  document.getElementById("pf-meta-created").textContent = d.created || "—";
  const typeEl = document.getElementById("pf-meta-type");
  if (typeEl) {
    typeEl.innerHTML = "";
    d.type.forEach(([label, color]) => {
      const span = document.createElement("span");
      span.className = "pf-meta-tag";
      span.textContent = label;
      span.style.background = color;
      typeEl.appendChild(span);
    });
  }
  const urlRow = document.getElementById("pf-meta-url-row");
  const urlEl = document.getElementById("pf-meta-url");
  const hasUrl = d.url && d.url !== "#" && !d.url.startsWith("비어");
  if (urlRow) urlRow.style.display = hasUrl ? "" : "none";
  if (urlEl && hasUrl) {
    // 여러 URL이 " / " 로 구분된 경우 각각 링크로 렌더링
    const urls = d.url
      .split(" / ")
      .map((u) => u.trim())
      .filter(Boolean);
    urlEl.innerHTML = urls
      .map(
        (u, i) =>
          `<a href="${u}" target="_blank" rel="noopener noreferrer" style="display:block;margin-bottom:2px">${u.length > 50 ? u.substring(0, 50) + "..." : u}</a>`,
      )
      .join("");
  }

  function fillSection(rowId, bodyId, text) {
    const row = document.getElementById(rowId);
    const body = document.getElementById(bodyId);
    const hasContent = !!(text && text.trim());
    if (row) row.style.display = hasContent ? "" : "none";
    if (body) body.innerHTML = hasContent ? text.replace(/\n/g, "<br>") : "";
  }

  fillSection("pf-sec-overview-row", "pf-sec-overview", d.overview);
  fillSection("pf-sec-work-row", "pf-sec-work", d.work);
  fillSection("pf-sec-team-row", "pf-sec-team", d.team);
  fillSection("pf-sec-result-row", "pf-sec-result", d.result);

  document.getElementById("pf-info-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeInfoModal = function () {
  const infoOverlay = document.getElementById("pf-info-overlay");
  if (infoOverlay) infoOverlay.classList.remove("open");
  document.body.style.overflow = "";
};

window.openGalleryModal = function (id) {
  const d = PF_DATA[id];
  if (!d) return;
  const scroll = document.getElementById("pf-gallery-scroll");
  if (!scroll) return;
  const images =
    d.images && d.images.length ? d.images : [null, null, null, null];
  const layout = d.layout || "default"; // "default" | "featured-duo"
  scroll.innerHTML = "";

  function makeImg(src, name, i) {
    if (src) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${name} - ${i + 1}`;
      img.style.cssText =
        "width:100%;display:block;border-radius:6px;user-select:none;pointer-events:none;";
      return img;
    } else {
      const ph = document.createElement("div");
      ph.className = "pf-gallery-placeholder";
      ph.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="#444" stroke-width="1.5" width="44" height="44"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg><span>이미지 준비 중</span>`;
      return ph;
    }
  }

  if (layout === "featured-duo" && images.length >= 3) {
    // 1번 크게 위, 2번+3번 나란히 아래
    const wrap = document.createElement("div");
    wrap.onclick = (e) => e.stopPropagation();
    wrap.style.cssText =
      "width:100%;display:flex;flex-direction:column;gap:12px;";

    const top = document.createElement("div");
    top.appendChild(makeImg(images[0], d.name, 0));
    wrap.appendChild(top);

    const bottom = document.createElement("div");
    bottom.style.cssText =
      "display:grid;grid-template-columns:1fr 1fr;gap:12px;";
    bottom.appendChild(makeImg(images[1], d.name, 1));
    bottom.appendChild(makeImg(images[2], d.name, 2));
    wrap.appendChild(bottom);

    // 나머지 이미지 2개씩 나란히 배치
    let ri = 3;
    while (ri < images.length) {
      if (ri + 1 < images.length) {
        const row = document.createElement("div");
        row.style.cssText =
          "display:grid;grid-template-columns:1fr 1fr;gap:12px;";
        row.appendChild(makeImg(images[ri], d.name, ri));
        row.appendChild(makeImg(images[ri + 1], d.name, ri + 1));
        wrap.appendChild(row);
        ri += 2;
      } else {
        const single = document.createElement("div");
        single.appendChild(makeImg(images[ri], d.name, ri));
        wrap.appendChild(single);
        ri++;
      }
    }
    scroll.appendChild(wrap);
  } else if (layout === "featured-quad" && images.length >= 5) {
    // 1번 크게 + 2,3 나란히 + 4,5 나란히
    const wrap = document.createElement("div");
    wrap.onclick = (e) => e.stopPropagation();
    wrap.style.cssText =
      "width:100%;display:flex;flex-direction:column;gap:12px;";

    // 상단: 1번 크게
    const top = document.createElement("div");
    top.appendChild(makeImg(images[0], d.name, 0));
    wrap.appendChild(top);

    // 중단: 2번 + 3번
    const mid = document.createElement("div");
    mid.style.cssText = "display:grid;grid-template-columns:1fr 1fr;gap:12px;";
    mid.appendChild(makeImg(images[1], d.name, 1));
    mid.appendChild(makeImg(images[2], d.name, 2));
    wrap.appendChild(mid);

    // 하단: 4번 + 5번
    const bot = document.createElement("div");
    bot.style.cssText = "display:grid;grid-template-columns:1fr 1fr;gap:12px;";
    bot.appendChild(makeImg(images[3], d.name, 3));
    bot.appendChild(makeImg(images[4], d.name, 4));
    wrap.appendChild(bot);

    // 추가 이미지
    for (let i = 5; i < images.length; i++) {
      const extra = document.createElement("div");
      extra.appendChild(makeImg(images[i], d.name, i));
      wrap.appendChild(extra);
    }
    scroll.appendChild(wrap);
  } else if (layout === "multi-featured") {
    // 구조: 0크게 / 1+2나란히 / 3크게 / 4+5나란히 / 6+7나란히
    const wrap = document.createElement("div");
    wrap.onclick = (e) => e.stopPropagation();
    wrap.style.cssText =
      "width:100%;display:flex;flex-direction:column;gap:12px;";

    function addSingle(i) {
      if (i >= images.length) return;
      const el = document.createElement("div");
      el.appendChild(makeImg(images[i], d.name, i));
      wrap.appendChild(el);
    }
    function addPair(i) {
      if (i >= images.length) return;
      const row = document.createElement("div");
      row.style.cssText =
        "display:grid;grid-template-columns:1fr 1fr;gap:12px;";
      row.appendChild(makeImg(images[i], d.name, i));
      if (i + 1 < images.length)
        row.appendChild(makeImg(images[i + 1], d.name, i + 1));
      wrap.appendChild(row);
    }

    // 고정 레이아웃:
    // [0]크게 / [1,2]나란히 / [3]크게 / [4,5]나란히 / [6,7]나란히 / [8]크게 / [9,10]나란히 / [11,12]나란히
    const layout_plan = [
      { type: "single", idx: 0 },
      { type: "pair", idx: 1 },
      { type: "single", idx: 3 },
      { type: "pair", idx: 4 },
      { type: "pair", idx: 6 },
      { type: "single", idx: 8 },
      { type: "pair", idx: 9 },
      { type: "pair", idx: 11 },
    ];
    layout_plan.forEach(({ type, idx }) => {
      if (idx >= images.length) return;
      if (type === "single") addSingle(idx);
      else addPair(idx);
    });

    scroll.appendChild(wrap);
  } else if (layout === "skin-gallery") {
    // 1장크게 / 2장나란히 / 2장나란히 반복
    const wrap = document.createElement("div");
    wrap.onclick = (e) => e.stopPropagation();
    wrap.style.cssText =
      "width:100%;display:flex;flex-direction:column;gap:12px;";

    function addS(i) {
      if (i >= images.length) return;
      const el = document.createElement("div");
      el.appendChild(makeImg(images[i], d.name, i));
      wrap.appendChild(el);
    }
    function addP(i) {
      if (i >= images.length) return;
      const row = document.createElement("div");
      row.style.cssText =
        "display:grid;grid-template-columns:1fr 1fr;gap:12px;";
      row.appendChild(makeImg(images[i], d.name, i));
      if (i + 1 < images.length)
        row.appendChild(makeImg(images[i + 1], d.name, i + 1));
      wrap.appendChild(row);
    }

    // 섹션1: 0크게 / 1,2나란히 / 3,4나란히
    addS(0);
    addP(1);
    addP(3);
    // 섹션2: 5크게 / 6,7나란히 / 8,9나란히
    if (images.length > 5) {
      addS(5);
      addP(6);
      addP(8);
    }

    scroll.appendChild(wrap);
  } else {
    // 기본: 세로 나열
    images.forEach((src, i) => {
      const item = document.createElement("div");
      item.className = "pf-gallery-item";
      item.onclick = (e) => e.stopPropagation();
      item.appendChild(makeImg(src, d.name, i));
      scroll.appendChild(item);
    });
  }

  document.getElementById("pf-gallery-count-label").textContent =
    `${images.length} IMAGES`;
  scroll.scrollTop = 0;
  document.getElementById("pf-gallery-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeGalleryModal = function () {
  const galleryOverlay = document.getElementById("pf-gallery-overlay");
  if (galleryOverlay) galleryOverlay.classList.remove("open");
  document.body.style.overflow = "";
};

/* DOM 로드가 끝나면 이벤트 리스너 및 애니메이션 초기화 */
window.addEventListener("DOMContentLoaded", () => {
  // 닫기 버튼 이벤트 등록
  const infoClose = document.getElementById("pf-info-close");
  if (infoClose) infoClose.addEventListener("click", window.closeInfoModal);

  const infoOverlay = document.getElementById("pf-info-overlay");
  if (infoOverlay)
    infoOverlay.addEventListener("click", (e) => {
      if (e.target.id === "pf-info-overlay") window.closeInfoModal();
    });

  const galleryClose = document.getElementById("pf-gallery-close");
  if (galleryClose)
    galleryClose.addEventListener("click", (e) => {
      e.stopPropagation();
      window.closeGalleryModal();
    });

  const galleryOverlay = document.getElementById("pf-gallery-overlay");
  if (galleryOverlay)
    galleryOverlay.addEventListener("click", window.closeGalleryModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closeInfoModal();
      window.closeGalleryModal();
    }
  });

  /*──────── MARQUEE SETUP ────────*/
  const C1_TEXTS = ["기획하는 디자이너 / 논리적인 퍼블리셔"];
  const C2_TEXTS = [
    "UIUX DESIGN",
    "WEB DESIGN",
    "FIGMA",
    "PHOTOSHOP",
    "ILLURSTRAOR",
    "CAFE24",
    "VISUALSTUDIO CODE",
    "CHATGPT",
    "GEMINI",
  ];

  function buildC1Item(t) {
    const s = document.createElement("span");
    s.className = "marquee-item";
    s.innerHTML = `${t}<span class="sep">◆</span>`;
    return s;
  }
  let _c2cnt = 0;
  function buildC2Item(t, i) {
    const s = document.createElement("span");
    s.className = `marquee-item ${_c2cnt++ % 2 === 0 ? "color-black" : "color-red"}`;
    s.innerHTML = `${t}<span class="sep">◆</span>`;
    return s;
  }
  function fillTrack(el, texts, fn) {
    if (!el) return 0;
    texts.forEach((t, i) => el.appendChild(fn(t, i)));
    const copies = Math.ceil((window.innerWidth * 4) / el.scrollWidth) + 3;
    for (let c = 0; c < copies; c++)
      texts.forEach((t, i) => el.appendChild(fn(t, i)));
    return el.scrollWidth / 2;
  }
  function startMarquee(el, speed, reset) {
    if (!el) return;
    let p = 0;
    (function tick() {
      p += speed;
      if (p >= reset) p -= reset;
      el.style.transform = `translateX(${-p}px)`;
      requestAnimationFrame(tick);
    })();
  }

  [
    ["hero-r2", 0.7, C2_TEXTS, buildC2Item],
    ["c2-r1", 0.75, C2_TEXTS, buildC2Item],
    ["c1-r3", 0.6, C1_TEXTS, buildC1Item],
    ["c2-r3", 0.8, C2_TEXTS, buildC2Item],
  ].forEach(([id, sp, texts, fn]) => {
    const el = document.getElementById(id);
    if (!el) return;
    startMarquee(el, sp, fillTrack(el, texts, fn));
  });

  /*──────── INTERSECTION OBSERVER (REVEAL) ────────*/
  const io = new IntersectionObserver(
    (e) =>
      e.forEach((x) => {
        if (x.isIntersecting) x.target.classList.add("visible");
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /*──────── PORTFOLIO CARD STAGGERED REVEAL ────────*/
  document
    .querySelectorAll(
      '[style*="display:grid"], .about-cards, .about-bottom-row, .ai-workflow-grid',
    )
    .forEach((grid) => {
      const cards = grid.querySelectorAll(".pf-card-reveal");
      cards.forEach((card, i) => {
        card.style.transitionDelay = `${(i % 4) * 130}ms`;
      });
    });

  const pfCardIO = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pf-card-visible");
          pfCardIO.unobserve(entry.target);
        }
      }),
    { threshold: 0.1, rootMargin: "0px 0px -20px 0px" },
  );
  document
    .querySelectorAll(".pf-card-reveal")
    .forEach((el) => pfCardIO.observe(el));

  /*──────── TOP BUTTON ────────*/
  const topBtn = document.getElementById("top-btn");
  if (topBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        topBtn.classList.add("show");
      } else {
        topBtn.classList.remove("show");
      }
    });
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /*──────── HERO → CONTENT 원(circle) 스무스 전환 애니메이션 ────────*/
  (function () {
    const heroBadges = document.querySelectorAll(".hero-badge");
    const heroStickyWrap = document.querySelector(".hero-sticky-wrap");
    const contentWrap = document.querySelector(".content-wrap");
    if (!heroBadges.length || !heroStickyWrap || !contentWrap) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    // 원(circle)마다 커지기 시작하는 타이밍을 살짝씩 어긋나게(stagger) 줘서
    // "하나씩 순서대로 커지는" 느낌을 만든다.
    const STAGGER = 0.16;
    const badgeCount = heroBadges.length;
    const badgeMaxScale = new Array(badgeCount).fill(6);

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
    function easeInQuad(t) {
      return t * t;
    }

    // 화면 크기가 바뀌어도 원이 화면 대각선을 확실히 덮을 수 있도록
    // 각 원의 지름 대비 필요한 배율을 계산해둔다.
    function measure() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const diagonal = Math.sqrt(vw * vw + vh * vh);
      heroBadges.forEach((badge, i) => {
        const size = badge.getBoundingClientRect().width || 1;
        badgeMaxScale[i] = (diagonal / size) * 1.15;
      });
    }
    measure();
    window.addEventListener("resize", measure);
    // 진입 애니메이션(badgePopIn)이 끝난 뒤 최종 크기 기준으로 다시 계산
    setTimeout(measure, 2500);

    let ticking = false;

    function update() {
      ticking = false;
      const vh = window.innerHeight;
      // 전환 구간: 스크롤이 0 → 1 화면 높이 만큼 내려가는 동안 진행된다.
      const progress = Math.min(Math.max(window.scrollY / vh, 0), 1);

      // 다음 페이지(content-wrap)가 위로 올라오면서 동시에
      // 부드럽게 살아나도록 opacity + 살짝의 이동을 함께 준다.
      const contentEase = easeOutCubic(progress);
      contentWrap.style.opacity = String(contentEase);
      contentWrap.style.transform = `translateY(${(1 - contentEase) * 32}px)`;

      const span = 1 - (badgeCount - 1) * STAGGER;
      heroBadges.forEach((badge, i) => {
        const start = i * STAGGER;
        let local = (progress - start) / span;
        local = Math.min(Math.max(local, 0), 1);
        const grow = easeInQuad(local);
        const scale = 1 + grow * badgeMaxScale[i];
        const fade = 1 - easeInQuad(Math.min(local * 1.25, 1));

        // ⚠️ .hero-badge에는 badgePopIn 진입 애니메이션이 fill-mode: both로
        // 걸려 있어서, 애니메이션이 끝난 뒤에도 transform/opacity를 계속
        // 붙잡고 있다. CSS 우선순위상 애니메이션이 일반 인라인 스타일보다
        // 위이기 때문에 setProperty(...,'important')로 강제 덮어써야 한다.
        badge.style.setProperty("transform", `scale(${scale})`, "important");
        badge.style.setProperty("opacity", String(fade), "important");
        // 커지는 동안에는 next-page 위로 살짝 떠오르도록 z-index를 올려서
        // "원이 커지며 다음 페이지로 넘어가는" 애니메이션이 실제로 보이게 한다.
        badge.style.zIndex = local > 0 && local < 1 ? "20" : "";
      });
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  })();

  /*──────── CUSTOM CIRCLE CURSOR ────────*/
  const pfCursor = document.getElementById("pf-cursor");
  if (pfCursor) {
    let pfCursorX = 0,
      pfCursorY = 0,
      pfCursorCurX = 0,
      pfCursorCurY = 0;
    window.addEventListener("mousemove", (e) => {
      pfCursorX = e.clientX;
      pfCursorY = e.clientY;
      pfCursor.classList.add("show");
    });
    document.addEventListener("mouseleave", () =>
      pfCursor.classList.remove("show"),
    );
    function pfCursorLoop() {
      pfCursorCurX += (pfCursorX - pfCursorCurX) * 0.2;
      pfCursorCurY += (pfCursorY - pfCursorCurY) * 0.2;
      pfCursor.style.transform = `translate(${pfCursorCurX}px, ${pfCursorCurY}px) translate(-50%, -50%)`;
      requestAnimationFrame(pfCursorLoop);
    }
    pfCursorLoop();
    const pfInteractiveSelector =
      'a, button, .portfolio-card, .pf-view-btn, .hero-badge, .ai-card-flip, .pf-info-close, .pf-gallery-close, .top-btn, .hire-bottom, [onclick]';
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(pfInteractiveSelector)) {
        pfCursor.classList.add("hovering");
      }
    });
    document.addEventListener("mouseout", (e) => {
      const stillInside =
        e.relatedTarget && e.relatedTarget.closest
          ? e.relatedTarget.closest(pfInteractiveSelector)
          : null;
      if (e.target.closest(pfInteractiveSelector) && !stillInside) {
        pfCursor.classList.remove("hovering");
      }
    });
  }
});