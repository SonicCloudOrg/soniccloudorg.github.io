/**
 * 动态加载css文件
 * @param {*} url
 * @param {*} isCache
 */
export function loadCSS(url, isCache = false) {
    let element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    if (isCache) {
        element.setAttribute("href", url + "?t=" + new Date().getTime());
    } else {
        element.setAttribute("href", url);
    }
    document.head.appendChild(element);
}

/**
 * 动态加载js文件
 * @param {*} src
 * @param {*} callback
 *   loadScript("",function(){
 *   console.log("加载成功")
 * })
 * var that = this; 在方法里面使用that
 */
export function loadJS(jsUrl, callback, isCache = false) {
    var s = document.getElementById("ad")
    if (s != null) {
        s.remove()
    }
    var script = document.createElement('script');
    var head = document.head;
    script.type = 'text/javascript';
    script.charset = 'UTF-8'
    script.id = "ad"
    if (isCache) {
        script.src = jsUrl + "?t=" + new Date().getTime();
    } else {
        script.src = jsUrl
    }
    if (script.addEventListener) {
        script.addEventListener('load', callback, false);
    }
    head.appendChild(script);
}