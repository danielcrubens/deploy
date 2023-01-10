const srt = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 1100,
    easing: "ease-out",
  });
  
  srt.reveal(".delaySmallReveal", { delay: 200 });
  srt.reveal(".delayMediumReveal", { delay: 300 });
  srt.reveal(".delayLargeReveal", { delay: 400 });
  srt.reveal(".delayExtraBigReveal", { delay: 600 });
  const srr= ScrollReveal({
      origin:"right",
      distance:"50px",
      duration:1100,
      easing: "ease-in",
  });
  srr.reveal(".delayLargeRevealRight",{delay:400});
