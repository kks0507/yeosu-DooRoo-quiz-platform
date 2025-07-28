"use client"

import { useState } from "react"
import Image from "next/image" // Import Image component
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
} from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// --- 새 시나리오 정보 ---
const scenarioInfo = {
  id: "SCN_YEOWALK_001",
  name: "초등 친구들의 여수 우정 여행",
  genre: "회상 우정 여행 드라마",
  characters_info: [
    {
      emoji: "👩‍🏫",
      name: "수연",
      description:
        "여수에서 같은 중학교 같은 반을 나온 동창. 은퇴 후에도 호기심 많고 여행 기획을 즐기는 전직 역사 교사로서, 친구들의 다소 수줍은 마음을 다독이며 여정을 이끈다.",
    },
    {
      emoji: "👨‍✈️",
      name: "영만",
      description:
        "조선 수군 장군 후손이자 같은 반 동창. 은퇴 공무원으로 박물관에서 오랜 시간 역사 자료를 다뤄 왔으며, 옛 군사 이야기와 유머를 곁들여 분위기를 띄운다.",
    },
    {
      emoji: "👩‍🌾",
      name: "순자",
      description:
        "중학교 때부터 함께한 동창이자 동네 토박이. 은퇴한 문화유산 가이드로 한문과 마을 전통 지식을 친구들에게 쉽게 풀어 주며, 소풍 코스에 얽힌 구전 설화까지 알려준다.",
    },
  ],
  overview:
    "수연, 영만, 순자는 같은 중학교 같은 반 친구로서 어린 시절 중학교 소풍 때 여수의 명소 일곱 곳을 돌며 타임캡슐을 묻어두었다. 은퇴 후 40년 만에 그날의 코스를 그대로 따라 다시 모여, 각 장소에서 역사와 추억을 나누고 퀴즈를 풀이하며 묻어둔 타임캡슐의 단서들을 하나씩 되찾는다.",
  opening_dialogue: "수연: “얘들아, 우리 같은 중학교 같은 반 친구로서, 40년 전 소풍 코스를 다시 걷는다니 감회가 새롭구나!”",
  opening_question: "“중학교 소풍 당시 묻어둔 타임캡슐 단서를 찾아 우정 여행을 시작해 볼까?”",
  opening_option1: "- 네, 어린 시절 추억을 다시 꺼내며 즐겁게 떠나요!",
  opening_option2: "- 아직 마음의 준비가 좀 필요해요…",
}

