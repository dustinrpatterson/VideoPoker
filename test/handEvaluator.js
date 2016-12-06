var fs = require('fs');
var vm = require('vm');
var Chai = require ('chai');
var expect = Chai.expect;

var storage = require('mock-local-storage')
var code = fs.readFileSync('./pokerhand.js');

vm.runInThisContext(code);

describe('Hand Evaluator', function(){
    it('Should have a constructor', function(){
        var hand = new PokerHand();

        expect(hand).to.exist;
        });
})

