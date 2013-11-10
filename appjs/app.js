$(document).on('pagebeforeshow', "#results", function(event, ui) {
	$.ajax({
		url : "http://quiet-meadow-5415.herokuapp.com//BigBoxServer/itemsearch/"+searchValue,
		contentType : "application/json",
		success : function(data, textStatus, jqXHR) {
			var itemList = data.items;
			var len = itemList.length;
			var list = $("#items-list");
			list.empty();
			var item;
			for (var i = 0; i < len; ++i) {
				item = itemList[i];
				

				list.append("<li><a onclick=GetItem(" + item.id + ",true)>" + "<img src='../image/" + item.img + "'/>" + "<p id='info'>" + item.name + "</p>" + "<p class='ui-li-aside'> $" + item.price + "</p>" + "</a></li>");
			}
			list.listview("refresh");
		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			alert("Data not found!");
		}
	});
});


$(document).on('pagebeforeshow', "#categories", function(event, ui) {
	$.ajax({
		url : "http://localhost:3412/BigBoxServer/categories",
		contentType : "application/json",
		success : function(data, textStatus, jqXHR) {

			$.getScript("/BigBoxApp/appjs/category.js", function() {
				//alert("Script loaded and executed.");

				var categoriesList = data.categories;
				//alert(JSON.stringify(categoriesList));
				//alert(JSON.stringify(categoriesList[0].cname));
				//alert(categoriesList.length);
				//alert(categoriesList[0].cname);
				

				// Merge object2 into object1(cast)
				//var newCategory = new Category;

				var list = $("#categoriesUl");
				list.empty();
				//$.extend(newCategory, categoriesList[0]);
				//Get root; and cast it
				//rootNumbSub = newCategory.numbSub;
				//Check number of root subcategory

				for (var i = 0; i < categoriesList.length; i++) {

					//alert(newCategory.getSubCategory(i).cid);
					//alert(JSON.stringify(newCategory.getSubCategory(i)));
					//alert(newCategory.numbSub);
					//list.append('<li><a onclick= GetCategory("' + newCategory.getSubCategory(i).cid + '") >' + newCategory.getSubCategory(i).cname + '</a></li>');
					list.append('<li><a onclick= GetCategory("'+categoriesList[i].cid+'") >' + categoriesList[i].cname + '</a></li>');
				}
				list.listview("refresh");
				//alert(newCategory);
				//alert(JSON.stringify(newCategory));
				//alert(JSON.stringify(newCategory.subcategory));
				//alert(newCategory.test());
				//alert( newCategory instanceof Category);
			});

		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			alert("Data not found!");
		}
	});
});


$(document).on('pagebeforeshow', "#subcategories", function(event, ui) {
	$.ajax({
		url : "http://localhost:3412/BigBoxServer/subcategories/" + currentcid,
		contentType : "application/json",
		success : function(data, textStatus, jqXHR) {
				
			//$.getScript("/BigBoxApp/appjs/category.js", function() {
				
				//alert("Second Script loaded and executed.");
				var categoriesList = data.categories;
				//alert("Im here");
				//alert(JSON.stringify(categoriesList));
				//alert(JSON.stringify(categoriesList[0].scname));
				//alert(categoriesList.length);
				//alert(categoriesList[0].scname);
				
				
				// Merge object2 into object1(cast)
				//var newCategory = new Category;
				//var newCategory2 = new Category;
				
				//$.extend(newCategory, categoriesList[0]);//Cast root
				
				//newCategory = newCategory.getSubCategory(currentcid); //Get Selected subcategory
				//$.extend(newCategory2, newCategory);//Cast second level
				 
				var list = $("#subcategoriesUl");
				list.empty();
				
				//for (var i = 0; i < newCategory2.numbSub; i++) {
					
				//	list.append('<li><a onclick= GetSecondCategory("' + newCategory2.getSubCategory(i).cid + '") >' + newCategory2.getSubCategory(i).cname + '</a></li>');
				//}
				
				//list.listview("refresh");
				/*	
				for (var i = 0; i < newCategory2.numbSub; i++) {
				currentCategories.push(categoriesList[0].getSubCategory(cid).getSubCategory(i));
				}
				alert(1);
				$.mobile.navigate("../view/subcategories.html");
				*/

				//Get root; and cast it
				//rootNumbSub = newCategory.numbSub;
				//Check number of root subcategory

				for (var i = 0; i < categoriesList.length; i++) {
					//alert(newCategory.getSubCategory(i).cid);
					//alert(JSON.stringify(newCategory.getSubCategory(i)));
					//alert(newCategory.numbSub);
					list.append('<li><a onclick= GetSecondCategory("'+categoriesList[i].subid+'") >' + categoriesList[i].scname + '</a></li>');
				}
				list.listview("refresh");
				//alert(newCategory);
				//alert(JSON.stringify(newCategory));
				//alert(JSON.stringify(newCategory.subcategory));
				//alert(newCategory.test());
				//alert( newCategory instanceof Category);
			//});

		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			alert("Data not found!");
		}
	});
});

