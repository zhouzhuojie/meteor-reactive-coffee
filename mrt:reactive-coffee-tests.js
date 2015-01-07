Meteor.startup(function(){
    window.bind = rx.bind;
});

Tinytest.add('Initialize reactive coffee', function (test) {
    test.isNotNull(rx, 'rx should exist');
    test.isNotNull(window.bind, 'bind should exist');
    rx.rxt.importTags();
    test.isNotNull(div, 'div should exist');
});
