$( document ).ready(function() {

	setTimeout(function () {
		$('#loader').hide();
	}, 1000);
	
	$('.print').click(function() {
		window.print();
	});

	$('.download').click(function() {
		window.open('kashishshah.com/kashishshah.pdf', '_blank', 'fullscreen=yes');
	});

	$('#sendEmail').click(function() {
		console.log("here");
		window.location.href = "mailto:kashshah43@gmail.com";
		// window.location.assign('mailto:foo@bar.com');
	});
});