$(document).on('pagebeforeshow', "#secondsubcategories", function(event, ui) {
	$.ajax({
		
		url : "http://localhost:3412/BigBoxServer/2subcategories/" + currentcid2,
		contentType : "application/json",
		success : function(data, textStatus, jqXHR) {
			
			//$.getScript("/BigBoxApp/appjs/category.js", function() {
				
				//alert("Third Script loaded and executed.");
				var categoriesList = data.categories;
				
				//alert("Second fast");
				//alert(JSON.stringify(categoriesList));
				//alert(JSON.stringify(categoriesList[0].scname));
				//alert(categoriesList.length);
				//alert(categoriesList[0].scname);
				
				// Merge object2 into object1(cast)
				//var newCategory = new Category;
				//var newCategory2 = new Category;
				//var newCategory3 = new Category;
				//alert("1");
				//$.extend(newCategory, categoriesList[0]);//Cast root
				//alert(newCategory.showCurrentCategory());
				
				//alert("2");
				//newCategory = newCategory.getSubCategory(currentcid); //Get Selected subcategory
				
				//$.extend(newCategory2, newCategory);//Cast second level
				//alert(newCategory2.showCurrentCategory());
				//alert(newCategory2 instanceof Category);
				
				//alert("3");
				//alert(JSON.stringify(newCategory2.getSubCategory(0)));
				
				//newCategory2 = newCategory2.getSubCategory(currentcid2);
				//newCategory2 = newCategory2.getSubCategory(currentcid2); //Get Selected subcategory
				//alert(newCategory2 instanceof Category);
				//$.extend(newCategory3, newCategory2);//Cast third level
				//alert(newCategory3 instanceof Category);
				 //alert("4");
				var list = $("#secondsubcategoriesUl");
				list.empty();
				//alert("5");
				for (var i = 0; i < categoriesList.length; i++) {
					
					//list.append('<li><a onclick= GetSecondCategory("' + newCategory3.getSubCategory(i).cid + '") >' + newCategory3.getSubCategory(i).cname + '</a></li>');
					list.append('<li><a href="../view/results.html" >' + categoriesList[i].sscname + '</a></li>');
				
				}
				//alert("termine");
				list.listview("refresh");
				/*	
				for (var i = 0; i < newCategory2.numbSub; i++) {
				currentCategories.push(categoriesList[0].getSubCategory(cid).getSubCategory(i));
				}
				alert(1);
				$.mobile.navigate("../view/subcategories.html");
				*/

				//Get root; and cast it
				//rootNumbSub = newCategory.numbSub;
				//Check number of root subcategory

				//for (var i = 0; i < rootNumbSub; i++) {

					//alert(newCategory.getSubCategory(i).cid);
					//alert(JSON.stringify(newCategory.getSubCategory(i)));
					//alert(newCategory.numbSub);
					//list.append('<li><a onclick= GetCategory("' + newCategory.getSubCategory(i).cid + '") >' + newCategory.getSubCategory(i).cname + '</a></li>');
				//}
				//list.listview("refresh");
				//alert(newCategory);
				//alert(JSON.stringify(newCategory));
				//alert(JSON.stringify(newCategory.subcategory));
				//alert(newCategory.test());
				//alert( newCategory instanceof Category);
			//});

		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			alert("Data not found!");
		}
	});
});

//item view page
$(document).on('pagebeforeshow', "#details", function(event, ui) {
	console.log("pageBeforeShow Details");
	var detailsHeader = $("#detailsHeader");
	detailsHeader.empty();
	detailsHeader.append(currentItem.name);

	var detailsImg = $("#details-image");
	detailsImg.empty();
	detailsImg.append("<img src='../image/" + currentItem.img + "'>");

	var detailsPara = $("#detailsPara");
	detailsPara.empty();
	detailsPara.append(currentItem.info);

	var detailsPrice = $("#detailsPrice");
	detailsPrice.empty();
	detailsPrice.append("" + currentItem.price);

	var detailsBid = $("#detailsBid");
	detailsBid.empty();
	detailsBid.append("" + currentItem.bid);

	var detailsShipFrom = $("#detailsShipFrom");
	detailsShipFrom.empty();
	detailsShipFrom.append("" + currentItem.shipFrom);

	var detailsShipTo = $("#detailsShipTo");
	detailsShipTo.empty();
	detailsShipTo.append("" + currentItem.shipTo);

	var detailsCondition = $("#detailsCondition");
	detailsCondition.empty();
	detailsCondition.append("" + currentItem.condition);
});

$(document).on('pagebeforeshow', "#bidPage", function(event, ui) {
	console.log("pageBeforeShow Description");

	var prodBidName = $("#prodBitName");
	prodBidName.empty();
	prodBidName.append(" " + currentItem.name);

	//var prodBidInfo = $("#imgSpace");
	//prodBidInfo.empty();
	$('#imgSpace').attr('src', "../image/" + currentItem.img);
	//prodBidInfo.append("<img src= '../image/" + currentItem.img + "class='ui-li-thumb'>");

	var currentBid = $("#currentBid");
	currentBid.empty();
	currentBid.append(" Current Bid &emsp; &emsp; &emsp;" + currentItem.bid);
});

