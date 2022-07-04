import './styles.css';
import Note from "./components/Note"

import bvng from "./public/assets/bvng.mp3"
import crfo from "./public/assets/crfo.mp3"
import dtse from "./public/assets/dtse.mp3"
import edqt from "./public/assets/edqt.mp3"
import ldcc from "./public/assets/ldcc.mp3"
import peol from "./public/assets/peoi.mp3"
import tena from "./public/assets/tena.mp3"
import udgb from "./public/assets/udgb.mp3"


const notes = [
  ["C", "rgb(238 83 79)", bvng, "100%"],
  ["D", "rgb(254 167 38)", crfo, "85%"],
  ["E", "rgb(255 201 39)", dtse, "80%"],
  ["F", "rgb(102 187 106)", edqt, "75%"],
  ["G", "rgb(37 167 154)", ldcc, "70%"],
  ["A", "rgb(44 181 246)", peol, "65%"],
  ["B", "rgb(126 87 194)", tena, "60%"],
  ["C ", "rgb(238 83 79)", udgb, "55%"],
]

function Xylophone() {

  return <div className="container">
    <div className="xylophone">
      {notes.map(([letter, bgColor, file, height], index) => <Note letter={letter} number={index + 1} bgColor={bgColor} soundFile={file} height={height}/>)}
    </div>
  </div>
}

export default Xylophone;
