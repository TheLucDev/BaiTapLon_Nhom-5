document.getElementById("farm-night").style.color = "#fff";
      document.getElementById("farm-menu").style.color = "#fff";
      window.onscroll = function () {
        scrollFunction();
      };
      function scrollFunction() {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          document.getElementById("page-header").style.padding = "0px 0px";
          document.getElementById("page-header").style.backgroundColor = "white";
          document.getElementById("farm-logo").style.color = "#000";
          document.getElementById("farm-leaf").style.color = "#000";
          document.getElementById("farm-night").style.color = "#000";
          document.getElementById("farm-menu").style.color = "#000";

        } else {
          document.getElementById("page-header").style.padding = "12px 0px";
          document.getElementById("page-header").style.backgroundColor = "transparent";
          document.getElementById("farm-logo").style.color = "#fb811e";
          document.getElementById("farm-leaf").style.color = "#fb811e";
          document.getElementById("farm-night").style.color = "#fff";
          document.getElementById("farm-menu").style.color = "#fff";
        }
      }