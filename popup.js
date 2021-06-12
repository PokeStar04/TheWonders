
let popupsBtn = document.querySelectorAll("[data-popup-ref]");
popupsBtn.forEach((btn) => {
  btn.addEventListener("click",activePopup);
    

  function activePopup() {
    let popupId = btn.getAttribute("data-popup-ref");
    let popup = document.querySelector(`[data-popup-id='${popupId}']`);
    var elt = document.querySelector("#blur");

    if (popup !== undefined && popup !== null) {
      let popupContent = popup.querySelector(".popup-content");
      let closeBtns = popup.querySelectorAll("[data-dismiss-popup]");

      
        console.log(elt.classList.contains("blur_off"))
        console.log(elt.classList.contains("blur_active"))
        console.log(elt.classList.add("blur_active"))

      closeBtns.forEach((btn) => {
        btn.addEventListener("click", onPopupClose);
      });
      // enleve la popup si on touche le background
      //popup.addEventListener("click", onPopupClose);

      popupContent.addEventListener("click", (ev) => {
        ev.stopPropagation();
      });

      popup.classList.add("active");
      setTimeout(() => {
        popupContent.classList.add("active");
      }, 1);

      function onPopupClose() {
        setTimeout(() => {
        popup.classList.remove("active");
        popupContent.classList.remove("active");
        elt.classList.remove("blur_active");
        
        }, 250);
        
      }
    }
  }
});

$(()=>{
  $('.btn-close').click(function(){
      $('.popup').removeClass('active')
      $('.popup-content').removeClass('active')
      $('.blur_active').removeClass('blur_active')
  })
  });