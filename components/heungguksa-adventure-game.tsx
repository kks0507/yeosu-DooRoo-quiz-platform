"use client"

import { useState } from "react"
import {
  Zap,
  Book,
  ScrollText,
  MapPin,
  Sparkles,
  CheckCircle,
  XCircle,
  Award,
  ChevronRight,
  Play,
  RefreshCcw,
  Users,
  Scroll,
  Compass,
  Landmark,
  Brain,
  Swords,
  HelpCircle,
  Trophy,
  BookOpen,
  Map,
  LogOut,
} from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// 첨부된 파일의 완전한 gameData 사용
const gameData = [
  {
    step_id: "1",
    scenario_id: "SCN001",
    sequence: 1,
    location_id: "683958ccebaff406476cf63d",
    location_name: "일주문", // Added location_name for consistency
    background_text:
      "꿈속에서 들려온 삼별초 전사 이준의 목소리가 아직도 귓가에 맴도는 새벽, 지환과 두 동자승은 훈련소를 빠져나와 흥국사의 첫 관문인 일주문 앞에 섰다. 안개가 자욱하게 드리운 이곳은 ‘시작의 문’이라 불리며, 사찰 경내로 들어서는 첫 번째 문이자 오랜 유적이다. 이준 전사는 진정한 첫 열쇠가 이 문에 있다고 일러 주었다.",
    situation_text:
      "“이 문을 넘는 순간, 길은 되돌릴 수 없어…” 지환은 조용히 중얼이며 일주문 앞에 섰다. 지환과 함께하는 두 동자승의 눈동자에도 각오가 번졌다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "사찰에 들어서면 맨 먼저 통과해야 하는 문은?",
    quiz_option1: "A. 일주문",
    quiz_option2: "B. 이주문",
    quiz_option3: "C. 삼주문",
    quiz_answer: "A. 일주문", // Modified
    quiz_difficulty: "보통",
    culture_info:
      "사찰에 들어서면 가장 먼저 지나야 하는 문이 일주문이다. 이 문을 통과하는 순간부터 절의 경내로 들어온 것이므로 몸과 마음을 경건히 해야 한다. 조선시대에는 일주문이 없는 사찰도 많았던 것으로 보이며, 오늘날 남아 있는 오래된 일주문 대부분은 임진왜란 이후 복원된 것들이다. 현재는 거의 모든 사찰이 일주문을 갖추고 있다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“무지개 모양의 붉은 다리 위 연꽃이 다음 열쇠라네.”",
    image: "/images/SCN001_1.jpg",
  },
  {
    step_id: "2",
    scenario_id: "SCN001",
    sequence: 2,
    location_id: "6839674debaff406476cf6fb",
    location_name: "홍교",
    background_text:
      "이준 전사의 목소리가 속삭인 첫 단서 '무지개 모양의 붉은 다리'를 따라 지환과 두 동자승 일행은 해질녘 붉게 물든 홍교 위에 도착했다. 다리 난간 너머로 스치는 계곡 바람 속에서 삼별초 전사의 숨결이 느껴졌다. 이 아치형 석조 다리는 한때 흥국사의 유일한 진입로였다.",
    situation_text:
      "“이게 바로 무지개 다리라고? 전설처럼 생기진 않았네.” 운석이 팔짱을 낀 채 홍교를 흘겨보았다. 그 눈빛엔 은근한 긴장감이 감돌았다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "이 홍교의 별칭은 무엇인가?",
    quiz_option1: "A. 흥국사",
    quiz_option2: "B. 무지개다리",
    quiz_option3: "C. 봉황루",
    quiz_answer: "B. 무지개다리", // Modified
    quiz_difficulty: "보통",
    culture_info:
      "전라남도 여수시 중흥동 흥국사에 위치한 조선 중기 돌다리로, 일주문 왼쪽 계곡 아래 약 50m 지점에 자리하고 있다. 아치형 구조로 된 이 돌다리는 과거 흥국사의 유일한 진입로였으며, 흥국사의 상징적인 입구 역할을 했다. 이 다리를 건너야만 사찰로 들어갈 수 있었다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“천왕문의 사당에 사천왕상이 있으니, 그 위엄을 체험하라.”",
    image: "/images/SCN001_2.jpg",
  },
  {
    step_id: "3",
    scenario_id: "SCN001",
    sequence: 3,
    location_id: "683937e2ebaff406476cf5ad",
    location_name: "천왕문",
    background_text:
      "홍교 위 붉은 노을을 뒤로하고, 지환은 천왕문 안 작은 사당으로 발걸음을 옮겼다. 이준 전사의 “사천왕상의 위엄을 체험하라”는 목소리가 귓가에 맴돌았다. 사당을 가득 채운 사천왕상 네 기 중, 북방을 지키는 광목천왕의 날카로운 눈빛은 어둠을 몰아내듯 살아 있었다.",
    situation_text:
      "“사천왕 중 하나, 광목천왕… 이 안에 단서가 있어.” 연우는 고개를 들어 조각상과 벽화를 유심히 살폈다. 이내 그의 눈에 무언가 떠오른 듯 빛이 일었다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "서방 광목천왕(廣目天王)의 권속으로 대표되는 동물과 보물은 무엇인가요?",
    quiz_option1: "A. 용과 여의주",
    quiz_option2: "B. 보검",
    quiz_option3: "C. 비파",
    quiz_answer: "A. 용과 여의주", // Modified
    quiz_difficulty: "중",
    culture_info:
      "사천왕상은 천왕문 내부에 안치되어 있으며, 제석천의 수하 무장으로서 불법을 수호하는 존재들이다. 동방의 지국천왕은 악신과 건달파를, 남방의 증장천왕은 귀신 구반다를, 서방의 광목천왕은 용족의 우두머리를 권속으로 한다. 북방의 다문천왕은 사천왕 중 수장으로 네 왕이 함께 정법을 지킨다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“부활과 재생의 상징을 품은 봉황루로 향하라.”",
    image: "/images/SCN001_3.jpg",
  },
  {
    step_id: "4",
    scenario_id: "SCN001",
    sequence: 4,
    location_id: "68392244ebaff406476cf557",
    location_name: "봉황루",
    background_text:
      "소조사천왕상의 수호 아래 사당을 나선 지환은 봉황루 앞에 도착했다. 목재 사이로 스며드는 햇살 아래 먼지가 춤추고, 봉황 문양이 어둠 속에서도 은은히 빛난다. 한때 옛 승병들이 이곳에 모여 부활을 기원했다는 전설이 지환의 마음을 울린다.",
    situation_text:
      "“햇살이 봉황 문양을 비출 때, 이곳은 마치 살아 있는 것 같아.” 연우는 손으로 문양을 따라 그리며 중얼거렸다. “이 건물의 정체는 분명...”",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "봉황루는 어떤 유형의 건축물인가?",
    quiz_option1: "A. 사원",
    quiz_option2: "B. 누각",
    quiz_option3: "C. 종각",
    quiz_answer: "B. 누각", // Modified
    quiz_difficulty: "보통",
    culture_info:
      "전라남도 여수시 중흥동 흥국사에 위치한 조선 후기의 누각 건축물로, 천왕문과 법왕문 사이에 자리하고 있다. 건축적으로는 승병들의 결의를 다지던 공간으로도 전해지며, 상징적인 장소로서 그 의미를 지닌다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“승병의 각성을 알리는 사나운 상징을 찾아라—범종각으로.”",
    image: "/images/SCN001_4.jpeg",
  },
  {
    step_id: "5",
    scenario_id: "SCN001",
    sequence: 5,
    location_id: "68392000ebaff406476cf515",
    location_name: "범종각",
    background_text:
      "이준 전사의 목소리가 '승병의 결의가 깊이 새겨진 곳'이라 전한 범종각에 도착한 지환은, 문을 밀고 안으로 들어섰다. 금속 종과 나란히 놓인 목제 북이 눈에 들어오고, 오래된 법고는 정성스럽게 수리되어 제자리에 다시 놓여 있었다.",
    situation_text:
      "“봐, 저 북 말이야. 오래돼 보이지만 누가 봐도 손질 흔적이 남아 있잖아.” 운석은 법고를 두드리며 말했다. “이 중에서 다시 손 본 건 저거 하나뿐이야. 선택은 쉬워.”",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "흥국사 범종각 내에서 '이전에 있던 것을 수리하여 다시 배치'한 것은 무엇인가?",
    quiz_option1: "A. 법고",
    quiz_option2: "B. 흥국사",
    quiz_option3: "C. 종",
    quiz_answer: "A. 법고", // Modified
    quiz_difficulty: "보통",
    culture_info:
      "전라남도 여수시 중흥동 흥국사에 위치한 범종각은 1988년 주지 명선에 의해 건립되었다. 이곳에는 금속 종과 함께 목제 법고가 있으며, 법고는 이전에 있던 것을 수리하여 다시 설치한 것이다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“은밀한 글귀가 있는 동종에 가서, 옛 연대를 새기는 이 종비문을 꿰뚫어 보라.”",
    image: "/images/SCN001_5.jpeg",
  },
  {
    step_id: "6",
    scenario_id: "SCN001",
    sequence: 6,
    location_id: "68391c35ebaff406476cf4e5",
    location_name: "동종",
    background_text:
      "이준 전사의 목소리가 '옛 연대를 새기는 이 종비문을 꿰뚫어 보라' 전한 곳, 세 아이는 장중한 종 앞에 섰다. 고요 속에서 은은하게 울려 퍼지는 종소리는 전사의 숨결을 담고 있었고, 종에 새겨진 비문의 글자는 하나하나 지혜를 전하고 있었다.",
    situation_text:
      "“비문의 글씨가 흐릿하지만… 이건 내가 배운 한자야.” 지환이 비문을 손가락으로 더듬으며 말했다. “이 종을 만든 사람, 김애립이라는 이름이 보이네.”",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "이 동종을 주조한 인물은 누구인가?",
    quiz_option1: "A. 김성원",
    quiz_option2: "B. 김용암",
    quiz_option3: "C. 김애립",
    quiz_answer: "C. 김애립", // Modified
    quiz_difficulty: "보통",
    culture_info:
      "여수 흥국사 동종은 1665년(조선 현종 6년), 순천 동리산 대흥사 또는 대진사에서 김애립이 주성한 종이다. 김애립은 조선시대 대표적인 주종장으로, 김용암, 김성원과 함께 사장계의 중요한 인물로 평가받는다. 현재 이 동종이 어떻게 흥국사에 보관되게 되었는지는 알려지지 않았다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“법의 권위를 여는 법왕문으로.”",
    image: "/images/SCN001_6.jpg",
  },
  {
    step_id: "7",
    scenario_id: "SCN001",
    sequence: 7,
    location_id: "68391a17ebaff406476cf4ae",
    location_name: "법왕문",
    background_text:
      "아이들이 도착한 곳은 웅장한 기둥 위에 지어진 전각이었다. 고요한 누각 아래, 바람결에 나부끼는 깃발 사이로 법고 소리가 멀리서 들려오는 듯했다. 연우는 천천히 주변을 살펴보다, 천장 들보에 걸린 현판을 올려다보며 입을 열었다.",
    situation_text:
      "“‘법왕문’이라 적혀 있지만, 실제 기능은 다른 것 같아. 이 구조는 법당보다는 설법 누각에 가까워 보여.”",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "이 전각의 또 다른 명칭은 무엇인가?",
    quiz_option1: "A. 대웅전",
    quiz_option2: "B. 법왕문",
    quiz_option3: "C. 보제루",
    quiz_answer: "C. 보제루", // Modified
    quiz_difficulty: "보통",
    culture_info:
      "흥국사 법왕문은 보제루, 즉 법당 대신 설법을 하기 위해 지어진 누각의 기능을 하던 전각이다. 실제로 법회를 열 때는 대웅전 전면에 괘불을 걸고, 이곳에 법단을 설치하여 설법을 진행했다고 전해진다. 흥국사에서는 ‘윗보제루’라고도 불린다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“출정을 알리는 북—법고대좌로 가라.”",
    image: "/images/SCN001_7.jpeg",
  },
  {
    step_id: "8",
    scenario_id: "SCN001",
    sequence: 8,
    location_id: "683919c4ebaff406476cf4a3",
    location_name: "법고대좌",
    background_text:
      "험상궂은 사자 형상이 새겨진 석조 대좌 위에, 거대한 북이 단단히 고정되어 있었다. 강렬한 햇살이 대좌를 스치자, 운석은 본능적으로 그 위엄을 느꼈다. 그는 천천히 걸음을 옮기더니 북을 향해 손을 뻗었다.",
    situation_text: "“이거야말로 전장의 북소리! 누가 뭐래도 이건 법고지.” 운석이 자부하듯 말했다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "이 사자형 대좌가 받치고 있는 전각의 불전 사물은?",
    quiz_option1: "A. 범종",
    quiz_option2: "B. 법고",
    quiz_option3: "C. 목어",
    quiz_answer: "B. 법고", // Modified
    quiz_difficulty: "보통",
    culture_info:
      "전라남도 여수시 중흥동 흥국사 범종각에 있는 조선 후기 법고 대좌로, 사자 모양으로 조각된 석조대좌가 대형 법고를 힘차게 떠받치고 있다. 법고는 사찰의 일과 시작이나 의식을 알릴 때 사용되는 중요한 불전 사물 중 하나이다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“대웅전으로 행진하라.”",
    image: "/images/SCN001_8.jpeg",
  },
  {
    step_id: "9",
    scenario_id: "SCN001",
    sequence: 9,
    location_id: "683917dfebaff406476cf482",
    location_name: "대웅전",
    background_text:
      "대웅전의 문이 열리자 은은한 향 냄새와 함께 장엄한 석가삼존불의 모습이 나타났다. 고요한 공간 속, 세 아이는 자연스레 숨을 죽였고, 법당 한켠에 앉아 있던 주지 스님이 고개를 들었다.",
    situation_text:
      "“부처님의 자비 속에 진리가 있지. 이곳을 제대로 바라볼 수 있다면, 너희도 곧 그 비급을 얻게 될 것이다.” 스님의 말에 지환은 불상을 향해 조심스레 다가갔다.",
    npc_name: "주지 스님",
    npc_dialogue: "“이 법당에서 가장 중요한 존재를 찾아보거라. 눈에 보이는 것뿐 아니라, 마음으로도 보아야 하느니라.”",
    quiz_question: "이 법당에서 모시고 있는 부처님 상의 이름은 무엇인가?",
    quiz_option1: "A. 단청",
    quiz_option2: "B. 탱화",
    quiz_option3: "C. 석가 삼존불",
    quiz_answer: "C. 석가 삼존불", // Modified
    quiz_difficulty: "상",
    culture_info:
      "대웅전은 1624년(인조 2)에 계특대사가 절을 중수하면서 다시 지은 건물로, 석가삼존불을 모시고 있는 흥국사의 중심 법당이다. 조선시대 사찰에서 가장 일반적으로 조성된 불전 유형 중 하나이며, 정면 단청과 내부 탱화, 벽화는 예술적 가치가 뛰어나다.",
    reward_text: "비급 획득(전): 고요한 호흡법",
    reward_effect: "짧은 참선 모드 진입 시 → ‘평정 상태’ 부여 (차분한 마음으로 단서를 찾는 데 도움을 준다.)",
    next_hint_text: "“이제 두 번째 비급을 찾아나서도록. 지장보살의 지혜를 모아라. 무사전 복장유물을 살펴보거라.”",
    image: "/images/SCN001_9.jpeg",
  },
  {
    step_id: "10",
    scenario_id: "SCN001",
    sequence: 10,
    location_id: "683913c4ebaff406476cf463",
    location_name: "무사전",
    background_text:
      "세 아이는 무사전 내부로 발걸음을 옮겼다. 오래된 목조 불상들이 조심스럽게 안치된 그곳, 연우는 복장 안 유물 목록을 기록한 문서를 유심히 들여다보았다. 기록된 이름들 사이에서 조선 중기라는 연대와 관련된 단서를 찾아내며, 그는 작은 탄성을 내뱉었다.",
    situation_text: "“지장보살, 시왕상… 그렇다면 이 삼존상의 정식 명칭은…!” 연우가 조심스럽게 입을 열었다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "조선 중기에 조성된 이 복장유물 삼존상·시왕상의 정식 명칭은 무엇인가?",
    quiz_option1: "A. 목조아미타삼존상",
    quiz_option2: "B. 목조지장보살삼존상",
    quiz_option3: "C. 목조관세음삼존상",
    quiz_answer: "B. 목조지장보살삼존상", // Modified
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 중흥동 흥국사 무사전에 봉안된 조선 중기의 삼존상과 시왕상 조각군으로, 현재는 의승수군유물전시관에 보관되어 있다. 중심의 지장보살과 양측의 권속 시왕상이 조화를 이루며 불교적 사후 세계관을 반영한다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“선배 승병들이 사용한 강력한 결전 무기를 찾아 의승수군유물전시관으로 가라.”",
    image: "/images/SCN001_10.jpeg",
  },
  {
    step_id: "11",
    scenario_id: "SCN001",
    sequence: 11,
    location_id: "68391123ebaff406476cf3a4",
    location_name: "의승수군유물전시관",
    background_text:
      "아이들은 의승수군유물전시관 안으로 조심스레 발을 들였다. 차가운 돌바닥 위에는 고대 승병들이 쓰던 무기들이 정갈히 놓여 있었고, 전시관 한가운데에는 유독 강한 기운을 내뿜는 창과 활, 그리고 오래된 나침반이 각각의 받침대 위에 놓여 있었다.",
    situation_text:
      "“이 무기들… 마치 우리를 기다리고 있었던 것 같아.” 운석이 중얼거렸다. 하지만 무기 앞에는 모두 같은 문장이 새겨져 있었다. '진정한 전사의 자격을 증명하라. 올바른 답을 말하라.' — 세 사람은 각각 무기 앞에 섰다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "의승수군유물전시관은 어느 사찰에 설치된 전시관인가요?",
    quiz_option1: "A. 통도사",
    quiz_option2: "B. 흥국사",
    quiz_option3: "C. 해인사",
    quiz_answer: "B. 흥국사", // Modified
    quiz_difficulty: "보통",
    culture_info:
      "흥국사 의승수군유물전시관은 조선 후기 의승들의 업적을 재조명하고, 사찰 문화재의 도난 및 훼손을 방지하며 보존·전시하기 위해 설립된 공간이다. 이곳에는 당시 승병들이 사용했던 무기, 갑옷, 문서 등이 체계적으로 보관·전시되고 있다.",
    reward_text: "전사의 무기 3종 획득",
    reward_effect:
      "• 운석: 창 — 공격력 상승, 돌파력 증가\n• 연우: 활 — 정밀 조준, 멀리 있는 단서 탐지 가능\n• 지환: 나침반 — 퀘스트 경로 추적, 숨겨진 진실 감지",
    next_hint_text:
      "“이제 다시 불전으로 돌아가라. 빛나는 부처님의 미소가 기다린다 — 목조석가여래삼존상을 뵈러 가거라.”",
    image: "/images/SCN001_11.jpg",
  },
  {
    step_id: "12",
    scenario_id: "SCN001",
    sequence: 12,
    location_id: "683910d0ebaff406476cf39f",
    location_name: "대웅전 (목조석가여래삼존상)",
    background_text:
      "대웅전 내부로 들어선 세 사람은 석가모니불을 중심으로 좌우에 선 두 보살상을 마주했다. 연우는 잠시 숨을 고르며 그 신비로운 형상을 바라보았다. 조용히 흐르는 향냄새 속에서, 마치 무언가를 깨달으라는 듯한 기운이 퍼지고 있었다.",
    situation_text:
      "“본존불이 가운데 있고, 좌우에 보살이 서 있는 이 구성을 뭐라고 부르더라…” 연우가 고개를 갸웃거리며 조심스레 입을 열었다.",
    npc_name: "주지스님",
    npc_dialogue: "“마음을 비우고, 눈앞에 보이는 그대로를 받아들이거라. 형상이 말하는 바를 네가 먼저 느껴보아야 한다.”",
    quiz_question: "본존불과 두 협시보살을 함께 모신 불상은 무엇을 뜻하는 명칭인가요?",
    quiz_option1: "A. 삼존불",
    quiz_option2: "B. 세 명의 나한을 그린 탱화",
    quiz_option3: "C. 세 개의 탑을 일컫는 말",
    quiz_answer: "A. 삼존불", // Modified
    quiz_difficulty: "보통",
    culture_info:
      "전라남도 여수시 중흥동 흥국사에 있는 조선 중기의 삼존불로, 본존인 석가여래좌상을 중심으로 좌우에 제화갈라보살입상과 미륵보살입상이 배치되어 있다. 이러한 구성을 삼존불이라 하며, 불교에서 중요한 신앙 대상의 하나이다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“이제 석가모니불께서 전하는 지혜의 법문을 새겨야 한다. 뒤편 후불탱 앞으로 나아가라.”",
    image: "/images/SCN001_12.jpeg",
  },
  {
    step_id: "13",
    scenario_id: "SCN001",
    sequence: 13,
    location_id: "683910d0ebaff406476cf39f",
    location_name: "대웅전 (후불탱)",
    background_text:
      "후불탱 앞에 선 세 사람. 부처의 미소가 환히 빛나는 순간, 연우는 문득 몸이 따뜻해지는 기운을 느꼈다. 석가모니불의 형상에서 나오는 금빛 광휘는 세 사람의 가슴에 잔잔한 울림을 전하고 있었다.",
    situation_text: "“이 그림 속 중심에 계신 부처님은 누구실까…” 운석이 진지하게 물었다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "후불탱의 중앙에 그려진 주불(主佛)은 무엇인가?",
    quiz_option1: "A. 사천왕상",
    quiz_option2: "B. 10대 제자",
    quiz_option3: "C. 석가모니불",
    quiz_answer: "C. 석가모니불", // Modified
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 흥국사 대웅전에 봉안된 조선 후기 불화인 영산회상도는 석가여래가 인도 영산에서 법화를 설하던 장면을 도설화한 그림이다. 『법화경』의 내용을 시각적으로 표현한 이 불화는 석가모니불을 중심으로 제자들과 여러 보살들이 배치되어 있으며, 법문과 지혜의 상징으로 기능한다.",
    reward_text: "심법 강화: 마음의 맑음",
    reward_effect: "이후 모든 심문 및 선택지 상황에서 감정 제어 능력 +1 / 직관력 +1 효과를 얻는다.",
    next_hint_text: "“금빛 부처가 시험하니, 불조전으로 향하라.”",
    image: "/images/SCN001_13.jpg",
  },
  {
    step_id: "14",
    scenario_id: "SCN001",
    sequence: 14,
    location_id: "683910d0ebaff406476cf3aa",
    location_name: "불조전",
    background_text:
      "세 아이는 엄숙한 기운이 감도는 전각 안으로 들어섰다. 기둥 위에는 먼지에 덮인 현판이 걸려 있었고, 그 아래엔 조용히 앉아 있는 스님 조상들의 상이 줄지어 놓여 있었다.",
    situation_text:
      "“이곳은 부처님이 아닌… 스승님들을 모신 곳이야.” 지환이 조심스럽게 말했다. 연우와 운석도 고개를 숙이며 그 위엄을 느꼈다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "불조전은 주로 무엇(누구)을 모시는 전각인가요?",
    quiz_option1: "A. 불상",
    quiz_option2: "B. 조사(祖師)",
    quiz_option3: "C. 승려",
    quiz_answer: "B. 조사(祖師)", // Modified
    quiz_difficulty: "중",
    culture_info:
      "불조전은 불교의 큰 스승인 조사(祖師)들을 모시는 전각이다. 본래 흥국사의 암자인 청운암(靑雲庵) 경내에 있었으며, 1759년(영조 35) 괘불 탱화를 모셨던 기록의 후면 자료에서 청운암의 존재가 확인된다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“대웅전 뒤편 후벽으로 향하여 관음보살벽화를 보고 자비로움과 고요함을 깨달아라.”",
    image: "/images/SCN001_14.jpeg",
  },
  {
    step_id: "15",
    scenario_id: "SCN001",
    sequence: 15,
    location_id: "68391a23ebaff406476cf4b2",
    location_name: "관음보살벽화",
    background_text:
      "대웅전 뒤편 벽면을 따라가자, 마주한 벽화는 세 아이의 걸음을 멈추게 했다. 하얀 옷의 보살이 연꽃 위에 고요히 앉아 있었고, 벽에서 풍겨오는 온화한 기운이 공간을 감쌌다.",
    situation_text: "“이 느낌… 따뜻해.” 연우가 말하며 벽화에 한 발 다가섰다. “보살님이 우릴 보고 있는 것 같아….”",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "관음보살벽화에서 보살이 앉아 있는 대좌는 어떤 모양인가요?",
    quiz_option1: "A. 연꽃 대좌",
    quiz_option2: "B. 구름 대좌",
    quiz_option3: "C. 구름 위 괘불",
    quiz_answer: "A. 연꽃 대좌", // Modified
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 흥국사 대웅전 후벽에 그려진 조선 후기의 백의관음벽화는 일반적인 벽화와 달리 17장의 한지에 채색하여 벽에 부착하는 독특한 방식으로 제작되었다. 보살은 연꽃 위에 앉은 자태로 자비와 고요함을 상징한다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text:
      "“보살의 연꽃 위 자비를 품었으니, 이제 물가에 비친 자비의 그림자를 찾아라 — 수월관음도를 살펴보거라.”",
    image: "/images/SCN001_15.jpg",
  },
  {
    step_id: "16",
    scenario_id: "SCN001",
    sequence: 16,
    location_id: "68391a23ebaff406476cf4b3",
    location_name: "수월관음도",
    background_text:
      "조용한 전각 안, 수월관음도 앞에 선 세 사람. 그림 속 관음보살은 맑은 물가 바위에 앉아 있었고, 그 주변은 잔잔한 빛으로 감싸였다.",
    situation_text:
      "“자비의 마음이 이렇게 생긴 거구나….” 연우는 속삭이듯 말했다. 그녀의 손끝이 떨릴 때, 그림 속에서 한 줄기 빛이 뻗어 나와 작은 활의 형상을 그렸다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "‘수월관음도’에 중심이 되는 보살은 누구인가요?",
    quiz_option1: "A. 미륵보살",
    quiz_option2: "B. 지장보살",
    quiz_option3: "C. 관음보살",
    quiz_answer: "C. 관음보살", // Modified
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 흥국사에 봉안된 조선 후기 관세음보살탱화로, 보살의 형상은 귀인의 모습으로 표현된다. 머리에는 보관을 쓰고 몸에는 천의와 군의를 착용하였으며, 귀걸이·팔찌·목걸이 등의 장신구를 지녔다. 손에는 연꽃이나 정병 등의 지물을 들고 있다.",
    reward_text: "스킬 획득: ‘자비의 화살’",
    reward_effect: "연우 전용 스킬. 감정이 흔들릴 때 집중을 돕고, 정화된 직감으로 퀴즈에서 숨은 단서를 꿰뚫는다.",
    next_hint_text: "“네가 본 자비의 빛, 이제 법문의 깊이를 헤아려라 — 삼장보살도를 찾아라.”",
    image: "/images/SCN001_16.jpg",
  },
  {
    step_id: "17",
    scenario_id: "SCN001",
    sequence: 17,
    location_id: "68391a23ebaff406476cf4b4",
    location_name: "삼장보살도",
    background_text:
      "대웅전 안 깊숙한 벽면, 삼장보살도가 조용히 빛나고 있다. 세 보살이 세 방향을 응시하고 있었고, 각자 다른 영역을 상징하는 듯했다.",
    situation_text:
      "지환은 벽화를 유심히 바라보다가 중얼거렸다. “이건 삼장보살도라 했지… 그런데 셋 중에 낯선 이름이 하나 있어.” 운석과 연우는 그를 바라보며 고개를 끄덕였다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "삼장보살도에서 3장에 해당하는 보살이 아닌 것은?",
    quiz_option1: "A. 천장보살",
    quiz_option2: "B. 지장보살",
    quiz_option3: "C. 지전보살",
    quiz_answer: "C. 지전보살", // Modified
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 흥국사 대웅전에 봉안된 조선 후기 삼장탱화로 삼장탱화(三藏幀畵)는 상계(上界)를 담당하는 천장(天藏) 보살, 음부(陰府)를 담당하는 지지(地持) 보살, 지옥을 담당하는 지장(地藏) 보살과 그 권속을 그린 탱화이다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“이제 자비의 손짓이 깃든 전각으로 나아가라 — 응진당을 찾아라.”",
    image: "/images/SCN001_17.jpg",
  },
  {
    step_id: "18",
    scenario_id: "SCN001",
    sequence: 18,
    location_id: "68391a23ebaff406476cf4b5",
    location_name: "응진당",
    background_text:
      "응진당에 들어선 세 사람 앞에는 고요한 기운이 감도는 벽화가 펼쳐졌다. 십육나한이 좌우로 늘어선 채 석가모니불을 호위하고 있었다.",
    situation_text:
      "운석은 무기를 벗어두고 두 손을 가지런히 모았다. “이런 장소엔 조심히 다뤄야겠어. 하지만 문제는 놓치지 않을 거야.” 지환과 연우도 조용히 고개를 끄덕였다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "응진당 내부에 봉안된 벽화의 이름은 무엇인가요?",
    quiz_option1: "A. 흥국사 십육나한도",
    quiz_option2: "B. 흥국사 괘불도",
    quiz_option3: "C. 흥국사 괘불 탱화",
    quiz_answer: "A. 흥국사 십육나한도", // Modified
    quiz_difficulty: "중",
    culture_info:
      "흥국사 응진당은 보물 제1333호로 지정된 「흥국사 십육나한도(興國寺 十六羅漢圖)」를 보관하고 있던 전각이다. 석가모니불을 주불로 하고 좌우에 십육나한의 소상을 모시고 벽에는 「흥국사 십육나한도」를 봉안하였다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“‘십육나한도’를 보며 깨달음을 얻어라.”",
    image: "/images/SCN001_18.jpeg",
  },
  {
    step_id: "19",
    scenario_id: "SCN001",
    sequence: 19,
    location_id: "68391a23ebaff406476cf4b5",
    location_name: "응진당 (십육나한도)",
    background_text: "응진당 깊숙이 들어선 세 사람 앞, 수묵의 기운이 감도는 벽화 앞에서 운석이 다시 입을 열었다.",
    situation_text:
      "“이 벽화... 숫자가 맞지 않아. 원래 이 나한들이 몇 명이었는지 알아야 해.”<br>지환은 조심스럽게 손가락으로 벽화를 따라 세고, 연우는 옆에서 조용히 수첩을 꺼내 적는다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "원래 ‘십육나한도’에는 총 몇 구의 나한상이 그려져 있었나요?",
    quiz_option1: "A. 12명",
    quiz_option2: "B. 16명",
    quiz_option3: "C. 20명",
    quiz_answer: "B. 16명", // Modified
    quiz_difficulty: "상",
    culture_info:
      "응진당(應眞堂)에 있는 십육나한도로, 나한은 아라한이라고도 하는데 수행을 거쳐 깨달은 성자를 말한다. 십육나한탱화는 중앙의 영산회상탱은 없어지고 지금은 나한도 여섯 폭만이 남아 전해져 오고 있는데, 조선 시대 3대 불모(佛母 : 탱화와 같은 불화를 그리는 사람)인 의겸(義謙)의 작품으로 1723년(경종 3)에 제작되었다. 현재 진품은 흥국사 의승수군 유물 전시관에 보관되어 있다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“부도탑 앞 비문에 새겨진 역사의 연대를 읽어내라.”",
    image: "/images/SCN001_19.jpeg",
  },
  {
    step_id: "20",
    scenario_id: "SCN001",
    sequence: 20,
    location_id: "68391b8febaff406476cf4b6",
    location_name: "부도탑",
    background_text:
      "부도탑 앞에 선 세 사람은 바람에 흩날리는 낙엽처럼 고요한 정적에 잠겼다. 회색빛 승탑들이 늘어서 있는 모습은 마치 묵묵히 진리를 지키는 스승들 같았다.",
    situation_text:
      "지환이 탑 하나하나를 손가락으로 세며 중얼거렸다.<br>“시대도 다 다르고, 형태도 조금씩 달라. 이 탑군에는 모두 몇 기의 승탑이 있을까?”<br>연우는 노트를 꺼내 시별 특징을 적고, 운석은 각 탑의 모양을 살펴보며 입체적으로 공간을 이해한다.",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "이 부도탑 탑군에는 총 몇 기의 승탑이 있나요?",
    quiz_option1: "A. 10기",
    quiz_option2: "B. 12기",
    quiz_option3: "C. 15기",
    quiz_answer: "B. 12기", // Modified
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 중흥동 흥국사에 있는 조선 후기부터 일제 강점기에 세워진 승탑들을 모아 놓은 탑군으로 12기의 승탑은 석종형 3기 외에는 모두 구형 승탑으로 16세기에 2기, 17세기에 4기, 18세기에 3기, 19세기에 2기, 20세기에 1기가 건립되었다. 원래는 흥국사 관내 여러 곳에 산재해 있었으나 1986년 현재의 자리로 이건하였다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text: "“일곱 부처의 진리를 밝힌 팔상전으로 향하라.”",
    image: "/images/SCN001_20.jpeg",
  },
  {
    step_id: "21",
    scenario_id: "SCN001",
    sequence: 21,
    location_id: "68391b8febaff406476cf4b7",
    location_name: "팔상전",
    background_text:
      "팔상전에 들어선 순간, 금빛으로 빛나는 본존불이 세 사람을 맞이한다. 정중앙에는 석가모니불이 앉아 있고, 그 좌우에는 문수보살과 보현보살이 자리잡고 있다. 공간 전체는 장엄한 고요 속에서 신비로운 기운이 감돈다.",
    situation_text:
      "부처님 앞을 조용히 닦고 있던 동자승 지성이 눈을 동그랗게 뜨며 말했다.<br>“참선 시간에 졸다가 전당의 중심에 모셔진 부처님, 석가모니불을 닦으며 청소하는 벌을 받아 수행중이야.”<br>운석이 웃으며 물었다. “그럼 혹시 이 불상이 누구신지 아는 거야?”<br>지성이 고개를 끄덕이며 말한다. “이분은 법을 설하시고 고행을 이겨내신 분이셔.”",
    npc_name: "지성",
    npc_dialogue: "참선 시간에 졸다가 전당의 중심에 모셔진 부처님, 석가모니불을 닦으며 청소하는 벌을 받아 수행중이야.",
    quiz_question: "팔상전 본존불의 중심 불상은 무엇인가요?",
    quiz_option1: "A. 미륵불",
    quiz_option2: "B. 아미타불",
    quiz_option3: "C. 석가모니불",
    quiz_answer: "C. 석가모니불", // Modified
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 중흥동 흥국사 팔상전에 있는 조성 시기 미상의 석가여래좌상으로 석가모니불을 중심으로 좌우에 문수보살과 보현보살이 있다.",
    reward_text: "스킬 획득: 팔상의 여의주",
    reward_effect:
      "지환 전용 스킬. 길찾기 혹은 분기 선택 시 → ‘확신의 길잡이’ 발동 (복잡한 사찰 내 동선, 숨겨진 지름길 등에 직감적으로 성공 확률이 크게 높아진다.)",
    next_hint_text: "“중수사적비로 향하라. 그 돌 위에 새겨진 역사의 흔적을 읽어내야 하느니라.”",
    image: "/images/SCN001_21.jpeg",
  },
  {
    step_id: "22",
    scenario_id: "SCN001",
    sequence: 22,
    location_id: "68391b9bebaff406476cf4be",
    location_name: "중수사적비",
    background_text:
      "묵직한 돌비가 경내 한가운데 우뚝 솟아 있다. 쌍룡이 몸을 감싸 안고 있는 돌기둥의 앞면에는 ‘보조국사 창건’, 뒷면에는 ‘지눌 터 닦음’이 새겨져 있다. 역사 속 두 시점이 엇갈리며, 진실은 돌의 틈에서 속삭인다.",
    situation_text:
      "“앞면에는 보조국사가 1343년에 창건했다고 쓰여 있는데…” 지환이 중얼거린다.<br>운석이 뒷면을 살펴보며 말했다. “근데 여기엔 지눌이 1195년에 터를 닦았다고 하잖아. 이게 뭐지?”<br>연우가 고개를 갸웃하며 답한다. “진실은 한 방향만을 바라보지 않아. 이 둘 다 중요한 거 아닐까?”<br>운석은 비문을 찬찬히 훑은 뒤, 돌 위의 미세한 각인을 따라 창끝을 그리듯 손가락을 움직였다.<br>그 순간, 창을 다루는 감각이 한층 예리해지는 것을 느꼈다.",
    quiz_question: "‘중수사적비’에 기록된 주요 내용은 무엇인가요?",
    quiz_option1: "A. 왕실 지원 내역",
    quiz_option2: "B. 창건과 중수과정",
    quiz_option3: "C. 승려의 일상생활",
    quiz_answer: "B. 창건과 중수과정", // Modified
    quiz_difficulty: "중",
    culture_info:
      "여수 흥국사 중수사적비는 조선 중기의 석조 탑비로, 비의 앞면에는 1343년(지정 계미년) 보조국사가 흥국사를 창건했다고 기록되어 있다. 그러나 뒷면에는 송나라 경원년간(1195년~1200년) 지눌이 터를 닦았다고 기록되어 있어 창건 시기에 혼선을 주고 있다. 거북 모양의 받침돌 위에 쌍룡 무늬를 조각한 몸돌이 올려져 있으며, 비문은 이진휴가 지었다.",
    reward_text: "스킬 획득: 창술 비급 ‘쌍룡의 통찰’",
    reward_effect:
      "운석 전용 스킬. 전투 시 창 공격의 정밀도가 증가하고, 고대 무기나 상징을 해석할 때 정확도가 높아진다.",
    next_hint_text:
      "“거짓과 진실 사이에서도 흔들리지 않는 통찰이 필요하다. 이제 해동선관으로 가라. 그곳에서 흥국사의 숨은 울림을 들어야 하느니라.”",
    image: "/images/SCN001_22.jpg",
  },
  {
    step_id: "23",
    scenario_id: "SCN001",
    sequence: 23,
    location_id: "68391c8bebaff406476cf4bf",
    location_name: "해동선관",
    background_text:
      "조용한 건물 안, 해가 뉘엿뉘엿 기울며 벽에 길게 그림자를 드리운다. 바닥엔 작은 금속 그릇과 차 도구들이 가지런히 놓여 있고, 기둥 위에는 별을 새긴 작은 부조가 있다.",
    situation_text:
      "“이곳은 노전이라 했지… 차를 달여 올리는 공간이래.” 연우가 차도구를 살펴본다.<br>지환은 벽에 드리운 그림자를 바라보며 중얼거린다. “시간을 잴 수 있다는 건… 마치 별을 보는 느낌이야.”<br>운석이 고개를 끄덕이며 맞장구친다. “그래서 여길 ‘첨성각’이라 부르기도 한 거구나. 해와 별, 시간의 흐름이 다 담겨 있었던 거야.”<br>지성은 옆에서 고개를 끄덕이며 말했다. “선배들이 해를 따라 차를 달이고 별을 보며 기도를 올린 이유가 있었구나…”",
    quiz_question: "시간을 알려 주는 기능 때문에 해동선관이 붙은 또 다른 이름은 무엇인가요?",
    quiz_option1: "A. 첨성각",
    quiz_option2: "B. 시계각",
    quiz_option3: "C. 해시계당",
    quiz_answer: "A. 첨성각", // Modified
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 중흥동 흥국사에 있는 조선 후기 요사채로 해동선관은 시자(侍者)가 차를 달여 부처님께 공양하는 곳이라는 의미의 노전(爐殿)으로, 이곳에서 절의 대중들에게 시간을 알려 주기 때문에 첨성각(瞻星閣)이라고도 하였다.",
    reward_text: "감각 각성: ‘시간의 흐름을 읽는 눈’",
    reward_effect: "숨겨진 루트 혹은 이벤트의 시간 조건(낮/밤, 특정 시각)을 직관적으로 감지할 수 있게 된다.",
    next_hint_text: "“별을 보고 시간을 헤아렸듯, 이제 산길을 넘어 조월암으로 향하라. 그곳에서 밤하늘처럼 깊은 고요 속의 지혜를 찾아라.”",
    image: "/images/SCN001_23.jpeg",
  },
  {
    step_id: "24",
    scenario_id: "SCN001",
    sequence: 24,
    location_id: "68391cbeebaff406476cf4c0",
    location_name: "조월암",
    background_text:
      "달빛이 스며드는 조용한 암자, 바람 한 점 없는 고요한 숲 속에 고즈넉이 앉아 있다. 나무로 된 기둥과 처마 끝에는 이끼가 얇게 덮여 있고, 작은 법당 안엔 은은한 등불이 하나 깜빡이고 있다.",
    situation_text:
      "“여긴… 숨소리조차 울리는 곳이야.” 연우가 작은 숨을 내쉬며 조월암을 바라본다.<br>운석은 조심스레 문을 밀고 들어가며 말했다. “사찰의 중심과는 멀리 떨어진 이곳에… 무언가 숨겨진 뜻이 있는 걸까?”<br>지환이 주변을 살피며 말한다. “이런 외진 곳일수록, 중요한 가르침을 담고 있는 경우도 있어.”<br>연우가 이내 고개를 끄덕이며 말한다. “암자(庵子)… 조용히 머무는 수행자의 집이자, 진리를 고요 속에서 찾는 곳이지.”",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "조월암은 어떤 유형의 건축물인가요?",
    quiz_option1: "A. 강당",
    quiz_option2: "B. 암자",
    quiz_option3: "C. 종무소",
    quiz_answer: "B. 암자", // Modified
    quiz_difficulty: "중",
    culture_info:
      "흥국사 조월암은 흥국사의 중심 공간과 따로 떨어져서 지어진 암자이다. 사찰 중심 공간의 오른쪽 계곡 건너 산정에 조용히 자리하고 있다.",
    reward_text: "정신력 회복: ‘고요의 숨결’",
    reward_effect: "이전 스텝에서 소비한 단서를 되짚을 수 있게 되며, 한 번의 오답 기회가 추가된다.",
    next_hint_text: "“달빛 아래 고요를 얻었으니, 이제 흥국사의 심장부로 향하라. 적묵당에서 숨겨진 뜻을 밝혀라.”",
    image: "/images/SCN001_24.jpeg",
  },
  {
    step_id: "25",
    scenario_id: "SCN001",
    sequence: 25,
    location_id: "68391eacebaff406476cf4c1",
    location_name: "적묵당",
    background_text:
      "적묵당. 흥국사의 중심에 위치한 이 공간은 검소하고 조용하며, 외부의 소음이 전혀 닿지 않는 곳이다. 대웅전 우측, 심검당과 마주한 위치에 놓인 이 공간은, 마치 시간조차 멈춘 듯한 정적 속에 깊은 사유를 이끈다.",
    situation_text:
      "“이곳은… 단순한 전각이 아니야.” 지환은 무릎을 꿇고 앉아 눈을 감는다. “선방과 대중방이 겸해진 공간. 몸과 마음을 모두 다스리는 장소지.”<br>운석은 주변을 둘러보며 숨을 죽인다. “진짜 중심에 도달한 느낌이야.”<br>연우는 적묵당의 문양을 가만히 바라보다가 중얼거린다. “그렇다면… 여기가 우리 여정의 중심이기도 하겠네.”",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "적묵당은 어떤 용도의 공간을 겸하고 있나요?",
    quiz_option1: "A. 강설실",
    quiz_option2: "B. 대중방",
    quiz_option3: "C. 종무소",
    quiz_answer: "B. 대중방", // Modified
    quiz_difficulty: "중",
    culture_info:
      "흥국사 적묵당은 보살 대중방과 선방을 겸하는 공간이다. 흥국사의 중심 공간으로 대웅전 오른쪽에 자리해 심검당과 마주 보고 있다.",
    reward_text: "비급 업그레이드: 고요한 호흡법 (강화)",
    reward_effect:
      "• 효과: 짧은 참선 모드 진입 시 → ‘평정 상태’ 유지 + 전투 시에도 흔들림 없이 용맹함을 발휘하여 모든 긴급 상황에서 집중력과 담대함을 극대화한다.",
    next_hint_text: "“적묵의 고요 속에 진리를 보았으니, 이제 물의 신비로 향하라. 선불장으로 가라.”",
    image: "/images/SCN001_25.jpeg",
  },
  {
    step_id: "26",
    scenario_id: "SCN001",
    sequence: 26,
    location_id: "68391b8febaff406476cf4b8",
    location_name: "선불장",
    background_text:
      "선불장에 들어선 순간, 고요한 기운 속에 부처의 그림자가 벽면에 아른거린다. 마치 과거의 수행자들이 이곳에 남긴 숨결이 공간을 감싸는 듯하다. 중앙에는 작은 향로와 석등, 그리고 오래된 목패가 걸려 있다.",
    situation_text:
      "운석이 앞장서 선불장 안으로 들어섰다. 그는 조용히 향로 앞에 앉아 눈을 감고 숨을 고른다. 지환과 연우도 그를 따라 자리에 앉는다. <br>“이곳은... 시험의 자리야.” 운석이 조용히 중얼였다. <br>잠시 후, 세 사람의 눈앞에 환영처럼 과거 수행자들의 모습이 스쳐 지나간다. 수행 중에 흔들리는 자, 고요 속에서 무너지는 자들. <br>운석이 입을 열었다. “이제... 너희의 눈을 빌려야겠어. 함께 봐줘.” <br>지환이 여의주를 손에 쥐고 집중했고, 연우는 마음을 다잡았다. 세 사람의 시선이 하나로 모인다.",
    npc_name: "운석",
    npc_dialogue: "내 눈만으론 부족해. 너희의 직감과 통찰이 필요해. 함께라면… 이 환영을 꿰뚫을 수 있어.",
    quiz_question: "부처를 선발하는 도량이란 의미를 가진 이 건물의 이름은 무엇인가요?",
    quiz_option1: "A. 황룡장",
    quiz_option2: "B. 선불장",
    quiz_option3: "C. 흥국장",
    quiz_answer: "B. 선불장", // Modified
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 중흥동 흥국사에 있는 전각으로 선불장은 부처를 선발하는 도량이라는 뜻으로 승과 고시의 과장이나 사찰의 승당이나 선방을 가리키는 불교 용어이다.",
    reward_text: "팀 스킬 각성: 팔상의 여의주 (협공 발동)",
    reward_effect:
      "세 사람이 함께 사용할 수 있는 팀 비급으로 각성되었다.\n• 길찾기 혹은 분기 선택 시: ‘확신의 길잡이’ 발동 → 직감적으로 최적의 루트 선택 확률 대폭 증가\n• 퍼즐/전투/함정 등에서 협동 시: ‘통찰의 눈’ 발동 → 세 사람의 감각이 하나로 합쳐져 적의 약점, 숨겨진 정보, 위장된 함정까지 간파 가능\n※ 단, 세 사람이 함께 행동할 때만 발동됨.",
    next_hint_text:
      "“여의주는 이제 너희 모두의 눈이 되었다. 함께라면 어떤 길도 두렵지 않다. 마지막 관문, 용왕전으로 나아가라.”",
    image: "/images/SCN001_26.jpeg",
  },
  {
    step_id: "27",
    scenario_id: "SCN001",
    sequence: 27,
    location_id: "68391b8febaff406476cf4b9",
    location_name: "용왕전",
    background_text:
      "용왕전에 들어서자, 신비로운 물안개가 천장을 감싸고 파란 용의 형상이 반짝이는 벽화 위로 떠오른다. 바닥엔 오래된 연꽃 문양이 흐릿하게 새겨져 있고, 중앙에 둥글게 마련된 기도단 위로 달빛이 비친다. 마치 이곳에서 과거와 현재가 만나는 듯하다.",
    situation_text:
      "연우가 조심스럽게 기도단에 무릎을 꿇는다. 지환이 숨을 고르고, 운석이 묵직한 목소리로 말한다.<br>“우리가… 여기까지 온 이유를 잊지 말자. 이건 단순한 모험이 아니야.”<br>그 순간, 세 사람의 비급에서 빛이 피어나 서로에게 융합되기 시작한다.<br>팔상의 여의주, 쌍룡의 통찰, 자비의 화살… 세 개의 힘이 하나로 모여, 눈부신 용의 형상이 기도단 위에 나타난다.<br>환영 속 인물의 목소리가 들려온다. “나는 고려 말, 몽골의 침략에 맞서 싸운 의승이다. 너희는 나의 마지막 제자이자, 후계자들이다.”",
    npc_name: "과거의 의승",
    npc_dialogue:
      "지환아… 너는 고요한 정신으로 나의 첫 번째 비급을 깨우쳤다. 참선 속에서 진리를 구한 너의 평정심이 나라를 지키는 첫걸음이 되리라.\n\n운석아… 너는 끝까지 의심하지 않고 나아갔다. 검은 의심을 꿰뚫고 통찰의 눈을 얻은 너의 결단력이, 혼란 속의 등불이 될 것이다.\n\n연우야… 너는 연민으로 싸웠고, 자비로 설득했다. 너의 따뜻한 마음은 이 나라의 수호자들에게 희망이 될 것이다.\n\n나는 고려 시대, 몽골의 침략 속에서 싸운 의승이자 수행자였다. 나라가 다시 흔들릴 때, 후대의 누군가가 이 무공을 이어주기를 바랐다.\n\n지금, 너희 셋이 그 뜻을 모두 이었구나. 너희의 의지와 우정, 그리고 호국의 마음이 곧 나라를 구하리라.\n\n이제 ‘용의 비급’은 너희 것이니라. 부처님의 가피가 너희 앞길을 지켜 주시길…",
    quiz_question:
      "신라시대 불교가 우리나라에 들어오면서 물을 관장하는 용왕을 모셔 놓고 기도하는 공간으로 활용된 이 곳의 이름은?",
    quiz_option1: "A. 황룡전",
    quiz_option2: "B. 용왕전",
    quiz_option3: "C. 흥국전",
    quiz_answer: "B. 용왕전", // Modified
    quiz_difficulty: "중",
    culture_info:
      "신라 시대 용왕전(龍王殿)은 태자궁(太子宮)인 동궁관(東宮官)에 소속된 9개의 관아 가운데 하나였다. 동궁관의 9개 관아는 동궁아, 어룡성, 세댁, 급장전, 월지전, 승방전, 포전, 월지악전, 용왕전이었다. 용왕전은 용왕에게 제사 지내는 모든 일을 관장한 듯하다. 불교가 우리나라에 들어오면서 물을 관장하는 용왕을 모셔 놓고 기도하는 공간으로 변모한 것으로 보인다.",
    reward_text: "최종 비급 획득: 용의 비급",
    reward_effect:
      "• 세 전사의 전용 스킬이 하나로 융합되어 탄생한 최종 비급\n• 효과: ‘용의 각성’ 발동\n  ◦ 전투: ‘쌍룡의 통찰’ → 적의 허점을 즉시 포착하고 선제 공격 가능\n  ◦ 퍼즐: ‘팔상의 여의주’ → 숨겨진 단서와 비밀 경로를 직감적으로 감지\n  ◦ 협상 및 회복: ‘자비의 화살’ → NPC 설득과 회복 능력 강화\n  ◦ 세 명이 함께 행동할 경우, 효과 2배 증폭",
    next_hint_text:
      "“이제 너희는 나라의 수호자, 용의 전사다.”\n“너희 앞에 펼쳐질 위기 속에서, 이 힘이 길을 비추길.”\n“흥국사와 이 땅을 위해… 평화의 등불이 되어다오.”",
    image: "/images/SCN001_27.jpeg",
  },
]

