import React from 'react';
import Lightfall from './Lightfall';

const Testing = () => (
  <div style={{ width: '100%', height: '600px', position: 'relative' }}>
    <Lightfall
      colors={['#ffffff', '#aaaaaa', '#555555']}
      backgroundColor="#000000"
      speed={0.6}
      streakCount={6}
      streakWidth={1}
      streakLength={1.2}
      glow={1.2}
      density={0.8}
      twinkle={0.8}
      zoom={2.5}
      backgroundGlow={0.4}
      opacity={1}
      mouseInteraction
      mouseStrength={0.6}
      mouseRadius={0.8}
    />
  </div>
);

export default Testing;
