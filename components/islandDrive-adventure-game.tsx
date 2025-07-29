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
  Footprints,
  Key,
  Youtube,
} from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const gameData = [
  {
    step_id: "1",
    scenario_id: "SCN004",
    sequence: 1,
    location_id: "LOC_BYEAKYO_001",
    location_name: "백야대교",
    background_text:
      "노을 지는 하늘 아래 붉게 물든 바다 위, 다섬이가 처음 힌트를 남긴 백야대교. 이곳 교각에는 홀로 남겨진 빈 컵라면 용기와 함께, 다섬이가 급하게 달아난 흔적이 어슴푸레 빛난다.",
    situation_text:
      "“여기가 다섬이가 첫 번째 힌트를 남긴 곳인가? 교각 중간에 놓인 다섬이가 좋아하는 컵라면 용기… 분명 다섬이가 급하게 먹다 버린 흔적일 거야. 어? 저기 도망가는 다섬이가 보이는데?…”",
    npc_name: "다섬이",
    npc_dialogue: "“내가 그렇게 만만하게 잡혀줄 줄 알았어? 이 퀴즈를 풀지 못하면 다음 장소로 넘어갈 수 없다고!”",
    quiz_question: "백야대교는 전라남도 여수시 화양면의 어느 마을과 백야도를 연결하고 있나요?",
    quiz_option1: "A. 화정면 백아리",
    quiz_option2: "B. 화양면 안포리",
    quiz_option3: "C. 백야도",
    quiz_answer: "B. 화양면 안포리",
    quiz_difficulty: "상",
    culture_info:
      "백야대교는 전라남도 여수시 화양면 안포리와 백야도(화정면 백야리) 사이에 건설된 다리로, 2000년 6월에 착공하여 2005년 4월 14일 준공되었다.",
    reward_effect: "'30초 섬여행-백야도'편 영상 보기",
    youtube_video_id: "1rZFG4xspy0",
    next_hint_text: "“다음 목적지는 백리섬섬길 첫 번째 대교, 화양조발대교야. 그곳에서 또 다른 힌트를 찾아봐!”",
    image: "/images/SCN004_1.jpeg",
  },
  {
    step_id: "2",
    scenario_id: "SCN004",
    sequence: 2,
    location_id: "LOC_HWAYANG_JOBAL_002",
    location_name: "화양조발대교",
    background_text:
      "끝없이 펼쳐진 바다 위로 첫 태양빛을 받아 반짝이는 화양조발대교. 다리가 출렁이는 파도 위에 그려내는 그림 같은 풍경 속, 다섬이가 남긴 작은 요트 모형이 은밀히 빛난다.",
    situation_text:
      "“여기가 다섬이가 두 번째 힌트를 남긴 화양조발대교야. 난간 위에 놓인 작은 요트 모형… 분명 다섬이가 장난 삼아 남긴 흔적일 거야. 어? 저기 다섬이가 바람을 가르며 도망가고 있어!…”",
    npc_name: "다섬이",
    npc_dialogue: "“이 정도로 날 따라올 수 있을 줄 알았어? 네가 이 퀴즈를 풀어야만 내 속도를 늦춰줄 거야!”",
    quiz_question: "화양조발대교가 놓여 있는 관광로의 이름은 무엇인가요?",
    quiz_option1: "A. 여수10경",
    quiz_option2: "B. 남해안해안로",
    quiz_option3: "C. 백리섬섬길",
    quiz_answer: "C. 백리섬섬길",
    quiz_difficulty: "중",
    culture_info:
      "화양조발대교는 전라남도 여수시 화양면 장수리에서 화정면 조발리(조발도)를 잇는 다리로, 여수에서 고흥으로 이어지는 백리섬섬길 위에 놓인 첫 번째 대교이다.",
    reward_text: "맞바람",
    reward_effect: "바람을 타고 달리는 다섬이에게 맞바람을 통해 속도를 기존보다 30% 지연시킨다.",
    next_hint_text: "“다음 목적지는 조발도야. 해오름언덕에서 또 다른 힌트를 찾아봐!”",
    image: "/images/SCN004_2.jpg",
  },
  {
    step_id: "3",
    scenario_id: "SCN004",
    sequence: 3,
    location_id: "LOC_JOBAL_003",
    location_name: "조발도",
    background_text:
      "붉은 해가 동틀 무렵 조망하는 해오름언덕. 가파른 말 형상의 경사 위에서, 조발도를 밝히는 첫 햇살처럼 다섬이가 남긴 엽서가 반짝인다.",
    situation_text:
      "“여기가 다섬이가 세 번째 힌트를 남긴 조발도야. 바위 위에 놓인 해돋이 엽서… 분명 다섬이가 일출을 감상하다 남긴 흔적일 거야. 어? 저쪽 언덕으로 다섬이가 뛰어가고 있어!…”",
    npc_name: "다섬이",
    npc_dialogue: "“이 정도 속도로는 절대 못 잡을 줄 알았지? 퀴즈를 풀지 못하면 절대 멈추지 않을거야!”",
    quiz_question:
      "해가 떠올라 섬 전체를 가장 먼저 밝히는 곳이라는 뜻으로 조발도에서 일출을 감상하기 좋은 언덕의 이름은 무엇인가요?",
    quiz_option1: "A. 해오름언덕",
    quiz_option2: "B. 연등언덕",
    quiz_option3: "C. 검은모래언덕",
    quiz_answer: "A. 해오름언덕",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 화정면 조발리에 있는 섬으로 말 등과 같이 평지가 없이 모두 경사지로 되어 있고, 해가 일찍 떠서 밝게 비추어 준다고 해서 조발도(早發島)라 부르게 되었다.",
    reward_text: "조발도에 대한 지역 정보를 얻었다. 이제 다섬이가 조발도 어디로 도망가건 잡을 수 있다.",
    reward_effect: "'섬지순례-조발도편' 영상 보기",
    youtube_video_id: "VTkmLIsb0YY",
    next_hint_text: "“다음 목적지는 둔병대교야. 그곳에서 또 다른 힌트를 찾아봐!”",
    image: "/images/SCN004_3.jpg",
  },
  {
    step_id: "4",
    scenario_id: "SCN004",
    sequence: 4,
    location_id: "LOC_DUNBYUNG_BRIDGE_004",
    location_name: "둔병대교",
    background_text:
      "둔병대교는 케이블이 하늘로 뻗어 올라간 모습이 마치 거미줄처럼 펼쳐진 사장교이다. 조발도에서 둔병도로 이어지는 이 교각 위에 서면, 아래로는 잔잔한 바다가 펼쳐지고, 다섬이가 바람을 타고 재빨리 달려간 흔적이 보인다.",
    situation_text:
      "“여기는 다섬이가 네 번째 힌트를 숨겨둔 곳이야. 탑 위에 걸린 작은 깃발 조각… 분명 다섬이가 속도를 높이다 흘린 자취일 거야. 어? 저기 다섬이가 또 달아나고 있어!…”",
    npc_name: "다섬이",
    npc_dialogue: "“하하, 네가 이 교를 건널 때쯤엔 이미 난 반대편에 있겠지! 퀴즈나 풀어봐라!”",
    quiz_question: "전라남도 여수시 화정면 조발리의 조발도와 둔병도를 잇는 사장교의 이름은?",
    quiz_option1: "A. 적금대교",
    quiz_option2: "B. 낭도대교",
    quiz_option3: "C. 둔병대교",
    quiz_answer: "C. 둔병대교",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 화정면 조발리의 조발도와 둔병도를 잇는 사장교로 2020년 1월 23일부터 28일까지 임시 개통하였다. 2020년 2월 28일 적금대교, 낭도대교, 화양조발대교와 함께 공식 개통하였다. 사장교(斜張橋)는 케이블이 주탑에서 사장(斜張)된 형태로 교각을 지지하는 구조의 다리이다.",
    reward_text: "둔병도에 대한 지역 정보를 얻었다. 이제 다섬이가 둔병도 어디로 도망가건 잡을 수 있다.",
    reward_effect: "'섬지순례-둔병도편' 영상 보기",
    youtube_video_id: "_Mysz3WBnng",
    next_hint_text: "“다음 목적지는 낭도대교야. 그곳에서 또 다른 힌트를 찾아봐!”",
    image: "/images/SCN004_4.jpg",
  },
  {
    step_id: "5",
    scenario_id: "SCN004",
    sequence: 5,
    location_id: "LOC_NANGDO_BRIDGE_005",
    location_name: "낭도대교",
    background_text:
      "잔잔한 파도 위에 우뚝 선 낭도대교. 사장교의 곡선미가 바다 위에 그림자를 드리우고, 다섬이가 전속력으로 달려간 흔적이 교각 사이사이에 남아 있다.",
    situation_text:
      "“여기가 다섬이가 다섯 번째 힌트를 숨긴 낭도대교야. 난간 아래에 놓인 작은 늑대 인형… 분명 다섬이가 장난 삼아 두고 간 거지. 어? 저쪽 교각 끝에서 다섬이가 또 사라지려 해!…”",
    npc_name: "다섬이",
    npc_dialogue: "“하하, 네 눈이 아무리 예리해도 내 속도를 못 따라올걸? 퀴즈나 풀어봐라!”",
    quiz_question: "낭도대교는 둔병도와 이 섬을 연결하기 위한 다리이다. 여기서 이 섬의 이름은?",
    quiz_option1: "A. 조발도",
    quiz_option2: "B. 낭도",
    quiz_option3: "C. 화정면",
    quiz_answer: "B. 낭도",
    quiz_difficulty: "중",
    culture_info:
      "전라남도 여수시 화정면의 낭도리[낭도]와 조발리[둔병도]를 연결하는 연도교로 낭도대교는 2011년 12월 착공하였으며, 2019년 12월 준공하였다. 설 명절 고향을 찾는 귀성객 및 지역 주민의 교통 편의를 위해 2020년 1월 23일부터 28일까지 임시 개통하였으며, 2020년 2월 28일 적금대교, 화양조발대교, 둔병대교와 함께 공식 개통하였다.",
    reward_text: "추격자의 눈",
    reward_effect: "다섬이의 흔적을 찾을 확률이 20% 증가한다.",
    next_hint_text: "“다음 목적지는 낭도야. 그곳에서 또 다른 힌트를 찾아봐!”",
    image: "/images/SCN004_5.png",
  },
  {
    step_id: "6",
    scenario_id: "SCN004",
    location_id: "LOC_NANGDO_ISLE_006",
    location_name: "낭도",
    background_text:
      "연륙·연도교 개통으로 자동차로 진입한 낭도. 바다 위로 뻗은 다리 끝에서 내려다보면 늑대 형상을 닮은 섬의 윤곽이 선명히 드러난다. 지금 이 순간, 다섬이는 섬 가장자리의 바위틈에 숨어 있을 것이다.",
    situation_text:
      "“여기가 다섬이가 다섬이 여섯 번째로 흔적을 남긴 낭도야. 풀숲에 놓인 작은 늑대 인형… 분명 다섬이가 장난처럼 두고 간 거야. 어? 저쪽 숲속으로 다섬이가 도망가고 있어!…”",
    npc_name: "다섬이",
    npc_dialogue: "“늑대처럼 날카로운 눈을 가졌다고? 그래도 이 섬 전역을 다 뒤져봐야 내 흔적을 찾을 수 있을걸!”",
    quiz_question: "섬의 모양이 ‘늑대(狼)’를 닮았다고 하여 붙여진 이름은 무엇인가요?",
    quiz_option1: "A. 여산마을",
    quiz_option2: "B. 규포마을",
    quiz_option3: "C. 낭도",
    quiz_answer: "C. 낭도",
    quiz_difficulty: "중",
    culture_info:
      "섬의 모양이 이리를 닮았다고 하여 이리 낭(狼)자를 써서 낭도라 부르게 되었다. 2020년 2월 말 여수와 고흥을 잇는 연륙·연도교 적금대교, 낭도대교, 둔병대교, 화양조발대교 4개가 한꺼번에 개통되면서 낭도는 승용차를 타고 들어갈 수 있다. 이중 낭도대교는 둔병도와 낭도를 연결하는 연도교이다.",
    reward_text: "낭도에 대한 지역 정보를 얻었다. 이제 다섬이가 낭도 어디로 도망가건 잡을 수 있다.",
    reward_effect: "'섬지순례-낭도편' 영상 보기",
    youtube_video_id: "22mYnnW_5Ac",
    next_hint_text: "“다음 목적지는 적금대교야. 그곳에서 또 다른 힌트를 찾아봐!”",
    image: "/images/SCN004_6.jpg",
  },
  {
    step_id: "7",
    scenario_id: "SCN004",
    sequence: 7,
    location_id: "LOC_JEOKGEUM_BRIDGE_007",
    location_name: "적금대교",
    background_text:
      "적금대교. 낭도에서 불어오는 해풍에 금속 표면이 반짝이며, 다섬이가 금을 찾아 헤매다 남긴 흔적이 남아 있다.",
    situation_text:
      "“여기가 다섬이가 일곱 번째 힌트를 숨긴 적금대교야. 난간에 놓인 작은 금 조각 모형… 분명 다섬이가 금 찾아 장난친 흔적이지. 어? 저쪽으로 또 다섬이가 사라져가!…”",
    npc_name: "다섬이",
    npc_dialogue: "“흥, 너가 쓴 맞바람 기술도 극복하면 그만이야! 이 퀴즈를 풀어야 내 뒤를 따라잡을 수 있을걸!”",
    quiz_question: "적금대교는 화정면 낭도리의 낭도와 연결되는 다리인데, 그 반대편 섬의 이름은 무엇인가요?",
    quiz_option1: "A. 적금도",
    quiz_option2: "B. 둔병도",
    quiz_option3: "C. 조발도",
    quiz_answer: "A. 적금도",
    quiz_difficulty: "중",
    culture_info:
      "적금대교는 전라남도 여수시 화정면 낭도리(낭도)와 적금리(적금도)를 잇는 연도교로, 2020년 2월 28일 화양조발대교, 낭도대교, 둔병대교와 함께 공식 개통되었다.",
    reward_text: "여수 바다바람",
    reward_effect: "다섬이를 쫓는 속도가 증가한다. 맞바람과 동시에 사용 가능하다.",
    next_hint_text: "“다음 목적지는 적금도야. 그곳에서 또 다른 힌트를 찾아봐!”",
    image: "/images/SCN004_7.jpg",
  },
  {
    step_id: "8",
    scenario_id: "SCN004",
    sequence: 8,
    location_id: "LOC_JEOKGEUM_ISLE_008",
    location_name: "적금도",
    background_text:
      "금빛 햇살이 바위틈 사이로 스며드는 적금도. 섬 북쪽 해안절벽 아래에는 과거 금채굴 흔적이 고스란히 남은 금굴 입구가 숨어 있어, 이곳이 금을 좋아하는 다섬이가 마지막으로 머물렀을 법한 장소다.",
    situation_text:
      "“여기가 다섬이가 여덟 번째 힌트를 남긴 적금도야. 금굴 입구 앞에 놓인 작은 금 조각 모형… 분명 다섬이가 ‘맛보기’로 남긴 흔적이지. 어? 저기 다섬이가 동굴 속으로 사라지려 해!…”",
    npc_name: "다섬이",
    npc_dialogue: "“흥, 나는 금굴로 들어간다! 너도 잘 따라와봐. 이 퀴즈를 풀지 않으면 이 동굴에서도 못 빠져나올걸?”",
    quiz_question:
      "적금도는 금이 많이 있다는 이야기가 있어 지금도 금을 채굴한 흔적이 있습니다. 이 흔적이 남아있는 장소는?",
    quiz_option1: "A. 금굴",
    quiz_option2: "B. 적금마을",
    quiz_option3: "C. 당산",
    quiz_answer: "A. 금굴",
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 화정면 적금리에 있는 섬으로 2020년 2월 말 여수와 고흥을 잇는 연륙·연도교 적금대교, 낭도대교, 둔병대교, 화양조발대교 4개가 한꺼번에 개통되어 육지와 연결되었다. 적금도는 전라남도 여수시 화정면에 위치한 섬으로, 과거 금을 채굴했던 흔적이 남아있는 금굴이 있는 곳으로 유명합니다.",
    reward_text: "적금도에 대한 지역 정보를 얻었다. 이제 다섬이가 적금도 어디로 도망가건 잡을 수 있다.",
    reward_effect: "'섬지순례-적금도편' 영상 보기",
    youtube_video_id: "GdJoCfkYw2M",
    next_hint_text:
      "“다음 목적지는 팔영대교야. 여수를 벗어날 수 없는 다섬이는 그곳에 숨어 있을 거야. 열쇠도 찾고 다섬이도 잡아 다시 박람회장으로 돌려두자!”",
    image: "/images/SCN004_8.jpg",
  },
  {
    step_id: "9",
    scenario_id: "SCN004",
    sequence: 9,
    location_id: "LOC_PALYOUNG_BRIDGE_009",
    location_name: "팔영대교",
    background_text:
      "끝없이 펼쳐진 바다 위, 팔영산을 닮은 케이블이 하늘로 치솟는 팔영대교. 여수의 마지막 관문인 이곳에서, 다섬이는 바람을 맞으며 주저앉아 있다. 달아나던 다섬이가 “여기서 쉬어야겠다”며 잠시 멈춘 자리이기도 하다.",
    situation_text: "“드디어 다섬이가 멈춘 것 같아. 여기서 우리가 진심으로 설득하지 않으면 열쇠를 돌려주지 않을 거야!”",
    npc_name: "다섬이",
    npc_dialogue:
      "“박람회가 인기가 너무 많아, 너무 많은 사람들을 상대하느라 나도 아름다운 섬들을 보며 조금 쉬고 싶었단 말이야. 그럼 내가 마지막으로 내는 퀴즈를 맞추면 열쇠를 돌려주고 함께 돌아갈게...”",
    quiz_question: "팔영대교가 연결하는 여수 화정면의 섬 이름은 무엇인가요?",
    quiz_option1: "A. 고흥군",
    quiz_option2: "B. 적금도",
    quiz_option3: "C. 팔영산",
    quiz_answer: "B. 적금도",
    quiz_difficulty: "상",
    culture_info:
      "전라남도 여수시 화정면 적금리[적금도]와 고흥군 영남면 우천리를 잇는 현수교로 팔영대교는 전라남도 고흥군에 있는 팔영산에서 따온 이름이다. ",
    reward_text: "다섬이가 납득하고 열쇠를 돌려주었다. 박람회장 전시관의 문이 다시 활짝 열릴 수 있게 되다!",
    reward_effect:
      "다섬아 너가 없으면 여수의 섬과 세계의 섬을 소개할 수 있는 존재가 없잖아. 아름다운 섬들을 사람들에게 알려줘. 항상 고마워~",
    next_hint_text: null,
    image: "/images/SCN004_9.jpg",
  },
]

