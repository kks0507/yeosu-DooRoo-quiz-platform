"use client"

import { useState } from "react"
import { Gift, Trophy, XCircle, BookOpen, Award } from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// =================================================================
// 1. 모든 게임 컴포넌트 임포트
// =================================================================
import HeungguksaAdventureGame from "../components/heungguksa-adventure-game"
import YeosuAdventureGame from "../components/yeosu-adventure-game"
import BeachAdventureGame from "../components/beach-adventure-game"
import OldRoadAdventureGame from "../components/oldroad-adventure-game"
import GeomundoAdventureGame from "../components/geomundo-adventure-game"
import IslandDriveAdventureGame from "../components/islandDrive-adventure-game"
import DolsanAdventureGame from "../components/dolsan-adventure-game"

// =================================================================
// 2. 여수 전용 데이터 구조
// =================================================================
const YEOSU_REGIONS = [
  {
    id: "yeosu_expo",
    name: "2026 여수 세계 섬 박람회",
    quests: [
      {
        id: "geomundo",
        name: "신지께의 비밀을 찾아서",
        description: "수호신 인어의 전설을 따라 거문도의 비밀을 풀고, 성난 바다를 잠재우세요!",
        component: GeomundoAdventureGame,
        icon: "🧜‍♀️",
        color: "teal",
        badges: [
          "여수여객선터미널",
          "거문도항 여객선터미널",
          "영국군 묘지",
          "유림해수욕장",
          "거문도 등대",
          "백도",
          "거문도인어해양공원",
          "녹산등대",
          "거문대교",
        ],
        prelearningBadgeName: "신지께 선행학습 완료",
      },
      {
        id: "islandDrive",
        name: "사라진 다섬이를 찾아서",
        description: "박람회장 열쇠를 가지고 사라진 마스코트 '다섬이'를 백리섬섬길에서 추격하세요!",
        component: IslandDriveAdventureGame,
        icon: "🏃‍♀️",
        color: "purple",
        badges: [
          "백야대교",
          "화양조발대교",
          "조발도",
          "둔병대교",
          "낭도대교",
          "낭도",
          "적금대교",
          "적금도",
          "팔영대교",
        ],
        prelearningBadgeName: "다섬이 추격 선행학습 완료",
      },
    ],
  },
  {
    id: "yeosu_city",
    name: "여수 도심권",
    quests: [
      {
        id: "yeosu",
        name: "여수 바다를 수호하라",
        description: "동백나무 요정과 함께 여수의 바다를 위협하는 악당을 물리치세요!",
        component: YeosuAdventureGame,
        icon: "🌺",
        color: "blue",
        badges: [
          "이순신광장",
          "좌수영음식문화거리",
          "여수 해양공원",
          "여수 평화의소녀상",
          "해안로 건어물상가 시장",
          "고소대",
          "달빛 갤러리",
          "오포대",
          "고소동 1004 벽화골목",
          "거북선대교",
          "오동도",
          "여수세계박람회장",
          "여수신북항",
          "이순신대교",
          "조명연합수군 역사공원",
        ],
        prelearningBadgeName: "여수 선행학습 완료",
      },
      {
        id: "beach_romance",
        name: "청량 해변의 연인 퀴즈 투어",
        description: "소설가 수아와 해설사 재민의 설레는 여수 데이트! 퀴즈를 풀며 둘만의 이야기를 완성하세요.",
        component: BeachAdventureGame,
        icon: "💕",
        color: "pink",
        badges: ["여수엑스포역", "오션오르간", "해양레일바이크", "만성리검은모래해변", "모사금해수욕장"],
        prelearningBadgeName: "해변의 연인 선행학습 완료",
      },
    ],
  },
  {
    id: "yeosu_samil",
    name: "여수 삼일동",
    quests: [
      {
        id: "heungguksa",
        name: "흥국사에 숨겨진 무공비급을 찾아라",
        description: "흥국사의 비밀을 파헤치고 전설의 무공 비급을 손에 넣으세요!",
        component: HeungguksaAdventureGame,
        icon: "📜",
        color: "red",
        badges: [
          "일주문",
          "홍교",
          "천왕문",
          "봉황루",
          "범종각",
          "동종",
          "법왕문",
          "법고대좌",
          "대웅전",
          "무사전",
          "의승수군유물전시관",
          "대웅전 (목조석가여래삼존상)",
          "대웅전 (후불탱)",
          "불조전",
          "관음보살벽화",
          "수월관음도",
          "삼장보살도",
          "응진당",
          "응진당 (십육나한도)",
          "부도탑",
          "팔상전",
          "중수사적비",
          "해동선관",
          "조월암",
          "적묵당",
          "선불장",
          "용왕전",
        ],
        prelearningBadgeName: "흥국사 선행학습 완료",
      },
    ],
  },
  {
    id: "yeosu_old_road",
    name: "여수의 옛길",
    quests: [
      {
        id: "old_road_trip",
        name: "친구들과의 여수 우정 여행",
        description: "40년 만에 다시 모인 친구들! 추억의 장소를 따라가며 묻어뒀던 타임캡슐을 찾아보세요.",
        component: OldRoadAdventureGame,
        icon: "🎒",
        color: "amber",
        badges: ["여수시외버스터미널", "안숙사적비", "인구부 전투지", "연등동 벅수", "호좌수영 창설사적비", "여수향교", "진남관"],
        prelearningBadgeName: "우정 여행 선행학습 완료",
      },
    ],
  },
  {
    id: "yeosu_dolsan",
    name: "여수 돌산권",
    quests: [
      {
        id: "dolsan_adventure",
        name: "도망친 금오 요정의 일광욕 여행",
        description: "돌이 된 금오 요정들의 소원을 들어주세요! 돌산의 명소에서 퀴즈를 풀고 따스한 햇살을 선물하는 일광욕 여행입니다.",
        component: DolsanAdventureGame,
        icon: "✨",
        color: "orange",
        badges: [
          "돌산대교",
          "돌산공원",
          "여수예술랜드리조트",
          "무슬목 조각공원",
          "해양수산과학관",
          "방죽포해수욕장",
          "향일암",
          "원통암",
          "해탈문",
          "일출정",
          "성두 타포니",
        ],
        prelearningBadgeName: "금오 요정 선행학습 완료",
      },
    ],
  },
]

