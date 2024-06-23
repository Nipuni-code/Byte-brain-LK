const body = document.querySelector('body'),
  sidebar = body.querySelector('.sidebar'),
  toggle = body.querySelector('.toggle'),
  searchBtn = body.querySelector('.search-box'),
  modeSwitch = body.querySelector('.toggle-switch'),
  modeText = body.querySelector('.mode-text'),
  menuSizer = body.querySelector('.menu-sizer');


toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});

menuSizer.onclick = function () {
  sidebar.classList.toggle('open');
  menuSizer.classList.remove('hide');
}

searchBtn.addEventListener('click', () => {
  sidebar.classList.remove('close');
});


if (localStorage.getItem('nightMode') === 'true') {
  body.classList.add('dark');
}

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    modeText.innerText = 'Light Mode';
  } else {
    modeText.innerText = 'Dark Mode';
  };
  
  // Save user's preference in local storage
  localStorage.setItem('nightMode', body.classList.contains('dark'));
});
