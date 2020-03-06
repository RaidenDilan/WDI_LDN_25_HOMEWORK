$(() => {
  const students = [
    'Alice',
    'Adrian',
    'Arrianne',
    'Ben',
    'Buki',
    'Connor',
    'Fabricio',
    'Giacomo',
    'Gianmaria',
    'Gurvinder',
    'Hannah',
    'Huw',
    'Jake',
    'Krisz',
    'Mark D',
    'Mark S',
    'Muge',
    'Olivia',
    'Omar',
    'Raiden',
    'Roman',
    'Sam D',
    'Sam W',
    'Sarah',
    'Tom',
    'Valerio'
  ];
  const $display = $('.display');
  const $select = $('button');

  $display.html('Get ready!');

  function getStudents() {
    const chosen = Math.floor(Math.random() * students.length);
    const randomStudent = students[chosen];
    students.splice(chosen, 1);

    if (randomStudent === undefined || null || students.length === 0) {
      $select.attr('disabled','disabled').html('Button disabled');
      $display.html('No more students!');
    }
    else if (randomStudent !== null || undefined) $display.html(randomStudent);
  }

  $select.on('click', getStudents);
});
