"use client"

import { useState } from "react"
import {
  Star,
  Heart,
  Waves,
  Eye,
  Shield,
  MessageCircle,
  Zap,
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
} from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const gameData = [
  {
    step_id: "29",
    scenario_id: "SCN002",
    sequence: 1,
    location_id: "6824545cebaff406476ce28c",
    location_name: "이순신광장",
    background_text:
      '광장에 도착한 동백나무 요정은, 벨루가 정령들이 루크 선장에게 납치되던 순간 자신들의 흔적을 남겨 요정이 찾아올 수 있도록 한 물의 마법 흔적을 포착한다. 청동 이순신 동상의 받침돌에 음각된 "숨은 공신들의 헌신"이라는 문구를 보고 첫 번째 단서를 직감한 요정은, 발밑 연꽃 타일 사이로 은은한 물방울 모양 빛줄기를 발견한다.',
    situation_text:
      '"이 물방울 빛은 벨루가들이 흘린 물의 마법 흔적이야. 이곳에서 무엇을 진심으로 기리고 있는지 알아야, 다음 단서를 얻을 것 같아."',
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "'이순신광장'이라는 이름은 무엇을 기리기 위해 지어진 것인가요?",
    quiz_option1: "A. 임진왜란 승리 기념",
    quiz_option2: "B. 이순신을 도운 사람",
    quiz_option3: "C. 해상 교역 활성화",
    quiz_answer: "B. 이순신을 도운 사람",
    quiz_difficulty: "중",
    culture_info:
      "이순신광장은 조선 수군의 영웅 이순신 장군뿐 아니라, 그를 도와 왜적을 막아낸 숨은 공신들(이순신을 도운 사람)을 기리기 위해 조성된 광장입니다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text:
      '"우리 앞으로 은빛 물방울 흔적을 자세히 따라가 보자. 이를 따라가면 벨루가가 있는 장소를 알 수 있을 거야. 벨루가 정령의 기운은 좌수영음식문화거리 쪽으로 가장 강하게 이어지고 있어. 함께 확인해 볼까?"',
    image: "/images/SCN002_1.jpg",
  },
  {
    step_id: "30",
    scenario_id: "SCN002",
    sequence: 2,
    location_id: "6837f0e7ebaff406476cf3bc",
    location_name: "좌수영음식문화거리",
    background_text:
      "동백나무 요정과 함께 해물 향이 가득한 좁은 골목, '좌수영음식문화거리'에 도착했다. 간판 아래와 바닥 타일 위에는 벨루가들이 루크 선장에게 납치되던 순간 남긴 은빛 물방울 자국이 길게 이어져 있다. 요정은 식당 입구에 맺힌 작은 물방울과 그 아래 물결 문양 타일 위에 번진 물의 마법 흔적을 보고, 벨루가들이 이 골목을 지나면서 다음 장소로 가는 단서를 남겼음을 직감한다.",
    situation_text:
      '"이 골목 벽과 타일 위에 남아 있는 은빛 물방울 흔적이 반짝이고 있어. 여기서 이 거리가 무엇을 기리기 위해 만들어졌는지를 알아내면, 벨루가들이 남긴 다음 단서가 분명히 드러날 거야."',
    npc_name: null,
    npc_dialogue: null,
    quiz_question:
      "여수 지역의 대표적인 음식인 아귀탕, 아귀찜, 서대회, 게장백반, 해물삼합 등 다양한 음식을 맛볼 수 있는 이 음식 특화 거리의 이름은 무엇인가요?",
    quiz_option1: "A. 좌수영쇼핑거리",
    quiz_option2: "B. 좌수영음식문화거리",
    quiz_option3: "C. 좌수영역사문화거리",
    quiz_answer: "B. 좌수영음식문화거리",
    quiz_difficulty: "중",
    culture_info:
      "여수시 중앙동에 있는 음식 특화 거리로 2012년 세계박람회 개최지로 여수시가 결정되자 여수 지역의 특색 있는 음식 문화를 전하기 위하여 2009년 좌수영 음식문화거리를 조성하였다. 여수 지역의 대표적인 음식인 아귀탕과 아귀찜, 서대회, 게장백반, 해물삼합 등을 비롯한 다양한 음식들을 맛볼 수 있다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text:
      '"우리, 다음 은빛 물방울 흔적을 따라가 보자. 벨루가 정령들의 기운이 이 장소에서 여수 해양공원 쪽으로 가장 강하게 이어지고 있는 것 같아. 함께 가서 단서를 찾아보자!"',
    image: "/images/SCN002_2.jpeg",
  },
  {
    step_id: "31",
    scenario_id: "SCN002",
    sequence: 3,
    location_id: "6837faebebaff406476cf40f",
    location_name: "여수 해양공원",
    background_text:
      "동백나무 요정과 함께 여수 바닷바람이 시원하게 불어오는 '여수 해양공원'에 도착했다. 파도 소리와 함께 분수대 물줄기가 힘차게 솟구치는데, 그 안쪽에서 벨루가들이 남기고 간 은빛 물방울 흔적이 섬광처럼 반짝인다. 요정은 물기둥 사이에서 흔적을 좇으며, 벨루가들이 이곳을 지나면서 또 다른 단서를 남겼음을 직감한다. 바닷가 분수대 주변에 무언가 비밀이 숨겨져 있을 것만 같았다.",
    situation_text:
      '"은빛 물방울이 분수대 물줄기와 함께 빛나고 있어. 이 공원이 어떤 의미를 가진 곳인지 알아야, 벨루가들이 남긴 다음 흔적을 찾을 수 있을 거야."',
    npc_name: null,
    npc_dialogue: null,
    quiz_question:
      "중앙동 해양공원과 종포동 해양공원을 합쳐 만든 공원으로 한가롭게 산책을 즐기며 여수 밤바다를 감상할 수 있게 된 공원의 이름은 무엇인가요?",
    quiz_option1: "A. 종포마을",
    quiz_option2: "B. 여수해양공원과 종포해양공원",
    quiz_option3: "C. 낭만포차거리",
    quiz_answer: "B. 여수해양공원과 종포해양공원",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 중앙동 385-6번지 외 1필지인 여수해양공원과 중앙동 246-1번지 외 4필지인 종포 해양공원을 합쳐 여수해양공원이라고 한다. 2016년 종포 해양공원 안에 낭만포차거리가 조성되었으나 관광객이 늘어나면서 교통체증과 각종 소음, 불법 쓰레기 투기가 문제가 되면서 2019년 거북선대교 아래로 이전하여, 한가롭게 산책을 즐기며 여수 밤바다를 감상할 수 있게 되었다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text:
      '"우리, 분수대 주변에서 은빛 물방울 흔적을 더 따라가 보자. 벨루가 정령의 기운이 이번엔 여수 평화의 소녀상 쪽으로 이어지고 있는 것 같아. 함께 가볼까?"',
    image: "/images/SCN002_3.jpg",
  },
  {
    step_id: "32",
    scenario_id: "SCN002",
    sequence: 4,
    location_id: "68343ad9ebaff406476ced41",
    location_name: "여수 평화의소녀상",
    background_text:
      "동백나무 요정과 함께 종포해양공원 한켠에 세워진 '여수 평화의 소녀상' 앞에 도착했다. 부드러운 바닷바람 속에서 소녀상의 청동 표면 위로 은빛 물방울 흔적이 아른거리며 흐르고 있다. 요정은 소녀상의 발치 주변 바닥에서 벨루가 정령들이 남긴 듯한 물의 마법 잔향을 감지한다. 그 순간, 소녀상의 시선이 먼 바다를 응시하고 있는 듯 보여, 여기에 또 다른 단서가 숨겨져 있음을 직감한다.",
    situation_text:
      '"소녀상 발치에 물방울 흔적이 남아 있어. 이 소녀상이 설치된 곳의 의미를 알아야, 벨루가들이 여기서 남긴 흔적을 찾을 수 있을 거야."',
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "'여수 평화의소녀상'이 설치된 장소는 어디인가요?",
    quiz_option1: "A. 영웅의길",
    quiz_option2: "B. 해양공원 내 평화광장",
    quiz_option3: "C. 이순신공원",
    quiz_answer: "B. 여수해양공원 내 평화광장",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 중앙동 이순신광장 내 평화광장에 시민들이 건립 기금을 모아 세운 소녀상이다. 여수 평화의 소녀상 바로 뒤에 소녀상 평화비와 더불어 지역 시인들의 시작품이 반원형으로 배치되어 있으며, 제막식은 2017년 3월 1일 치러졌다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text:
      '"우리, 소녀상의 시선이 향하는 바닷가 쪽으로 가보자. 벨루가 정령의 기운이 해안로 건어물상가 시장 쪽으로 이어지는 것 같아. 함께 단서를 찾아볼까?"',
    image: "/images/SCN002_4.jpg",
  },
  {
    step_id: "33",
    scenario_id: "SCN002",
    sequence: 5,
    location_id: "6837fd5bebaff406476cf423",
    location_name: "해안로 건어물상가 시장",
    background_text:
      "동백나무 요정과 함께 바닷바람에 마른 어물 향이 가득 밴 '해안로 건어물상가 시장'으로 들어섰다. 시장의 좁은 골목마다 걸린 간판과 비릿한 바닥 물길 위로 은빛 물방울 흔적이 이어지고 있다. 요정은 쌓여 있는 마른 어물 틈새에서 반짝이는 작은 물의 흔적을 발견하고, 벨루가들이 이곳을 지나며 단서를 남겼음을 직감한다.",
    situation_text:
      '"건어물 더미 사이에서 은빛 물방울 흔적이 희미하게 반짝여. 이 시장이 어떤 물건을 주로 다루는지 알아내야, 벨루가들이 남긴 다음 흔적을 찾을 수 있을 거야."',
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "해안로 건어물상가 시장의 주요 취급 품목은 무엇인가요?",
    quiz_option1: "A. 건어물",
    quiz_option2: "B. 공산품",
    quiz_option3: "C. 농산물",
    quiz_answer: "A. 건어물",
    quiz_difficulty: "하",
    culture_info: "전라남도 여수시 교동에 있는 상설 시장으로 주요 취급 품목은 건어물 등이다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text:
      '"우리, 은빛 물방울 흔적이 골목 끝으로 이어지고 있어. 벨루가 정령의 기운이 고소대 쪽으로 점점 강해지고 있는 것 같아. 함께 가보자!"',
    image: "/images/SCN002_5.jpg",
  },
  {
    step_id: "34",
    scenario_id: "SCN002",
    sequence: 6,
    location_id: "682e7a58ebaff406476ce87c",
    location_name: "고소대",
    background_text:
      "동백나무 요정과 우리는 고소대에 올랐다. 높은 성벽 위에서 바다를 내려다보니 바닷바람 속에 실린 벨루가들의 물의 마법 흔적이 희미하게 반짝인다. 요정은 성벽 틈새에서 물방울이 스며든 자국을 발견하고, 이순신 장군이 군사를 지휘하던 장소와 벨루가들의 흔적 사이에 어떤 연결고리가 있음을 직감한다.",
    situation_text:
      '"성벽 틈새의 물방울 흔적이 점점 강해져. 여기에 이순신 장군님의 뜻이 깃들어 있을 것 같아. 함께 알아보자."',
    npc_name: "이순신 장군의 영혼",
    npc_dialogue:
      '그때, 푸른 안개가 일더니, 이순신 장군의 영혼이 우리 앞에 모습을 드러낸다. "동백나무 요정, 그리고 그대들. 나는 나라를 지킨 수군의 장수 이순신이다. 이곳은 내게 전략의 요충지였지. 이 장소의 이름을 맞힌다면, 적의 약점을 간파할 수 있는 눈의 힘을 너희에게 주마. 벨루가들을 구하고 루크 선장으로부터 바다를 구하려면 이 힘이 필요할 것이니라."',
    quiz_question: "임진왜란 때 이순신 장군이 작전 계획을 세우고 명령을 내린 곳으로 알려진 이곳의 이름은 무엇인가요?",
    quiz_option1: "A. 좌수영대첩비",
    quiz_option2: "B. 공덕비",
    quiz_option3: "C. 고소대",
    quiz_answer: "C. 고소대",
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 고소동(姑蘇洞)에 있는 사적지로 전라좌수영 성체의 치성(雉城) 위에 세운 포루의 일종으로서 장대(將臺)로 사용되던 건물이다. 임진왜란 때 이순신(李舜臣)이 작전계획을 세우고 명령을 내린 곳으로 알려져 있다. 현재 이곳에는 1947년에 여수 통제이공 수군대첩비와 여수 타루비(墮淚碑), 동령소갈을 안치하기 위한 비각이 세워져 있다.",
    reward_text:
      "\"훌륭해. 우리 이제 이순신 장군님께 적의 약점을 간파할 수 있는 '통찰의 눈'을 받을 수 있게 되었어. 이 힘으로 루크의 마법도 꿰뚫어보게 될 거야.\"",
    reward_effect:
      "효과 1: 적의 마법 흔적을 더 명확히 추적할 수 있으며, 비밀 경로도 감지할 수 있게 된다.\n효과 2: 적의 약점을 파악할 수 있다.",
    next_hint_text:
      '"우리, 장군님의 힘을 얻었으니 물방울 흔적이 이어지는 달빛갤러리로 가보자. 벨루가 정령들의 마지막 흔적이 그곳에 있을 거야. 함께 가자!"',
    image: "/images/SCN002_6.jpg",
  },
  {
    step_id: "35",
    scenario_id: "SCN002",
    sequence: 7,
    location_id: "682eb746ebaff406476ce963",
    location_name: "달빛 갤러리",
    background_text:
      "동백나무 요정과 함께 벨루가 정령들의 흔적을 좇아 마침내 '달빛 갤러리'에 들어섰다. 갤러리 안은 은은한 조명 아래 비어 있고, 전시 벽에는 바닷물처럼 일렁이는 은빛 잔영만 남아 있다. 요정은 갤러리 한복판에서 희미하게 남아 있는 물의 마법 흔적을 느끼며, 루크 선장이 이곳에 벨루가들을 가두었던 사실을 깨닫는다. 그러나 그 흔적을 따라가자 이미 벨루가들이 이곳을 빠져나가 아쿠아리움으로 몸을 숨겼다는 단서가 드러난다. 루크의 계획은 아직 끝나지 않았고, 벨루가를 구하려면 더 강한 힘이 필요하다는 현실이 우리를 압박한다.",
    situation_text:
      '"루크 선장이 벨루가들을 여기에 가둔 건 분명하지만… 이미 흔적이 사라졌어. 벨루가들은 스스로 탈출해 아쿠아리움으로 향한 것 같아. 하지만 지금 내 힘으론 그들을 구할 수 없어. 단서를 더 찾아 힘을 되찾아야 해. 우선 루크 선장이 네 조각으로 나누어 봉인해둔 내 힘을 되찾아야 할 것 같아. 그 장소들을 알아내려면, 먼저 이곳이 어떤 공간인지 풀어야 할 것 같아. 함께 생각해 보자!"',
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "예술 작품을 상설·기획 전시하는 공간을 무엇이라고 하나요?",
    quiz_option1: "A. 공연장",
    quiz_option2: "B. 갤러리",
    quiz_option3: "C. 도서관",
    quiz_answer: "B. 갤러리",
    quiz_difficulty: "중",
    culture_info:
      "여수 시민과 여수시를 찾아오는 관광객이 예술 작품을 쉽게 접할 수 있는 환경을 조성하여 생활 속에서 문화 예술을 향유할 기회를 제공하고, 지역 작가 중심으로 전시 기회를 부여하여 창작 의욕을 고취하고자 달빛갤러리를 열었다. 운영 시간은 오전 10시부터 오후 6시까지이며, 관람료는 무료이다. 매주 월요일과 1월 1일, 명절 당일은 휴관하고 있다.",
    reward_text:
      "\"훌륭해! 이곳이 예술을 전시하는 공간임을 알아낸 덕분에 실마리가 풀리기 시작했어. 루크 선장이 봉인해둔 4가지 중 '마법의 힘'을 되찾은 것 같아. 이제 루크의 마법 흔적을 조금 더 분명히 감지할 수 있을 거야!\"",
    reward_effect:
      "마법의 힘을 회복합니다.\n이제 적의 마법 흔적을 더 세밀히 감지하고 숨겨진 마법 장벽을 찾아낼 수 있습니다.",
    next_hint_text:
      '"우리, 이제 모든 힘을 되찾았어. 벨루가 정령들을 구하러 여수세계박람회장으로 가자! 정령들이 거기에서 루크 선장을 피해 숨어 있을 거야. 함께 끝을 보자!"',
    image: "/images/SCN002_7.jpg",
  },
  {
    step_id: "36",
    scenario_id: "SCN002",
    sequence: 8,
    location_id: "6835441debaff406476cee4e",
    location_name: "오포대",
    background_text:
      "동백나무 요정과 우리는 높은 언덕 위에 자리한 '오포대'에 도착한다. 이곳에서 내려다보이는 여수 앞바다는 푸르고 넓다. 하지만 바닷바람을 타고 희미하게 전해져 오는 루크 선장의 마법 기운에 요정은 몸을 떨며 말한다. 전망대 난간 위에서 은빛 물방울 흔적이 다시 반짝이고, 그 빛은 루크가 봉인해 둔 요정의 힘 한 조각이 이곳 어딘가에 숨겨져 있음을 알려준다.",
    situation_text:
      '"여기서 루크 선장의 마법 잔영이 강하게 느껴져… 분명 내 힘의 일부가 이곳 어딘가에 봉인되어 있을 거야. 하지만 그 힘을 되찾으려면, 먼저 이곳이 가진 의미를 풀어야 해. 함께 알아보자!"',
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "일제 강점기에 정오를 알리기 위해 '오포'를 쐈던 이 곳의 이름은 무엇인가요?",
    quiz_option1: "A. 오포대",
    quiz_option2: "B. 종화대",
    quiz_option3: "C. 고소대",
    quiz_answer: "A. 오포대",
    quiz_difficulty: "상",
    culture_info:
      "'오포대'는 일제 강점기에 정오를 알리던 오포(午砲)를 쐈던 곳이다. 여수 전경을 바라볼 수 있는 전망대가 설치되어 있으며, 오포대에서 내려오는 골목에는 과거 여수 지역을 찍어 놓은 사진들을 소재로 옛 여수의 모습과 현재 여수의 모습을 벽화 타일로 장식해 놓아 발전된 여수의 모습을 한눈에 확인할 수 있다.",
    reward_text:
      "\"좋아! 이곳의 의미를 풀어냈으니, 루크가 봉인해둔 4가지 중 '마법의 힘'을 되찾은 것 같아. 이제 루크의 마법 흔적을 조금 더 분명히 감지할 수 있을 거야!\"",
    reward_effect:
      "마법의 힘을 회복합니다.\n이제 적의 마법 흔적을 더 세밀히 감지하고 숨겨진 마법 장벽을 찾아낼 수 있습니다.",
    next_hint_text:
      '"우리, 이제 은빛 물방울 흔적이 고소동 1004 벽화골목 쪽으로 이어지고 있어. 거기서도 내 힘의 또 다른 조각을 찾아야 해. 함께 가볼까?"',
    image: "/images/SCN002_8.jpg",
  },
  {
    step_id: "37",
    scenario_id: "SCN002",
    sequence: 9,
    location_id: "682e862febaff406476ce899",
    location_name: "고소동 1004 벽화골목",
    background_text:
      "동백나무 요정과 함께 형형색색의 그림으로 뒤덮인 '고소동 1004 벽화골목'에 도달했다. 골목을 따라 이어진 벽화들 속엔 요정의 지혜를 암시하는 그림들이 어른거린다. 여수의 오래된 골목과 예술이 만나는 이곳에서, 요정은 잃어버린 '지혜의 힘'을 되찾을 수 있을지 모른다는 희망을 품는다.",
    situation_text:
      "\"이 벽화골목에 숨겨진 그림들이 모두 내 잃어버린 '지혜의 힘'과 이어져 있는 것 같아. 이 골목이 가진 이름과 뜻을 알아내야만, 내 힘을 되찾고 루크의 수수께미도 풀어낼 수 있을 거야. 함께 풀어보자!\"",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "2011년 6월 16일, 고소동 1004 벽화골목에 부여된 공식 명칭은 무엇인가요?",
    quiz_option1: "A. 천사벽화골목",
    quiz_option2: "B. 허영만화백거리",
    quiz_option3: "C. 바다이야기",
    quiz_answer: "A. 천사벽화골목",
    quiz_difficulty: "중",
    culture_info:
      "고소동 1004 벽화골목은 2009년 원도심을 활성화하고자 지역 주민들이 중심이 되어 조성하기 시작하였고, 2011년 6월 16일 정식 거리로 지정되었다.",
    reward_text:
      "\"좋아! 이 골목의 이름을 알아냈으니, 잃어버렸던 내 '지혜의 힘'이 돌아오는 걸 느껴. 이제 단서들 사이의 숨은 뜻을 풀어낼 수 있을 거야!\"",
    reward_effect:
      "지혜의 힘: 숨겨진 단서들의 의미를 풀어내고, 수수께끼와 함정도 간파할 수 있는 능력. 이 능력을 활용하여 퍼즐을 풀며 앞으로의 여정을 유리하게 이끌 수 있게 된다.",
    next_hint_text:
      '"내 힘의 기운이 다시 이어지고 있어. 이번엔 거북선대교 쪽에서 강한 기운이 느껴져. 가서 내 또 다른 힘을 찾아보자!"',
    image: "/images/SCN002_9.jpg",
  },
  {
    step_id: "38",
    scenario_id: "SCN002",
    sequence: 10,
    location_id: "6838080aebaff406476cf45c",
    location_name: "거북선대교",
    background_text:
      "동백나무 요정과 함께 바닷바람이 거세게 부는 '거북선대교' 위에 도달했다. 다리 밑 바닷물 위에는 루크의 마법 기운과 수호의 힘이 어지럽게 뒤섞여 있다. 요정은 다리 난간에서 은은히 빛나는 물결 무늬를 바라보며, 잃어버린 수호의 힘이 이곳 어딘가에 숨겨져 있음을 느낀다. 그 힘 없이는 벨루가 정령들을 루크의 공격으로부터 지킬 수 없다는 사실이 요정을 초조하게 만든다.",
    situation_text:
      "\"루크의 마법 기운이 이 다리 곳곳에 배어 있어. 내 '수호의 힘'이 이곳에 봉인돼 있는 게 틀림없어. 하지만 이 다리가 어떤 뜻을 기리기 위해 세워졌는지 알아야만 내 힘을 되찾을 수 있을 거야. 같이 풀어보자!\"",
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "이 연륙교의 이름은 조선 시대에 이순신 장군이 운용한 어떤 전투선을 기념하기 위해 지어졌나요?",
    quiz_option1: "A. 판옥선",
    quiz_option2: "B. 척후선",
    quiz_option3: "C. 거북선",
    quiz_answer: "C. 거북선",
    quiz_difficulty: "하",
    culture_info:
      "전라남도 여수시 종화동과 돌산읍 우두리를 잇는 연륙교로 2012여수세계박람회 개최를 대비하여 시가지 교통량 분산을 위해 2005년 8월 착공하여 2012년 4월 12일 임시개통하였으며, 2012년 6월에 정식개통하였다.",
    reward_text:
      "\"좋아! 이제 내 '수호의 힘'을 되찾았어. 루크의 공격에도 굴하지 않고, 벨루가 정령들을 지킬 힘이 생겼어. 다음 단서도 반드시 찾아낼 수 있을 거야!\"",
    reward_effect:
      "수호의 힘: 루크의 마법 공격을 막아내고, 벨루가 정령들과 동료들을 보호할 수 있는 방어의 힘.\n이 능력을 활용하여 위험한 상황에서도 굴하지 않고 불굴의 의지를 만들어낼 수 있다.",
    next_hint_text:
      '"우리, 바닷바람 속에서 이어진 은빛 물방울 흔적이 오동도 쪽으로 흐르고 있어. 이제 내 마지막 힘도 되찾아야 해. 함께 가보자!"',
    image: "/images/SCN002_10.jpg",
  },
  {
    step_id: "39",
    scenario_id: "SCN002",
    sequence: 11,
    location_id: "682d7586ebaff406476ce77e",
    location_name: "오동도",
    background_text:
      "동백나무 요정과 우리는 푸른 파도 소리가 가득한 '오동도'에 들어섰다. 섬 곳곳에는 루크의 마법 흔적이 여전히 희미하게 스며들어 있지만, 그 사이로 벨루가 정령들과 깊이 공명하기 위해 필요한 마지막 힘, 소통의 힘이 이곳 어딘가에 숨겨져 있음이 느껴진다. 그 힘 없이는 벨루가들의 마음을 이해하고 구출 작전을 완수할 수 없다는 사실이 요정을 긴장시키고 있다.",
    situation_text:
      "\"내 '소통의 힘'을 되찾아야만 벨루가 정령들의 진심을 들을 수 있을 거야. 하지만 그 전에, 이 섬의 이름이 무엇에서 유래했는지 알아야 해. 함께 풀어보자!\"",
    npc_name: null,
    npc_dialogue: null,
    quiz_question:
      "멀리서 보면 지형의 생김새가 오동잎처럼 보이고 옛날에는 오동나무가 빽빽이 있어 지어진 이 섬의 이름은?",
    quiz_option1: "A. 오동도",
    quiz_option2: "B. 동백도",
    quiz_option3: "C. 독도",
    quiz_answer: "A. 오동도",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 수정동에 있는 섬으로 멀리서 보면 지형의 생김새가 오동잎처럼 보이고 옛날에는 오동나무가 빽빽이 있어 오동도라 불리었으며, 한 때는 충무공 이순신 장군이 이 섬에 대나무를 심게 한 뒤 대나무가 번성하자 죽도(竹島)라 불렀다고 한다. 옛날에는 대섬이라고 불렀는데 오동도의 이름으로 불러지게 된 것은 조선 후기부터였다.",
    reward_text:
      "\"훌륭해! 드디어 내 '소통의 힘'을 되찾았어. 이제 벨루가 정령들과 마음을 주고받으며 그들이 숨겨둔 비밀을 풀 수 있을 거야!\"",
    reward_effect:
      "소통의 힘: 벨루가 정령들과 깊이 공명하고, 그들의 진심과 목소리를 직접 들을 수 있는 능력.\n이 능력을 활용하여 숨겨진 마음의 단서를 밝혀낼 뿐만 아니라, 정령들과 합동 공격을 펼쳐 루크의 마법에 맞서 싸우고 구출 작전을 성공으로 이끌 수 있게 된다.",
    next_hint_text:
      '"우리, 이제 모든 힘을 되찾았어. 벨루가 정령들을 구하러 여수세계박람회장으로 가자! 정령들이 거기에서 루크 선장을 피해 숨어 있을 거야. 함께 끝을 보자!"',
    image: "/images/SCN002_11.jpg",
  },
  {
    step_id: "40",
    scenario_id: "SCN002",
    sequence: 12,
    location_id: "6826cb0eebaff406476ce3dc",
    location_name: "여수세계박람회장",
    background_text:
      "동백나무 요정과 함께 드디어 '여수세계박람회장'에 들어섰다. 바닷물 향 가득한 아쿠아리움 깊은 곳에서 은빛 물결이 흔들리며 세 마리 벨루가 정령이 모습을 드러낸다. 벨루가 정령들은 루크 선장의 마법이 너무 강력해, 스스로를 봉인할 수밖에 없었다고 고백한다. 하지만 이제 요정의 힘이 돌아온 덕분에 봉인을 풀고 현실로 나올 수 있는 희망이 생겼다. 이 순간, 여수의 바다를 지킬 마지막 희망이 되살아난다.",
    situation_text:
      '"저기 보여? 저 은빛 물결 속에 벨루가 정령들이 있어… 드디어 우리가 다시 만났어. 루크의 마법은 여전히 남아 있지만, 이제 우리 함께 싸울 수 있어. 하지만 봉인을 풀기 위해선 이곳의 진짜 의미를 밝혀야 해. 같이 풀어보자!"',
    npc_name: "벨루가 정령들",
    npc_dialogue:
      '"동백나무 요정님… 우리 루크 선장의 마법이 너무 강해, 스스로를 봉인할 수밖에 없었어요. 하지만 당신이 돌아온 지금, 봉인을 풀 수 있을지도 몰라요. 다만… 이곳이 가진 진짜 의미를 맞혀야만 현실로 나올 수 있어요. 함께 풀어 주시겠어요?"',
    quiz_question: "여수세계박람회장 내 해양 생물을 직접 관람할 수 있는 시설은 무엇인가요?",
    quiz_option1: "A. 광교전망대",
    quiz_option2: "B. 스카이타워",
    quiz_option3: "C. 아쿠아리움",
    quiz_answer: "C. 아쿠아리움",
    quiz_difficulty: "중",
    culture_info:
      "여수 10경 중 하나로 2012여수세계박람회를 개최했던 장소이다. 현재는 스카이타워, 빅오, 아쿠아리움 등이 운영되고 있으며, 대규모 공연 및 행사가 가능한 컨벤션센터 기능을 갖추고 있다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text:
      '"벨루가 정령들도 다시 현실로 이어진 지금, 우리 모두가 여수의 평화를 지키기 위한 하나의 힘이 되었어. 하지만 루크의 그림자는 아직 남아있어… 그리고 아직 루크가 빼앗은 정령들의 힘을 되찾아야 해. 이제 여수신북항으로 향하자. 거기서부터 루크의 흔적이 다시 강하게 느껴지고 있어!"',
    image: "/images/SCN002_12.jpg",
  },
  {
    step_id: "41",
    scenario_id: "SCN002",
    sequence: 13,
    location_id: "6826c524ebaff406476ce3a2",
    location_name: "여수신북항",
    background_text:
      "동백나무 요정과 벨루가 정령들과 함께 루크 선장의 흔적을 쫓아 '여수신북항'에 들어섰다. 항구의 파도 위에는 마치 음악처럼 울리는 규칙적인 물결이 흐르고, 그 속에서 루크의 마법과 벨루가 정령들의 기운이 얽혀 있다. 요정은 이순신 장군의 영혼에게 받은 통찰의 눈을 떠올리며 주변의 흔적을 살펴보는데, 파도 사이로 은은히 반짝이는 바다 오르간의 마법 흔적이 감지된다.",
    situation_text:
      '"이순신 장군님께 받은 통찰의 눈으로 보니까… 저 파도 속에 무언가 숨겨져 있어! 바다의 음악 소리 속에 벨루가들의 물의 힘을 되찾을 단서가 숨어 있는 것 같아. 이곳이 가진 비밀부터 풀어야 해. 함께 풀어보자!"',
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "여수신북항에 설치되어, 파도의 움직임으로 소리를 내는 악기 장치는 무엇인가요?",
    quiz_option1: "A. 해시계광장",
    quiz_option2: "B. 오션오르간",
    quiz_option3: "C. 트릭아트",
    quiz_answer: "B. 오션오르간",
    quiz_difficulty: "상",
    culture_info:
      "여수신항을 대체할 목적으로 건설 중인 항만으로 국내 최초로 바다가 연주하는 오션오르간을 설치하였으며, 이외에도 트릭아트, 해시계광장 등이 있어 여수 시민들의 산책로로 알려지고 있다.",
    reward_text:
      '"훌륭해! 이 바다 오르간의 힘이 벨루가 정령들에게 이어졌어. 이제 정령들이 바다를 움직여 거대한 파도를 일으킬 수 있을 거야. 루크를 몰아낼 강력한 무기가 생겼어!"',
    reward_effect:
      "물의 힘: 파도와 물결을 자유자재로 조종하고, 바다를 일으켜 지형을 바꾸거나 적의 움직임을 교란할 수 있는 능력.\n이 능력을 활용하여 루크의 마법을 무력화하고, 추적과 전투에서 유리한 상황을 만들어낼 수 있게 된다.",
    next_hint_text:
      '"루크의 흔적이 계속 이어지고 있어… 다음 단서는 이순신대교 쪽이야. 거기서 정령들의 마지막 힘을 되찾아야 해. 어서 가보자!"',
    image: "/images/SCN002_13.jpg",
  },
  {
    step_id: "42",
    scenario_id: "SCN002",
    sequence: 14,
    location_id: "6826d656ebaff406476ce447",
    location_name: "이순신대교",
    background_text:
      "동백나무 요정과 벨루가 정령들과 함께 마지막 힘을 찾아 '이순신대교'에 발을 내딛는다. 거센 바닷바람 사이로 다리 아래로 빛나는 물길의 흐름이 루크의 마법과 맞서려는 정령의 의지를 비추고 있다. 요정은 이순신 장군의 통찰의 눈으로 다리 주변을 살펴보다, 다리의 기둥 아래 은은히 빛나는 마법진을 발견한다. 그 속에는 물의 다리를 만드는 힘의 흔적이 숨어 있었다.",
    situation_text:
      '"이순신 장군님께서 주신 통찰의 눈으로 보니, 저 다리 아래 숨겨진 마법진이 보여! 루크를 추적하려면 물 위로 길을 만들어야 해. 이 다리가 기리는 의미를 알아야, 마지막 정령 힘을 되찾을 거야. 함께 풀어보자!"',
    npc_name: null,
    npc_dialogue: null,
    quiz_question: "이순신대교는 어떤 유형의 교량인가요?",
    quiz_option1: "A. 사장교",
    quiz_option2: "B. 현수교",
    quiz_option3: "C. 트러스교",
    quiz_answer: "B. 현수교",
    quiz_difficulty: "상",
    culture_info: "전라남도 여수시 묘도동과 광양시 금호동을 잇는 현수교로 순수 우리 기술로 시공한 국내 첫 현수교이다.",
    reward_text:
      "\"대단해! 이제 정령들에 '물의 다리를 만드는 힘'을 되찾았어. 바다 위 어디든 루크를 추적할 수 있는 길을 만들어낼 수 있을 거야. 이제 결전을 준비하자!\"",
    reward_effect:
      "물의 다리 만드는 힘: 물 위에 길을 펼쳐 어디든 자유롭게 이동하고, 루크를 추적하거나 기습적으로 적을 포위할 수 있다.\n이 능력을 활용하여 험난한 바닷길도 극복하며 작전을 유리하게 이끌고, 루크의 도주를 차단해 최종 결전에 돌입할 수 있게 된다.",
    next_hint_text: '"루크 선장이 마지막으로 도망친 곳은 조명연합수군 역사공원이야. 이제 그곳에서 모든 것을 끝내자!"',
    image: "/images/SCN002_14.jpg",
  },
  {
    step_id: "43",
    scenario_id: "SCN002",
    sequence: 15,
    location_id: "6826df8eebaff406476ce475",
    location_name: "조명연합수군 역사공원",
    background_text:
      "드디어 루크 선장을 조명연합수군 역사공원에서 붙잡았다. 하지만 루크는 바다로 도주하려 몸부림치고 있고, 요정과 벨루가 정령들은 그를 막기 위해 마지막 에너지를 끌어모으고 있다. 루크의 마법이 여전히 강력해, 이곳에서 승부를 가르기 위해서는 숨겨진 역사의 의미를 밝혀야만 한다. 이제 여수의 바다의 운명이 이 순간에 달려 있다.",
    situation_text:
      '"지금이야… 루크를 끝낼 수 있는 마지막 기회야. 하지만 마법의 힘을 폭발시키려면 여기에 숨겨진 역사의 의미를 맞혀야 해! 같이 풀어보자!"',
    npc_name: "루크 선장",
    npc_dialogue:
      '"하… 결국 날 여기까지 몰아세우다니. 하지만 퀴즈도 풀지 못하고 날 잡겠다고? 웃기지 마라! 정답을 맞히지 못하면 너희의 에너지는 허공으로 사라질 뿐이야. 내 마법 앞에서 무의미하다고!"',
    quiz_question: "이 역사테마공원은 임진왜란 당시 어느 연합 수군의 충혼을 기리기 위해 조성되었나요?",
    quiz_option1: "A. 조선수군",
    quiz_option2: "B. 조명연합수군",
    quiz_option3: "C. 왜군",
    quiz_answer: "B. 조명연합수군",
    quiz_difficulty: "중",
    culture_info:
      "임진왜란 당시 조명연합수군의 충혼을 기리기 위해 당시 주둔지였던 묘도동 도독마을 일대에 조성된 역사테마공원이다.",
    reward_text: null,
    reward_effect: null,
    next_hint_text:
      '"정답이야! 루크의 마법이 완전히 무너졌어. 이제 여수의 바다는 다시 평화를 되찾았어. 벨루가 정령들과 난, 다시 바다 깊은 곳으로 돌아가 여수를 지킬 거야. 네가 있어서 여기까지 올 수 있었어. 정말 고마워."\n\n"여수의 바다를 다시 지킬 수 있게 된 건 모두 네 덕분이야. 언제든 다시 만날 날을 기다릴게. 잘 가. 너희들도 도움이 필요하면 언제든 불러줘. 여수 바다의 영웅아."\n\n동백나무 요정과 벨루가 정령들은 여수 바다를 수호하기 위해 다시 바다로 돌아간다. 바닷바람 속에 "언제든 도움이 필요하면 불러 달라"는 요정의 목소리가 잔잔히 울려 퍼진다. 이용자는 평화로워진 여수 바다를 뒤로하며 뿌듯한 미소를 짓는다.',
    image: "/images/SCN002_15.jpg",
  },
]

