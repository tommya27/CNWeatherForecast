    // 创建一个函数，当HTTP请求完成并且pip.innerText被赋值后，调用这个函数。
    function getIPInfo(callback) {
        var httpIPRequest = new XMLHttpRequest();
        httpIPRequest.open('GET', 'https://restapi.amap.com/v3/ip?key=95f0b1487a3db8459e5bbf7f269996e4', true);
        httpIPRequest.send();

        httpIPRequest.onreadystatechange = function () {
            if (httpIPRequest.readyState == 4 && httpIPRequest.status == 200) {
                console.log(httpIPRequest.responseText);
                var ip = JSON.parse(httpIPRequest.responseText);

                // cityget
                var pcity = document.getElementById("p_city");   


                // 城市名
                console.log(ip.city);
                pcity.innerText = ip.province + ip.city ;


                var pip = document.getElementById("p_ip");
                pip.innerText = ip.adcode;
                callback(pip.innerText);
            }
        }
    }


    getIPInfo(function(ipAdcode) {
        console.log(ipAdcode);  // 在这里你可以访问到ipAdcode

        getip = ipAdcode;
        console.log(getip);
    
            
        var httpRequest = new XMLHttpRequest(); // 创建XMLHttpRequest对象

        // 把接口中的内容装备到请求对象身上
        // httpRequest.open('请求方式','url地址');
        httpRequest.open('GET', 'https://restapi.amap.com/v3/weather/weatherInfo?key=95f0b1487a3db8459e5bbf7f269996e4&extensions=base&city='+getip,true); // 打开连接
        // httpRequest.open('GET', 'https://apis.netstart.cn/zhihudaily/stories/latest',true); // 打开连接

        // 发送请求
        httpRequest.send(); 

        // 请求对象要到东西后回来
        httpRequest.onreadystatechange = function () { 


        // 200代表数据成功带回
        // 4代表数据请求完成
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                console.log(httpRequest.responseText);

                var xml = JSON.parse(httpRequest.responseText);
                console.log(xml);


                // report-time
                var p= document.getElementById("p_reporttime");


                // temperature
                var ptemperature = document.getElementById("p_temperature");   


                /* // humidity
                var phumidity = document.getElementById("p_humidity"); */  

                // wind-speed
                var pweather = document.getElementById("p_weather");   


                let entries = Object.entries(xml);
                console.log(entries[4][1]);
                let a = entries[4][1]


                // //时间
                // console.log( a[0].reporttime);
                p.innerHTML = a[0].reporttime;
                console.log(a[0].reporttime);


                //温度
                console.log(a[0].temperature_float);
                ptemperature.innerText = a[0].temperature_float + "°C";

                /* //湿度
                console.log(a[0].humidity);
                phumidity.innerText = a[0].humidity;*/


                //天气
                console.log(a[0].weather);
                pweather.innerText = "天气：" + a[0].weather;


            }
        }

    });


    

    
