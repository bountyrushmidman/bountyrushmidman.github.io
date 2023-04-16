class Member {
  constructor (name, description, img, contact) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.contact = contact; 
  }
}

var Raditama = new Member("RADITAMA SENJA", "<span style='font-weight: bolder;'> Languages:</span> English, Indonesian.<br><span style='font-weight: bolder;'> Currency:</span> USD, IDR <br><br><span style='margin-left: -50%'>Pending Description.</span>", "raditama.jpg", "window.location.href='https://www.facebook.com/raditama.wind?mibextid=LQQJ4d'");

var Labrie = new Member("LABRIE", "<span style='font-weight: bolder;'> Languages:</span> English, Indonesian.<br><span style='font-weight: bolder;'> Currency:</span> USD, IDR <br><br><span style='margin-left: -50%'>Pending Description.</span>", "labrie.jpg", "window.location.href='https://www.facebook.com/labrie.labrie.397?mibextid=LQQJ4d'");

var TruongCuong = new Member("TRUONG CUONG", "<span style='font-weight: bolder;'> Languages:</span> English, Vietnamese.<br><span style='font-weight: bolder;'> Currency:</span> USD, VND <br><br><span style='margin-left: -50%'>Pending Description.</span>", "truongcuong.jpg", "window.location.href='https://www.facebook.com/TruongCuongReal?mibextid=LQQJ4d'");

var Kawaki = new Member("KAWAKI RASENGAN", "<span style='font-weight: bolder;'> Languages:</span> English<br><span style='font-weight: bolder;'> Currency:</span> USD <br><br><span style='margin-left: -50%'>Pending Description.</span>", "kawaki.jpg",  "window.location.href='https://www.facebook.com/kawaki.rasengan?mibextid=LQQJ4d'");

var Likhasit = new Member("LIKHASIT YAMSUTTUM", "<span style='font-weight: bolder;'> Languages:</span> English, Thai.<br><span style='font-weight: bolder;'> Currency:</span> USD, THB <br><br><span style='margin-left: -50%'>Pending Description.</span>", "likha.jpg", "window.location.href='https://www.facebook.com/jaffhangrok?mibextid=LQQJ4d'");

var me = new Member("KHANH LE", "<span style='font-weight: bolder;'> Languages:</span> English, Vietnamese.<br><span style='font-weight: bolder;'> Currency:</span> USD, CAD <br><br><span style='margin-left: -50%'>Pending Description.</span>", "me.jpg", "window.location.href='https://www.facebook.com/LHK.Aslf?mibextid=LQQJ4d'");

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