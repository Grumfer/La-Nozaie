require(["slider"],function(){
  $('#slides').slidesjs({
    width: 940,
    height: 528,
    navigation:false,
    pagination:false,
    play: {
      active: false,
      auto: true,
      interval: 2000,
      swap: true
    }
  });
  /*var addedToDocument = false;
  var wrapper = document.createElement("div");
  wrapper.id = "slideInner";
  var nodesToWrap = document.getElementsByClassName("slide");
  for (var index = 0; index < nodesToWrap.length; index++) {
      var node = nodesToWrap[index];
      if (! addedToDocument) {
          node.parentNode.insertBefore(wrapper, node);
          addedToDocument = true;
      }
      node.parentNode.removeChild(node);
      wrapper.appendChild(node);
  }*/
  /*$("#slides").append("<div class='slides-buttons'></div>");
  var navigation = $(".slidesjs-navigation, .slidesjs-pagination");
  navigation.remove();
  $(".slides-buttons").append(navigation);*/

});