!function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);let n={firstPlayer:document.querySelector(".player-0-panel"),secondPlayer:document.querySelector(".player-1-panel"),scoreFirstPlayer:document.querySelector("#score-0"),scoreSecondPlayer:document.querySelector("#score-1"),currentScoreFirstPlayer:document.querySelector("#current-0"),currentScoreSecondPlayer:document.querySelector("#current-1"),btnRoll:document.querySelector(".btn-roll"),btnHold:document.querySelector(".btn-hold"),nameFirstPlayer:document.getElementById("name-0"),nameSecondPlayer:document.getElementById("name-1"),dice:document.querySelector(".dice"),new:document.querySelector(".btn-new")},c={scores:[null,null],gamePlay:!1,roundScore:null,activePlayer:null},o=()=>{c.activePlayer=0,c.scores=[0,0],c.roundScore=0,c.gamePlay=!0,n.scoreFirstPlayer.textContent="0",n.scoreSecondPlayer.textContent="0",n.currentScoreFirstPlayer.textContent="0",n.currentScoreSecondPlayer.textContent="0",n.firstPlayer.classList.add("active"),n.firstPlayer.classList.remove("winner"),n.secondPlayer.classList.remove("active"),n.secondPlayer.classList.remove("winner"),n.nameFirstPlayer.textContent="Player 1",n.nameSecondPlayer.textContent="Player 2"},l=()=>{0===c.activePlayer?(c.activePlayer=1,n.firstPlayer.classList.remove("active"),n.secondPlayer.classList.add("active")):(c.activePlayer=0,n.firstPlayer.classList.add("active"),n.secondPlayer.classList.remove("active")),c.roundScore=0,n.currentScoreFirstPlayer.textContent="0",n.currentScoreSecondPlayer.textContent="0"};r.p,r.p,r.p,r.p,r.p,r.p;o(),n.btnRoll.addEventListener("click",e=>{if(!0===c.gamePlay){let e=Math.round(5*Math.random()+1);n.dice.src=`img/dice-${e}.png`,e>1?(c.roundScore=c.roundScore+e,document.querySelector("#current-"+c.activePlayer).textContent=c.roundScore):l()}}),n.btnHold.addEventListener("click",e=>{!0===c.gamePlay&&(c.scores[c.activePlayer]=c.scores[c.activePlayer]+c.roundScore,document.querySelector("#score-"+c.activePlayer).textContent=c.scores[c.activePlayer],c.scores[c.activePlayer]>=100&&(document.getElementById("name-"+c.activePlayer).textContent="Winner!",document.querySelector(`.player-${c.activePlayer}-panel`).classList.add("winner"),c.gamePlay=!1),l())}),n.new.addEventListener("click",o)}]);