//cart page
$(document).on('pagebeforeshow', "#cart", function(event, ui) {
	var len = cartList.length;
	var cList = $("#cart-list");
	var subtotal = $("#subtotal");
	var page = $("#cart");
	var sTotal = 0.00;
	var itemsQty = 0;

	cList.empty();
	var item;
	for (var i = 0; i < len; ++i) {
		item = cartList[i];
		cList.append("<li><a onclick=GetItem(" + item.id + ",true)>" + "<img src='../image/" + item.img + "'/>" + "<p id='infoCart'>" + item.name + "</p>" + "<p> $" + item.price + "</p>" + "<p> Qty: " + item.qtyToPurchase + "</p>" +
		//				"<form class='ui-li-aside'><div data-role='fieldcontain'><label for='qty'>Qty:</label><br /><input onclick='#' style='width:35px' name='qty' id='qty' type='number' /></div></form>" +
		"<a data-icon='delete' data-role='button' onclick='deleteCartItem(" + item.id + ")'></a></a></li>");
		sTotal += parseFloat(item.price) * item.qtyToPurchase;
		itemsQty += item.qtyToPurchase;
	}

	subtotal.empty();
	subtotal.append("<p>Subtotal (" + itemsQty + " items) <br />$" + sTotal.toFixed(2));
	cList.listview("refresh");

});

//checkout page
$(document).on('pagebeforeshow', "#checkout-page", function(event, ui) {
	var shipTo = $("#shipTo");
	var payment = $("#payment");
	var items_ship_head = $("#items-shipping-header");
	var items_ship = $("#items-shipping");
	var shippingTotal = 0.00;
	var subTotal = 0.00;
	var total;

	if (is_from_cart) {
		var item;
		var len = cartList.length;
		var options = "";

		for ( i = 0; i < len; ++i) {
			item = cartList[i];
			//Usar el qty available que se va a crear en Item para comparar
			//Por ahora hardwired 5
			options = "";
			for ( j = 1; j <= 5; j++) {
				if (j == item.qtyToPurchase) {
					options += "<option value=' " + j + "' selected='selected'>  " + j + "  </option>";
				} else {
					options += "<option value=' " + j + "'>  " + j + "  </option>";
				}
			}
			shippingTotal += parseFloat(item.shippingPrice);
			subTotal += parseFloat(item.price);
			items_ship.append("<li>" + "<img src='../image/" + item.img + "'/>" + "<p id='infoCart'>" + item.name + "</p>" + "<p> $" + item.price + "</p>" + "<div class='ui-li-aside'><fieldset data-role='controlgroup'>" + "<legend><pre>Qty: </pre> </legend>" + "<select name='qty' id='qty'>" + options + "</select></fieldset></div></li>");

			//			"<li><a href='#addSelect'><p style='padding-top:10px'>Quantity 3</p></a></li>" +
			//			"<li><a href='#shipSelect'><p style='padding-top:10px'>Shpping type <br> Estimated shipping time</p></li><hr style='padding:0; margin:0'>");
		}

	} else {
		var item = currentItem;
		//var item = new cartItem(anItem.name, anItem.buyItNow, anItem.price, anItem.img, anItem.condition, anItem.hasBid, anItem.hasBid, 1, anItem.shippingPrice);
		var options = "";
		shippingTotal = parseFloat(item.shippingPrice);
		subTotal = parseFloat(item.price);
		for ( i = 1; i <= 5; i++) {
			options += "<option value=' " + i + "'>  " + i + "  </option>";
		}
		items_ship.append("<li>" + "<img src='../image/" + item.img + "'/>" + "<p id='infoCart'>" + item.name + "</p>" + "<p> $" + item.price + "</p>" + "<div class='ui-li-aside'><fieldset data-role='controlgroup'>" + "<legend><pre>Qty: </pre> </legend>" + "<select name='qty' id='qty'>" + options + "</select></fieldset></div></li>");
	}
	total = shippingTotal + subTotal;

	//Shipping address
	if (s_address_selected) {
		//ya selecciono
		shipTo.empty();
		shipTo.append("<h5> Ship to <hr style='padding:0;margin:0' /></h5><a onClick='GetAddresses(true)'>" + "<p style='padding:5px 10px 20px 0;margin:0'> " + shipping_address.name + "<br />" + shipping_address.street + "<br />" + shipping_address.city + ", " + shipping_address.state + " " + shipping_address.zip + " " + shipping_address.country + "<br />" + shipping_address.phone + "</p></a><hr style='padding:0;margin:0'/><br />");

	} else {
		//todavia no ha seleccionado
		shipTo.empty();
		shipTo.append("<h5> Ship to <hr style='padding:0;margin:0'/></h5><a onClick='GetAddresses(true)'><p style='padding:0px 10px 10px 0; margin:0'><strong>Select Address</strong></p></a><hr style='margin:0'><br />");
	}

	//Payment
	if (payment_selected) {
		//codigo cuando ya puso trajeta
		payment.empty();
		var cardNumberDisplay = new Array(currentCreditCard.cardnumber.length - 4 + 1).join('x') + currentCreditCard.cardnumber.slice(-4);
		cardNumberDisplay = cardNumberDisplay.substring(cardNumberDisplay.length - 7);
		payment.append("<h5> Payment <hr style='padding:0;margin:0' /></h5><a onClick='GetCreditCards(false)'>" + "<p style='padding:5px 10px 20px 0;margin:0'><strong>Payment method:</strong></p>" + "<p>" + currentCreditCard.holder_name + "<br />" + cardNumberDisplay + "</p></a>");

		//verificar si ya puso una un billing address
		if (b_address_selected) {
			//codigo para billing cuando ya selecciono uno
			payment.append("<hr style='margin:0'><a onClick='GetAddresses(false)'><p style='padding:5px 10px 20px 0;margin:0'><strong>Billing Address:</strong> <br>" + billing_address.name + "<br />" + billing_address.street + "<br />" + billing_address.city + ", " + billing_address.state + " " + billing_address.zip + " " + billing_address.country + "<br />" + billing_address.phone + "</p></a><hr style='padding:0;margin:0;border-top:dashed 1px'/><br /><p style='margin-bottom:0;padding-bottom:5px > Price: $" + subTotal.toFixed(2) + "<br>Shipping: $" + shippingTotal.toFixed(2) + "<hr style='padding:0;margin:0;width:100px'/>Total: $" + total.toFixed(2) + "</p><hr/>");

		} else {
			//todavia no ha seleccionado una tajeta
			payment.append("<hr style='margin:0'><a onClick='GetAddresses(false)'><p style='padding:10px 10px 10px 0; margin:0'><strong>Select Billing Address</strong></p></a><hr style='padding:0;margin:0;border-top:dashed 1px'/><br /><p style='margin-bottom:0;padding-bottom:5px>Price: $" + subTotal.toFixed(2) + "<br> Shipping: $" + shippingTotal.toFixed(2) + "<hr style='padding:0;margin:0;width:100px'/>Total: $" + total.toFixed(2) + "</p><hr/>");
		}

	} else {
		//no ha puesto tarjeta
		payment.empty();
		payment.append("<h5> Payment <hr style='padding:0;margin:0'/></h5><a onClick='GetCreditCards()'><p style='padding:0px 10px 10px 0; margin:0'><strong>Select Credit Card</strong></p></a>");
		payment.append("<hr style='padding:0;margin:0;border-top:dashed 1px'/><br /><p style='margin-bottom:0;padding-bottom:5px'>Price: $" + subTotal.toFixed(2) + "<br>Shipping: $" + shippingTotal.toFixed(2) + "<hr style='padding:0;margin:0;width:100px'/>Total: $" + total.toFixed(2) + "</p><hr>");

	}

	items_ship_head.empty();
	items_ship_head.append("<h5> Items and Shipping <hr style='padding:0;margin:0'/></h5>");

	if (shipping_address == {} || billing_address == null || paymentMethod == null) {
		$("#place-order").addClass("ui-disabled");
	} else {
		$("#place-order").addClass("ui-enabled");
	}

	shipTo.listview("refresh");
	payment.listview("refresh");
	items_ship_head.listview("refresh");
	items_ship.listview("refresh");
});

