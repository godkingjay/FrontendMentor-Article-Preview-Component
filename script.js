const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', () => {
  shareBtn.classList.toggle('active-btn');
  const sharePopup = document.querySelector('.share-pop-up');
  sharePopup.classList.toggle('share-pop-up-show');
});