import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { Controlled as CodeMirror } from "react-codemirror2"
import "./index.scss"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
const ClearTextFormat = () => {
  const InitTextGraphqlType =
    "_id: Int!\nfirstName: String\nlastName: String\nbirthDay: Float\nposts: [Post]"
  const [BodyText, setBodyText] = useState(InitTextGraphqlType)
  const [ClearText, setClearText] = useState("")
  const [option, setOption] = useState("response-graphql")
  useEffect(() => {
    handleGraphqlType()
  }, [BodyText, option])
  const handleGraphqlType = () => {
    switch (option) {
      case "response-graphql":
        var arrLineText = BodyText.split(/\r?\n/)
        var clearText = ""
        arrLineText.map((text, index) => {
          if (index === arrLineText.length - 1) {
            clearText += `${text.split(":")[0]}`
          } else {
            clearText += `${text.split(":")[0]}\n`
          }
        })
        setClearText(clearText)
        break
      case "input-object":
        var arrLineText = BodyText.split(/\r?\n/)
        var clearText = ""
        arrLineText.map((text, index) => {
          if (index === arrLineText.length - 1) {
            clearText += `${text.split(":")[0]}`
          } else {
            clearText += `${text.split(":")[0]},\n`
          }
        })
        setClearText(clearText)
        break
      case "list-string-to-typedef":
        var arrLineText = BodyText.replaceAll('\"', '').split(',')
        var clearText = ""
        arrLineText.map((text, index) => {
          if (index === arrLineText.length - 1) {
            clearText += `${text}: String`
          } else {
            clearText += `${text}: String\n`
          }
        })
        setClearText(clearText)
        break
      case "list-string-to-schema":
        var arrLineText = BodyText.replaceAll('\"', '').split(',')
        var clearText = ""
        arrLineText.map((text, index) => {
          if (index === arrLineText.length - 1) {
            clearText += `@Prop()\n${text}: String\n`
          } else {
            clearText += `@Prop()\n${text}: String\n\n`
          }
        })
        setClearText(clearText)
        break
      default:
        setClearText(null)
        break
    }
  }
  return (
    <>
      <Helmet title="Nguyễn Hữu Nghĩa | Clear Text Format App" defer={false} />
      <div className="clear-text-format-main">
        <div className="navbar">
          <div className="title">Clear Text Format</div>
          <div className="option-format">
            <select
              onChange={e => {
                setOption(e.target.value)
                if(["list-string-to-typedef","list-string-to-schema"].includes(e.target.value)) {
                  setBodyText('STKEY,"SURNAME","FIRST_NAME","SECOND_NAME","PREF_NAME","TITLE","FAMILY","ACADEMIC_A","LIVING_A","RELATION_A01","RELATION_A02","CONTACT_A","FAMB","ACADEMIC_B","LIVING_B","RELATION_B01","RELATION_B02","CONTACT_B","FAMC","ACADEMIC_C","LIVING_C","RELATION_C01","RELATION_C02","CONTACT_C","LIVING_ARR","DIST_SCHL","TRANSPORT","CAR_REGO","E_MAIL","MOBILE","MAP_TYPE","MAP_NUM","X_AXIS","Y_AXIS","REGISTRATION","FIRST_REG_NO","GENDER","BIRTHDATE","PROOF_DOB","RESIDENT_STATUS","PERMANENT_BASIS","ENTRY","EXIT_DATE","ARRIVAL","AUSSIE_SCHOOL","INTEGRATION","DATELEFT","EXPIRY_DATE","ID_CARD_VALID","PREVIOUS_SCHOOL","FAM_ORDER","NOTES","SGB_FUNDED","ED_ALLOW","EMA_AMT1P","EMA_AMT2P","CASES_EMA_ID","STATUS","TAG","ENROLMENT_YEAR","ADV_SCHL_YR","HOME_GROUP","NEXT_HG","SCHOOL_YEAR","HOUSE","CAMPUS","LOCKER_NUM","RELIGION","REL_INSTR","VCE_ID","VISA_SUBCLASS","VISA_STAT_CODE","VISA_EXPIRY","REPEAT","BIRTH_COUNTRY","ENG_SPEAK","HOME_LANG","OVERSEAS","KOORIE","YOUTH_ALLOW","AB_STUDY","ACCESS","ACCESS_TYPE","ACCESS_ALERT","RISK_ALERT","RISK_MEMO","DOCTOR","EMERG_NAME01","EMERG_NAME02","EMERG_LANG01","EMERG_LANG02","EMERG_RELATION01","EMERG_RELATION02","EMERG_CONTACT01","EMERG_CONTACT02","EMERG_CONTACT_MEMO01","EMERG_CONTACT_MEMO02","ACC_DECLARATION","AMBULANCE_SUBSCRIBER","MEDICARE_NO","INTERNATIONAL_ST_ID","DISABILITY","DISABILITY_ID","PSDREQ","HEARING_IMPAIR","VISUAL_IMPAIR","SPEECH_IMPAIR","PHYSICAL_IMPAIR","MEDICAL_ALERT","MEDICAL_CONDITION","ACTIVITY_RESTRICTION","IMMUNISE_CERT_STATUS","IMMUN_CERT_SIGHTED","IMMUNISE_PERMISSION","IMMUNIZE","DISABILITY_ADJUSTMENT_ASSESSED","DISABILITY_ADJUSTMENT","DISABILITY_TYPE","DISABILITY_ADJUSTMENT_LEVEL","DISABILITY_ADJUSTMENT_LW_DATE","HEAD_LICE_CHECK","ANNUAL_TOT","STUDENT_PIC","PUBLISH_PHOTO_MEDIA","OK_TO_PUBLISH","PIC_LW_DATE","PIC_STATUS","LIBRARY_FLAG","REGISTRAR_FLAG","CLEAR1_FLAG","CLEAR2_FLAG","CLEAR3_FLAG","CLEAR4_FLAG","CLEAR5_FLAG","CLEAR6_FLAG","AR_STATUS","YEARS_PREVIOUS_EDUCATION","YEARS_INTERRUPTION_EDUCATION","LANGUAGE_PREVIOUS_SCHOOLING","NEXT_SCHOOL","EXIT_CAT01","EXIT_CAT02","EXIT_DEST01","EXIT_DEST02","EXIT_MODIFY_DATE01","EXIT_MODIFY_DATE02","FULLTIME","SGB_TIME_FRACTION","ACTUAL_TIME_FRACTION","DEST_ARRIVAL_DATE","DEPARTURE_DATE","ARRIVED_DESTINATION","NOTIFIED_DESTINATION","VCE_NOTIFIED","EXIT_FORM","TRANSFER_FORM","PARENTAL_APPROVAL_DATE","PARENTAL_APPROVAL_NOTE","DISASTER_EXIT_REASON","ATTENDANCE_MEMO","ABS_HDAY_PERIOD","STRE_FLAG","PROMOTED","INAC_ABS_CODE","LOTE_HOME_CODE","VSN","SPEC_CURR","TRANSITION_STATEMENT","TFR_PERMISSION","LEGAL_LIMIT_DECISION","LEGAL_LIMIT_CONTACT","LEGAL_LIMITATION","DOC_COPIES","LISTED_IN_SOCS","SUPPORT_SERVICES","STUDENT_SUPPORT","STUDENT_OTHER_SUPPORT","SUPPORT_GROUP","CHILD_PROTECTION","ATTENDANCE_CONCERNS","DISCIPLINARY_ACTION","WELFARE_RISKS","EFFORT","CLASS_BEHAVIOUR","ORGANISATION","SOCIAL_BEHAVIOUR","LEARNING_SUPPORT","NEW_ARRIVALS_PROGRAM","REFUGEE_BACKGROUND","TRANSFER_DOCS_SENT","VET","USI","SCH_DEFINED01","SCH_DEFINED02","TEACHER_RECOMMENDATION","CRIS_ID","YOUNG_CARER","GENDER_DESC","DET_TUTOR","DET_TUTORNUM","MYLNS_LITERACY","MYLNS_NUMERACY","KLNP_LITERACY","KLNP_NUMERACY","STUDENT_SI_ID","ENROLMENT_SI_ID","APPLICATION_SI_ID","LW_DATE","LW_TIME","LW_USER"')
                }
              }}
              value={option}
            >
              <option value="response-graphql">response-graphql</option>
              <option value="input-object">input-object</option>
              <option value="list-string-to-typedef">list-string-to-typedef</option>
              <option value="list-string-to-schema">list-string-to-schema</option>
            </select>
          </div>
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
