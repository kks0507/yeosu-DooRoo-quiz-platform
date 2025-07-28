"use client"

import { useState } from "react"
import {
  Book,
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
  HelpCircle,
  Trophy,
  Map,
  LogOut,
  Sailboat,
  Fish,
} from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// 변경된 gameData를 적용
const gameData = [
  {
    step_id: "1",
    scenario_id: "SCN003",
    sequence: 1,
    location_id: "LOC_YS_FERRY_001",
    location_name: "여수여객선터미널", // location_name 추가
    background_text:
      "여수여객선터미널은 붉은 노을이 바다를 물들이는 저녁, 고즈넉한 파도 소리와 함께 여행의 시작을 알린다. 평소 출항 준비로 분주한 이곳은, 오늘만큼은 신지께의 전설을 품은 모험가를 기다리는 성스러운 관문 같다.",
    situation_text:
      "“여기, 내 목소리가 들리느냐? 나는 거문도의 수호신 인어 신지께다. 너는 대담히 첫 가락을 찾아야만 한다. 여수여객선터미널에서 가장 먼 남쪽 섬을 맞힌다면, 나의 첫 소절을 전해주겠다.”",
    npc_name: "장촌 어부",
    npc_dialogue: "“이 터미널은 여수시 교동에 있네. 출항 노선 중 거문도로 가는 배가 가장 멀리 간다지. 잘 기억해 두게.”",
    quiz_question: "여수여객선터미널에서 운항 중인 노선 중, 여수에서 가장 먼 남쪽의 큰 섬은 어디인가요?",
    quiz_option1: "A. 금오도",
    quiz_option2: "B. 거문도",
    quiz_option3: "C. 백야도",
    quiz_answer: "B. 거문도",
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 교동에 있는 여객선터미널이며, 현재 항로는 여수~개도, 금오도, 여수~백야도, 여수~거문도 등이 있다.",
    reward_text:
      "고사노래 1절을 획득했습니다. 진주 목걸이 암호 첫 번째 소절을 얻어, 다음 단서 해독을 위한 열쇠를 확보했습니다.",
    reward_effect:
      "어이다야 어이다야 해가 떠서 일광보살\n어이다야 달이 떠서 월광보살 어이다야\n\n수로 천리가 멀다 해도 아침은 점점 가까워지고",
    next_hint_text: "“다음 단서는 거문도항 여객선터미널에 숨어 있다.”",
    image: "/images/SCN003_1.jpg",
  },
  {
    step_id: "2",
    scenario_id: "SCN003",
    sequence: 2,
    location_id: "LOC_GM_FERRY_002",
    location_name: "거문도항 여객선터미널", // location_name 추가
    background_text:
      "거문도항 여객선터미널은 파도와 바람이 맞부딪히는 선착장으로, 은빛 물결 위로 배들의 굉음이 잦아든 후에도 여운이 남는다. 신지께의 전설을 품은 당신을 기다리는 이곳은 두 번째 암호가 숨겨진 거룩한 무대다.",
    situation_text: "“다시 묻노라, 모험가여. 이 터미널에 담긴 진실을 밝혀야 다음 가락을 얻을 수 있으리라.”",
    npc_name: "장촌 어부",
    npc_dialogue: "“이 터미널은 2014년에 새로 지어진 곳이네. 여수시에서 관리한다고 들은 바가 있지.”",
    quiz_question: "거문도항 여객선터미널이 속해 있는 시(市)는 어디인가요?",
    quiz_option1: "A. 고흥군",
    quiz_option2: "B. 여수시",
    quiz_option3: "C. 순천시",
    quiz_answer: "B. 여수시",
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 삼산면 거문리에 있는 여객선 터미널로, 2009년 초반 거문도분소를 개조하여 운영하였으며, 2014년 새터미널이 개관되었다.",
    reward_text:
      "놋소리 1절을 획득했습니다. 진주 목걸이 암호 두 번째 소절을 얻어, 다음 단서 해독을 위한 열쇠를 확보했습니다.",
    reward_effect:
      "뒤늦는 점점 멀어질 거네 어이다야 어이다야\n아기영차 노저어 가서 어이경차 노저어 가세\n넘허바다가 어데메다서 서허바다가 어데메다서",
    next_hint_text: "“다음 단서는 영국군묘지에 숨어 있다.”",
    image: "/images/SCN003_2.png",
  },
  {
    step_id: "3",
    scenario_id: "SCN003",
    sequence: 3,
    location_id: "LOC_GM_GRAVE_003",
    location_name: "영국군 묘지", // location_name 추가
    background_text:
      "영국군 묘지는 고요한 숲길 끝 작은 언덕 위에 자리한다. 습기 어린 공기 속에 세월의 흔적이 묻어나는 비석들이 아득히 늘어서 있어, 과거의 아픔과 신지께의 경고를 전하는 장소임을 느끼게 한다.",
    situation_text:
      "“모험가여, 이곳에 묻힌 이들의 진실을 마주하라. 영국의 군 부대가 남긴 상흔을 올바로 알아야, 바다의 균형을 위한 세 번째 가락을 전해주겠다.”",
    npc_name: "장촌 어부",
    npc_dialogue:
      "“이 비석들은 1885년부터 약 23개월 동안 거문도를 점령했던 영국군이 묻힌 곳이야. 러시아의 남하를 막는다는 구실이었다지.”",
    quiz_question: "어느 나라의 군 부대가 1885년부터 23개월간 거문도를 불법 점령했나요?",
    quiz_option1: "A. 러시아군",
    quiz_option2: "B. 영국군",
    quiz_option3: "C. 일본군",
    quiz_answer: "B. 영국군",
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 삼산면 거문리에 있는 영국군 묘지로, 1885년(고종 22)부터 1887년까지 약 23개월에 걸쳐 영국군이 러시아 남하를 막는다는 구실로 거문도를 점령한 사건과, 그 과정에서 사망한 영국군을 기리기 위해 조성된 묘지이다.",
    reward_text: "암호 해독용 고사노래·놋소리 연결 코드를 획득했습니다.",
    reward_effect: "고사노래 첫 소절과 놋소리 첫 소절을 연결해 해독하는 코드",
    next_hint_text: "“다음 단서는 유림해수욕장에서 기다리고 있느니라.”",
    image: "/images/SCN003_3.png",
  },
  {
    step_id: "4",
    scenario_id: "SCN003",
    sequence: 4,
    location_id: "LOC_GM_BEACH_004",
    location_name: "유림해수욕장", // location_name 추가
    background_text:
      "유림해수욕장은 고운 모래밭과 잔잔한 파도가 어우러진 서도의 숨은 보석과 같다. 아침 햇살이 모래알을 금빛으로 물들이고, 파도는 속삭이듯 잔잔히 밀려온다. 이곳에선 신지께가 남긴 네 번째 암호가 바람에 실려 전해진다.",
    situation_text: "“모험가여, 이 잔잔한 파도 속에 숨겨진 이름을 밝혀야 네 번째 가락을 얻으리라.”",
    npc_name: "장촌 어부",
    npc_dialogue: "“이곳은 거문도 서도 덕촌리에 있는 유림해수욕장이네. 잔잔한 파도가 유명해 이 이름으로 더 불린다네.”",
    quiz_question:
      "거문도 서도 덕촌리에 위치해, 모래사장과 잔잔한 파도를 자랑하는 거문도 해수욕장의 다른 이름 무엇인가요?",
    quiz_option1: "A. 해운대해수욕장",
    quiz_option2: "B. 안도해수욕장",
    quiz_option3: "C. 유림해수욕장",
    quiz_answer: "C. 유림해수욕장",
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 삼산면 덕촌리 거문도 서도에 위치한 해수욕장으로, 수심이 얕고 모래가 고우며 파도가 잔잔해 ‘유림해수욕장’으로 더 알려져 있다.",
    reward_text:
      "월래소리 1절을 획득했습니다. 진주 목걸이 암호 세 번째 소절을 얻어, 다음 단서 해독을 위한 열쇠를 확보했습니다.",
    reward_effect: "이 바다를 건너면은 고기바람이 나온다네\n이야야 노저어 가세 어이야야",
    next_hint_text: "“다음 단서는 거문도 등대에서 기다린다.”",
    image: "/images/SCN003_4.jpg",
  },
  {
    step_id: "5",
    scenario_id: "SCN003",
    sequence: 5,
    location_id: "LOC_GM_LIGHTHOUSE_005",
    location_name: "거문도 등대", // location_name 추가
    background_text:
      "거문도 등대는 거문도 서도의 절벽 위에 우뚝 서 있다. 어둠 속에서도 한 줄기 빛을 멀리 내뿜어, 배들의 안전한 항로를 인도하는 상징적인 구조물이다. 등대 아래 파도는 반짝이는 불빛을 받아 은빛 물결로 춤춘다.",
    situation_text: "“모험가여, 이 등대의 비밀을 풀어야 다섯 번째 가락이 내 귀에 울릴 것이니라.”",
    npc_name: "장촌 어부",
    npc_dialogue: "“이 등대는 동양 최대이자 국내 최초로 세워졌지. 거문도 서도에 자리 잡아 배들의 길잡이가 되었다네.”",
    quiz_question: "다음 중 거문도 등대의 특징은 무엇인가요?",
    quiz_option1: "A. 아시아 최초 등대",
    quiz_option2: "B. 국내 최초 등대",
    quiz_option3: "C. 여수 최초 등대",
    quiz_answer: "B. 국내 최초 등대",
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 삼산면 덕촌리에 있으며, 거문도에서 가장 큰 섬인 서도에 자리 잡은 등대로, 동양 최대이자 국내 최초의 등대이다.",
    reward_text:
      "가래소리 1절을 획득했습니다. 진주 목걸이 암호 네 번째 소절을 얻어, 다음 단서 해독을 위한 열쇠를 확보했습니다.",
    reward_effect: "몇날을 가서 넘허를 갈까나\n몇날을 가서 서허를 갈까나",
    next_hint_text: "“다음 단서는 백도에서 기다리고 있느니라.”",
    image: "/images/SCN003_5.jpg",
  },
  {
    step_id: "6",
    scenario_id: "SCN003",
    sequence: 6,
    location_id: "LOC_GM_BAEDO_006",
    location_name: "백도", // location_name 추가
    background_text:
      "백도는 전라남도 여수시 삼산면 거문리에 속한 39개의 작은 섬들이 모여 이루어진 군도다. 새하얀 바위와 모래밭이 빛나듯 펼쳐져 ‘백도(白島)’라 불리며, 바람에 출렁이는 파도가 고요한 풍경을 연출한다.",
    situation_text: "“모험가여, 이 무인 군도의 공통된 이름을 밝혀야 다음 가락을 얻을 수 있느니라.”",
    npc_name: "장촌 어부",
    npc_dialogue: "“백도의 섬들은 모두 사람이 살지 않는 무인도란다. 39개의 무인도가 흩어져 있으니 잘 살펴보게.”",
    quiz_question:
      "전라남도 여수시 삼산면 거문리의 백도는 실제 39개의 섬으로 이루어진 군도인데, 이 섬들이 공통적으로 지니고 있는 특징은 무엇인가요?",
    quiz_option1: "A. 유인도",
    quiz_option2: "B. 무인도",
    quiz_option3: "C. 화산섬",
    quiz_answer: "B. 무인도",
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 삼산면 거문리에 속한 백도는 실제 39개의 섬으로 이루어진 무인 군도로, 이름은 하얀 바위빛에서 유래하거나 100에서 하나를 뺀 숫자를 뜻한다.",
    reward_text: "암호 해독용 월래소리·가래소리 연결 코드를 획득했습니다.",
    reward_effect: "월래소리 첫 소절과 가래소리 첫 소절을 연결해 해독하는 코드",
    next_hint_text: "“다음 단서는 인어해양공원에서 기다리고 있느니라.”",
    image: "/images/SCN003_6.jpg",
  },
  {
    step_id: "7",
    scenario_id: "SCN003",
    sequence: 7,
    location_id: "LOC_GM_MERMAIDPARK_007",
    location_name: "거문도인어해양공원", // location_name 추가
    background_text:
      "거문도인어해양공원은 신지께 전설을 테마로 조성된 문화관광 자원이다. 서도리 일대에 걸쳐 백도와 거문도 등대 등 주변 명소를 한눈에 조망할 수 있으며, 인어 출현 설화를 기반으로 다양한 전시와 체험 프로그램이 운영된다.",
    situation_text: "“이곳은 내 전설이 살아 숨 쉬는 자리. 인어의 목소리를 알아야 마지막 가락을 전해주리라.”",
    npc_name: "장촌 어부",
    npc_dialogue:
      "“이 공원은 전설 속 인어를 주인공으로 조성되었네. 테마 전시관에서 인어 ‘신지께’의 이야기를 꼭 살펴보게.”",
    quiz_question: "거문도인어해양공원의 테마가 된 전설 속 주인공은 무엇인가요?",
    quiz_option1: "A. 거문도",
    quiz_option2: "B. 인어",
    quiz_option3: "C. 해양 생물",
    quiz_answer: "B. 인어",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 삼산면 서도리에 위치한 국립공원으로, 거문도 인어 출현 전설을 테마로 관광 상품 및 체험 공간으로 개발되었다.",
    reward_text: "썰소리 1절을 획득했습니다. 진주 목걸이 암호 마지막 소절을 얻어, 모든 가락을 모았습니다.",
    reward_effect:
      "여보소 도사공 말들어보소\n뱃전이 어디로 돌아들 가나 걱정들 말고 건너를 가세\n이이다야 노저어 가세 이이다야",
    next_hint_text: "“모든 가락이 모였으니, 녹산등대에서 모든 가락을 통합하라.”",
    image: "/images/SCN003_7.png",
  },
  {
    step_id: "8",
    scenario_id: "SCN003",
    sequence: 8,
    location_id: "LOC_GM_NOKSANLIGHT_008",
    location_name: "녹산등대", // location_name 추가
    background_text:
      "녹산등대는 전라남도 여수시 삼산면 서도리에 자리한 무인 등대다. 1958년 1월부터 뱃길을 밝혀 왔으며, 북위 34°03′6″, 동경 127°17′7″에 자리해 5km 밖에서도 그 빛을 확인할 수 있다.",
    situation_text: "“모험가여, 다섯 소절을 모아야 할 마지막 관문이로다. 이 등대에서 모든 가락을 하나로 잇거라.”",
    npc_name: "장촌 어부",
    npc_dialogue: "“이곳이 바로 녹산등대라네. 1958년부터 무인으로 운영되었다지. 여기서 모은 모든 가락을 연결해 보게.”",
    quiz_question: "전라남도 여수시 삼산면 서도리에 위치해 1958년부터 뱃길을 밝혀 준 무인 등대 시설은 무엇인가요?",
    quiz_option1: "A. 녹산 박물관",
    quiz_option2: "B. 녹산 대피소",
    quiz_option3: "C. 녹산 등대",
    quiz_answer: "C. 녹산 등대",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 삼산면 서도리에 있는 무인 등대로, 1958년 1월 뱃길을 밝히기 시작했으며 광달거리는 5km에 이른다.",
    reward_text: "거문도 뱃노래 전체 연결 코드를 획득했습니다.",
    reward_effect: "모은 다섯 소절을 순서대로 연결해 최종 암호를 완성하는 코드",
    next_hint_text: "“다음 단서는 거문대교에서 기다리고 있느니라.”",
    image: "/images/SCN003_8.png",
  },
  {
    step_id: "9",
    scenario_id: "SCN003",
    sequence: 9,
    location_id: "LOC_GM_BRIDGE_009",
    location_name: "거문대교",
    background_text:
      "거문대교는 거문도의 서도와 동도를 잇는 웅장한 사장교다. 2011년 1월 1일 공사를 시작해 4년 8개월 만인 2015년 9월 10일 준공되었으며, 바다 위를 기둥 없이 가로지르는 우아한 선이 수평선과 만나 장관을 이룬다.",
    situation_text:
      "“마지막 관문이로다. 다섯 소절을 이 다리 위에서 하나로 합창하면, 신지께의 봉인이 풀리고 진주 목걸이가 빛을 되찾을 것이다.”",
    npc_name: "장촌 어부",
    npc_dialogue:
      "“이제 마지막 장소인 거문대교라네, 거문도의 서도와 동도를 연결하는 곳이지, 어서 뱃노래를 완창하여 성난 바다를 잠재워보세.”",
    quiz_question: "거문대교는 거문도의 서도와 어떤 섬을 연결하는 다리인가요?",
    quiz_option1: "A. 동도",
    quiz_option2: "B. 남도",
    quiz_option3: "C. 북도",
    quiz_answer: "A. 동도",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 삼산면의 서도와 동도를 잇는 사장교로, 2011년 1월 1일 공사를 시작하여 2015년 9월 10일 준공되었다. 교량 길이는 약 300m, 해발 20m 높이에서 바다를 가르며 이어진다.",
    reward_text: "모든 뱃노래를 완창했습니다! 신지께의 진주 목걸이를 획득했습니다.",
    reward_effect: [
      "성난 파도가 잦아들고 고요한 물결이 섬을 감쌌습니다.",
      "거문도 사람들은 다시 설레는 마음으로 바다로 나갈 수 있게 되었습니다.",
      "신지께의 수호 아래, 섬은 영원한 평화를 되찾았습니다.",
    ],
    next_hint_text: null,
    image: "/images/SCN003_9.png",
  },
]

