(function () {
    var ln = location.href;

    if (ln.indexOf('//github.com/') >= 0) {
        void(location.href = ln.replace(/github\.com/i, 'stackblitz.com/github'));
    }
    if (ln.indexOf('//stackblitz.com/github/') >= 0) {
        void(location.href = ln.replace(/stackblitz\.com\/github/i, 'github.com'));
    }
}());
