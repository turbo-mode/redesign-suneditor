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

  const handleOnLoad = () => {
    const tabLink = document.querySelector('button[data-tab-link="url"]');
    const tabContentURL = document.querySelector("._se_tab_content_url");
    const dialogForms = document.querySelectorAll(".se-dialog-form");

    [tabLink, tabContentURL].forEach((el) => {
      if (el) el.remove();
    });

    if (dialogForms) dialogForms[1].remove();
  };

  return (
    <div className="editor">
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        onLoad={handleOnLoad}
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
