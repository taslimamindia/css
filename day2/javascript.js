(function init() {
    function clear() {
        document.querySelector(".bar1").classList = ["bar bar1"]
        document.querySelector(".bar2").classList = ["bar bar2"]
        document.querySelector(".bar3").classList = ["bar bar3"]
    }
    function show() {
        //Remove
        clear()
        // document.querySelectorAll(".bar").forEach((elt) => {
        //     elt.classList.remove("transite-1-reverse-A");
        //     elt.classList.remove("transite-1-reverse-B");
        //     elt.classList.remove("rotate-1-reverse");
        //     elt.classList.remove("rotate-2-reverse");
        // })
        //Add
        document.querySelectorAll(".bar").forEach((elt) => {elt.classList.add("transite-1")})
        window.setTimeout(() => {
            document.querySelectorAll(".bar1, .bar3").forEach((elt) => {elt.classList.add("rotate-1")})
            document.querySelector(".bar2").classList.add("rotate-2")
        }, 1000)
    }
    function hidden() {
        //Remove
        clear()

        //Add
        document.querySelectorAll(".bar1, .bar3").forEach((elt) => {elt.classList.add("rotate-1-reverse")})
        document.querySelector(".bar2").classList.add("rotate-2-reverse")
        window.setTimeout(() => {
            document.querySelector(".bar1").classList.add("transite-1-reverse-A")
            document.querySelector(".bar3").classList.add("transite-1-reverse-B")
        }, 1000)
    }

    let i = 1;
    function toggle() {
        if(i==1) { show() } 
        else { hidden() }
        i = (-1) * i
    }
    document.querySelectorAll(".bar").forEach((elt) => {
        elt.addEventListener("click", toggle)
    })
})()