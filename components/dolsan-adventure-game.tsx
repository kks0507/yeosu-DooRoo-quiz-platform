"use client"

import { useState } from "react"
import {
  Heart,
  Map,
  Compass,
  Play,
  RefreshCcw,
  CheckCircle,
  XCircle,
  Award,
  Users,
  ScrollText,
  Sparkles,
  Brain,
  HelpCircle,
  Book,
  ChevronRight,
  Swords,
  Trophy,
  LogOut,
  Camera,
} from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// --- 새 시나리오 정보 ---
const scenarioInfo = {
  id: "SCN007",
  name: "도망친 금오 요정의 일광욕 여행",
  genre: "전통 신화 어드벤처",
  characters_info: [
    {
      emoji: "👩‍🎓",
      name: "지수",
      description: "관광 해설가가 꿈인 사학과 대학생. 금오 요정들을 만나 돌산 지역 곳곳을 안내하게 된다.",
    },
    {
      emoji: "✨",
      name: "금오 요정들",
      description:
        "음력 7월, 하늘과 바다가 만나는 날 용궁이 열릴 때만 일광욕을 허락받은 존재들. 그날 달빛에 빠진 당번 금오가 잠들면서 용궁 문이 닫혔고, 강렬한 태양빛 아래 바위로 굳어졌다. 그 후 오랜 기간 돌이 된 채 여수를 지켜오다, 일광욕에 대한 열정을 참지 못하고 바위를 벗어나 도망쳐 나온 전설 속 존재들.",
    },
  ],
  overview:
    "일곱 날만 허락된 햇빛을 그토록 그리워하던 금오 요정들은, 용궁 문이 닫히던 날 돌로 굳어졌다가 스스로 꺼내 나온 존재들이다. 어느 날 지수는 이들의 간절한 소망을 듣고, 자신과 함께 돌산 지역의 일광욕 명소 11곳을 순회하며 햇빛을 선사하기로 약속한다. 단, 금오 요정들은 지수가 내는 퀴즈를 맞춰야만 각 장소에서 햇살을 만끽할 수 있다.",
  opening_dialogue:
    "“안녕하세요, 저는 지수예요. 문화유산 알리미를 꿈꾸는 역사학과 학생이에요. 제가 진행하는 문화유산 소개 코스를 따라와주시면 일광욕을 꿈꾸는 여러분들을 도와드릴게요. 함께 11곳을 돌며 햇빛을 느껴볼까요?”",
  opening_question: "당신은 금오요정으로서 지수와 함께 일광욕 여행을 떠나시겠습니까?",
  opening_option1: "- 예, 지수와 함께 일광욕 명소를 찾아 떠나겠습니다.",
  opening_option2: "- 아니요, 아직 준비가 되지 않았습니다.",
}

