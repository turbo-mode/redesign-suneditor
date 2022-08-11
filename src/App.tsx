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

  return (
    <div>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        setOptions={{
          height: "200px",
          mode: "classic",
          rtl: false,
          katex: "window.katex",
          imageGalleryUrl:
            "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
          videoFileInput: false,
          tabDisable: false,
          buttonList: [
            [
              "undo",
              "redo",
              "font",
              "fontSize",
              "formatBlock",
              "paragraphStyle",
              "blockquote",
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
              "fontColor",
              "hiliteColor",
              // "textStyle",
              "removeFormat",
              "outdent",
              "indent",
              "align",
              "horizontalRule",
              "list",
              "lineHeight",
              "table",
              "link",
              "image",
              // "video",
              // "audio",
              // "math",
              "imageGallery",
              "fullScreen",
              "showBlocks",
              "codeView",
              "preview",
              "print",
              "save",
              // "template",
            ],
          ],
          // @ts-ignore
          icons: icons,
        }}
      />
    </div>
  );
}

export default App;
