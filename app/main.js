'use strict';

const SHARE_BUTTON = document.getElementById('share-btn');
const SHARE_BLATFORM = document.getElementById('share-platform');
const publisher = document.getElementById('publisher');
console.log(SHARE_BLATFORM);

SHARE_BUTTON.addEventListener('click', () => {
  SHARE_BLATFORM.classList.toggle('hide');
  console.log("clikced")
});
