import useSound from 'use-sound';

function Note({ letter, number, bgColor, height, soundFile}) {
    console.log(soundFile)

    let [playSound] = useSound(soundFile)

    return <div className="note-container">
        <div className="note" style={{backgroundColor: bgColor, height: height}} onClick={playSound}>
            {letter}
        </div>
        <p> {number} </p>
    </div>
}

export default Note