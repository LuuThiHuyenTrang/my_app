const url = "https://motchill.tv/phim/con-mua-khi-ay-em-yeu-anh-11219.html";
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    //cho script load xong thi chay callback
    script.onload = function () {
        
        callback(script);//script nay cung giong nhu item 'truyen vao day'
    };
    document.head.append(script);// toan bo du lieu trong html o index dc lay ra , sau do trong the head cho scrip vao
}
loadScript(url, function (script) {
    console.log("xin chao", script);

});