// --- 새 게임 데이터 ---
const gameData = [
  {
    step_id: 1,
    scenario_id: "SCN_YEOWALK_001",
    sequence: 1,
    location_id: "LOC_YS_TERMINAL_001",
    location_name: "여수시외버스터미널",
    background_text: "아침 햇살이 버스터미널 유리창을 부드럽게 감싸고, 40년 전 친구들과 처음 소풍을 떠났던 설렘이 마음속에 되살아난다.",
    situation_text: "“얘들아, 이곳이 우리가 중학교 소풍 때 첫 정거장으로 삼았던 여수시외버스터미널이란다. 그날의 기분이 떠오르지 않니?”",
    npc_name: "수연",
    npc_dialogue: "“1982년에 세워진 이 터미널 앞에서 우리도 사진을 찍고, 작은 메모를 타임캡슐에 넣었었지. 첫 단서를 찾아보자!”",
    quiz_question: "1982년에 건립되어 여수 시민과 여행객의 편리한 교통을 위해 세워진 이 버스 기반 교통 시설의 명칭은 무엇인가요?",
    quiz_option1: "A. 여수종합버스터미널",
    quiz_option2: "B. 여수시외버스터미널",
    quiz_option3: "C. 여수고속버스터미널",
    quiz_answer: "B. 여수시외버스터미널",
    quiz_difficulty: "중",
    culture_info: "여수시외버스터미널은 여수 시민들과 외래객들의 편리한 교통을 위하고 여행객들의 편의를 위해 1982년에 건립되었다.",
    reward_text: "첫 번째 타임캡슐 단서 조각을 발견했습니다!",
    reward_effect: "어린 시절 소풍 사진 한 장이 담긴 작은 메모가 모습을 드러냈습니다. 첫 추억의 퍼즐 조각이 완성되었습니다.",
    next_hint_text: "“다음 단서는 안숙사적비에 있는 것 같아 거기로 가보자!”",
  },
  {
    step_id: 2,
    scenario_id: "SCN_YEOWALK_001",
    sequence: 2,
    location_id: "LOC_YS_ANSUK_002",
    location_name: "안숙사적비",
    background_text: "안숙사적비 앞에는 바다 내음이 어린 전라도 수군의 혼이 서린 듯 차분한 기운이 감돈다. 비석에 새겨진 글자 하나하나가 조선 후기 전라도 수군을 이끈 안숙 장군의 공적을 기리고 있다.",
    situation_text: "“이곳이 바로 우리가 중학교 때도 스승님과 함께 둘러보았던 안숙사적비란다. 오늘도 그 충의의 마음을 다시 느껴보자고!”",
    npc_name: "영만",
    npc_dialogue: "“우리 집안에도 전라좌수사 후손이 있다 했지? 안숙 장군의 용맹과 지혜를 기리며, 여기서 단서를 찾아보자고.”",
    quiz_question: "안숙사적비는 조선 후기 전라도 수군을 지휘하던 어떤 관직의 인물 선정을 기리기 위해 세워졌나요?",
    quiz_option1: "A. 전라병영사 이순신",
    quiz_option2: "B. 전라우수사 원균",
    quiz_option3: "C. 전라좌수사 안숙",
    quiz_answer: "C. 전라좌수사 안숙",
    quiz_difficulty: "중",
    culture_info: "전라남도 여수시 연등동에 있는 조선 후기 전라좌수사 안숙의 선정을 기리기 위해 세운 사적비이다.",
    reward_text: "두 번째 타임캡슐 단서 조각을 발견했습니다!",
    reward_effect: "작은 나무조각에 새겨진 ‘소꿉친구 서명’ 일부가 드러났습니다. 우정의 흔적이 또 하나 맞춰졌습니다.",
    next_hint_text: "“다음 단서는 잉구부 전투지에 숨겨져 있는 것 같아 거기로 가보자!”",
  },
  {
    step_id: 3,
    scenario_id: "SCN_YEOWALK_001",
    sequence: 3,
    location_id: "LOC_YS_INGUBU_003",
    location_name: "잉구부 전투지",
    background_text: "잉구부 전투지는 잔잔한 들판과 바다가 맞닿은 곳으로, 그 옛날 치열한 전투의 흔적이 고요 속에 서려 있다. 풀잎 사이로 스며든 전운이 친구들의 마음에 묵직한 울림을 전한다.",
    situation_text: "“여기서 진압군과 14연대가 맞붙어 싸웠다지. 우리도 그 용기와 희생을 함께 기억해 보자.”",
    npc_name: "순자",
    npc_dialogue: "“중학교 때 역사 시간에 배우지 않았니? 이 전투가 ‘인구부 전투’라 불렸단다. 용맹한 군인들의 발자국을 떠올려 보자.”",
    quiz_question: "여순사건 중 진압군과 14연대 군인 간 맞붙어 싸운 전투를 특별히 무엇이라 부르나요?",
    quiz_option1: "A. 인구부 전투",
    quiz_option2: "B. 봉오동전투",
    quiz_option3: "C. 민주항쟁 전투",
    quiz_answer: "A. 인구부 전투",
    quiz_difficulty: "상",
    culture_info: "여순사건 당시 진압군과 14연대 군인 간에 치열한 전투가 벌어졌는데, 이를 인구부 전투라고 한다.",
    reward_text: "세 번째 타임캡슐 단서 조각을 발견했습니다!",
    reward_effect: "작은 철제 열쇠 조각이 드러났습니다. 친구들이 함께 묻어둔 비밀 상자의 열쇠 단서입니다.",
    next_hint_text: "“다음 단서는 연등동 벅수 아래 숨겨져 있는 것 같아 거기로 가보자!”",
  },
  {
    step_id: 4,
    scenario_id: "SCN_YEOWALK_001",
    sequence: 4,
    location_id: "LOC_YS_BEOKSU_004",
    location_name: "연등동 벅수",
    background_text: "연등동 골목 한편에 마주 보고 서 있는 두 돌 장승, 벅수가 고즈넉한 미소로 마을을 지키고 있다. 오래된 돌결마다 새겨진 세월의 흔적이 친구들의 발길을 붙든다.",
    situation_text: "“여기 벅수 앞에서 어릴 적에도 장난치던 기억이 난다네. 오늘도 소원 하나씩 빌며 타임캡슐 단서를 찾아보자고”",
    npc_name: "수연",
    npc_dialogue: "“두 장승이 서로를 바라보는 모습이 참 정겹지? 우리도 서로를 바라보며 우정을 빌어보자!”",
    quiz_question: "여수 연등동에 마주 보고 서 있는 조선 후기 돌 장승 두 기를 통틀어 무엇이라 부르나요?",
    quiz_option1: "A. 화정려",
    quiz_option2: "B. 벅수",
    quiz_option3: "C. 남정중",
    quiz_answer: "B. 벅수",
    quiz_difficulty: "중",
    culture_info: "전라남도 여수시 연등동에 있는 조선 후기 돌로 만든 장승으로 여수 연등동 벅수는 서로 마주하고 있는 2기이다.",
    reward_text: "네 번째 타임캡슐 단서 조각을 발견했습니다!",
    reward_effect: "작은 붉은 리본 조각이 나왔습니다. 소꿉친구들이 함께 묶어 두었던 우정의 흔적입니다.",
    next_hint_text: "“다음 단서는 호좌수영 창설사적비에 숨겨져 있는 것 같아 거기로 가보자!”",
  },
  {
    step_id: 5,
    scenario_id: "SCN_YEOWALK_001",
    sequence: 5,
    location_id: "LOC_YS_HOJWA_005",
    location_name: "호좌수영 창설사적비",
    background_text: "호좌수영 창설사적비 주위는 옛 성벽 터와 초목이 어우러진 고즈넉한 공간이다. 비석에 새겨진 글귀는 1779년 김영수 장군이 좌수영성을 개축·보강하며 군사를 정비한 공적을 기리고 있다.",
    situation_text: "“여기서 김영수 장군의 근면과 단결 정신을 기렸지. 우리도 그 마음을 본받아 단서를 찾아보자.”",
    npc_name: "영만",
    npc_dialogue: "“비석을 살펴보니 정조 3년에 김영수 장군이 이 성을 새롭게 다듬고 군사들을 정비했다고 하네. 그의 이름을 기억하며 단서를 찾아보자고.”",
    quiz_question: "호남좌수사로 부임하여 좌수영성을 개축·보강하고 군사를 정비한 인물은 누구인가요?",
    quiz_option1: "A. 김영수",
    quiz_option2: "B. 정조",
    quiz_option3: "C. 사적비",
    quiz_answer: "A. 김영수",
    quiz_difficulty: "중",
    culture_info: "1779년(정조 3) 지방의 군사들과 의승(義僧)들이 뜻을 모아 세운 것으로, 호남좌수사로 부임한 김영수(金永綬)가 좌수영성을 대대적으로 개축, 보강하고 군사를 정비하였다. 또한 군기, 잡물 등을 마련하고 월과미(月課米) 및 정조(正租) 등을 마련한 공적을 기리기 위해 세워졌다.",
    reward_text: "다섯 번째 타임캡슐 단서 조각을 발견했습니다!",
    reward_effect: "작은 공기놀이 조각이 나타났습니다. 친구들이 남긴 용기와 단결의 상징입니다.",
    next_hint_text: "“다음 단서는 여수향교 안에 숨겨져 있는 것 같아 거기로 가보자!”",
  },
  {
    step_id: 6,
    scenario_id: "SCN_YEOWALK_001",
    sequence: 6,
    location_id: "LOC_YS_HYANG_006",
    location_name: "여수향교",
    background_text: "여수향교의 대성전 앞뜰은 고즈넉한 연못과 고목이 어우러진 배움의 정적을 느끼게 한다. 기와지붕 아래 공경의 마음이 깃든 비각과 전각들이 옛 선비들의 자취를 전한다.",
    situation_text: "“여기는 조선 후기 지역 유림의 교육과 관리를 위해 세워진 향교야. 우리도 잠시 선비의 마음으로 한문 글귀를 음미해 보자.”",
    npc_name: "순자",
    npc_dialogue: "“향교는 교육기관이었지. 매년 봄·가을에 석전제를 지내며 유생을 가르쳤다니, 그 뜻을 기억해보는건 어떨까?”",
    quiz_question: "조선 후기, 지역 유림의 교육과 관리 양성을 위해 세워진 여수향교는 어떤 유형의 기관인가요?",
    quiz_option1: "A. 교육기관",
    quiz_option2: "B. 사적비",
    quiz_option3: "C. 전각",
    quiz_answer: "A. 교육기관",
    quiz_difficulty: "중",
    culture_info: "여수향교는 1897년에 옛 좌수영 지역에 여수군이 설치되면서 창건되었다. 대성전에는 공자가 으뜸으로 모셔져 있으며, 안자(顔子)·증자(曾子)·자사(子思)·맹자(孟子)의 네 성인(聖人)과 중국 송나라 때 유학자 주돈이(周敦頤)·정이(程頤)·정호(程顥)·주희(朱熹)를 비롯하여 신라 이래 18선현을 동서로 배향하여 매년 봄, 가을에 석전제를 모시고 있다.",
    reward_text: "여섯 번째 타임캡슐 단서 조각을 발견했습니다!",
    reward_effect: "한문으로 쓴 ‘우정永存’ 작은 글씨가 적힌 족자가 나타났습니다. 우정의 가치를 새기는 기록입니다.",
    next_hint_text: "“마지막 단서는 진남관 앞 공터에 있는 것 같아 거기로 가보자.”",
  },
  {
    step_id: 7,
    scenario_id: "SCN_YEOWALK_001",
    sequence: 7,
    location_id: "LOC_YS_JINNAM_007",
    location_name: "진남관",
    background_text: "진남관 앞 공터에 부는 바닷바람에 친구들과 함께 뛰놀던 웃음소리가 그윽히 스며드는 듯하다. 성곽 기단 위로는 노을빛이 내려앉아, 40년 전 우리 중학교 소풍의 기쁨을 다시금 떠오르게 한다.",
    situation_text: "“얘들아, 여기서 우리는 중학교 소풍 때 가장 크게 웃었지. 그날의 우리가 떠오르니 가슴이 벅차다!”",
    npc_name: "수연",
    npc_dialogue: "“서로 팔짱 끼고 달리던 순간, 수업시간보다 더 진지하게 미래를 꿈꾸던 우리였잖아. 오늘 이 기분처럼 앞으로도 서로를 응원하며 힘내자꾸나.”",
    quiz_question: "남쪽의 왜구를 진압하여 나라를 평안하게 한다는 의미의 임진왜란 당시 전라좌수영 통제영 본영이었던 이곳의 이름은?",
    quiz_option1: "A. 진해루",
    quiz_option2: "B. 전라좌수영",
    quiz_option3: "C. 진남관",
    quiz_answer: "B. 전라좌수영",
    quiz_difficulty: "중",
    culture_info: "국보 제304호로 지정된 여수 진남관은, 임진왜란 때 전라좌수영성 내에 있던 많은 건물 중 유일하게 남아 있는 곳이다. 1598년 정유재란 후 통제사 이시언이 남쪽 왜구를 진압하고 나라를 평안케 하기 위해 세운 대규모 객사이다.",
    reward_text: "마지막 타임캡슐을 성공적으로 발굴했습니다!",
    reward_effect: "오래된 목제 상자가 모습을 드러냈습니다. 40년 전 친구들이 함께 묻어둔 물건들이 고스란히 들어 있습니다. 세 친구가 함께 꾸었던 꿈 노트와 서로를 향한 편지가 들어 있습니다. 어린 시절 우리 모습이 담긴 사진을 보니 눈시울이 뜨거워집니다.",
    next_hint_text: "“이제 상자를 열고, 그때 그 시절의 우리에게 인사를 건네 보며 추억을 다시 만끽하세요.”",
  },
]

