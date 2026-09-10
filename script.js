const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((element) => revealObserver.observe(element));

document.querySelector(".back-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("[data-wechat]").addEventListener("click", async (event) => {
  event.preventDefault();
  const wechat = event.currentTarget.dataset.wechat;

  try {
    await navigator.clipboard.writeText(wechat);
    const label = event.currentTarget.querySelector("strong");
    label.textContent = "微信号已复制：kipFun";
    window.setTimeout(() => (label.textContent = "联系微信 kipFun"), 2200);
  } catch {
    window.prompt("复制微信号，与我联系：", wechat);
  }
});
