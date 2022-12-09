import React from "react";

export default function ComponentSelectionButton(buttonComponentName,buttonLabel) {
  return (
    <button
      key={buttonLabel}
      className={["component__links__link"].join(" ")}
      onClick={() => setComponentName(buttonComponentName)}>
      {buttonLabel}
    </button>
  );
}
