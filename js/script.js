let size = 200;
window.addEventListener("load", () => {
  const mask = document.querySelector(".mask");
  const container = document.querySelector(".container");
  const body = document.querySelector("body");
  let x = 0;
  let y = 0;

  window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    x = clientX;
    y = clientY;
    mask.style.clipPath = `circle(${size}px at ${x}px ${y}px)`;
  });

  window.addEventListener("scroll", (e) => {
    console.log("SCROLL");
    const bodyHeight = body.clientHeight;
    const { scrollY } = window;
    const scale = ((scrollY / bodyHeight) * 90) / 100;
    size = scale * 200;
    console.log(size);
    mask.style.clipPath = `circle(${size}px at ${x}px ${y}px)`;
  });
});
