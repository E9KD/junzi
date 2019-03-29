// 跳转Bar
function GoBarPage(x) {
    switch (x) {
        case 0:
            window.location.href = "./index.html";
            break;
        case 1:
            window.location.href = "./allproduce.html";
            break;
        case 2:
            window.location.href = "./top.html";
            break;
        case 3:
            window.location.href = "./producelist.html";
            break;
        case 4:
            window.location.href = "./person.html";
            break;
    }
}

// Bar事件注册
function BarEventRegister() {
    let barArr = document.querySelectorAll(".footer_item");
    for (let i = 0; i < barArr.length; i++) {
        barArr[i].addEventListener("click", function() {
            GoBarPage(i);
        });
    }
}

// 挂载
BarEventRegister();
