<!--
 * @Author: 张文Uncle
 * @Email: 861182774@qq.com
 * @Date: 2019-11-13 15:09:22
 * @LastEditors: 张文Uncle
 * @LastEditTime: 2019-11-13 16:12:09
 * @Descripttion: 
 -->

# star
使用方法  纯JS无需JQ
```
<body>
    <div id="div">
    </div>
    <script src="./Star.js"></script>
    <script>
        window.onload = function () {
            var result = new Star({
                ele: '#div',
                initImg: 'star.png',//不设置采用默认值
                uls: [{
                    liNumber: 5,
                    title: '这是一个评价:',
                    initImg: 'star_red.png',//优先级最高
                    activeImg:'star.png' //优先级最高
                }, {
                    liNumber: 5,
                    title: '这是一个评价:'
                }]
            }).init();
        }
    </script>
</body>
result为数组对应每个ul中选中的星星数量
title使用的是span标签  无样式
```