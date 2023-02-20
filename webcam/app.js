const webcam = document.querySelector(".webcam")

// Media API (Webcam)
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
})
.then(source => {
    webcam.srcObject = source
    webcam.play()
})
.catch(error => console.log(error))


navigator.geolocation.getCurrentPosition((position, error) => {
    const { latitude, longitude } = position.coords
    console.log(latitude, longitude)
})

