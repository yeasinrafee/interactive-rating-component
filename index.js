const ratings = document.querySelectorAll('.number');
const btn = document.querySelector('.btn');
const main = document.querySelector('.rating');
const thankyou = document.querySelector('.thankyou');
const span = document.getElementById('rating');

ratings.forEach((e) => {
  e.addEventListener('click', () => {
    let rate = e.innerHTML;
    ratings.forEach((e) => {
      e.classList.contains('selected');
      e.classList.remove('selected');
    });
    e.classList.add('selected');

    btn.addEventListener('click', () => {
      main.style.display = 'none';
      thankyou.style.display = 'block';
      span.innerHTML = rate;
    });
  });
});
