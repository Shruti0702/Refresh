function typeWriterEffect(element, text, speed) {
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            element.style.color="gold";
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, speed);
}
// Call the typewriter effect function with your desired parameters
const typewriterText = document.getElementById("typewriter").innerHTML;
document.getElementById("typewriter").innerHTML = ""; // Clear the existing text
typeWriterEffect(document.getElementById("typewriter"), typewriterText, 150);
var r=document.getElementById("rock").addEventListener("click",function(){
    window.open("https://shruti0702.github.io/Rock-Paper-Scissors/");
});
var r=document.getElementById("weather").addEventListener("click",function(){
window.open("https://shruti0702.github.io/weatherlko/");
});
