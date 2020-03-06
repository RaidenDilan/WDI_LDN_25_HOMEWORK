window.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');

  const button = document.getElementById('toggle');
  const circle = document.getElementsByClassName('circle')[0];

  button.addEventListener('click', () => {
    circle.classList.toggle('pulse');
    circle.classList.add('shade');
  });

  const select = document.querySelector('p');
  const donation = document.getElementById('donation');

  select.addEventListener('change', (event) => {
    const value = event.target.value;
    donation.innerHTML = value;
  });




});
