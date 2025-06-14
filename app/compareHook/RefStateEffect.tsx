import { useRef, useEffect, useState } from "react";

export function RefStateEffect() {
  // 添加一個計數器用於標記每次的函數執行
  // const executionId = Math.random().toString(36).substring(2, 8);
  const executionId = useRef(
    Math.random().toString(36).substring(2, 8)
  ).current;

  console.log(`--- RefState 組件函數執行開始 (執行ID: ${executionId}) ---`);

  // useState 在每次渲染時都會返回最新的狀態值
  // 初次渲染返回初始值 0，之後返回更新後的值
  const [count, setCount] = useState(0);
  console.log(`[執行ID: ${executionId}] useState 返回的 count:`, count);

  // useRef 在首次渲染時創建對象，之後渲染時返回同一個對象
  // 初始值為首次渲染時的 count 值 (0)
  const latestCount = useRef(count);
  console.log(
    `[執行ID: ${executionId}] 渲染階段中的 latestCount.current:`,
    latestCount.current
  );

  // 為了更清晰地展示閉包捕獲值的特性
  const renderCountRef = useRef(0);
  console.log(
    `[執行ID: ${executionId}] 函數執行階段 renderCountRef.current:`,
    renderCountRef.current
  );

  // 無依賴數組: 每次渲染後都執行
  // 所以 latestCount.current 會在每次渲染後更新為最新的 count
  useEffect(() => {
    console.log(`--- 渲染後的 Effect 執行 (對應執行ID: ${executionId}) ---`);
    console.log(
      `[Effect ${executionId}] 更新前 latestCount.current =`,
      latestCount.current
    );
    console.log(
      `[Effect ${executionId}] 【無依賴數組】每次渲染後都執行，當前 count =`,
      count
    );

    // 更新 ref 值為當前最新的 count
    latestCount.current = count;

    console.log(
      `[Effect ${executionId}] 更新後 latestCount.current =`,
      latestCount.current
    );
    console.log(`--- Effect 結束 (對應執行ID: ${executionId}) ---`);
  });

  // 使用 useEffect 來追蹤實際完成的渲染次數
  useEffect(() => {
    console.log(
      `[Effect ${executionId}] 更新前 renderCountRef.current =`,
      renderCountRef.current
    );
    renderCountRef.current += 1;
    console.log(
      `[Effect ${executionId}] 更新後 renderCountRef.current =`,
      renderCountRef.current
    );
    console.log(
      `[Effect ${executionId}] 完成第 ${renderCountRef.current} 次真實渲染`
    );
  });

  console.log(
    `[執行ID: ${executionId}] 當前渲染過程中，渲染計數為: ${renderCountRef.current}`
  );

  return (
    <div>
      <h3>useRef 與 useState 對比示例</h3>
      <h3>useEffect 依賴數組示例 (第 {renderCountRef.current} 次渲染)</h3>
      <p>
        <small>
          渲染原因:{" "}
          {count === 0
            ? "初始渲染"
            : `由 setCount(${count - 1} → ${count}) 觸發的渲染`}
        </small>
      </p>
      {/* <p>
        <small>執行ID: {executionId}</small>
      </p> */}
      <p style={{ color: "skyblue" }}>
        <small>提示: React 開發模式下，每次狀態更新會觸發額外的渲染檢查</small>
      </p>
      <p>當前 count (useState): {count}</p>
      <p>latestCount.current (useRef): {latestCount.current}</p>
      <button
        onClick={() => {
          const clickId = Math.random().toString(36).substring(2, 8);
          console.log(`--- 按鈕點擊 (點擊ID: ${clickId}) ---`);
          console.log(`[點擊ID: ${clickId}] 點擊前 count =`, count);
          console.log(
            `[點擊ID: ${clickId}] 點擊前 latestCount.current =`,
            latestCount.current
          );
          console.log(
            `[點擊ID: ${clickId}] 點擊前 renderCountRef.current =`,
            renderCountRef.current
          );
          setCount((c) => c + 1);
          console.log(`[點擊ID: ${clickId}] setCount 調用後 (尚未重新渲染)`);
          console.log(
            `[點擊ID: ${clickId}] 調用後 renderCountRef.current 仍然是 =`,
            renderCountRef.current
          );
          console.log(`--- 按鈕點擊結束 (點擊ID: ${clickId}) ---`);
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