//Shipping and Payment selection
$(document).on('pagebeforeshow', "#ShippingOrPaymentSel", function(event, ui) {

	var head = $("#SoPheader");
	var newSoP = $("#newSoP");
	var savedSoP = $("#savedSoP");
	if (is_addr) {
		head.empty();
		newSoP.empty();
		savedSoP.empty();
		head.append("Select Address");
		newSoP.append("<br /><li data-icon='plus' data-iconpos='left'><a href='../view/addNewAddress.html'><h5>Add new address</h5></a></li><br />");

		//conseguir todas las direcciones del usuario y apendiarlas
		var len = addressList.length;
		var anAddress;
		for ( i = 0; i < len; ++i) {
			anAddress = addressList[i];
			savedSoP.append("<li><a onClick='GetAddress(" + anAddress.id + ")'>" + "<p>" + anAddress.name + "<br />" + anAddress.street + "<br />" + anAddress.city + ", " + anAddress.state + " " + anAddress.zip + " " + anAddress.country + "<br />" + anAddress.phone + "</p></a></li>");
		}

	} else {
		head.empty();
		newSoP.empty();
		savedSoP.empty();
		head.append("Payment Method");
		newSoP.append("<br /><li data-icon='plus'><a href='../view/addNewCard.html'><h5>Add new card</h5></a></li>");

		//conseguir todas las tarjetas del usuario y apendiarlas
		var lenC = creditcardList.length;
		var aCredCard;
		var cardNumberDisp;
		for ( i = 0; i < lenC; ++i) {
			aCredCard = creditcardList[i];
			cardNumberDisp = new Array(aCredCard.cardnumber.length - 4 + 1).join('x') + aCredCard.cardnumber.slice(-4);
			cardNumberDisp = cardNumberDisp.substring(cardNumberDisp.length - 7);
			savedSoP.append("<li><a onClick='GetCreditCard(" + aCredCard.id + ")'>" + "<p>" + aCredCard.holder_name + "<br />" + cardNumberDisp + "<br />Exp. Date " + aCredCard.exp_month + "/" + aCredCard.exp_year + "</p></a></li>");
		}

	}

	newSoP.listview("refresh");
	savedSoP.listview("refresh");

});

$(document).on('pagebeforeshow', "#descriptionPage", function(event, ui) {
	console.log("pageBeforeShow Description");

	var descHSpace = $("#descHeader");
	descHSpace.empty();
	descHSpace.append("Description");

	var prodDescSpace = $("#prodDesPara");
	prodDescSpace.empty();
	prodDescSpace.append("" + currentItem.info);

	console.log(currentItem);
	var detailsParaSpace = $(".detailsPara");
	detailsParaSpace.empty();
	detailsParaSpace.append("Name: " + currentItem.name + "<br/> Model: " + currentItem.model + "<br/> Year: " + currentItem.year + "<br/> Dimension: " + currentItem.dimension + "<br/> Weigth: " + currentItem.weigth + "<br/> Ship to:" + currentItem.shipTo + " <br/> Ship from: " + currentItem.shipFrom);

});

