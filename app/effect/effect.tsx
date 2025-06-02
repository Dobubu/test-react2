import { useState, useEffect } from "react";

import { ClearEffect } from "./clearEffect";

export function Effect() {
  console.log("Effect component rendered");

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  const [show, setShow] = useState(true);

  return (
    <main className="flex items-center justify-center flex-col pt-16 pb-4 bg-blue-300">
      {Array.isArray(data) ? (
        <ul>
          {data.map((user: any) => (
            <li key={user.id}>
              {user.first_name} {user.last_name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <br />
      <div>
        <button onClick={() => setShow(!show)}>切換顯示</button>
        {show && <ClearEffect />}
      </div>
    </main>
  );
}
