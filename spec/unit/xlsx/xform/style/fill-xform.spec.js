'use strict';

var FillXform = require('../../../../../lib/xlsx/xform/style/fill-xform');
var testXformHelper = require('./../test-xform-helper');

var expectations = [
  {
    title: 'Empty',
    create:  function() { return new FillXform()},
    preparedModel: {},
    xml: '',
    tests: ['write']
  },
  {
    title: 'None',
    create:  function() { return new FillXform()},
    preparedModel: {type: 'pattern', pattern:'none'},
    xml: '<fill><patternFill patternType="none"/></fill>',
    get parsedModel() { return this.preparedModel; },
    tests: ['write', 'parse']
  },
  {
    title: 'Gray 125',
    create:  function() { return new FillXform()},
    preparedModel: {type: 'pattern', pattern:'gray125'},
    xml: '<fill><patternFill patternType="gray125"/></fill>',
    get parsedModel() { return this.preparedModel; },
    tests: ['write', 'parse']
  },
  {
    title: 'Red Dark Vertical Pattern',
    create:  function() { return new FillXform()},
    preparedModel: {type: 'pattern', pattern:'darkVertical', fgColor:{argb:'FFFF0000'}},
    xml: '<fill><patternFill patternType="darkVertical"><fgColor rgb="FFFF0000"/></patternFill></fill>',
    get parsedModel() { return this.preparedModel; },
    tests: ['write', 'parse']
  },
  {
    title: 'Red Green Dark Trellis Pattern',
    create:  function() { return new FillXform()},
    preparedModel: {type: 'pattern', pattern:'darkTrellis', fgColor:{argb:'FFFF0000'}, bgColor:{argb:'FF00FF00'}},
    xml: '<fill><patternFill patternType="darkTrellis"><fgColor rgb="FFFF0000"/><bgColor rgb="FF00FF00"/></patternFill></fill>',
    get parsedModel() { return this.preparedModel; },
    tests: ['write', 'parse']
  },
  {
    title: 'Blue White Horizontal Gradient',
    create:  function() { return new FillXform()},
    preparedModel: {type: 'gradient', gradient: 'angle', degree: 0,
      stops: [
        {position:0, color:{argb:'FF0000FF'}},
        {position:1, color:{argb:'FFFFFFFF'}}
      ]
    },
    xml: '<fill><gradientFill degree="0">' +
            '<stop position="0"><color rgb="FF0000FF"/></stop>' +
            '<stop position="1"><color rgb="FFFFFFFF"/></stop>' +
         '</gradientFill></fill>',
    get parsedModel() { return this.preparedModel; },
    tests: ['write', 'parse']
  },
  {
    title: 'RGB Path Gradient',
    create:  function() { return new FillXform()},
    preparedModel: {type: 'gradient', gradient: 'path', center:{left:0.5,top:0.5},
      stops: [
        {position:0, color:{argb:'FFFF0000'}},
        {position:0.5, color:{argb:'FF00FF00'}},
        {position:1, color:{argb:'FF0000FF'}}
      ]
    },
    xml: '<fill><gradientFill type="path" left="0.5" right="0.5" top="0.5" bottom="0.5">' +
            '<stop position="0"><color rgb="FFFF0000"/></stop>' +
            '<stop position="0.5"><color rgb="FF00FF00"/></stop>' +
            '<stop position="1"><color rgb="FF0000FF"/></stop>' +
         '</gradientFill></fill>',
    get parsedModel() { return this.preparedModel; },
    tests: ['write', 'parse']
  }
];

describe('FillXform', function () {
  testXformHelper(expectations);
});