/*=====================================================================================================================================
 Button events
 =====================================================================================================================================*/

function ConverToJSON(formData) {
	var result = {};
	$.each(formData, function(i, o) {
		result[o.name] = o.value;
	});
	return result;
}
var currentcid;
function GetCategory(cid){
	currentcid = cid;
	$.mobile.navigate("../view/subcategories.html");
}
var currentcid2;
function GetSecondCategory(cid){
	//alert("subid:"+cid);
	currentcid2 = cid;
	$.mobile.navigate("../view/secondSubCategory.html");
}
//get a item by its id
var currentItem = {};
function GetItem(id, display) {
	$.mobile.loading("show");
	$.ajax({
		async : false,
		url : "http://localhost:3412/BigBoxServer/items/" + id,
		method : 'get',
		contentType : "application/json",
		dataType : "json",
		success : function(data, textStatus, jqXHR) {
			currentItem = data.item;
			$.mobile.loading("hide");
			if (display) {
				$.mobile.navigate("../view/details.html");
			}
		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			if (data.status == 404) {
				alert("Item not found.");
			} else {
				alert("Internal Server Error.");
			}
		}
	});
}

/*===============================================================================================
 Methods related to shipping and billing addresses
 =============================================================================================*/
var shipping_address;
var billing_address;
var s_address_selected;
var b_address_selected;
var is_addr;
var is_ship;

function SetAddress(is_address) {
	is_addr = is_address;
	$.mobile.navigate("../view/AddressOrPayment.html");
}

//Add an address to the saved list
function AddAddress() {
	$.mobile.loading("show");
	var form = $("#address-form");
	var formData = form.serializeArray();
	console.log("form Data: " + formData);
	var newAddress = ConverToJSON(formData);
	console.log("New Address: " + JSON.stringify(newAddress));
	var newAddressJSON = JSON.stringify(newAddress);
	$.ajax({
		url : "http://localhost:3412/BigBoxServer/addresses",
		method : 'post',
		data : newAddressJSON,
		contentType : "application/json",
		dataType : "json",
		success : function(data, textStatus, jqXHR) {
			$.mobile.loading("hide");
			GetAddresses(is_ship);
		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			alert("Address could not be added!");
		}
	});

}

//Get an addres based on its ID
function GetAddress(id) {
	$.mobile.loading("show");
	$.ajax({
		url : "http://localhost:3412/BigBoxServer/addresses/" + id,
		method : 'get',
		contentType : "application/json",
		dataType : "json",
		success : function(data, textStatus, jqXHR) {
			$.mobile.loading("hide");
			if (is_ship) {
				shipping_address = data.address;
				s_address_selected = true;
			} else {
				billing_address = data.address;
				b_address_selected = true;
			}
			$.mobile.navigate("../view/checkout.html");
		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			if (data.status == 404) {
				alert("Address not found.");
			} else {
				alert("Internal Server Error.");
			}
		}
	});
}

//Get all addresses
var addressList = new Array();
function GetAddresses(isShipping) {
	$.ajax({
		url : "http://localhost:3412/BigBoxServer/addresses",
		method : 'get',
		contentType : "application/json",
		success : function(data, textStatus, jqXHR) {
			addressList = data.addresses;
			is_ship = isShipping;
			SetAddress(true);

		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			alert("Data not found!");
		}
	});
}

/*===============================================================================================
Functions related Cart
=============================================================================================*/
//arreglar la funcion para que detecte que es el cart de cierto usuario
var cartList = {};
function GetCart(show) {
	console.log("cartList");
	$.ajax({
		async : false,
		url : "http://localhost:3412/BigBoxServer/cart/",
		contentType : "application/json",
		dataType : "json",
		success : function(data, textStatus, jqXHR) {
			cartList = data.cart;
			console.log(cartList);
		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			alert("Data not found!");
		}
	});
	$.mobile.loading("hide");
	if (show) {
		$.mobile.navigate("../view/cart.html");
	}

}

//A-adir un item al carro
function AddToCart() {
	var id = currentItem.id;
	$.mobile.loading("show");
	var newProdJSON = JSON.stringify(currentItem);
	$.ajax({
		url : "http://localhost:3412/BigBoxServer/cart/" + id,
		method : 'put',
		data : newProdJSON,
		contentType : "application/json",
		dataType : "json",
		success : function(data, textStatus, jqXHR) {
			$.mobile.loading("hide");
			GetCart(true);
		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			if (data.status == 404) {
				alert("Cart not found.");
			} else {
				alert("Internal Server Error.");
			}
		}
	});
}

function deleteCartItem(ItemId) {

	var userConfirmation = confirm("Are you sure you want to remove this item?");
	if (userConfirmation == false) {
		return;
	}

	var cartList = document.getElementById("cart-list");

	$.mobile.loading("show");
	$.ajax({
		async : false,
		url : "http://localhost:3412/BigBoxServer/cart/" + ItemId,
		method : 'delete',
		contentType : "application/json",
		dataType : "json",
		success : function(data, textStatus, jqXHR) {
			$.mobile.loading("hide");
			GetCart(false);
			refreshPage();
		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			if (data.status == 404) {
				alert("Item not found.");
			} else {
				alert("Internal Server Error.");
			}
		}
	});
}

/*===============================================================================================
 Functions related to payment method
 =============================================================================================*/
