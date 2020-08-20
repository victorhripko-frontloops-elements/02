import './style.scss';

(() => {

  const INPUT = document.querySelector('.app__input');
  const BUTTON = document.querySelector('.app__button');
  const TAB_BUTTONS = document.querySelectorAll('.app__tab-btn');
  const TAB_CONTENTS = document.querySelectorAll('.app__content');

  TAB_BUTTONS.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();

      changeTab(btn.dataset.index);
    });
  });

  INPUT.onkeypress = (e) => {
    if (e.keyCode === 13) {
      checkInput(e.target.value);
    }
  };

  function changeTab(idx) {
    const currentTab = [...TAB_CONTENTS].find((el) => el.dataset.index === idx);
    const currentButton = [...TAB_BUTTONS].find((el) => el.dataset.index === idx);

    if (currentTab && currentButton) {
      TAB_CONTENTS.forEach((item) => item.classList.remove('app__content--active'));
      TAB_BUTTONS.forEach((item) => item.classList.remove('app__tab-btn--active'));

      currentTab.classList.add('app__content--active');
      currentButton.classList.add('app__tab-btn--active');
    } else {
      alert(`[${idx}] value is incorrect`);
    }
  };


  BUTTON.onclick = (evt) => {
    evt.preventDefault();
    checkInput(INPUT.value);
  };

  function checkInput(val) {
    const value = val.trim();

    if (!value) return;

    changeTab(value);
    INPUT.value = null;
  };

})();
