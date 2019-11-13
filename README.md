
# star
使用方法
```
var result = new Star({
                ele: 'div',
                initImg: 'star_red.png'
                uls: [{
                    liNumber: 5,
                    title: '这是一个评价:',
                    initImg: 'star_red.png'
                }, {
                    liNumber: 5,
                    title: '这是一个评价:'
                }]
            }).init();

result为数组对应每个ul中选中的星星数量
title使用的是span标签  无样式
```