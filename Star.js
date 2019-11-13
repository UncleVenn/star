/*
 * @Author: 张文Uncle
 * @Email: 861182774@qq.com
 * @Date: 2019-11-13 10:33:59
 * @LastEditors: 张文Uncle
 * @LastEditTime: 2019-11-13 15:02:49
 * @Descripttion: 
 */
var Star = function (opt) {
    var that = this, option = {
        ele: 'body',
        initImg: 'star.png',
        activeImg: 'star_red.png',
        activeAllBg: 'yh.jpg',
        imgWidth: 22,
        uls: [{
            liNumber: 5,
        }]
    }
    that.container = document.querySelector(opt.ele);
    that.result = new Array();
    that.init = function () {
        that.objMerge(opt);
        that.initNode()
        that.getUls().forEach(function (ul, index) {
            that.result[index] = 0;
            that.getLis(ul).forEach(function (li, i) {
                that.initClick(ul, li, index, i);
            })
        });
        return that.result;
    }
    that.initNode = function () {
        that.opt.uls.forEach(function (ul) {
            var span = document.createElement('span'), u = document.createElement('ul'), div = document.createElement('div');
            u.style.cssText = 'display:inline-block;text-align:justify;background-position:center;padding:0';
            ul.title && (span.innerHTML = ul.title);
            div.appendChild(span);
            u.style.width = (ul.liNumber * ul.imgWidth + ul.liNumber * 5) + 'px';
            for (var i = 0; i < ul.liNumber; i++) {
                var li = document.createElement('li'), img = document.createElement('img');
                li.style.cssText = 'list-style:none;display:inline-block;';
                img.src = ul.initImg || that.opt.initImg;
                img.style.cssText = 'width:' + (ul.imgWidth || that.opt.imgWidth) + 'px;transition:all 0.5s;-moz-transition: all 0.5s;-webkit - transition: all 0.5s;';
                li.appendChild(img);
                u.appendChild(li)
                u.append(' ');
            }
            div.appendChild(u);
            that.container.appendChild(div);
        })
    }
    that.objMerge = function (obj) {
        if (Object.assign) {
            that.opt = Object.assign(option, obj);
            return;
        }
        for (var key in obj) {
            if (option.hasOwnProperty(key) === true) {
                option[key] = obj[key];
            }
        }
        that.opt = option;
    }
    that.getUls = function () {
        return that.toArray(this.container.getElementsByTagName('ul'));
    }
    that.getLis = function (ul) {
        return that.toArray(ul.getElementsByTagName('li'));
    }
    that.toArray = function (collection) {
        if (Array.from) {
            return Array.from(collection);
        }
        return Array.prototype.slice.call(collection);
    }
    that.initClick = function (ul, li, index, i) {
        li.onclick = function () {
            if (i == that.result[index] - 1) {
                return;
            }
            that.result[index] = i + 1;
            var time = 0, _ul = that.getLis(ul);
            _temp = setTimeout(function () {
                _ul.forEach(function (_li, _i) {
                    var $this = _li.getElementsByTagName('img')[0];
                    if (_i > i) {
                        $this.src = that.opt.uls[index].initImg || that.opt.initImg;
                    } else {
                        setTimeout(function () {
                            $this.src = that.opt.uls[index].activeImg || that.opt.activeImg;
                            $this.style.transform = 'scale(1.5)';
                        }, time += 100)
                    }
                    setTimeout(function () {
                        $this.style.transform = 'scale(1)';
                    }, time + 200);
                    if (i == _ul.length - 1) {
                        var _time = _ul.length * 100 + 200;
                        setTimeout(function () {
                            ul.style.backgroundImage = 'url(' + (that.opt.uls[index].activeAllBg || that.opt.activeAllBg) + ')';
                        }, _time);
                        setTimeout(function () {
                            ul.style.backgroundImage = '';
                        }, _time + 1500);
                    }
                });
            }, 100);
        }
    }
}