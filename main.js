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
      "• 신입 주도형 브랜드 구축: 로고, 웹사이트(카페24), 상세페이지까지 1인 총괄 디자인\n• 커머스 최적화 화면 설계: 개발 구조(HTML/CSS)를 고려한 피그마 컴포넌트 설계 및 UI 구현\n• 브랜드 아이덴티티 강화: 수제화 가치를 극대화하는 톤앤매너 설정 및 메인 배너 기획",
    work: "• 브랜드 아이덴티티 및 컨셉 재정립\n• 비주얼 가이드 및 패키지 디자인 시스템 구축\n• 생성형 AI 기반의 크리에이티브 디렉팅",
    team: "본인 1명 (1인 총괄 프로젝트)\n\n• 초기 시장 조사 및 타깃 분석 등 마케팅 MD 관점의 기획부터 시작해, UI/UX 비주얼 디자인과 프로토타이핑까지 전 과정을 주도적으로 수행",
    result:
      "• 환경 친화적 가치 입증\n• 타깃 확장성 검증\n• 디지털 바이럴 최적화\n• 디자인 우수성",
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
    work: "• 핵심 셀링 포인트 기반 레이아웃 구조화 강력한 세정, 깔끔한 헹굼, 옷감 보호라는 3대 핵심 가치를 상단에 배치하여 소비자 직관성 제고\n• 인증 마크 및 비주얼 에셋 시각화 고농축 강력세정, 아토피 및 미세먼지 인증, 깨끗한 행굼력 등 제품의 안전성과 신뢰도를 보장하는 엠블럼 요소 배치\n• 대용량 가성비 비즈니스 모델 강조 찬물에도 잘 녹는 고농축 타입의 특성과 잔여를 걱정 없는 대용량 세제라는 특장점을 메인 카피로 연결",
    team: "• 본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 비즈니스 모델 맞춤형 상단 카피라이팅 구현 때때로 강하게 제거하는 고농축 대용량 세제의 소구점을 명확한 텍스트로 시각화하여 제품 신뢰도 확보\n• 소비자 안심 유도 디자인인 구조화 아토피 및 미세먼지 인증 엠블럼을 메인 제품 우측에 전면 배치하여 기능성 세제로서의 전문성 강화\n• 정보 전달 중심의 직관적 UI 최적화 대형 제품 이미지와 핵심 기능 요약을 한눈에 파악할 수 있는 스캔러블한 레이아웃을 완성하여 구매 전환율 제고",
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
    work: "• 구매 전환 중심의 배너 UI 기획 슈퍼쿨링 알래스카 토퍼 배너 내에 49% 할인율과 판매 돌파 수치를 강조한 오브젝트 배치\n• 제품 콘셉트별 인지 효과 다각화 시원한 알래스카 무드의 딥블루 톤과 빙결 텍스처의 라이트블루 톤등 타깃 최적화 시안 도출\n• 데이터 시각화 기반의 신뢰도 배치 꽃가글 빠이러스 상세 배너 하단에 쿠팡 및 네이버 1위 지표 엠블럼을 직관적으로 구조화",
    team: "• 본인 1명 (제한 기간 내 단독 과제 수행)",
    result:
      "• 셀링 포인트 시각화를 통한 가독성 강화 수치화된 프로모션 혜택(49% OFF, 1위 등)의 폰트 스케일을 극대화하여 모바일 환경에서의 가독성 제고\n• 브랜드 아이덴티티 맞춤형 그래픽 구현 제품의 핵심 기능인 강력한 클링감과 구취 제거력을 얼음 그래픽 및 조명 효과 래핑으로 명확히 표현\n• 상업적 목적의 레이아웃 최적화 상단 카피, 중앙 제품 뷰, 하단 엠블럼 및 CTA 버튼으로 이어지는 흐름을 설계하여 구매 전환 스크롤 최적화",
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
      "• 트렌디한 회원 유치 UI 설계 가입 전환율을 높이기 위해 카드 슬라이더와 직관적인 설문 폼 배치\n• 실무 협업형 피그마 작업 웹 표준 12 그리드 시스템 준수 및 개발 마크업을 고려한 컴포넌트화 완료\n• 고감도 브랜드 무드 완성 클래식 인디고 블루와 내온 퍼플 컬러를 활용한 프리미엄 비주얼 가공",
    work: "• 사용자의 가입 전환율을 높이기 위한 카드 슬라이더 및 인풋 폼 중심의 화면 설계\n• 클래식 인디고 블루와 내온 퍼플 컬러를 활용한 프리미엄 소셜 모임 브랜드 비주얼 가공\n• 반응형 웹 환경을 고려한 12 그리드 시스템 기반의 와이어프레임 및 레이아웃 구축",
    team: "• 본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 피그마 컴포넌트화 작업을 통한 개발 마크업 구조 고려 및 실무 협업 프로세스 최적화\n• 타겟 분석에 기반한 폰트 위계와 행간 자간 조절로 랜딩페이지 정보 전달 가독성 극대화\n• 기획부터 화면 설계 및 그래픽 소스 제작까지 전체 UI UX 과정을 1인 총괄로 완수",
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
      "이커머스 라이프스타일 브랜드의 시즌 마케팅 목적에 맞춰 디지털 환경에 최적화된 프로모션 배너 디자인을 단독 기획 및 제작한 프로젝트",
    work: "• 카테고리 맞춤형 비주얼 무드 보드 수립 청량하고 깨끗한 뷰티 톤앤매너(알로에 스킨토너)부터 화사하고 에너제틱한 바캉스 톤앤매너(인생샷 아이템)까지 최적화된 컬러 매칭 구현\n• 쇼구 카피 중심의 레이아웃 구조화 'UP TO 45% SALE', '매끈하게 촉촉하게' 등 핵심 세일즈 메시지와 제품 이미지가 한눈에 인지되도록 배너 레이아웃 설계\n• 디지털 미디어 최적화 오브젝트 배치 웹과 모바일 싱포트에서 시선의 흐름을 방해하지 않도록 정교한 마스킹 기술을 활용해 인물 모델과 텍스트의 균형 있는 배치 구현",
    team: "• 본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 상업용 마케팅 배너의 시각적 주목도 제고 비비드한 컬러 블록 효과와 트렌디한 쉐이프 요소를 결합하여 모바일 스크롤 환경에서 소비자의 시선을 사로잡는 배너 구성 완성\n• 텍스트 스케일 조절을 통한 메시지 전달력 강화 프로모션 타이틀, 할인율, 상시 혜택의 폰트 크기와 두께를 유기적으로 대비시켜 광고 정보의 전달력 및 가독성 극대화\n• 커머스 플랫폼 최적화 레이아웃 완성 제품의 소구점, 모델 뷰, 구매 유도 영역이 시각적으로 유기적으로 연결되는 스캔러블한 구성을 완성하여 비즈니스 효율성 확보",
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
      "각 패션 브랜드가 가진 고유의 톤앤매너를 분석하고, 시즌 런칭 및 인플루언서 협업 프로모션 목적에 맞추어 기획한 SNS 배너 및 이벤트 메인 비주얼 디자인입니다. 단순한 정보 전달을 넘어 브랜드의 페르소나를 극대화할 수 있는 타이포그래피와 레이아웃을 실험적으로 적용했습니다.\n\n━━ 작품소개 ━━\n\n작업물 1: MisekiSeoul\n• 콘셉트: 브랜드 콜라보레이션 기획전 팝업 / 메인 비주얼\n• 디자인 설명: 서정적이고 감성적인 재팬 미니멀리즘 무드를 극대화하기 위해 톤다운된 뉴트럴 컬러와 부드러운 빛망울(보케) 효과를 배경으로 사용했습니다. 깔끔한 서체와 원형 프레임을 활용해 안정적이면서도 감도 높은 브랜드 이미지를 전달하고자 했습니다.\n\n작업물 2: MYNAMEISPETER\n• 콘셉트: 인플루언서 협업 프로모션 SNS 배너 (Influencer's Pick)\n• 디자인 설명: 브랜드 특유의 스트릿하고 힙한 무드를 강조하기 위해 볼드하고 러프한 텍스처의 타이포그래피를 활용했습니다. 인물과 가방 아이템에 시선이 집중되도록 거친 찢어진 종이 느낌의 프레임 레이아웃으로 역동적인 느낌을 연출했습니다.\n\n작업물 3: PARADIGMfilm\n• 콘셉트: 2026 S/S 시즌 컬렉션 런칭 룩북 메인 배너\n• 디자인 설명: '여름의 자유로움과 클래식한 무드'라는 시즌 테마에 맞춰 빈티지한 페이퍼 필름 감성의 배경을 연출했습니다. 사선 텍스트 배열과 콜라주 형태의 인물 배치를 통해 정형화되지 않은 내추럴한 실루엣을 시각화했습니다.\n\n참여도: 디자인 100% (기획 및 그래픽 비주얼 라이징)",
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
      "2030 영 타깃의 라이프스타일과 감성을 반영하여 포토샵의 고도화된 그래픽 레이어링 기술을 기반으로 스트리트 패션 아트워크 시리즈를 단독 기획 및 제작한 프로젝트",
    work: "• 스트리트 감성의 타이포그래피 디자인 캘리그라피 스타일의 강렬한 레드 서체 및 그라피티 스타일의 스포티 폰트를 배치하여 텍스트를 하나의 조형적인 그래픽 요소로 구조화\n• 핸드 드로잉 요소를 활용한 레이어 오버레이 실사 인물 소스 위에 자유분방한 느낌의 텍스처, 라인 일러스트, 네온 컬러 오브젝트를 래핑하여 차별화된 무드 연출\n• 보색 대비를 활용한 비주얼 밸런싱 설계 다크 톤 배경과 대비되는 비비드한 블루, 옐로우, 레드 컬러를 과감하게 매칭하여 그래픽의 입체감과 몰입도 극대화",
    team: "• 본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 정교한 그래픽 프로세싱을 통한 아트워크 완성도 제고 인물과 이질적인 드로잉 소스가 자연스럽게 맞물리도록 마스킹 및 오버레이 효과를 적용하여 완성도 높은 하이엔드 그래픽 도출\n• 영 타깃 특화 브랜드 아이덴티티 시각화 정형화된 커머스 레이아웃의 틀을 깨고 합하고 자유분방한 스트리트 브랜드의 콘셉트를 감각적인 아트워크로 완벽히 재현S\n• 시각 자산의 다각적 레이어 구조 확립 배경, 인물 모델, 라인 일러스트, 메인 타이포가 유기적으로 겹치는 다단 레이어 구조 속에서 시각적 뭉개짐 없는 정밀한 수치 계산 마크업 기반 마련",
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
      "다양한 비즈니스 카테고리의 브랜드 콘셉트를 분석하여 각 브랜드 아이덴티티에 최적화된 시각 그래픽 및 광고 포스터를 단독 기획 및 제작한 프로젝트다. 포토샵의 정교한 이미지 프로세싱 기술을 기반으로 텍스처 합성, 타이포그래피 배치, 레이아웃 다각화를 실습하며 비주얼 기획 역량을 강화",
    work: "• 브랜드 맞춤형 비주얼 그래픽 설계 피트니스 이벤트, 빈티지 베이커리, 푸드 메뉴판 등 각 비즈니스 특성에 맞춘 고유의 무드 보드 수립 및 디자인 구현\n• 포토샵 정밀 선택 및 레이어 합성 실습 라쏘 및 매직완드 등 다양한 셀렉션 툴을 활용한 정교한 이미지 오브젝트 추출과 다단 레이어 합성 작업 수행\n• 타이포그래피 및 오브젝트 배치 최적화 각 포스터 콘셉트에 매칭되는 서체 선정과 스캔러블한 정보 배열을 통해 상업용 광고물로서의 가독성 확보",
    team: "• 본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 비주얼 중심의 브랜드 아이덴티티 시각화 칠판 질감, 빈티지 페이퍼, 스포티한 블루 그라데이션 등 감각적인 배경 그래픽 합성을 통해 브랜드 몰입감 극대화\n• 정교한 이미지 프로세싱 기반 완성도 제고 상품 및 인물 소스의 깨짐이나 들어짐 없는 정밀한 누끼 작업과 레이어 오버레이 효과를 구현하여 고품질 아트워크 완성\n• 스캔러블한 정보 전달 구조 확립 순번이 매겨진 레시피 목록, 가격 정보, 프로모션 메인 카피의 폰트 스케일을 유기적으로 조절하여 광고 메시지 전달력 강화",
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
      "청년들의 다양한 요구도 트렌드를 반영하여 개발 구조(HTML/CSS)에 최적화된 화면을 설계하고 구현한 종합 플랫폼 웹 퍼블리싱 프로젝트",
    work: "• 플랫폼 웹 표준 및 이커머스 UI 구조 설계\n• 개발 구조(HTML/CSS)를 고려한 피그마 컴포넌트 시스템 구축\n• 생성형 AI 활용 및 협업 툴 기반의 기획·퍼블리싱 프로세스 리드\n• 마이퍼즐 클릭 , 사용자에 맞는 청년 제도를 퍼즐화하여 인상적으로 표현",
    team: "팀원 참여 (UI/UX 및 퍼블리싱 담당)\n\n• 팀장과의 기획 방향성 조율 및 컴포넌트 구조 최적화를 통한 전체적 갈등 관리\n• 잦은 수정 요구 및 기획 변경 발생 시, 지체 없는 즉각적인 코드 수정 및 화면 보완 수정",
    result:
      "• 사용자 중심 인터페이스 검증\n• 컴포넌트 모듈화를 통한 개발 리드 타임 단축\n• 신속한 피드백 반영 및 디버깅 최적화\n• 상호 존중 커뮤니케이션을 통한 안정적 프로젝트 마감",
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
      "창원특례시의 역사, 관광지, 지역 축제 등 종합 콘텐츠를 사용자가 직관적으로 탐색할 수 있도록 스크롤 기반 인터페이스로 구현한 웹 퍼블리싱 프로젝트",
    work: "• 창원의 연혁, 출신 유명인, 주요 관광지, 마산 맛집 정보 및 진해군항제 등 지역 축제 일정을 아우르는 사용자 중심의 정보 구조 설계 및 레이아웃 배치\n•  메인 상단에 '도전과 혁신으로 열어가는' 슬로건과 텍스트 그래픽 요소를 배치하고, 신뢰감을 주는 블루 톤앤매너와 시원한 카드 뉴스 형태의 이미지를 활용해 시각적 가독성 제고\n• 슬라이더 기능과 마산 맛집 탭 구조 등 웹 최적화 구동을 고려한 피그마 컴포넌트 설계 및 UI 구성 완성",
    team: "본인 1명 (1인 총괄 프로젝트)",
    result:
      "• 사용자 중심의 카드 뉴스 형태 레이아웃 검증\n• 탭 구조 및 슬라이더 모듈 구현을 통한 콘텐츠 가독성 제고\n• 웹 표준 및 의미론적 마크업을 통한 사이트 구조 안정성 확보",
  },
  dosirack: {
    title: "DOSIRAK USIM<br/>No Carrier Needed",
    name: "기업용 웹사이트 클론 코딩",
    created: "",
    type: [
      ["Visual Studio Code", "#8b4444"],
      ["ChatGPT", "#6b4a8b"],
      ["Gemini", "#3d7a5c"],
    ],
    url: "#",
    siteUrl: "https://dosirakclone.vercel.app/",
    overview: "내용을 입력해 주세요.",
    work: "내용을 입력해 주세요.",
    team: "내용을 입력해 주세요.",
    result: "내용을 입력해 주세요.",
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
    overview: "내용을 입력해 주세요.",
    work: "내용을 입력해 주세요.",
    team: "내용을 입력해 주세요.",
    result: "내용을 입력해 주세요.",
  },
  paris: {
    title: "PARIS CROISSANT<br/>No.1 Egg",
    name: "기업용 웹사이트 클론 코딩",
    created: "",
    type: [
      ["Visual Studio Code", "#8b4444"],
      ["ChatGPT", "#6b4a8b"],
      ["Gemini", "#3d7a5c"],
    ],
    url: "#",
    siteUrl: "https://pariscroissantclone.vercel.app/",
    overview: "내용을 입력해 주세요.",
    work: "내용을 입력해 주세요.",
    team: "내용을 입력해 주세요.",
    result: "내용을 입력해 주세요.",
  },
  musinsa: {
    title: "MUSINSA<br/>Clone Project",
    name: "기업용 웹사이트 클론 코딩",
    created: "",
    type: [
      ["Visual Studio Code", "#8b4444"],
      ["ChatGPT", "#6b4a8b"],
      ["Gemini", "#3d7a5c"],
    ],
    url: "#",
    siteUrl: "https://musinsa-pied.vercel.app/",
    overview: "내용을 입력해 주세요.",
    work: "내용을 입력해 주세요.",
    team: "내용을 입력해 주세요.",
    result: "내용을 입력해 주세요.",
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
    document.querySelectorAll(".portfolio-card").forEach((card) => {
      card.addEventListener("mouseenter", () =>
        pfCursor.classList.add("hovering"),
      );
      card.addEventListener("mouseleave", () =>
        pfCursor.classList.remove("hovering"),
      );
    });
  }
});