var paymentMethod;
//Add a card to the cards list
function AddCreditCard() {
	$.mobile.loading("show");
	var form = $("#card-form");
	var formData = form.serializeArray();
	console.log("form Data: " + formData);
	var newCreditCard = ConverToJSON(formData);
	console.log("New Credit Card: " + JSON.stringify(newCreditCard));
	var newCreditCardJSON = JSON.stringify(newCreditCard);
	$.ajax({
		url : "http://localhost:3412/BigBoxServer/creditcards",
		method : 'post',
		data : newCreditCardJSON,
		contentType : "application/json",
		dataType : "json",
		success : function(data, textStatus, jqXHR) {
			$.mobile.loading("hide");
			GetCreditCards();
		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			alert("Credit Card could not be added!");
		}
	});

}

//Get a credit card based on its ID
var currentCreditCard = {};
function GetCreditCard(id) {
	$.mobile.loading("show");
	$.ajax({
		url : "http://localhost:3412/BigBoxServer/creditcards/" + id,
		method : 'get',
		contentType : "application/json",
		dataType : "json",
		success : function(data, textStatus, jqXHR) {
			currentCreditCard = data.creditcard;
			paymentMethod = currentCreditCard;
			$.mobile.loading("hide");
			payment_selected = true;
			$.mobile.navigate("../view/checkout.html");
		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			if (data.status == 404) {
				alert("Crdit Card not found.");
			} else {
				alert("Internal Server Error.");
			}
		}
	});
}

//Get all credit cards
var creditcardList = new Array();
function GetCreditCards() {
	$.ajax({
		url : "http://localhost:3412/BigBoxServer/creditcards",
		method : 'get',
		contentType : "application/json",
		success : function(data, textStatus, jqXHR) {
			creditcardList = data.creditcards;
			SetAddress(false);

		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			alert("Data not found!");
		}
	});
}

var is_from_cart;
var currentOrder;
var payment_selected;

function CheckoutFromCart(isFromCart) {
	is_from_cart = isFromCart;
	$.mobile.navigate("../view/checkout.html");
}

function prepareOrder(is_from_cart) {
	currentOrder = new Order();
	address_selected = false;
	payment_selected = false;
	this.is_from_cart = is_from_cart;

	$.mobile.navigate("../view/checkout.html");
}

var searchValue;
function displayunicode(e) {
	var unicode = e.keyCode ? e.keyCode : e.charCode;
	searchValue = document.getElementsByName('searchValue')[0].value;
	// Got the User Search Value;

	//Check if Enter was received.
	if (unicode == 13) {
		$.mobile.navigate("../view/results.html");
	}
}


function getSubmitValue() {
	var bidValue = document.getElementsByName('bidValue')[0].value;

	var userConfirmation = confirm("Are you sure of the current Bid? \n Bid: $" + bidValue);
	if (userConfirmation == false) {
		return;
	}

	/*
	 var jsonData={"name":""+currentItem.name, "model":""+currentItem.model, "year":""+currentItem.year,"info":""+currentItem.info,"buyItNow":""+currentItem.buyItNow, "price":""+currentItem.price, "img":""+currentItem.img,
	 "width":""+currentItem.width, "length":""+currentItem.length, "heigth":""+currentItem.heigth, "weigth":""+currentItem.weigth, "shipTo":""+currentItem.shipTo, "shipFrom":""+currentItem.shipFrom, "condition":""+currentItem.condition ,
	 "hasBid":""+currentItem.hasBid, "bid":""+currentItem.bid, "seller":""+currentItem.seller, "shippingPrice":""+currentItem.shippingPrice){

	 var j = JSON.stringify(jsonData);*/
	currentItem.bid = bidValue;
	var newProdJSON = JSON.stringify(currentItem);
	$.ajax({
		url : "http://localhost:3412/BigBoxServer/items/" + currentItem.id,
		method : 'put',
		data : newProdJSON,
		contentType : "application/json",
		dataType : "json",
		success : function(data, textStatus, jqXHR) {
			GetItem(currentItem.id, true);
			//refresh Current Item
		},
		error : function(data, textStatus, jqXHR) {
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			if (data.status == 404) {
				alert("Item not found. GET ITEM");
			} else {
				alert("Internal Server Error.");
			}
		}
	});

}

function checkBid() {
	var bidValue = document.getElementsByName('bidValue')[0].value;
	//Se le suma 0.50 para un bid aceptado- No implementado aun.
	if (parseFloat(bidValue).toFixed(2) - parseFloat(currentItem.bid).toFixed(2) <= 0) {
		$('#submit').addClass('ui-disabled');
	} else if (parseFloat(bidValue).toFixed(2) - parseFloat(currentItem.bid).toFixed(2) > 0) {
		$('#submit').removeClass('ui-disabled');
	} else {
		$('#submit').addClass('ui-disabled');
	}
}

/*===============================================================================================
 Login Functions
 =============================================================================================*/

function login() {
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	var logInfo = JSON.stringify({
		'username' : user,
		'password' : pass
	});
	$.ajax({
		url : "http://quiet-meadow-5415.herokuapp.com/BigBoxServer/user",
		type : "post",
		contentType : "application/json",
		data : logInfo,
		success : function(data, textStatus, jqXHR) {
			$.mobile.navigate("/BigBoxApp/view/user.html");
			//$.mobile.navigate("../view/user.html")
		},
		error : function(data, textStatus, jqXHR) {

			alert("Wrong username or password.");
			//$.mobile.navigate("../index.html");

		}
	});

}

