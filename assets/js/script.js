// global variable declaration start here
const counterNum = document.querySelectorAll(".counter-num"),
  counterSec = document.querySelector(".counetr-section"),
  speed = 200;
// global variable declaration end here
// function for counter num ber start here
function numCount() {
  counterNum.forEach((currentEle) => {
    function updateNum() {
      const targetNum = parseInt(currentEle.dataset.target),
        initialNum = parseInt(currentEle.innerText),
        increamentNum = Math.floor(targetNum / speed);
      if (initialNum < targetNum) {
        currentEle.innerText = initialNum + increamentNum + "+";
        setTimeout(updateNum, 10);
      }
    }
    updateNum();
  });
};
// function for counter number end here
// counter scroll observer start here
const numObserver = new IntersectionObserver((entries, observer) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  numCount();
  // stopping observer once section obseerver done
  observer.unobserve(counterSec);
},
  {
    root: null,
    threshold: 0,
  });
numObserver.observe(counterSec);
// counter scroll observer end here

