import './App.css';
import ReactAudioPlayer from "react-audio-player";
import belAudio from './AUDIO-bel.mp3' ;
import kleurenAudio from './AUDIO-kleuren.mp3' ;
import madrasAudio from './AUDIO-madras.mp3' ;
import pronkenAudio from './AUDIO-pronken.mp3' ;
import verankerenAudio from './AUDIO-verankeren.mp3' ;
import vooroudersAudio from './AUDIO-voorouders.mp3' ;


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h2 className="titel1">Bel</h2>
          <ReactAudioPlayer
              className={"audio-player"}
              src={belAudio}
              autoPlay={false}
              controls
              controlsList="nodownload"
          />
          <h2 className="titels">Pronken</h2>
          <ReactAudioPlayer
              className={"audio-player"}
              src={pronkenAudio}
              autoPlay={false}
              controls
              controlsList="nodownload"
          />
          <h2 className="titels">Kleuren</h2>
          <ReactAudioPlayer
              className={"audio-player"}
              src={kleurenAudio}
              controls
              controlsList="nodownload"
          />
          <h2 className="titels">Madras</h2>
          <ReactAudioPlayer
              className={"audio-player"}
              src={madrasAudio}
              controls
              controlsList="nodownload"
          />
          <h2 className="titels">Verankeren</h2>
          <ReactAudioPlayer
              className={"audio-player"}
              src={verankerenAudio}
              controls
              controlsList="nodownload"
          />
          <h2 className="titels">Voorouders</h2>
          <ReactAudioPlayer
              className={"audio-player"}
              src={vooroudersAudio}
              controls
              controlsList="nodownload"
          />
      </header>
    </div>
  );
}

export default App;
