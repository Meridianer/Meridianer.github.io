
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
					"<img style='width:64px;' src='data:image/png;base64,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'/>"
					)

				document.querySelector(".landing-title._aj-8").textContent = document.querySelector(
					".landing-title._aj-8").textContent.replace("WhatsApp", "WA")
				document.querySelector("._aj-c").textContent = document.querySelector("._aj-c")
					.textContent.replace("WhatsApp", "WA")

			}

		}, 300)


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
					//	.getElementsByClassName('_2Ts6i')[0].style.minWidth = '100%'
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

    document.querySelectorAll("._ak1t._ak1m")[0].addEventListener('click', (e) => {
        setTimeout(() => {
            handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[1]);
            handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[0]);
        }, 300);
    });

    if (document.getElementById("backleftid")) {
        document.getElementById("backleftid").remove();
    }
    insertBackLeftDiv();
    document.getElementById("backleftid").addEventListener('click', (e) => {
        setStyle("._aigv._aigz", 'z-index: 120;position: absolute;width: 0%;');
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