function logout() {

	$.ajax({
		url : "http://quiet-meadow-5415.herokuapp.com/BigBoxServer/logout",
		contentType : "application/json",
		success : function(data, textStatus, jqXHR) {
			$.mobile.navigate("/BigBoxApp/index.html");

		},
		error : function(data, textStatus, jqXHR) {
			console.log("what happend?");
		}
	});

}

function account() {
	$.ajax({
		url : "http://quiet-meadow-5415.herokuapp.com/BigBoxServer/account",
		contentType : "application/json",
		success : function(data, textStatus, jqXHR) {
			$.mobile.navigate("/BigBoxApp/view/account/watching.html");

		},
		error : function(data, textStatus, jqXHR) {
			console.log("what happend?");
		}
	});

}

function register() {

	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var address = document.getElementById('address').value;
	var city = document.getElementById('city').value;
	var state = document.getElementById('state').value;
	var country = document.getElementById('country').value;
	var zipcode = document.getElementById('zipcode').value;
	var phone = document.getElementById('phone').value;
	var new_username = document.getElementById('new_username').value;
	var email = document.getElementById('email').value;
	var new_password = document.getElementById('new_password').value;
	var renter = document.getElementById('renter').value;
	var question = document.getElementById('question').value;
	var answer = document.getElementById('answer').value;

	var registerInfo = JSON.stringify({
		'fname' : fname,
		'lname' : lname,
		'address' : address,
		'city' : city,
		'state' : state,
		'country' : country,
		'zipcode' : zipcode,
		'phone' : phone,
		'new_username' : new_username,
		'email' : email,
		'new_password' : new_password,
		'renter' : renter,
		'question' : question,
		'answer' : answer
	});

	$.ajax({
		url : "http://localhost:3412/BigBoxServer/register",
		type : "post",
		contentType : "application/json",
		data : registerInfo,
		success : function(data, textStatus, jqXHR) {
			$.mobile.navigate("/BigBoxApp/view/signedUp.html");

		},
		error : function(data, textStatus, jqXHR) {
			console.log("try again");
			$.mobile.navigate("../index.html");

		}
	});

}

/*===============================================================================================
 USER CHECK Function
 =============================================================================================*/
function registerChecker(num) {
	if (num == 0) {
		$.ajax({
			url : "http://quiet-meadow-5415.herokuapp.com/BigBoxServer/verify/",
			contentType : "application/json",
			success : function(data, textStatus, jqXHR) {
				console.log(data);
				if (data != 'OK')
					$.mobile.navigate("/BigBoxApp/view/user.html");
			},
			error : function(data, textStatus, jqXHR) {
			}
		});
	} else if (num == 5) {
		$.ajax({
			url : "http://quiet-meadow-5415.herokuapp.com/BigBoxServer/verify/",
			contentType : "application/json",
			success : function(data, textStatus, jqXHR) {
				console.log(data);
				$(".user_header").empty;
				$(".user_header").append('<a href="" data-rel="page"  class="ui-btn-left"\
				style="color: #FFFFFF" onclick="account()"><h5>Welcome\
				 ' + data.rows[0].u_fname + ' ' + data.rows[0].u_lname + '!</h5> </a>');
			},
			error : function(data, textStatus, jqXHR) {
				console.log("try again");

			}
		});
	} else {

		$.ajax({
			url : "http://quiet-meadow-5415.herokuapp.com/BigBoxServer/verify/",
			contentType : "application/json",
			success : function(data, textStatus, jqXHR) {
				$(".user_header").empty;
				$(".user_header").append('<a href="/BigBoxApp/view/account/watching.html" data-rel="page" \
				class="ui-btn-left"style="color: #FFFFFF" ><h5>Welcome! \
				' + data.rows[0].u_fname + ' ' + data.rows[0].u_lname  + '</h5></a>');
				
				$('.account').append('Account: ' + data.rows[0].u_id);
				if (data.rows[0].u_admin) {
					$('#navbar_admin' + num).show();
					$('#navbar_user' + num).hide();
				} else {
					$('#navbar_user' + num).show();
					$('#navbar_admin' + num).hide();
				}

				$('#home').page();

			},
			error : function(data, textStatus, jqXHR) {
				console.log("try again");

			}
		});

	}

}


function searchUser(e, page) {
	var unicode = e.keyCode ? e.keyCode : e.charCode;
	var searchValue = JSON.stringify({
		'value' : '%' + document.getElementsByName('searchValue')[0].value + '%'
	});

	//Check if Enter was received.
	if (unicode == 13) {
		if (page == 1) {
			displayAdminResult(searchValue);
		}
		else if(page==2){
			displayUsersRemove(searchValue);
			
		}
	}
}