// --- 새 게임 데이터 ---
const gameData = [
  {
    step_id: "1",
    scenario_id: "SCN007",
    sequence: 1,
    location_id: "LOC_DS_BRIDGE_001",
    location_name: "돌산대교",
    background_text:
      "붉은 노을 아래 바다를 가로지르는 돌산대교 위. 지수와 금오 요정들은 이 다리에서 처음으로 따스한 햇살을 맞으며 일광욕의 시작을 준비합니다.",
    situation_text: "“여기서 올바른 다리 이름을 맞춰야만, 돌산대교 위에서 일광욕을 즐길 수 있어요.”",
    npc_name: "지수",
    npc_dialogue:
      " 돌산대교는 여수시 남산동과 전라남도 돌산읍 우두리를 연결하는 다리로 이 다리가 완공되며 돌산지역이 여수의 관광 명소로 알려지게 되었어요. 다리 이름을 맞히고 햇살을 만끽해 볼까요?”",
    quiz_question: "전라남도 여수시 남산동과 돌산읍 우두리를 연결하는 다리는 무엇인가요?",
    quiz_option1: "A. 여수 해상케이블카",
    quiz_option2: "B. 돌산대교",
    quiz_option3: "C. 돌산공원",
    quiz_answer: "B. 돌산대교",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 남산동과 전라남도 돌산읍 우두리를 연결하는 다리로 돌산대교의 완성으로 돌산공원이 조성되었으며, 돌산 지역의 무슬목해수욕장, 동백골해수욕장과 더불어 조용한 암자였던 향일암이 전국적인 일출 명소와 기도처로 알려지게 되어 여수 관광의 필수 코스가 되었다.",
    reward_text: "돌산대교에서 첫 번째 일광욕을 진행합니다.",
    reward_effect: "“여수 바다의 따사로운 햇살이 요정들의 돌 몸속까지 스며듭니다.(1/11)”",
    next_hint_text: "“일광욕을 마쳤으니, 다음은 돌산공원으로 가볼까요?”",
  },
  {
    step_id: "2",
    scenario_id: "SCN007",
    sequence: 2,
    location_id: "LOC_DS_PARK_002",
    location_name: "돌산공원",
    background_text:
      "언덕에 오르니 돌산대교와 여수구항이 한눈에 펼쳐집니다. 금오 요정들은 첫 일광욕의 따스함을 기억하며, 두 번째 햇살을 맞을 준비를 합니다.",
    situation_text: "“여기서 올바른 공원 이름을 알아야, 이 언덕 위에서 일광욕을 즐길 수 있어요.”",
    npc_name: "지수",
    npc_dialogue: "“지금 위치하신 공원은 돌산대교와 여수구항을 조망할 수 있는 명소예요. 이곳 이름을 맞혀보세요.”",
    quiz_question:
      "여수시 돌산읍 우두리에 있는 근린공원으로 여수구항과 돌산대교를 한눈에 바라볼 수 있는 위치에 자리잡은 공원은?",
    quiz_option1: "A. 돌산대교",
    quiz_option2: "B. 여수해상케이블카",
    quiz_option3: "C. 돌산공원",
    quiz_answer: "C. 돌산공원",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 돌산읍 우두리에 있는 근린공원으로 여수구항과 돌산대교를 한눈에 바라볼 수 있는 위치에 자리잡아 여수의 밤바다를 보기 위해 관광객이 많이 찾는 곳이다.",
    reward_text: "돌산공원에서 두 번째 일광욕을 진행합니다.",
    reward_effect: "“포근한 햇살이 요정들의 돌 몸을 부드럽게 감쌉니다.(2/11)”",
    next_hint_text: "“다음은 여수예술랜드리조트 ‘마이더스의 손’ 전망대로 이동합니다.”",
  },
  {
    step_id: "3",
    scenario_id: "SCN007",
    sequence: 3,
    location_id: "LOC_YSL_RESORT_003",
    location_name: "여수예술랜드리조트",
    background_text:
      "여수예술랜드리조트의 해안가. 지수와 금오 요정들은 바다를 배경으로 펼쳐진 조각공원 사이로 난 길을 따라 전망대를 향해 걸어갑니다. 따사로운 햇살을 기다리며 설렘이 가득합니다.",
    situation_text: "“이곳에서 올바른 전망대 이름을 알아야, 진정한 일출의 햇살을 만끽할 수 있어요.”",
    npc_name: "지수",
    npc_dialogue:
      "“여수예술랜드리조트에는 ‘마이다스의 손’이라는 손 조형 전망대가 있어요. 일출과 일몰을 감상하며 소원을 빌 수 있답니다. 퀴즈를 풀고 햇살을 만끽해볼까요?”",
    quiz_question: "여수예술랜드에서 바닷가와 일출을 감상하며 소원을 기원하는 전망대는?",
    quiz_option1: "A. 트릭아트",
    quiz_option2: "B. 마이더스의 손",
    quiz_option3: "C. 대관람차",
    quiz_answer: "B. 마이더스의 손",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 돌산읍 평사리 굴전마을에 있는 체류형 테마 리조트로, 일출과 일몰을 감상하며 소원을 기원하는 손 조형 전망대 ‘마이다스의 손’, 바다를 배경으로 펼쳐지는 조각공원 ‘풍경’, 3D 트릭아트 뮤지엄 ‘소설’, 인피니티 풀, 판타지아드림 서커스, 대관람차 등으로 이루어져 있다.",
    reward_text: "마이더스의 손 전망대에서 세 번째 일광욕을 진행합니다.",
    reward_effect: "“뜨거운 햇살이 요정들의 돌 몸을 부드럽게 어루만집니다.(3/11)”",
    next_hint_text: "“다음은 무술목피서지의 조각공원으로 이동합니다.”",
  },
  {
    step_id: "4",
    scenario_id: "SCN007",
    sequence: 4,
    location_id: "LOC_MS_SCULPTURE_004",
    location_name: "무슬목 조각공원",
    background_text:
      "소나무 숲과 몽돌 해안이 어우러진 무슬목 해수욕장 일대. 지수와 금오 요정들은 해변을 따라 조성된 12점의 조각품 사이를 거닐며, 또 다른 햇살의 축제를 준비합니다.",
    situation_text: "“여기서 정확한 공원 이름을 알아야, 조각품 사이에서 일광욕을 즐길 수 있어요.”",
    npc_name: "지수",
    npc_dialogue:
      "“이곳은 소나무와 몽돌 해안에 조각품 12점이 설치된 ‘무슬목 피서지’에 위치한 공원이에요. 퀴즈를 풀고 햇살을 만끽해 볼까요?”",
    quiz_question: "소나무와 몽돌 해안이 어우러진 무슬해수욕장 일대에 조각품 12점이 설치된 공원의 지명은?",
    quiz_option1: "A. 무슬목 조각공원",
    quiz_option2: "B. 무슬해수욕장",
    quiz_option3: "C. 돌산공원",
    quiz_answer: "A. 무슬목 조각공원",
    quiz_difficulty: "상",
    culture_info:
      "소나무와 몽돌 해안으로 이루어진 무슬해수욕장 일대에 문화·관광권 기반 정비공사 일환으로 조각품 12점 등을 설치한 공원입니다.",
    reward_text: "무슬목 조각공원에서 네 번째 일광욕을 진행합니다.",
    reward_effect: "“조각품 사이로 비추는 햇살이 요정들의 돌 몸을 따스하게 감쌉니다.(4/11)”",
    next_hint_text: "“다음은 해양수산과학관으로 이동합니다.”",
  },
  {
    step_id: "5",
    scenario_id: "SCN007",
    sequence: 5,
    location_id: "LOC_MS_SCIENCE_005",
    location_name: "해양수산과학관",
    background_text:
      "해양수산과학관 앞 광장. 파란 바다를 배경으로 학습과 체험이 공존하는 이곳에서, 지수와 금오 요정들은 다섯 번째 햇살을 맞을 준비를 합니다.",
    situation_text: "“여기서 과학관 이름을 맞춰야, 내부 광장에서 일광욕을 즐길 수 있어요.”",
    npc_name: "지수",
    npc_dialogue:
      "“해양수산과학관은 해양 수산 문화를 전승·보전하고 청소년 교육의 장으로 활용하기 위해 건립된 곳이래요.”",
    quiz_question:
      "여수시 돌산읍에 위치하며, 해양 수산 문화를 전승·보전하고, 수산과학을 발전시키며, 청소년 교육의 장으로 활용하기 위해 만들어진 과학관의 이름은?",
    quiz_option1: "A. 체험전시관",
    quiz_option2: "B. 해양수과학관",
    quiz_option3: "C. 바다홍보전시관",
    quiz_answer: "B. 해양수과학관",
    quiz_difficulty: "중",
    culture_info:
      "해양수산과학관은 해양 수산 문화를 전승·보전하고, 수산과학을 발전시키며, 청소년 교육의 장으로 활용하기 위해 1993년 12월 29일 착공하여 1998년 2월 14일 준공하였다.",
    reward_text: "해양수산과학관에서 다섯 번째 일광욕을 진행합니다.",
    reward_effect: "“바닷바람에 실린 햇살이 요정들의 돌 몸을 기분 좋게 데워줍니다.(5/11)”",
    next_hint_text: "“다음은 방죽포 해수욕장의 ‘송림’으로 이동합니다.”",
  },
  {
    step_id: "6",
    scenario_id: "SCN007",
    sequence: 6,
    location_id: "LOC_BJPO_BEACH_006",
    location_name: "방죽포해수욕장",
    background_text:
      "방죽포해수욕장의 백사장 뒤로 펼쳐진 150여 그루의 소나무 숲. 지수와 금오 요정들은 몽돌 해안의 은은한 파도 소리와 소나무 그늘이 어우러진 이곳에서 햇살을 기다립니다.",
    situation_text: "“이 숲의 이름을 맞춰야, 소나무 그늘 아래에서 일광욕을 즐길 수 있어요.”",
    npc_name: "지수",
    npc_dialogue: "“방죽포해수욕장은 백사장 뒤로 잘 조성된 송림이 유명해요. 퀴즈를 풀고 소나무 그늘에서 쉬어볼까요?”",
    quiz_question:
      "방죽포해수욕장의 백사장 뒤편에 150여 그루가 조성되어, 해변을 찾은 사람들이 소나무 그늘 아래에서 휴식을 취할 수 있도록 만든 숲은 무엇인가요?",
    quiz_option1: "A. 방죽포",
    quiz_option2: "B. 죽림리",
    quiz_option3: "C. 송림",
    quiz_answer: "C. 송림",
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 돌산읍 죽포리에 있는 해수욕장으로, 백사장 뒤편으로 150여 그루의 송림이 잘 조성되어 있어 바다에서 나와서는 소나무 그늘에서 휴식을 취할 수 있다.",
    reward_text: "방죽포해수욕장에서 여섯 번째 일광욕을 진행합니다.",
    reward_effect: "“소나무 그늘 사이로 비치는 햇살이 요정들의 돌 몸을 포근히 감쌉니다.(6/11)”",
    next_hint_text: "“다음은 향일암 입구로 이동합니다.”",
  },
  {
    step_id: "7",
    scenario_id: "SCN007",
    sequence: 7,
    location_id: "LOC_HYA_ENTRANCE_007",
    location_name: "향일암",
    background_text:
      "향일암 입구. 바위 절벽 위에 자리 잡은 이곳은 해를 향해 열린 듯한 돌문과 세 조각상이 방문객을 맞이합니다. 지수와 금오 요정들은 고즈넉한 사찰의 고요 속에서 일곱 번째 햇살을 기다립니다.",
    situation_text: "“여기서 올바른 행동을 가린 조각상을 알아야, 향일암 입구에서 일광욕을 즐길 수 있어요.”",
    npc_name: "지수",
    npc_dialogue:
      "“향일암 입구에는 세 개의 조각상이 있어요. 각 조각상들은 ‘악을 보지 말라, 듣지 말라, 말하지 말라’는 의미를 담고 있어요.”",
    quiz_question:
      "향일암 입구에는 세 조각상이 각각 다른 행동을 하고 있습니다. 이 중 ‘악을 보지 말라’는 의미로 어떤 행동을 하고 있을까?",
    quiz_option1: "A. 입 막기",
    quiz_option2: "B. 귀 막기",
    quiz_option3: "C. 눈 가리기",
    quiz_answer: "C. 눈 가리기",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 돌산읍 율림리에 있는 사찰로, 향일암은 이름난 관음 기도처입니다. 매년 1월 1일 해맞이 행사가 열리며, 이 조각상들은 각각 ‘눈 가리기’, ‘입 막기’, ‘귀 막기’로 악을 보거나 듣거나 말하지 말라는 의미를 담고 있습니다.",
    reward_text: "향일암 입구에서 일곱 번째 일광욕을 진행합니다.",
    reward_effect: "“조각상 사이로 비치는 햇살이 요정들의 돌 몸을 은은히 비춥니다.(7/11)”",
    next_hint_text: "“다음은 향일암 뒤편 원통암으로 이동합니다.”",
  },
  {
    step_id: "8",
    scenario_id: "SCN007",
    sequence: 8,
    location_id: "LOC_HT_WONTONG_008",
    location_name: "원통암",
    background_text:
      "향일암 뒤편 암벽 아래 조용히 자리한 작은 암자. 지수와 금오 요정들은 암벽에 새겨진 옛 기록을 보며 여덟 번째 햇살을 기다립니다.",
    situation_text: "향일암 뒷 편에 있는 암자의 이름을 알아야, 이곳에서 일광욕을 즐길 수 있어요.”",
    npc_name: "지수",
    npc_dialogue:
      "“예부터 향일암은 이름난 관음 기도처였어요. 특히 이곳에는 원효대사가 수도했다는 암자가 향일암 뒤편에 있어요.”",
    quiz_question: "향일암 뒤편 암벽에 자리 잡아 원효대사가 수도했다는 암자는 무엇이라고 하나요?",
    quiz_option1: "A. 대웅전",
    quiz_option2: "B. 원통암",
    quiz_option3: "C. 해수관음보살",
    quiz_answer: "B. 원통암",
    quiz_difficulty: "중",
    culture_info:
      "예부터 향일암은 이름난 관음 기도처로서, 일 년 내내 전국 각지에서 기도 성취를 위해 신도들이 몰려든다. 여수 지역에서는 오히려 교통이 불편하고 시내 가까이에 절이 많아 찾는 신도들이 적다. 매년 1월 1일 아침에 떠오르는 해맞이 행사는 향일암의 주요 연례 행사이다. 향일암 뒤편 암벽에는 원효대사가 수도했다는 암자인 원통암이 있다.",
    reward_text: "향일암 뒤편 원통암에서 여덟 번째 일광욕을 진행합니다.",
    reward_effect: "“암자 사이로 비치는 햇살이 요정들의 돌 몸을 따스히 감쌉니다.(8/11)”",
    next_hint_text: "“다음은 돌문정으로 이동합니다.”",
  },
  {
    step_id: "9",
    scenario_id: "SCN007",
    sequence: 9,
    location_id: "LOC_HT_GATE_009",
    location_name: "해탈문",
    background_text:
      "향일암 돌문 입구에 도착했습니다. ‘열반에 이르는 문’이라는 상징을 품은 이곳에서 아홉 번째 햇살을 기다립니다.",
    situation_text: "“향일암의 돌문이 가진 의미를 알아야, 앞에서 일광욕을 즐길 수 있어요.”",
    npc_name: "지수",
    npc_dialogue:
      "“향일암의 돌문은 속세의 고통에서 벗어나 열반에 이르는 상징적 의미를 가지고 있어 해탈문이라 불리기도 해요.”",
    quiz_question:
      "향일암 돌문 입구에 세워져, 속세의 고통에서 벗어나 열반에 이르는 상징적 의미를 담은 문은 무엇인가요?",
    quiz_option1: "A. 자연암석",
    quiz_option2: "B. 홍문",
    quiz_option3: "C. 해탈문",
    quiz_answer: "C. 해탈문",
    quiz_difficulty: "중",
    culture_info:
      "예부터 향일암은 이름난 관음 기도처로서, 일 년 내내 전국 각지에서 기도 성취를 위해 신도들이 몰려든다. 여수 지역에서는 오히려 교통이 불편하고 시내 가까이에 절이 많아 찾는 신도들이 적다. 매년 1월 1일 아침에 떠오르는 해맞이 행사는 향일암의 주요 연례 행사이다. 향일암 돌문 입구에 세워져, 속세의 고통에서 벗어나 열반에 이르는 상징적 의미를 가진 해탈문이 있다.",
    reward_text: "해탈문 앞에서 아홉 번째 일광욕을 진행합니다.",
    reward_effect: "“문틈 사이로 들어오는 햇살이 요정들의 돌 몸을 포근히 감쌉니다.(9/11)”",
    next_hint_text: "“다음은 일출정으로 이동합니다.”",
  },
  {
    step_id: "10",
    scenario_id: "SCN011",
    sequence: 10,
    location_id: "LOC_HY_SUNRISE_010",
    location_name: "일출정",
    background_text:
      "향일암 정상부의 링 조형물 앞. 지수와 금오 요정들은 목재 데크를 따라 올라가며 드넓은 남해안과 떠오르는 해를 기다립니다.",
    situation_text: "“이곳의 정확한 명칭을 알아야, 링 조형물 한가운데에서 해돋이 햇살을 만끽할 수 있어요.”",
    npc_name: "지수",
    npc_dialogue:
      "“2025년 4월 재정비된 이곳 일출정은 링 조형물 안에서 해가 떠오르는 모습을 볼 수 있는 것으로 유명해요.”",
    quiz_question:
      "향일암에서 2025년 4월 재정비하였으며, 링 조형물 한가운데서 해가 뜨는 모습을 볼 수 있으며, 또 목재데크를 따라 올라가 전망대로 가면 남해안이 내려다 보이는 바다와 떠오르는 해를 볼 수 있어 많은 관광객들이 찾고 있는 장소는?",
    quiz_option1: "A. 포토존",
    quiz_option2: "B. 돌문정",
    quiz_option3: "C. 일출정",
    quiz_answer: "C. 일출정",
    quiz_difficulty: "중",
    culture_info:
      "2025년 4월 재정비된 이곳은 링 조형물 한가운데서 해가 떠오르는 모습을 볼 수 있으며, 목재 데크를 따라 올라가면 남해안과 떠오르는 해를 조망할 수 있어 많은 관광객들이 찾습니다.",
    reward_text: "일출정에서 열 번째 일광욕을 진행합니다.",
    reward_effect: "“해돋이 햇살이 요정들의 돌 몸을 찬란히 비춥니다.(10/11)”",
    next_hint_text: "“마지막 장소, 성두 풍화혈로 이동합니다.”",
  },
  {
    step_id: "11",
    scenario_id: "SCN011",
    sequence: 11,
    location_id: "LOC_SD_TAFONI_011",
    location_name: "성두 타포니",
    background_text:
      "돌산 성두 해안의 바위 절벽. 응결 암석과 화산쇄설물이 풍화되어 구멍이 뚫린 거대한 타포니가 장관을 이루고 있습니다. 지수와 금오 요정들은 마지막 열한 번째 햇살을 맞을 준비를 합니다.",
    situation_text: "“이 독특한 바위 구조의 이름을 맞혀야, 성두 타포니에서 마지막 일광욕을 즐길 수 있어요.”",
    npc_name: "지수",
    npc_dialogue:
      "“이곳 돌산 성두 해안에는 벌집형으로 발달한 ‘타포니’가 있어요. 독특한 구멍이 뚫린 바위 구조 이름을 맞혀보세요.”",
    quiz_question:
      "돌산 성두 해안에 형성된, 화산쇄설물과 응결 암석이 풍화되어 만들어진 구멍이 뚫린 독특한 바위 구조는 무엇인가요?",
    quiz_option1: "A. 타포니",
    quiz_option2: "B. 성두마을",
    quiz_option3: "C. 벌집형",
    quiz_answer: "A. 타포니",
    quiz_difficulty: "상",
    culture_info:
      "돌산도 남·동부 해안에 벌집형인 타포니가 발달되어 있으며, 안산암이 침식을 받아 직경 3m에 달하는 거대한 타포니를 관찰할 수 있습니다.",
    reward_text: "성두 타포니에서 열한 번째 일광욕을 진행합니다.",
    reward_effect: "“바닷물과 바람을 가른 햇살이 요정들의 돌 몸을 아름답게 물들입니다.(11/11)”",
    next_hint_text:
      "“지수, 덕분에 원 없이 일광욕 욕구를 풀었어요. 이제 더 이상 햇빛에 대한 갈증이 없습니다. 우리는 다시 돌이 되어 여수를 지키러 돌아갈게요. 당신은 정말 좋은 해설사였어요.”",
  },
]

