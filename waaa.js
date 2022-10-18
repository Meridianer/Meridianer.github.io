var ddd = setInterval(()=>{
        if(document.querySelector(".landing-main")){
            clearInterval(ddd)
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
               
                document.querySelector(".landing-main").style.padding = "12px 36px 72px";
               
                document.querySelector(".landing-window").insertAdjacentHTML("afterbegin","<div style='text-align: center;margin-top:30px;position: relative;'><div style='display: flex;align-items: center;justify-content: center;height: 34px;position: absolute;width: 100%;color: #fff;font-size: 14px;'><img style='width: 16px;margin-right: 5px;' src='https://phantaverse.oss-cn-shanghai.aliyuncs.com/box/img/other/ObzodjDvUAw7bYzYA8p7AEcXwjj451Pgf5y1Umbp.png'>么就和背景吧和不会vbg不能</div><img style='width: 80%;' src='https://phantaverse.oss-cn-shanghai.aliyuncs.com/box/img/other/y2jp8VxEnd8NxlYW00dPNy0PEwOnt4HZO8Fba9zt.png'></div>");
        }
},200)