const locationImages: { [key: number]: string } = {
  1: "/images/SCN005_1.jpg",
  2: "/images/SCN005_2.jpg",
  3: "/images/SCN005_3.jpg",
  4: "/images/SCN005_4.jpg",
  5: "/images/SCN005_5.jpg",
  6: "/images/SCN005_6.jpg",
  7: "/images/SCN005_7.jpg",
}

type GameScreen = "intro" | "opening" | "location" | "situation" | "quiz" | "result" | "reward" | "ending"

interface OldRoadAdventureGameProps {
  onGameEnd: (gameId: string, gameName: string, status: "completed" | "exited") => void
}

// NPC 이름에 따라 다른 아이콘(이모지)을 반환하는 함수
const getNpcEmoji = (npcName: string | null) => {
  switch (npcName) {
    case "수연":
      return "👩‍🏫"
    case "영만":
      return "👨‍✈️"
    case "순자":
      return "👩‍🌾"
    default:
      return "💬"
  }
}

export default function OldRoadAdventureGame({ onGameEnd }: OldRoadAdventureGameProps) {
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
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 p-4">
      <div className="max-w-lg mx-auto">
        {/* 헤더와 진행률 */}
        {gameStarted && currentScreen !== "intro" && currentScreen !== "ending" && (
          <Card className="mb-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-amber-900 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-orange-500" />
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
                className="h-2 bg-orange-200 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-orange-500 [&::-webkit-progress-value]:to-amber-500"
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
              <CardDescription className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
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
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" /> 여행 시작하기
              </Button>
            </CardContent>
          )}

          {/* 오프닝 화면 */}
          {currentScreen === "opening" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">👩‍🏫</div>
                <CardTitle className="text-2xl font-bold text-amber-800">수연</CardTitle>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl space-y-4 border-l-4 border-amber-400 shadow-inner">
                <p className="text-sm leading-relaxed text-gray-800">{scenarioInfo.opening_dialogue}</p>

                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <p className="font-bold text-orange-800 flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5 text-orange-500" />
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
                  <Image
                    src={locationImages[currentStep.step_id] || "/placeholder.svg"}
                    alt={currentStep.location_name}
                    width={400}
                    height={192}
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
                    className="text-sm leading-relaxed text-gray-800"
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
                      className={`w-full text-left p-4 rounded-xl font-medium text-gray-800 border-2 ${selectedAnswer === option ? "border-amber-500 bg-amber-100 shadow-md" : "border-gray-200 bg-white hover:border-amber-400 hover:bg-amber-50"} transition-all duration-200`}
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
                <CardTitle className="text-2xl font-bold text-yellow-600">타임캡슐 단서 발견!</CardTitle>
              </div>

              {currentStep.reward_text && (
                <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🎟️</div>
                    <p className="text-sm leading-relaxed text-gray-800">{currentStep.reward_text}</p>
                  </div>
                </div>
              )}

              {currentStep.reward_effect && (
                <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 shadow-inner">
                  <h3 className="font-bold mb-3 text-purple-700 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" /> 드러난 추억
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
                <CardTitle className="text-3xl font-bold text-amber-900">타임캡슐 찾기 성공!</CardTitle>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400 shadow-inner">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">👩‍🏫</div>
                    <div
                      className="space-y-3 text-sm text-gray-800 whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: gameData[gameData.length - 1].reward_effect || "" }}
                    ></div>
                  </div>
                </div>
                
                {gameData[gameData.length - 1].next_hint_text && (
                  <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-400 shadow-sm">
                      <div className="flex items-start gap-3">
                          <div className="text-2xl">💬</div>
                          <p className="text-sm leading-relaxed text-gray-800">{gameData[gameData.length - 1].next_hint_text}</p>
                      </div>
                  </div>
                )}


                <div className="text-center space-y-2 bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-md">
                  <p className="text-2xl font-bold text-amber-900 flex items-center justify-center gap-2">
                    <Trophy className="w-7 h-7 text-yellow-600" /> 축하합니다!
                  </p>
                  <p className="text-lg text-amber-700 font-semibold">40년 전의 추억과 우정을 되찾았습니다.</p>
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
