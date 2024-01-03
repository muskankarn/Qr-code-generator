import React, { useState } from "react";
import QRCode from "react-qr-code";
import styles from "../styles/index.module.css";

const index = () => {
  const [text, setText] = useState("");
  const [isQrVisible, setIsQrVisible] = useState(false);

  function saveTxt(e) {
    setIsQrVisible(false);
    setText(e);
  }

  function resetQr(e) {
    setIsQrVisible(false);
    setText("");
  }
  return (
    <>
      <div>
        <h1 className="font-bold text-5xl text-center py-5 text-white">
          Qr code generator
        </h1>

        <div className="h-20 flex items-center justify-center mt-10 mb-5">
          <input
            className="pl-5 pr-5 py-1 rounded select-none ring-1 ring-inset ring-gray-300"
            type="text"
            placeholder="Enter your text"
            value={text}
            onChange={(e) => saveTxt(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="h-2 flex items-center justify-center mt-5">
        <button
          className="bg-white text-black font-medium px-3 py-1 rounded-xl mr-5"
          onClick={() => setIsQrVisible(true)}
        >
          Generate Qr
        </button>
        <button
          className="bg-white text-black font-medium px-3 py-1 rounded-xl"
          onClick={() => resetQr()}
        >
          Reset
        </button>
      </div>

      <div className="mt-7 flex justify-center">
      {isQrVisible && (
        <QRCode
          className="bg-white"
          value={text}
          style={{
            border: "2px solid #bebebe",
            padding: 15,
            marginTop: 10,
            borderRadius: 7,
          }}
        />
      )}
      </div>
    </>
  );
};

export default index;
