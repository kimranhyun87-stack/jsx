import { useState } from "react";

const Gmi = () => {
  const quotes = [
    "어제보다 나은 내일이 되길.",
    "가장 큰 위험은 아무것도 하지 않는 것이다.",
    "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다.",
    "지금 공부하면 내일의 네가 웃는다.",
    "단순함이 궁극의 정교함이다.",
  ];

  const [currentQuote, setCurrentQuote] =
    useState("버튼을 눌러 명언을 생성하세요!");
  const [history, setHistory] = useState([]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
    setCurrentQuote(newQuote);
    setHistory([newQuote, ...history]);
  };

  // map 대신 for 문을 사용한 렌더링 로직
  const renderHistory = () => {
    const items = [];
    for (let i = 0; i < history.length; i++) {
      items.push(
        <li
          key={i}
          className="mb-3 p-3 rounded-lg bg-white/10 border border-white/10 text-white/80 text-sm backdrop-blur-sm animate-fade-in"
        >
          {history[i]}
        </li>,
      );
    }
    return items;
  };

  return (
    // 배경: 그라데이션이 있어야 글라스 효과가 잘 보입니다.
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      {/* 메인 컨테이너 (유리창 효과) */}
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-md">
          ✨ Wisdom Glass
        </h1>

        {/* 현재 명언 섹션 */}
        <div className="text-center mb-10">
          <p className="text-xl font-medium text-white leading-relaxed mb-6 min-h-[80px] flex items-center justify-center">
            "{currentQuote}"
          </p>

          <button
            onClick={generateQuote}
            className="px-6 py-3 rounded-full bg-white text-purple-600 font-bold hover:bg-opacity-90 transition-all active:scale-95 shadow-lg shadow-purple-900/20"
          >
            새 명언 뽑기
          </button>
        </div>

        {/* 기록 섹션 (for 문 결과 렌더링) */}
        <div className="mt-8">
          <h3 className="text-white/90 text-sm font-semibold mb-4 uppercase tracking-wider">
            Recent History
          </h3>
          <ul className="max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {renderHistory()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gmi;
