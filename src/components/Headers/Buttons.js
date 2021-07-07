import React from 'react'

import FR from 'assets/img/flags/FR.png'  
import ES from 'assets/img/flags/ES.png'

const Buttons = () =>
  <div className='buttons'>
    <a href='https://github.com/u2ix/react-background-slider' className='github'>
      <img src={FR} alt='github' /> Github
    </a>
    <a href='https://www.npmjs.com/package/react-background-slider' className='npm'>
      <img src={ES} alt='npm' /> npmjs
    </a>
  </div>

export default Buttons;