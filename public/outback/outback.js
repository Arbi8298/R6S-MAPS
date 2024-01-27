window.onload = function() {
    const f1 = document.getElementsByClassName("1f");
    const f2 = document.getElementsByClassName("2f");
    const roof = document.getElementsByClassName("roof");

    const objective_bomb = document.getElementsByClassName("objective-bomb");
    const objective_hostage = document.getElementsByClassName("objective-hostage");
    const objective_secure = document.getElementsByClassName("objective-secure");

    const S_1fW = document.getElementsByClassName("S-1fW");
    const S_1fE = document.getElementsByClassName("S-1fE");
    const S_2fW = document.getElementsByClassName("S-2fW");
    const S_2fE = document.getElementsByClassName("S-2fE");

    const location_box = document.getElementById("location_box");
    const location_bundle = document.querySelectorAll(".location");
    const location_img = document.getElementById("box_img");
    const location_En = document.getElementById("box_text_En");
    const location_Ko = document.getElementById("box_text_Ko");
    const setup_guide = document.getElementsByClassName("setup_guide");

    const unavailable = document.getElementById("unavailable");
    let timeoutId;

    var gm_none = true;
    var gm_bomb = false;
    var gm_hostage = false;
    var gm_secure = false;

    var bs_none = true;
    var bs_1fW = false;
    var bs_1fE = false;
    var bs_2fW = false;
    var bs_2fE = false;

    var f_1f = true;
    var f_2f = false;
    var f_roof = false;

    var btn_gm_none = document.getElementById("gm_none");
    var btn_gm_bomb = document.getElementById("gm_bomb");
    var btn_gm_hostage = document.getElementById("gm_hostage");
    var btn_gm_secure = document.getElementById("gm_secure");

    var btn_bs_none = document.getElementById("bs_none");
    var btn_bs_1fW = document.getElementById("bs_1fW");
    var btn_bs_1fE = document.getElementById("bs_1fE");
    var btn_bs_2fW = document.getElementById("bs_2fW");
    var btn_bs_2fE = document.getElementById("bs_2fE");

    var btn_f_1f = document.getElementById("f_1f");
    var btn_f_2f = document.getElementById("f_2f");
    var btn_f_roof = document.getElementById("f_roof");

    document.getElementById("gm_none").addEventListener("click", fn_gm_none);
    document.getElementById("gm_bomb").addEventListener("click", fn_gm_bomb);
    document.getElementById("gm_hostage").addEventListener("click", fn_gm_hostage);
    document.getElementById("gm_secure").addEventListener("click", fn_gm_secure);

    document.getElementById("bs_none").addEventListener("click", fn_bs_none);
    document.getElementById("bs_1fW").addEventListener("click", fn_bs_1fW);
    document.getElementById("bs_1fE").addEventListener("click", fn_bs_1fE);
    document.getElementById("bs_2fW").addEventListener("click", fn_bs_2fW);
    document.getElementById("bs_2fE").addEventListener("click", fn_bs_2fE);

    document.getElementById("f_1f").addEventListener("click", fn_f_1f);
    document.getElementById("f_2f").addEventListener("click", fn_f_2f);
    document.getElementById("f_roof").addEventListener("click", fn_f_roof);

    document.getElementById("home_button").addEventListener("click", remove);
    update();

    let active_button = null;
    let click_active_button = null;
    document.getElementById("box_close").addEventListener("click", function(){
        location_box.style.display = "none";
        click_active_button.classList.add('transparent');
        click_active_button = null;
    });
    location_bundle.forEach(location => {
        location.addEventListener("click", () => {
            location_box.style.display = "block";
            const img_src = location.getAttribute('data-img');
            const text_En = location.getAttribute('data-En');
            const text_Ko = location.getAttribute('data-Ko');
            location_img.src = img_src;
            location_En.textContent = text_En;
            location_Ko.textContent = text_Ko;
            if (click_active_button !== null){
                click_active_button.classList.add('transparent');
                click_active_button = null;
            }
            click_active_button = location;
            click_active_button.classList.remove('transparent');
        });
        location.addEventListener("mouseenter", () => {
            if (active_button === null || active_button !== location) {
                if (active_button !== null) {
                    active_button.classList.add('transparent');
                    active_button = null;
                }
                location.classList.remove('transparent');
                active_button = location;
                if (click_active_button !== null){
                    click_active_button.classList.remove('transparent');
                }
            }
        });
    });

    function remove(){
        document.getElementById("gm_none").removeEventListener("click", fn_gm_none);
        document.getElementById("gm_bomb").removeEventListener("click", fn_gm_bomb);
        document.getElementById("gm_hostage").removeEventListener("click", fn_gm_hostage);
        document.getElementById("gm_secure").removeEventListener("click", fn_gm_secure);

        document.getElementById("bs_none").removeEventListener("click", fn_bs_none);
        document.getElementById("bs_1fW").removeEventListener("click", fn_bs_1fW);
        document.getElementById("bs_1fE").removeEventListener("click", fn_bs_1fE);
        document.getElementById("bs_2fW").removeEventListener("click", fn_bs_2fW);
        document.getElementById("bs_2fE").removeEventListener("click", fn_bs_2fE);

        document.getElementById("f_1f").removeEventListener("click", fn_f_1f);
        document.getElementById("f_2f").removeEventListener("click", fn_f_2f);
        document.getElementById("f_roof").removeEventListener("click", fn_f_roof);
    }

    function fn_gm_none(){
        gm_none = true;
        gm_bomb = false;
        gm_hostage = false;
        gm_secure = false;
        fn_bs_none();
        update();
    }
    function fn_gm_bomb(){
        gm_none = false;
        gm_bomb = true;
        gm_hostage = false;
        gm_secure = false;
        update();
    }
    function fn_gm_hostage(){
        gm_none = false;
        gm_bomb = false;
        gm_hostage = true;
        gm_secure = false;
        fn_bs_none();
        update();
    }
    function fn_gm_secure(){
        gm_none = false;
        gm_bomb = false;
        gm_hostage = false;
        gm_secure = true;
        fn_bs_none();
        update();
    }

    function fn_bs_none(){
        bs_none = true;
        bs_1fW = false;
        bs_1fE = false;
        bs_2fE = false;
        bs_2fW = false;
        for (var i = 0; i < setup_guide.length; i++){
            setup_guide[i].style.display = "none";
        }
        update();
    }
    function fn_bs_1fW(){
        bs_none = false;
        bs_2fW = false;
        bs_1fW = true;
        bs_1fE = false;
        bs_2fE = false;
        fn_gm_bomb();
        for (var i = 0; i < setup_guide.length; i++){
            setup_guide[i].style.display = "block";
        }
        update();
    }
    function fn_bs_1fE(){
        bs_none = false;
        bs_2fW = false;
        bs_1fW = false;
        bs_1fE = true;
        bs_2fE = false;
        fn_gm_bomb();
        for (var i = 0; i < setup_guide.length; i++){
            setup_guide[i].style.display = "block";
        }
        update();
    }
    function fn_bs_2fW(){
        bs_none = false;
        bs_2fW = true;
        bs_1fW = false;
        bs_1fE = false;
        bs_2fE = false;
        fn_gm_bomb();
        for (var i = 0; i < setup_guide.length; i++){
            setup_guide[i].style.display = "block";
        }
        update();
    }
    function fn_bs_2fE(){
        bs_none = false;
        bs_2fW = false;
        bs_1fW = false;
        bs_1fE = false;
        bs_2fE = true;
        fn_gm_bomb();
        for (var i = 0; i < setup_guide.length; i++){
            setup_guide[i].style.display = "block";
        }
        update();
    }

    function fn_f_1f(){
        f_b1 = false;
        f_1f = true;
        f_2f = false;
        f_roof = false;
        update();
    }
    function fn_f_2f(){
        f_b1 = false;
        f_1f = false;
        f_2f = true;
        f_roof = false;
        update();
    }
    function fn_f_roof(){
        f_b1 = false;
        f_1f = false;
        f_2f = false;
        f_roof = true;
        update();
    }

    function update(){
        if (f_1f){
            btn_f_1f.classList.add('pushed');
            for (var i = 0; i < f1.length; i++) {
                f1[i].style.display = "block";
            }
            run_gm();
            run_bs();
            if (bs_none){
                run_gm();
            }
            for (var i = 0; i < f2.length; i++) {
                f2[i].style.display = "none";
            }
            for (var i = 0; i < roof.length; i++) {
                roof[i].style.display = "none";
            }
        } else {
            btn_f_1f.classList.remove('pushed');
        }
        if (f_2f){
            btn_f_2f.classList.add('pushed');
            for (var i = 0; i < f2.length; i++) {
                f2[i].style.display = "block";
            }
            run_gm();
            run_bs();
            if (bs_none){
                run_gm();
            }
            for (var i = 0; i < f1.length; i++) {
                f1[i].style.display = "none";
            }
            for (var i = 0; i < roof.length; i++) {
                roof[i].style.display = "none";
            }
        } else {
            btn_f_2f.classList.remove('pushed');
        }
        if (f_roof){
            btn_f_roof.classList.add('pushed');
            for (var i = 0; i < roof.length; i++) {
                roof[i].style.display = "block";
            }
            run_gm();
            run_bs();
            if (bs_none){
                run_gm();
            }
            for (var i = 0; i < f1.length; i++) {
                f1[i].style.display = "none";
            }
            for (var i = 0; i < f2.length; i++) {
                f2[i].style.display = "none";
            }
        } else {
            btn_f_roof.classList.remove('pushed');
        }
    }

    function run_gm(){
        if(gm_none){
            btn_gm_none.classList.add('pushed');
            for (var i = 0; i < objective_bomb.length; i++) {
                objective_bomb[i].style.display = "none";
            }
            for (var i = 0; i < objective_hostage.length; i++) {
                objective_hostage[i].style.display = "none";
            }
            for (var i = 0; i < objective_secure.length; i++) {
                objective_secure[i].style.display = "none";
            }
        } else {
            btn_gm_none.classList.remove('pushed');
        }
        if(gm_bomb){
            btn_gm_bomb.classList.add('pushed');
            for (var i = 0; i < objective_bomb.length; i++) {
                objective_bomb[i].style.display = "block";
            }
            for (var i = 0; i < objective_hostage.length; i++) {
                objective_hostage[i].style.display = "none";
            }
            for (var i = 0; i < objective_secure.length; i++) {
                objective_secure[i].style.display = "none";
            }
        } else {
            btn_gm_bomb.classList.remove('pushed');
        }
        if(gm_hostage){
            btn_gm_hostage.classList.add('pushed');
            for (var i = 0; i < objective_bomb.length; i++) {
                objective_bomb[i].style.display = "none";
            }
            for (var i = 0; i < objective_hostage.length; i++) {
                objective_hostage[i].style.display = "block";
            }
            for (var i = 0; i < objective_secure.length; i++) {
                objective_secure[i].style.display = "none";
            }
        } else {
            btn_gm_hostage.classList.remove('pushed');
        }
        if(gm_secure){
            btn_gm_secure.classList.add('pushed');
            for (var i = 0; i < objective_bomb.length; i++) {
                objective_bomb[i].style.display = "none";
            }
            for (var i = 0; i < objective_hostage.length; i++) {
                objective_hostage[i].style.display = "none";
            }
            for (var i = 0; i < objective_secure.length; i++) {
                objective_secure[i].style.display = "block";
            }
        } else {
            btn_gm_secure.classList.remove('pushed');
        }
    }

    function run_bs(){
        if(bs_none){
            btn_bs_none.classList.add('pushed');
            for (var i = 0; i < S_2fW.length; i++) {
                S_2fW[i].style.display = "none";
            }
            for (var i = 0; i < S_1fW.length; i++) {
                S_1fW[i].style.display = "none";
            }
            for (var i = 0; i < S_1fE.length; i++) {
                S_1fE[i].style.display = "none";
            }
            for (var i = 0; i < S_2fE.length; i++) {
                S_2fE[i].style.display = "none";
            }
        } else {
            btn_bs_none.classList.remove('pushed');
        }
        if(bs_2fW){
            btn_bs_2fW.classList.add('pushed');
            for (var i = 0; i < S_2fW.length; i++) {
                S_2fW[i].style.display = "block";
            }
            for (var i = 0; i < S_1fW.length; i++) {
                S_1fW[i].style.display = "none";
            }
            for (var i = 0; i < S_1fE.length; i++) {
                S_1fE[i].style.display = "none";
            }
            for (var i = 0; i < S_2fE.length; i++) {
                S_2fE[i].style.display = "none";
            }
        } else {
            btn_bs_2fW.classList.remove('pushed');
        }
        if(bs_1fW){
            btn_bs_1fW.classList.add('pushed');
            for (var i = 0; i < S_2fW.length; i++) {
                S_2fW[i].style.display = "none";
            }
            for (var i = 0; i < S_1fW.length; i++) {
                S_1fW[i].style.display = "block";
            }
            for (var i = 0; i < S_1fE.length; i++) {
                S_1fE[i].style.display = "none";
            }
            for (var i = 0; i < S_2fE.length; i++) {
                S_2fE[i].style.display = "none";
            }
        } else {
            btn_bs_1fW.classList.remove('pushed');
        }
        if(bs_1fE){
            btn_bs_1fE.classList.add('pushed');
            for (var i = 0; i < S_2fW.length; i++) {
                S_2fW[i].style.display = "none";
            }
            for (var i = 0; i < S_1fW.length; i++) {
                S_1fW[i].style.display = "none";
            }
            for (var i = 0; i < S_1fE.length; i++) {
                S_1fE[i].style.display = "block";
            }
            for (var i = 0; i < S_2fE.length; i++) {
                S_2fE[i].style.display = "none";
            }
            show_notification();
        } else {
            btn_bs_1fE.classList.remove('pushed');
        }
        if(bs_2fE){
            btn_bs_2fE.classList.add('pushed');
            for (var i = 0; i < S_2fW.length; i++) {
                S_2fW[i].style.display = "none";
            }
            for (var i = 0; i < S_1fW.length; i++) {
                S_1fW[i].style.display = "none";
            }
            for (var i = 0; i < S_1fE.length; i++) {
                S_1fE[i].style.display = "none";
            }
            for (var i = 0; i < S_2fE.length; i++) {
                S_2fE[i].style.display = "block";
            }
        } else {
            btn_bs_2fE.classList.remove('pushed');
        }
    }

    let isDragging = false;
    let offsetX, offsetY;

    location_box.addEventListener('mousedown', startDrag);
    location_box.addEventListener('mousemove', drag);
    location_box.addEventListener('mouseup', endDrag);

    function startDrag(e) {
        isDragging = true;
        const boxRect = location_box.getBoundingClientRect();
        offsetX = e.clientX - boxRect.left;
        offsetY = e.clientY - boxRect.top;
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();

        const containerRect = document.getElementById('map_container').getBoundingClientRect();
        let newX = e.clientX - offsetX - containerRect.left;
        let newY = e.clientY - offsetY - containerRect.top;

        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX + location_box.offsetWidth > containerRect.width) {
            newX = containerRect.width - location_box.offsetWidth;
        }
        if (newY + location_box.offsetHeight > containerRect.height) {
            newY = containerRect.height - location_box.offsetHeight;
        }

        location_box.style.left = `${newX}px`;
        location_box.style.top = `${newY}px`;
    }

    function endDrag() {
        isDragging = false;
    }

    function show_notification() {
        unavailable.style.display = "inline";
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            unavailable.style.display = "none";
        }, 2000);
    }
}