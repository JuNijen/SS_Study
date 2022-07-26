import React from 'react';

import './CCTV.css';

//CCTV 화면
function CCTVPage() {

  return (
    // 참고자료 : https://stackoverflow.com/questions/4024137/how-to-play-mpeg-avi-and-flv-file-on-html
    // 참고자료 : http://diveintohtml5.info/video.html
    <div className='cctv-box'>
        <p className='cctv-title'>CCTV</p>

        <div className='cctv-video-wrapper'>
            {/* <source src="pr6.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"/> */}
            <embed type="application/x-mplayer2" className="cctv-video-player" autoplay="true" autostart="true" loop="true" controls="true" allowFullscreen="false" src="https://youtu.be/9e-5QHpadi0"></embed>
        </div>
    </div> 

    // React.createElement('div', { className: 'cctv-box' },
    //     React.createElement('p', { className: 'cctv-title' }, 'CCTV'),
    //     React.createElement('div', { className: 'cctv-video-wrapper' },
    //         React.createElement('embed', { type: 'application/x-mplayer2', className: 'cctv-video-player', autoplay: 'true', autostart: 'true', loop: 'true', controls: 'true', allowFullscreen: 'false', src: 'https://youtu.be/9e-5QHpadi0' })
    //     )
    // )
  )
}

export default CCTVPage;