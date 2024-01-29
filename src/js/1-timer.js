import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      const startButton = document.querySelector('[data-start]');
      startButton.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  },
};

let countdownInterval;

function startCountdown() {
  const endDate = flatpickr.parseDate(
    document.getElementById('datetime-picker').value
  );
  const startButton = document.querySelector('[data-start]');
  startButton.disabled = true;

  countdownInterval = setInterval(() => {
    const currentDate = new Date();
    const timeDifference = endDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      iziToast.success({
        title: 'Success',
        message: 'Countdown timer reached zero',
      });
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      updateTimer({ days, hours, minutes, seconds });
    }
  }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent =
    addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent =
    addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

document.addEventListener('DOMContentLoaded', () => {
  flatpickr('#datetime-picker', options);

  document
    .querySelector('[data-start]')
    .addEventListener('click', startCountdown);
});
