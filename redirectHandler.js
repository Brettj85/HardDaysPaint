function redirectMobileHandler() {
    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);
    if(width <= 640) {
      window.location = './mobile-index.html';
    }
    else if (width > 640) {
        window.location = './index.html';
    }
  }
  
  window.onload = redirectMobileHandler();
  window.onresize = () => redirectMobileHandler();