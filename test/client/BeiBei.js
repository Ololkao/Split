var n = 1;
var $li = $('ul.tab-title li');
var checkbill_close = 0 ; //0 means current_state is close
$(function(){
	$($li. eq(5) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
	/*$li.click(function(){
		$($li. eq(n) .find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
		$li. eq(n) .addClass('active'). siblings ('.active').removeClass('active');
		
		n++;
		if(n>2){
			n=0;
		}
	
	});*/
});
	

function change_page(page_number){
	var container = document.getElementById("__Page__menu__container");
	var photo_container = document.getElementById("__Page__picture__container");
	if(page_number==0 |page_number==1 |page_number==3 |page_number==4 | page_number==8 | page_number==15){
		container.style.display = "flex";
	}else{
		container.style.display = "none";
	}
	if(page_number==0 |page_number==15){
		photo_container.style.display = "flex";
	}else{
		photo_container.style.display = "none";
	}
	$($li. eq(page_number) .find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
	$li. eq(page_number) .addClass('active'). siblings ('.active').removeClass('active');
	menu_openorclose(1);
	
}


let cardbook = document.querySelector('#__Page1__cardbook');
let cardbook__bar = document.querySelector('#__Page1__cardbook__bar');

function moveElementLeft() {
	var xi = new WebKitCSSMatrix(window.getComputedStyle(cardbook).transform);
	var vw = xi.m41 * (100 / document.documentElement.clientWidth);
	if(vw == 0)	{
		cardbook.style.transform = "translateX(-100vw)";
		$('#__Page1__dot:nth-child(1)').removeClass("dot_chosen");
		$('#__Page1__dot:nth-child(2)').addClass("dot_chosen");
	}	else if(vw >= -110) {
		cardbook.style.transform = "translateX(-200vw)";
		$('#__Page1__dot:nth-child(2)').removeClass("dot_chosen");
		$('#__Page1__dot:nth-child(3)').addClass("dot_chosen");
	}
}

function moveElementRight() {
	var xi = new WebKitCSSMatrix(window.getComputedStyle(cardbook).transform);
	var vw = xi.m41 * (100 / document.documentElement.clientWidth);
	if(vw <= -200) {
		cardbook.style.transform = "translateX(-100vw)";
		$('#__Page1__dot:nth-child(3)').removeClass("dot_chosen");
		$('#__Page1__dot:nth-child(2)').addClass("dot_chosen");
	}
	else if(vw <= -100) {
		cardbook.style.transform = "translateX(0vw)";
		$('#__Page1__dot:nth-child(2)').removeClass("dot_chosen");
		$('#__Page1__dot:nth-child(1)').addClass("dot_chosen");
	}
}

function handleClick() { console.log('click'); }
function handleLong()  { console.log('long'); }
function handleLeft()  { console.log('left');  moveElementLeft(); }
function handleRight() { console.log('right'); moveElementRight(); }

EventUtil.bindEvent(cardbook__bar, 'click', handleClick);
EventUtil.bindEvent(cardbook__bar, 'longpress', handleLong);
EventUtil.bindEvent(cardbook__bar, 'swipeLeft', handleLeft);
EventUtil.bindEvent(cardbook__bar, 'swipeRight', handleRight);

$("#imgUpload").click(function(){
	$("#__Page2__photoMode__container").toggleClass("dark-page");
});


/*
function add_checkbox(){ 
	var container = document.getElementById("__Page6__bill__container");
	
	var checkboxs = document.createElement("input");
	checkboxs.type = "checkbox";
	checkboxs.id = "__Page6__bill_content";
	checkboxs.onclick = function(){
	}
	var label = document.createElement("label");
	label.id = "delete_id";
	label.classList.add("__Page6__bill_check");
	var br = document.createElement("br");
	container.appendChild(label);
	label.appendChild(checkboxs);
	label.appendChild(document.createTextNode("4/31 COCO"+price));
	label.appendChild(br);
	price++;
}*/

var page6_item_number = 6;  /*?????????????????????5??? ??????????????????6*/
var page6_item_date = "????????????";
var page6_item_cost = "$8888";
function add_checkbox2(){   /*the page6 : ???????????????*/
	var container = document.getElementById("__Page6__bill__container");
	
	var checkboxs = document.createElement("div");
	checkboxs.id = "__Page6__bill_content2 " + page6_item_number;
	checkboxs.classList.add("__Page6__bill_content2");
	// initialize
	var label = document.createElement("label");
	label.id = "delete_id";
	label.classList.add("__Page6__bill_check");
	label.onclick = function() {
		change_checkbox_color(this.firstChild.id);
	};

	var br = document.createElement("br");
	
	container.appendChild(label);
	label.appendChild(checkboxs);
	label.appendChild(document.createTextNode(page6_item_date +" "+page6_item_cost));  	/* this need to edit  (var page6_item_date  page6_item_cost)  */
	label.appendChild(br);
	page6_item_number++;
}

var person_number = 0;  /*?????????????????????????????????*/
var person_name = "??????";
var person_needprice = "666"; /*????????????????????????*/
function add_checkbox_person(){   /*the page18 : ????????????????????????  ????????????:person_name???person_needprice*/
	var container = document.getElementById("__Page18__personcheck__container");
	
	var checkboxs = document.createElement("div");
	checkboxs.id = "__Page18__bill_content2 " + (person_number+1);
	checkboxs.classList.add("__Page18__bill_content2");
	// initialize
	var label = document.createElement("label");
	label.id = "delete_id";
	label.classList.add("__Page18__bill_check");
	label.onclick = function() {
		change_checkbox_color(this.firstChild.id);
	};

	var br = document.createElement("br");
	
	container.appendChild(label);
	label.appendChild(checkboxs);
	label.appendChild(document.createTextNode(person_name +" "+ person_needprice));  	/* this need to edit  (var page6_item_date  page6_item_cost)  */
	label.appendChild(br);
	person_number++;
}

function delete_checkbox_person(){
	var delete_parentnode = document.getElementById("__Page18__personcheck__container");
	console.log("person_number: " +person_number);
	
	for(i=1;i<=person_number;i++){
		console.log("delete_parentnode.lastChild: " +delete_parentnode.lastChild);
		delete_parentnode.removeChild(delete_parentnode.lastChild);
		console.log("MEOW");
	}
	person_number = 0;
}


function change_checkbox_color(this_id){
	if (document.getElementById(this_id).style.backgroundColor == 'rgb(107, 220, 255)') {
        document.getElementById(this_id).style.backgroundColor = '#FFFFFF';
    }else{
		__Page18__worditem = document.getElementById(this_id).parentNode.innerText ; 
		document.getElementById(this_id).style.backgroundColor = '#6BDCFF';
	}
}


function lock_checkbox(){
	for(i=1;i<=person_number;i++){
		if (document.getElementById("__Page18__bill_content2 "+ String(i)).style.backgroundColor == 'rgb(107, 220, 255)') {
			document.getElementById("__Page18__bill_content2 "+ String(i)).style.backgroundColor = '#C4C4C4';
			document.getElementById("__Page18__bill_content2 "+ String(i)).style.border = "4.5px solid #C4C4C4";
			document.getElementById("__Page18__bill_content2 "+ String(i)).parentNode.style.color = '#C4C4C4';
			document.getElementById("__Page18__bill_content2 "+ String(i)).parentNode.onclick = function(){};
		}
	}
}

var pocket_person_number = 3; /*????????????????????????*/
var page16_person_number = 1;
function add_person(){  //page16 ????????????
	var container = document.getElementById("__Page16__teammate__container");
	var label = document.createElement("label");
	label.id = "delete_id";
	label.classList.add("__Page16__teammatename");
??????var img = document.createElement("img");
??????img.classList.add("__Page16__userimg");
??????img.src = "./icon/team2.png";													/*  this need to edit  ????????????  */
	container.appendChild(label);
	label.appendChild(img);
	label.appendChild(document.createTextNode("BRYAN")); 							/*  this need to edit  ????????????  */

}	

function add_notification(){
	var container = document.getElementById("__Page7__inform__bar");
	var label = document.createElement("label");
	label.id = "delete_id";
	label.classList.add("__Page7__inform");
	var br = document.createElement('br');
	container.appendChild(label);
	label.appendChild(document.createTextNode("5/13 ???????????????????????????"));
	label.appendChild(br);

}	
/*
function delete_checkbox(){
	var delete_item = document.getElementById("delete_id");
	var inputParent = delete_item.parentNode;
    inputParent.removeChild(delete_item);
}	*/

function yes_checkbill(n){ // n=1 means change to ?????? page,0 means restore the page ,2 means change to ?????? page
	var text_content = document.getElementById("__Page18__bill_word");
	var check_bar = document.getElementById("__Page18__result__container");
	var check_bar2 = document.getElementById("__Page18__result2__container");
	var check_bar3 = document.getElementById("__Page18__result3__container");
	var funnypicture = document.getElementById("__Page18__result3-2__container");
	var bill__container = document.getElementById("__Page18__bill__container");
	var personcheck__container = document.getElementById("__Page18__personcheck__container");
	
	if(n==1){
		var check_text = "??????????????????";
		check_bar.style.display = "none";
		check_bar2.style.display = "flex";
		check_bar3.style.display = "none";
		funnypicture.style.display = "none";
	}else if(n==0){
		var check_text = "????????????";
		check_bar.style.display = "flex";
		check_bar2.style.display = "none";
		check_bar3.style.display = "none";
		funnypicture.style.display = "none";
		bill__container.style.display = "flex";
		personcheck__container.style.display = "block";
	}else if(n==2){
		var check_text = "??????";
		check_bar.style.display = "none";
		check_bar2.style.display = "none";
		check_bar3.style.display = "flex";
		funnypicture.style.display = "flex";
		bill__container.style.display = "none";
		personcheck__container.style.display = "none";
	}
	text_content.innerHTML=check_text;
}

function update_checkbill(){
	var check_text = "????????????<br>?????????????????????????????????<br>(APP??????????????????????????????????????????APP??????)";
	var text_content = document.getElementById("__Page18__bill_word");
	var check_bar = document.getElementById("__Page18__result__container");
	text_content.innerHTML=check_text;
	check_bar.style.display = "flex";
}

function menu_openorclose(choose){ /*if mouse touchs the home star,the star will light and show it's name*/
	var __Page__menu__bar = document.getElementById('__Page__menu__bar'); 	
	checkbill_close=1;
	checkbill_openorclose();
	if(choose==0){ //0 means open menu 1 means close menu
		__Page__menu__bar.style.transform = "translate(70vw ,0)";
	}else{__Page__menu__bar.style.transform = "translate(0 ,0)";}
}

function checkbill_openorclose(){ /*if mouse touchs the home star,the star will light and show it's name*/
	var __Page7__bottomimg = document.getElementById('__Page7__bottomimg');
	var __Page7__bottomimg2 = document.getElementById('__Page7__bottomimg2');
	var __Page7__bottomimg3 = document.getElementById('__Page7__bottomimg3');  
	if(checkbill_close==0){ //0 means open menu 1 means close menu
		/*__Page7__bottomimg.style.transform = "rotate(90deg)";*/
		__Page7__bottomimg.style.backgroundColor = '#C4C4C4';
		__Page7__bottomimg2.style.transform = "translate(-8vh ,-8vh)";
		__Page7__bottomimg3.style.transform = "translate(8vh ,-8vh)";
		
		checkbill_close=1;
	}else{
		/*__Page7__bottomimg.style.transform = "rotate(0deg)";*/
		__Page7__bottomimg.style.backgroundColor = '#FFF333';
		__Page7__bottomimg2.style.transform = "translate(0 ,0)";
		__Page7__bottomimg3.style.transform = "translate(0 ,0)";
		checkbill_close=0;
 }
}
/*
function add_notificationimg(){
	var container = document.getElementById("__Page7__inform");
	var label = document.createElement("label");
	label.id = "delete_id";
	label.classList.add("__Page7__informphoto");	
	var img = document.createElement("img");
	img.id = "__Page7__informimg";
	img.src = "./midterm_photo/Frame 190.png";
	container.insertBefore(label,container.firstChild);
	label.appendChild(img);
}*/

var moneyy = 3260;
function add_notification(){
	var container = document.getElementById("__Page7__inform");
	var label = document.createElement("label");
	label.id = "delete_id";
	label.classList.add("__Page7__informphoto");
	
	var __Page7__informphoto = document.createElement("div");
	__Page7__informphoto.id = "__Page7__informphoto";
	
	var img = document.createElement("img");
	img.setAttribute('class', '__Page7__informphotoimg');
	img.src = "./midterm_photo/ppl-07.png";                           				/*  this need to edit  the photo position*/
	
	var __Page7__informtext = document.createElement("div");
	__Page7__informtext.id = "__Page7__informtext";
	var __Page7__informtextmoney = document.createElement('P');
	__Page7__informtextmoney.setAttribute('class', '__Page7__informtextmoney');
	__Page7__informtextmoney.textContent = "$" + moneyy;							/*  this need to edit   the cost*/
	var __Page7__informtextquote = document.createElement('P');
	__Page7__informtextquote.setAttribute('class', '__Page7__informtextquote');
	__Page7__informtextquote.textContent = '?????????????????????????????????';				/*  this need to edit  the item add*/
	
	var __Page7__informtime = document.createElement("div");
	__Page7__informtime.id = "__Page7__informtime";
	var __Page7__informdate = document.createElement('P');
	__Page7__informdate.setAttribute('class', '__Page7__informdate');
	__Page7__informdate.textContent = '5/26';										/*  this need to edit  the current date*/
	
	
	
	container.insertBefore(label,container.firstChild);
	label.appendChild(__Page7__informphoto);
	__Page7__informphoto.appendChild(img);
	label.appendChild(__Page7__informtext);
	__Page7__informtext.appendChild(__Page7__informtextmoney);
	__Page7__informtext.appendChild(__Page7__informtextquote);
	label.appendChild(__Page7__informtime);
	__Page7__informtime.appendChild(__Page7__informdate);
	

	moneyy++;
}	

/*add*/
function delete_notification(){
	var delete_parentnode = document.getElementById("__Page7__inform");
	delete_parentnode.removeChild(delete_parentnode.lastChild);
}


var __Page18__worditem = "4????????????$3260";
function edit__Page18__bill_word(){
	var container = document.getElementById("__Page18__bill_word2");
	container.innerHTML= __Page18__worditem;								/*  ????????????????????? ??????????????????????????????????????????????????????var __Page18__worditem???  */
	/*page6to18_personadd();*/
	page6to18_personadd();
}


function page6to18_personadd(){   /*??????????????????function*/ 
	delete_checkbox_person();
	for(i=1;i<=3;i++){ 														/*  this need to edit ???????????????????????????3????????????????????????????????????????????????*/
		add_checkbox_person();
	}
}

function copy_inviteid(){   /*??????????????????function*/ 
	console.log("yes");
	var text_id = document.getElementById("__Page16__inviteid").innerText;
	var container = document.getElementById("__Page16__inviteid2");
	container.value = text_id;
	console.log("text_id: "+text_id);
	container.select();
	document.execCommand("copy");
}



function firstadds(){
	page38__delete_people();
	for(var i=0;i<4;i++){
			add_equalmode_person(i+1,1);
		}
}
function Page37__checkadds(){
	page37__delete_people();
	for(var i=0;i<4;i++){
			add_equalmode_person(i+1,3);
		}
}

function Page62__adds(page){
	page62__delete_people();
	var next = document.getElementById("__Page62__next");
	page62__notification(2);
	if(page==1){
		next.onclick = function() {
			page62__changenotification(1);
			page62__notification(1);
			
		};
	}
	else{
		next.onclick = function() {
			page62__changenotification(2);
			page62__notification(1);
			
		};
	}
	for(var i=0;i<4;i++){
			add_realcostmode_person(2,i+1);
		}
}
function Page62__checkadds(){
	var next = document.getElementById("__Page62__next");
	next.onclick = function() {
		Page62__adds(2);
	};
	
	page62__delete_people();
	for(var i=0;i<4;i++){
			add_equalmode_person(i+1,2);
		}
}




function choose_type(thistype_id){
	var type1 = document.getElementById("__Page38__addtype__bar");
	var typeimg = document.getElementById("__Page38__typeimg");
	var type2 = document.getElementById("__Page38__percenttype__bar");
	var typeimg2 = document.getElementById("__Page38__typeimg2");
	var type3 = document.getElementById("__Page38__realcosttype__bar");
	var typeimg3 = document.getElementById("__Page38__typeimg3");
	var type4 = document.getElementById("__Page38__additionalcosttype__bar");
	var typeimg4 = document.getElementById("__Page38__typeimg4");
	var text1 = document.getElementById("__Page38__paytypetext");
	var text2 = document.getElementById("__Page38__paytypetext2");
	var text3 = document.getElementById("__Page38__costtotal1");
	var text4 = document.getElementById("__Page38__costtotal2");
	var text5 = document.getElementById("__Page38__costtotal3");
	
	
	type1.style.border = "0px solid #000000";
	type1.style.backgroundColor = "#FFFFFF";
	typeimg.style.filter = "invert(50%)";
	type2.style.border = "0px solid #000000";
	type2.style.backgroundColor = "#FFFFFF";
	typeimg2.style.filter = "invert(50%)";
	type3.style.border = "0px solid #000000";
	type3.style.backgroundColor = "#FFFFFF";
	typeimg3.style.filter = "invert(50%)";
	type4.style.border = "0px solid #000000";
	type4.style.backgroundColor = "#FFFFFF";
	typeimg4.style.filter = "invert(50%)";
	
	console.log("document.getElementById(thistype_id): "+document.getElementById("thistype_id"));
	console.log("this.id: "+thistype_id);
	console.log(thistype_id.includes("percent"));
	document.getElementById(thistype_id).style.border = "3px solid #000000";
	document.getElementById(thistype_id).style.backgroundColor = "#FFF333";
	
	page38__delete_people();
	
	
	if(thistype_id.includes("addtype")){
		text1.innerText = '??????';
		text2.innerText = '??????????????????????????????';
		text3.innerText = '???????????? $';
		text4.innerText = '0.00';
		text5.innerText = '';
		typeimg.style.filter = "invert(0%)";
		for(var i=0;i<equalpeople;i++){
			add_equalmode_person(i+1,1);
		}
	}
	
	if(thistype_id.includes("percent")){
		text1.innerText = '??????';
		text2.innerText = '?????????????????????????????????';
		text3.innerText = '?????????\xa0';
		text4.innerText = '0.0';
		text5.innerText = '\xa0%';
		typeimg2.style.filter = "invert(0%)";
		for(var i=0;i<equalpeople;i++){
			add_percentagemode_person(i+1);
		}
	}
	
	if(thistype_id.includes("real")){
		text1.innerText = '????????????';
		text2.innerText = '???????????????????????????????????????';
		text3.innerText = '?????????  $\xa0';
		text4.innerText = '0.00';
		text5.innerText = '';
		typeimg3.style.filter = "invert(0%)";
		for(var i=0;i<equalpeople;i++){
			add_realcostmode_person(1,i+1);
		}
	}
	
	if(thistype_id.includes("additional")){
		text1.innerText = '????????????';
		text2.innerText = '??????????????????????????????';
		text3.innerText = '';
		text4.innerText = '';
		text5.innerText = '';
		typeimg4.style.filter = "invert(0%)";
		for(var i=0;i<equalpeople;i++){
			add_additionalcostmode_person(i+1);
		}
	}
	/*
	border: 0px solid #000000;
	background-color: #FFFFFF;
	
	border: 3px solid #000000;
	background-color: #FFF333;*/
}







var equalpeople = 4;
function add_equalmode_person(number,page){   /*the page18 : ????????????????????????  ????????????:person_name???person_needprice*/
	var arrname = ["??????", "??????", "??????", "??????"];
	if(page==1){
		var pages = "__Page38__";
		var container = document.getElementById("__Page38__people__container");
	}else if(page==2){
		var pages = "__Page62__";
		var container = document.getElementById("__Page62__people__container");
	}else if(page==3){
		var pages = "__Page37__";
		var container = document.getElementById("__Page37__people__container");
	}
	
	var photo = document.createElement("div");
	photo.id = "__Page38__informphoto";
	var img = document.createElement("img");
??????img.classList.add("__Page38__informphotoimg");
??????img.src = `./midterm_photo/ppl-${number == 4 ? '10' : '0' + (number+6).toString()}.png`;	
	photo.appendChild(img);
	
	var peoplename = document.createElement("div");
	peoplename.id = "__Page38__peoplename__bar";
	var __Page38__peoplename = document.createElement('P');
	__Page38__peoplename.setAttribute('class', '__Page38__peoplename');
	__Page38__peoplename.textContent = arrname[number-1];
	peoplename.appendChild(__Page38__peoplename);
	
	var calculate = document.createElement("div");
??????calculate.id = "__Page38__calculate__bar";
	var equal = document.createElement("div");
??????equal.id = pages+"equal "+number;
	equal.classList.add("__Page38__equal");
/*	
	var equals = document.createElement("div");
??????equals.id = "__Page38__equals";
	var img2 = document.createElement("img");
??????img2.classList.add("__Page38__equal_check");
	img2.id = "__Page38__equal_check";
??????img2.src = "./midterm_icon/yes.png";	
	equal.appendChild(equals);
	equals.appendChild(img2);
*/
	calculate.appendChild(equal);
	equal.onclick = function() {
		change_equalcheckbox_color(this.id);
	};
	
	// initialize
	var label = document.createElement("label");
	label.id = "delete_id";
	label.classList.add("__Page38__peoplepay");
	
	var decorate = document.createElement("div");
??????decorate.id = "__Page38__decorate2__container";
	
	container.appendChild(label);
	container.appendChild(decorate);
	
	label.appendChild(photo);
	label.appendChild(peoplename);  	/* this need to edit  (var page6_item_date  page6_item_cost)  */
	label.appendChild(calculate);
	
	/*
	container.insertBefore(decorate,container.firstChild);
	container.insertBefore(label,container.firstChild);
	*/
}













function change_equalcheckbox_color(this_id){
	console.log("document.getElementById(this_id): " + document.getElementById(this_id));
	console.log("document.getElementById(this_id).style.backgroundColor: " + document.getElementById(this_id).style.backgroundColor);
	console.log("document.getElementById(this_id).Firstchild: " + document.getElementById(this_id).Firstchild);
	if (document.getElementById(this_id).style.backgroundColor == "rgb(73, 73, 73)") {
        document.getElementById(this_id).style.backgroundColor = '#FFFFFF';
		
		document.getElementById(this_id).innerHTML = "";
		/*document.getElementById(this_id).removeChild(document.getElementById(this_id.child));*/
		

    }else{
		
		document.getElementById(this_id).style.backgroundColor = '#494949';
		
		
		var equals = document.createElement("div");
??????	equals.id = "__Page38__equals";
		var img2 = document.createElement("img");
??????	img2.classList.add("__Page38__equal_check");
		img2.id = "__Page38__equal_check";
??????	img2.src = "./midterm_icon/yes.png";	
		equals.appendChild(img2);
		document.getElementById(this_id).appendChild(equals);
		
	}
}

/*
<img class="__Page38__equal_check" id="__Page38__equal_check" src="./midterm_icon/yes.png" alt="check">
*/
/*
<input class="__Page38__percentage" type="text" inputmode="decimal" placeholder="0.00">
*/


function add_percentagemode_person(number){   /*the page18 : ????????????????????????  ????????????:person_name???person_needprice*/
	var arrname = ["??????", "??????", "??????", "??????"];
	var container = document.getElementById("__Page38__people__container");
	
	var photo = document.createElement("div");
	photo.id = "__Page38__informphoto";
	var img = document.createElement("img");
??????img.classList.add("__Page38__informphotoimg");
	img.src = `./midterm_photo/ppl-${number == 4 ? '10' : '0' + (number+6).toString()}.png`;
	photo.appendChild(img);
	
	var peoplename = document.createElement("div");
	peoplename.id = "__Page38__peoplename__bar";
	var __Page38__peoplename = document.createElement('P');
	__Page38__peoplename.setAttribute('class', '__Page38__peoplename');
	__Page38__peoplename.textContent = arrname[number-1];
	peoplename.appendChild(__Page38__peoplename);
	
	var calculate = document.createElement("div");
??????calculate.id = "__Page38__calculate__bar";
	var percentage = document.createElement("div");
??????percentage.id = "__Page38__calculate_percentage";


	var __Page38__percentage = document.createElement('input');
	__Page38__percentage.setAttribute('class', '__Page38__percentage');
	__Page38__percentage.type = "text";
	__Page38__percentage.inputmode = "decimal";
	__Page38__percentage.placeholder = "0.00";
	__Page38__percentage.id = "__Page38__percentage "+number;

/*
	var __Page38__percentage = document.createElement('P');
	__Page38__percentage.setAttribute('class', '__Page38__percentage');
	__Page38__percentage.textContent = "0.00";
*/	
	
	var __Page38__percentage2 = document.createElement('P');
	__Page38__percentage2.setAttribute('class', '__Page38__percentage2');
	__Page38__percentage2.textContent = "%";
	percentage.appendChild(__Page38__percentage);
	percentage.appendChild(__Page38__percentage2);
	var percentage2 = document.createElement("div");
??????percentage2.id = "__Page38__calculate_percentage";
	var __Page38__percentage3 = document.createElement('P');
	__Page38__percentage3.setAttribute('class', '__Page38__percentage3');
	__Page38__percentage3.textContent = "= $";
	var __Page38__percentage4 = document.createElement('P');
	__Page38__percentage4.setAttribute('class', '__Page38__percentage4');
	__Page38__percentage4.textContent = "0.00";
	percentage2.appendChild(__Page38__percentage3);
	percentage2.appendChild(__Page38__percentage4);
	calculate.appendChild(percentage);
	calculate.appendChild(percentage2);
	

	
	// initialize
	var label = document.createElement("label");
	label.id = "delete_id";
	label.classList.add("__Page38__peoplepay");
	
	var decorate = document.createElement("div");
??????decorate.id = "__Page38__decorate2__container";
	
	container.appendChild(label);
	label.appendChild(photo);
	label.appendChild(peoplename);  	/* this need to edit  (var page6_item_date  page6_item_cost)  */
	label.appendChild(calculate);
	container.appendChild(decorate);
}


function add_realcostmode_person(mode,number){   /*the page18 : ????????????????????????  ????????????:person_name???person_needprice*/
	var arrname = ["??????", "??????", "??????", "??????"];
	if(mode==1){
		var container = document.getElementById("__Page38__people__container");
	}else{
		var container = document.getElementById("__Page62__people__container");
	}
	var photo = document.createElement("div");
	photo.id = "__Page38__informphoto";
	var img = document.createElement("img");
??????img.classList.add("__Page38__informphotoimg");
	img.src = `./midterm_photo/ppl-${number == 4 ? '10' : '0' + (number+6).toString()}.png`;
	photo.appendChild(img);
	
	var peoplename = document.createElement("div");
	peoplename.id = "__Page38__peoplename__bar";
	var __Page38__peoplename = document.createElement('P');
	__Page38__peoplename.setAttribute('class', '__Page38__peoplename');
	__Page38__peoplename.textContent = arrname[number-1];
	peoplename.appendChild(__Page38__peoplename);
	
	var calculate = document.createElement("div");
??????calculate.id = "__Page38__calculate__bar";
	var realcost = document.createElement("div");
??????realcost.id = "__Page38__calculate_realcost";
	var __Page38__realcost = document.createElement('P');
	__Page38__realcost.setAttribute('class', '__Page38__realcost');
	__Page38__realcost.textContent = "$\xa0";
	
/*	
	var __Page38__realcost2 = document.createElement('P');
	__Page38__realcost2.setAttribute('class', '__Page38__realcost2');
	__Page38__realcost2.textContent = "0.00";
*/	
	var __Page38__realcost2 = document.createElement('input');
	__Page38__realcost2.setAttribute('class', '__Page38__realcost2');
	__Page38__realcost2.type = "text";
	__Page38__realcost2.inputmode = "decimal";
	__Page38__realcost2.placeholder = "0.00";
	__Page38__realcost2.id = "__Page38__realcost2 "+number;
	
	
	
	realcost.appendChild(__Page38__realcost);
	realcost.appendChild(__Page38__realcost2);
	calculate.appendChild(realcost);

	
	// initialize
	var label = document.createElement("label");
	label.id = "delete_id";
	label.classList.add("__Page38__peoplepay");
	
	var decorate = document.createElement("div");
??????decorate.id = "__Page38__decorate2__container";
	
	container.appendChild(label);
	label.appendChild(photo);
	label.appendChild(peoplename);  	/* this need to edit  (var page6_item_date  page6_item_cost)  */
	label.appendChild(calculate);
	container.appendChild(decorate);
}


function add_additionalcostmode_person(number){   /*the page18 : ????????????????????????  ????????????:person_name???person_needprice*/
	var arrname = ["??????", "??????", "??????", "??????"];
	var container = document.getElementById("__Page38__people__container");
	
	var photo = document.createElement("div");
	photo.id = "__Page38__informphoto";
	var img = document.createElement("img");
??????img.classList.add("__Page38__informphotoimg");
	img.src = `./midterm_photo/ppl-${number == 4 ? '10' : '0' + (number+6).toString()}.png`;
	photo.appendChild(img);
	
	var peoplename = document.createElement("div");
	peoplename.id = "__Page38__peoplename__bar";
	var __Page38__peoplename = document.createElement('P');
	__Page38__peoplename.setAttribute('class', '__Page38__peoplename');
	__Page38__peoplename.textContent = arrname[number-1];
	peoplename.appendChild(__Page38__peoplename);
	
	var calculate = document.createElement("div");
??????calculate.id = "__Page38__calculate__bar";
	var additionalcost = document.createElement("div");
??????additionalcost.id = "__Page38__calculate_realcost";
	var __Page38__additionalcost = document.createElement('P');
	__Page38__additionalcost.setAttribute('class', '__Page38__additionalcost');
	__Page38__additionalcost.textContent = "$\xa0";
	
	var __Page38__additionalcost2 = document.createElement('input');
	__Page38__additionalcost2.setAttribute('class', '__Page38__additionalcost2');
	__Page38__additionalcost2.type = "text";
	__Page38__additionalcost2.inputmode = "decimal";
	__Page38__additionalcost2.placeholder = "0.00";
	__Page38__additionalcost2.id = "__Page38__additionalcost2 "+number;
/*
	var __Page38__additionalcost2 = document.createElement('P');
	__Page38__additionalcost2.setAttribute('class', '__Page38__additionalcost2');
	__Page38__additionalcost2.textContent = "0.00";
*/
	
	
	additionalcost.appendChild(__Page38__additionalcost);
	additionalcost.appendChild(__Page38__additionalcost2);
	var additionalcost2 = document.createElement("div");
??????additionalcost2.id = "__Page38__calculate_percentage";
	var __Page38__additionalcost3 = document.createElement('P');
	__Page38__additionalcost3.setAttribute('class', '__Page38__additionalcost3');
	__Page38__additionalcost3.textContent = "+ $\xa0";
	var __Page38__additionalcost4 = document.createElement('P');
	__Page38__additionalcost4.setAttribute('class', '__Page38__additionalcost4');
	__Page38__additionalcost4.textContent = "0.00";
	additionalcost2.appendChild(__Page38__additionalcost3);
	additionalcost2.appendChild(__Page38__additionalcost4);
	calculate.appendChild(additionalcost);
	calculate.appendChild(additionalcost2);
	

	
	// initialize
	var label = document.createElement("label");
	label.id = "delete_id";
	label.classList.add("__Page38__peoplepay");
	
	var decorate = document.createElement("div");
??????decorate.id = "__Page38__decorate2__container";
	
	container.appendChild(label);
	label.appendChild(photo);
	label.appendChild(peoplename);  	/* this need to edit  (var page6_item_date  page6_item_cost)  */
	label.appendChild(calculate);
	container.appendChild(decorate);
}

function page37__delete_people(){
	var delete_parentnode = document.getElementById("__Page37__people__container");
	delete_parentnode.innerHTML = "";
}
function page38__delete_people(){
	var delete_parentnode = document.getElementById("__Page38__people__container");
	delete_parentnode.innerHTML = "";
}
function page62__delete_people(){
	var delete_parentnode = document.getElementById("__Page62__people__container");
	delete_parentnode.innerHTML = "";
}

function page62__notification(type){
	var div = document.getElementById("__Page62__inform__container");
	if(type==1){
		div.style.display = "block";
	}else{
		div.style.display = "none";
	}
}

function page62__changenotification(type){
	var text1 = document.getElementById("__Page62__informtext1");
	var text2 = document.getElementById("__Page62__informtext2");
	var text3 = document.getElementById("__Page62__handsetting");
	var text4 = document.getElementById("__Page62__luckysetting");

	
	
	
	if(type==1){
		text1.textContent = "???????????????????????????";
		text2.textContent = "???????????????????????????????????????";
		text3.textContent = "??????????????????";
		text4.textContent = "??????????????????";
		text3.onclick = function() {
			Page62__checkadds();
			page62__notification(2);
		};
		text4.onclick = function() {
			change_page(14);
			page62__notification(2);
			page66_text_restore();
		};
	}else{
		text1.textContent = "????????? ??????????????????";
		text2.textContent = "?????????????????????????????????????????????";
		text3.textContent = "??????????????????";
		text4.textContent = "??????????????????";
		text3.onclick = function() {
			change_page(15);
		};
		text4.onclick = function() {
			change_page(8);
		};
	}
}




function page44__choose_type(thistype_id){
	var type1 = document.getElementById("__Page44__notpay__bar");
	var typetext1 = document.getElementById("__Page44__selectword1");
	var container1 = document.getElementById("__Page44__item__container");
	var type2 = document.getElementById("__Page44__needpay__bar");
	var typetext2 = document.getElementById("__Page44__selectword2");
	var container2 = document.getElementById("__Page44__needpay__container");
	var type3 = document.getElementById("__Page44__havepayed__bar");
	var typetext3 = document.getElementById("__Page44__selectword3");
	var container3 = document.getElementById("__Page44__havepayed__container");
	
	
	
	
	typetext1.style.color = "#FFFFFF";
	type1.style.backgroundColor = "#383838";
	typetext2.style.color = "#FFFFFF";
	type2.style.backgroundColor = "#383838";
	typetext3.style.color = "#FFFFFF";
	type3.style.backgroundColor = "#383838";
	

	document.getElementById(thistype_id).style.backgroundColor = "#FFFFFF";
	
	
	
	if(thistype_id.includes("notpay")){
		typetext1.style.color = "#383838";
		container1.style.display = "block";
		container2.style.display = "none";
		container3.style.display = "none";
	}
	
	if(thistype_id.includes("needpay")){
		typetext2.style.color = "#383838";
		container1.style.display = "none";
		container2.style.display = "block";
		container3.style.display = "none";
	}
	
	if(thistype_id.includes("havepayed")){
		typetext3.style.color = "#383838";
		container1.style.display = "none";
		container2.style.display = "none";
		container3.style.display = "block";
	}
	
}
























//????????????
let canvas = document.getElementById('__Page61__canvas'),
context = canvas.getContext('2d'),
OUTSIDE_RADIUAS = 130,   // ??????????????? 200
INSIDE_RADIUAS = 0,      // ???????????????????????????????????????
TEXT_RADIUAS = 104,      // ???????????????????????? 160
CENTER_X = canvas.width / 2,
CENTER_Y = canvas.height / 2,
awards = [               // ????????????????????????????????????
'??????', '??????', '??????', '??????'
],
startRadian = 0,                             // ?????????????????????????????????????????????????????????
awardRadian = (Math.PI * 2) / awards.length, // ??????????????????????????????
duration = 4000,     // ????????????
velocity = 10,       // ????????????
spinningTime = 0,    // ??????????????????
spinTotalTime,       // ??????????????????
spinningChange;      // ????????????????????????
/**
* ???????????????????????????
* @param {Num} t ????????????
* @param {Num} b ?????????
* @param {Num} c ?????????
* @param {Num} d ????????????
*/
function easeOut(t, b, c, d) {
if ((t /= d / 2) < 1) return c / 2 * t * t + b;
return -c / 2 * ((--t) * (t - 2) - 1) + b;
};
/**
* ????????????
*/
function drawRouletteWheel() {
// ----- ??? ???????????????????????????????????????
/*context.clearRect(0, 0, canvas.width, canvas.height);*/
// -----
for (let i = 0; i < awards.length; i ++) {
let _startRadian = startRadian + awardRadian * i,  // ????????????????????????????????????
_endRadian =   _startRadian + awardRadian;     // ??????????????????????????????
// ----- ??? ???????????????????????????????????????
context.save();
if (i % awards.length === 0) context.fillStyle = '#A9A9A9'
else if (i % awards.length === 1) context.fillStyle = '#C0C0C0';
else if (i % awards.length === 2) context.fillStyle = '#DCDCDC';
else if (i % awards.length === 3) context.fillStyle = '#F0EFEF';
context.beginPath();
context.arc(canvas.width / 2, canvas.height / 2, OUTSIDE_RADIUAS, _startRadian, _endRadian, false);
context.arc(canvas.width / 2, canvas.height / 2, INSIDE_RADIUAS, _endRadian, _startRadian, true);
context.fill();
context.restore();
// -----
// ----- ??? ????????????
context.save();
context.font = 'bold 16px Helvetica, Arial';
context.fillStyle = '#000000';
context.translate(
CENTER_X + Math.cos(_startRadian + awardRadian / 2) * TEXT_RADIUAS,
CENTER_Y + Math.sin(_startRadian + awardRadian / 2) * TEXT_RADIUAS
);
context.rotate(_startRadian + awardRadian / 2 + Math.PI / 2);
context.fillText(awards[i], -context.measureText(awards[i]).width / 2, 0);
context.restore();
// -----
}
// ----- ??? ????????????


/*
context.save();


context.beginPath();
context.moveTo(CENTER_X, CENTER_Y - OUTSIDE_RADIUAS + 8);
context.lineTo(CENTER_X - 10, CENTER_Y - OUTSIDE_RADIUAS);
context.lineTo(CENTER_X - 4, CENTER_Y - OUTSIDE_RADIUAS);
context.lineTo(CENTER_X - 4, CENTER_Y - OUTSIDE_RADIUAS - 10);
context.lineTo(CENTER_X + 4, CENTER_Y - OUTSIDE_RADIUAS - 10);
context.lineTo(CENTER_X + 4, CENTER_Y - OUTSIDE_RADIUAS);
context.lineTo(CENTER_X + 10, CENTER_Y - OUTSIDE_RADIUAS);
context.closePath();
context.fill();
context.restore();
*/

// -----
}
/**
* ????????????
*/
function rotateWheel() {
// ??? ???????????? ?????? ?????????????????????????????????????????????
spinningTime += 20;
if (spinningTime >= spinTotalTime) {

page69__change(getValue());		
setTimeout("page66_text_edit(getValue())", 500 ); return
/*page66_text_edit(getValue()); return*/

/*console.log(getValue()); return*/
}
let _spinningChange = (spinningChange - easeOut(spinningTime, 0, spinningChange, spinTotalTime)) * (Math.PI / 180);
startRadian += _spinningChange
drawRouletteWheel();
window.requestAnimationFrame(rotateWheel);
}
/**
* ????????????????????????
*/
function getValue() {
let startAngle = startRadian * 180 / Math.PI,       // ?????????????????????
awardAngle = awardRadian * 180 / Math.PI,
pointerAngle = 90,                              // ?????????????????????????????????????????????????????????????????????
overAngle = (startAngle + pointerAngle) % 360,  // ????????????????????????????????????????????????????????????????????????????????????????????????????????????360???????????????????????
restAngle = 360 - overAngle,                    // 360????????????????????????????????????????????????????????
index = Math.floor(restAngle / awardAngle);     // ?????????????????? ?????? ???????????????????????????????????????????????????????????????
return awards[index];
}
window.onload = function(e) {
drawRouletteWheel();
}
document.getElementById('spin_button').addEventListener('click', () => {
spinningTime = 0;                                // ?????????????????????
spinTotalTime = Math.random() * 3 + duration;    // ??????????????????????????????
spinningChange = Math.random() * 10 + velocity;  // ???????????????????????????
rotateWheel();
})


function page66_text_restore(){
	var text1 = document.getElementById("__Page61__costtotal1");
	var notification = document.getElementById("__Page61__inform__container");
	notification.style.display = "none";
	text1.innerText = "?????? $";
}
function page66_text_edit(name){
	var text1 = document.getElementById("__Page61__costtotal1");
	var text2 = document.getElementById("__Page61__informtext1");
	var notification = document.getElementById("__Page61__inform__container");
	
	
	notification.style.display = "block";
	text1.style.color = "#FFA500";
	text1.innerText = name +"\xa0+";
	text2.innerText = "??????\xa0"+ name+ "\xa0???????????????????????????";
}

function page47__rotatecard(){
	
	var front = document.getElementById("__Page47__cardfront__bar");
	var back = document.getElementById("__Page47__cardback__bar");
	var notification = document.getElementById("__Page47__informnotification__container");
	back.style.transform = "rotatey(180deg)";
	front.style.transform = "rotatey(0deg)";
	notification.style.display = "block";

	setTimeout("page47__open()", 2500 );
}
function page47__open(){
	var notification = document.getElementById("__Page47__informnotification__container");
	/*
	var html__fullscreen = document.getElementById("html__fullscreen");
	html__fullscreen.style.filter = "brightness(50%)";
	notification.style.filter = "brightness(100%)";	
	$('#html__fullscreen').not('#__Page47__informnotification__container').css('-webkit-filter', 'brightness(50%)');
	*/
	notification.style.transform = "rotatey(0deg)";
}
function page47__restore(){
	var front = document.getElementById("__Page47__cardfront__bar");
	var back = document.getElementById("__Page47__cardback__bar");
	var notification = document.getElementById("__Page47__informnotification__container");
	/*var html__fullscreen = document.getElementById("html__fullscreen");
	html__fullscreen.style.filter = "brightness(100%)";*/
	back.style.transform = "rotatey(0deg)";
	front.style.transform = "rotatey(-180deg)";
	notification.style.transform = "rotatey(-90deg)";
	notification.style.display = "none";
	
}

function page44__dateupdate(thistype_id){
	var year = document.getElementById("__Page44__dateyear");
	var month = document.getElementById("__Page44__month");
	var decimal_year = parseInt(year.innerText, 10);
	var decimal_month = parseInt(month.innerText, 10);
	if(thistype_id.includes("left")){
		decimal_month--;
	}
	if(thistype_id.includes("right")){
		decimal_month++;
	}
	if(decimal_month>12){
		month.innerText="0"+(decimal_month-12);
		year.innerText=(decimal_year+1);
	}else if(decimal_month>9){
		month.innerText=(decimal_month);
	}else if(decimal_month<1){
		month.innerText=(decimal_month+12);
		year.innerText=(decimal_year-1);
	}else{
		month.innerText="0"+(decimal_month);
	}
}



function page62__notification2(type){
	var div = document.getElementById("__Page62__inform__container");
	if(type==1){
		div.style.display = "block";
	}else{
		div.style.display = "none";
	}
}

function page69__notification2(type){
	var div = document.getElementById("__Page69__inform__container");
	if(type==1){
		div.style.display = "block";
	}else{
		div.style.display = "none";
	}
}

function page61__notification2(type){
	var div = document.getElementById("__Page61__inform__container");
	if(type==1){
		div.style.display = "block";
	}else{
		div.style.display = "none";
	}
}
function page69__change(name){
	
	var typetext1 = document.getElementById("__Page69__realcost2 1");
	var typetext2 = document.getElementById("__Page69__realcost2 2");
	var typetext3 = document.getElementById("__Page69__realcost2 3");
	var typetext4 = document.getElementById("__Page69__realcost2 4");
	var typetotalcost = document.getElementById("__Page69__costtotal2");
	
	typetext1.placeholder = "508";
	typetext1.style.color = "#494949";
	typetext2.placeholder = "508";
	typetext2.style.color = "#494949";
	typetext3.placeholder = "508";
	typetext3.style.color = "#494949";
	typetext4.placeholder = "508";
	typetext4.style.color = "#494949";
	/*typetotalcost.innerText = '0.00';*/
	typetotalcost.style.color = "#494949";
	
	
	if(name.includes("??????")){
		typetext1.placeholder = "509";
		typetext1.placeholder.color = "#FFA500";
	}
	if(name.includes("??????")){
		typetext2.placeholder = "509";
		typetext2.placeholder.color = "#FFA500";
	}
	if(name.includes("??????")){
		typetext3.placeholder = "509";
		typetext3.placeholder.color = "#FFA500";
	}
	if(name.includes("??????")){
		typetext4.placeholder = "509";
		typetext4.placeholder.color = "#FFA500";
	}
	
}