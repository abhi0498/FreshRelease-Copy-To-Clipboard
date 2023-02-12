import { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    let currentValue: any;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

function IndexPopup() {
  // const storage = new Storage({});

  useEffect(() => {
    document.querySelector("html").style.width = "500px";
    (async () => {
      // await storage.set("copyAssignee", false);
    })();
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"></link>
      <div
        style={{
          padding: 6
        }}>
        <h3> Extension to copy FreshRelease Tasks </h3>
        <p>
          {" "}
          Click on the{" "}
          <span style={{ fontSize: 16 }} className="material-symbols-outlined">
            content_copy
          </span>{" "}
          button to copy the tasks{" "}
        </p>

        <h3> Settings </h3>

        <input
          onChange={(e) => {
            // setCopyAssignee(e.target.checked)
          }}
          type="checkbox"
          id="copy"
          name="copy"
          value={"false"}
        />
        <label htmlFor="copy"> Include Assignee </label>
      </div>
    </>
  );
}

export default IndexPopup;
