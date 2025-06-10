import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei';
import { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [text, setText] = useState('');

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>ブラウザが音声認識をサポートしていません。</span>;
  }

  const handleStartListening = () => {
    SpeechRecognition.startListening();
  };

  return (
    <div>
      <button onClick={handleStartListening}>Start Listening</button>
      <button onClick={resetTranscript}>Reset</button>
      <Canvas>
        <ambientLight />
        <Text position={[0, 0, 0]} fontSize={1}>
          {text}
        </Text>
      </Canvas>
    </div>
  )
}

export default App