type GameScreen = "intro" | "opening" | "location" | "situation" | "quiz" | "result" | "reward" | "ending"

interface YeosuAdventureGameProps {
  onGameEnd: (gameId: string, gameName: string, status: "completed" | "exited") => void
}

// NPC 이름에 따라 다른 아이콘(이모지)을 반환하는 함수
const getNpcEmoji = (npcName: string | null) => {
  switch (npcName) {
    case "지수":
      return "👩‍🎓"
    default:
      return "💬"
  }
}

// 시퀀스에 따라 올바른 이미지 경로를 반환하는 함수
const getImageSrc = (sequence: number) => {
  if (sequence === 3) {
    return `/images/SCN007_3.jpeg`
  }
  if (sequence === 11) {
    return `/images/SCN007_11.jpeg`
  }
  return `/images/SCN007_${sequence}.jpg`
}

export default function YeosuAdventureGame({ onGameEnd }: YeosuAdventureGameProps) {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>("intro")
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false)
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
      if (currentStepIndex === gameData.length - 1) {
        setCurrentScreen("ending")
      } else {
        // reward_text가 있는 경우에만 보상 화면을 보여줍니다.
        if (currentStep.reward_text) {
          setCurrentScreen("reward")
        } else {
          // 보상 텍스트가 없으면 바로 다음 단계로 넘어갑니다.
          handleRewardNext()
        }
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

  const handleRestart = () => {
    setCurrentStepIndex(0)
    setCurrentScreen("intro")
    setSelectedAnswer("")
    setIsCorrectAnswer(false)
    setGameStarted(false)
    onGameEnd(scenarioInfo.id, scenarioInfo.name, "completed")
  }

  const handleExitGame = () => {
    onGameEnd(scenarioInfo.id, scenarioInfo.name, "exited")
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "하":
        return "bg-green-100 text-green-800 border-green-200"
      case "중":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "상":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 p-4">
      <div className="max-w-lg mx-auto">
        {/* 헤더와 진행률 */}
        {gameStarted && currentScreen !== "intro" && currentScreen !== "ending" && (
          <Card className="mb-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-amber-900 flex items-center gap-2">
                  <Camera className="w-6 h-6 text-amber-600" />
                  {scenarioInfo.name}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded-full font-semibold">
                    {currentStepIndex + 1} / {gameData.length}
                  </div>
                  <Button
                    onClick={handleExitGame}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700 p-1"
                  >
                    <LogOut className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <Progress
                value={progress}
                className="h-2 bg-amber-200 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-amber-500 [&::-webkit-progress-value]:to-orange-500"
              />
            </CardContent>
          </Card>
        )}

        {/* 게임 화면들 */}
        <Card className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-amber-200">
          {/* 인트로 화면 */}
          {currentScreen === "intro" && (
            <CardContent className="p-8 text-center space-y-6">
              <div className="text-8xl mb-4">🎒</div>
              <CardTitle className="text-3xl font-bold text-amber-900 mb-2">{scenarioInfo.name}</CardTitle>
              <CardDescription className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                {scenarioInfo.genre}
              </CardDescription>

              <div className="text-left space-y-4 bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-inner">
                <h3 className="font-bold text-lg text-amber-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-600" />
                  등장인물 소개
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  {scenarioInfo.characters_info.map((char) => (
                    <div key={char.name} className="flex items-start gap-3">
                      <span className="text-2xl">{char.emoji}</span>
                      <div>
                        <strong className="text-amber-800">{char.name}:</strong>
                        <p>{char.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-left space-y-3 bg-green-50 p-6 rounded-xl border border-green-200 shadow-inner">
                <h3 className="font-bold text-lg text-green-900 flex items-center gap-2">
                  <ScrollText className="w-5 h-5 text-green-600" />
                  시나리오 개요
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">{scenarioInfo.overview}</p>
              </div>

              <Button
                onClick={handleStartGame}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" /> 여행 시작하기
              </Button>
            </CardContent>
          )}

          {/* 오프닝 화면 */}
          {currentScreen === "opening" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">👩‍🎓</div>
                <CardTitle className="text-2xl font-bold text-amber-800">지수</CardTitle>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl space-y-4 border-l-4 border-amber-400 shadow-inner">
                <p className="text-sm leading-relaxed text-gray-800">{scenarioInfo.opening_dialogue}</p>

                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <p className="font-bold text-amber-900 flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    {scenarioInfo.opening_question}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleAcceptQuest}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md transform hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5 mr-2" /> {scenarioInfo.opening_option1}
                </Button>
                <Button
                  onClick={handleRestart}
                  variant="outline"
                  className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-all duration-200 border-gray-300"
                >
                  <XCircle className="w-5 h-5 mr-2" /> {scenarioInfo.opening_option2}
                </Button>
              </div>
            </CardContent>
          )}

          {/* 장소 도착 화면 */}
          {currentScreen === "location" && currentStep && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl text-amber-500 mb-4 animate-fade-in">
                  <Map className="w-full h-full" />
                </div>
                <CardTitle className="text-2xl font-bold text-amber-900 flex items-center justify-center gap-2">
                  <Map className="w-6 h-6 text-amber-600" />
                  {currentStep.location_name}
                </CardTitle>
                <div className="w-full h-48 bg-gradient-to-b from-amber-200 to-amber-300 rounded-xl flex items-center justify-center shadow-inner">
                  <img
                    src={getImageSrc(currentStep.sequence) || "/placeholder.svg"}
                    alt={currentStep.location_name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 shadow-sm">
                  <p className="text-amber-800 font-semibold flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-600" /> 추억의 장소에 도착했습니다!
                  </p>
                </div>
              </div>

              <Button
                onClick={handleLocationNext}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-6 rounded-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-md transform hover:scale-105"
              >
                <Compass className="w-5 h-5 mr-2" /> 추억 더듬어보기
              </Button>
            </CardContent>
          )}

          {/* 상황 화면 */}
          {currentScreen === "situation" && currentStep && (
            <CardContent className="p-8 space-y-6">
              <CardTitle className="text-xl font-bold text-amber-900 text-center mb-4">
                {currentStep.location_name}
              </CardTitle>

              <div className="space-y-4">
                <div className="bg-amber-50 p-5 rounded-xl border border-amber-200 shadow-inner">
                  <p
                    className="text-sm leading-relaxed text-gray-800 italic"
                    dangerouslySetInnerHTML={{ __html: currentStep.background_text }}
                  ></p>
                </div>

                <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{getNpcEmoji(currentStep.npc_name)}</div>
                    <p
                      className="text-sm leading-relaxed text-gray-800"
                      dangerouslySetInnerHTML={{ __html: currentStep.situation_text }}
                    ></p>
                  </div>
                </div>

                {currentStep.npc_name && currentStep.npc_dialogue && (
                  <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-400 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{getNpcEmoji(currentStep.npc_name)}</div>
                      <div>
                        <p className="font-bold text-purple-700 mb-2">{currentStep.npc_name}</p>
                        <p
                          className="text-sm leading-relaxed text-gray-800"
                          dangerouslySetInnerHTML={{ __html: currentStep.npc_dialogue }}
                        ></p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button
                onClick={handleSituationNext}
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-4 px-6 rounded-xl font-bold hover:from-yellow-600 hover:to-amber-600 transition-all duration-200 shadow-md transform hover:scale-105"
              >
                <Brain className="w-5 h-5 mr-2" /> 퀴즈 풀기
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

              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 shadow-inner">
                <CardTitle className="text-lg font-bold text-center mb-4 text-gray-800 flex items-center justify-center gap-2">
                  <HelpCircle className="w-5 h-5 text-yellow-600" />
                  {currentStep.quiz_question}
                </CardTitle>
              </div>

              <div className="space-y-3">
                {[currentStep.quiz_option1, currentStep.quiz_option2, currentStep.quiz_option3]
                  .filter(Boolean)
                  .map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleQuizAnswer(option as string)}
                      variant="outline"
                      className={`w-full text-left p-4 rounded-xl font-medium text-gray-800 border-2 ${selectedAnswer === option ? "border-blue-500 bg-blue-100 shadow-md" : "border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50"} transition-all duration-200`}
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
                  <p className="text-sm leading-relaxed text-gray-800">{currentStep.culture_info}</p>
                </div>
              )}

              <div className="space-y-3">
                {isCorrectAnswer ? (
                  <Button
                    onClick={handleResultNext}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md transform hover:scale-105"
                  >
                    <ChevronRight className="w-5 h-5 mr-2" /> 다음으로
                  </Button>
                ) : (
                  <Button
                    onClick={handleRetryQuiz}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-xl font-bold hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md transform hover:scale-105"
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
                <div className="text-6xl text-yellow-500 animate-pulse-once">✨</div>
                <CardTitle className="text-2xl font-bold text-yellow-600">일광욕 성공!</CardTitle>
              </div>

              {currentStep.reward_text && (
                <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🎁</div>
                    <p className="text-sm leading-relaxed text-gray-800">{currentStep.reward_text}</p>
                  </div>
                </div>
              )}

              {currentStep.reward_effect && (
                <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 shadow-inner">
                  <h3 className="font-bold mb-3 text-purple-700 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" /> 햇살 효과
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
                    {currentStep.reward_effect}
                  </p>
                </div>
              )}

              {currentStep.next_hint_text && (
                <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💡</div>
                    <p className="text-sm leading-relaxed text-gray-800">{currentStep.next_hint_text}</p>
                  </div>
                </div>
              )}

              <Button
                onClick={handleRewardNext}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-6 rounded-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-md transform hover:scale-105"
              >
                {currentStepIndex < gameData.length - 1 ? (
                  <>
                    <Map className="w-5 h-5 mr-2" /> 다음 장소로
                  </>
                ) : (
                  <>
                    <Swords className="w-5 h-5 mr-2" /> 마지막 장소로
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
                <CardTitle className="text-3xl font-bold text-amber-900">모든 일광욕 성공!</CardTitle>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400 shadow-inner">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💌</div>
                    <div
                      className="space-y-3 text-sm text-gray-800 whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: currentStep.reward_effect || "" }}
                    ></div>
                  </div>
                </div>

                {currentStep.next_hint_text && (
                  <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-400 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">💬</div>
                      <p className="text-sm leading-relaxed text-gray-800">{currentStep.next_hint_text}</p>
                    </div>
                  </div>
                )}

                <div className="bg-yellow-50 p-6 rounded-xl text-center border border-yellow-200 shadow-md">
                  <p className="text-2xl font-bold text-amber-900 flex items-center justify-center gap-2">
                    <Trophy className="w-7 h-7 text-yellow-600" /> 축하합니다!
                  </p>
                  <p className="text-lg text-amber-700 font-semibold">금오 요정들의 소원을 모두 이뤄주었습니다.</p>
                </div>
              </div>

              <Button
                onClick={handleRestart}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-6 rounded-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-md transform hover:scale-105"
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
