function comparenum(a, b) {
    // Compare the values
    if (a > b) {
        document.getElementById("c").value = "A>B";
        document.getElementById("d").value = a-b;
    } else if (a < b) {
        document.getElementById("c").value = "A<B"
        document.getElementById("d").value = b-a;
    } else {
        document.getElementById("c").value = "A=B"
        document.getElementById("d").value = 0
    }
}