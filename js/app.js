$( document ).ready(function() {

	setTimeout(function () {
		$('#loader').hide();
	}, 1000);
	
	$('.print').click(function() {
		window.print();
	});

	$('.download').click(function() {
	 	var req = new XMLHttpRequest();
	  req.open("GET", "/kashishshah.pdf", true);
	  req.responseType = "blob";
	  req.onload = function (event) {
	    var blob = req.response;
	    console.log(blob.size);
	    var link=document.createElement('a');
	    link.href=window.URL.createObjectURL(blob);
	    link.download="kashishshah.pdf";
	    link.click();
	  };
	  req.send();
	});

	$('#sendEmail').click(function() {
		console.log("here");
		window.location.href = "mailto:kashshah43@gmail.com";
		// window.location.assign('mailto:foo@bar.com');
	});
});