$(() => {

  // const $timer = $('timer');
  // const $display = $timer.find('.display');

  // function padNum(num) {
  //   return num < 10 ? `0${num}` : num;
  // }
  //
  // function currentTime() {
  //   // return the current time in the correct format (HH:MM:SS)
  //   const now = new Date();
  //   const secs = padNum(now.getSeconds());
  //
  //   return `${secs}`;
  // }
  //
  // function startClock() {
  //   // display the current time on the clock screen
  //   // update the current time every second
  //   $display.text(currentTime());
  //   setInterval(() => {
  //     $display.text(currentTime());
  //   }, 1000);
  // }
  //
  // startClock();

  // this correct, i think.
  const $timer = $('.timer');
  // this correct, i think.
  const $timerScreen = $('.timer');
  // this correct, i think.
  const $startStopBtn = $('#startBtn');
  // const $form = $('#subscribe');
  const $button = $('.submit');
  // submit button
  const $submit = $('.submit');
  // input box
  const $input = $('input');
  // feedback variable
  // const $result = $('.feedback');
  const $display = $('.display');

  let timeRemaining = 10;
  let timerId = null;

  function startStopTimer() {
    // $scoreDisp.text(0);
    // show button input
    showInput();
      // starts the timer
    timerId = setInterval(() => {
      timeRemaining--;
      $timerScreen.text(timeRemaining);
      console.log('Set Interval Working!');
      // stops the timer
      if(timeRemaining === 0) {
        clearInterval(timerId);
        $display.html('Stop');
        $button.html('Play Again');
        // $timer.addClass('ringing');
        console.log('Clear Interval Working!');
      }
    }, 1000);
    // timerIsRunning = true;
  }
  // runs the GO! button
  $startStopBtn.on('click', startStopTimer);

  // let $correctAns = 0;
  // const operator = ['+', '-', '*', '/'];
  // const $display = $('.display');
  //
  // function sumUp() {
  //   const randomOp = operator[Math.floor(Math.random()*operator.length)];
  //
  //   const $num1 = Math.ceil(Math.random()*10);
  //   const $num2 = Math.ceil(Math.random()*10);
  //
  //   $display.html($num1 + ' ' + randomOp + ' ' + $num2);
  //
  //   if (randomOp === '+') {
  //     $correctAns = $num1+$num2;
  //   } else if (randomOp === '-') {
  //     $correctAns = $num1-$num2;
  //   } else if (randomOp === '*') {
  //     $correctAns = $num1*$num2;
  //   } else if (randomOp === '/') {
  //     $correctAns = $num1/$num2;
  //   }
  // }

  // hides input box
  function hideInput() {
    $input.hide();
  }
  hideInput();

  // shows input box
  function showInput() {
    $input.show();
  }

  // const $scoreDisp = $('.score');
  //
  // function scoreDisp() {
  //
  // }

// function for submit button
  $button.on('click', () => {
    // e.preventDefault;
    $submit.html('Submit'); // can change submitted to an empty string after the button functions.
    // $submit.classList.add('submitted');
    console.log('Submitted!');
  });
});
// $(setup);
