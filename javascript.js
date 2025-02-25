

// Download resum
function resum(){
    window.open('IMG\\Resum.pdf', '_blank');
}
// Here mi now 


// Experience link is start
// experience link
function exp(){
    window.open("IMG\\experience.pdf", '_blank');
}
// project link 
function pro(){
    window.open("IMG\\Project.pdf", '_blank');
}




// Education link is start
// 10 class mark seat
document.getElementById("ten").addEventListener("click", function() {
    window.open("IMG\\tenclass.pdf", "_blank");
});
// 12 class markseat
document.getElementById("two").addEventListener("click", function() {
    window.open('IMG\\twoclass.pdf', '_blank');
});
// BE mark seat
document.getElementById("Be").addEventListener("click", function() {
    window.open("IMG\\Se result.pdf", '_blank');
});







// Project link is start
// my portfiol
document.getElementById("image1").onclick = function() {
    window.open("https://markandebhausaheb.netlify.app/", "_blank");
};
document.getElementById("image7").onclick = function() {
    window.open("https://markandebhausaheb.netlify.app/", "_blank");
};
// E-commerce link
document.getElementById("image2").onclick = function() {
    window.open("https://e-commerceblinkit.netlify.app/", "_blank");
};
document.getElementById("image8").onclick = function() {
    window.open("https://e-commerceblinkit.netlify.app/", "_blank");
};
// Gym Site link
document.getElementById("image3").onclick = function() {
    window.open("https://wwwgymfitness.netlify.app/", "_blank");
};
document.getElementById("image9").onclick = function() {
    window.open("https://wwwgymfitness.netlify.app/", "_blank");
};
// calculator link
document.getElementById("image4").onclick = function() {
    window.open("https://wwwmathcalculator.netlify.app/", "_blank");
};
document.getElementById("image10").onclick = function() {
    window.open("https://wwwmathcalculator.netlify.app/", "_blank");
};
// project management 
document.getElementById("image5").onclick = function() {
    window.open("https://wwwbesite.netlify.app/", "_blank");
};
document.getElementById("image11").onclick = function() {
    window.open("https://wwwbesite.netlify.app/", "_blank");
};
// Swweming site
document.getElementById("image6").onclick = function() {
    window.open("https://swimmingsite.netlify.app/#", "_blank");
};
document.getElementById("image12").onclick = function() {
    window.open("https://swimmingsite.netlify.app/#", "_blank");
};




// Contact me link 
// send button link




// mail send
document.getElementById('sendEmailButton').addEventListener('click', function() {
    const recipient = "markandebhausaheb@gmail.com";
    const subject = "Hello, Plz enter Your name and address.";
    const body = "send Your Enquiries.";

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});





// Footer link is start
// linkdin
function link() {
    window.open('https://www.linkedin.com/in/bhausaheb-markande-ab9916301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ', '_blank');
}
// intagram link
function int() {
    window.open('https://www.instagram.com/bhausahebmarkande?utm_source=qr&igsh=MXJ5NWwxamR6cWR1aA== ', '_blank');
}
// twitter link
function twi() {
    window.open('https://x.com/BMarkande23?t=9fx3xjLR5VxG-BB9LZouHQ&s=09 ', '_blank');
}
// facebook link
function fac() {
    window.open(' https://www.facebook.com/bhausaheb.markande.3?mibextid=ZbWKwL ', '_blank');
}