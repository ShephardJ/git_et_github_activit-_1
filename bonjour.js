let container=document.getElementsByClassName("container");
function ditBonjour(){
		let pElt=document.createElement("p");

		pElt.textContent= "Dit moi bonjour";
		pElt.addEventListener("click", function(e){
			pElt.textContent="bonjour";

			pElt.style.fontSize="100px";
			pElt.style.textAlign="center";

		});

		container[0].appendChild(pElt)
}

ditBonjour();