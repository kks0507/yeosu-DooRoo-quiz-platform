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
} from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

const scenarioInfo = {
  id: "SCN005",
  name: "청량 해변의 연인 퀴즈 투어",
  genre: "로맨틱 코미디 인터랙티브 어드벤처",
  characters_info: [
    {
      emoji: "👨‍💼",
      name: "재민",
      description: "문화 해설사 지망생. 여수의 숨은 이야기를 전하며 상대의 미소를 찾는 것을 즐긴다.",
    },
    {
      emoji: "👩‍💻",
      name: "수아",
      description:
        "출판 편집자. 소설 아이디어가 없어 지친 상태로 여수로 내려왔으나, 바닷가에서 영감을 얻고 싶어 한다. 기차에서 재민을 만나 어색한 대화를 나누다 함께 여행하게 되고, 각 명소에서 만나는 순간순간이 소설 아이디어로 이어진다.",
    },
  ],
  overview:
    "기차에서 우연히 마주친 재민과 수아는 여수의 다섯 명소를 돌며 ‘커플 퀴즈 챌린지’에 도전한다. 수아는 소설 아이디어 부재로 지친 상태였지만, 각 장소의 퀴즈를 풀 때마다 새로운 영감을 얻는다. 퀴즈를 모두 통과한 두 사람은 특별 기념 티켓을 손에 넣고, 수아는 이 여행을 바탕으로 역대급 로맨스 소설의 아이디어를 얻어 출판 편집자로서 새로운 작품을 기획하게 된다. 동시에 재민과의 사랑도 쟁취하며, 함께한 추억으로 완성된 이야기를 만들어 간다.",
  opening_dialogue:
    "“여수의 바닷바람 속에서, 우리만의 이야기를 만들어 볼까요? 저는 이 투어의 안내자 재민이고, 당신은 오늘의 도전자 수아입니다. 다섯 곳의 명소를 돌며 퀴즈를 맞히고, 마지막엔 우리만의 기념 티켓을 함께 만들어요.”",
  opening_question: "커플 퀴즈 챌린지, 함께 시작해 볼까요?",
  opening_option1: "- 네, 청량한 해변 로맨스를 완성하러 가요!",
  opening_option2: "- 아니요, 아직은 준비가 덜 된 것 같아요.",
}

