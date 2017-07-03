$("#main-menu li:has(ul)").hover(function(){
  $(this).find("ul").slideDown("fast");
  },function(){
    $(this).find("ul").slideUp("fast");
  }
)