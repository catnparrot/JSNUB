// 모듈
var namespaceA = (function () {
    var privateVariable = '비공개 변수';
    return {
        publicApi: function () {
            console.log(privateVarialbe + '를 접근할 수 있습니다.');
        }
    }
})();

namespaceA.publicApi();