const gameData = [
  {
    step_id: 1,
    scenario_id: "SCN006",
    sequence: 1,
    location_id: "LOC_YS_EXPO_001",
    location_name: "여수엑스포역",
    background_text:
      "여수엑스포역 플랫폼에는 은빛 레일 위로 부서지는 햇살과 바닷바람이 어우러져, 설렘과 청량함이 공존한다. 기차에서 내린 재민과 수아는 오늘의 첫 여정을 시작할 준비를 한다.",
    situation_text:
      "“이곳은 1930년 12월 25일에 처음 세워진 역이지만, 시간이 지나며 이름이 몇 차례 바뀌었지요. 첫 퀴즈를 풀어야만 다음 여정으로 나아갈 수 있어요.”",
    npc_name: "재민",
    npc_dialogue: "“수아 씨, 이 역의 옛 이름을 맞혀 볼까요? 힌트는 ‘광주–여수 구간 개통과 함께’라는 거예요.”",
    quiz_question: "1930년 12월 25일 전라남도 광주–여수 구간 개통과 함께 처음 세워진 역의 옛 이름은 무엇인가요?",
    quiz_option1: "A. 여수엑스포역",
    quiz_option2: "B. 여수역",
    quiz_option3: "C. 덕충역",
    quiz_answer: "B. 여수역",
    quiz_difficulty: "상",
    culture_info:
      "여수시 덕충동에 있는 철도역으로 일제강점기인 1930년 12월 25일 전라남도 광주 지역에서 여수 지역 간의 철도가 개통되면서 여수시 공화동에 여수역(麗水驛)이 건설되어 2009년 말 지금의 역사로 이전, 2011년 10월 여수엑스포역으로 명칭을 변경한 후 현재에 이르고 있다.",
    reward_text:
      "첫 번째 기념 티켓 조각을 획득했습니다! ‘여수엑스포역’ 문양이 새겨진 특별 조각과 함께, 수아의 소설에 실릴 ‘첫 만남의 설렘’ 아이디어를 얻었어요.",
    reward_effect:
      "❤ 기념 티켓 조각 1/5 획득 ❤\n\n‘플랫폼 위에서 마주친 두 주인공의 첫눈에 반함’이라는 문장으로 소설 아이디어가 떠올랐습니다!",
    next_hint_text: "“다음 목적지는 파도의 선율이 숨 쉬는 신북항의 오션오르간입니다.”",
  },
  {
    step_id: 2,
    scenario_id: "SCN006",
    sequence: 2,
    location_id: "LOC_YS_OCEANORG_002",
    location_name: "오션오르간",
    background_text:
      "신북항의 방파제 위로 부서지는 파도 소리가 잔잔한 멜로디를 만들고, 그 소리에 반응하듯 수면 위로 물기둥이 춤춘다. 오션오르간이 있는 이곳은 바다와 음악이 어우러져 청량한 로맨스를 완성할 무대이다.",
    situation_text:
      "“파도가 연주하는 이 소리를 듣고 있으면 마음이 맑아지지 않나요? 이곳에서 두 번째 퀴즈를 풀어야 다음 여정으로 나아갈 수 있어요.”",
    npc_name: "재민",
    npc_dialogue: "“수아 씨, 이 악기는 바다의 움직임으로 소리를 내는 작품이래요. 이름을 맞혀볼까요?”",
    quiz_question: "여수신북항에 설치되어 파도의 움직임으로 소리를 내는 악기 설치 작품은 무엇인가요?",
    quiz_option1: "A. 트릭아트",
    quiz_option2: "B. 해시계광장",
    quiz_option3: "C. 오션오르간",
    quiz_answer: "C. 오션오르간",
    quiz_difficulty: "중",
    culture_info:
      "여수신항을 대체할 목적으로 건설 중인 항만으로 국내 최초로 바다가 연주하는 오션오르간을 설치하였으며, 이외에도 트릭아트, 해시계광장 등이 있어 여수 시민들의 산책로로 알려지고 있다.",
    reward_text:
      "두 번째 기념 티켓 조각을 획득했습니다! ‘오션오르간’ 문양이 새겨진 특별 조각과 함께, 수아의 소설에 실릴 ‘바다의 음율’ 아이디어를 얻었어요.",
    reward_effect:
      "❤ 기념 티켓 조각 2/5 획득 ❤\n\n‘파도가 악보가 된다’라는 문장으로 소설의 한 장면을 구상할 수 있게 되었습니다!",
    next_hint_text: "“다음 목적지는 바다 위를 달리는 해양레일바이크입니다.”",
  },
  {
    step_id: 3,
    scenario_id: "SCN006",
    sequence: 3,
    location_id: "LOC_YS_RAILBIKE_003",
    location_name: "여수 해양레일바이크",
    background_text:
      "해양레일바이크 트랙은 바다 절벽을 따라 이어진 선로 위에 놓여 있어, 전방으로 펼쳐진 푸른 바다와 하얀 포말이 끝없이 이어진다. 페달을 밟을 때마다 시원한 해풍이 얼굴을 감싸고, 두 사람은 서로의 속도에 맞춰 페달을 굴린다.",
    situation_text:
      "“이 레일바이크가 어느 철도 노선을 기반으로 만들어졌는지 알아맞혀야 다음 코스로 갈 수 있어요. 함께 고민해 봅시다!”",
    npc_name: "재민",
    npc_dialogue:
      "“수아 씨, 이 구간은 2009년 전라선 직선화 사업으로 폐쇄된 철로였대요. 이 정보를 바탕으로 정답을 골라볼까요?”",
    quiz_question: "여수 해양레일바이크는 어떤 철도 노선을 활용해 만든 관광 시설인가요?",
    quiz_option1: "A. 경전선",
    quiz_option2: "B. 전라선",
    quiz_option3: "C. 호남선",
    quiz_answer: "B. 전라선",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 만흥동에 있는 체험형 놀이 시설로 여수해양관광개발에서 전라선 직선화 사업으로 2009년 폐철도가 된 구간에 레일 바이크를 설치하여 지역 관광 상품으로 개발하였다. 국내 최초로 터널을 제외한 전 구간이 해변을 따라 운행하며, 레일 위에서 자전거 페달을 밟으며 관광과 레저를 즐길 수 있는 놀이 시설이다.",
    reward_text:
      "세 번째 기념 티켓 조각을 획득했습니다! ‘해양레일바이크’ 문양이 새겨진 특별 조각과 함께, ‘속도감 넘치는 바닷길’ 장면의 소설 아이디어가 떠올랐어요.",
    reward_effect:
      "❤ 기념 티켓 조각 3/5 획득 ❤\n\n‘두 인물이 레일 위를 달리며 과거의 기억을 떠올린다’는 플롯 조각이 완성되었습니다!",
    next_hint_text: "“다음 목적지는 하늘을 나는 패러글라이딩이 기다리는 만성리검은모래해변입니다.”",
  },
  {
    step_id: 4,
    scenario_id: "SCN006",
    sequence: 4,
    location_id: "LOC_YS_PARAGLIDE_004",
    location_name: "만성리검은모래해변",
    background_text:
      "만성리검은모래해변은 검은 모래 특유의 독특한 경관과 함께, 해안 절벽 위로 펼쳐진 남해의 파노라마를 감상할 수 있는 곳입니다. 파도가 부서지는 소리와 바람이 어우러져, 두 사람의 마음에도 자유로운 설렘이 스며듭니다.",
    situation_text:
      "“이곳에서는 하늘 위에서 바라보는 풍경이 백미예요. 제공되는 레저 활동을 맞혀야만 다음 여정으로 나아갈 수 있어요.”",
    npc_name: "재민",
    npc_dialogue: "“수아 씨, 이곳의 명물은 바다 위를 날아올라 절경을 감상하는 활동이라고 해요. 어떤 옵션이 맞을까요?”",
    quiz_question: "만성리검은모래해변에서 바다 풍경을감상할 수 있도록 제공되는 레저 활동은 무엇인가요?",
    quiz_option1: "A. 패러글라이딩",
    quiz_option2: "B. 스쿠버다이빙",
    quiz_option3: "C. 제트스키",
    quiz_answer: "A. 패러글라이딩",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시의 북동쪽 해변 지역에 있는 만성리검은모래해변은 일제강점기에 개장하였으며, 해수욕장이 있는 지역의 명칭이 만성리여서 만성리검은모래해변이라 한다. 검은 모래 특유의 뜨거운 모래찜질이 신경통과 부인병에 효험이 있다고 널리 알려져 모래찜질을 하러 많은 사람들이 찾았으나 현재는 검은모래의 유실로 찜질을 하는 사람은 거의 없으며, 패러글라이딩 착륙점과 오동도와 남해를 한눈에 조망하는 경관을 보기 위해 많은 관광객들이 찾고 있다.",
    reward_text:
      "네 번째 기념 티켓 조각을 획득했습니다! ‘패러글라이딩’ 문양이 새겨진 특별 조각과 함께, ‘하늘과 바다가 맞닿은 순간’ 소설 아이디어를 얻었어요.",
    reward_effect:
      "❤ 기념 티켓 조각 4/5 획득 ❤\n\n‘주인공이 파도 소리에 취해 하늘을 날며 과거를 회상한다’는 문장 조합이 떠올랐습니다!",
    next_hint_text: "“마지막 목적지는 모래 위에 남을 추억, 모사금해수욕장입니다.”",
  },
  {
    step_id: 5,
    scenario_id: "SCN006",
    sequence: 5,
    location_id: "LOC_YS_MOSAGUM_005",
    location_name: "모사금해수욕장",
    background_text:
      "모사금해수욕장은 맑고 잔잔한 남해 바다와 부드러운 모래가 어우러진 낭만적인 해변입니다. 해변가를 거닐다 보면, 커플의 발자국이 금세 사라질 만큼 부드러운 모래결이 인상적입니다.",
    situation_text: "“이곳의 명성은 무엇 때문인지 알아야 오늘 여정의 완성을 앞당길 수 있어요. 함께 생각해 보죠!”",
    npc_name: "재민",
    npc_dialogue: "“수아 씨, 이 해변이 특히 유명해진 이유가 무엇일까요? 산책하며 힌트를 찾아봅시다.”",
    quiz_question: "해변 마을 이름인 모사금에서 유래한 모사금 해수욕장은 무엇으로 유명한가요?",
    quiz_option1: "A. 아름다운 바위",
    quiz_option2: "B. 좋은 모래",
    quiz_option3: "C. 풍부한 해초",
    quiz_answer: "B. 좋은 모래",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 오천동에 있는 해변 마을 이름인 모사금에서 유래한 해수욕장 명칭이다. 모사금피서지는 마을 주민들만 이용하던 곳이었으나, 오천동 지역의 도로가 포장되고 교통이 편리해지면서 아름다운 경관과 좋은 모래 때문에 유명해졌다.",
    reward_text:
      "마지막 기념 티켓 조각을 획득했습니다! ‘모사금해수욕장’ 문양이 새겨진 특별 조각과 함께, ‘완벽한 결말’ 소설 아이디어가 완성되었습니다.",
    reward_effect:
      "❤ 기념 티켓 조각 5/5 획득 ❤\n\n‘두 주인공이 모래 위에 이름을 새기며 새 소설의 서문을 쓰는 장면’이 머릿속에 그려졌어요!",
    next_hint_text:
      "“재민 씨, 고마워요. 함께 여행하다 보니 기분이 좋아져서 너무나도 좋은 아이디어들이 떠올랐어요. 이 기세를 몰아 소설을 잘 쓸 수 있을 것 같아요. 서울에 돌아가면 우리 여행 이야기를 주제로 소설을 쓸 거예요. 남자 주인공 해주실 거죠? 재민님?”\n\n6개월 후...\n\nXX일보: “1000만 뷰 로맨스 소설 작가 수아의 작품 ‘해변의 연인’, 드라마화 확정”",
  },
]

