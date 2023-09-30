// const { JSON } = require("mysql/lib/protocol/constants/types");



var httpRequest = new XMLHttpRequest(); // 创建XMLHttpRequest对象

// 把接口中的内容装备到请求对象身上
// httpRequest.open('请求方式','url地址');


httpRequest.open('GET', 'https://restapi.amap.com/v3/weather/weatherInfo?key=fbdcc4d79550f486e8c5ac573e146eb3&city=110101&output=XML'); // 打开连接

// 发送请求
httpRequest.send(); 

// 请求对象要到东西后回来
httpRequest.onreadystatechange = function () { 

    // 200代表数据成功带回
    // 4代表数据请求完成
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        console.log(httpRequest.responseText);
    
        // var json = httpRequest.responseText; 
        var json = JSON.parse(httpRequest.responseText);
        console.log(json);
    }
};



