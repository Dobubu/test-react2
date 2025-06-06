import { useState, useEffect } from "react";

import { ClearEffect } from "./clearEffect";
import { ModalDialog } from "./modalDialog";
import { useFetchData } from "./useFetchData";

export function Effect() {
  console.log("Effect component rendered");

  const { data, loading } = useFetchData({
    apiUrl: "https://reqres.in/api/users?page=2",
  });

  useEffect(() => {
    if (data && !loading) {
      console.log("data: ", data);
    }
  }, [data, loading]);

  const [show, setShow] = useState(true);

  const [showDialog, setShowDialog] = useState(false);

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
      <button onClick={() => setShowDialog(true)}>Open dialog</button>
      <ModalDialog isOpen={showDialog}>
        Hello there!
        <br />
        <button
          onClick={() => {
            setShowDialog(false);
          }}
        >
          Close
        </button>
      </ModalDialog>
    </main>
  );
}
