$(document).ready(function(){
	$("form#information").submit(function(event) {
		var age = parseInt($("input#age").val());
		var gender = $("select#gender").val();

		if (age < 26 && gender === "male") {
			$("#natalie-portman").show();
		}

		event.preventDefault();
	});
});