type GameScreen = "intro" | "opening" | "location" | "situation" | "quiz" | "result" | "reward" | "ending"

interface PlayerPowers {
  insight: boolean
  magic: boolean
  wisdom: boolean
  protection: boolean
  communication: boolean
  water: boolean
  bridge: boolean
}

interface YeosuAdventureGameProps {
  onGameEnd: (gameId: string, gameName: string, status: "completed" | "exited") => void
}

const IntroHeader = () => (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm py-3 px-4 z-50 shadow-sm border-b">
        <div className="max-w-lg mx-auto flex items-center justify-start">
            <a href="/" className="flex items-baseline cursor-pointer no-underline">
                <span className="text-blue-500 text-3xl font-bold mr-3">Dooroo</span>
                <span className="text-base font-bold text-gray-600">AI 기반 지역 탐방 퀘스트 플랫폼</span>
            </a>
        </div>
    </header>
)

export default function YeosuAdventureGame({ onGameEnd }: YeosuAdventureGameProps) {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>("intro")
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false)
  const [playerPowers, setPlayerPowers] = useState<PlayerPowers>({
    insight: false,
    magic: false,
    wisdom: false,
    protection: false,
    communication: false,
    water: false,
    bridge: false,
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
      setPlayerPowers((prevPowers) => {
        const newPowers = { ...prevPowers }
        switch (currentStepIndex) {
          case 5:
            newPowers.insight = true
            break
          case 7:
            newPowers.magic = true
            break
          case 8:
            newPowers.wisdom = true
            break
          case 9:
            newPowers.protection = true
            break
          case 10:
            newPowers.communication = true
            break
          case 12:
            newPowers.water = true
            break
          case 13:
            newPowers.bridge = true
            break
        }
        return newPowers
      })

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

  const handleRestart = () => {
    setCurrentStepIndex(0)
    setCurrentScreen("intro")
    setSelectedAnswer("")
    setIsCorrectAnswer(false)
    setPlayerPowers({
      insight: false,
      magic: false,
      wisdom: false,
      protection: false,
      communication: false,
      water: false,
      bridge: false,
    })
    setGameStarted(false)
    onGameEnd("yeosu", "여수 바다를 수호하라", "completed")
  }

  const handleExitGame = () => {
    onGameEnd("yeosu", "여수 바다를 수호하라", "exited")
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

  const PowerIcon = ({ power, active }: { power: keyof PlayerPowers; active: boolean }) => {
    const icons = {
      insight: Eye,
      magic: Star,
      wisdom: MessageCircle,
      protection: Shield,
      communication: Heart,
      water: Waves,
      bridge: Zap,
    }
    const Icon = icons[power]
    return (
      <div className={`p-2 rounded-full ${active ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"}`}>
        <Icon className="w-4 h-4" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">
        {currentScreen === "intro" && <IntroHeader />}
        <div className={`max-w-lg mx-auto p-4 ${currentScreen === 'intro' ? 'pt-20' : ''}`}>
        {gameStarted && currentScreen !== "intro" && currentScreen !== "ending" && (
          <Card className="mb-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                  <Waves className="w-6 h-6 text-blue-600" />
                  여수 바다를 수호하라
                </h1>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-blue-700 bg-blue-100 px-3 py-1 rounded-full font-semibold">
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
                className="h-2 bg-blue-200 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-blue-500 [&::-webkit-progress-value]:to-cyan-500"
              />

              <div className="flex gap-2 justify-center pt-2">
                {Object.entries(playerPowers).map(([power, active]) => (
                  <PowerIcon key={power} power={power as keyof PlayerPowers} active={active} />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="bg-white/95 rounded-2xl shadow-xl overflow-hidden border-2 border-blue-300">
          {currentScreen === "intro" && (
             <CardContent className="p-6 text-center space-y-5">
                <div className="flex justify-center pt-4 pb-2 text-7xl">
                    🌊
                </div>

                <CardTitle className="text-3xl font-bold text-gray-800">여수 바다를 수호하라</CardTitle>
                
                <CardDescription className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold">
                    어드벤처 게임
                </CardDescription>

                <div className="pt-4 space-y-4">
                    <div className="text-left space-y-4 bg-white p-5 rounded-xl border-2 border-blue-200">
                        <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            등장인물 소개
                        </h3>
                        <div className="space-y-4 text-sm text-gray-600">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl pt-1">🧚‍♀️</span>
                                <div>
                                    <strong className="font-bold text-gray-800">동백나무 요정:</strong>
                                    <p className="leading-relaxed mt-1">이순신 장군의 계약 상대였으나, 루크의 마법으로 힘을 잃고 약해진 상태</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl pt-1">🐋</span>
                                <div>
                                    <strong className="font-bold text-gray-800">세 마리의 물의 정령 벨루가:</strong>
                                    <p className="leading-relaxed mt-1">바다의 정령이자, 여수를 수호하기 위해 남겨진 세 마리의 벨루가</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl pt-1">🏴‍☠️</span>
                                <div>
                                    <strong className="font-bold text-gray-800">루크선장:</strong>
                                    <p className="leading-relaxed mt-1">악당해적단의 선장이자 동백나무 요정의 힘을 빼앗고 정령 벨루가들을 납치한다</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-left space-y-3 bg-white p-5 rounded-xl border-2 border-green-200">
                        <h3 className="font-bold text-lg text-green-900 flex items-center gap-2">
                            <ScrollText className="w-5 h-5 text-green-600" />
                            시나리오 개요
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600 pt-1">
                            이순신 장군은 나라를 걱정하며, 떠난 뒤에도 여수 바다를 지키라는 뜻으로 동백나무 요정과 물의 정령
                            벨루가들을 안배해 두었다. 그러나 악당 해적단의 루크 선장이 나타나 동백나무 요정의 힘을 빼앗고, 정령
                            벨루가들을 여수 곳곳에 봉인해버린다. 여수로 여행을 온 한 가족이 여수를 구해야 하는 특별한 미션에
                            휘말리게 된다.
                        </p>
                    </div>
                </div>

                <div className="pt-2">
                    <Button
                        onClick={handleStartGame}
                        className="w-full bg-blue-500 text-white py-3.5 px-6 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all duration-200 shadow-lg"
                    >
                        <Play className="w-5 h-5 mr-2" /> 게임 시작하기
                    </Button>
                </div>
            </CardContent>
          )}

          {currentScreen === "opening" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🧚‍♀️</div>
                <CardTitle className="text-2xl font-bold text-green-700">동백나무 요정</CardTitle>
              </div>

              <div className="bg-green-50 p-6 rounded-xl space-y-4 border-l-4 border-green-400 shadow-inner">
                <p className="text-sm leading-relaxed text-gray-800">
                  "나는 여수의 바다를 지키는 동백 요정이야! 루크 선장이 나와 함께 여수의 바다를 수호해오던 여수의 정령
                  벨루가들을 봉인해버렸어. 벨루가들을 모두 구하지 않으면 여수의 바다가 위험해져, 하지만, 나는
                  루크선장에게 나의 모든 힘을 빼앗긴 상태야. 혼자서는 그들을 구출할 수 없어... 부탁이야! 우리 함께
                  벨루가들을 구출하고 여수를 수호하자!"
                </p>

                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <p className="font-bold text-green-800 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    동백 요정과 함께 힘을 합쳐 물의 정령 벨루가들을 구하러 떠나시겠습니까?
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleAcceptQuest}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md transform hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5 mr-2" /> 예, 벨루가를 구하는 여정을 떠나겠습니다
                </Button>
                <Button
                  onClick={handleRestart}
                  variant="outline"
                  className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-all duration-200 border-gray-300"
                >
                  <XCircle className="w-5 h-5 mr-2" /> 아니오, 아직 준비가 되지 않았습니다
                </Button>
              </div>
            </CardContent>
          )}

          {currentScreen === "location" && currentStep && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl text-blue-500 mb-4 animate-fade-in">
                  <Map className="w-full h-full" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900 flex items-center justify-center gap-2">
                  <Map className="w-6 h-6 text-blue-600" />
                  {currentStep.location_name}
                </CardTitle>
                <div className="w-full h-48 bg-gradient-to-b from-blue-200 to-blue-300 rounded-xl flex items-center justify-center shadow-inner">
                  <img
                    src={currentStep.image || "/placeholder.svg"}
                    alt={currentStep.location_name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-blue-800 font-semibold flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600" /> 새로운 장소에 도착했습니다!
                  </p>
                </div>
              </div>

              <Button
                onClick={handleLocationNext}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md transform hover:scale-105"
              >
                <Compass className="w-5 h-5 mr-2" /> 탐험 시작하기
              </Button>
            </CardContent>
          )}

          {currentScreen === "situation" && currentStep && (
            <CardContent className="p-8 space-y-6">
              <CardTitle className="text-xl font-bold text-blue-900 text-center mb-4">
                {currentStep.location_name}
              </CardTitle>

              <div className="space-y-4">
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 shadow-inner">
                  <p
                    className="text-sm leading-relaxed text-gray-800"
                    dangerouslySetInnerHTML={{ __html: currentStep.background_text }}
                  ></p>
                </div>

                <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🧚‍♀️</div>
                    <p
                      className="text-sm leading-relaxed text-gray-800"
                      dangerouslySetInnerHTML={{ __html: currentStep.situation_text }}
                    ></p>
                  </div>
                </div>

                {currentStep.npc_name && currentStep.npc_dialogue && (
                  <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-400 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">👻</div>
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
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 px-6 rounded-xl font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-md transform hover:scale-105"
              >
                <Brain className="w-5 h-5 mr-2" /> 퀴즈 풀러가기
              </Button>
            </CardContent>
          )}

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
                      onClick={() => handleQuizAnswer(option)}
                      variant="outline"
                      className={`w-full text-left p-4 rounded-xl font-medium text-gray-800 border-2 ${selectedAnswer === option ? "border-blue-500 bg-blue-100 shadow-md" : "border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50"} transition-all duration-200`}
                    >
                      {option}
                    </Button>
                  ))}
              </div>
            </CardContent>
          )}

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

          {currentScreen === "reward" && currentStep && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl text-yellow-500 animate-pulse-once">✨</div>
                <CardTitle className="text-2xl font-bold text-yellow-600">보상 획득!</CardTitle>
              </div>

              {currentStep.reward_text && (
                <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🧚‍♀️</div>
                    <p className="text-sm leading-relaxed text-gray-800">{currentStep.reward_text}</p>
                  </div>
                </div>
              )}

              {currentStep.reward_effect && (
                <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 shadow-inner">
                  <h3 className="font-bold mb-3 text-purple-700 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" /> 획득한 능력
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
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md transform hover:scale-105"
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

          {currentScreen === "ending" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-8xl animate-tada">🎊</div>
                <CardTitle className="text-3xl font-bold text-blue-900">게임 완료!</CardTitle>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400 shadow-inner">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🧚‍♀️</div>
                    <div className="space-y-3 text-sm text-gray-800">
                      <p dangerouslySetInnerHTML={{ __html: gameData[gameData.length - 1].next_hint_text || "" }}></p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-200 shadow-inner">
                  <p className="text-sm leading-relaxed text-gray-800">
                    동백나무 요정과 벨루가 정령들은 여수 바다를 수호하기 위해 다시 바다로 돌아간다. 바닷바람 속에
                    "언제든 도움이 필요하면 불러 달라"는 요정의 목소리가 잔잔히 울려 퍼진다. 평화로워진 여수 바다를
                    뒤로하며 뿌듯한 미소를 짓는다.
                  </p>
                </div>

                <div className="text-center space-y-2 bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-md">
                  <p className="text-2xl font-bold text-blue-900 flex items-center justify-center gap-2">
                    <Trophy className="w-7 h-7 text-yellow-600" /> 축하합니다!
                  </p>
                  <p className="text-lg text-blue-700 font-semibold">여수의 바다 수호자가 되었습니다</p>
                </div>
              </div>

              <Button
                onClick={handleRestart}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md transform hover:scale-105"
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