type GameScreen = "intro" | "opening" | "location" | "situation" | "quiz" | "result" | "reward" | "ending"

interface DasomiChaseGameProps {
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

export default function DasomiChaseGame({ onGameEnd }: DasomiChaseGameProps) {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>("intro")
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false)
  const [collectedItems, setCollectedItems] = useState<string[]>([])
  const [gameStarted, setGameStarted] = useState(false)

  const currentStep: (typeof gameData)[0] & { youtube_video_id?: string } = gameData[currentStepIndex]
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
      if (currentStep.reward_text) {
        setCollectedItems((prev) => [...prev, currentStep.reward_text])
      }
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
    setCollectedItems([])
    setGameStarted(false)
    onGameEnd("islandDrive", "사라진 다섬이를 찾아서", "completed")
  }

  const handleExitGame = () => {
    onGameEnd("islandDrive", "사라진 다섬이를 찾아서", "exited")
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "하":
        return "bg-green-100 text-green-800 border-green-200"
      case "중":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "상":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-50 to-blue-200">
      {currentScreen === "intro" && <IntroHeader />}
      <div className={`max-w-lg mx-auto p-4 ${currentScreen === 'intro' ? 'pt-20' : ''}`}>
        {gameStarted && currentScreen !== "intro" && currentScreen !== "ending" && (
          <Card className="mb-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                  <Footprints className="w-6 h-6 text-blue-600" />
                  사라진 다섬이를 찾아서
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
              <div className="flex gap-3 justify-center pt-2">
                <div className="flex items-center gap-2 text-sm text-stone-600 bg-gray-100 px-3 py-1 rounded-full">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">획득한 단서:</span>
                  <span className="font-bold text-blue-700">{collectedItems.length}개</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="bg-white/95 rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200">
          {currentScreen === "intro" && (
            <CardContent className="p-6 text-center space-y-5">
              <div className="flex justify-center pt-4 pb-2 text-7xl">
                🏃‍♀️
              </div>

              <CardTitle className="text-3xl font-bold text-gray-800">사라진 다섬이를 찾아서</CardTitle>
              
              <CardDescription className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold">
                추격 어드벤처
              </CardDescription>

              <div className="pt-4 space-y-4">
                <div className="text-left space-y-4 bg-white p-5 rounded-xl border-2 border-stone-200">
                  <h3 className="font-bold text-lg text-stone-800 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    등장인물 소개
                  </h3>
                  <div className="space-y-4 text-sm text-gray-600">
                    <p>
                        <strong className="font-bold text-gray-800">여행자:</strong> 다섬이를 쫓는 용감한 추격자
                    </p>
                    <p>
                        <strong className="font-bold text-gray-800">다섬이:</strong> 여수 섬 박람회장에서 열쇠를 가지고 탈출한
                        장난꾸러기 마스코트. 아름다운 섬 구경을 하고 싶어한다.
                    </p>
                  </div>
                </div>

                <div className="text-left space-y-3 bg-white p-5 rounded-xl border-2 border-green-200">
                  <h3 className="font-bold text-lg text-green-900 flex items-center gap-2">
                    <Scroll className="w-5 h-5 text-green-600" />
                    시나리오 개요
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 pt-1">
                    여수 섬 박람회장의 마스코트 '다섬이'가 전시관 열쇠를 가지고 사라졌다! 다섬이는 여수와 고흥을 잇는
                    아름다운 길, '백리섬섬길'을 따라 도망치며 흔적을 남기고 있다. 여행자는 다섬이가 남긴 퀴즈를 풀며
                    그녀를 추격하고, 박람회장의 열쇠를 되찾아 무사히 복귀시켜야 한다. 백야대교에서 시작해 팔영대교에
                    이르는 9개 명소를 넘나드는 추격전이 지금 시작된다.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={handleStartGame}
                  className="w-full bg-blue-600 text-white py-3.5 px-6 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
                >
                  <Play className="w-5 h-5 mr-2" /> 추격 시작하기
                </Button>
              </div>
            </CardContent>
          )}

          {currentScreen === "opening" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 text-blue-500">📢</div>
                <CardTitle className="text-2xl font-bold text-blue-700">박람회장 관리자의 외침</CardTitle>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl space-y-4 border-l-4 border-blue-400 shadow-inner">
                <p className="text-sm leading-relaxed text-stone-800">
                  “큰일이야! 우리 박람회 마스코트 '다섬이'가 전시관 열쇠를 들고 사라졌어. 듣자 하니 백리섬섬길을 따라 섬
                  구경을 하러 간 것 같아. 이대로는 박람회를 다시 열 수 없어. 모험가, 네가 다섬이를 쫓아가서 열쇠를
                  되찾아와야만 해. 첫 번째 단서는 백야대교에 있을 거야. 서둘러!”
                </p>
                <div className="text-center p-4 bg-white rounded-lg border border-stone-200 shadow-sm">
                  <p className="font-bold text-blue-800 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    모험가님, 다섬이를 찾아 박람회장 열쇠를 되찾아 주시겠습니까?
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleAcceptQuest}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-md transform hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5 mr-2" /> 예, 제가 다섬이를 찾아 열쇠를 되찾겠습니다.
                </Button>
                <Button
                  onClick={handleExitGame}
                  variant="outline"
                  className="w-full bg-stone-100 text-stone-700 py-3 px-6 rounded-xl font-medium hover:bg-stone-200 transition-all duration-200 border-stone-300"
                >
                  <XCircle className="w-5 h-5 mr-2" /> 아니오, 저는 추격에 소질이 없습니다.
                </Button>
              </div>
            </CardContent>
          )}

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
                <Compass className="w-5 h-5 mr-2" /> 추격 계속하기
              </Button>
            </CardContent>
          )}

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
                    <div className="text-2xl">🕵️</div>
                    <p
                      className="text-sm leading-relaxed text-stone-800"
                      dangerouslySetInnerHTML={{ __html: currentStep.situation_text }}
                    ></p>
                  </div>
                </div>

                {currentStep.npc_name && currentStep.npc_dialogue && (
                  <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-400 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🏃‍♀️</div>
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

              {currentStep.youtube_video_id ? (
                <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 shadow-inner">
                  <h3 className="font-bold mb-3 text-stone-700 flex items-center gap-2">
                    <Youtube className="w-5 h-5 text-red-600" /> 특별 보상 영상
                  </h3>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${currentStep.youtube_video_id}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-center text-sm mt-2 text-stone-600">{currentStep.reward_effect}</p>
                </div>
              ) : (
                currentStep.reward_effect && (
                  <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 shadow-inner">
                    <h3 className="font-bold mb-3 text-stone-700 flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-600" /> 획득 효과
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-800 whitespace-pre-line">
                      {currentStep.reward_effect}
                    </p>
                  </div>
                )
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

          {currentScreen === "ending" && (
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="text-8xl animate-tada">🎊</div>
                <CardTitle className="text-3xl font-bold text-stone-900">임무 완수!</CardTitle>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400 shadow-inner">
                  <h3 className="font-bold mb-3 text-green-800 flex items-center gap-2">
                    <Key className="w-5 h-5 text-green-600" />
                    열쇠를 되찾다!
                  </h3>
                  <div className="space-y-2 text-sm text-stone-800">
                    <p>{currentStep.reward_text}</p>
                  </div>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl text-center border border-stone-200 shadow-inner">
                  <p className="text-sm leading-relaxed text-stone-800">{currentStep.reward_effect}</p>
                </div>

                <div className="text-center space-y-2 bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-md">
                  <p className="text-2xl font-bold text-stone-900 flex items-center justify-center gap-2">
                    <Trophy className="w-7 h-7 text-amber-600" /> 축하합니다!
                  </p>
                  <p className="text-lg text-stone-700 font-semibold">
                    다섬이를 찾아 박람회장 열쇠를 무사히 돌려받았습니다!
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
