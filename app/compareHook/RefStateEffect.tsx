import { useRef, useEffect, useState } from "react";

export function RefStateEffect() {
  console.log("--- RefState 組件渲染開始 ---");

  // useState 在每次渲染時都會返回最新的狀態值
  // 初次渲染返回初始值 0，之後返回更新後的值
  const [count, setCount] = useState(0);
  console.log("useState 返回的 count:", count);

  // useRef 在首次渲染時創建對象，之後渲染時返回同一個對象
  // 初始值為首次渲染時的 count 值 (0)
  const latestCount = useRef(count);
  console.log("渲染階段中的 latestCount.current:", latestCount.current);

  // 無依賴數組: 每次渲染後都執行
  // 所以 latestCount.current 會在每次渲染後更新為最新的 count
  useEffect(() => {
    console.log("--- 渲染後的 Effect 執行 ---");
    console.log("更新前 latestCount.current =", latestCount.current);
    console.log("【無依賴數組】每次渲染後都執行，當前 count =", count);

    // 更新 ref 值為當前最新的 count
    latestCount.current = count;

    console.log("更新後 latestCount.current =", latestCount.current);
    console.log("--- Effect 結束 ---");
  });

  // 有依賴 [count]: 當 count 變化時執行
  useEffect(() => {
    console.log("【有依賴 [count]】count變化時執行，count =", count);
    // 這裡的 count 也是最新的，因為 count 變化時此 effect 會執行
  }, [count]);

  // 空依賴數組: 只在首次渲染後執行一次
  useEffect(() => {
    console.log("--- 只執行一次的計時器 Effect ---");
    console.log("【空依賴數組】只在首次渲染後執行，count =", count);
    // 這裡的 count 永遠是初始值(0)，因為此 effect 只在首次渲染後執行一次

    // 嚴格模式下，這個effect會執行兩次，這有助於測試清理函數是否正確
    const id = setInterval(() => {
      // 閉包陷阱示例：即使count更新，這裡仍然是初始值
      // 嚴格模式幫助我們意識到這個問題
      console.log(
        `定時器: latestCount.current = ${latestCount.current}, count = ${count}`
      );
    }, 3000);

    // 嚴格模式會調用這個清理函數，測試它是否正確工作
    return () => {
      console.log("清理定時器");
      clearInterval(id);
    };
  }, []);

  console.log("--- 渲染中 ---");

  // 為了更清晰地展示閉包捕獲值的特性
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;
  console.log(`這是第 ${renderCountRef.current} 次渲染`);

  // 檢測是否在嚴格模式下
  const isStrictMode = renderCountRef.current === 2 && count === 0;

  return (
    <div>
      <h3>useRef 與 useState 對比示例</h3>
      <h3>useEffect 依賴數組示例 (第 {renderCountRef.current} 次渲染)</h3>
      {isStrictMode && (
        <div
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ffd700",
          }}
        >
          <h4
            style={{
              margin: "0 0 10px 0",
              color: "#d4500",
            }}
          >
            React 嚴格模式學習提示
          </h4>
          <p>這是 React 嚴格模式下的額外渲染。嚴格模式的幫助：</p>
          <ul>
            <li>發現不純的渲染邏輯和意外的副作用</li>
            <li>測試 Effect 清理函數是否正確</li>
            <li>幫助理解閉包陷阱問題</li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            嚴格模式僅在開發環境中生效，生產環境不會有多餘渲染
          </p>
        </div>
      )}
      <p>當前 count (useState): {count}</p>
      <p>latestCount.current (useRef): {latestCount.current}</p>
      <button
        onClick={() => {
          console.log("--- 按鈕點擊 ---");
          console.log("點擊前 count =", count);
          console.log("點擊前 latestCount.current =", latestCount.current);
          setCount((c) => c + 1);
          console.log("setCount 調用後 (尚未重新渲染)");
          console.log("--- 按鈕點擊結束 ---");
        }}
      >
        增加計數
      </button>
      <p>
        <small>請查看控制台日誌了解詳細流程</small>
      </p>
    </div>
  );
}
