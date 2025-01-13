window.APP.init.search = function() {
  if (typeof jQuery === 'undefined') {
      console.error('jQuery is required for search functionality');
      return;
  }

  $(".question").each(function () {
      $(this).attr(
          "data-search-term",
          $(this).text().toLowerCase() + $(this).find("ptag").text().toLowerCase()
      );
  });

  $(".live-search-box").on("keyup", function () {
      var searchTerm = $(this).val().toLowerCase();

      $(".question").each(function () {
          if (
              $(this).filter("[data-search-term *= " + searchTerm + "]").length > 0 ||
              searchTerm.length < 1
          ) {
              $(this).parent().parent().show();
          } else {
              $(this).parent().parent().hide();
          }
      });
  });
};