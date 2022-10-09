import React from 'react';
import * as S from './style';
import Wave from 'react-wavify'

export default function index() {
  return (
    <S.Footer>
      <section>
        <Wave 
        style={{height: '80vh'}}
          fill='#0D0F36'
          paused={false}
          options={{
            amplitude: 50,
            speed: 0.20,
            points: 4
          }}
        />
      </section>
    </S.Footer>
  )
}
