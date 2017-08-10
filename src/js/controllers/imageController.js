"use strict";


  let self = {
    image: null
  };

  function initalize(){

  	console.log("initalized!");
    self.image = d3.select("#mainImage");
    console.log(self.image);

    self.englewood = d3.select("#englewood")
    	.on('click', englewoodClicked);

    self.home = d3.select("#backHome")
      .on('click', homeClicked);
    
  }

  function englewoodClicked() {
    console.log("clicked!");
    document.getElementById("mainImage").src = "http://www.qygjxz.com/data/out/193/3856596-random-image.png";
  }

  function homeClicked() {
    console.log("clicked!");
    document.getElementById("mainImage").src = "/datme.JPG";
  }

  initalize();

