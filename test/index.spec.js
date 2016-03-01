var should = require('chai').should(),
    remove = require('../remove');


describe('#remove', function () {
    it('Removes the first element of the array [\'A\',\'B\',\'C\']', function (){
        var a = remove(['A','B','C'], 0);
        a.should.eql(['B','C']);
    });

    it('Removes the second element of the array [\'A\',\'B\',\'C\']', function (){
        var a = remove(['A','B','C'], 1);
        a.should.eql(['A','C']);
    });

    it('Removes the third element of the array [\'A\',\'B\',\'C\']', function (){
        var a = remove(['A','B','C'], 2);
        a.should.eql(['A','B']);
    });
});
