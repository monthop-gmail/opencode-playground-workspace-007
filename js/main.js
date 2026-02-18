document.addEventListener('DOMContentLoaded', () => {
  console.log('Workshop is ready! 🎉');
  
  const container = document.querySelector('.container');
  if (container) {
    container.addEventListener('click', () => {
      alert('Hello from OpenCode + LINE!');
    });
  }
});
