import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { RiCollapseDiagonal2Line } from "react-icons/ri";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = (props) => {
  const { language, displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);
  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button className="expand-collapsed-btn" onClick={() => setOpen((prevOpen) => !prevOpen)}>{open ? <RiCollapseDiagonal2Line /> : <RiExpandDiagonalLine /> }</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          autoCloseTags: true,
          theme: "material",
        }}
      />
    </div>
  );
};

export default Editor;