const locationImages: { [key: number]: string } = {
  1: "/images/SCN006_1.jpg",
  2: "/images/SCN006_2.jpg",
  3: "/images/SCN006_3.jpg",
  4: "/images/SCN006_4.jpg",
  5: "/images/SCN006_5.jpg",
}

type GameScreen = "intro" | "opening" | "location" | "situation" | "quiz" | "result" | "reward" | "ending"

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
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">
      {currentScreen === "intro" && <IntroHeader />}
      <div className={`max-w-lg mx-auto p-4 ${currentScreen === "intro" ? "pt-20" : ""}`}>
        {gameStarted && currentScreen !== "intro" && currentScreen !== "ending" && (
          <Card className="mb-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-500" />
                  {scenarioInfo.name}
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
                className="h-2 bg-pink-200 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-pink-500 [&::-webkit-progress-value]:to-rose-500"
              />
            </CardContent>
          </Card>
        )}

        <Card className="bg-white/95 rounded-2xl shadow-xl overflow-hidden border-2 border-pink-300">
          {currentScreen === "intro" && (
            <CardContent className="p-6 text-center space-y-5">
              <div className="flex justify-center pt-4 pb-2 text-7xl text-pink-500">
                <Heart />
              </div>

              <CardTitle className="text-3xl font-bold text-gray-800">{scenarioInfo.name}</CardTitle>

              <CardDescription className="inline-block bg-pink-100 text-pink-800 px-4 py-1.5 rounded-full text-sm font-semibold">
                {scenarioInfo.genre}
              </CardDescription>

              <div className="pt-4 space-y-4">
                <div className="text-left space-y-4 bg-white p-5 rounded-xl border-2 border-blue-200">
                  <h3 className="font-bold text-lg text-blue-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    등장인물 소개
                  </h3>
                  <div className="space-y-4 text-sm text-gray-600">
                    {scenarioInfo.characters_info.map((char) => (
                      <div key={char.name} className="flex items-start gap-3">
                        <span className="text-2xl pt-1">{char.emoji}</span>
                        <div>
                          <strong className="font-bold text-gray-800">{char.name}:</strong>
                          <p className="leading-relaxed mt-1">{char.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-left space-y-3 bg-white p-5 rounded-xl border-2 border-green-200">
                  <h3 className="font-bold text-lg text-green-900 flex items-center gap-2">
                    <ScrollText className="w-5 h-5 text-green-600" />
                    시나리오 개요
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 pt-1">{scenarioInfo.overview}</p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={handleStartGame}
                  className="w-full bg-pink-500 text-white py-3.5 px-6 rounded-xl font-bold text-lg hover:bg-pink-600 transition-all duration-200 shadow-lg"
                >
                  <Play className="w-5 h-5 mr-2" /> 게임 시작하기
                </Button>
              </div>
            </CardContent>
          )}

          {currentScreen === "opening" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">👨‍💼</div>
                <CardTitle className="text-2xl font-bold text-blue-700">재민</CardTitle>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl space-y-4 border-l-4 border-blue-400 shadow-inner">
                <p className="text-sm leading-relaxed text-gray-800">{scenarioInfo.opening_dialogue}</p>

                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <p className="font-bold text-pink-800 flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5 text-pink-500" />
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
                  <Image
                    src={locationImages[currentStep.step_id] || "/placeholder.svg"}
                    alt={currentStep.location_name}
                    width={400}
                    height={192}
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
                    <div className="text-2xl">💬</div>
                    <p
                      className="text-sm leading-relaxed text-gray-800"
                      dangerouslySetInnerHTML={{ __html: currentStep.situation_text }}
                    ></p>
                  </div>
                </div>

                {currentStep.npc_name && currentStep.npc_dialogue && (
                  <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-400 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">👨‍💼</div>
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
                    <div className="text-2xl">🎟️</div>
                    <p className="text-sm leading-relaxed text-gray-800">{currentStep.reward_text}</p>
                  </div>
                </div>
              )}

              {currentStep.reward_effect && (
                <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 shadow-inner">
                  <h3 className="font-bold mb-3 text-purple-700 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" /> 소설 아이디어
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
                    <Swords className="w-5 h-5 mr-2" /> 최종장으로
                  </>
                )}
              </Button>
            </CardContent>
          )}

          {currentScreen === "ending" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-8xl animate-tada">🎊</div>
                <CardTitle className="text-3xl font-bold text-blue-900">챌린지 완료!</CardTitle>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400 shadow-inner">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">👩‍💻</div>
                    <div
                      className="space-y-3 text-sm text-gray-800 whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: gameData[gameData.length - 1].next_hint_text || "" }}
                    ></div>
                  </div>
                </div>

                <div className="text-center space-y-2 bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-md">
                  <p className="text-2xl font-bold text-blue-900 flex items-center justify-center gap-2">
                    <Trophy className="w-7 h-7 text-yellow-600" /> 축하합니다!
                  </p>
                  <p className="text-lg text-blue-700 font-semibold">두 사람만의 특별한 이야기가 완성되었습니다.</p>
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
