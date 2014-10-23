Tinytest.add('Initialize reactive coffee', function (test) {
    test.isNotNull(rx, 'rx should exist');
    window.bind = rx.bind;
    test.isNotNull(bind, 'bind should exist');
    rx.rxt.importTags();
    test.isNotNull(div, 'div should exist');
});