function displayAdminResult(searchValue) {

	$(document).on('pagebeforeshow', "#adminResult", function(event, ui) {

		$.ajax({
			url : "http://quiet-meadow-5415.herokuapp.com/BigBoxServer/searchUser/",
			type : "post",
			contentType : "application/json",
			data : searchValue,
			success : function(data, textStatus, jqXHR) {

				var list = $("#adminResultList");
				document.getElementById("adminResultList").innerHTML = "";
				console.log("Empty");
				console.log(data);

				if (data.rows.length == 0)
					list.append('<p>No Matches, please try again.</p>');
				else
					for (var i = 0; i < data.rows.length; i++) {
						var isAdmin = "No";
						if (data.rows[i].u_admin)
							isAdmin = "Yes";
						var username = 'onclick="updateAdmin(\'' + data.rows[i].u_username + '\',' + data.rows[i].u_admin + ')"';
						console.log(username);
						list.append('<li><a href="" ' + username + '>Name: ' + data.rows[i].u_fname + ' ' + data.rows[i].u_lname + ', Username: ' + data.rows[i].u_username + ', Administrator Access: ' + isAdmin + ' Click to change access.</a></li>');

					}

				list.listview().listview("refresh");
			},
			error : function(data, textStatus, jqXHR) {

			}
		});

	});

	$.mobile.navigate("/BigBoxApp/view/account/adminResult.html");
}

function displayUsersRemove(searchValue){
	
	$(document).on('pagebeforeshow', "#removeUserResult", function(event, ui) {

		$.ajax({
			url : "http://quiet-meadow-5415.herokuapp.com/BigBoxServer/searchUser/",
			type : "post",
			contentType : "application/json",
			data : searchValue,
			success : function(data, textStatus, jqXHR) {

				var list = $("#removeUsersResultList");
				document.getElementById("removeUsersResultList").innerHTML = "";
				console.log("Empty");
				console.log(data);

				if (data.rows.length == 0)
					list.append('<p>No Matches, please try again.</p>');
				else
					for (var i = 0; i < data.rows.length; i++) {
						var isAdmin = "No";
						if (data.rows[i].u_admin)
							isAdmin = "Yes";
						var username = 'onclick="confirmUserRemoval(\''+data.rows[i].u_username+'\',1)"';
						console.log(username);
						list.append('<li><a href="" ' + username + '>Name: ' + data.rows[i].u_fname + ' ' + data.rows[i].u_lname + ', Username: ' + data.rows[i].u_username + ', Administrator Access: ' + isAdmin + ' Click to remove user.</a></li>');

					}

				list.listview().listview("refresh");
			},
			error : function(data, textStatus, jqXHR) {

			}
		});

	});

	$.mobile.navigate("/BigBoxApp/view/account/removeUsers.html");
	
}



function updateAdmin(username,isAdmin){
	
	var json = JSON.stringify({
		'username':username,
		'isAdmin': isAdmin
	});
	

	$.ajax({
		url : "http://quiet-meadow-5415.herokuapp.com/BigBoxServer/updateAdmin/",
		contentType : "application/json",
		type : "put",
		data : json,
		success : function(data, textStatus, jqXHR) {
			var username = data.rows[0].u_username + "";
			username = username.replace(/\s/g, "");
			console.log(username+" testing");
			if (data.rows[0].u_admin)
				alert("User " + username + " now has administrator access.");
			else
				alert("User " + username + " administrator access has been revoked.");

			$.mobile.navigate("/BigBoxApp/view/account/admin.html");

		},
		error : function(data, textStatus, jqXHR) {
			alert("Cannot revoke administrator access from yourself.");
		}
	});

}

function confirmUserRemoval(username,confirmType){
				
			var user = username.replace(/\s/g, "");

			if(confirmType==1){
	
				$(document).on('pagebeforeshow', "#confirmUserRemoval", function(event, ui) {
					document.getElementById("confirmUserRemovalDiv").innerHTML="";
					$("#confirmUserRemovalDiv").append('<div align="left">\
					<p>Are you sure you want to remove '+user+'?</p>\
					<p>This acction cannot be undone.</p>\
					<input type="submit" onclick="removeUser(\''+user+'\')" data-inline="true" data-theme="b" value="Yes"/>\
					<input type="button"  onclick="$.mobile.navigate(\'/BigBoxApp/view/account/admin.html\')"\
					data-inline="true" data-theme="b" value="No"/>\
					</div>');

		
				});
				
				$.mobile.navigate("/BigBoxApp/view/account/removeUserConfirm.html");
			}
			else if(confirmType==2){
				console.log("confirm user removel with 2");
				$(document).on('pagebeforeshow', "#removedUser", function(event, ui) {
					document.getElementById("userRemoved").innerHTML="";
					$("#userRemoved").append('<div align="left">\
					<p>User '+user+' was removed.</p>\
					<input type="button" onclick="$.mobile.navigate(\'/BigBoxApp/view/account/admin.html\');" \
					data-inline="true" data-theme="b" value="Ok"/>\
					</div>');
		
				});
				
				$.mobile.navigate("/BigBoxApp/view/account/removedUser.html");

				
			}
			
		
			

		


}

function removeUser(username){
	
		var json = JSON.stringify({
		'username':username
	});
	
		$.ajax({
		url : "http://quiet-meadow-5415.herokuapp.com/BigBoxServer/removeUser/",
		contentType : "application/json",
		type : "delete",
		data : json,
		success : function(data, textStatus, jqXHR) {
			
			console.log("got here");
			confirmUserRemoval(username,2);



		},
		error : function(data, textStatus, jqXHR) {
			alert("This shouldn't happen.");
		}
	});
	
	
	
}


/*===============================================================================================
 Helper Function
 =============================================================================================*/
function refreshPage() {
	$.mobile.changePage(window.location.href, {
		allowSamePageTransition : true,
		transition : 'none',
		showLoadMsg : false,
		reloadPage : true
	});
}
