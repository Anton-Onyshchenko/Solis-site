function playVideo() {
  const container = document.querySelector('.video__img__container');

  container.innerHTML = `
    <video width="870" height="539" controls autoplay>
      <source src="./assets/video/video.mp4" type="video/mp4">
      Ваш браузер не підтримує відео тег.
    </video>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const playIcon = document.querySelector('.video__icon');
  
  if (playIcon) {
    playIcon.addEventListener('click', (event) => {
      event.stopPropagation(); // Щоб клік не передавався на батьківський елемент
      playVideo();
    });
  }
});