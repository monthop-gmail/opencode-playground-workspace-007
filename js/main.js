const blessings = [
  '🎊 ขอให้โชคดีตลอดปี! 🎊',
  '💰 ร่ำรวยเงินทอง 💰',
  '🐍 ปีงูให้ราบรื่น 🐍',
  '🎯 สมหวังทุกประการ 🎯',
  '🌟 มีความสุขมากๆ 🌟',
  '🏆 ประสบความสำเร็จ 🏆'
];

function showBlessing() {
  const blessing = document.getElementById('blessing');
  const random = blessings[Math.floor(Math.random() * blessings.length)];
  
  blessing.querySelector('p').textContent = random;
  blessing.classList.add('show');
  
  // Confetti effect
  createConfetti();
}

function createConfetti() {
  const colors = ['#ffd700', '#ff4444', '#ffaa00', '#ffffff'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -10px;
      border-radius: 50%;
      animation: fall ${Math.random() * 3 + 2}s linear forwards;
    `;
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Add falling animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Auto hide blessing after 5 seconds
document.querySelector('.btn').addEventListener('click', () => {
  setTimeout(() => {
    document.getElementById('blessing').classList.remove('show');
  }, 5000);
});
