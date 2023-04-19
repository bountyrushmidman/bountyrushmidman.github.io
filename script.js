class Member {
  constructor (name, description, img, contact) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.contact = contact; 
  }
}

var Raditama = new Member("RADITAMA SENJA", "<span style='font-weight: bolder;'> Languages:</span> English, Indonesian.<br><span style='font-weight: bolder;'> Currency:</span> USD, IDR <br><br><p style='margin-left:-50%'> Raditama, also known as the 'beast dealer', is the person you would like to get in touch with if you are looking for a hyper beast account that can take you to top rank. 11 EX? 12 EX? Full EX? Zoro and Big Mom combo with 100+ Hyperboost? He got them all ! Additionally, Raditama also offer midman service, so just hit the button below and have contact with him.</p>", "raditama.jpg", "window.location.href='https://www.facebook.com/raditama.wind?mibextid=LQQJ4d'");

var Labrie = new Member("LABRIE", "<span style='font-weight: bolder;'> Languages:</span> English, Indonesian.<br><span style='font-weight: bolder;'> Currency:</span> USD, IDR <br><br><p style='margin-left:-50%'>Being one of the most trusted midman globally, Labrie is your choice when needing a midman that 99% of the community will accept. On time, professional and reliable, your transaction could never go wrong when coporating with Labrie. Additionally, he is also a trusted dealer with a wide range of luxurious account, so if you feel like needing a beast one, just click the button below and connect with him now !.</p>", "labrie.jpg", "window.location.href='https://www.facebook.com/labrie.labrie.397?mibextid=LQQJ4d'");

var TruongCuong = new Member("TRUONG CUONG", "<span style='font-weight: bolder;'> Languages:</span> English, Vietnamese.<br><span style='font-weight: bolder;'> Currency:</span> USD, VND <br><br><p style='margin-left: -50%'>Looking for some low-price and affordable deals and services? Truong Cuong is here for you. Besides a reasonable service, Truong Cuong also have an arsenal of cheap accounts that will suit your pocket when you just need some account to play for fun - but fear not, those accounts are still top quality. Therefore, if you are in need for a pocket price service, just click the button below and have a talk, shall we?</p>", "truongcuong.jpg", "window.location.href='https://www.facebook.com/TruongCuongReal?mibextid=LQQJ4d'");

var Kawaki = new Member("KAWAKI RASENGAN", "<span style='font-weight: bolder;'> Languages:</span> English<br><span style='font-weight: bolder;'> Currency:</span> USD <br><br><p style='margin-left: -50%'>Pending Description.</p>", "kawaki.jpg",  "window.location.href='https://www.facebook.com/kawaki.rasengan?mibextid=LQQJ4d'");

var Likhasit = new Member("LIKHASIT YAMSUTTUM", "<span style='font-weight: bolder;'> Languages:</span> English, Thai.<br><span style='font-weight: bolder;'> Currency:</span> USD, THB <br><br><p style='margin-left: -50%'>Pending Description.</p>", "likha.jpg", "window.location.href='https://www.facebook.com/jaffhangrok?mibextid=LQQJ4d'");

var me = new Member("KHANH LE", "<span style='font-weight: bolder;'> Languages:</span> English, Vietnamese.<br><span style='font-weight: bolder;'> Currency:</span> USD, CAD <br><br><p style='margin-left: -50%'>Pending Description.</p>", "me.jpg", "window.location.href='https://www.facebook.com/LHK.Aslf?mibextid=LQQJ4d'");

var members = [Likhasit, Labrie, TruongCuong, Raditama, Kawaki, me];

var currentPage = "starting";

function showUp(parameter) {
  document.getElementById(currentPage).style.display = "none";
document.getElementById(parameter).style.display = "block";
currentPage = parameter;
}

function showMember(parameter) {

document.getElementById("memberIcon").src = members[parameter].img;
document.getElementById("information").style.display = "block";
document.getElementById("memName").innerHTML = members[parameter].name;
document.getElementById("description").innerHTML = members[parameter].description;
document.getElementById("memName1").innerHTML = members[parameter].name;
document.getElementById("contactThem").setAttribute("onClick", members[parameter].contact);

}

var splashScreen = document.querySelector(".splashPage");

document.addEventListener("DOMContentLoaded", (e)=>{
  setTimeout(()=>{
    splashScreen.classList.add("display-none");
  }, 2500);
});
