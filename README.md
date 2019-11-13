
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
                uls: [{
                    liNumber: 5,
                    title: '这是一个评价:',
                    initImg: 'star_red.png'
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