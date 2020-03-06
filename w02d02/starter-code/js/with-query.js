$(() => {

  const $button = $('.choice');
  const $player1chose = $('.player1');
  const $player2chose = $('.player2');
  const $result = $('.result');
  const $reset = $('.reset');

//player1chose's choice
  $button.on('click', (e) => {
    const $choice = $(e.target).html();
    $player1chose.html($choice);
  });

//player2chose's choice (random)
  const random = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = random[randomNumber];
  $player2chose.text(computerChoice);

//reset button
  $reset.on('click', () => {
    $player1chose.text('');
    $player2chose.text('');
    $result.text('');
  });

// need to change player1chose
  // $player1chose.on('click', (e) => {
  //   const $ = $(e.target).html();
  //   $result.html();
  // });

  if ($player1chose === 'rock' && computerChoice === 'paper') {
    $result.text('loser');
  }
  // if ($player1chose === 'rock' && computerChoice === 'paper') {
  //   $result.text('loser');
  // };
  // if ($player1chose === 'rock' && computerChoice === 'paper') {
  //   $result.text('loser');
  // };
  // if ($player1chose === 'rock' && computerChoice === 'paper') {
  //   $result.text('loser');
  // };

  // for(let i = 0; i < choice.length; i++) {
  //   names[i].addEventListener('mouseover', (event) => {
  //     const currentName = event.target.innerHTML;
  //     current.innerHTML = currentName;
  //
  // $player1chose.on('click', (e) => {
  //   const $button = $(e.target).html();
  //   $result.html();
  // });
});
