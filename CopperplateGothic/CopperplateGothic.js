var timevb = setInterval(() => {
            if (document.querySelector("div.landing-wrapper-before")) {
                document.querySelector(".landing-wrapper-before").setAttribute("style",
                    'background:inherit;')
                clearInterval(timevb)
            }
        }, 200)


        var timev2 = setInterval(() => {
            if (document.querySelector("._akaz")) {
                document.querySelector("._aka-").remove();
                document.querySelector("._akaz").insertAdjacentHTML("afterbegin",
                    "<img style='width:64px;' src='data:image/jpeg;base64,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'/>"
                    )

                document.querySelector(".landing-title._aj-8").textContent = document.querySelector(
                    ".landing-title._aj-8").textContent.replace("WhatsApp", "WA")
                document.querySelector("._aj-c").textContent = document.querySelector("._aj-c")
                    .textContent.replace("WhatsApp", "WA")

            }

        }, 300)



        function getCount() {
            if (document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn")){
                var nodeList = document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn");
                var count = 0;
                for (const nodeDiv of nodeList) {
                    count = count + parseInt(nodeDiv.innerText);
                }
                return count


            }

        }

            var time2 = setInterval(() => {
                if(!document.getElementsByClassName('_aigv')[2]){
                    return
                }

                if (document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0].getElementsByClassName('_aigv')[2]) {
                    clearInterval(time2)

                    document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                            0]
                        .style.minWidth = 'auto'

                    //document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0]
                    //  .getElementsByClassName('_2Ts6i')[0].style.minWidth = '100%'
                    if (document.querySelector(".xbyj736")){
                        document.querySelector(".xbyj736").style.display = "none";
                    }

                    // document.querySelector(".xbyj736").style.display = "none";
                    document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                            0]
                        .getElementsByClassName('_aigv')[2].style.minWidth = '100%'



// 封装复用
// 提取公共的查询选择器函数
function querySelectorAllAndHandle(selector, eventType, handler) {
    document.querySelectorAll(selector).forEach(item => {
        item.addEventListener(eventType, handler);
    });
}

// 提取设置样式的函数
function setStyle(selector, style) {
    document.querySelectorAll(selector)[1].setAttribute("style", style);
}

// 处理点击事件的核心函数
function handleClickCore(e) {
    setStyle("._aigv._aigz", 'z-index: 120;position: absolute;width: 100%');
    if (window.webkit){
         window.webkit.messageHandlers.nativeBridge.postMessage('chat');
    }

    if (document.querySelectorAll("._ak1t._ak1m").length > 0){
        document.querySelectorAll("._ak1t._ak1m")[0].addEventListener('click', (e) => {
        setTimeout(() => {
            handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[1]);
            handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[0]);
        }, 300);
        });

    }

    if (document.getElementById("backleftid")) {
        document.getElementById("backleftid").remove();
    }
    insertBackLeftDiv();
    document.getElementById("backleftid").addEventListener('click', (e) => {
        setStyle("._aigv._aigz", 'z-index: 120;position: absolute;width: 0%;');
        window.webkit.messageHandlers.nativeBridge.postMessage('list');
    });

    handleFooterClick();
}

// 处理特定 div 点击的函数
function handleDivClick(div) {

    div.addEventListener('click', (e) => {
        document.querySelectorAll("div._aigv._aigw._aigx")[0].setAttribute("style", 'display:none');
        var timer = setInterval(() => {
            if (document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0]) {
                document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0].setAttribute("style",'min-width:auto;');
                clearInterval(timer);
            }
        }, 300);
    });
}

