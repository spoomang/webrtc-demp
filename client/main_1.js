const qvgaConstraints = {
    audio: true,
    video: { width: 320, height: 240 },
  };

const vgaConstraints = {
    audio: true,
    video: { width: 640, height: 480 },
  };

const hdConstraints = {
    audio: true,
    video: { width: 1280, height: 960 },
  };
  

var vgaButton = document.querySelector("button#vga");
var qvgaButton = document.querySelector("button#qvga");
var hdButton = document.querySelector("button#hd");

qvgaButton.onclick = function(){getMedia(qvgaConstraints)};
vgaButton.onclick = function(){getMedia(vgaConstraints)};
hdButton.onclick = function(){getMedia(hdConstraints)};

function getMedia(constraints) {
    navigator.mediaDevices
    .getUserMedia(constraints)
    .then((mediaStream) => {
      const video = document.querySelector("video");
      video.srcObject = mediaStream;
      video.onloadedmetadata = () => {
        video.play();
      };
    })
    .catch((err) => {
      // always check for errors at the end.
      console.error(`${err.name}: ${err.message}`);
    });
}

