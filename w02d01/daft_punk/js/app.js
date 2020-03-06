window.addEventListener('DOMContentLoaded', () => {

  const button = document.getElementsByTagName('button');

  const audio = document.getElementsByTagName('audio');

  for (let i=0; i<button.length; i++) {
    button[i].addEventListener('click', () => {
      audio[i].play();
    });
  }


});

  // makeit.addEventListener('click', (e) => {
  //   makeitwav.play();
  // });
  //
  // doit.addEventListener('click', (e) => {
  //   doitwav.play();
  // });
  //
  // makesus.addEventListener('click', (e) => {
  //   makesuswav.play();
  // });
  //
  // harder.addEventListener('click', (e) => {
  //   harderwav.play();
  // });
  //
  // better.addEventListener('click', (e) => {
  //   betterwav.play();
  // });
  //
  // faster.addEventListener('click', (e) => {
  //   fasterwav.play();
  // });
  //
  // stronger.addEventListener('click', (e) => {
  //   strongerwav.play();
  // });
  //
  // morethan.addEventListener('click', (e) => {
  //   morethanwav.play();
  // });
  //
  // hour.addEventListener('click', (e) => {
  //   hourwav.play();
  // });
  //
  // our.addEventListener('click', (e) => {
  //   ourwav.play();
  // });
  //
  // never.addEventListener('click', (e) => {
  //   neverwav.play();
  // });
  //
  // ever.addEventListener('click', (e) => {
  //   everwav.play();
  // });
  //
  // after.addEventListener('click', (e) => {
  //   afterwav.play();
  // });
  //
  // workis.addEventListener('click', (e) => {
  //   workiswav.play();
  //   });
  //
  // over.addEventListener('click', (e) => {
  //   overwav.play();
  // });
