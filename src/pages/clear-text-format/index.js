import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { Controlled as CodeMirror } from "react-codemirror2"
import "./index.scss"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
const ClearTextFormat = () => {
  const InitTextGraphqlType =
    "_id: Int!\nfirstName: String\nlastName: String\nbirthDay: Float\nposts: [Post]\n"
  const [BodyText, setBodyText] = useState(InitTextGraphqlType)
  const [ClearText, setClearText] = useState("")
  useEffect(() => {
    handleGraphqlType()
  }, [BodyText])
  const handleGraphqlType = () => {
    const arrLineText = BodyText.split(/\r?\n/)
    let clearText = ""
    arrLineText.map((text, index) => {
      if (index === arrLineText.length - 1) {
        clearText += `${text.split(":")[0]}`
      } else {
        clearText += `${text.split(":")[0]}\n`
      }
    })
    setClearText(clearText)
  }
  return (
    <>
      <Helmet title="Nguyễn Hữu Nghĩa | Clear Text Format App" defer={false} />
      <div className="clear-text-format-main">
        <div className="navbar">
          <div className="title">Clear Text Format</div>
        </div>
        <div className="workspace">
          <div className="editor">
            <CodeMirror
              value={BodyText}
              options={{
                theme: "material",
                lineNumbers: true,
              }}
              onBeforeChange={(editor, data, value) => {
                setBodyText(value)
              }}
            />
          </div>
          <div className="preview">
            <CodeMirror
              value={ClearText}
              options={{
                theme: "3024-day",
                // lineNumbers: true,
                readOnly: true,
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ClearTextFormat
