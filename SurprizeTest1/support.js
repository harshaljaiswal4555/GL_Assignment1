function seprateChar() {
    var specialChar = document.getElementById("specialChar");
    var numbers = document.getElementById("numbers");
    var alphabets = document.getElementById("alphabets");
    var vowel = document.getElementById("vowel");

    var inputText = document.getElementById("inputText").value;
    console.log(inputText);

    
    var letters = inputText.match(/[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z,B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z]/g) || "";
    var digits = inputText.match(/[0-9]/g) || "";
    var specialChar =inputText.match(/[!@#$%^&*(),.?":{}|<>]/g) || "";
    var vovel= inputText.match(/[a,e,i,o,u,A,E,I,O,U]/g) ||"";
    
    
    specialChar.innerHTML=specialChar;
    numbers.innerHTML = digits;
    alphabets.innerHTML =letters;
    vowel.innerHTML=vovel;

}