// 插入特定 div 的函数
function insertBackLeftDiv() {
    document.getElementById("main").querySelector('header').insertAdjacentHTML("afterbegin",
        "<div id='backleftid' style='width: 29px;height:30px;display: flex;align-items: center;'><img style='width:21px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADyUlEQVR4Ae2cPYsTQRjHk+hBBPN2oIKBvBVikUJIIShIxFq0ucavoYUW4p2NhV/BL2BlIQiHCHIKKopWaheTSAIhRZIiJFGT+Iy547K5JDsz2ZdnzH9gye7O7M4zv9/O7t3luQ0EUEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABOYRKBaLx2l/aF6dafuCJgWcTqevBoPBRxTzBVqGtHwYj8e3K5XKF5PGMR2rMQKy2ex9gr1DwVtipn1/aN8NkvBiemCmrFsGwzXoTCazTbE9WBJfvdfrnWs0Gt0lbVhWsb+PSsAXYM+Gw+GLLAnbBMVagCT8f0MMhUI5m7GyrGYrQAW+IDscDr+zJGwTFEsBqvBpjF8jkchHm7GyrGb3ENaA36Pbz5VSqfSJJWGboMQvNGyKDvzRaHS9XC4bCV+AZzMDdOFXq9VXbK4gjUBYCFhX+CxmwDrD913AusP3VQDgTx4YvjwDAH8C35cZAPiH8D0XAPhW+J4KAPyj8D0TAPjz4XsiAPAXw3ddAOAvh++qAMC3h++aAMCXg++KAMCXh++4AMBXg++oAMBXh++YAMDXg++IAMpYe0zZaXcUQuiJrxFN/yZLYbxLm67011C68p/R2W8u7cFaCfhWHvoZxrlc7h7gz9DU2NSeAXT196i/sGSfuPIXgNJKzMrn82cU4A9wz19An3ZrCVh8OtSoEsAtSJWYw+21ZwClAz5UiOUEtX+eSqWuKRyzFk21Z4Cggx9DV79Gjq1yina7/TQWi52k/9u6JHmeDWq7FY1G33c6nR+Sx/zXzVYSIMgQyJfxeFzMpKLYliiQMAVpZQHiXDQTXkPCFFWFVUcEQIIC8ZmmjgmAhBmykpuOCoAESepTzRwXAAlTdCVWXREACRLk95u4JgAS5CS4KgAS7CW4LgASlkvwRAAkLJbgmQBImC/BUwGQcFSC5wIgwSrBFwGQcCjBNwGQMJHgqwBICAR8F7DuElgIWGcJbASsImFzc3O31WrVxTlMK6wECHg6X29SdvblZDL5pNlsipe5GlXYCRD0NCScHgwGu5Qg8NMo+hQsSwE6Eijx6x2J+2yaAO3MOC8GSu+C26Z+dmT6ogTgkkw7bm3YzoADUJK3o3q/37/b7XZ/Hxxnyid7AQKkkJBIJEa0WqTFkk65//LuW7Va7RvVGVeMECCokoQ9SoPco9TG87R5ipZftLylZYvenP6GPlG8IlAoFDaoL9bPL69YoB8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQkCDwF77bKDf6sSL5AAAAAElFTkSuQmCC' /></div>");
}

// 处理页脚点击的函数
function handleFooterClick() {
    var foot = document.getElementsByTagName("footer")[0];
    foot.querySelector('.x10l6tqk.x1ey2m1c.x17qophe.x9f619.xh8yej3').addEventListener('click', (e) => {
        setTimeout(() => {
            handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[3]);
            handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[2]);
        }, 300);
    });
}

