$(document).ready(function() {
	//hide the dollar section for tableTW
	$("#dollar").hide()

//hide sign in on clikc on register
	$("#register").click(function (){
		$('.sign').hide()
		$('.reg').show();
	})

	$("#signin").click(function (){
		$('.sign').show()
		$('.reg').hide();
	})

	/*Hide menu*/

	
	$("#mMenu").click(function() {

		$("#mobileMenu").toggleClass("hideMobileS");
		
	});

		//tbaleOne code
	$("#HtableOne").addClass("underliner");

	//tbaleTwo code
 $("#HtableTwo").click(function() {
	 $(".dropdownSection").removeClass("dropdownSectionUpHide");
	$("#dollar").hide()
		$("#tableOne").hide();
		$("#tableThree").hide();
		$("#searchOne").removeClass("d-block").addClass("displayNo");
		$("#tableTwo").show("fast", function(){
			$("#HtableThree").removeClass("underliner");
			$("#HtableTwo").addClass("underliner");
			$("#HtableOne").removeClass("underliner");
			$("#searchTwo").show();
			$("#dropTwo").show();
			});

	
	});

	$("#HtableThree").click(function() {
		$(".dropdownSection").removeClass("dropdownSectionUpHide");
		$("#dollar").show()
			$("#tableOne").hide();
			$("#tableTwo").hide();
			$("#searchOne").removeClass("d-block").addClass("displayNo");
			$("#tableThree").show("fast", function(){
				$("#HtableThree").addClass("underliner");
				$("#HtableTwo").removeClass("underliner");
				$("#HtableOne").removeClass("underliner");
				$("#searchTwo").show();
				$("#dropTwo").show();
				});
		});

	//tbaleOne code
	$("#HtableOne").click(function() {
		$(".dropdownSection").addClass("dropdownSectionUpHide");
		$("#dollar").hide()
		$("#tableOne").show();
		$("#tableThree").hide()
		$("#searchOne").addClass("d-block").removeClass("displayNo");
		$("#tableTwo").hide("fast", function(){
			$("#HtableThree").removeClass("underliner");
			$("#HtableTwo").removeClass("underliner");
			$("#HtableOne").addClass("underliner");
			$("#searchTwo").hide();
			$("#dropTwo").hide();
			});
	});
	
//notification bell

$(".notif-pois").click(function() {
	$(".notif-Up").show();
	$(".notif-pois").hide();
})


$(".notif-poiup").click(function() {
	$(".notif-Up").hide();
	$(".notif-pois").show();
})


});
