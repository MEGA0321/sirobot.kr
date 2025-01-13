window.APP.init.filter = function() {
  const filtercategory = document.querySelector(".categorys");
  const filterImg = document.querySelectorAll(".commands .command");
  
  if (!filtercategory) return;

  filtercategory.onclick = (selectedcategory) => {
      if (selectedcategory.target.classList.contains("category")) {
          filtercategory.querySelector(".active").classList.remove("active");
          selectedcategory.target.classList.add("active");
          let filterName = selectedcategory.target.getAttribute("data-name");
          filterImg.forEach((command) => {
              let filterImges = command.getAttribute("data-name");
              if (filterImges == filterName || filterName == "all") {
                  command.classList.remove("hide");
                  command.classList.add("show");
              } else {
                  command.classList.add("hide");
                  command.classList.remove("show");
              }
          });
      }
  };
};