// 处理特定.bugiwsl0 元素点击的函数
function handleBugiwsl0Click(item) {
    item.addEventListener('click', (e) => {
        document.querySelectorAll('._2Ts6i._3RGKj._318SY')[0].setAttribute("style", 'flex:0;');
        if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1]) {
            document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1].setAttribute("style", 'flex:0;');
        }
        if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2]) {
            document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2].setAttribute("style", 'flex:0;');
        }
        if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3]) {
            document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3].setAttribute("style", 'flex:0;');
        }

        var timer = setInterval(() => {
            if (document.querySelectorAll('.HP5-u')[0]) {
                document.querySelectorAll('.HP5-u')[0].setAttribute("style",'min-width:auto;');
                if (document.querySelectorAll('.HP5-u')[1]) {
                    document.querySelectorAll('.HP5-u')[1].setAttribute("style",'min-width:auto;');
                }
                if (document.querySelectorAll('.HP5-u')[2]) {
                    document.querySelectorAll('.HP5-u')[2].setAttribute("style",'min-width:auto;');
                }
                if (document.querySelectorAll('.HP5-u')[3]) {
                    document.querySelectorAll('.HP5-u')[3].setAttribute("style",'min-width:auto;');
                }
                // document.querySelectorAll('.ej3x2ktq.p357zi0d.f8m0rgwh.sh5ccnuw.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r')[0].setAttribute("style",'margin-top:auto;')
            }

            if (!document.querySelectorAll('.bugiwsl0.fooq7fky')[2]) {
                clearInterval(timer);
            }
        }, 300);
    });
}

// 封装的 handleClicks 函数
function handleClicks() {
    querySelectorAllAndHandle(".x10l6tqk.xh8yej3.x1g42fcv", 'click', handleClickCore);
}
// 点击跳转
handleClicks()
// 为各种元素添加事件监听
querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x6prxxf.xo1l8bm.x1btupbp.xdxn8r.xmuu9lm.x1690sq9.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
    setTimeout(handleClicks, 50);
});
querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
    setTimeout(handleClicks, 50);
}, 0);
querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
    setTimeout(handleClicks, 50);
}, 1);


document.querySelector(".x1n2onr6.xh8yej3.lexical-rich-text-input").addEventListener('mouseout', () => {
    setTimeout(handleClicks, 50);
});
                document.querySelector('div[data-testid="menu-bar-menu"]').addEventListener('click',
                        (
                            e) => {
                            setTimeout(() => {
                                document.querySelectorAll('._2qR8G._1wMaz._18oo2')[3]
                                    .addEventListener('click', (e) => {
                                        setTimeout(() => {
                                            document.querySelector('._3J6wB')
                                                .setAttribute("style",
                                                    "width:auto;")
                                            document.querySelector('._3ev9-')
                                                .setAttribute("style",
                                                    "min-width:auto;")

                                            document.querySelector(
                                                'div[data-testid="popup-controls-ok"]'
                                            ).addEventListener('click', (
                                                e) => {
                                                })
                                        }, 300)
                                    })
                            }, 300)
                        })



                }
            }, 200)

            var time1 = setInterval(() => {

                if (document.querySelector(".landing-main")) {
                    clearInterval(time1)
                    document.querySelector(".landing-wrapper").style.minWidth = "100%";
                    if (document.querySelector(".x1c4vz4f")){
                        document.querySelector(".x1c4vz4f").style.display = "none";
                    }
                    document.querySelector("._ak5k").style.display = "none";
                    document.querySelector(".landing-header").style.display = "none";
                    document.querySelector(".landing-title").style.fontWeight = "bold";
                    document.querySelector(".landing-title").style.fontSize = "14px";
                    document.querySelector(".landing-title").style.marginBottom = "-10px";
                    var domm = document.getElementsByClassName('_aj-c')[1];
                    domm.querySelectorAll('strong')[0].style.fontWeight = "bold";
                    domm.querySelectorAll('strong')[1].style.fontWeight = "bold";
                    domm.querySelectorAll('strong')[0].style.color = "#06A884";
                    domm.querySelectorAll('strong')[1].style.color = "#06A884";
                    document.querySelector(".landing-window").style.height = '100vh';
                    document.querySelector(".landing-window").insertAdjacentHTML("afterbegin",
                        "<div style='text-align: center;margin-top:12px;position: relative;'><div id='imagesdfgg' style='display: flex;align-items: center;justify-content: center;height: 9vw;position: absolute;width: 100%;color: #BCBCBC;font-size: 14px;'>- 非官方应用 -</div></div>"
                    );

                }
            }, 200)
