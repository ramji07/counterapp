const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");;
const reset = document.querySelector("#reset");

const disvalue = document.querySelector("#disvalue");


decrease.addEventListener("click", () => {
   const value = Number(disvalue.innerText);
  if (value > 0) {
    disvalue.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});





increase.addEventListener("click", () => {
  const value = Number(disvalue.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    disvalue.innerText = value + 1;
  }
});

reset.addEventListener("click", () => {
  disvalue.innerText = 0;
})
