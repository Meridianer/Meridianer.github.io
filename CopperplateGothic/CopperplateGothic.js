
	window.onload = () => {
		var time1 = setInterval(() => {
			if (document.querySelector(".landing-main")) {
				console.log(6546546)
				clearInterval(time1)
				document.querySelector(".landing-wrapper").style.minWidth = "100%";
				document.querySelector("._3-soo").style.display = "none";
				document.querySelector(".landing-header").style.display = "none";

				document.querySelector(".landing-title").style.fontWeight = "bold";
				document.querySelector(".landing-title").style.fontSize = "17px";

				var domm = document.getElementsByClassName('QtrYx')[1];
				domm.querySelectorAll('strong')[0].style.fontWeight = "bold";
				domm.querySelectorAll('strong')[1].style.fontWeight = "bold";
				domm.querySelectorAll('strong')[2].style.fontWeight = "bold";

				domm.querySelectorAll('strong')[0].style.color = "#06A884";
				domm.querySelectorAll('strong')[1].style.color = "#06A884";
				domm.querySelectorAll('strong')[2].style.color = "#06A884";
				document.querySelector(".landing-window").style.height='100vh'
				document.querySelector(".landing-main").style.padding = "12px 36px 72px";
				document.querySelector(".landing-window").insertAdjacentHTML("afterbegin",
					"<div style='text-align: center;margin-top:30px;position: relative;'><div style='display: flex;align-items: center;justify-content: center;height: 9vw;position: absolute;width: 100%;color: #fff;font-size: 14px;'><img style='width: 16px;margin-right: 5px;' id='imgidfs' src='https://phantaverse.oss-cn-shanghai.aliyuncs.com/box/img/other/ObzodjDvUAw7bYzYA8p7AEcXwjj451Pgf5y1Umbp.png'>么就和背景吧和不会vbg不能</div><img style='width: 80%;' id='imagesdfgg' src='https://phantaverse.oss-cn-shanghai.aliyuncs.com/box/img/other/y2jp8VxEnd8NxlYW00dPNy0PEwOnt4HZO8Fba9zt.png'></div>"
					);
			}

		}, 200)
		var time2 = setInterval(() => {
			if (document.querySelector("._3sh5K")) {
				clearInterval(time2)
				
				document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0]
					.style.minWidth = 'auto'
				document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0]
					.getElementsByClassName('_2i3T7')[1].style.minWidth = '100%'
				document.querySelectorAll(".lhggkp7q.ln8gz9je.rx9719la").forEach(item => {
					item.addEventListener('click', (e) => {
						document.querySelectorAll("._3sh5K")[1].setAttribute("style",
							'z-index: 120;position: absolute;width: 100%;')
						if (document.getElementById("backleftid")) {
							document.getElementById("backleftid").remove()
						}
						document.getElementById("main").querySelector(
								'header[data-testid="conversation-header"]')
							.insertAdjacentHTML("afterbegin",
								"<div id='backleftid' style='width: 29px;height:30px;display: flex;align-items: center;'><img style='width:21px;' src='https://phantaverse.oss-cn-shanghai.aliyuncs.com/box/img/other/paV0zMW1okPZizUV1la2Xuw6q7RV6JaGolWQyWEM.png' /></div>"
								)
						document.getElementById("backleftid").addEventListener('click',
							(e) => {
								document.querySelectorAll("._3sh5K")[1]
									.setAttribute("style",
										'z-index: 1;position: absolute;width: 100%;'
										)
							})
							document.querySelector('._2BU3P.tm2tP.copyable-area').querySelector('span[data-testid="clip"]').addEventListener('click', (e) => {
								setTimeout(()=>{
									document.querySelectorAll("._2qR8G._1wMaz._26nDl")[0].addEventListener('click', (e) => {
										document.querySelector('div[data-testid="drawer-middle"]').setAttribute("style","position: absolute;width: 100%;")
									})
								},300)
							})
					})
				})

			}
		}, 200)
	}
	// Your code here...

