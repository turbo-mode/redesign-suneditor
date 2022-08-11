import React, { useRef } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "./styles/_suneditor.scss";

import icons from "./assets/icons";

function App() {
  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  return (
    <div className="editor">
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        setOptions={{
          // colorList: ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00"],
          // _printClass: "print-class",
          charCounter: true,
          charCounterType: "char",
          charCounterLabel: "Characters",
          maxCharCount: 1000,
          height: "200px",
          mode: "classic",
          rtl: false,
          imageGalleryUrl:
            "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
          tabDisable: false,
          buttonList: [
            ["undo", "redo"],
            ["fontSize", "formatBlock"],
            [
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
              "removeFormat",
            ],
            [
              "outdent",
              "indent",
              "align",
              "horizontalRule",
              "list",
              "lineHeight",
            ],
            [
              "table",
              "link",
              "image",
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
