
// const btn = document.querySelectorAll('.btn');
// const tabs = document.querySelectorAll('.tab');
// const green = document.querySelector('.green');
// const yellow=document.querySelector('.yellow');
// const red=document.querySelector('.red');

// btn[1].addEventListener('click', function () {
//     tabs[1].style.display = 'block';
//     tabs[0].style.display="none";
//     tabs[2].style.display = 'none';
//     green.style.color = "green";
    
// });
// btn[0].addEventListener('click', function () {
//     tabs[1].style.display = 'none';
//     tabs[0].style.display="block";
//     tabs[2].style.display = 'none';
//     red.style.color = "red";   
// });

// btn[2].addEventListener('click', function () {
//     tabs[2].style.display = 'block';
//     tabs[0].style.display="none";
//     tabs[1].style.display="none";
//     yellow.style.color = "yellow";
// });

const tabs = document.querySelectorAll('.tab');
const buttons = document.querySelectorAll('.btn');
const iconContainers = document.querySelectorAll('.icon-head');

// Define a function to handle button clicks
function handleButtonClick(event) {
  const button = event.target;
  const buttonIndex = Array.from(buttons).indexOf(button);

  // Hide all tabs
  tabs.forEach(tab => tab.style.display = 'none');

  // Show the corresponding tab
  tabs[buttonIndex].style.display = 'block';
  const color = button.dataset.color;

  // Change the color of the icon inside the icon container
  const iconContainer = iconContainers[buttonIndex];
  const icon = iconContainer.querySelector('i');
  if (icon) {
    icon.style.color = color;
  }
}

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});









