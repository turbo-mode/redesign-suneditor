import React, { useRef } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";

import "suneditor/dist/css/suneditor.min.css";
import icons from "./assets/icons";

function App() {
  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  console.log(buttonList);
  const showController = (name, controllers) => {
    console.log(name, controllers);
  };

  return (
    <div>
      <p> My Other Contents </p>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        showController={showController}
        setOptions={{
          height: "200px",
          buttonList: buttonList.complex,
          // @ts-ignore
          icons: icons,
        }}
      />
    </div>
  );
}

export default App;