const ALL_QUESTS = YEOSU_REGIONS.flatMap((region) => region.quests)

export default function App() {
  const [activeGameId, setActiveGameId] = useState<string | null>(null)
  const [activeBadgeBoardQuestId, setActiveBadgeBoardQuestId] = useState<string | null>(null)
  const [showCompletionModal, setShowCompletionModal] = useState(false)
  const [showIncompleteModal, setShowIncompleteModal] = useState(false)
  const [completedGameName, setCompletedGameName] = useState("")

  const [collectedBadges, setCollectedBadges] = useState<{ [questId: string]: string[] }>({
    heungguksa: [],
    yeosu: [],
    geomundo: [],
    islandDrive: [],
    beach_romance: [],
    old_road_trip: [],
    dolsan_adventure: [],
  })
  const [completedPrelearning, setCompletedPrelearning] = useState<{ [questId: string]: boolean }>({
    heungguksa: false,
    yeosu: false,
    geomundo: false,
    islandDrive: false,
    beach_romance: false,
    old_road_trip: false,
    dolsan_adventure: false,
  })
  const [rewardMessage, setRewardMessage] = useState<string | null>(null)

  const handleGameStart = (gameId: string) => setActiveGameId(gameId)
  const handleShowBadgeBoard = (questId: string) => {
    setActiveBadgeBoardQuestId(questId)
    setRewardMessage(null)
  }
  const handleCloseBadges = () => setActiveBadgeBoardQuestId(null)

  const handleGameEnd = (gameId: string, gameName: string, status: "completed" | "exited") => {
    setActiveGameId(null)
    setCompletedGameName(gameName)
    if (status === "completed") {
      setShowCompletionModal(true)
      setCompletedPrelearning((prev) => ({ ...prev, [gameId]: true }))
    } else {
      setShowIncompleteModal(true)
    }
  }

  const handleCollectBadge = (questId: string, badgeName: string) => {
    const quest = ALL_QUESTS.find((q) => q.id === questId)
    if (quest && badgeName === quest.prelearningBadgeName) {
      return
    }

    setCollectedBadges((prev) => {
      const currentBadges = prev[questId] || []
      if (!currentBadges.includes(badgeName)) {
        return { ...prev, [questId]: [...currentBadges, badgeName] }
      }
      return prev
    })
    setRewardMessage(null)
  }

  const handleGoToReward = () => {
    const quest = ALL_QUESTS.find((q) => q.id === activeBadgeBoardQuestId)
    if (!quest) return

    const collectedLocationBadges = collectedBadges[quest.id] || []
    const isPrelearningCompleted = completedPrelearning[quest.id] || false
    const allBadgesCollected = collectedLocationBadges.length === quest.badges.length && isPrelearningCompleted

    if (allBadgesCollected) {
      alert("모든 배지를 모았습니다! 보상을 수령하세요!")
      handleCloseBadges()
    } else {
      setRewardMessage("배지 수가 부족합니다. 모든 배지를 모아주세요.")
    }
  }

  const GameScreen = () => {
    const quest = ALL_QUESTS.find((q) => q.id === activeGameId)
    if (!quest) return null
    const GameComponent = quest.component
    return <GameComponent onGameEnd={(gameId, gameName, status) => handleGameEnd(quest.id, gameName, status)} />
  }

  // Define color classes map once for reuse
  const colorClasses: { [key: string]: { gradient: string; border: string; text: string; hoverBg: string, cardBg: string, cardText: string, badgeBg: string } } = {
    teal: {
        gradient: "from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
        border: "border-teal-400",
        text: "text-teal-700",
        hoverBg: "hover:bg-teal-50",
        cardBg: "from-teal-50 to-teal-100",
        cardText: "text-teal-800",
        badgeBg: "bg-teal-100"
    },
    purple: {
        gradient: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
        border: "border-purple-400",
        text: "text-purple-700",
        hoverBg: "hover:bg-purple-50",
        cardBg: "from-purple-50 to-purple-100",
        cardText: "text-purple-800",
        badgeBg: "bg-purple-100"
    },
    blue: {
        gradient: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
        border: "border-blue-400",
        text: "text-blue-700",
        hoverBg: "hover:bg-blue-50",
        cardBg: "from-blue-50 to-blue-100",
        cardText: "text-blue-800",
        badgeBg: "bg-blue-100"
    },
    pink: {
        gradient: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
        border: "border-pink-400",
        text: "text-pink-700",
        hoverBg: "hover:bg-pink-50",
        cardBg: "from-pink-50 to-pink-100",
        cardText: "text-pink-800",
        badgeBg: "bg-pink-100"
    },
    red: {
        gradient: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
        border: "border-red-400",
        text: "text-red-700",
        hoverBg: "hover:bg-red-50",
        cardBg: "from-red-50 to-red-100",
        cardText: "text-red-800",
        badgeBg: "bg-red-100"
    },
    amber: {
        gradient: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
        border: "border-amber-400",
        text: "text-amber-700",
        hoverBg: "hover:bg-amber-50",
        cardBg: "from-amber-50 to-amber-100",
        cardText: "text-amber-800",
        badgeBg: "bg-amber-100"
    },
    orange: {
        gradient: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
        border: "border-orange-400",
        text: "text-orange-700",
        hoverBg: "hover:bg-orange-50",
        cardBg: "from-orange-50 to-orange-100",
        cardText: "text-orange-800",
        badgeBg: "bg-orange-100"
    },
  }

  const MainScreen = () => {
    const [selectedFilterId, setSelectedFilterId] = useState<string | null>("all")
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-3 px-4 z-50 shadow-md">
          <div className="max-w-5xl mx-auto flex items-center justify-start px-4">
            <a href="/" className="flex items-baseline cursor-pointer flex-shrink-0">
              <span className="text-blue-400 text-4xl font-bold mr-3">Dooroo</span>
            </a>
            <span className="text-base md:text-lg font-bold text-gray-200">AI 기반 지역 탐방 퀘스트 플랫폼</span>
          </div>
        </header>

        <main className="container mx-auto max-w-5xl pt-24 pb-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <header className="text-center">
              <div className="flex items-center justify-center mb-4">
                <img src="/images/yeosu_logo.jpeg" alt="여수시 로고" className="h-[52px]" />
              </div>
              <p className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto leading-relaxed">
                여수 지역을 <strong className="text-blue-600">'두루(Dooroo)'</strong> 탐방하다.
              </p>
            </header>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-2 border-b-2 pb-3 mb-8">
            <Button
              variant={selectedFilterId === "all" ? "default" : "outline"}
              onClick={() => setSelectedFilterId("all")}
              className={`rounded-full px-5 py-2 text-base font-semibold transition-all duration-200 shadow-sm ${selectedFilterId === "all" ? "bg-blue-600 text-white" : "text-gray-700 bg-white"}`}
            >
              전체
            </Button>
            {YEOSU_REGIONS.map((region) => (
              <Button
                key={region.id}
                variant={selectedFilterId === region.id ? "default" : "outline"}
                onClick={() => setSelectedFilterId(region.id)}
                className={`rounded-full px-5 py-2 text-base font-semibold transition-all duration-200 shadow-sm ${selectedFilterId === region.id ? "bg-blue-600 text-white" : "text-gray-700 bg-white"}`}
              >
                {region.name}
              </Button>
            ))}
          </nav>
          <div className="mt-8">
            {(() => {
              let questsToDisplay = []
              if (selectedFilterId === "all") {
                questsToDisplay = ALL_QUESTS
              } else {
                const selectedRegion = YEOSU_REGIONS.find((r) => r.id === selectedFilterId)
                if (selectedRegion) {
                  questsToDisplay = selectedRegion.quests
                }
              }

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {questsToDisplay.length > 0 ? (
                    questsToDisplay.map((quest) => (
                      <Card
                        key={quest.id}
                        className="rounded-3xl shadow-xl overflow-hidden border-2 border-transparent hover:border-blue-400 hover:shadow-2xl transition-all duration-300 flex flex-col"
                      >
                        <CardContent
                          className={`p-8 bg-gradient-to-br text-center ${colorClasses[quest.color]?.cardBg || 'from-gray-50'}`}
                        >
                          <div className="text-7xl mb-4 transform hover:scale-110 transition-transform duration-300">
                            {quest.icon}
                          </div>
                          <CardTitle className={`text-2xl font-extrabold ${colorClasses[quest.color]?.cardText || 'text-gray-800'}`}>
                            {quest.name}
                          </CardTitle>
                        </CardContent>
                        <CardContent className="p-8 flex-grow flex flex-col justify-between bg-white">
                          <CardDescription className="text-gray-700 mb-8 leading-relaxed">
                            {quest.description}
                          </CardDescription>
                          <div className="space-y-3">
                            <Button
                              onClick={() => handleGameStart(quest.id)}
                              className={`w-full bg-gradient-to-r text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105 ${colorClasses[quest.color]?.gradient || "from-gray-500 to-gray-600"}`}
                            >
                              선행학습 시작
                            </Button>
                            <Button
                              onClick={() => handleShowBadgeBoard(quest.id)}
                              className={`w-full bg-white border-2 font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-md ${colorClasses[quest.color]?.border || "border-gray-400"} ${colorClasses[quest.color]?.text || "text-gray-700"} ${colorClasses[quest.color]?.hoverBg || "hover:bg-gray-50"}`}
                            >
                              여행 인증 배지 모으기
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="col-span-1 md:col-span-2 text-center py-20 bg-gray-50 rounded-2xl">
                      <p className="text-gray-500 text-lg">이 지역의 퀘스트를 준비 중입니다. 기대해주세요!</p>
                    </div>
                  )}
                </div>
              )
            })()}
          </div>
        </main>
      </div>
    )
  }

  const CompletionModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]">
      <Card className="rounded-3xl shadow-2xl p-10 max-w-md w-full text-center transform transition-all scale-100 bg-white">
        <CardContent>
          <div className="text-6xl mb-4">🏆</div>
          <CardTitle className="text-3xl font-bold text-gray-800 mb-3">선행학습 완료!</CardTitle>
          <CardDescription className="text-gray-700 mb-8 leading-relaxed">
            <strong>{completedGameName}</strong> 퀘스트의 선행학습을 성공적으로 마쳤습니다! 이제 실제 장소로 떠날 준비가
            되었습니다.
          </CardDescription>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg text-left mb-6">
            <div className="flex items-center">
              <Gift className="w-5 h-5 mr-2" />
              <h3 className="font-bold text-blue-800 mb-2">다음 미션</h3>
            </div>
            <p className="text-gray-700">
              이제 실제 관광지로 가서 GPS 기반 방문 인증 배지를 획득하고 특별한 보상을 수령하세요!
            </p>
          </div>
          <Button
            onClick={() => setShowCompletionModal(false)}
            className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            확인
          </Button>
        </CardContent>
      </Card>
    </div>
  )
  const IncompleteModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]">
      <Card className="rounded-3xl shadow-2xl p-10 max-w-md w-full text-center transform transition-all scale-100 bg-white">
        <CardContent>
          <div className="text-6xl mb-4">⚠️</div>
          <CardTitle className="text-3xl font-bold text-gray-800 mb-3">선행학습 미완료</CardTitle>
          <CardDescription className="text-gray-700 mb-8 leading-relaxed">
            선행학습을 끝까지 완료해야만 해당 퀘스트의 배지를 획득할 수 있습니다.
            <br />
            다음에 다시 도전해주세요!
          </CardDescription>
          <Button
            onClick={() => setShowIncompleteModal(false)}
            className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-red-700 transition-colors duration-300 shadow-lg"
          >
            확인
          </Button>
        </CardContent>
      </Card>
    </div>
  )
  const BadgeBoard = () => {
    const quest = ALL_QUESTS.find((q) => q.id === activeBadgeBoardQuestId)
    if (!quest) return null

    const collected = collectedBadges[quest.id] || []
    const isPrelearningCompleted = completedPrelearning[quest.id] || false

    const allBadgesForDisplay = [
      { name: quest.prelearningBadgeName, isPrelearning: true, displayIcon: <BookOpen className="w-full h-full" /> },
      ...quest.badges.map((name) => ({ name, isPrelearning: false, displayIcon: quest.icon })),
    ]

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-[100]"
        onClick={handleCloseBadges}
      >
        <Card
          className="rounded-3xl shadow-2xl p-8 max-w-3xl w-full text-center transform transition-all scale-100 bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <CardTitle className={`text-3xl font-bold ${colorClasses[quest.color]?.cardText || 'text-gray-800'} flex items-center gap-3`}>
                <Trophy className="w-7 h-7" />
                {quest.name} 배지 보드
              </CardTitle>
              <Button variant="ghost" onClick={handleCloseBadges} className="text-gray-400 hover:text-gray-600 p-2">
                <XCircle className="w-8 h-8" />
              </Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-inner grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-h-[60vh] overflow-y-auto">
              {allBadgesForDisplay.map((badge) => {
                const isCollected = badge.isPrelearning ? isPrelearningCompleted : collected.includes(badge.name)
                return (
                  <Card
                    key={badge.name}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center justify-between w-[140px] h-[160px] transition-all duration-300 mx-auto ${isCollected ? `${colorClasses[quest.color]?.badgeBg || 'bg-gray-200'} ${colorClasses[quest.color]?.border || 'border-gray-400'} shadow-lg` : "bg-gray-100 border-gray-200 hover:border-gray-300"}`}
                  >
                    <CardContent className="flex flex-col items-center justify-center h-full p-0">
                      <div className={`text-5xl mb-2 ${isCollected ? "" : "grayscale opacity-50"}`}>
                        {badge.displayIcon}
                      </div>
                      <CardDescription
                        className={`font-semibold text-sm text-center leading-tight ${isCollected ? colorClasses[quest.color]?.cardText || 'text-gray-800' : "text-gray-600"}`}
                      >
                        {badge.name}
                      </CardDescription>
                      <div className="mt-auto pt-2">
                        {isCollected ? (
                          <div className="text-xs font-bold py-1.5 px-3 rounded-full bg-green-200 text-green-800 flex items-center justify-center gap-1 mt-auto">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span dangerouslySetInnerHTML={{ __html: "인증<br/>완료" }}></span>
                          </div>
                        ) : badge.isPrelearning ? (
                          <div className="text-xs font-bold py-1.5 px-3 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center gap-1 mt-auto">
                            선행학습 필요
                          </div>
                        ) : (
                          <Button
                            size="sm"
                            onClick={() => handleCollectBadge(quest.id, badge.name)}
                            className="text-xs font-bold py-1.5 px-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-1 mt-auto"
                          >
                            방문 인증하기
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <CardDescription className="text-sm text-gray-600 mt-6 leading-relaxed">
              "해당 장소 반경 100m 이내에 접근하면 '방문 인증하기' 버튼을 눌러 GPS 인증을 완료하고 배지를 수집할 수
              있어요. 선행학습 배지는 퀘스트를 끝까지 완료하면 자동으로 획득됩니다."
            </CardDescription>
            {rewardMessage && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-medium">
                {rewardMessage}
              </div>
            )}
            <Button
              onClick={handleGoToReward}
              className={`w-full mt-6 bg-gradient-to-r text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105 ${colorClasses[quest.color]?.gradient || "from-gray-500 to-gray-600"}`}
            >
              <Award className="w-5 h-5 mr-2" /> 보상 받으러가기
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <>
      {activeGameId ? <GameScreen /> : <MainScreen />}
      {activeBadgeBoardQuestId && <BadgeBoard />}
      {showCompletionModal && <CompletionModal />}
      {showIncompleteModal && <IncompleteModal />}
    </>
  )
}