type GameScreen = "intro" | "opening" | "location" | "situation" | "quiz" | "result" | "reward" | "ending"

// `onGameEnd` prop의 타입 정의를 업데이트합니다.
interface GeomundoAdventureGameProps {
  onGameEnd: (gameId: string, gameName: string, status: "completed" | "exited") => void
}

export default function GeomundoAdventureGame({ onGameEnd }: GeomundoAdventureGameProps) {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>("intro")
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false)
  const [collectedItems, setCollectedItems] = useState<string[]>([]) // 변경된 상태: 보상 아이템 추적
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
      // 보상 획득 로직 (변경된 부분)
      if (currentStep.reward_text) {
        setCollectedItems((prev) => [...prev, currentStep.reward_text])
      }

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

  // 게임 ID와 이름 변경
  const handleRestart = () => {
    setCurrentStepIndex(0)
    setCurrentScreen("intro")
    setSelectedAnswer("")
    setIsCorrectAnswer(false)
    setCollectedItems([]) // 상태 초기화
    setGameStarted(false)
    onGameEnd("geomundo", "신지께의 비밀을 찾아서", "completed") // 게임 ID와 전체 이름 전달
  }

  // 게임 ID와 이름 변경
  const handleExitGame = () => {
    onGameEnd("geomundo", "신지께의 비밀을 찾아서", "exited") // 게임 ID와 전체 이름 전달
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-50 to-blue-200 p-4 font-sans">
      <div className="max-w-lg mx-auto">
        {/* 헤더와 진행률 */}
        {gameStarted && currentScreen !== "intro" && currentScreen !== "ending" && (
          <Card className="mb-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                  <Sailboat className="w-6 h-6 text-blue-600" />
                  신지께의 비밀을 찾아서
                </h1>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-blue-700 bg-blue-100 px-3 py-1 rounded-full font-semibold">
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
                className="h-2 bg-stone-300 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-blue-500 [&::-webkit-progress-value]:to-teal-500"
              />

              {/* 수집한 단서 (변경된 부분) */}
              <div className="flex gap-3 justify-center pt-2">
                <div className="flex items-center gap-2 text-sm text-stone-600 bg-gray-100 px-3 py-1 rounded-full">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">수집한 단서:</span>
                  <span className="font-bold text-blue-700">{collectedItems.length}개</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 게임 화면들 */}
        <Card className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200">
          {/* 인트로 화면 (변경된 내용) */}
          {currentScreen === "intro" && (
            <CardContent className="p-8 text-center space-y-6">
              <div className="text-8xl mb-4 animate-bounce-in">🧜‍♀️</div>
              <CardTitle className="text-3xl font-extrabold text-stone-900 mb-2">신지께의 비밀을 찾아서</CardTitle>
              <CardDescription className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                미스터리 어드벤처
              </CardDescription>

              <div className="text-left space-y-4 bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-inner">
                <h3 className="font-bold text-lg text-stone-800 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  등장인물 소개
                </h3>
                <div className="space-y-3 text-sm text-stone-700">
                  <p>
                    <strong className="text-green-700">여행자:</strong> 시간과 공간을 넘어 거문도의 전설을 풀어낼 탐험가
                  </p>
                  <p>
                    <strong className="text-blue-700">신지께:</strong> 수호신 인어로, 상체는 사람, 하체는 물고기인 존재.
                    녹산 앞바다로 어부들이 나가려 할 때 바닷돌을 던져 큰 풍랑을 경고하며, 달빛 아래 비친 그 자태는
                    형언할 수 없을 만큼 아름답다.
                  </p>
                  <p>
                    <strong className="text-indigo-700">장촌 어부:</strong> 장촌리 토박이 어부로, 뱃노래 전수관의
                    관리자이자 여행자의 조력자. 다섯 소절의 뱃노래 가락과 각 명소의 숨은 이야기를 전해 준다.
                  </p>
                </div>
              </div>

              <div className="text-left space-y-3 bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-inner">
                <h3 className="font-bold text-lg text-blue-800 flex items-center gap-2">
                  <Scroll className="w-5 h-5 text-blue-600" />
                  시나리오 개요
                </h3>
                <p className="text-sm leading-relaxed text-stone-700">
                  거문도의 수호신 인어 ‘신지께’의 전설이 전해진다. 녹산 앞바다로 고기잡이 나가려 할 때, 상체는 사람이고
                  하체는 물고기인 신지께가 바닷돌을 던져 큰 풍랑을 경고했다. 달빛에 비친 그의 모습은 형언할 수 없이
                  아름다워, 어부들은 그를 ‘신지께’라 불렀다. 어느 날 섬을 위협하는 거친 세력이 다가오자, 신지께는 바다의
                  균형을 유지하는 신성한 진주 목걸이를 만들고, 그 힘을 다섯 소절의 뱃노래(고사·놋·월래·가래·썰소리)에
                  암호로 나누어 숨겼다. 목걸이는 파도의 기운을 조율해 풍랑을 잠재우고, 거문도의 평화를 지키는 핵심
                  키이다. 이제 여행자와 마을 어부 가이드는 여수여객선터미널부터 거문대교까지 9개 명소를 돌며 퀴즈를 풀고
                  뱃노래 소절을 모아 진주 목걸이를 완성해야만 거문도의 바다를 다시 고요로 되돌릴 수 있다.
                </p>
              </div>

              <Button
                onClick={handleStartGame}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" /> 모험 시작하기
              </Button>
            </CardContent>
          )}

          {/* 오프닝 화면 (변경된 내용) */}
          {currentScreen === "opening" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 text-blue-500">🧜‍♀️</div>
                <CardTitle className="text-2xl font-bold text-blue-700">수호신 신지께</CardTitle>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl space-y-4 border-l-4 border-blue-400 shadow-inner">
                <p className="text-sm leading-relaxed text-stone-800">
                  “나는 거문도의 바다를 지키는 인어, 신지께다. 내 손에 있던 진주 목걸이는 파도의 힘을 다스려 섬을
                  안전하게 지키는 신성한 수호의 열쇠였다. 외부의 위협이 거세지자 나는 목걸이를 다섯 소절의 뱃노래에
                  나누어 숨기고, 자신을 봉인했다. 이제 그 가락을 모두 모아 목걸이를 되찾아야 한다. 너희 두 사람,
                  여행자와 어부 가이드여, 함께 힘을 합쳐 거문도의 바다를 구하라. 첫 관문은 여수여객선터미널이다.”
                </p>
                <div className="text-center p-4 bg-white rounded-lg border border-stone-200 shadow-sm">
                  <p className="font-bold text-blue-800 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    모험가님, 신지께의 진주 목걸이를 되찾아 거문도의 바다를 구하시겠습니까?
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleAcceptQuest}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md transform hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5 mr-2" /> 예, 신지께의 진주 목걸이를 되찾아 거문도의 바다를
                  구하겠습니다.
                </Button>
                <Button
                  onClick={handleExitGame}
                  variant="outline"
                  className="w-full bg-stone-100 text-stone-700 py-3 px-6 rounded-xl font-medium hover:bg-stone-200 transition-all duration-200 border-stone-300"
                >
                  <XCircle className="w-5 h-5 mr-2" /> 아니오, 아직 준비가 되지 않았습니다.
                </Button>
              </div>
            </CardContent>
          )}

          {/* 장소 도착 화면 */}
          {currentScreen === "location" && currentStep && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl text-blue-500 mb-4 animate-fade-in">
                  <Landmark className="w-full h-full" />
                </div>
                <CardTitle className="text-2xl font-bold text-stone-900 flex items-center justify-center gap-2">
                  <MapPin className="w-6 h-6 text-blue-600" />
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
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-blue-800 font-semibold flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600" /> 새로운 장소에 도착했습니다!
                  </p>
                </div>
              </div>

              <Button
                onClick={handleLocationNext}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md transform hover:scale-105"
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

                <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🌊</div>
                    <p
                      className="text-sm leading-relaxed text-stone-800"
                      dangerouslySetInnerHTML={{ __html: currentStep.situation_text }}
                    ></p>
                  </div>
                </div>

                {currentStep.npc_name && currentStep.npc_dialogue && (
                  <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-400 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🎣</div>
                      <div>
                        <p className="font-bold text-green-700 mb-2">{currentStep.npc_name}</p>
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
                <CardTitle className="text-2xl font-bold text-amber-600">단서 획득!</CardTitle>
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
                    <Award className="w-5 h-5 text-amber-600" /> 뱃노래 가락
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
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md transform hover:scale-105"
              >
                <Map className="w-5 h-5 mr-2" /> 다음 장소로
              </Button>
            </CardContent>
          )}

          {/* 엔딩 화면 (변경된 내용) */}
          {currentScreen === "ending" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-8xl animate-tada">🎊</div>
                <CardTitle className="text-3xl font-bold text-stone-900">모험 완료!</CardTitle>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400 shadow-inner">
                  <h3 className="font-bold mb-3 text-green-800 flex items-center gap-2">
                    <Fish className="w-5 h-5 text-green-600" /> 바다의 평화
                  </h3>
                  <div className="space-y-2 text-sm text-stone-800">
                    {Array.isArray(currentStep.reward_effect) ? (
                      currentStep.reward_effect.map((line, index) => <p key={index}>{line}</p>)
                    ) : (
                      <p>{currentStep.reward_effect}</p>
                    )}
                  </div>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl text-center border border-stone-200 shadow-inner">
                  <p className="text-sm leading-relaxed text-stone-800">
                    당신은 마침내 모든 뱃노래 가락을 모아 신지께의 진주 목걸이를 완성했습니다. 성난 파도는 잠잠해지고,
                    거문도에는 다시 평화가 찾아왔습니다. 당신의 용기와 지혜는 섬의 전설로 영원히 기억될 것입니다.
                  </p>
                </div>

                <div className="text-center space-y-2 bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-md">
                  <p className="text-2xl font-bold text-stone-900 flex items-center justify-center gap-2">
                    <Trophy className="w-7 h-7 text-amber-600" /> 축하합니다!
                  </p>
                  <p className="text-lg text-stone-700 font-semibold">
                    신지께의 비밀을 풀고 거문도의 평화를 되찾았습니다!
                  </p>
                </div>
              </div>

              <Button
                onClick={handleRestart}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md transform hover:scale-105"
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
