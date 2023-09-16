function dis(x) {

    if (x == 1) {
        document.getElementById("det1").style.display = "inline"
        document.getElementById("det2").style.display = "none"
        document.getElementById("det3").style.display = "none"
        document.getElementById("det4").style.display = "none"
        document.getElementById("det5").style.display = "none"

    }
    if (x == 2) {
        document.getElementById("det2").style.display = "inline"
        document.getElementById("det1").style.display = "none"
        document.getElementById("det3").style.display = "none"
        document.getElementById("det4").style.display = "none"
        document.getElementById("det5").style.display = "none"

    } 
    if (x == 3) {
        document.getElementById("det3").style.display = "inline"
        document.getElementById("det2").style.display = "none"
        document.getElementById("det1").style.display = "none"
        document.getElementById("det4").style.display = "none"
        document.getElementById("det5").style.display = "none"

    }
    if (x == 4) {
        document.getElementById("det4").style.display = "inline"
        document.getElementById("det2").style.display = "none"
        document.getElementById("det3").style.display = "none"
        document.getElementById("det1").style.display = "none"
        document.getElementById("det5").style.display = "none"

    }
    if (x == 5) {
        document.getElementById("det5").style.display = "inline"
        document.getElementById("det2").style.display = "none"
        document.getElementById("det3").style.display = "none"
        document.getElementById("det4").style.display = "none"
        document.getElementById("det1").style.display = "none"

    }
}