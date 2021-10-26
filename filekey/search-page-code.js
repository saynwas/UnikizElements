if (1 > 2) {
    document.getElementById("unikizMainBody").style.display = "none";
    document.getElementById("unikizUpdateSearchPageCodeV1").innerHTML = "Update Your Code. Visit Unikiz Elements";
    document.getElementById("unikizUpdateSearchPageCodeV1").className = "update";
}

    var style = document.createElement('style');
			style.innerHTML = `
			.no {
			    display: none
			}
			.update {
    text-align: center;
    font-weight: bold;
    opacity: 0.9;
    padding: 10px;
    background: rgba(0,0,0,0.07);
    border-radius: 5px;
}
.unikiz_SubBody {
    margin: 8px;
}
.unikiz_SearchBody {
    padding: 0;
    margin: 0;
    display: block
}
.unikiz_SingleBody {
    display: block;
    padding: 6px;
    clear: both
}
.unikiz_SingleThumb {
    float: left;
    width: 30%
}
.unikiz_SingleAbt {
    width: 70%;
    float: right;
}
.unikiz_SinNa {
    font-size: 1.3em;
    margin-bottom: -15px
}
.unikiz_SinMu {
    font-size: 1em;
}
			`;
			document.head.appendChild(style);