type GameScreen = "intro" | "opening" | "location" | "situation" | "quiz" | "result" | "reward" | "ending"

interface PlayerPowers {
  firstSecret: boolean // 고요한 호흡법 (심법)
  secondSecret: boolean // 전사의 무기 3종 (무기)
  finalSecret: boolean // 용의 비급 (최종 비급)
}

// `onGameEnd` prop의 타입 정의를 업데이트합니다.
interface HeungguksaAdventureGameProps {
  onGameEnd: (gameId: string, gameName: string, status: "completed" | "exited") => void // Updated prop type
}

export default function HeungguksaAdventureGame({ onGameEnd }: HeungguksaAdventureGameProps) {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>("intro")
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false)
  const [playerPowers, setPlayerPowers] = useState<PlayerPowers>({
    firstSecret: false,
    secondSecret: false,
    finalSecret: false,
  })
  const [gameStarted, setGameStarted] = useState(false)

  const currentStep = gameData[currentStepIndex]
  const progress = ((currentStepIndex + 1) / gameData.length) * 100

  const handleStartGame = () => {
    setGameStarted(true)
    setCurrentScreen("opening")
  }

  const handleAcceptQuest = () => {
    setCurrentScreen("location")
  }

  const handleLocationNext = () => {
    setCurrentScreen("situation")
  }

  const handleSituationNext = () => {
    setCurrentScreen("quiz")
  }

  const handleQuizAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    const correct = answer === currentStep.quiz_answer
    setIsCorrectAnswer(correct)
    setCurrentScreen("result")
  }

  const handleResultNext = () => {
    if (isCorrectAnswer) {
      // 능력 획득 로직
      setPlayerPowers((prevPowers) => {
        const newPowers = { ...prevPowers }
        switch (currentStep.step_id) {
          case "9": // 비급 획득(전): 고요한 호흡법
            newPowers.firstSecret = true
            break
          case "11": // 전사의 무기 3종 획득
            newPowers.secondSecret = true
            break
          case "27": // 최종 비급 획득: 용의 비급
            newPowers.finalSecret = true
            break
        }
        return newPowers
      })

      // 마지막 스텝인지 확인
      if (currentStepIndex === gameData.length - 1) {
        setCurrentScreen("ending")
      } else {
        setCurrentScreen("reward")
      }
    } else {
      setCurrentScreen("quiz")
    }
  }

  const handleRewardNext = () => {
    setCurrentStepIndex((prev) => prev + 1)
    setCurrentScreen("location")
    setSelectedAnswer("")
  }

  const handleRetryQuiz = () => {
    setSelectedAnswer("")
    setCurrentScreen("quiz")
  }

  // `handleRestart` 함수에서 `onGameEnd` 호출 시 게임 ID와 전체 이름을 전달합니다.
  const handleRestart = () => {
    setCurrentStepIndex(0)
    setCurrentScreen("intro")
    setSelectedAnswer("")
    setIsCorrectAnswer(false)
    setPlayerPowers({
      firstSecret: false,
      secondSecret: false,
      finalSecret: false,
    })
    setGameStarted(false)
    onGameEnd("heungguksa", "흥국사에 숨겨진 무공비급을 찾아라", "completed") // 게임 ID와 전체 이름 전달
  }

  // `handleExitGame` 함수에서 `onGameEnd` 호출 시 게임 ID와 전체 이름을 전달합니다.
  const handleExitGame = () => {
    onGameEnd("heungguksa", "흥국사에 숨겨진 무공비급을 찾아라", "exited") // 게임 ID와 전체 이름 전달
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "하":
        return "bg-green-100 text-green-800 border-green-200"
      case "보통":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "중":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "상":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const PowerIcon = ({ power, active }: { power: keyof PlayerPowers; active: boolean }) => {
    const icons = {
      firstSecret: BookOpen,
      secondSecret: Swords,
      finalSecret: Zap,
    }
    const Icon = icons[power]
    return (
      <div
        className={`p-2 rounded-full transition-colors duration-200 ${active ? "bg-amber-200 text-amber-800 shadow-md" : "bg-gray-200 text-gray-500"}`}
      >
        <Icon className="w-5 h-5" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 p-4 font-sans">
      <div className="max-w-lg mx-auto">
        {/* 헤더와 진행률 */}
        {gameStarted && currentScreen !== "intro" && currentScreen !== "ending" && (
          <Card className="mb-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                  <ScrollText className="w-6 h-6 text-amber-600" />
                  흥국사에 숨겨진 무공비급을 찾아라
                </h1>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded-full font-semibold">
                    {currentStepIndex + 1} / {gameData.length}
                  </div>
                  <Button
                    onClick={handleExitGame}
                    variant="ghost"
                    size="sm"
                    className="text-stone-500 hover:text-stone-700 p-1"
                  >
                    <LogOut className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <Progress
                value={progress}
                className="h-2 bg-stone-300 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-amber-500 [&::-webkit-progress-value]:to-orange-500"
              />

              {/* 플레이어 능력 */}
              <div className="flex gap-3 justify-center pt-2">
                <div className="flex items-center gap-1 text-sm text-stone-600">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">고요한 호흡법:</span>
                  <PowerIcon power="firstSecret" active={playerPowers.firstSecret} />
                </div>
                <div className="flex items-center gap-1 text-sm text-stone-600">
                  <Swords className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">전사의 무기:</span>
                  <PowerIcon power="secondSecret" active={playerPowers.secondSecret} />
                </div>
                <div className="flex items-center gap-1 text-sm text-stone-600">
                  <Zap className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">용의 비급:</span>
                  <PowerIcon power="finalSecret" active={playerPowers.finalSecret} />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 게임 화면들 */}
        <Card className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-amber-200">
          {/* 인트로 화면 */}
          {currentScreen === "intro" && (
            <CardContent className="p-8 text-center space-y-6">
              <div className="text-8xl mb-4 animate-bounce-in">📜</div>
              <CardTitle className="text-3xl font-extrabold text-stone-900 mb-2">
                흥국사에 숨겨진 무공비급을 찾아라
              </CardTitle>
              <CardDescription className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                무협 어드벤처 게임
              </CardDescription>

              <div className="text-left space-y-4 bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-inner">
                <h3 className="font-bold text-lg text-stone-800 flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-600" />
                  등장인물 소개
                </h3>
                <div className="space-y-3 text-sm text-stone-700">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👦</span>
                    <div>
                      <strong className="text-green-700">지환:</strong>
                      <p>
                        흥국사 승병 훈련소에 입소한 어린 동자승. 훈련 성적은 낮지만, 조국을 향한 열정만큼은 누구보다
                        뜨겁다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <strong className="text-blue-700">운석:</strong>
                      <p>
                        무예 실력이 뛰어나지만 성급하고 직선적인 성격의 동자승. 지환을 늘 놀리지만, 위기 앞에선 누구보다
                        의리가 있다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <strong className="text-indigo-700">연우:</strong>
                      <p>차분하고 지혜로운 전략가형 동자승. 문서와 불경 속에서 무공의 비밀을 먼저 깨우친다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👻</span>
                    <div>
                      <strong className="text-red-700">이준:</strong>
                      <p>
                        고려 말 삼별초 소속으로 몽골과 맞서 싸운 전사. 흥국사에 세 가지 무공 비급을 남기고 전인의 등장을
                        기다려왔다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-left space-y-3 bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-inner">
                <h3 className="font-bold text-lg text-amber-800 flex items-center gap-2">
                  <Scroll className="w-5 h-5 text-amber-600" />
                  시나리오 개요
                </h3>
                <p className="text-sm leading-relaxed text-stone-700">
                  조선, 임진왜란의 한복판. 스님들 역시 애국의 마음으로 왜군에 대항하며 흥국사에 승병 훈련소를 세우고
                  후계를 길러내기 시작했다. 이곳에는 서로 다른 개성을 지닌 어린 동자승 세 명이 입소해 있었다. 열정
                  하나로 버텨온 말단 훈련생 지환, 칼보다 빠른 성미의 실력자 운석, 책을 가까이하며 지략을 쌓는 연우.
                  그러던 어느 날 밤, 훈련장 깊은 곳에서 들려온 환영의 목소리. "나라가 혼란에 빠졌을 때, 흥국사에 남긴
                  무공 비급을 찾는 자만이 전인의 자격을 얻을 것이다." 세 명의 동자승은 서로 견제하며, 때로는 협력하면서
                  비급을 향한 수련과 모험의 여정을 시작한다.
                </p>
              </div>

              <Button
                onClick={handleStartGame}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" /> 게임 시작하기
              </Button>
            </CardContent>
          )}

          {/* 오프닝 화면 */}
          {currentScreen === "opening" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 text-red-500">👻</div>
                <CardTitle className="text-2xl font-bold text-red-700">이준 전사</CardTitle>
              </div>

              <div className="bg-red-50 p-6 rounded-xl space-y-4 border-l-4 border-red-400 shadow-inner">
                <p className="text-sm leading-relaxed text-stone-800">
                  “나의 전인들이여. 나는 고려 말, 몽골에 맞서 싸운 삼별초 전사 이준이다. 나라가 다시 위기에 빠질 날을
                  대비해, 흥국사 곳곳에 세 가지 무공 비급을 숨겨 두었노라. 비급을 찾아 진정한 힘을 얻고, 조국을
                  수호하라. 너희 셋 중 진정한 전인이 나올 수 있을지... 이제 시험이 시작된다.”
                </p>

                <div className="text-center p-4 bg-white rounded-lg border border-stone-200 shadow-sm">
                  <p className="font-bold text-red-800 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    흥국사에 숨겨진 무공 비급을 찾는 여정을 세 동자승과 함께 떠나시겠습니까?
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleAcceptQuest}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-6 rounded-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-md transform hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5 mr-2" /> 예, 세 동자승과 함께 비급을 찾아 나라를 지키겠습니다.
                </Button>
                <Button
                  onClick={handleExitGame}
                  variant="outline"
                  className="w-full bg-stone-100 text-stone-700 py-3 px-6 rounded-xl font-medium hover:bg-stone-200 transition-all duration-200 border-stone-300"
                >
                  <XCircle className="w-5 h-5 mr-2" /> 아니오, 아직 수행할 준비가 되지 않았습니다.
                </Button>
              </div>
            </CardContent>
          )}

          {/* 장소 도착 화면 */}
          {currentScreen === "location" && currentStep && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl text-amber-500 mb-4 animate-fade-in">
                  <Landmark className="w-full h-full" />
                </div>
                <CardTitle className="text-2xl font-bold text-stone-900 flex items-center justify-center gap-2">
                  <MapPin className="w-6 h-6 text-amber-600" />
                  {currentStep.location_name}
                </CardTitle>
                <div className="w-full h-48 bg-gradient-to-b from-stone-200 to-stone-300 rounded-xl flex items-center justify-center shadow-inner">
                  {/* 수정된 이미지 표시 부분 */}
                  <img
                    src={currentStep.image || "/placeholder.svg"}
                    alt={currentStep.location_name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 shadow-sm">
                  <p className="text-amber-800 font-semibold flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-600" /> 새로운 장소에 도착했습니다!
                  </p>
                </div>
              </div>

              <Button
                onClick={handleLocationNext}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-6 rounded-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-md transform hover:scale-105"
              >
                <Compass className="w-5 h-5 mr-2" /> 탐험 시작하기
              </Button>
            </CardContent>
          )}

          {/* 상황 화면 */}
          {currentScreen === "situation" && currentStep && (
            <CardContent className="p-8 space-y-6">
              <CardTitle className="text-xl font-bold text-stone-900 text-center mb-4">
                {currentStep.location_name}
              </CardTitle>

              <div className="space-y-4">
                <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 shadow-inner">
                  <p
                    className="text-sm leading-relaxed text-stone-800"
                    dangerouslySetInnerHTML={{ __html: currentStep.background_text }}
                  ></p>
                </div>

                <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🧘</div>
                    <p
                      className="text-sm leading-relaxed text-stone-800"
                      dangerouslySetInnerHTML={{ __html: currentStep.situation_text }}
                    ></p>
                  </div>
                </div>

                {currentStep.npc_name && currentStep.npc_dialogue && (
                  <div className="bg-red-50 p-5 rounded-xl border-l-4 border-red-400 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🗣️</div>
                      <div>
                        <p className="font-bold text-red-700 mb-2">{currentStep.npc_name}</p>
                        <p
                          className="text-sm leading-relaxed text-stone-800"
                          dangerouslySetInnerHTML={{ __html: currentStep.npc_dialogue }}
                        ></p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button
                onClick={handleSituationNext}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md transform hover:scale-105"
              >
                <Brain className="w-5 h-5 mr-2" /> 퀴즈 풀러가기
              </Button>
            </CardContent>
          )}

          {/* 퀴즈 화면 */}
          {currentScreen === "quiz" && currentStep && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-6">
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-bold border-2 ${getDifficultyColor(currentStep.quiz_difficulty)}`}
                >
                  난이도: {currentStep.quiz_difficulty}
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-400 shadow-inner">
                <CardTitle className="text-lg font-bold text-center mb-4 text-stone-800 flex items-center justify-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                  {currentStep.quiz_question}
                </CardTitle>
              </div>

              <div className="space-y-3">
                {[currentStep.quiz_option1, currentStep.quiz_option2, currentStep.quiz_option3]
                  .filter(Boolean)
                  .map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleQuizAnswer(option)}
                      variant="outline"
                      className={`w-full text-left p-4 rounded-xl font-medium text-stone-800 border-2 ${selectedAnswer === option ? "border-amber-500 bg-amber-100 shadow-md" : "border-stone-200 bg-white hover:border-amber-400 hover:bg-amber-50"} transition-all duration-200`}
                    >
                      {option}
                    </Button>
                  ))}
              </div>
            </CardContent>
          )}

          {/* 결과 화면 */}
          {currentScreen === "result" && currentStep && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-8xl animate-pop-in">{isCorrectAnswer ? "🎉" : "❌"}</div>
                <CardTitle className={`text-2xl font-bold ${isCorrectAnswer ? "text-green-600" : "text-red-600"}`}>
                  {isCorrectAnswer ? "정답입니다!" : "오답입니다"}
                </CardTitle>
              </div>

              {isCorrectAnswer && (
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400 shadow-inner">
                  <h3 className="font-bold mb-3 text-blue-900 flex items-center gap-2">
                    <Book className="w-5 h-5 text-blue-600" /> 문화 정보
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-800">{currentStep.culture_info}</p>
                </div>
              )}

              <div className="space-y-3">
                {isCorrectAnswer ? (
                  <Button
                    onClick={handleResultNext}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-md transform hover:scale-105"
                  >
                    <ChevronRight className="w-5 h-5 mr-2" /> 다음으로
                  </Button>
                ) : (
                  <Button
                    onClick={handleRetryQuiz}
                    className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white py-4 px-6 rounded-xl font-bold hover:from-red-700 hover:to-rose-700 transition-all duration-200 shadow-md transform hover:scale-105"
                  >
                    <RefreshCcw className="w-5 h-5 mr-2" /> 다시 풀어보기
                  </Button>
                )}
              </div>
            </CardContent>
          )}

          {/* 보상 화면 */}
          {currentScreen === "reward" && currentStep && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl text-amber-500 animate-pulse-once">✨</div>
                <CardTitle className="text-2xl font-bold text-amber-600">보상 획득!</CardTitle>
              </div>

              {currentStep.reward_text && (
                <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📜</div>
                    <p className="text-sm leading-relaxed text-stone-800">{currentStep.reward_text}</p>
                  </div>
                </div>
              )}

              {currentStep.reward_effect && (
                <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 shadow-inner">
                  <h3 className="font-bold mb-3 text-stone-700 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" /> 획득한 능력
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-800 whitespace-pre-line">
                    {currentStep.reward_effect}
                  </p>
                </div>
              )}

              {currentStep.next_hint_text && (
                <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💡</div>
                    <p className="text-sm leading-relaxed text-stone-800">{currentStep.next_hint_text}</p>
                  </div>
                </div>
              )}

              <Button
                onClick={handleRewardNext}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-6 rounded-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-md transform hover:scale-105"
              >
                {currentStepIndex < gameData.length - 1 ? (
                  <>
                    <Map className="w-5 h-5 mr-2" /> 다음 장소로
                  </>
                ) : (
                  <>
                    <Swords className="w-5 h-5 mr-2" /> 최종 결전으로
                  </>
                )}
              </Button>
            </CardContent>
          )}

          {/* 엔딩 화면 */}
          {currentScreen === "ending" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-8xl animate-tada">🎊</div>
                <CardTitle className="text-3xl font-bold text-stone-900">게임 완료!</CardTitle>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400 shadow-inner">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">👻</div>
                    <div className="space-y-3 text-sm text-stone-800">
                      <p dangerouslySetInnerHTML={{ __html: gameData[gameData.length - 1].npc_dialogue || "" }}></p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl text-center border border-stone-200 shadow-inner">
                  <p className="text-sm leading-relaxed text-stone-800">
                    세 명의 동자승은 마침내 흥국사에 숨겨진 무공 비급을 모두 찾아 전인의 자격을 얻었다. 그들은 힘을 합쳐
                    조국을 수호하는 진정한 전사로 거듭난다. 그들의 이름은 역사에 길이 남아 후대에 전해질 것이다.
                  </p>
                </div>

                <div className="text-center space-y-2 bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-md">
                  <p className="text-2xl font-bold text-stone-900 flex items-center justify-center gap-2">
                    <Trophy className="w-7 h-7 text-amber-600" /> 축하합니다!
                  </p>
                  <p className="text-lg text-stone-700 font-semibold">
                    흥국사의 비급을 모두 찾아 전인의 자격을 얻었습니다!
                  </p>
                </div>
              </div>

              <Button
                onClick={handleRestart}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-6 rounded-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-md transform hover:scale-105"
              >
                <RefreshCcw className="w-5 h-5 mr-2" /> 메인페이지로 돌아가기
              </Button>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}
