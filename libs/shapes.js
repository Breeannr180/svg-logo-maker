const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
              <rect width="100%" height="100%" fill="${shapeColor}"/>
              <circle class="circle" cx="50%" cy="50%" r="40%" fill="white"/>
              <rect class="square" x="30%" y="30%" width="40%" height="40%" fill="white"/>
              <polygon class="triangle" points="50% 30%, 70% 70%, 30% 70%" fill="white"/>
              <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>
            </svg>`;
