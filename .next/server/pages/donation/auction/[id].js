(function() {
var exports = {};
exports.id = "pages/donation/auction/[id]";
exports.ids = ["pages/donation/auction/[id]"];
exports.modules = {

/***/ "./contracts/deployments/metis/MetisERC721.json":
/*!******************************************************!*\
  !*** ./contracts/deployments/metis/MetisERC721.json ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"address":"0x7E25f002D76b530be68b34A62f9B2A92Fe6E3518","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"BidId","type":"uint256"}],"name":"BidURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_EventTokenSearchIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_SearchedStore","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"_getSearchedTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bidId","type":"uint256"},{"internalType":"string","name":"_bidURI","type":"string"}],"name":"_setBidURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"},{"internalType":"string","name":"_eventURI","type":"string"}],"name":"_setEventURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"TokenBidId","type":"uint256"},{"internalType":"uint256","name":"TokenId","type":"uint256"},{"internalType":"string","name":"_BidURI","type":"string"}],"name":"_setTokenBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"EventTokenId","type":"uint256"},{"internalType":"uint256","name":"EventId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"_setTokenEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"_setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_claimer","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint256","name":"_eventid","type":"uint256"}],"name":"claimToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"_bidURI","type":"string"},{"internalType":"string","name":"_updatedURI","type":"string"},{"internalType":"uint256","name":"_eventid","type":"uint256"}],"name":"createBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_claimer","type":"address"},{"internalType":"string","name":"_eventURI","type":"string"}],"name":"createEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"eventURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_bidURI","type":"string"}],"name":"getBidIdByUri","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"TokenID","type":"uint256"}],"name":"getBidsSearchToken","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"EventId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"getGetEventsTokenID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"TokenID","type":"uint256"}],"name":"getTotalBid","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"gettokenIdByUri","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"EventID","type":"uint256"}],"name":"gettokenSearchEventTotal","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}],"transactionHash":"0x4bbe98b9a5512b84bbab8d7793558403fd33225db87b3ba3f24b47458f7cd57f","receipt":{"to":null,"from":"0x168e007d9f5a794794E40035C5214963cb16BFB7","contractAddress":"0x7E25f002D76b530be68b34A62f9B2A92Fe6E3518","transactionIndex":0,"gasUsed":"26744826","logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","blockHash":"0xb14698cc6040c27d7d5fa15d14de8974804da6f14721d1e8039bbf84ebf30431","transactionHash":"0x4bbe98b9a5512b84bbab8d7793558403fd33225db87b3ba3f24b47458f7cd57f","logs":[],"blockNumber":112478,"cumulativeGasUsed":"26744826","status":1,"byzantium":true},"args":["Metis","MET"],"solcInputHash":"0d1e5a382ac30ed4bc4e481de200269e","metadata":"{\\"compiler\\":{\\"version\\":\\"0.8.6+commit.11564f7e\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"symbol\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"approved\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"ApprovalForAll\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"BidId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"BidURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"_EventTokenSearchIds\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"_SearchedStore\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"_getSearchedTokenURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"bidId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_bidURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setBidURI\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"eventId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_eventURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setEventURI\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"TokenBidId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"TokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_BidURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setTokenBid\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"EventTokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"EventId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setTokenEvent\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setTokenURI\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_claimer\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_eventid\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"claimToken\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_bidURI\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_updatedURI\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_eventid\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"createBid\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_claimer\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_eventURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"createEvent\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"eventId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"eventURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getApproved\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"_bidURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"getBidIdByUri\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"TokenID\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getBidsSearchToken\\",\\"outputs\\":[{\\"internalType\\":\\"string[]\\",\\"name\\":\\"\\",\\"type\\":\\"string[]\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"EventId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"getGetEventsTokenID\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"TokenID\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getTotalBid\\",\\"outputs\\":[{\\"internalType\\":\\"string[]\\",\\"name\\":\\"\\",\\"type\\":\\"string[]\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"gettokenIdByUri\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"EventID\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"gettokenSearchEventTotal\\",\\"outputs\\":[{\\"internalType\\":\\"string[]\\",\\"name\\":\\"\\",\\"type\\":\\"string[]\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"}],\\"name\\":\\"isApprovedForAll\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"ownerOf\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"bytes\\",\\"name\\":\\"_data\\",\\"type\\":\\"bytes\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"setApprovalForAll\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bytes4\\",\\"name\\":\\"interfaceId\\",\\"type\\":\\"bytes4\\"}],\\"name\\":\\"supportsInterface\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"tokenURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalEvent\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{\\"approve(address,uint256)\\":{\\"details\\":\\"See {IERC721-approve}.\\"},\\"balanceOf(address)\\":{\\"details\\":\\"See {IERC721-balanceOf}.\\"},\\"getApproved(uint256)\\":{\\"details\\":\\"See {IERC721-getApproved}.\\"},\\"isApprovedForAll(address,address)\\":{\\"details\\":\\"See {IERC721-isApprovedForAll}.\\"},\\"name()\\":{\\"details\\":\\"See {IERC721Metadata-name}.\\"},\\"ownerOf(uint256)\\":{\\"details\\":\\"See {IERC721-ownerOf}.\\"},\\"safeTransferFrom(address,address,uint256)\\":{\\"details\\":\\"See {IERC721-safeTransferFrom}.\\"},\\"safeTransferFrom(address,address,uint256,bytes)\\":{\\"details\\":\\"See {IERC721-safeTransferFrom}.\\"},\\"setApprovalForAll(address,bool)\\":{\\"details\\":\\"See {IERC721-setApprovalForAll}.\\"},\\"supportsInterface(bytes4)\\":{\\"details\\":\\"See {IERC165-supportsInterface}.\\"},\\"symbol()\\":{\\"details\\":\\"See {IERC721Metadata-symbol}.\\"},\\"tokenURI(uint256)\\":{\\"details\\":\\"See {IERC721Metadata-tokenURI}.\\"},\\"transferFrom(address,address,uint256)\\":{\\"details\\":\\"See {IERC721-transferFrom}.\\"}},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"contracts/MetisERC721.sol\\":\\"MetisERC721\\"},\\"evmVersion\\":\\"berlin\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\",\\"useLiteralContent\\":true},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"@openzeppelin/contracts/token/ERC721/ERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/ERC721.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"./IERC721.sol\\\\\\";\\\\nimport \\\\\\"./IERC721Receiver.sol\\\\\\";\\\\nimport \\\\\\"./extensions/IERC721Metadata.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Address.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Context.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Strings.sol\\\\\\";\\\\nimport \\\\\\"../../utils/introspection/ERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\\\\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\\\\n * {ERC721Enumerable}.\\\\n */\\\\ncontract ERC721 is Context, ERC165, IERC721, IERC721Metadata {\\\\n    using Address for address;\\\\n    using Strings for uint256;\\\\n\\\\n    // Token name\\\\n    string private _name;\\\\n\\\\n    // Token symbol\\\\n    string private _symbol;\\\\n\\\\n    // Mapping from token ID to owner address\\\\n    mapping(uint256 => address) private _owners;\\\\n\\\\n    // Mapping owner address to token count\\\\n    mapping(address => uint256) private _balances;\\\\n\\\\n    // Mapping from token ID to approved address\\\\n    mapping(uint256 => address) private _tokenApprovals;\\\\n\\\\n    // Mapping from owner to operator approvals\\\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\\\n\\\\n    /**\\\\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\\\\n     */\\\\n    constructor(string memory name_, string memory symbol_) {\\\\n        _name = name_;\\\\n        _symbol = symbol_;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC165-supportsInterface}.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\\\\n        return\\\\n            interfaceId == type(IERC721).interfaceId ||\\\\n            interfaceId == type(IERC721Metadata).interfaceId ||\\\\n            super.supportsInterface(interfaceId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-balanceOf}.\\\\n     */\\\\n    function balanceOf(address owner) public view virtual override returns (uint256) {\\\\n        require(owner != address(0), \\\\\\"ERC721: balance query for the zero address\\\\\\");\\\\n        return _balances[owner];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-ownerOf}.\\\\n     */\\\\n    function ownerOf(uint256 tokenId) public view virtual override returns (address) {\\\\n        address owner = _owners[tokenId];\\\\n        require(owner != address(0), \\\\\\"ERC721: owner query for nonexistent token\\\\\\");\\\\n        return owner;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-name}.\\\\n     */\\\\n    function name() public view virtual override returns (string memory) {\\\\n        return _name;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-symbol}.\\\\n     */\\\\n    function symbol() public view virtual override returns (string memory) {\\\\n        return _symbol;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-tokenURI}.\\\\n     */\\\\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721Metadata: URI query for nonexistent token\\\\\\");\\\\n\\\\n        string memory baseURI = _baseURI();\\\\n        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : \\\\\\"\\\\\\";\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\\\\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\\\\n     * by default, can be overriden in child contracts.\\\\n     */\\\\n    function _baseURI() internal view virtual returns (string memory) {\\\\n        return \\\\\\"\\\\\\";\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-approve}.\\\\n     */\\\\n    function approve(address to, uint256 tokenId) public virtual override {\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n        require(to != owner, \\\\\\"ERC721: approval to current owner\\\\\\");\\\\n\\\\n        require(\\\\n            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\\\\n            \\\\\\"ERC721: approve caller is not owner nor approved for all\\\\\\"\\\\n        );\\\\n\\\\n        _approve(to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-getApproved}.\\\\n     */\\\\n    function getApproved(uint256 tokenId) public view virtual override returns (address) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721: approved query for nonexistent token\\\\\\");\\\\n\\\\n        return _tokenApprovals[tokenId];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-setApprovalForAll}.\\\\n     */\\\\n    function setApprovalForAll(address operator, bool approved) public virtual override {\\\\n        _setApprovalForAll(_msgSender(), operator, approved);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-isApprovedForAll}.\\\\n     */\\\\n    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {\\\\n        return _operatorApprovals[owner][operator];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-transferFrom}.\\\\n     */\\\\n    function transferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) public virtual override {\\\\n        //solhint-disable-next-line max-line-length\\\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\\\\\"ERC721: transfer caller is not owner nor approved\\\\\\");\\\\n\\\\n        _transfer(from, to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-safeTransferFrom}.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) public virtual override {\\\\n        safeTransferFrom(from, to, tokenId, \\\\\\"\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-safeTransferFrom}.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) public virtual override {\\\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\\\\\"ERC721: transfer caller is not owner nor approved\\\\\\");\\\\n        _safeTransfer(from, to, tokenId, _data);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\\\n     *\\\\n     * `_data` is additional data, it has no specified format and it is sent in call to `to`.\\\\n     *\\\\n     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.\\\\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _safeTransfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) internal virtual {\\\\n        _transfer(from, to, tokenId);\\\\n        require(_checkOnERC721Received(from, to, tokenId, _data), \\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns whether `tokenId` exists.\\\\n     *\\\\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\\\\n     *\\\\n     * Tokens start existing when they are minted (`_mint`),\\\\n     * and stop existing when they are burned (`_burn`).\\\\n     */\\\\n    function _exists(uint256 tokenId) internal view virtual returns (bool) {\\\\n        return _owners[tokenId] != address(0);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns whether `spender` is allowed to manage `tokenId`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721: operator query for nonexistent token\\\\\\");\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Safely mints `tokenId` and transfers it to `to`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must not exist.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _safeMint(address to, uint256 tokenId) internal virtual {\\\\n        _safeMint(to, tokenId, \\\\\\"\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\\\\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\\\\n     */\\\\n    function _safeMint(\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) internal virtual {\\\\n        _mint(to, tokenId);\\\\n        require(\\\\n            _checkOnERC721Received(address(0), to, tokenId, _data),\\\\n            \\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\"\\\\n        );\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Mints `tokenId` and transfers it to `to`.\\\\n     *\\\\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must not exist.\\\\n     * - `to` cannot be the zero address.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _mint(address to, uint256 tokenId) internal virtual {\\\\n        require(to != address(0), \\\\\\"ERC721: mint to the zero address\\\\\\");\\\\n        require(!_exists(tokenId), \\\\\\"ERC721: token already minted\\\\\\");\\\\n\\\\n        _beforeTokenTransfer(address(0), to, tokenId);\\\\n\\\\n        _balances[to] += 1;\\\\n        _owners[tokenId] = to;\\\\n\\\\n        emit Transfer(address(0), to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Destroys `tokenId`.\\\\n     * The approval is cleared when the token is burned.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _burn(uint256 tokenId) internal virtual {\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n\\\\n        _beforeTokenTransfer(owner, address(0), tokenId);\\\\n\\\\n        // Clear approvals\\\\n        _approve(address(0), tokenId);\\\\n\\\\n        _balances[owner] -= 1;\\\\n        delete _owners[tokenId];\\\\n\\\\n        emit Transfer(owner, address(0), tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Transfers `tokenId` from `from` to `to`.\\\\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must be owned by `from`.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _transfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) internal virtual {\\\\n        require(ERC721.ownerOf(tokenId) == from, \\\\\\"ERC721: transfer of token that is not own\\\\\\");\\\\n        require(to != address(0), \\\\\\"ERC721: transfer to the zero address\\\\\\");\\\\n\\\\n        _beforeTokenTransfer(from, to, tokenId);\\\\n\\\\n        // Clear approvals from the previous owner\\\\n        _approve(address(0), tokenId);\\\\n\\\\n        _balances[from] -= 1;\\\\n        _balances[to] += 1;\\\\n        _owners[tokenId] = to;\\\\n\\\\n        emit Transfer(from, to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Approve `to` to operate on `tokenId`\\\\n     *\\\\n     * Emits a {Approval} event.\\\\n     */\\\\n    function _approve(address to, uint256 tokenId) internal virtual {\\\\n        _tokenApprovals[tokenId] = to;\\\\n        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\\\n     *\\\\n     * Emits a {ApprovalForAll} event.\\\\n     */\\\\n    function _setApprovalForAll(\\\\n        address owner,\\\\n        address operator,\\\\n        bool approved\\\\n    ) internal virtual {\\\\n        require(owner != operator, \\\\\\"ERC721: approve to caller\\\\\\");\\\\n        _operatorApprovals[owner][operator] = approved;\\\\n        emit ApprovalForAll(owner, operator, approved);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.\\\\n     * The call is not executed if the target address is not a contract.\\\\n     *\\\\n     * @param from address representing the previous owner of the given token ID\\\\n     * @param to target address that will receive the tokens\\\\n     * @param tokenId uint256 ID of the token to be transferred\\\\n     * @param _data bytes optional data to send along with the call\\\\n     * @return bool whether the call correctly returned the expected magic value\\\\n     */\\\\n    function _checkOnERC721Received(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) private returns (bool) {\\\\n        if (to.isContract()) {\\\\n            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {\\\\n                return retval == IERC721Receiver.onERC721Received.selector;\\\\n            } catch (bytes memory reason) {\\\\n                if (reason.length == 0) {\\\\n                    revert(\\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\");\\\\n                } else {\\\\n                    assembly {\\\\n                        revert(add(32, reason), mload(reason))\\\\n                    }\\\\n                }\\\\n            }\\\\n        } else {\\\\n            return true;\\\\n        }\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Hook that is called before any token transfer. This includes minting\\\\n     * and burning.\\\\n     *\\\\n     * Calling conditions:\\\\n     *\\\\n     * - When `from` and `to` are both non-zero, ``from``\'s `tokenId` will be\\\\n     * transferred to `to`.\\\\n     * - When `from` is zero, `tokenId` will be minted for `to`.\\\\n     * - When `to` is zero, ``from``\'s `tokenId` will be burned.\\\\n     * - `from` and `to` are never both zero.\\\\n     *\\\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\\\n     */\\\\n    function _beforeTokenTransfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) internal virtual {}\\\\n}\\\\n\\",\\"keccak256\\":\\"0x81c02855bc239e16ec09eee000a8bec691424c715188d6d881037e69c45414c4\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/IERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../../utils/introspection/IERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Required interface of an ERC721 compliant contract.\\\\n */\\\\ninterface IERC721 is IERC165 {\\\\n    /**\\\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\\\n     */\\\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\\\n\\\\n    /**\\\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\\\n     */\\\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\\\n\\\\n    /**\\\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\\\n     */\\\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\\\n\\\\n    /**\\\\n     * @dev Returns the number of tokens in ``owner``\'s account.\\\\n     */\\\\n    function balanceOf(address owner) external view returns (uint256 balance);\\\\n\\\\n    /**\\\\n     * @dev Returns the owner of the `tokenId` token.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) external;\\\\n\\\\n    /**\\\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\\\n     *\\\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must be owned by `from`.\\\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function transferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) external;\\\\n\\\\n    /**\\\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\\\n     * The approval is cleared when the token is transferred.\\\\n     *\\\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - The caller must own the token or be an approved operator.\\\\n     * - `tokenId` must exist.\\\\n     *\\\\n     * Emits an {Approval} event.\\\\n     */\\\\n    function approve(address to, uint256 tokenId) external;\\\\n\\\\n    /**\\\\n     * @dev Returns the account approved for `tokenId` token.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\\\n\\\\n    /**\\\\n     * @dev Approve or remove `operator` as an operator for the caller.\\\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - The `operator` cannot be the caller.\\\\n     *\\\\n     * Emits an {ApprovalForAll} event.\\\\n     */\\\\n    function setApprovalForAll(address operator, bool _approved) external;\\\\n\\\\n    /**\\\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\\\n     *\\\\n     * See {setApprovalForAll}\\\\n     */\\\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes calldata data\\\\n    ) external;\\\\n}\\\\n\\",\\"keccak256\\":\\"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721Receiver.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @title ERC721 token receiver interface\\\\n * @dev Interface for any contract that wants to support safeTransfers\\\\n * from ERC721 asset contracts.\\\\n */\\\\ninterface IERC721Receiver {\\\\n    /**\\\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\\\n     * by `operator` from `from`, this function is called.\\\\n     *\\\\n     * It must return its Solidity selector to confirm the token transfer.\\\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\\\\n     *\\\\n     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\\\\n     */\\\\n    function onERC721Received(\\\\n        address operator,\\\\n        address from,\\\\n        uint256 tokenId,\\\\n        bytes calldata data\\\\n    ) external returns (bytes4);\\\\n}\\\\n\\",\\"keccak256\\":\\"0xd5fa74b4fb323776fa4a8158800fec9d5ac0fec0d6dd046dd93798632ada265f\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Metadata.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../IERC721.sol\\\\\\";\\\\n\\\\n/**\\\\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\\\n * @dev See https://eips.ethereum.org/EIPS/eip-721\\\\n */\\\\ninterface IERC721Metadata is IERC721 {\\\\n    /**\\\\n     * @dev Returns the token collection name.\\\\n     */\\\\n    function name() external view returns (string memory);\\\\n\\\\n    /**\\\\n     * @dev Returns the token collection symbol.\\\\n     */\\\\n    function symbol() external view returns (string memory);\\\\n\\\\n    /**\\\\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\\\\n     */\\\\n    function tokenURI(uint256 tokenId) external view returns (string memory);\\\\n}\\\\n\\",\\"keccak256\\":\\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Address.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Address.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Collection of functions related to the address type\\\\n */\\\\nlibrary Address {\\\\n    /**\\\\n     * @dev Returns true if `account` is a contract.\\\\n     *\\\\n     * [IMPORTANT]\\\\n     * ====\\\\n     * It is unsafe to assume that an address for which this function returns\\\\n     * false is an externally-owned account (EOA) and not a contract.\\\\n     *\\\\n     * Among others, `isContract` will return false for the following\\\\n     * types of addresses:\\\\n     *\\\\n     *  - an externally-owned account\\\\n     *  - a contract in construction\\\\n     *  - an address where a contract will be created\\\\n     *  - an address where a contract lived, but was destroyed\\\\n     * ====\\\\n     */\\\\n    function isContract(address account) internal view returns (bool) {\\\\n        // This method relies on extcodesize, which returns 0 for contracts in\\\\n        // construction, since the code is only stored at the end of the\\\\n        // constructor execution.\\\\n\\\\n        uint256 size;\\\\n        assembly {\\\\n            size := extcodesize(account)\\\\n        }\\\\n        return size > 0;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\\\n     * `recipient`, forwarding all available gas and reverting on errors.\\\\n     *\\\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\\\n     * imposed by `transfer`, making them unable to receive funds via\\\\n     * `transfer`. {sendValue} removes this limitation.\\\\n     *\\\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\\\n     *\\\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\\\n     * taken to not create reentrancy vulnerabilities. Consider using\\\\n     * {ReentrancyGuard} or the\\\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\\\n     */\\\\n    function sendValue(address payable recipient, uint256 amount) internal {\\\\n        require(address(this).balance >= amount, \\\\\\"Address: insufficient balance\\\\\\");\\\\n\\\\n        (bool success, ) = recipient.call{value: amount}(\\\\\\"\\\\\\");\\\\n        require(success, \\\\\\"Address: unable to send value, recipient may have reverted\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Performs a Solidity function call using a low level `call`. A\\\\n     * plain `call` is an unsafe replacement for a function call: use this\\\\n     * function instead.\\\\n     *\\\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\\\n     * function (like regular Solidity function calls).\\\\n     *\\\\n     * Returns the raw returned data. To convert to the expected return value,\\\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `target` must be a contract.\\\\n     * - calling `target` with `data` must not revert.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\\\n        return functionCall(target, data, \\\\\\"Address: low-level call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        return functionCallWithValue(target, data, 0, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but also transferring `value` wei to `target`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - the calling contract must have an ETH balance of at least `value`.\\\\n     * - the called Solidity function must be `payable`.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCallWithValue(\\\\n        address target,\\\\n        bytes memory data,\\\\n        uint256 value\\\\n    ) internal returns (bytes memory) {\\\\n        return functionCallWithValue(target, data, value, \\\\\\"Address: low-level call with value failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCallWithValue(\\\\n        address target,\\\\n        bytes memory data,\\\\n        uint256 value,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        require(address(this).balance >= value, \\\\\\"Address: insufficient balance for call\\\\\\");\\\\n        require(isContract(target), \\\\\\"Address: call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but performing a static call.\\\\n     *\\\\n     * _Available since v3.3._\\\\n     */\\\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\\\n        return functionStaticCall(target, data, \\\\\\"Address: low-level static call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\\\n     * but performing a static call.\\\\n     *\\\\n     * _Available since v3.3._\\\\n     */\\\\n    function functionStaticCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal view returns (bytes memory) {\\\\n        require(isContract(target), \\\\\\"Address: static call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but performing a delegate call.\\\\n     *\\\\n     * _Available since v3.4._\\\\n     */\\\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\\\n        return functionDelegateCall(target, data, \\\\\\"Address: low-level delegate call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\\\n     * but performing a delegate call.\\\\n     *\\\\n     * _Available since v3.4._\\\\n     */\\\\n    function functionDelegateCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        require(isContract(target), \\\\\\"Address: delegate call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\\\n     * revert reason using the provided one.\\\\n     *\\\\n     * _Available since v4.3._\\\\n     */\\\\n    function verifyCallResult(\\\\n        bool success,\\\\n        bytes memory returndata,\\\\n        string memory errorMessage\\\\n    ) internal pure returns (bytes memory) {\\\\n        if (success) {\\\\n            return returndata;\\\\n        } else {\\\\n            // Look for revert reason and bubble it up if present\\\\n            if (returndata.length > 0) {\\\\n                // The easiest way to bubble the revert reason is using memory via assembly\\\\n\\\\n                assembly {\\\\n                    let returndata_size := mload(returndata)\\\\n                    revert(add(32, returndata), returndata_size)\\\\n                }\\\\n            } else {\\\\n                revert(errorMessage);\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x51b758a8815ecc9596c66c37d56b1d33883a444631a3f916b9fe65cb863ef7c4\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Context.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Provides information about the current execution context, including the\\\\n * sender of the transaction and its data. While these are generally available\\\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\\\n * manner, since when dealing with meta-transactions the account sending and\\\\n * paying for execution may not be the actual sender (as far as an application\\\\n * is concerned).\\\\n *\\\\n * This contract is only required for intermediate, library-like contracts.\\\\n */\\\\nabstract contract Context {\\\\n    function _msgSender() internal view virtual returns (address) {\\\\n        return msg.sender;\\\\n    }\\\\n\\\\n    function _msgData() internal view virtual returns (bytes calldata) {\\\\n        return msg.data;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Strings.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev String operations.\\\\n */\\\\nlibrary Strings {\\\\n    bytes16 private constant _HEX_SYMBOLS = \\\\\\"0123456789abcdef\\\\\\";\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\\\n     */\\\\n    function toString(uint256 value) internal pure returns (string memory) {\\\\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\\\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\\\n\\\\n        if (value == 0) {\\\\n            return \\\\\\"0\\\\\\";\\\\n        }\\\\n        uint256 temp = value;\\\\n        uint256 digits;\\\\n        while (temp != 0) {\\\\n            digits++;\\\\n            temp /= 10;\\\\n        }\\\\n        bytes memory buffer = new bytes(digits);\\\\n        while (value != 0) {\\\\n            digits -= 1;\\\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\\\n            value /= 10;\\\\n        }\\\\n        return string(buffer);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\\\n     */\\\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\\\n        if (value == 0) {\\\\n            return \\\\\\"0x00\\\\\\";\\\\n        }\\\\n        uint256 temp = value;\\\\n        uint256 length = 0;\\\\n        while (temp != 0) {\\\\n            length++;\\\\n            temp >>= 8;\\\\n        }\\\\n        return toHexString(value, length);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\\\n     */\\\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\\\n        bytes memory buffer = new bytes(2 * length + 2);\\\\n        buffer[0] = \\\\\\"0\\\\\\";\\\\n        buffer[1] = \\\\\\"x\\\\\\";\\\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\\\n            value >>= 4;\\\\n        }\\\\n        require(value == 0, \\\\\\"Strings: hex length insufficient\\\\\\");\\\\n        return string(buffer);\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x32c202bd28995dd20c4347b7c6467a6d3241c74c8ad3edcbb610cd9205916c45\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/introspection/ERC165.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"./IERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Implementation of the {IERC165} interface.\\\\n *\\\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\\\n * for the additional interface id that will be supported. For example:\\\\n *\\\\n * ```solidity\\\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\\\n * }\\\\n * ```\\\\n *\\\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\\\n */\\\\nabstract contract ERC165 is IERC165 {\\\\n    /**\\\\n     * @dev See {IERC165-supportsInterface}.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\\\n        return interfaceId == type(IERC165).interfaceId;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/introspection/IERC165.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Interface of the ERC165 standard, as defined in the\\\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\\\n *\\\\n * Implementers can declare support of contract interfaces, which can then be\\\\n * queried by others ({ERC165Checker}).\\\\n *\\\\n * For an implementation, see {ERC165}.\\\\n */\\\\ninterface IERC165 {\\\\n    /**\\\\n     * @dev Returns true if this contract implements the interface defined by\\\\n     * `interfaceId`. See the corresponding\\\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\\\n     * to learn more about how these ids are created.\\\\n     *\\\\n     * This function call must use less than 30 000 gas.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\\\n}\\\\n\\",\\"keccak256\\":\\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\\",\\"license\\":\\"MIT\\"},\\"contracts/MetisERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\npragma solidity ^0.8.0;\\\\nimport \\\\\\"@openzeppelin/contracts/token/ERC721/ERC721.sol\\\\\\";\\\\nimport \\\\\\"@openzeppelin/contracts/utils/Strings.sol\\\\\\";\\\\n\\\\ncontract MetisERC721 is ERC721 {\\\\n\\\\tuint256 private _tokenIds;\\\\n\\\\tuint256 private _bidIds;\\\\n\\\\tuint256 private _eventIds;\\\\n\\\\tuint256 private _EventTokenIds;\\\\n\\\\tuint256 private _TokenBidIds;\\\\n\\\\tstring[2] data1;\\\\n\\\\tuint256 public _EventTokenSearchIds;\\\\n\\\\tmapping(uint256 => string[2]) private AllEventTokens;\\\\n\\\\tmapping(uint256 => string[2]) private AllTokensBids;\\\\n\\\\tmapping(uint256 => string[2]) public _SearchedStore;\\\\n\\\\tmapping(uint256 => string) private _bidURIs;\\\\n\\\\tmapping(uint256 => string) private _tokenURIs;\\\\n\\\\tmapping(uint256 => string) private _eventURIs;\\\\n\\\\tmapping(string => string) private _eventTokens;\\\\n\\\\n\\\\tconstructor(string memory name, string memory symbol)\\\\n\\\\t\\\\tERC721(name, symbol)\\\\n\\\\t{}\\\\n\\\\n\\\\tfunction claimToken(\\\\n\\\\t\\\\taddress _claimer,\\\\n\\\\t\\\\tstring memory _tokenURI,\\\\n\\\\t\\\\tuint256 _eventid\\\\n\\\\t) public returns (uint256) {\\\\n\\\\t\\\\t_mint(_claimer, _tokenIds);\\\\n\\\\t\\\\t_setTokenURI(_tokenIds, _tokenURI);\\\\n\\\\t\\\\t_setTokenEvent(_EventTokenIds, _eventid, _tokenURI);\\\\n\\\\t\\\\t_tokenIds++;\\\\n\\\\t\\\\t_EventTokenIds++;\\\\n\\\\t\\\\treturn _tokenIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction _setTokenEvent(\\\\n\\\\t\\\\tuint256 EventTokenId,\\\\n\\\\t\\\\tuint256 EventId,\\\\n\\\\t\\\\tstring memory _tokenURI\\\\n\\\\t) public virtual {\\\\n\\\\t\\\\tAllEventTokens[EventTokenId] = [\\\\n\\\\t\\\\t\\\\tStrings.toString(EventId),\\\\n\\\\t\\\\t\\\\tstring(_tokenURI)\\\\n\\\\t\\\\t];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction createEvent(address _claimer, string memory _eventURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\treturns (uint256)\\\\n\\\\t{\\\\n\\\\t\\\\t_setEventURI(_eventIds, _eventURI);\\\\n\\\\n\\\\t\\\\t_eventIds++;\\\\n\\\\n\\\\t\\\\treturn _eventIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction gettokenIdByUri(string memory _tokenURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tview\\\\n\\\\t\\\\tvirtual\\\\n\\\\t\\\\treturns (uint256)\\\\n\\\\t{\\\\n\\\\t\\\\tfor (uint256 i = 0; i < _tokenIds; i++) {\\\\n\\\\t\\\\t\\\\tif (\\\\n\\\\t\\\\t\\\\t\\\\tkeccak256(bytes(_tokenURIs[i])) == keccak256(bytes(_tokenURI))\\\\n\\\\t\\\\t\\\\t) {\\\\n\\\\t\\\\t\\\\t\\\\treturn i;\\\\n\\\\t\\\\t\\\\t}\\\\n\\\\t\\\\t}\\\\n\\\\n\\\\t\\\\treturn 0;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction getBidIdByUri(string memory _bidURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tview\\\\n\\\\t\\\\tvirtual\\\\n\\\\t\\\\treturns (uint256)\\\\n\\\\t{\\\\n\\\\t\\\\tfor (uint256 i = 0; i < _bidIds; i++) {\\\\n\\\\t\\\\t\\\\tif (keccak256(bytes(_bidURIs[i])) == keccak256(bytes(_bidURI))) {\\\\n\\\\t\\\\t\\\\t\\\\treturn i;\\\\n\\\\t\\\\t\\\\t}\\\\n\\\\t\\\\t}\\\\n\\\\n\\\\t\\\\treturn 0;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction gettokenSearchEventTotal(uint256 EventID)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tview\\\\n\\\\t\\\\tvirtual\\\\n\\\\t\\\\treturns (string[] memory)\\\\n\\\\t{\\\\n\\\\t\\\\tstring[] memory _SearchedStoreToken = new string[](10);\\\\n\\\\n\\\\t\\\\tuint256 _EventTokenSearchIds2 = 0;\\\\n\\\\n\\\\t\\\\tfor (uint256 i = 0; i < _EventTokenIds; i++) {\\\\n\\\\t\\\\t\\\\tif (\\\\n\\\\t\\\\t\\\\t\\\\tkeccak256(bytes(AllEventTokens[i][0])) ==\\\\n\\\\t\\\\t\\\\t\\\\tkeccak256(bytes(Strings.toString(EventID)))\\\\n\\\\t\\\\t\\\\t) {\\\\n\\\\t\\\\t\\\\t\\\\t_SearchedStoreToken[_EventTokenSearchIds2] = AllEventTokens[i][\\\\n\\\\t\\\\t\\\\t\\\\t\\\\t1\\\\n\\\\t\\\\t\\\\t\\\\t];\\\\n\\\\t\\\\t\\\\t\\\\t_EventTokenSearchIds2++;\\\\n\\\\t\\\\t\\\\t}\\\\n\\\\t\\\\t}\\\\n\\\\n\\\\t\\\\treturn _SearchedStoreToken;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction getGetEventsTokenID(uint256 EventId, string memory _tokenURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tview\\\\n\\\\t\\\\tvirtual\\\\n\\\\t\\\\treturns (uint256)\\\\n\\\\t{\\\\n\\\\t\\\\tfor (uint256 i = 0; i < _EventTokenIds; i++) {\\\\n\\\\t\\\\t\\\\tif (\\\\n\\\\t\\\\t\\\\t\\\\tkeccak256(bytes(AllEventTokens[i][0])) ==\\\\n\\\\t\\\\t\\\\t\\\\tkeccak256(bytes(Strings.toString(EventId))) &&\\\\n\\\\t\\\\t\\\\t\\\\tkeccak256(bytes(AllEventTokens[i][1])) ==\\\\n\\\\t\\\\t\\\\t\\\\tkeccak256(bytes(_tokenURI))\\\\n\\\\t\\\\t\\\\t) {\\\\n\\\\t\\\\t\\\\t\\\\treturn i;\\\\n\\\\t\\\\t\\\\t}\\\\n\\\\t\\\\t}\\\\n\\\\n\\\\t\\\\treturn 0;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction _getSearchedTokenURI(uint256 _tokenId)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tview\\\\n\\\\t\\\\tvirtual\\\\n\\\\t\\\\treturns (string memory)\\\\n\\\\t{\\\\n\\\\t\\\\treturn _SearchedStore[_tokenId][0];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction _setEventURI(uint256 eventId, string memory _eventURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tvirtual\\\\n\\\\t{\\\\n\\\\t\\\\t_eventURIs[eventId] = _eventURI;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction _setTokenURI(uint256 tokenId, string memory _tokenURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tvirtual\\\\n\\\\t{\\\\n\\\\t\\\\trequire(\\\\n\\\\t\\\\t\\\\t_exists(tokenId),\\\\n\\\\t\\\\t\\\\t\\\\\\"ERC721Metadata: URI set of nonexistent token\\\\\\"\\\\n\\\\t\\\\t);\\\\n\\\\t\\\\t_tokenURIs[tokenId] = _tokenURI;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction eventURI(uint256 eventId) public view returns (string memory) {\\\\n\\\\t\\\\treturn _eventURIs[eventId];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction tokenURI(uint256 tokenId)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tview\\\\n\\\\t\\\\tvirtual\\\\n\\\\t\\\\toverride\\\\n\\\\t\\\\treturns (string memory)\\\\n\\\\t{\\\\n\\\\t\\\\trequire(\\\\n\\\\t\\\\t\\\\t_exists(tokenId),\\\\n\\\\t\\\\t\\\\t\\\\\\"ERC721Metadata: URI query for nonexistent token\\\\\\"\\\\n\\\\t\\\\t);\\\\n\\\\n\\\\t\\\\treturn _tokenURIs[tokenId];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction totalSupply() public view returns (uint256) {\\\\n\\\\t\\\\treturn _tokenIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction totalEvent() public view returns (uint256) {\\\\n\\\\t\\\\treturn _eventIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction _setBidURI(uint256 bidId, string memory _bidURI) public virtual {\\\\n\\\\t\\\\t_bidURIs[bidId] = _bidURI;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction BidURI(uint256 BidId) public view returns (string memory) {\\\\n\\\\t\\\\treturn _bidURIs[BidId];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction getTotalBid(uint256 TokenID)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tview\\\\n\\\\t\\\\tvirtual\\\\n\\\\t\\\\treturns (string[] memory)\\\\n\\\\t{\\\\n\\\\t\\\\tstring[] memory _SearchedStoreBid = new string[](10);\\\\n\\\\n\\\\t\\\\tuint256 _TokenBidSearchIds2 = 0;\\\\n\\\\n\\\\t\\\\tfor (uint256 i = 0; i < _TokenBidIds; i++) {\\\\n\\\\t\\\\t\\\\tif (\\\\n\\\\t\\\\t\\\\t\\\\tkeccak256(bytes(AllTokensBids[i][0])) ==\\\\n\\\\t\\\\t\\\\t\\\\tkeccak256(bytes(Strings.toString(TokenID)))\\\\n\\\\t\\\\t\\\\t) {\\\\n\\\\t\\\\t\\\\t\\\\t_SearchedStoreBid[_TokenBidSearchIds2] = AllTokensBids[i][1];\\\\n\\\\t\\\\t\\\\t\\\\t_TokenBidSearchIds2++;\\\\n\\\\t\\\\t\\\\t}\\\\n\\\\t\\\\t}\\\\n\\\\n\\\\t\\\\treturn _SearchedStoreBid;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction getBidsSearchToken(uint256 TokenID)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tview\\\\n\\\\t\\\\tvirtual\\\\n\\\\t\\\\treturns (string[] memory)\\\\n\\\\t{\\\\n\\\\t\\\\tstring[] memory _SearchedStoreBid = new string[](10);\\\\n\\\\n\\\\t\\\\tuint256 _TokenBidSearchIds2 = 0;\\\\n\\\\n\\\\t\\\\tfor (uint256 i = 0; i < _TokenBidIds; i++) {\\\\n\\\\t\\\\t\\\\tif (\\\\n\\\\t\\\\t\\\\t\\\\tkeccak256(bytes(AllTokensBids[i][0])) ==\\\\n\\\\t\\\\t\\\\t\\\\tkeccak256(bytes(Strings.toString(TokenID)))\\\\n\\\\t\\\\t\\\\t) {\\\\n\\\\t\\\\t\\\\t\\\\t_SearchedStoreBid[_TokenBidSearchIds2] = AllTokensBids[i][1];\\\\n\\\\t\\\\t\\\\t\\\\t_TokenBidSearchIds2++;\\\\n\\\\t\\\\t\\\\t}\\\\n\\\\t\\\\t}\\\\n\\\\n\\\\t\\\\treturn _SearchedStoreBid;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction _setTokenBid(\\\\n\\\\t\\\\tuint256 TokenBidId,\\\\n\\\\t\\\\tuint256 TokenId,\\\\n\\\\t\\\\tstring memory _BidURI\\\\n\\\\t) public virtual {\\\\n\\\\t\\\\tAllTokensBids[TokenBidId] = [\\\\n\\\\t\\\\t\\\\tStrings.toString(TokenId),\\\\n\\\\t\\\\t\\\\tstring(_BidURI)\\\\n\\\\t\\\\t];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction createBid(\\\\n\\\\t\\\\tuint256 _tokenId,\\\\n\\\\t\\\\tstring memory _bidURI,\\\\n\\\\t\\\\tstring memory _updatedURI,\\\\n\\\\t\\\\tuint256 _eventid\\\\n\\\\t) public {\\\\n\\\\t\\\\tuint256 _EventTokenId = getGetEventsTokenID(\\\\n\\\\t\\\\t\\\\t_eventid,\\\\n\\\\t\\\\t\\\\t_tokenURIs[_tokenId]\\\\n\\\\t\\\\t);\\\\n\\\\t\\\\t_tokenURIs[_tokenId] = _updatedURI;\\\\n\\\\t\\\\t_setTokenEvent(_EventTokenId, _eventid, _updatedURI);\\\\n\\\\n\\\\t\\\\t_setTokenBid(_TokenBidIds, _tokenId, _bidURI);\\\\n\\\\t\\\\t_TokenBidIds++;\\\\n\\\\t\\\\t_bidIds++;\\\\n\\\\t}\\\\n}\\\\n\\",\\"keccak256\\":\\"0x435789f269d21c3ca6bc3a2938a9c363de023bc30729e12ec267cc38590973b6\\",\\"license\\":\\"MIT\\"}},\\"version\\":1}","bytecode":"0x60806040523480156200001157600080fd5b5060405162004243380380620042438339818101604052810190620000379190620001a3565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b5050505050620003ac565b8280546200008390620002bd565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b60006200013c620001368462000251565b62000228565b9050828152602081018484840111156200015b576200015a6200038c565b5b6200016884828562000287565b509392505050565b600082601f83011262000188576200018762000387565b5b81516200019a84826020860162000125565b91505092915050565b60008060408385031215620001bd57620001bc62000396565b5b600083015167ffffffffffffffff811115620001de57620001dd62000391565b5b620001ec8582860162000170565b925050602083015167ffffffffffffffff81111562000210576200020f62000391565b5b6200021e8582860162000170565b9150509250929050565b60006200023462000247565b9050620002428282620002f3565b919050565b6000604051905090565b600067ffffffffffffffff8211156200026f576200026e62000358565b5b6200027a826200039b565b9050602081019050919050565b60005b83811015620002a75780820151818401526020810190506200028a565b83811115620002b7576000848401525b50505050565b60006002820490506001821680620002d657607f821691505b60208210811415620002ed57620002ec62000329565b5b50919050565b620002fe826200039b565b810181811067ffffffffffffffff8211171562000320576200031f62000358565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b613e8780620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c8063652d47251161011a578063aed47961116100ad578063d45fc5161161007c578063d45fc5161461066d578063d654e9931461069d578063e08033d3146106b9578063e985e9c5146106d5578063eb1d234d1461070557610206565b8063aed47961146105c1578063b10a5dfa146105f1578063b88d4fde14610621578063c87b56dd1461063d57610206565b8063932a196b116100e9578063932a196b1461052757806395d89b4114610557578063a0fd0c6a14610575578063a22cb465146105a557610206565b8063652d47251461047957806370a08231146104a95780637cedbc1e146104d95780637eadfa6a1461050957610206565b80631cd043d61161019d5780633592dd801161016c5780633592dd80146103b157806342842e0e146103cd578063446a92e3146103e95780635154380a146104195780636352211e1461044957610206565b80631cd043d61461031957806323b872dd1461033557806328520ab71461035157806335011d901461038157610206565b8063095ea7b3116101d9578063095ea7b3146102a55780630da3c49c146102c1578063144cbca6146102dd57806318160ddd146102fb57610206565b8063015388681461020b57806301ffc9a71461022757806306fdde0314610257578063081812fc14610275575b600080fd5b61022560048036038101906102209190612cd0565b610735565b005b610241600480360381019061023c9190612c00565b6107a9565b60405161024e9190613307565b60405180910390f35b61025f61088b565b60405161026c9190613322565b60405180910390f35b61028f600480360381019061028a9190612ca3565b61091d565b60405161029c919061327e565b60405180910390f35b6102bf60048036038101906102ba9190612bc0565b6109a2565b005b6102db60048036038101906102d69190612d2c565b610aba565b005b6102e5610bda565b6040516102f29190613524565b60405180910390f35b610303610be0565b6040516103109190613524565b60405180910390f35b610333600480360381019061032e9190612cd0565b610bea565b005b61034f600480360381019061034a91906129df565b610c16565b005b61036b60048036038101906103669190612cd0565b610c76565b6040516103789190613524565b60405180910390f35b61039b60048036038101906103969190612b51565b610d4f565b6040516103a89190613524565b60405180910390f35b6103cb60048036038101906103c69190612e0b565b610db2565b005b6103e760048036038101906103e291906129df565b610df6565b005b61040360048036038101906103fe9190612ca3565b610e16565b6040516104109190613322565b60405180910390f35b610433600480360381019061042e9190612ca3565b610ebb565b60405161044091906132e5565b60405180910390f35b610463600480360381019061045e9190612ca3565b61106b565b604051610470919061327e565b60405180910390f35b610493600480360381019061048e9190612af5565b61111d565b6040516104a09190613524565b60405180910390f35b6104c360048036038101906104be9190612972565b61114e565b6040516104d09190613524565b60405180910390f35b6104f360048036038101906104ee9190612ca3565b611206565b6040516105009190613322565b60405180910390f35b6105116112bf565b60405161051e9190613524565b60405180910390f35b610541600480360381019061053c9190612c5a565b6112c9565b60405161054e9190613524565b60405180910390f35b61055f611338565b60405161056c9190613322565b60405180910390f35b61058f600480360381019061058a9190612ca3565b6113ca565b60405161059c9190613322565b60405180910390f35b6105bf60048036038101906105ba9190612ab5565b61146f565b005b6105db60048036038101906105d69190612ca3565b611485565b6040516105e891906132e5565b60405180910390f35b61060b60048036038101906106069190612dcb565b611635565b6040516106189190613322565b60405180910390f35b61063b60048036038101906106369190612a32565b6116e5565b005b61065760048036038101906106529190612ca3565b611747565b6040516106649190613322565b60405180910390f35b61068760048036038101906106829190612c5a565b611834565b6040516106949190613524565b60405180910390f35b6106b760048036038101906106b29190612e0b565b6118a3565b005b6106d360048036038101906106ce9190612cd0565b6118e7565b005b6106ef60048036038101906106ea919061299f565b611913565b6040516106fc9190613307565b60405180910390f35b61071f600480360381019061071a9190612ca3565b6119a7565b60405161072c91906132e5565b60405180910390f35b61073e82611b57565b61077d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077490613484565b60405180910390fd5b806012600084815260200190815260200160002090805190602001906107a49291906126cf565b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061087457507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610884575061088382611bc3565b5b9050919050565b60606000805461089a906137d9565b80601f01602080910402602001604051908101604052809291908181526020018280546108c6906137d9565b80156109135780601f106108e857610100808354040283529160200191610913565b820191906000526020600020905b8154815290600101906020018083116108f657829003601f168201915b5050505050905090565b600061092882611b57565b610967576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095e90613464565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006109ad8261106b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a15906134e4565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610a3d611c2d565b73ffffffffffffffffffffffffffffffffffffffff161480610a6c5750610a6b81610a66611c2d565b611913565b5b610aab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa2906133e4565b60405180910390fd5b610ab58383611c35565b505050565b6000610b6182601260008881526020019081526020016000208054610ade906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0a906137d9565b8015610b575780601f10610b2c57610100808354040283529160200191610b57565b820191906000526020600020905b815481529060010190602001808311610b3a57829003601f168201915b5050505050610c76565b905082601260008781526020019081526020016000209080519060200190610b8a9291906126cf565b50610b96818385610db2565b610ba3600a5486866118a3565b600a6000815480929190610bb69061383c565b919050555060076000815480929190610bce9061383c565b91905055505050505050565b600d5481565b6000600654905090565b80601360008481526020019081526020016000209080519060200190610c119291906126cf565b505050565b610c27610c21611c2d565b82611cee565b610c66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5d90613504565b60405180910390fd5b610c71838383611dcc565b505050565b600080600090505b600954811015610d4357610c9184612028565b80519060200120600e6000838152602001908152602001600020600060028110610cbe57610cbd613943565b5b01604051610ccc9190613267565b6040518091039020148015610d2257508280519060200120600e6000838152602001908152602001600020600160028110610d0a57610d09613943565b5b01604051610d189190613267565b6040518091039020145b15610d305780915050610d49565b8080610d3b9061383c565b915050610c7e565b50600090505b92915050565b6000610d5d84600654612189565b610d6960065484610735565b610d766009548385610db2565b60066000815480929190610d899061383c565b919050555060096000815480929190610da19061383c565b919050555060065490509392505050565b6040518060400160405280610dc684612028565b815260200182815250600e6000858152602001908152602001600020906002610df0929190612755565b50505050565b610e11838383604051806020016040528060008152506116e5565b505050565b6060601160008381526020019081526020016000208054610e36906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610e62906137d9565b8015610eaf5780601f10610e8457610100808354040283529160200191610eaf565b820191906000526020600020905b815481529060010190602001808311610e9257829003601f168201915b50505050509050919050565b60606000600a67ffffffffffffffff811115610eda57610ed9613972565b5b604051908082528060200260200182016040528015610f0d57816020015b6060815260200190600190039081610ef85790505b5090506000805b600a5481101561106057610f2785612028565b80519060200120600f6000838152602001908152602001600020600060028110610f5457610f53613943565b5b01604051610f629190613267565b6040518091039020141561104d57600f6000828152602001908152602001600020600160028110610f9657610f95613943565b5b018054610fa2906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610fce906137d9565b801561101b5780601f10610ff05761010080835404028352916020019161101b565b820191906000526020600020905b815481529060010190602001808311610ffe57829003601f168201915b505050505083838151811061103357611032613943565b5b602002602001018190525081806110499061383c565b9250505b80806110589061383c565b915050610f14565b508192505050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611114576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110b90613424565b60405180910390fd5b80915050919050565b600061112b60085483610bea565b6008600081548092919061113e9061383c565b9190505550600854905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b690613404565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606010600083815260200190815260200160002060006002811061122e5761122d613943565b5b01805461123a906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611266906137d9565b80156112b35780601f10611288576101008083540402835291602001916112b3565b820191906000526020600020905b81548152906001019060200180831161129657829003601f168201915b50505050509050919050565b6000600854905090565b600080600090505b60065481101561132d578280519060200120601260008381526020019081526020016000206040516113039190613267565b6040518091039020141561131a5780915050611333565b80806113259061383c565b9150506112d1565b50600090505b919050565b606060018054611347906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611373906137d9565b80156113c05780601f10611395576101008083540402835291602001916113c0565b820191906000526020600020905b8154815290600101906020018083116113a357829003601f168201915b5050505050905090565b60606013600083815260200190815260200160002080546113ea906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611416906137d9565b80156114635780601f1061143857610100808354040283529160200191611463565b820191906000526020600020905b81548152906001019060200180831161144657829003601f168201915b50505050509050919050565b61148161147a611c2d565b8383612357565b5050565b60606000600a67ffffffffffffffff8111156114a4576114a3613972565b5b6040519080825280602002602001820160405280156114d757816020015b60608152602001906001900390816114c25790505b5090506000805b600a5481101561162a576114f185612028565b80519060200120600f600083815260200190815260200160002060006002811061151e5761151d613943565b5b0160405161152c9190613267565b6040518091039020141561161757600f60008281526020019081526020016000206001600281106115605761155f613943565b5b01805461156c906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611598906137d9565b80156115e55780601f106115ba576101008083540402835291602001916115e5565b820191906000526020600020905b8154815290600101906020018083116115c857829003601f168201915b50505050508383815181106115fd576115fc613943565b5b602002602001018190525081806116139061383c565b9250505b80806116229061383c565b9150506114de565b508192505050919050565b6010602052816000526040600020816002811061165157600080fd5b01600091509150508054611664906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611690906137d9565b80156116dd5780601f106116b2576101008083540402835291602001916116dd565b820191906000526020600020905b8154815290600101906020018083116116c057829003601f168201915b505050505081565b6116f66116f0611c2d565b83611cee565b611735576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161172c90613504565b60405180910390fd5b611741848484846124c4565b50505050565b606061175282611b57565b611791576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611788906134c4565b60405180910390fd5b6012600083815260200190815260200160002080546117af906137d9565b80601f01602080910402602001604051908101604052809291908181526020018280546117db906137d9565b80156118285780601f106117fd57610100808354040283529160200191611828565b820191906000526020600020905b81548152906001019060200180831161180b57829003601f168201915b50505050509050919050565b600080600090505b6007548110156118985782805190602001206011600083815260200190815260200160002060405161186e9190613267565b60405180910390201415611885578091505061189e565b80806118909061383c565b91505061183c565b50600090505b919050565b60405180604001604052806118b784612028565b815260200182815250600f60008581526020019081526020016000209060026118e1929190612755565b50505050565b8060116000848152602001908152602001600020908051906020019061190e9291906126cf565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606000600a67ffffffffffffffff8111156119c6576119c5613972565b5b6040519080825280602002602001820160405280156119f957816020015b60608152602001906001900390816119e45790505b5090506000805b600954811015611b4c57611a1385612028565b80519060200120600e6000838152602001908152602001600020600060028110611a4057611a3f613943565b5b01604051611a4e9190613267565b60405180910390201415611b3957600e6000828152602001908152602001600020600160028110611a8257611a81613943565b5b018054611a8e906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611aba906137d9565b8015611b075780601f10611adc57610100808354040283529160200191611b07565b820191906000526020600020905b815481529060010190602001808311611aea57829003601f168201915b5050505050838381518110611b1f57611b1e613943565b5b60200260200101819052508180611b359061383c565b9250505b8080611b449061383c565b915050611a00565b508192505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611ca88361106b565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000611cf982611b57565b611d38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d2f906133c4565b60405180910390fd5b6000611d438361106b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611db257508373ffffffffffffffffffffffffffffffffffffffff16611d9a8461091d565b73ffffffffffffffffffffffffffffffffffffffff16145b80611dc35750611dc28185611913565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611dec8261106b565b73ffffffffffffffffffffffffffffffffffffffff1614611e42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e39906134a4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611eb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ea990613384565b60405180910390fd5b611ebd838383612520565b611ec8600082611c35565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611f1891906136ef565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611f6f9190613668565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60606000821415612070576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612184565b600082905060005b600082146120a257808061208b9061383c565b915050600a8261209b91906136be565b9150612078565b60008167ffffffffffffffff8111156120be576120bd613972565b5b6040519080825280601f01601f1916602001820160405280156120f05781602001600182028036833780820191505090505b5090505b6000851461217d5760018261210991906136ef565b9150600a856121189190613885565b60306121249190613668565b60f81b81838151811061213a57612139613943565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561217691906136be565b94506120f4565b8093505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156121f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121f090613444565b60405180910390fd5b61220281611b57565b15612242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161223990613364565b60405180910390fd5b61224e60008383612520565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461229e9190613668565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156123c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123bd906133a4565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516124b79190613307565b60405180910390a3505050565b6124cf848484611dcc565b6124db84848484612525565b61251a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161251190613344565b60405180910390fd5b50505050565b505050565b60006125468473ffffffffffffffffffffffffffffffffffffffff166126bc565b156126af578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261256f611c2d565b8786866040518563ffffffff1660e01b81526004016125919493929190613299565b602060405180830381600087803b1580156125ab57600080fd5b505af19250505080156125dc57506040513d601f19601f820116820180604052508101906125d99190612c2d565b60015b61265f573d806000811461260c576040519150601f19603f3d011682016040523d82523d6000602084013e612611565b606091505b50600081511415612657576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161264e90613344565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506126b4565b600190505b949350505050565b600080823b905060008111915050919050565b8280546126db906137d9565b90600052602060002090601f0160209004810192826126fd5760008555612744565b82601f1061271657805160ff1916838001178555612744565b82800160010185558215612744579182015b82811115612743578251825591602001919060010190612728565b5b50905061275191906127a8565b5090565b8260028101928215612797579160200282015b828111156127965782518290805190602001906127869291906126cf565b5091602001919060010190612768565b5b5090506127a491906127c5565b5090565b5b808211156127c15760008160009055506001016127a9565b5090565b5b808211156127e557600081816127dc91906127e9565b506001016127c6565b5090565b5080546127f5906137d9565b6000825580601f106128075750612826565b601f01602090049060005260206000209081019061282591906127a8565b5b50565b600061283c61283784613564565b61353f565b905082815260208101848484011115612858576128576139a6565b5b612863848285613797565b509392505050565b600061287e61287984613595565b61353f565b90508281526020810184848401111561289a576128996139a6565b5b6128a5848285613797565b509392505050565b6000813590506128bc81613df5565b92915050565b6000813590506128d181613e0c565b92915050565b6000813590506128e681613e23565b92915050565b6000815190506128fb81613e23565b92915050565b600082601f830112612916576129156139a1565b5b8135612926848260208601612829565b91505092915050565b600082601f830112612944576129436139a1565b5b813561295484826020860161286b565b91505092915050565b60008135905061296c81613e3a565b92915050565b600060208284031215612988576129876139b0565b5b6000612996848285016128ad565b91505092915050565b600080604083850312156129b6576129b56139b0565b5b60006129c4858286016128ad565b92505060206129d5858286016128ad565b9150509250929050565b6000806000606084860312156129f8576129f76139b0565b5b6000612a06868287016128ad565b9350506020612a17868287016128ad565b9250506040612a288682870161295d565b9150509250925092565b60008060008060808587031215612a4c57612a4b6139b0565b5b6000612a5a878288016128ad565b9450506020612a6b878288016128ad565b9350506040612a7c8782880161295d565b925050606085013567ffffffffffffffff811115612a9d57612a9c6139ab565b5b612aa987828801612901565b91505092959194509250565b60008060408385031215612acc57612acb6139b0565b5b6000612ada858286016128ad565b9250506020612aeb858286016128c2565b9150509250929050565b60008060408385031215612b0c57612b0b6139b0565b5b6000612b1a858286016128ad565b925050602083013567ffffffffffffffff811115612b3b57612b3a6139ab565b5b612b478582860161292f565b9150509250929050565b600080600060608486031215612b6a57612b696139b0565b5b6000612b78868287016128ad565b935050602084013567ffffffffffffffff811115612b9957612b986139ab565b5b612ba58682870161292f565b9250506040612bb68682870161295d565b9150509250925092565b60008060408385031215612bd757612bd66139b0565b5b6000612be5858286016128ad565b9250506020612bf68582860161295d565b9150509250929050565b600060208284031215612c1657612c156139b0565b5b6000612c24848285016128d7565b91505092915050565b600060208284031215612c4357612c426139b0565b5b6000612c51848285016128ec565b91505092915050565b600060208284031215612c7057612c6f6139b0565b5b600082013567ffffffffffffffff811115612c8e57612c8d6139ab565b5b612c9a8482850161292f565b91505092915050565b600060208284031215612cb957612cb86139b0565b5b6000612cc78482850161295d565b91505092915050565b60008060408385031215612ce757612ce66139b0565b5b6000612cf58582860161295d565b925050602083013567ffffffffffffffff811115612d1657612d156139ab565b5b612d228582860161292f565b9150509250929050565b60008060008060808587031215612d4657612d456139b0565b5b6000612d548782880161295d565b945050602085013567ffffffffffffffff811115612d7557612d746139ab565b5b612d818782880161292f565b935050604085013567ffffffffffffffff811115612da257612da16139ab565b5b612dae8782880161292f565b9250506060612dbf8782880161295d565b91505092959194509250565b60008060408385031215612de257612de16139b0565b5b6000612df08582860161295d565b9250506020612e018582860161295d565b9150509250929050565b600080600060608486031215612e2457612e236139b0565b5b6000612e328682870161295d565b9350506020612e438682870161295d565b925050604084013567ffffffffffffffff811115612e6457612e636139ab565b5b612e708682870161292f565b9150509250925092565b6000612e868383612fd9565b905092915050565b612e9781613723565b82525050565b6000612ea8826135eb565b612eb28185613619565b935083602082028501612ec4856135c6565b8060005b85811015612f005784840389528151612ee18582612e7a565b9450612eec8361360c565b925060208a01995050600181019050612ec8565b50829750879550505050505092915050565b612f1b81613735565b82525050565b6000612f2c826135f6565b612f36818561362a565b9350612f468185602086016137a6565b612f4f816139b5565b840191505092915050565b60008154612f67816137d9565b612f71818661363b565b94506001821660008114612f8c5760018114612f9d57612fd0565b60ff19831686528186019350612fd0565b612fa6856135d6565b60005b83811015612fc857815481890152600182019150602081019050612fa9565b838801955050505b50505092915050565b6000612fe482613601565b612fee8185613646565b9350612ffe8185602086016137a6565b613007816139b5565b840191505092915050565b600061301d82613601565b6130278185613657565b93506130378185602086016137a6565b613040816139b5565b840191505092915050565b6000613058603283613657565b9150613063826139c6565b604082019050919050565b600061307b601c83613657565b915061308682613a15565b602082019050919050565b600061309e602483613657565b91506130a982613a3e565b604082019050919050565b60006130c1601983613657565b91506130cc82613a8d565b602082019050919050565b60006130e4602c83613657565b91506130ef82613ab6565b604082019050919050565b6000613107603883613657565b915061311282613b05565b604082019050919050565b600061312a602a83613657565b915061313582613b54565b604082019050919050565b600061314d602983613657565b915061315882613ba3565b604082019050919050565b6000613170602083613657565b915061317b82613bf2565b602082019050919050565b6000613193602c83613657565b915061319e82613c1b565b604082019050919050565b60006131b6602c83613657565b91506131c182613c6a565b604082019050919050565b60006131d9602983613657565b91506131e482613cb9565b604082019050919050565b60006131fc602f83613657565b915061320782613d08565b604082019050919050565b600061321f602183613657565b915061322a82613d57565b604082019050919050565b6000613242603183613657565b915061324d82613da6565b604082019050919050565b6132618161378d565b82525050565b60006132738284612f5a565b915081905092915050565b60006020820190506132936000830184612e8e565b92915050565b60006080820190506132ae6000830187612e8e565b6132bb6020830186612e8e565b6132c86040830185613258565b81810360608301526132da8184612f21565b905095945050505050565b600060208201905081810360008301526132ff8184612e9d565b905092915050565b600060208201905061331c6000830184612f12565b92915050565b6000602082019050818103600083015261333c8184613012565b905092915050565b6000602082019050818103600083015261335d8161304b565b9050919050565b6000602082019050818103600083015261337d8161306e565b9050919050565b6000602082019050818103600083015261339d81613091565b9050919050565b600060208201905081810360008301526133bd816130b4565b9050919050565b600060208201905081810360008301526133dd816130d7565b9050919050565b600060208201905081810360008301526133fd816130fa565b9050919050565b6000602082019050818103600083015261341d8161311d565b9050919050565b6000602082019050818103600083015261343d81613140565b9050919050565b6000602082019050818103600083015261345d81613163565b9050919050565b6000602082019050818103600083015261347d81613186565b9050919050565b6000602082019050818103600083015261349d816131a9565b9050919050565b600060208201905081810360008301526134bd816131cc565b9050919050565b600060208201905081810360008301526134dd816131ef565b9050919050565b600060208201905081810360008301526134fd81613212565b9050919050565b6000602082019050818103600083015261351d81613235565b9050919050565b60006020820190506135396000830184613258565b92915050565b600061354961355a565b9050613555828261380b565b919050565b6000604051905090565b600067ffffffffffffffff82111561357f5761357e613972565b5b613588826139b5565b9050602081019050919050565b600067ffffffffffffffff8211156135b0576135af613972565b5b6135b9826139b5565b9050602081019050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006136738261378d565b915061367e8361378d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156136b3576136b26138b6565b5b828201905092915050565b60006136c98261378d565b91506136d48361378d565b9250826136e4576136e36138e5565b5b828204905092915050565b60006136fa8261378d565b91506137058361378d565b925082821015613718576137176138b6565b5b828203905092915050565b600061372e8261376d565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156137c45780820151818401526020810190506137a9565b838111156137d3576000848401525b50505050565b600060028204905060018216806137f157607f821691505b6020821081141561380557613804613914565b5b50919050565b613814826139b5565b810181811067ffffffffffffffff8211171561383357613832613972565b5b80604052505050565b60006138478261378d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561387a576138796138b6565b5b600182019050919050565b60006138908261378d565b915061389b8361378d565b9250826138ab576138aa6138e5565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b613dfe81613723565b8114613e0957600080fd5b50565b613e1581613735565b8114613e2057600080fd5b50565b613e2c81613741565b8114613e3757600080fd5b50565b613e438161378d565b8114613e4e57600080fd5b5056fea2646970667358221220659dc207554e7aa24aad6450a73a10579319ec61dc11821e0b7a96e1c55da8d564736f6c63430008060033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106102065760003560e01c8063652d47251161011a578063aed47961116100ad578063d45fc5161161007c578063d45fc5161461066d578063d654e9931461069d578063e08033d3146106b9578063e985e9c5146106d5578063eb1d234d1461070557610206565b8063aed47961146105c1578063b10a5dfa146105f1578063b88d4fde14610621578063c87b56dd1461063d57610206565b8063932a196b116100e9578063932a196b1461052757806395d89b4114610557578063a0fd0c6a14610575578063a22cb465146105a557610206565b8063652d47251461047957806370a08231146104a95780637cedbc1e146104d95780637eadfa6a1461050957610206565b80631cd043d61161019d5780633592dd801161016c5780633592dd80146103b157806342842e0e146103cd578063446a92e3146103e95780635154380a146104195780636352211e1461044957610206565b80631cd043d61461031957806323b872dd1461033557806328520ab71461035157806335011d901461038157610206565b8063095ea7b3116101d9578063095ea7b3146102a55780630da3c49c146102c1578063144cbca6146102dd57806318160ddd146102fb57610206565b8063015388681461020b57806301ffc9a71461022757806306fdde0314610257578063081812fc14610275575b600080fd5b61022560048036038101906102209190612cd0565b610735565b005b610241600480360381019061023c9190612c00565b6107a9565b60405161024e9190613307565b60405180910390f35b61025f61088b565b60405161026c9190613322565b60405180910390f35b61028f600480360381019061028a9190612ca3565b61091d565b60405161029c919061327e565b60405180910390f35b6102bf60048036038101906102ba9190612bc0565b6109a2565b005b6102db60048036038101906102d69190612d2c565b610aba565b005b6102e5610bda565b6040516102f29190613524565b60405180910390f35b610303610be0565b6040516103109190613524565b60405180910390f35b610333600480360381019061032e9190612cd0565b610bea565b005b61034f600480360381019061034a91906129df565b610c16565b005b61036b60048036038101906103669190612cd0565b610c76565b6040516103789190613524565b60405180910390f35b61039b60048036038101906103969190612b51565b610d4f565b6040516103a89190613524565b60405180910390f35b6103cb60048036038101906103c69190612e0b565b610db2565b005b6103e760048036038101906103e291906129df565b610df6565b005b61040360048036038101906103fe9190612ca3565b610e16565b6040516104109190613322565b60405180910390f35b610433600480360381019061042e9190612ca3565b610ebb565b60405161044091906132e5565b60405180910390f35b610463600480360381019061045e9190612ca3565b61106b565b604051610470919061327e565b60405180910390f35b610493600480360381019061048e9190612af5565b61111d565b6040516104a09190613524565b60405180910390f35b6104c360048036038101906104be9190612972565b61114e565b6040516104d09190613524565b60405180910390f35b6104f360048036038101906104ee9190612ca3565b611206565b6040516105009190613322565b60405180910390f35b6105116112bf565b60405161051e9190613524565b60405180910390f35b610541600480360381019061053c9190612c5a565b6112c9565b60405161054e9190613524565b60405180910390f35b61055f611338565b60405161056c9190613322565b60405180910390f35b61058f600480360381019061058a9190612ca3565b6113ca565b60405161059c9190613322565b60405180910390f35b6105bf60048036038101906105ba9190612ab5565b61146f565b005b6105db60048036038101906105d69190612ca3565b611485565b6040516105e891906132e5565b60405180910390f35b61060b60048036038101906106069190612dcb565b611635565b6040516106189190613322565b60405180910390f35b61063b60048036038101906106369190612a32565b6116e5565b005b61065760048036038101906106529190612ca3565b611747565b6040516106649190613322565b60405180910390f35b61068760048036038101906106829190612c5a565b611834565b6040516106949190613524565b60405180910390f35b6106b760048036038101906106b29190612e0b565b6118a3565b005b6106d360048036038101906106ce9190612cd0565b6118e7565b005b6106ef60048036038101906106ea919061299f565b611913565b6040516106fc9190613307565b60405180910390f35b61071f600480360381019061071a9190612ca3565b6119a7565b60405161072c91906132e5565b60405180910390f35b61073e82611b57565b61077d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077490613484565b60405180910390fd5b806012600084815260200190815260200160002090805190602001906107a49291906126cf565b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061087457507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610884575061088382611bc3565b5b9050919050565b60606000805461089a906137d9565b80601f01602080910402602001604051908101604052809291908181526020018280546108c6906137d9565b80156109135780601f106108e857610100808354040283529160200191610913565b820191906000526020600020905b8154815290600101906020018083116108f657829003601f168201915b5050505050905090565b600061092882611b57565b610967576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095e90613464565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006109ad8261106b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a15906134e4565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610a3d611c2d565b73ffffffffffffffffffffffffffffffffffffffff161480610a6c5750610a6b81610a66611c2d565b611913565b5b610aab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa2906133e4565b60405180910390fd5b610ab58383611c35565b505050565b6000610b6182601260008881526020019081526020016000208054610ade906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0a906137d9565b8015610b575780601f10610b2c57610100808354040283529160200191610b57565b820191906000526020600020905b815481529060010190602001808311610b3a57829003601f168201915b5050505050610c76565b905082601260008781526020019081526020016000209080519060200190610b8a9291906126cf565b50610b96818385610db2565b610ba3600a5486866118a3565b600a6000815480929190610bb69061383c565b919050555060076000815480929190610bce9061383c565b91905055505050505050565b600d5481565b6000600654905090565b80601360008481526020019081526020016000209080519060200190610c119291906126cf565b505050565b610c27610c21611c2d565b82611cee565b610c66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5d90613504565b60405180910390fd5b610c71838383611dcc565b505050565b600080600090505b600954811015610d4357610c9184612028565b80519060200120600e6000838152602001908152602001600020600060028110610cbe57610cbd613943565b5b01604051610ccc9190613267565b6040518091039020148015610d2257508280519060200120600e6000838152602001908152602001600020600160028110610d0a57610d09613943565b5b01604051610d189190613267565b6040518091039020145b15610d305780915050610d49565b8080610d3b9061383c565b915050610c7e565b50600090505b92915050565b6000610d5d84600654612189565b610d6960065484610735565b610d766009548385610db2565b60066000815480929190610d899061383c565b919050555060096000815480929190610da19061383c565b919050555060065490509392505050565b6040518060400160405280610dc684612028565b815260200182815250600e6000858152602001908152602001600020906002610df0929190612755565b50505050565b610e11838383604051806020016040528060008152506116e5565b505050565b6060601160008381526020019081526020016000208054610e36906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610e62906137d9565b8015610eaf5780601f10610e8457610100808354040283529160200191610eaf565b820191906000526020600020905b815481529060010190602001808311610e9257829003601f168201915b50505050509050919050565b60606000600a67ffffffffffffffff811115610eda57610ed9613972565b5b604051908082528060200260200182016040528015610f0d57816020015b6060815260200190600190039081610ef85790505b5090506000805b600a5481101561106057610f2785612028565b80519060200120600f6000838152602001908152602001600020600060028110610f5457610f53613943565b5b01604051610f629190613267565b6040518091039020141561104d57600f6000828152602001908152602001600020600160028110610f9657610f95613943565b5b018054610fa2906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610fce906137d9565b801561101b5780601f10610ff05761010080835404028352916020019161101b565b820191906000526020600020905b815481529060010190602001808311610ffe57829003601f168201915b505050505083838151811061103357611032613943565b5b602002602001018190525081806110499061383c565b9250505b80806110589061383c565b915050610f14565b508192505050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611114576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110b90613424565b60405180910390fd5b80915050919050565b600061112b60085483610bea565b6008600081548092919061113e9061383c565b9190505550600854905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b690613404565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606010600083815260200190815260200160002060006002811061122e5761122d613943565b5b01805461123a906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611266906137d9565b80156112b35780601f10611288576101008083540402835291602001916112b3565b820191906000526020600020905b81548152906001019060200180831161129657829003601f168201915b50505050509050919050565b6000600854905090565b600080600090505b60065481101561132d578280519060200120601260008381526020019081526020016000206040516113039190613267565b6040518091039020141561131a5780915050611333565b80806113259061383c565b9150506112d1565b50600090505b919050565b606060018054611347906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611373906137d9565b80156113c05780601f10611395576101008083540402835291602001916113c0565b820191906000526020600020905b8154815290600101906020018083116113a357829003601f168201915b5050505050905090565b60606013600083815260200190815260200160002080546113ea906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611416906137d9565b80156114635780601f1061143857610100808354040283529160200191611463565b820191906000526020600020905b81548152906001019060200180831161144657829003601f168201915b50505050509050919050565b61148161147a611c2d565b8383612357565b5050565b60606000600a67ffffffffffffffff8111156114a4576114a3613972565b5b6040519080825280602002602001820160405280156114d757816020015b60608152602001906001900390816114c25790505b5090506000805b600a5481101561162a576114f185612028565b80519060200120600f600083815260200190815260200160002060006002811061151e5761151d613943565b5b0160405161152c9190613267565b6040518091039020141561161757600f60008281526020019081526020016000206001600281106115605761155f613943565b5b01805461156c906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611598906137d9565b80156115e55780601f106115ba576101008083540402835291602001916115e5565b820191906000526020600020905b8154815290600101906020018083116115c857829003601f168201915b50505050508383815181106115fd576115fc613943565b5b602002602001018190525081806116139061383c565b9250505b80806116229061383c565b9150506114de565b508192505050919050565b6010602052816000526040600020816002811061165157600080fd5b01600091509150508054611664906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611690906137d9565b80156116dd5780601f106116b2576101008083540402835291602001916116dd565b820191906000526020600020905b8154815290600101906020018083116116c057829003601f168201915b505050505081565b6116f66116f0611c2d565b83611cee565b611735576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161172c90613504565b60405180910390fd5b611741848484846124c4565b50505050565b606061175282611b57565b611791576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611788906134c4565b60405180910390fd5b6012600083815260200190815260200160002080546117af906137d9565b80601f01602080910402602001604051908101604052809291908181526020018280546117db906137d9565b80156118285780601f106117fd57610100808354040283529160200191611828565b820191906000526020600020905b81548152906001019060200180831161180b57829003601f168201915b50505050509050919050565b600080600090505b6007548110156118985782805190602001206011600083815260200190815260200160002060405161186e9190613267565b60405180910390201415611885578091505061189e565b80806118909061383c565b91505061183c565b50600090505b919050565b60405180604001604052806118b784612028565b815260200182815250600f60008581526020019081526020016000209060026118e1929190612755565b50505050565b8060116000848152602001908152602001600020908051906020019061190e9291906126cf565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606000600a67ffffffffffffffff8111156119c6576119c5613972565b5b6040519080825280602002602001820160405280156119f957816020015b60608152602001906001900390816119e45790505b5090506000805b600954811015611b4c57611a1385612028565b80519060200120600e6000838152602001908152602001600020600060028110611a4057611a3f613943565b5b01604051611a4e9190613267565b60405180910390201415611b3957600e6000828152602001908152602001600020600160028110611a8257611a81613943565b5b018054611a8e906137d9565b80601f0160208091040260200160405190810160405280929190818152602001828054611aba906137d9565b8015611b075780601f10611adc57610100808354040283529160200191611b07565b820191906000526020600020905b815481529060010190602001808311611aea57829003601f168201915b5050505050838381518110611b1f57611b1e613943565b5b60200260200101819052508180611b359061383c565b9250505b8080611b449061383c565b915050611a00565b508192505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611ca88361106b565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000611cf982611b57565b611d38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d2f906133c4565b60405180910390fd5b6000611d438361106b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611db257508373ffffffffffffffffffffffffffffffffffffffff16611d9a8461091d565b73ffffffffffffffffffffffffffffffffffffffff16145b80611dc35750611dc28185611913565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611dec8261106b565b73ffffffffffffffffffffffffffffffffffffffff1614611e42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e39906134a4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611eb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ea990613384565b60405180910390fd5b611ebd838383612520565b611ec8600082611c35565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611f1891906136ef565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611f6f9190613668565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60606000821415612070576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612184565b600082905060005b600082146120a257808061208b9061383c565b915050600a8261209b91906136be565b9150612078565b60008167ffffffffffffffff8111156120be576120bd613972565b5b6040519080825280601f01601f1916602001820160405280156120f05781602001600182028036833780820191505090505b5090505b6000851461217d5760018261210991906136ef565b9150600a856121189190613885565b60306121249190613668565b60f81b81838151811061213a57612139613943565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561217691906136be565b94506120f4565b8093505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156121f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121f090613444565b60405180910390fd5b61220281611b57565b15612242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161223990613364565b60405180910390fd5b61224e60008383612520565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461229e9190613668565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156123c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123bd906133a4565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516124b79190613307565b60405180910390a3505050565b6124cf848484611dcc565b6124db84848484612525565b61251a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161251190613344565b60405180910390fd5b50505050565b505050565b60006125468473ffffffffffffffffffffffffffffffffffffffff166126bc565b156126af578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261256f611c2d565b8786866040518563ffffffff1660e01b81526004016125919493929190613299565b602060405180830381600087803b1580156125ab57600080fd5b505af19250505080156125dc57506040513d601f19601f820116820180604052508101906125d99190612c2d565b60015b61265f573d806000811461260c576040519150601f19603f3d011682016040523d82523d6000602084013e612611565b606091505b50600081511415612657576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161264e90613344565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506126b4565b600190505b949350505050565b600080823b905060008111915050919050565b8280546126db906137d9565b90600052602060002090601f0160209004810192826126fd5760008555612744565b82601f1061271657805160ff1916838001178555612744565b82800160010185558215612744579182015b82811115612743578251825591602001919060010190612728565b5b50905061275191906127a8565b5090565b8260028101928215612797579160200282015b828111156127965782518290805190602001906127869291906126cf565b5091602001919060010190612768565b5b5090506127a491906127c5565b5090565b5b808211156127c15760008160009055506001016127a9565b5090565b5b808211156127e557600081816127dc91906127e9565b506001016127c6565b5090565b5080546127f5906137d9565b6000825580601f106128075750612826565b601f01602090049060005260206000209081019061282591906127a8565b5b50565b600061283c61283784613564565b61353f565b905082815260208101848484011115612858576128576139a6565b5b612863848285613797565b509392505050565b600061287e61287984613595565b61353f565b90508281526020810184848401111561289a576128996139a6565b5b6128a5848285613797565b509392505050565b6000813590506128bc81613df5565b92915050565b6000813590506128d181613e0c565b92915050565b6000813590506128e681613e23565b92915050565b6000815190506128fb81613e23565b92915050565b600082601f830112612916576129156139a1565b5b8135612926848260208601612829565b91505092915050565b600082601f830112612944576129436139a1565b5b813561295484826020860161286b565b91505092915050565b60008135905061296c81613e3a565b92915050565b600060208284031215612988576129876139b0565b5b6000612996848285016128ad565b91505092915050565b600080604083850312156129b6576129b56139b0565b5b60006129c4858286016128ad565b92505060206129d5858286016128ad565b9150509250929050565b6000806000606084860312156129f8576129f76139b0565b5b6000612a06868287016128ad565b9350506020612a17868287016128ad565b9250506040612a288682870161295d565b9150509250925092565b60008060008060808587031215612a4c57612a4b6139b0565b5b6000612a5a878288016128ad565b9450506020612a6b878288016128ad565b9350506040612a7c8782880161295d565b925050606085013567ffffffffffffffff811115612a9d57612a9c6139ab565b5b612aa987828801612901565b91505092959194509250565b60008060408385031215612acc57612acb6139b0565b5b6000612ada858286016128ad565b9250506020612aeb858286016128c2565b9150509250929050565b60008060408385031215612b0c57612b0b6139b0565b5b6000612b1a858286016128ad565b925050602083013567ffffffffffffffff811115612b3b57612b3a6139ab565b5b612b478582860161292f565b9150509250929050565b600080600060608486031215612b6a57612b696139b0565b5b6000612b78868287016128ad565b935050602084013567ffffffffffffffff811115612b9957612b986139ab565b5b612ba58682870161292f565b9250506040612bb68682870161295d565b9150509250925092565b60008060408385031215612bd757612bd66139b0565b5b6000612be5858286016128ad565b9250506020612bf68582860161295d565b9150509250929050565b600060208284031215612c1657612c156139b0565b5b6000612c24848285016128d7565b91505092915050565b600060208284031215612c4357612c426139b0565b5b6000612c51848285016128ec565b91505092915050565b600060208284031215612c7057612c6f6139b0565b5b600082013567ffffffffffffffff811115612c8e57612c8d6139ab565b5b612c9a8482850161292f565b91505092915050565b600060208284031215612cb957612cb86139b0565b5b6000612cc78482850161295d565b91505092915050565b60008060408385031215612ce757612ce66139b0565b5b6000612cf58582860161295d565b925050602083013567ffffffffffffffff811115612d1657612d156139ab565b5b612d228582860161292f565b9150509250929050565b60008060008060808587031215612d4657612d456139b0565b5b6000612d548782880161295d565b945050602085013567ffffffffffffffff811115612d7557612d746139ab565b5b612d818782880161292f565b935050604085013567ffffffffffffffff811115612da257612da16139ab565b5b612dae8782880161292f565b9250506060612dbf8782880161295d565b91505092959194509250565b60008060408385031215612de257612de16139b0565b5b6000612df08582860161295d565b9250506020612e018582860161295d565b9150509250929050565b600080600060608486031215612e2457612e236139b0565b5b6000612e328682870161295d565b9350506020612e438682870161295d565b925050604084013567ffffffffffffffff811115612e6457612e636139ab565b5b612e708682870161292f565b9150509250925092565b6000612e868383612fd9565b905092915050565b612e9781613723565b82525050565b6000612ea8826135eb565b612eb28185613619565b935083602082028501612ec4856135c6565b8060005b85811015612f005784840389528151612ee18582612e7a565b9450612eec8361360c565b925060208a01995050600181019050612ec8565b50829750879550505050505092915050565b612f1b81613735565b82525050565b6000612f2c826135f6565b612f36818561362a565b9350612f468185602086016137a6565b612f4f816139b5565b840191505092915050565b60008154612f67816137d9565b612f71818661363b565b94506001821660008114612f8c5760018114612f9d57612fd0565b60ff19831686528186019350612fd0565b612fa6856135d6565b60005b83811015612fc857815481890152600182019150602081019050612fa9565b838801955050505b50505092915050565b6000612fe482613601565b612fee8185613646565b9350612ffe8185602086016137a6565b613007816139b5565b840191505092915050565b600061301d82613601565b6130278185613657565b93506130378185602086016137a6565b613040816139b5565b840191505092915050565b6000613058603283613657565b9150613063826139c6565b604082019050919050565b600061307b601c83613657565b915061308682613a15565b602082019050919050565b600061309e602483613657565b91506130a982613a3e565b604082019050919050565b60006130c1601983613657565b91506130cc82613a8d565b602082019050919050565b60006130e4602c83613657565b91506130ef82613ab6565b604082019050919050565b6000613107603883613657565b915061311282613b05565b604082019050919050565b600061312a602a83613657565b915061313582613b54565b604082019050919050565b600061314d602983613657565b915061315882613ba3565b604082019050919050565b6000613170602083613657565b915061317b82613bf2565b602082019050919050565b6000613193602c83613657565b915061319e82613c1b565b604082019050919050565b60006131b6602c83613657565b91506131c182613c6a565b604082019050919050565b60006131d9602983613657565b91506131e482613cb9565b604082019050919050565b60006131fc602f83613657565b915061320782613d08565b604082019050919050565b600061321f602183613657565b915061322a82613d57565b604082019050919050565b6000613242603183613657565b915061324d82613da6565b604082019050919050565b6132618161378d565b82525050565b60006132738284612f5a565b915081905092915050565b60006020820190506132936000830184612e8e565b92915050565b60006080820190506132ae6000830187612e8e565b6132bb6020830186612e8e565b6132c86040830185613258565b81810360608301526132da8184612f21565b905095945050505050565b600060208201905081810360008301526132ff8184612e9d565b905092915050565b600060208201905061331c6000830184612f12565b92915050565b6000602082019050818103600083015261333c8184613012565b905092915050565b6000602082019050818103600083015261335d8161304b565b9050919050565b6000602082019050818103600083015261337d8161306e565b9050919050565b6000602082019050818103600083015261339d81613091565b9050919050565b600060208201905081810360008301526133bd816130b4565b9050919050565b600060208201905081810360008301526133dd816130d7565b9050919050565b600060208201905081810360008301526133fd816130fa565b9050919050565b6000602082019050818103600083015261341d8161311d565b9050919050565b6000602082019050818103600083015261343d81613140565b9050919050565b6000602082019050818103600083015261345d81613163565b9050919050565b6000602082019050818103600083015261347d81613186565b9050919050565b6000602082019050818103600083015261349d816131a9565b9050919050565b600060208201905081810360008301526134bd816131cc565b9050919050565b600060208201905081810360008301526134dd816131ef565b9050919050565b600060208201905081810360008301526134fd81613212565b9050919050565b6000602082019050818103600083015261351d81613235565b9050919050565b60006020820190506135396000830184613258565b92915050565b600061354961355a565b9050613555828261380b565b919050565b6000604051905090565b600067ffffffffffffffff82111561357f5761357e613972565b5b613588826139b5565b9050602081019050919050565b600067ffffffffffffffff8211156135b0576135af613972565b5b6135b9826139b5565b9050602081019050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006136738261378d565b915061367e8361378d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156136b3576136b26138b6565b5b828201905092915050565b60006136c98261378d565b91506136d48361378d565b9250826136e4576136e36138e5565b5b828204905092915050565b60006136fa8261378d565b91506137058361378d565b925082821015613718576137176138b6565b5b828203905092915050565b600061372e8261376d565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156137c45780820151818401526020810190506137a9565b838111156137d3576000848401525b50505050565b600060028204905060018216806137f157607f821691505b6020821081141561380557613804613914565b5b50919050565b613814826139b5565b810181811067ffffffffffffffff8211171561383357613832613972565b5b80604052505050565b60006138478261378d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561387a576138796138b6565b5b600182019050919050565b60006138908261378d565b915061389b8361378d565b9250826138ab576138aa6138e5565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b613dfe81613723565b8114613e0957600080fd5b50565b613e1581613735565b8114613e2057600080fd5b50565b613e2c81613741565b8114613e3757600080fd5b50565b613e438161378d565b8114613e4e57600080fd5b5056fea2646970667358221220659dc207554e7aa24aad6450a73a10579319ec61dc11821e0b7a96e1c55da8d564736f6c63430008060033","devdoc":{"kind":"dev","methods":{"approve(address,uint256)":{"details":"See {IERC721-approve}."},"balanceOf(address)":{"details":"See {IERC721-balanceOf}."},"getApproved(uint256)":{"details":"See {IERC721-getApproved}."},"isApprovedForAll(address,address)":{"details":"See {IERC721-isApprovedForAll}."},"name()":{"details":"See {IERC721Metadata-name}."},"ownerOf(uint256)":{"details":"See {IERC721-ownerOf}."},"safeTransferFrom(address,address,uint256)":{"details":"See {IERC721-safeTransferFrom}."},"safeTransferFrom(address,address,uint256,bytes)":{"details":"See {IERC721-safeTransferFrom}."},"setApprovalForAll(address,bool)":{"details":"See {IERC721-setApprovalForAll}."},"supportsInterface(bytes4)":{"details":"See {IERC165-supportsInterface}."},"symbol()":{"details":"See {IERC721Metadata-symbol}."},"tokenURI(uint256)":{"details":"See {IERC721Metadata-tokenURI}."},"transferFrom(address,address,uint256)":{"details":"See {IERC721-transferFrom}."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1},"storageLayout":{"storage":[{"astId":25,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_name","offset":0,"slot":"0","type":"t_string_storage"},{"astId":27,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_symbol","offset":0,"slot":"1","type":"t_string_storage"},{"astId":31,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_owners","offset":0,"slot":"2","type":"t_mapping(t_uint256,t_address)"},{"astId":35,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_balances","offset":0,"slot":"3","type":"t_mapping(t_address,t_uint256)"},{"astId":39,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_tokenApprovals","offset":0,"slot":"4","type":"t_mapping(t_uint256,t_address)"},{"astId":45,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_operatorApprovals","offset":0,"slot":"5","type":"t_mapping(t_address,t_mapping(t_address,t_bool))"},{"astId":1557,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_tokenIds","offset":0,"slot":"6","type":"t_uint256"},{"astId":1559,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_bidIds","offset":0,"slot":"7","type":"t_uint256"},{"astId":1561,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_eventIds","offset":0,"slot":"8","type":"t_uint256"},{"astId":1563,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_EventTokenIds","offset":0,"slot":"9","type":"t_uint256"},{"astId":1565,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_TokenBidIds","offset":0,"slot":"10","type":"t_uint256"},{"astId":1569,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"data1","offset":0,"slot":"11","type":"t_array(t_string_storage)2_storage"},{"astId":1571,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_EventTokenSearchIds","offset":0,"slot":"13","type":"t_uint256"},{"astId":1577,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"AllEventTokens","offset":0,"slot":"14","type":"t_mapping(t_uint256,t_array(t_string_storage)2_storage)"},{"astId":1583,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"AllTokensBids","offset":0,"slot":"15","type":"t_mapping(t_uint256,t_array(t_string_storage)2_storage)"},{"astId":1589,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_SearchedStore","offset":0,"slot":"16","type":"t_mapping(t_uint256,t_array(t_string_storage)2_storage)"},{"astId":1593,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_bidURIs","offset":0,"slot":"17","type":"t_mapping(t_uint256,t_string_storage)"},{"astId":1597,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_tokenURIs","offset":0,"slot":"18","type":"t_mapping(t_uint256,t_string_storage)"},{"astId":1601,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_eventURIs","offset":0,"slot":"19","type":"t_mapping(t_uint256,t_string_storage)"},{"astId":1605,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_eventTokens","offset":0,"slot":"20","type":"t_mapping(t_string_memory_ptr,t_string_storage)"}],"types":{"t_address":{"encoding":"inplace","label":"address","numberOfBytes":"20"},"t_array(t_string_storage)2_storage":{"base":"t_string_storage","encoding":"inplace","label":"string[2]","numberOfBytes":"64"},"t_bool":{"encoding":"inplace","label":"bool","numberOfBytes":"1"},"t_mapping(t_address,t_bool)":{"encoding":"mapping","key":"t_address","label":"mapping(address => bool)","numberOfBytes":"32","value":"t_bool"},"t_mapping(t_address,t_mapping(t_address,t_bool))":{"encoding":"mapping","key":"t_address","label":"mapping(address => mapping(address => bool))","numberOfBytes":"32","value":"t_mapping(t_address,t_bool)"},"t_mapping(t_address,t_uint256)":{"encoding":"mapping","key":"t_address","label":"mapping(address => uint256)","numberOfBytes":"32","value":"t_uint256"},"t_mapping(t_string_memory_ptr,t_string_storage)":{"encoding":"mapping","key":"t_string_memory_ptr","label":"mapping(string => string)","numberOfBytes":"32","value":"t_string_storage"},"t_mapping(t_uint256,t_address)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => address)","numberOfBytes":"32","value":"t_address"},"t_mapping(t_uint256,t_array(t_string_storage)2_storage)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => string[2])","numberOfBytes":"32","value":"t_array(t_string_storage)2_storage"},"t_mapping(t_uint256,t_string_storage)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => string)","numberOfBytes":"32","value":"t_string_storage"},"t_string_memory_ptr":{"encoding":"bytes","label":"string","numberOfBytes":"32"},"t_string_storage":{"encoding":"bytes","label":"string","numberOfBytes":"32"},"t_uint256":{"encoding":"inplace","label":"uint256","numberOfBytes":"32"}}}}');

/***/ }),

/***/ "./components/UseFormInput.jsx":
/*!*************************************!*\
  !*** ./components/UseFormInput.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UseFormInput; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\components\\UseFormInput.jsx";


function UseFormInput({
  defaultValue,
  type,
  placeholder,
  id
}) {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue || '');

  const input = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default().Control), {
    value: value || '',
    placeholder: placeholder,
    onChange: e => setValue(e.target.value),
    type: type,
    id: id
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, this);

  return [value, input, setValue];
}

/***/ }),

/***/ "./components/modals/BidNFTModal.jsx":
/*!*******************************************!*\
  !*** ./components/modals/BidNFTModal.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BidNFTModal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UseFormInput */ "./components/UseFormInput.jsx");

var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\components\\modals\\BidNFTModal.jsx";





function BidNFTModal({
  show,
  onHide,
  contract,
  senderAddress,
  tokenId,
  eventId,
  type
}) {
  const [Amount, AmountInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Amount'
  });

  async function bidNFT() {
    const tokenUri = await contract.tokenURI(tokenId);
    var parsed = await JSON.parse(tokenUri);

    if (Number(parsed['properties']['price']['description']) < Number(Amount)) {
      parsed['properties']['price']['description'] = Amount;
      parsed['properties']['higherbidadd']['description'] = senderAddress;
    }

    let currentDate = new Date();
    const createdObject = {
      title: 'Asset Metadata Bids',
      type: 'object',
      properties: {
        username: {
          type: 'string',
          description: senderAddress
        },
        bid: {
          type: 'string',
          description: Amount
        },
        time: {
          type: 'string',
          description: currentDate
        }
      }
    };
    const result = await contract.createBid(tokenId, JSON.stringify(createdObject), JSON.stringify(parsed), eventId);
    console.log(result);
    window.document.getElementsByClassName("btn-close")[0].click();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Header), {
      closeButton: true,
      children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Title), {
        id: "contained-modal-title-vcenter",
        children: "Bid Cryptopunk"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Title), {
        id: "contained-modal-title-vcenter",
        children: "Bid NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
      className: "show-grid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Bid Amount in ETH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, this), AmountInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "d-grid",
          children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid Cryptopunk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 8
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }, this);
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/donation/auction/[id].jsx":
/*!*****************************************!*\
  !*** ./pages/donation/auction/[id].jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ViewNFT; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/modals/BidNFTModal */ "./components/modals/BidNFTModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");


var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\donation\\auction\\[id].jsx";











function ViewNFT(user) {
  const {
    contract,
    signerAddress
  } = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_11__.default)('ERC721');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: eventId,
    1: setEventId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
  const {
    0: list,
    1: setList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: tokenName,
    1: setTokenName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: tokenSymbol,
    1: setTokenSymbol
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: goalusd,
    1: setgoalusd
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: goal,
    1: setgoal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: dateleft,
    1: setdateleft
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: date,
    1: setdate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: dateleftBid,
    1: setdateleftBid
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: logo,
    1: setlogo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: selectid,
    1: setselectid
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: selecttype,
    1: setselecttype
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: eventuri,
    1: setEventuri
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: modalShow,
    1: setModalShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function LeftDate(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds";
  }

  function LeftDateBid(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + "d " + h.toString() + "h " + m.toString() + "m " + s.toString() + "s";
  }

  async function fetchContractData() {
    try {
      const {
        id
      } = router.query;

      if (contract && id) {
        setEventId(id);
        const value = await contract.eventURI(id);
        const arr = [];
        const totalTokens = await contract.gettokenSearchEventTotal(id);

        for (let i = 0; i < Number(10); i++) {
          const obj = await totalTokens[i];
          const object = {};

          try {
            object = await JSON.parse(obj);
          } catch {}

          if (object.title) {
            var pricedes1 = 0;

            try {
              pricedes1 = formatter.format(Number(object.properties.price.description * 3817.09));
            } catch (ex) {}

            const TokenId = Number(await contract.gettokenIdByUri(obj));
            console.log(TokenId);
            arr.push({
              Id: TokenId,
              name: object.properties.name.description,
              description: object.properties.description.description,
              Bidprice: pricedes1,
              price: Number(object.properties.price.description),
              type: object.properties.typeimg.description,
              image: object.properties.image.description
            });
          }
        }

        setList(arr);
        if (document.getElementById("Loading")) document.getElementById("Loading").style = "display:none";
        setEventuri(value);
        const object = JSON.parse(value);
        setTitle(object.properties.Title.description);
        setgoalusd(formatter.format(Number(object.properties.Goal.description * 3817.09)));
        setgoal(Number(object.properties.Goal.description));
        setdateleft(LeftDate(object.properties.Date.description));
        setdate(object.properties.Date.description);
        setdateleftBid(LeftDateBid(object.properties.Date.description));
        setlogo(object.properties.logo.description);
        setTokenName(await contract.name());
        setTokenSymbol(await contract.symbol());
      }
    } catch (error) {
      console.error(error);
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchContractData();
  }, [router.query, contract]);
  setInterval(function () {
    calculateTimeLeft();
  }, 1000);

  function calculateTimeLeft() {
    try {
      var allDates = document.getElementsByName("dateleft");

      for (let i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDate(date);
      }

      var allDates = document.getElementsByName("date");

      for (let i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDateBid(date);
      }
    } catch (error) {}
  }

  function activateBidNFTModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselecttype("NFT");
    setModalShow(true);
  }

  function activateBidCryptopunkTModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselecttype("Cryptopunk");
    setModalShow(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row EventContainer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          "display": "flex"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: logo,
          className: "AuctionImage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "DetialsContainer",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "TextContainer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Goal: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: ["$ ", goalusd, " (", goal, " ETH)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "TextContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              name: "dateleft",
              date: date,
              children: dateleft
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "Loading",
      className: "LoadingArea",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }, this), list.map(listItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row ElementsContainer bgWhite",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          "display": "flex"
        },
        children: [listItem.type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: listItem.image,
          className: "AuctionBidImage pixel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 29
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: listItem.image,
          className: "AuctionBidImage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: "100%"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "DetialsContainer",
            style: {
              rowGap: "5px"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: listItem.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              style: {
                color: "rgb(139, 139, 139)"
              },
              children: ["Type: ", listItem.type]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "TextContainer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                style: {
                  color: "#8B8B8B"
                },
                children: listItem.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ElementBottomContainer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                width: "116px"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h7", {
                className: "smallgrey",
                children: "Current bid"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                className: "bidprice",
                children: ["$ ", listItem.Bidprice, " (", listItem.price, " ETH)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h7", {
                name: "date",
                date: date,
                className: "smallgrey",
                children: dateleftBid
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "BidAllcontainer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "Bidsbutton",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                  href: `/donation/bid/${listItem.Id}`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    tokenid: listItem.Id,
                    className: "Bidcontainer col",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      tokenid: listItem.Id,
                      className: "card BidcontainerCard",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        tokenid: listItem.Id,
                        className: "card-body bidbuttonText",
                        children: "View"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 213,
                        columnNumber: 53
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 41
                }, this), listItem.type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  tokenid: listItem.Id,
                  onClick: activateBidCryptopunkTModal,
                  className: "Bidcontainer col",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    tokenid: listItem.Id,
                    className: "card BidcontainerCard",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      tokenid: listItem.Id,
                      className: "card-body bidbuttonText",
                      children: "Bid"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 45
                }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  tokenid: listItem.Id,
                  onClick: activateBidNFTModal,
                  className: "Bidcontainer col",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    tokenid: listItem.Id,
                    className: "card BidcontainerCard",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      tokenid: listItem.Id,
                      className: "card-body bidbuttonText",
                      children: "Bid"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 53
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 21
      }, this)
    }, listItem.Id, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_10__.default, {
      show: modalShow,
      onHide: () => {
        setModalShow(false); // This is a poor implementation, better to implement an event listener

        fetchContractData();
      },
      contract: contract,
      Amount: signerAddress,
      tokenId: selectid,
      senderAddress: signerAddress,
      type: selecttype,
      eventId: eventId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./services/ERC721Singleton.js":
/*!*************************************!*\
  !*** ./services/ERC721Singleton.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ERC721Singleton; }
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contracts_deployments_metis_MetisERC721_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contracts/deployments/metis/MetisERC721.json */ "./contracts/deployments/metis/MetisERC721.json");


function ERC721Singleton(signer) {
  if (!ERC721Singleton._instance) {
    ERC721Singleton._instance = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(_contracts_deployments_metis_MetisERC721_json__WEBPACK_IMPORTED_MODULE_1__.address, _contracts_deployments_metis_MetisERC721_json__WEBPACK_IMPORTED_MODULE_1__.abi, signer);
  }

  return ERC721Singleton._instance;
}

/***/ }),

/***/ "./services/useContract.js":
/*!*********************************!*\
  !*** ./services/useContract.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useContract; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ERC721Singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ERC721Singleton */ "./services/ERC721Singleton.js");



function useContract(contractName) {
  const {
    0: contractInstance,
    1: setContractInstance
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    contract: null,
    signerAddress: null
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchData = async () => {
      try {
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = {
          contract: null,
          signerAddress: null
        }; // Sets a single instance of a specific contract per application
        // Useful for switching across multiple contracts in a single application

        switch (contractName) {
          case 'ERC721':
            contract.contract = (0,_ERC721Singleton__WEBPACK_IMPORTED_MODULE_2__.default)(signer);
            break;

          default:
            console.log('Invalid contract');
            break;
        }

        contract.signerAddress = await signer.getAddress();
        setContractInstance(contract);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    window.ethereum.on('accountsChanged', fetchData);
    window.ethereum.on('chainChanged', fetchData);
    return () => {
      window.ethereum.removeListener('accountsChanged', fetchData);
      window.ethereum.removeListener('chainChanged', fetchData);
    };
  }, []);
  return contractInstance;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("ethers");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Button");;

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Col");;

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Form");;

/***/ }),

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Image");;

/***/ }),

/***/ "react-bootstrap/Modal":
/*!****************************************!*\
  !*** external "react-bootstrap/Modal" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Modal");;

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Row");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/donation/auction/[id].jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQuanN4Iiwid2VicGFjazovL21ldGlzLWRlbW8vLi9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vW2lkXS5qc3giLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL3NlcnZpY2VzL0VSQzcyMVNpbmdsZXRvbi5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vc2VydmljZXMvdXNlQ29udHJhY3QuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcImV0aGVyc1wiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL01vZGFsXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9pZ25vcmVkfEM6XFxVc2Vyc1xcemFraXJcXERvY3VtZW50c1xcdGVzdFxcbWV0aXMtZGVtby1tYXN0ZXJcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJVc2VGb3JtSW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImlucHV0IiwiZSIsInRhcmdldCIsIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInRva2VuSWQiLCJldmVudElkIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJiaWRORlQiLCJ0b2tlblVyaSIsInRva2VuVVJJIiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwiTnVtYmVyIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3JlYXRlZE9iamVjdCIsInRpdGxlIiwicHJvcGVydGllcyIsInVzZXJuYW1lIiwiZGVzY3JpcHRpb24iLCJiaWQiLCJ0aW1lIiwicmVzdWx0IiwiY3JlYXRlQmlkIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWNrIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiZGVmYXVsdCIsInVzZVJlZiIsImN1cnJlbnQiLCJ3YXJuIiwicCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwiam9pbiIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibGVuZ3RoIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ4IiwieSIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIlZpZXdORlQiLCJ1c2VyIiwic2lnbmVyQWRkcmVzcyIsInVzZUNvbnRyYWN0Iiwic2V0RXZlbnRJZCIsImxpc3QiLCJzZXRMaXN0IiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5TeW1ib2wiLCJzZXRUb2tlblN5bWJvbCIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJnb2FsIiwic2V0Z29hbCIsImRhdGVsZWZ0Iiwic2V0ZGF0ZWxlZnQiLCJkYXRlIiwic2V0ZGF0ZSIsImRhdGVsZWZ0QmlkIiwic2V0ZGF0ZWxlZnRCaWQiLCJsb2dvIiwic2V0bG9nbyIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3R0eXBlIiwic2V0c2VsZWN0dHlwZSIsImV2ZW50dXJpIiwic2V0RXZlbnR1cmkiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiTGVmdERhdGUiLCJkYXRldGV4dCIsImMiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsImZsb29yIiwiaCIsInMiLCJ0b1N0cmluZyIsIkxlZnREYXRlQmlkIiwiZmV0Y2hDb250cmFjdERhdGEiLCJldmVudFVSSSIsImFyciIsInRvdGFsVG9rZW5zIiwiZ2V0dG9rZW5TZWFyY2hFdmVudFRvdGFsIiwib2JqZWN0IiwicHJpY2VkZXMxIiwiZm9ybWF0IiwicHJpY2UiLCJleCIsIlRva2VuSWQiLCJnZXR0b2tlbklkQnlVcmkiLCJJZCIsIkJpZHByaWNlIiwidHlwZWltZyIsImltYWdlIiwic3R5bGUiLCJUaXRsZSIsIkdvYWwiLCJzeW1ib2wiLCJzZXRJbnRlcnZhbCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwiYWN0aXZhdGVCaWRDcnlwdG9wdW5rVE1vZGFsIiwibGlzdEl0ZW0iLCJ3aWR0aCIsInJvd0dhcCIsImNvbG9yIiwiRVJDNzIxU2luZ2xldG9uIiwic2lnbmVyIiwiX2luc3RhbmNlIiwiZXRoZXJzIiwiZXJjNzIxIiwiY29udHJhY3ROYW1lIiwiY29udHJhY3RJbnN0YW5jZSIsInNldENvbnRyYWN0SW5zdGFuY2UiLCJmZXRjaERhdGEiLCJwcm92aWRlciIsImV0aGVyZXVtIiwiZ2V0U2lnbmVyIiwiZ2V0QWRkcmVzcyIsInJlbW92ZUxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxDQUFzQjtBQUFFQyxjQUFGO0FBQWdCQyxNQUFoQjtBQUFzQkMsYUFBdEI7QUFBbUNDO0FBQW5DLENBQXRCLEVBQStEO0FBQzdFLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQ04sWUFBWSxJQUFJLEVBQWpCLENBQWxDOztBQUNBLFFBQU1PLEtBQUssZ0JBQ1YsOERBQUMscUVBQUQ7QUFDQyxTQUFLLEVBQUVILEtBQUssSUFBSSxFQURqQjtBQUVDLGVBQVcsRUFBRUYsV0FGZDtBQUdDLFlBQVEsRUFBR00sQ0FBRCxJQUFPSCxRQUFRLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxLQUFWLENBSDFCO0FBSUMsUUFBSSxFQUFFSCxJQUpQO0FBS0MsTUFBRSxFQUFFRTtBQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDs7QUFTQSxTQUFPLENBQUNDLEtBQUQsRUFBUUcsS0FBUixFQUFlRixRQUFmLENBQVA7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNLLFdBQVQsQ0FBcUI7QUFDbkNDLE1BRG1DO0FBRW5DQyxRQUZtQztBQUduQ0MsVUFIbUM7QUFJbkNDLGVBSm1DO0FBS25DQyxTQUxtQztBQU1uQ0MsU0FObUM7QUFPbkNmO0FBUG1DLENBQXJCLEVBU1o7QUFDRixRQUFNLENBQUNnQixNQUFELEVBQVNDLFdBQVQsSUFBd0JuQixzREFBWSxDQUFDO0FBQzFDRSxRQUFJLEVBQUUsTUFEb0M7QUFFMUNDLGVBQVcsRUFBRTtBQUY2QixHQUFELENBQTFDOztBQUtBLGlCQUFlaUIsTUFBZixHQUF3QjtBQUN2QixVQUFNQyxRQUFRLEdBQUcsTUFBTVAsUUFBUSxDQUFDUSxRQUFULENBQWtCTixPQUFsQixDQUF2QjtBQUNBLFFBQUlPLE1BQU0sR0FBRyxNQUFNQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osUUFBWCxDQUFuQjs7QUFDQSxRQUFJSyxNQUFNLENBQUNILE1BQU0sQ0FBQyxZQUFELENBQU4sQ0FBcUIsT0FBckIsRUFBOEIsYUFBOUIsQ0FBRCxDQUFOLEdBQXVERyxNQUFNLENBQUNSLE1BQUQsQ0FBakUsRUFBMkU7QUFDMUVLLFlBQU0sQ0FBQyxZQUFELENBQU4sQ0FBcUIsT0FBckIsRUFBOEIsYUFBOUIsSUFBK0NMLE1BQS9DO0FBQ0FLLFlBQU0sQ0FBQyxZQUFELENBQU4sQ0FBcUIsY0FBckIsRUFBcUMsYUFBckMsSUFBc0RSLGFBQXREO0FBRUE7O0FBQ0QsUUFBSVksV0FBVyxHQUFHLElBQUlDLElBQUosRUFBbEI7QUFDQSxVQUFNQyxhQUFhLEdBQUc7QUFDckJDLFdBQUssRUFBRSxxQkFEYztBQUVyQjVCLFVBQUksRUFBRSxRQUZlO0FBR3JCNkIsZ0JBQVUsRUFBRTtBQUNYQyxnQkFBUSxFQUFFO0FBQ1Q5QixjQUFJLEVBQUUsUUFERztBQUVUK0IscUJBQVcsRUFBRWxCO0FBRkosU0FEQztBQUtYbUIsV0FBRyxFQUFFO0FBQ0poQyxjQUFJLEVBQUUsUUFERjtBQUVKK0IscUJBQVcsRUFBRWY7QUFGVCxTQUxNO0FBU1hpQixZQUFJLEVBQUU7QUFDTGpDLGNBQUksRUFBRSxRQUREO0FBRUwrQixxQkFBVyxFQUFFTjtBQUZSO0FBVEs7QUFIUyxLQUF0QjtBQWtCQSxVQUFNUyxNQUFNLEdBQUcsTUFBTXRCLFFBQVEsQ0FBQ3VCLFNBQVQsQ0FBbUJyQixPQUFuQixFQUE0QlEsSUFBSSxDQUFDYyxTQUFMLENBQWVULGFBQWYsQ0FBNUIsRUFBMkRMLElBQUksQ0FBQ2MsU0FBTCxDQUFlZixNQUFmLENBQTNELEVBQW1GTixPQUFuRixDQUFyQjtBQUdBc0IsV0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDQUssVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxzQkFBaEIsQ0FBdUMsV0FBdkMsRUFBb0QsQ0FBcEQsRUFBdURDLEtBQXZEO0FBQ0E7O0FBRUQsc0JBQ0MsOERBQUMsOERBQUQ7QUFDQyxRQUFJLEVBQUVoQyxJQURQO0FBRUMsVUFBTSxFQUFFQyxNQUZUO0FBR0MsdUJBQWdCLCtCQUhqQjtBQUlDLFlBQVEsTUFKVDtBQUFBLDRCQU1DLDhEQUFDLHFFQUFEO0FBQWMsaUJBQVcsTUFBekI7QUFBQSxnQkFDR1gsSUFBSSxJQUFJLFlBQVQsZ0JBQ0EsOERBQUMsb0VBQUQ7QUFBYSxVQUFFLEVBQUMsK0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZ0JBSUEsOERBQUMsb0VBQUQ7QUFBYSxVQUFFLEVBQUMsK0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBZ0JDLDhEQUFDLG1FQUFEO0FBQVksZUFBUyxFQUFDLFdBQXRCO0FBQUEsNkJBQ0MsOERBQUMsNkRBQUQ7QUFBQSxnQ0FFQyw4REFBQyxtRUFBRDtBQUFZLG1CQUFTLEVBQUMsTUFBdEI7QUFBNkIsbUJBQVMsRUFBQyxlQUF2QztBQUFBLGtDQUNDLDhEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELEVBRUVpQixXQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRCxlQU1DO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsb0JBRUdqQixJQUFJLElBQUksWUFBVCxnQkFDQSw4REFBQywrREFBRDtBQUFRLG1CQUFPLEVBQUMsU0FBaEI7QUFBMEIsbUJBQU8sRUFBRWtCLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGdCQUlBLDhEQUFDLCtEQUFEO0FBQVEsbUJBQU8sRUFBQyxTQUFoQjtBQUEwQixtQkFBTyxFQUFFQSxNQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXVDQSxDOzs7Ozs7Ozs7OztBQy9GWTs7QUFBQSxJQUFJeUIsdUJBQXVCLEdBQUNDLG1CQUFPLENBQUMsd0lBQUQsQ0FBbkM7O0FBQXFGQyxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsZUFBQSxHQUFnQixLQUFLLENBQXJCOztBQUF1QixJQUFJQyxNQUFNLEdBQUNILHVCQUF1QixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbEM7O0FBQXFELElBQUlHLE9BQU8sR0FBQ0gsbUJBQU8sQ0FBQyxtR0FBRCxDQUFuQjs7QUFBd0QsSUFBSUksUUFBUSxHQUFDSixtQkFBTyxDQUFDLDJEQUFELENBQXBCOztBQUFpQyxJQUFJSyxnQkFBZ0IsR0FBQ0wsbUJBQU8sQ0FBQywrRUFBRCxDQUE1Qjs7QUFBbUQsTUFBTU0sVUFBVSxHQUFDLEVBQWpCOztBQUFvQixTQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUF5QkMsSUFBekIsRUFBOEJDLEVBQTlCLEVBQWlDQyxPQUFqQyxFQUF5QztBQUFDLE1BQUcsSUFBSCxFQUF3QztBQUFPLE1BQUcsQ0FBQyxDQUFDLEdBQUVSLE9BQU8sQ0FBQ1MsVUFBWCxFQUF1QkgsSUFBdkIsQ0FBSixFQUFpQyxPQUFqRixDQUF3RjtBQUN2ZTtBQUNBO0FBQ0E7O0FBQ0FELFFBQU0sQ0FBQ0QsUUFBUCxDQUFnQkUsSUFBaEIsRUFBcUJDLEVBQXJCLEVBQXdCQyxPQUF4QixFQUFpQ0UsS0FBakMsQ0FBdUNDLEdBQUcsSUFBRTtBQUFDLGNBQXVDO0FBQUM7QUFDckYsWUFBTUEsR0FBTjtBQUFXO0FBQUMsR0FEWjtBQUNjLFFBQU1DLFNBQVMsR0FBQ0osT0FBTyxJQUFFLE9BQU9BLE9BQU8sQ0FBQ0ssTUFBZixLQUF3QixXQUFqQyxHQUE2Q0wsT0FBTyxDQUFDSyxNQUFyRCxHQUE0RFIsTUFBTSxJQUFFQSxNQUFNLENBQUNRLE1BQTNGLENBTGlZLENBSy9SOztBQUNoSFYsWUFBVSxDQUFDRyxJQUFJLEdBQUMsR0FBTCxHQUFTQyxFQUFULElBQWFLLFNBQVMsR0FBQyxNQUFJQSxTQUFMLEdBQWUsRUFBckMsQ0FBRCxDQUFWLEdBQXFELElBQXJEO0FBQTJEOztBQUFBLFNBQVNFLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQStCO0FBQUMsUUFBSztBQUFDdEQ7QUFBRCxNQUFTc0QsS0FBSyxDQUFDQyxhQUFwQjtBQUFrQyxTQUFPdkQsTUFBTSxJQUFFQSxNQUFNLEtBQUcsT0FBakIsSUFBMEJzRCxLQUFLLENBQUNFLE9BQWhDLElBQXlDRixLQUFLLENBQUNHLE9BQS9DLElBQXdESCxLQUFLLENBQUNJLFFBQTlELElBQXdFSixLQUFLLENBQUNLLE1BQTlFLElBQXNGO0FBQzFOTCxPQUFLLENBQUNNLFdBQU4sSUFBbUJOLEtBQUssQ0FBQ00sV0FBTixDQUFrQkMsS0FBbEIsS0FBMEIsQ0FEZ0Y7QUFDN0U7O0FBQUEsU0FBU0MsV0FBVCxDQUFxQi9ELENBQXJCLEVBQXVCNkMsTUFBdkIsRUFBOEJDLElBQTlCLEVBQW1DQyxFQUFuQyxFQUFzQ2lCLE9BQXRDLEVBQThDQyxPQUE5QyxFQUFzREMsTUFBdEQsRUFBNkRiLE1BQTdELEVBQW9FO0FBQUMsUUFBSztBQUFDYztBQUFELE1BQVduRSxDQUFDLENBQUN3RCxhQUFsQjs7QUFBZ0MsTUFBR1csUUFBUSxLQUFHLEdBQVgsS0FBaUJiLGVBQWUsQ0FBQ3RELENBQUQsQ0FBZixJQUFvQixDQUFDLENBQUMsR0FBRXdDLE9BQU8sQ0FBQ1MsVUFBWCxFQUF1QkgsSUFBdkIsQ0FBdEMsQ0FBSCxFQUF1RTtBQUFDO0FBQzdOO0FBQVE7O0FBQUE5QyxHQUFDLENBQUNvRSxjQUFGLEdBRDRHLENBQ3pGOztBQUMzQixNQUFHRixNQUFNLElBQUUsSUFBUixJQUFjbkIsRUFBRSxDQUFDc0IsT0FBSCxDQUFXLEdBQVgsS0FBaUIsQ0FBbEMsRUFBb0M7QUFBQ0gsVUFBTSxHQUFDLEtBQVA7QUFBYyxHQUZpRSxDQUVqRTs7O0FBQ25EckIsUUFBTSxDQUFDbUIsT0FBTyxHQUFDLFNBQUQsR0FBVyxNQUFuQixDQUFOLENBQWlDbEIsSUFBakMsRUFBc0NDLEVBQXRDLEVBQXlDO0FBQUNrQixXQUFEO0FBQVNaLFVBQVQ7QUFBZ0JhO0FBQWhCLEdBQXpDO0FBQW1FOztBQUFBLFNBQVNJLElBQVQsQ0FBY0MsS0FBZCxFQUFvQjtBQUFDLFlBQXVDO0FBQUMsYUFBU0MsZUFBVCxDQUF5QkMsSUFBekIsRUFBOEI7QUFBQyxhQUFPLElBQUlDLEtBQUosQ0FBVyxnQ0FBK0JELElBQUksQ0FBQ0UsR0FBSSxnQkFBZUYsSUFBSSxDQUFDRyxRQUFTLDZCQUE0QkgsSUFBSSxDQUFDSSxNQUFPLGFBQTlHLElBQTRILFNBQTRCLENBQTVCLEdBQStGLEVBQTNOLENBQVYsQ0FBUDtBQUFrUCxLQUFsUixDQUFrUjs7O0FBQ2paLFVBQU1DLGtCQUFrQixHQUFDO0FBQUNoQyxVQUFJLEVBQUM7QUFBTixLQUF6QjtBQUFxQyxVQUFNaUMsYUFBYSxHQUFDQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsa0JBQVosQ0FBcEI7QUFBb0RDLGlCQUFhLENBQUNHLE9BQWQsQ0FBc0JQLEdBQUcsSUFBRTtBQUFDLFVBQUdBLEdBQUcsS0FBRyxNQUFULEVBQWdCO0FBQUMsWUFBR0osS0FBSyxDQUFDSSxHQUFELENBQUwsSUFBWSxJQUFaLElBQWtCLE9BQU9KLEtBQUssQ0FBQ0ksR0FBRCxDQUFaLEtBQW9CLFFBQXBCLElBQThCLE9BQU9KLEtBQUssQ0FBQ0ksR0FBRCxDQUFaLEtBQW9CLFFBQXZFLEVBQWdGO0FBQUMsZ0JBQU1ILGVBQWUsQ0FBQztBQUFDRyxlQUFEO0FBQUtDLG9CQUFRLEVBQUMsc0JBQWQ7QUFBcUNDLGtCQUFNLEVBQUNOLEtBQUssQ0FBQ0ksR0FBRCxDQUFMLEtBQWEsSUFBYixHQUFrQixNQUFsQixHQUF5QixPQUFPSixLQUFLLENBQUNJLEdBQUQ7QUFBakYsV0FBRCxDQUFyQjtBQUFnSDtBQUFDLE9BQW5OLE1BQXVOO0FBQUM7QUFDN1U7QUFDQSxjQUFNUSxDQUFDLEdBQUNSLEdBQVI7QUFBYTtBQUFDLEtBRjJFLEVBRHNDLENBRy9HOztBQUNoQixVQUFNUyxrQkFBa0IsR0FBQztBQUFDckMsUUFBRSxFQUFDLElBQUo7QUFBU2lCLGFBQU8sRUFBQyxJQUFqQjtBQUFzQkUsWUFBTSxFQUFDLElBQTdCO0FBQWtDRCxhQUFPLEVBQUMsSUFBMUM7QUFBK0NvQixjQUFRLEVBQUMsSUFBeEQ7QUFBNkR6QyxjQUFRLEVBQUMsSUFBdEU7QUFBMkVTLFlBQU0sRUFBQztBQUFsRixLQUF6QjtBQUFpSCxVQUFNaUMsYUFBYSxHQUFDTixNQUFNLENBQUNDLElBQVAsQ0FBWUcsa0JBQVosQ0FBcEI7QUFBb0RFLGlCQUFhLENBQUNKLE9BQWQsQ0FBc0JQLEdBQUcsSUFBRTtBQUFDLFlBQU1ZLE9BQU8sR0FBQyxPQUFPaEIsS0FBSyxDQUFDSSxHQUFELENBQTFCOztBQUFnQyxVQUFHQSxHQUFHLEtBQUcsSUFBVCxFQUFjO0FBQUMsWUFBR0osS0FBSyxDQUFDSSxHQUFELENBQUwsSUFBWVksT0FBTyxLQUFHLFFBQXRCLElBQWdDQSxPQUFPLEtBQUcsUUFBN0MsRUFBc0Q7QUFBQyxnQkFBTWYsZUFBZSxDQUFDO0FBQUNHLGVBQUQ7QUFBS0Msb0JBQVEsRUFBQyxzQkFBZDtBQUFxQ0Msa0JBQU0sRUFBQ1U7QUFBNUMsV0FBRCxDQUFyQjtBQUE2RTtBQUFDLE9BQXBKLE1BQXlKLElBQUdaLEdBQUcsS0FBRyxRQUFULEVBQWtCO0FBQUMsWUFBR0osS0FBSyxDQUFDSSxHQUFELENBQUwsSUFBWVksT0FBTyxLQUFHLFFBQXpCLEVBQWtDO0FBQUMsZ0JBQU1mLGVBQWUsQ0FBQztBQUFDRyxlQUFEO0FBQUtDLG9CQUFRLEVBQUMsVUFBZDtBQUF5QkMsa0JBQU0sRUFBQ1U7QUFBaEMsV0FBRCxDQUFyQjtBQUFpRTtBQUFDLE9BQXhILE1BQTZILElBQUdaLEdBQUcsS0FBRyxTQUFOLElBQWlCQSxHQUFHLEtBQUcsUUFBdkIsSUFBaUNBLEdBQUcsS0FBRyxTQUF2QyxJQUFrREEsR0FBRyxLQUFHLFVBQXhELElBQW9FQSxHQUFHLEtBQUcsVUFBN0UsRUFBd0Y7QUFBQyxZQUFHSixLQUFLLENBQUNJLEdBQUQsQ0FBTCxJQUFZLElBQVosSUFBa0JZLE9BQU8sS0FBRyxTQUEvQixFQUF5QztBQUFDLGdCQUFNZixlQUFlLENBQUM7QUFBQ0csZUFBRDtBQUFLQyxvQkFBUSxFQUFDLFdBQWQ7QUFBMEJDLGtCQUFNLEVBQUNVO0FBQWpDLFdBQUQsQ0FBckI7QUFBa0U7QUFBQyxPQUF0TSxNQUEwTTtBQUFDO0FBQ2xzQjtBQUNBLGNBQU1KLENBQUMsR0FBQ1IsR0FBUjtBQUFhO0FBQUMsS0FGdUosRUFKdEMsQ0FNL0c7QUFDaEI7O0FBQ0EsVUFBTWEsU0FBUyxHQUFDakQsTUFBTSxDQUFDa0QsT0FBUCxDQUFlQyxNQUFmLENBQXNCLEtBQXRCLENBQWhCOztBQUE2QyxRQUFHbkIsS0FBSyxDQUFDM0IsUUFBTixJQUFnQixDQUFDNEMsU0FBUyxDQUFDRyxPQUE5QixFQUFzQztBQUFDSCxlQUFTLENBQUNHLE9BQVYsR0FBa0IsSUFBbEI7QUFBdUI3RCxhQUFPLENBQUM4RCxJQUFSLENBQWEsc0tBQWI7QUFBc0w7QUFBQzs7QUFBQSxRQUFNQyxDQUFDLEdBQUN0QixLQUFLLENBQUMzQixRQUFOLEtBQWlCLEtBQXpCO0FBQStCLFFBQU1DLE1BQU0sR0FBQyxDQUFDLEdBQUVKLFFBQVEsQ0FBQ3FELFNBQVosR0FBYjs7QUFBc0MsUUFBSztBQUFDaEQsUUFBRDtBQUFNQztBQUFOLE1BQVVSLE1BQU0sQ0FBQ2tELE9BQVAsQ0FBZU0sT0FBZixDQUF1QixNQUFJO0FBQUMsVUFBSyxDQUFDQyxZQUFELEVBQWNDLFVBQWQsSUFBMEIsQ0FBQyxHQUFFekQsT0FBTyxDQUFDMEQsV0FBWCxFQUF3QnJELE1BQXhCLEVBQStCMEIsS0FBSyxDQUFDekIsSUFBckMsRUFBMEMsSUFBMUMsQ0FBL0I7QUFBK0UsV0FBTTtBQUFDQSxVQUFJLEVBQUNrRCxZQUFOO0FBQW1CakQsUUFBRSxFQUFDd0IsS0FBSyxDQUFDeEIsRUFBTixHQUFTLENBQUMsR0FBRVAsT0FBTyxDQUFDMEQsV0FBWCxFQUF3QnJELE1BQXhCLEVBQStCMEIsS0FBSyxDQUFDeEIsRUFBckMsQ0FBVCxHQUFrRGtELFVBQVUsSUFBRUQ7QUFBcEYsS0FBTjtBQUF5RyxHQUFwTixFQUFxTixDQUFDbkQsTUFBRCxFQUFRMEIsS0FBSyxDQUFDekIsSUFBZCxFQUFtQnlCLEtBQUssQ0FBQ3hCLEVBQXpCLENBQXJOLENBQWY7O0FBQWtRLE1BQUc7QUFBQ29ELFlBQUQ7QUFBVW5DLFdBQVY7QUFBa0JDLFdBQWxCO0FBQTBCQyxVQUExQjtBQUFpQ2I7QUFBakMsTUFBeUNrQixLQUE1QyxDQVJsaEIsQ0FRb2tCOztBQUMzcEIsTUFBRyxPQUFPNEIsUUFBUCxLQUFrQixRQUFyQixFQUE4QjtBQUFDQSxZQUFRLEdBQUMsYUFBYTVELE1BQU0sQ0FBQ2tELE9BQVAsQ0FBZVcsYUFBZixDQUE2QixHQUE3QixFQUFpQyxJQUFqQyxFQUFzQ0QsUUFBdEMsQ0FBdEI7QUFBdUUsR0FUZixDQVNlOzs7QUFDdEcsTUFBSUUsS0FBSjs7QUFBVSxZQUF3QztBQUFDLFFBQUc7QUFBQ0EsV0FBSyxHQUFDOUQsTUFBTSxDQUFDK0QsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJKLFFBQXJCLENBQU47QUFBc0MsS0FBMUMsQ0FBMEMsT0FBTWhELEdBQU4sRUFBVTtBQUFDLFlBQU0sSUFBSXVCLEtBQUosQ0FBVyw4REFBNkRILEtBQUssQ0FBQ3pCLElBQUssNEZBQXpFLElBQXNLLFNBQTRCLENBQTVCLEdBQStGLEVBQXJRLENBQVYsQ0FBTjtBQUEyUjtBQUFDLEdBQTFYLE1BQThYLEVBQXVDOztBQUFBLFFBQU0wRCxRQUFRLEdBQUNILEtBQUssSUFBRSxPQUFPQSxLQUFQLEtBQWUsUUFBdEIsSUFBZ0NBLEtBQUssQ0FBQ0ksR0FBckQ7QUFBeUQsUUFBSyxDQUFDQyxrQkFBRCxFQUFvQkMsU0FBcEIsSUFBK0IsQ0FBQyxHQUFFakUsZ0JBQWdCLENBQUNrRSxlQUFwQixFQUFxQztBQUFDQyxjQUFVLEVBQUM7QUFBWixHQUFyQyxDQUFwQzs7QUFBK0YsUUFBTUMsTUFBTSxHQUFDdkUsTUFBTSxDQUFDa0QsT0FBUCxDQUFlc0IsV0FBZixDQUEyQkMsRUFBRSxJQUFFO0FBQUNOLHNCQUFrQixDQUFDTSxFQUFELENBQWxCOztBQUF1QixRQUFHUixRQUFILEVBQVk7QUFBQyxVQUFHLE9BQU9BLFFBQVAsS0FBa0IsVUFBckIsRUFBZ0NBLFFBQVEsQ0FBQ1EsRUFBRCxDQUFSLENBQWhDLEtBQWtELElBQUcsT0FBT1IsUUFBUCxLQUFrQixRQUFyQixFQUE4QjtBQUFDQSxnQkFBUSxDQUFDYixPQUFULEdBQWlCcUIsRUFBakI7QUFBcUI7QUFBQztBQUFDLEdBQTVLLEVBQTZLLENBQUNSLFFBQUQsRUFBVUUsa0JBQVYsQ0FBN0ssQ0FBYjs7QUFBeU4sR0FBQyxHQUFFbkUsTUFBTSxDQUFDMEUsU0FBVixFQUFxQixNQUFJO0FBQUMsVUFBTUMsY0FBYyxHQUFDUCxTQUFTLElBQUVkLENBQVgsSUFBYyxDQUFDLEdBQUVyRCxPQUFPLENBQUNTLFVBQVgsRUFBdUJILElBQXZCLENBQW5DO0FBQWdFLFVBQU1NLFNBQVMsR0FBQyxPQUFPQyxNQUFQLEtBQWdCLFdBQWhCLEdBQTRCQSxNQUE1QixHQUFtQ1IsTUFBTSxJQUFFQSxNQUFNLENBQUNRLE1BQWxFO0FBQXlFLFVBQU04RCxZQUFZLEdBQUN4RSxVQUFVLENBQUNHLElBQUksR0FBQyxHQUFMLEdBQVNDLEVBQVQsSUFBYUssU0FBUyxHQUFDLE1BQUlBLFNBQUwsR0FBZSxFQUFyQyxDQUFELENBQTdCOztBQUF3RSxRQUFHOEQsY0FBYyxJQUFFLENBQUNDLFlBQXBCLEVBQWlDO0FBQUN2RSxjQUFRLENBQUNDLE1BQUQsRUFBUUMsSUFBUixFQUFhQyxFQUFiLEVBQWdCO0FBQUNNLGNBQU0sRUFBQ0Q7QUFBUixPQUFoQixDQUFSO0FBQTZDO0FBQUMsR0FBM1QsRUFBNFQsQ0FBQ0wsRUFBRCxFQUFJRCxJQUFKLEVBQVM2RCxTQUFULEVBQW1CdEQsTUFBbkIsRUFBMEJ3QyxDQUExQixFQUE0QmhELE1BQTVCLENBQTVUO0FBQWlXLFFBQU11RSxVQUFVLEdBQUM7QUFBQ1gsT0FBRyxFQUFDSyxNQUFMO0FBQVlPLFdBQU8sRUFBQ3JILENBQUMsSUFBRTtBQUFDLFVBQUdxRyxLQUFLLENBQUM5QixLQUFOLElBQWEsT0FBTzhCLEtBQUssQ0FBQzlCLEtBQU4sQ0FBWThDLE9BQW5CLEtBQTZCLFVBQTdDLEVBQXdEO0FBQUNoQixhQUFLLENBQUM5QixLQUFOLENBQVk4QyxPQUFaLENBQW9CckgsQ0FBcEI7QUFBd0I7O0FBQUEsVUFBRyxDQUFDQSxDQUFDLENBQUNzSCxnQkFBTixFQUF1QjtBQUFDdkQsbUJBQVcsQ0FBQy9ELENBQUQsRUFBRzZDLE1BQUgsRUFBVUMsSUFBVixFQUFlQyxFQUFmLEVBQWtCaUIsT0FBbEIsRUFBMEJDLE9BQTFCLEVBQWtDQyxNQUFsQyxFQUF5Q2IsTUFBekMsQ0FBWDtBQUE2RDtBQUFDO0FBQS9MLEdBQWpCOztBQUFrTitELFlBQVUsQ0FBQ0csWUFBWCxHQUF3QnZILENBQUMsSUFBRTtBQUFDLFFBQUcsQ0FBQyxDQUFDLEdBQUV3QyxPQUFPLENBQUNTLFVBQVgsRUFBdUJILElBQXZCLENBQUosRUFBaUM7O0FBQU8sUUFBR3VELEtBQUssQ0FBQzlCLEtBQU4sSUFBYSxPQUFPOEIsS0FBSyxDQUFDOUIsS0FBTixDQUFZZ0QsWUFBbkIsS0FBa0MsVUFBbEQsRUFBNkQ7QUFBQ2xCLFdBQUssQ0FBQzlCLEtBQU4sQ0FBWWdELFlBQVosQ0FBeUJ2SCxDQUF6QjtBQUE2Qjs7QUFBQTRDLFlBQVEsQ0FBQ0MsTUFBRCxFQUFRQyxJQUFSLEVBQWFDLEVBQWIsRUFBZ0I7QUFBQ3lFLGNBQVEsRUFBQztBQUFWLEtBQWhCLENBQVI7QUFBMEMsR0FBek0sQ0FWNXZDLENBVXM4QztBQUM3aEQ7OztBQUNBLE1BQUdqRCxLQUFLLENBQUNjLFFBQU4sSUFBZ0JnQixLQUFLLENBQUM1RyxJQUFOLEtBQWEsR0FBYixJQUFrQixFQUFFLFVBQVM0RyxLQUFLLENBQUM5QixLQUFqQixDQUFyQyxFQUE2RDtBQUFDLFVBQU1uQixTQUFTLEdBQUMsT0FBT0MsTUFBUCxLQUFnQixXQUFoQixHQUE0QkEsTUFBNUIsR0FBbUNSLE1BQU0sSUFBRUEsTUFBTSxDQUFDUSxNQUFsRSxDQUFELENBQTBFO0FBQ3ZJOztBQUNBLFVBQU1vRSxZQUFZLEdBQUM1RSxNQUFNLElBQUVBLE1BQU0sQ0FBQzZFLGNBQWYsSUFBK0IsQ0FBQyxHQUFFbEYsT0FBTyxDQUFDbUYsZUFBWCxFQUE0QjVFLEVBQTVCLEVBQStCSyxTQUEvQixFQUF5Q1AsTUFBTSxJQUFFQSxNQUFNLENBQUMrRSxPQUF4RCxFQUFnRS9FLE1BQU0sSUFBRUEsTUFBTSxDQUFDZ0YsYUFBL0UsQ0FBbEQ7QUFBZ0pULGNBQVUsQ0FBQ3RFLElBQVgsR0FBZ0IyRSxZQUFZLElBQUUsQ0FBQyxHQUFFakYsT0FBTyxDQUFDc0YsV0FBWCxFQUF3QixDQUFDLEdBQUV0RixPQUFPLENBQUN1RixTQUFYLEVBQXNCaEYsRUFBdEIsRUFBeUJLLFNBQXpCLEVBQW1DUCxNQUFNLElBQUVBLE1BQU0sQ0FBQ21GLGFBQWxELENBQXhCLENBQTlCO0FBQXlIOztBQUFBLFNBQU0sYUFBYXpGLE1BQU0sQ0FBQ2tELE9BQVAsQ0FBZXdDLFlBQWYsQ0FBNEI1QixLQUE1QixFQUFrQ2UsVUFBbEMsQ0FBbkI7QUFBa0U7O0FBQUEsSUFBSWMsUUFBUSxHQUFDNUQsSUFBYjtBQUFrQmhDLGVBQUEsR0FBZ0I0RixRQUFoQixDOzs7Ozs7Ozs7OztBQ3hCaFY7O0FBQUE1RixrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsK0JBQUEsR0FBZ0M2Rix1QkFBaEM7QUFBd0Q3RixrQ0FBQSxHQUFtQyxLQUFLLENBQXhDO0FBQTBDO0FBQ3ZJO0FBQ0E7O0FBQUcsU0FBUzZGLHVCQUFULENBQWlDQyxJQUFqQyxFQUFzQztBQUFDLFNBQU9BLElBQUksQ0FBQ0MsUUFBTCxDQUFjLEdBQWQsS0FBb0JELElBQUksS0FBRyxHQUEzQixHQUErQkEsSUFBSSxDQUFDRSxLQUFMLENBQVcsQ0FBWCxFQUFhLENBQUMsQ0FBZCxDQUEvQixHQUFnREYsSUFBdkQ7QUFBNkQ7QUFBQTtBQUN2RztBQUNBO0FBQ0E7OztBQUFHLE1BQU1HLDBCQUEwQixHQUFDQyxNQUFBLEdBQWtDSixDQUFsQyxHQUE2S0QsdUJBQTlNO0FBQXNPN0Ysa0NBQUEsR0FBbUNpRywwQkFBbkMsQzs7Ozs7Ozs7Ozs7QUNMNU47O0FBQUFqRyxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsMEJBQUEsR0FBMkJBLDJCQUFBLEdBQTRCLEtBQUssQ0FBNUQ7O0FBQThELE1BQU1tRyxtQkFBbUIsR0FBQyxPQUFPQyxJQUFQLEtBQWMsV0FBZCxJQUEyQkEsSUFBSSxDQUFDRCxtQkFBaEMsSUFBcUQsVUFBU0UsRUFBVCxFQUFZO0FBQUMsTUFBSUMsS0FBSyxHQUFDekgsSUFBSSxDQUFDMEgsR0FBTCxFQUFWO0FBQXFCLFNBQU9DLFVBQVUsQ0FBQyxZQUFVO0FBQUNILE1BQUUsQ0FBQztBQUFDSSxnQkFBVSxFQUFDLEtBQVo7QUFBa0JDLG1CQUFhLEVBQUMsWUFBVTtBQUFDLGVBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBVyxNQUFJL0gsSUFBSSxDQUFDMEgsR0FBTCxLQUFXRCxLQUFmLENBQVgsQ0FBUDtBQUEwQztBQUFyRixLQUFELENBQUY7QUFBNEYsR0FBeEcsRUFBeUcsQ0FBekcsQ0FBakI7QUFBOEgsQ0FBL087O0FBQWdQdEcsMkJBQUEsR0FBNEJtRyxtQkFBNUI7O0FBQWdELE1BQU1VLGtCQUFrQixHQUFDLE9BQU9ULElBQVAsS0FBYyxXQUFkLElBQTJCQSxJQUFJLENBQUNTLGtCQUFoQyxJQUFvRCxVQUFTeEosRUFBVCxFQUFZO0FBQUMsU0FBT3lKLFlBQVksQ0FBQ3pKLEVBQUQsQ0FBbkI7QUFBeUIsQ0FBbkg7O0FBQW9IMkMsMEJBQUEsR0FBMkI2RyxrQkFBM0IsQzs7Ozs7Ozs7Ozs7QUNBMWU7O0FBQUEsSUFBSUUsc0JBQXNCLEdBQUNoSCxtQkFBTyxDQUFDLHNJQUFELENBQWxDOztBQUFtRkMsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLHNCQUFBLEdBQXVCZ0gsY0FBdkI7QUFBc0NoSCxvQkFBQSxHQUFxQmlILFlBQXJCO0FBQWtDakgsOEJBQUEsR0FBK0JrSCxzQkFBL0I7QUFBc0RsSCxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUltSCxzQkFBc0IsR0FBQ0osc0JBQXNCLENBQUNoSCxtQkFBTyxDQUFDLDRIQUFELENBQVIsQ0FBakQ7O0FBQXdILElBQUlxSCxvQkFBb0IsR0FBQ3JILG1CQUFPLENBQUMseUZBQUQsQ0FBaEMsQyxDQUE0RDtBQUNqYztBQUNBO0FBQ0E7OztBQUNBLE1BQU1zSCxpQkFBaUIsR0FBQyxJQUF4Qjs7QUFBNkIsU0FBU0MsVUFBVCxDQUFvQmpGLEdBQXBCLEVBQXdCa0YsR0FBeEIsRUFBNEJDLFNBQTVCLEVBQXNDO0FBQUMsTUFBSUMsS0FBSyxHQUFDRixHQUFHLENBQUNHLEdBQUosQ0FBUXJGLEdBQVIsQ0FBVjs7QUFBdUIsTUFBR29GLEtBQUgsRUFBUztBQUFDLFFBQUcsWUFBV0EsS0FBZCxFQUFvQjtBQUFDLGFBQU9BLEtBQUssQ0FBQ0UsTUFBYjtBQUFxQjs7QUFBQSxXQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JKLEtBQWhCLENBQVA7QUFBK0I7O0FBQUEsTUFBSUssUUFBSjtBQUFhLFFBQU1DLElBQUksR0FBQyxJQUFJSCxPQUFKLENBQVlDLE9BQU8sSUFBRTtBQUFDQyxZQUFRLEdBQUNELE9BQVQ7QUFBa0IsR0FBeEMsQ0FBWDtBQUFxRE4sS0FBRyxDQUFDUyxHQUFKLENBQVEzRixHQUFSLEVBQVlvRixLQUFLLEdBQUM7QUFBQ0ksV0FBTyxFQUFDQyxRQUFUO0FBQWtCSCxVQUFNLEVBQUNJO0FBQXpCLEdBQWxCO0FBQWtELFNBQU9QLFNBQVMsR0FBQztBQUNuVEEsV0FBUyxHQUFHUyxJQUFaLENBQWlCM0ssS0FBSyxLQUFHd0ssUUFBUSxDQUFDeEssS0FBRCxDQUFSLEVBQWdCQSxLQUFuQixDQUF0QixDQURrVCxHQUNqUXlLLElBRGlQO0FBQzNPOztBQUFBLFNBQVNHLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTBCO0FBQUMsTUFBRztBQUFDQSxRQUFJLEdBQUN4SSxRQUFRLENBQUNtRSxhQUFULENBQXVCLE1BQXZCLENBQUw7QUFBb0MsV0FBTztBQUNqSTtBQUNBLE9BQUMsQ0FBQ3BFLE1BQU0sQ0FBQzBJLG9CQUFULElBQStCLENBQUMsQ0FBQ3pJLFFBQVEsQ0FBQzBJLFlBQTFDLElBQXdERixJQUFJLENBQUNHLE9BQUwsQ0FBYUMsUUFBYixDQUFzQixVQUF0QjtBQUZrRTtBQUU5QixHQUZWLENBRVUsT0FBTUMsT0FBTixFQUFjO0FBQUMsV0FBTyxLQUFQO0FBQWM7QUFBQzs7QUFBQSxNQUFNQyxXQUFXLEdBQUNQLFdBQVcsRUFBN0I7O0FBQWdDLFNBQVNRLGNBQVQsQ0FBd0JsSSxJQUF4QixFQUE2QkMsRUFBN0IsRUFBZ0MwSCxJQUFoQyxFQUFxQztBQUFDLFNBQU8sSUFBSVAsT0FBSixDQUFZLENBQUNlLEdBQUQsRUFBS0MsR0FBTCxLQUFXO0FBQUMsUUFBR2pKLFFBQVEsQ0FBQ2tKLGFBQVQsQ0FBd0IsK0JBQThCckksSUFBSyxJQUEzRCxDQUFILEVBQW1FO0FBQUMsYUFBT21JLEdBQUcsRUFBVjtBQUFjOztBQUFBUixRQUFJLEdBQUN4SSxRQUFRLENBQUNtRSxhQUFULENBQXVCLE1BQXZCLENBQUwsQ0FBbkYsQ0FBdUg7O0FBQ3JWLFFBQUdyRCxFQUFILEVBQU0wSCxJQUFJLENBQUMxSCxFQUFMLEdBQVFBLEVBQVI7QUFBVzBILFFBQUksQ0FBQ1csR0FBTCxHQUFVLFVBQVY7QUFBb0JYLFFBQUksQ0FBQ1ksV0FBTCxHQUFpQjdDLFNBQWpCO0FBQWlEaUMsUUFBSSxDQUFDYSxNQUFMLEdBQVlMLEdBQVo7QUFBZ0JSLFFBQUksQ0FBQ2MsT0FBTCxHQUFhTCxHQUFiLENBRHdILENBQ3ZHOztBQUN2SFQsUUFBSSxDQUFDM0gsSUFBTCxHQUFVQSxJQUFWO0FBQWViLFlBQVEsQ0FBQ3VKLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmhCLElBQTFCO0FBQWlDLEdBRnVKLENBQVA7QUFFN0k7O0FBQUEsTUFBTWlCLGdCQUFnQixHQUFDQyxNQUFNLENBQUMsa0JBQUQsQ0FBN0IsQyxDQUFrRDs7QUFDckcsU0FBU3JDLGNBQVQsQ0FBd0JuRyxHQUF4QixFQUE0QjtBQUFDLFNBQU82QixNQUFNLENBQUM0RyxjQUFQLENBQXNCekksR0FBdEIsRUFBMEJ1SSxnQkFBMUIsRUFBMkMsRUFBM0MsQ0FBUDtBQUF1RDs7QUFBQSxTQUFTbkMsWUFBVCxDQUFzQnBHLEdBQXRCLEVBQTBCO0FBQUMsU0FBT0EsR0FBRyxJQUFFdUksZ0JBQWdCLElBQUl2SSxHQUFoQztBQUFxQzs7QUFBQSxTQUFTMEksWUFBVCxDQUFzQkMsR0FBdEIsRUFBMEJDLE1BQTFCLEVBQWlDO0FBQUMsU0FBTyxJQUFJN0IsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBUzZCLE1BQVQsS0FBa0I7QUFBQ0QsVUFBTSxHQUFDOUosUUFBUSxDQUFDbUUsYUFBVCxDQUF1QixRQUF2QixDQUFQLENBQUQsQ0FBeUM7QUFDcFE7QUFDQTs7QUFDQTJGLFVBQU0sQ0FBQ1QsTUFBUCxHQUFjbkIsT0FBZDs7QUFBc0I0QixVQUFNLENBQUNSLE9BQVAsR0FBZSxNQUFJUyxNQUFNLENBQUMxQyxjQUFjLENBQUMsSUFBSTVFLEtBQUosQ0FBVywwQkFBeUJvSCxHQUFJLEVBQXhDLENBQUQsQ0FBZixDQUF6QixDQUhxTSxDQUcvRztBQUM1Rzs7O0FBQ0FDLFVBQU0sQ0FBQ1YsV0FBUCxHQUFtQjdDLFNBQW5CLENBTDJOLENBS3hLO0FBQ25EOztBQUNBdUQsVUFBTSxDQUFDRCxHQUFQLEdBQVdBLEdBQVg7QUFBZTdKLFlBQVEsQ0FBQ2dLLElBQVQsQ0FBY1IsV0FBZCxDQUEwQk0sTUFBMUI7QUFBbUMsR0FQMkksQ0FBUDtBQU9qSSxDLENBQUE7OztBQUNyRCxTQUFTRyx5QkFBVCxDQUFtQ3JHLENBQW5DLEVBQXFDc0csRUFBckMsRUFBd0NoSixHQUF4QyxFQUE0QztBQUFDLFNBQU8sSUFBSStHLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVM2QixNQUFULEtBQWtCO0FBQUMsUUFBSUksU0FBUyxHQUFDLEtBQWQ7QUFBb0J2RyxLQUFDLENBQUMwRSxJQUFGLENBQU84QixDQUFDLElBQUU7QUFBQztBQUNsSEQsZUFBUyxHQUFDLElBQVY7QUFBZWpDLGFBQU8sQ0FBQ2tDLENBQUQsQ0FBUDtBQUFZLEtBRDRFLEVBQzFFbkosS0FEMEUsQ0FDcEU4SSxNQURvRTtBQUM1RCxLQUFDLEdBQUV0QyxvQkFBb0IsQ0FBQ2pCLG1CQUF4QixFQUE2QyxNQUFJSyxVQUFVLENBQUMsTUFBSTtBQUFDLFVBQUcsQ0FBQ3NELFNBQUosRUFBYztBQUFDSixjQUFNLENBQUM3SSxHQUFELENBQU47QUFBYTtBQUFDLEtBQW5DLEVBQW9DZ0osRUFBcEMsQ0FBM0Q7QUFBcUcsR0FENUYsQ0FBUDtBQUNzRyxDLENBQUE7QUFDbko7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUzNDLHNCQUFULEdBQWlDO0FBQUMsTUFBR2QsSUFBSSxDQUFDNEQsZ0JBQVIsRUFBeUI7QUFBQyxXQUFPcEMsT0FBTyxDQUFDQyxPQUFSLENBQWdCekIsSUFBSSxDQUFDNEQsZ0JBQXJCLENBQVA7QUFBK0M7O0FBQUEsUUFBTUMsZUFBZSxHQUFDLElBQUlyQyxPQUFKLENBQVlDLE9BQU8sSUFBRTtBQUFDO0FBQ3ZKLFVBQU14QixFQUFFLEdBQUNELElBQUksQ0FBQzhELG1CQUFkOztBQUFrQzlELFFBQUksQ0FBQzhELG1CQUFMLEdBQXlCLE1BQUk7QUFBQ3JDLGFBQU8sQ0FBQ3pCLElBQUksQ0FBQzRELGdCQUFOLENBQVA7QUFBK0IzRCxRQUFFLElBQUVBLEVBQUUsRUFBTjtBQUFVLEtBQXZFO0FBQXlFLEdBRHNCLENBQXRCO0FBQ0UsU0FBT3VELHlCQUF5QixDQUFDSyxlQUFELEVBQWlCNUMsaUJBQWpCLEVBQW1DTCxjQUFjLENBQUMsSUFBSTVFLEtBQUosQ0FBVSxzQ0FBVixDQUFELENBQWpELENBQWhDO0FBQXVJOztBQUFBLFNBQVMrSCxnQkFBVCxDQUEwQkMsV0FBMUIsRUFBc0NDLEtBQXRDLEVBQTRDO0FBQUMsWUFBd0M7QUFBQyxXQUFPekMsT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQUN5QyxhQUFPLEVBQUMsQ0FBQ0YsV0FBVyxHQUFDLDRCQUFaLEdBQXlDRyxTQUFTLENBQUMsQ0FBQyxHQUFFcEQsc0JBQXNCLENBQUNoRSxPQUExQixFQUFtQ2tILEtBQW5DLEVBQXlDLEtBQXpDLENBQUQsQ0FBbkQsQ0FBVDtBQUErRztBQUNoZEcsU0FBRyxFQUFDO0FBRDZWLEtBQWhCLENBQVA7QUFDaFU7O0FBQUEsU0FBT3RELHNCQUFzQixHQUFHZSxJQUF6QixDQUE4QndDLFFBQVEsSUFBRTtBQUFDLFFBQUcsRUFBRUosS0FBSyxJQUFJSSxRQUFYLENBQUgsRUFBd0I7QUFBQyxZQUFNekQsY0FBYyxDQUFDLElBQUk1RSxLQUFKLENBQVcsMkJBQTBCaUksS0FBTSxFQUEzQyxDQUFELENBQXBCO0FBQXFFOztBQUFBLFVBQU1LLFFBQVEsR0FBQ0QsUUFBUSxDQUFDSixLQUFELENBQVIsQ0FBZ0I5QyxHQUFoQixDQUFvQkUsS0FBSyxJQUFFMkMsV0FBVyxHQUFDLFNBQVosR0FBc0JHLFNBQVMsQ0FBQzlDLEtBQUQsQ0FBMUQsQ0FBZjtBQUFrRixXQUFNO0FBQUM2QyxhQUFPLEVBQUNJLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsQ0FBQyxJQUFFQSxDQUFDLENBQUM3RSxRQUFGLENBQVcsS0FBWCxDQUFuQixDQUFUO0FBQStDeUUsU0FBRyxFQUFDRSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLENBQUMsSUFBRUEsQ0FBQyxDQUFDN0UsUUFBRixDQUFXLE1BQVgsQ0FBbkI7QUFBbkQsS0FBTjtBQUFrRyxHQUEzVCxDQUFQO0FBQXFVOztBQUFBLFNBQVM4RSxpQkFBVCxDQUEyQlQsV0FBM0IsRUFBdUM7QUFBQyxRQUFNVSxXQUFXLEdBQUMsSUFBSUMsR0FBSixFQUFsQjtBQUE0QixRQUFNQyxhQUFhLEdBQUMsSUFBSUQsR0FBSixFQUFwQjtBQUE4QixRQUFNRSxXQUFXLEdBQUMsSUFBSUYsR0FBSixFQUFsQjtBQUE0QixRQUFNRyxNQUFNLEdBQUMsSUFBSUgsR0FBSixFQUFiOztBQUF1QixXQUFTSSxrQkFBVCxDQUE0QjNCLEdBQTVCLEVBQWdDO0FBQUMsUUFBSXpCLElBQUksR0FBQ2lELGFBQWEsQ0FBQ3RELEdBQWQsQ0FBa0I4QixHQUFsQixDQUFUOztBQUFnQyxRQUFHekIsSUFBSCxFQUFRO0FBQUMsYUFBT0EsSUFBUDtBQUFhLEtBQXZELENBQXVEOzs7QUFDM2pCLFFBQUdwSSxRQUFRLENBQUNrSixhQUFULENBQXdCLGdCQUFlVyxHQUFJLElBQTNDLENBQUgsRUFBbUQ7QUFBQyxhQUFPNUIsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFBMEI7O0FBQUFtRCxpQkFBYSxDQUFDaEQsR0FBZCxDQUFrQndCLEdBQWxCLEVBQXNCekIsSUFBSSxHQUFDd0IsWUFBWSxDQUFDQyxHQUFELENBQXZDO0FBQThDLFdBQU96QixJQUFQO0FBQWE7O0FBQUEsV0FBU3FELGVBQVQsQ0FBeUI1SyxJQUF6QixFQUE4QjtBQUFDLFFBQUl1SCxJQUFJLEdBQUNrRCxXQUFXLENBQUN2RCxHQUFaLENBQWdCbEgsSUFBaEIsQ0FBVDs7QUFBK0IsUUFBR3VILElBQUgsRUFBUTtBQUFDLGFBQU9BLElBQVA7QUFBYTs7QUFBQWtELGVBQVcsQ0FBQ2pELEdBQVosQ0FBZ0J4SCxJQUFoQixFQUFxQnVILElBQUksR0FBQ3NELEtBQUssQ0FBQzdLLElBQUQsQ0FBTCxDQUFZeUgsSUFBWixDQUFpQlUsR0FBRyxJQUFFO0FBQUMsVUFBRyxDQUFDQSxHQUFHLENBQUMyQyxFQUFSLEVBQVc7QUFBQyxjQUFNLElBQUlsSixLQUFKLENBQVcsOEJBQTZCNUIsSUFBSyxFQUE3QyxDQUFOO0FBQXVEOztBQUFBLGFBQU9tSSxHQUFHLENBQUM0QyxJQUFKLEdBQVd0RCxJQUFYLENBQWdCc0QsSUFBSSxLQUFHO0FBQUMvSyxZQUFJLEVBQUNBLElBQU47QUFBV2dMLGVBQU8sRUFBQ0Q7QUFBbkIsT0FBSCxDQUFwQixDQUFQO0FBQTBELEtBQXBKLEVBQXNKM0ssS0FBdEosQ0FBNEpDLEdBQUcsSUFBRTtBQUFDLFlBQU1tRyxjQUFjLENBQUNuRyxHQUFELENBQXBCO0FBQTJCLEtBQTdMLENBQTFCO0FBQTBOLFdBQU9rSCxJQUFQO0FBQWE7O0FBQUEsU0FBTTtBQUFDMEQsa0JBQWMsQ0FBQ3BCLEtBQUQsRUFBTztBQUFDLGFBQU8vQyxVQUFVLENBQUMrQyxLQUFELEVBQU9TLFdBQVAsQ0FBakI7QUFBc0MsS0FBN0Q7O0FBQThEWSxnQkFBWSxDQUFDckIsS0FBRCxFQUFPc0IsT0FBUCxFQUFlO0FBQUMvRCxhQUFPLENBQUNDLE9BQVIsQ0FBZ0I4RCxPQUFoQixFQUF5QjFELElBQXpCLENBQThCMkQsRUFBRSxJQUFFQSxFQUFFLEVBQXBDLEVBQXdDM0QsSUFBeEMsQ0FBNkNqSSxPQUFPLEtBQUc7QUFBQzZMLGlCQUFTLEVBQUM3TCxPQUFPLElBQUVBLE9BQU8sQ0FBQ21ELE9BQWpCLElBQTBCbkQsT0FBckM7QUFBNkNBLGVBQU8sRUFBQ0E7QUFBckQsT0FBSCxDQUFwRCxFQUFzSGEsR0FBRyxLQUFHO0FBQUNpTCxhQUFLLEVBQUNqTDtBQUFQLE9BQUgsQ0FBekgsRUFBMElvSCxJQUExSSxDQUErSXhLLEtBQUssSUFBRTtBQUFDLGNBQU1zTyxHQUFHLEdBQUNqQixXQUFXLENBQUNwRCxHQUFaLENBQWdCMkMsS0FBaEIsQ0FBVjtBQUFpQ1MsbUJBQVcsQ0FBQzlDLEdBQVosQ0FBZ0JxQyxLQUFoQixFQUFzQjVNLEtBQXRCO0FBQTZCLFlBQUdzTyxHQUFHLElBQUUsYUFBWUEsR0FBcEIsRUFBd0JBLEdBQUcsQ0FBQ2xFLE9BQUosQ0FBWXBLLEtBQVo7QUFBb0IsT0FBalE7QUFBb1EsS0FBOVY7O0FBQStWdU8sYUFBUyxDQUFDM0IsS0FBRCxFQUFPL0osUUFBUCxFQUFnQjtBQUFDLGFBQU9nSCxVQUFVLENBQUMrQyxLQUFELEVBQU9hLE1BQVAsRUFBYyxNQUFJO0FBQUMsZUFBT3RCLHlCQUF5QixDQUFDTyxnQkFBZ0IsQ0FBQ0MsV0FBRCxFQUFhQyxLQUFiLENBQWhCLENBQW9DcEMsSUFBcEMsQ0FBeUMsQ0FBQztBQUFDcUMsaUJBQUQ7QUFBU0U7QUFBVCxTQUFELEtBQWlCO0FBQUMsaUJBQU81QyxPQUFPLENBQUNxRSxHQUFSLENBQVksQ0FBQ25CLFdBQVcsQ0FBQ29CLEdBQVosQ0FBZ0I3QixLQUFoQixJQUF1QixFQUF2QixHQUEwQnpDLE9BQU8sQ0FBQ3FFLEdBQVIsQ0FBWTNCLE9BQU8sQ0FBQy9DLEdBQVIsQ0FBWTRELGtCQUFaLENBQVosQ0FBM0IsRUFBd0V2RCxPQUFPLENBQUNxRSxHQUFSLENBQVl6QixHQUFHLENBQUNqRCxHQUFKLENBQVE2RCxlQUFSLENBQVosQ0FBeEUsQ0FBWixDQUFQO0FBQW9JLFNBQS9MLEVBQWlNbkQsSUFBak0sQ0FBc01VLEdBQUcsSUFBRTtBQUFDLGlCQUFPLEtBQUs4QyxjQUFMLENBQW9CcEIsS0FBcEIsRUFBMkJwQyxJQUEzQixDQUFnQ2tFLFVBQVUsS0FBRztBQUFDQSxzQkFBRDtBQUFZQyxrQkFBTSxFQUFDekQsR0FBRyxDQUFDLENBQUQ7QUFBdEIsV0FBSCxDQUExQyxDQUFQO0FBQWtGLFNBQTlSLENBQUQsRUFBaVN0QixpQkFBalMsRUFBbVRMLGNBQWMsQ0FBQyxJQUFJNUUsS0FBSixDQUFXLG1DQUFrQ2lJLEtBQU0sRUFBbkQsQ0FBRCxDQUFqVSxDQUF6QixDQUFtWnBDLElBQW5aLENBQXdaLENBQUM7QUFBQ2tFLG9CQUFEO0FBQVlDO0FBQVosU0FBRCxLQUF1QjtBQUFDLGdCQUFNekQsR0FBRyxHQUFDakcsTUFBTSxDQUFDMkosTUFBUCxDQUFjO0FBQUNELGtCQUFNLEVBQUNBO0FBQVIsV0FBZCxFQUE4QkQsVUFBOUIsQ0FBVjtBQUFvRCxpQkFBTSxXQUFVQSxVQUFWLEdBQXFCQSxVQUFyQixHQUFnQ3hELEdBQXRDO0FBQTJDLFNBQS9nQixFQUFpaEIvSCxLQUFqaEIsQ0FBdWhCQyxHQUFHLElBQUU7QUFBQyxjQUFHUCxRQUFILEVBQVk7QUFBQztBQUN4NUMsa0JBQU1PLEdBQU47QUFBVzs7QUFBQSxpQkFBTTtBQUFDaUwsaUJBQUssRUFBQ2pMO0FBQVAsV0FBTjtBQUFtQixTQURnMUIsQ0FBUDtBQUN0MEIsT0FEbXpCLENBQWpCO0FBQy94QixLQURzYTs7QUFDcmFQLFlBQVEsQ0FBQytKLEtBQUQsRUFBTztBQUFDO0FBQ3JEO0FBQ0EsVUFBSWlDLEVBQUo7O0FBQU8sVUFBR0EsRUFBRSxHQUFDQyxTQUFTLENBQUNDLFVBQWhCLEVBQTJCO0FBQUM7QUFDbkMsWUFBR0YsRUFBRSxDQUFDRyxRQUFILElBQWEsS0FBS0MsSUFBTCxDQUFVSixFQUFFLENBQUNLLGFBQWIsQ0FBaEIsRUFBNEMsT0FBTy9FLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQTBCOztBQUFBLGFBQU9zQyxnQkFBZ0IsQ0FBQ0MsV0FBRCxFQUFhQyxLQUFiLENBQWhCLENBQW9DcEMsSUFBcEMsQ0FBeUMyRSxNQUFNLElBQUVoRixPQUFPLENBQUNxRSxHQUFSLENBQVl4RCxXQUFXLEdBQUNtRSxNQUFNLENBQUN0QyxPQUFQLENBQWUvQyxHQUFmLENBQW1Ca0MsTUFBTSxJQUFFZixjQUFjLENBQUNlLE1BQUQsRUFBUSxRQUFSLENBQXpDLENBQUQsR0FBNkQsRUFBcEYsQ0FBakQsRUFBMEl4QixJQUExSSxDQUErSSxNQUFJO0FBQUMsU0FBQyxHQUFFYixvQkFBb0IsQ0FBQ2pCLG1CQUF4QixFQUE2QyxNQUFJLEtBQUs2RixTQUFMLENBQWUzQixLQUFmLEVBQXFCLElBQXJCLEVBQTJCekosS0FBM0IsQ0FBaUMsTUFBSSxDQUFFLENBQXZDLENBQWpEO0FBQTRGLE9BQWhQLEVBQWtQQSxLQUFsUCxFQUF3UDtBQUNyVSxZQUFJLENBQUUsQ0FEdUUsQ0FBUDtBQUM3RDs7QUFMaWMsR0FBTjtBQUt4Yjs7QUFBQSxJQUFJZ0YsUUFBUSxHQUFDaUYsaUJBQWI7QUFBK0I3SyxlQUFBLEdBQWdCNEYsUUFBaEIsQzs7Ozs7Ozs7Ozs7QUNqQzlCOztBQUFBLElBQUk5Rix1QkFBdUIsR0FBQ0MsbUJBQU8sQ0FBQyx3SUFBRCxDQUFuQzs7QUFBcUYsSUFBSWdILHNCQUFzQixHQUFDaEgsbUJBQU8sQ0FBQyxzSUFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxpQkFBQSxHQUFrQndELFNBQWxCO0FBQTRCeEQsZ0NBQUEsR0FBaUM2TSx3QkFBakM7QUFBMEQ3TSxvQkFBQSxHQUFxQkEsa0JBQUEsR0FBbUJBLGVBQUEsR0FBZ0IsS0FBSyxDQUE3RDs7QUFBK0QsSUFBSUMsTUFBTSxHQUFDOEcsc0JBQXNCLENBQUNoSCxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUlJLFFBQVEsR0FBQ0wsdUJBQXVCLENBQUNDLG1CQUFPLENBQUMsbUdBQUQsQ0FBUixDQUFwQzs7QUFBa0ZDLGNBQUEsR0FBZUcsUUFBUSxDQUFDZ0QsT0FBeEI7QUFBZ0NuRCxrQkFBQSxHQUFtQkcsUUFBUSxDQUFDMk0sVUFBNUI7O0FBQXVDLElBQUlDLGNBQWMsR0FBQ2hOLG1CQUFPLENBQUMsNEVBQUQsQ0FBMUI7O0FBQWdFLElBQUlpTixXQUFXLEdBQUNqRyxzQkFBc0IsQ0FBQ2hILG1CQUFPLENBQUMscUVBQUQsQ0FBUixDQUF0Qzs7QUFBaUVDLGtCQUFBLEdBQW1CZ04sV0FBVyxDQUFDN0osT0FBL0I7QUFBdUM7O0FBQW1CLE1BQU04SixlQUFlLEdBQUM7QUFBQzFNLFFBQU0sRUFBQyxJQUFSO0FBQWE7QUFDN3dCMk0sZ0JBQWMsRUFBQyxFQURpdkI7O0FBQzl1QkMsT0FBSyxDQUFDOUcsRUFBRCxFQUFJO0FBQUMsUUFBRyxLQUFLOUYsTUFBUixFQUFlLE9BQU84RixFQUFFLEVBQVQ7O0FBQVksZUFBK0IsRUFBK0I7QUFBQzs7QUFEMG9CLENBQXRCLEMsQ0FDbG5COztBQUN4SCxNQUFNK0csaUJBQWlCLEdBQUMsQ0FBQyxVQUFELEVBQVksT0FBWixFQUFvQixPQUFwQixFQUE0QixRQUE1QixFQUFxQyxZQUFyQyxFQUFrRCxZQUFsRCxFQUErRCxVQUEvRCxFQUEwRSxRQUExRSxFQUFtRixTQUFuRixFQUE2RixlQUE3RixFQUE2RyxTQUE3RyxFQUF1SCxXQUF2SCxFQUFtSSxnQkFBbkksRUFBb0osZUFBcEosQ0FBeEI7QUFBNkwsTUFBTUMsWUFBWSxHQUFDLENBQUMsa0JBQUQsRUFBb0IscUJBQXBCLEVBQTBDLHFCQUExQyxFQUFnRSxrQkFBaEUsRUFBbUYsaUJBQW5GLEVBQXFHLG9CQUFyRyxDQUFuQjtBQUE4SSxNQUFNQyxnQkFBZ0IsR0FBQyxDQUFDLE1BQUQsRUFBUSxTQUFSLEVBQWtCLFFBQWxCLEVBQTJCLE1BQTNCLEVBQWtDLFVBQWxDLEVBQTZDLGdCQUE3QyxDQUF2QixDLENBQXNGOztBQUNqYTVLLE1BQU0sQ0FBQzRHLGNBQVAsQ0FBc0IyRCxlQUF0QixFQUFzQyxRQUF0QyxFQUErQztBQUFDdkYsS0FBRyxHQUFFO0FBQUMsV0FBT3ZILFFBQVEsQ0FBQ2dELE9BQVQsQ0FBaUJvSyxNQUF4QjtBQUFnQzs7QUFBdkMsQ0FBL0M7QUFBeUZILGlCQUFpQixDQUFDeEssT0FBbEIsQ0FBMEI0SyxLQUFLLElBQUU7QUFBQztBQUMzSDtBQUNBO0FBQ0E7QUFDQTlLLFFBQU0sQ0FBQzRHLGNBQVAsQ0FBc0IyRCxlQUF0QixFQUFzQ08sS0FBdEMsRUFBNEM7QUFBQzlGLE9BQUcsR0FBRTtBQUFDLFlBQU1uSCxNQUFNLEdBQUNrTixTQUFTLEVBQXRCO0FBQXlCLGFBQU9sTixNQUFNLENBQUNpTixLQUFELENBQWI7QUFBc0I7O0FBQXRELEdBQTVDO0FBQXNHLENBSmI7QUFJZUYsZ0JBQWdCLENBQUMxSyxPQUFqQixDQUF5QjRLLEtBQUssSUFBRTtBQUFDO0FBQ3pJOztBQUFDUCxpQkFBZSxDQUFDTyxLQUFELENBQWYsR0FBdUIsQ0FBQyxHQUFHckwsSUFBSixLQUFXO0FBQUMsVUFBTTVCLE1BQU0sR0FBQ2tOLFNBQVMsRUFBdEI7QUFBeUIsV0FBT2xOLE1BQU0sQ0FBQ2lOLEtBQUQsQ0FBTixDQUFjLEdBQUdyTCxJQUFqQixDQUFQO0FBQStCLEdBQTNGO0FBQTZGLENBRFU7QUFDUmtMLFlBQVksQ0FBQ3pLLE9BQWIsQ0FBcUIzQixLQUFLLElBQUU7QUFBQ2dNLGlCQUFlLENBQUNFLEtBQWhCLENBQXNCLE1BQUk7QUFBQ2hOLFlBQVEsQ0FBQ2dELE9BQVQsQ0FBaUJvSyxNQUFqQixDQUF3QkcsRUFBeEIsQ0FBMkJ6TSxLQUEzQixFQUFpQyxDQUFDLEdBQUdrQixJQUFKLEtBQVc7QUFBQyxZQUFNd0wsVUFBVSxHQUFFLEtBQUkxTSxLQUFLLENBQUMyTSxNQUFOLENBQWEsQ0FBYixFQUFnQkMsV0FBaEIsRUFBOEIsR0FBRTVNLEtBQUssQ0FBQzZNLFNBQU4sQ0FBZ0IsQ0FBaEIsQ0FBbUIsRUFBekU7QUFBMkUsWUFBTUMsZ0JBQWdCLEdBQUNkLGVBQXZCOztBQUF1QyxVQUFHYyxnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFuQixFQUFnQztBQUFDLFlBQUc7QUFBQ0ksMEJBQWdCLENBQUNKLFVBQUQsQ0FBaEIsQ0FBNkIsR0FBR3hMLElBQWhDO0FBQXVDLFNBQTNDLENBQTJDLE9BQU10QixHQUFOLEVBQVU7QUFBQ3JCLGlCQUFPLENBQUNzTSxLQUFSLENBQWUsd0NBQXVDNkIsVUFBVyxFQUFqRTtBQUFvRW5PLGlCQUFPLENBQUNzTSxLQUFSLENBQWUsR0FBRWpMLEdBQUcsQ0FBQ21OLE9BQVEsS0FBSW5OLEdBQUcsQ0FBQ29OLEtBQU0sRUFBM0M7QUFBK0M7QUFBQztBQUFDLEtBQTNXO0FBQThXLEdBQXpZO0FBQTRZLENBQXphOztBQUEyYSxTQUFTUixTQUFULEdBQW9CO0FBQUMsTUFBRyxDQUFDUixlQUFlLENBQUMxTSxNQUFwQixFQUEyQjtBQUFDLFVBQU15TixPQUFPLEdBQUMsZ0NBQThCLHFFQUE1QztBQUFrSCxVQUFNLElBQUk1TCxLQUFKLENBQVU0TCxPQUFWLENBQU47QUFBMEI7O0FBQUEsU0FBT2YsZUFBZSxDQUFDMU0sTUFBdkI7QUFBK0IsQyxDQUFBOzs7QUFDdnVCLElBQUlxRixRQUFRLEdBQUNxSCxlQUFiLEMsQ0FBNkI7O0FBQzdCak4sZUFBQSxHQUFnQjRGLFFBQWhCOztBQUF5QixTQUFTcEMsU0FBVCxHQUFvQjtBQUFDLFNBQU92RCxNQUFNLENBQUNrRCxPQUFQLENBQWUrSyxVQUFmLENBQTBCbkIsY0FBYyxDQUFDb0IsYUFBekMsQ0FBUDtBQUFnRSxDLENBQUE7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsWUFBWSxHQUFDLENBQUMsR0FBR2pNLElBQUosS0FBVztBQUFDOEssaUJBQWUsQ0FBQzFNLE1BQWhCLEdBQXVCLElBQUlKLFFBQVEsQ0FBQ2dELE9BQWIsQ0FBcUIsR0FBR2hCLElBQXhCLENBQXZCO0FBQXFEOEssaUJBQWUsQ0FBQ0MsY0FBaEIsQ0FBK0J0SyxPQUEvQixDQUF1Q3lELEVBQUUsSUFBRUEsRUFBRSxFQUE3QztBQUFpRDRHLGlCQUFlLENBQUNDLGNBQWhCLEdBQStCLEVBQS9CO0FBQWtDLFNBQU9ELGVBQWUsQ0FBQzFNLE1BQXZCO0FBQStCLENBQXRNLEMsQ0FBdU07OztBQUN2TVAsb0JBQUEsR0FBcUJvTyxZQUFyQjs7QUFBa0MsU0FBU3ZCLHdCQUFULENBQWtDdE0sTUFBbEMsRUFBeUM7QUFBQyxRQUFNTCxPQUFPLEdBQUNLLE1BQWQ7QUFBcUIsUUFBTThOLFFBQVEsR0FBQyxFQUFmOztBQUFrQixPQUFJLE1BQU1DLFFBQVYsSUFBc0JsQixpQkFBdEIsRUFBd0M7QUFBQyxRQUFHLE9BQU9sTixPQUFPLENBQUNvTyxRQUFELENBQWQsS0FBMkIsUUFBOUIsRUFBdUM7QUFBQ0QsY0FBUSxDQUFDQyxRQUFELENBQVIsR0FBbUI1TCxNQUFNLENBQUMySixNQUFQLENBQWNrQyxLQUFLLENBQUNDLE9BQU4sQ0FBY3RPLE9BQU8sQ0FBQ29PLFFBQUQsQ0FBckIsSUFBaUMsRUFBakMsR0FBb0MsRUFBbEQsRUFBcURwTyxPQUFPLENBQUNvTyxRQUFELENBQTVELENBQW5CLENBQUQsQ0FBNEY7O0FBQy9SO0FBQVU7O0FBQUFELFlBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQW1CcE8sT0FBTyxDQUFDb08sUUFBRCxDQUExQjtBQUFzQyxHQUQyQixDQUMzQjs7O0FBQ2hERCxVQUFRLENBQUNkLE1BQVQsR0FBZ0JwTixRQUFRLENBQUNnRCxPQUFULENBQWlCb0ssTUFBakM7QUFBd0NELGtCQUFnQixDQUFDMUssT0FBakIsQ0FBeUI0SyxLQUFLLElBQUU7QUFBQ2EsWUFBUSxDQUFDYixLQUFELENBQVIsR0FBZ0IsQ0FBQyxHQUFHckwsSUFBSixLQUFXO0FBQUMsYUFBT2pDLE9BQU8sQ0FBQ3NOLEtBQUQsQ0FBUCxDQUFlLEdBQUdyTCxJQUFsQixDQUFQO0FBQWdDLEtBQTVEO0FBQThELEdBQS9GO0FBQWlHLFNBQU9rTSxRQUFQO0FBQWlCLEM7Ozs7Ozs7Ozs7O0FDbkI3STs7QUFBQXJPLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSx1QkFBQSxHQUF3QnNFLGVBQXhCOztBQUF3QyxJQUFJckUsTUFBTSxHQUFDRixtQkFBTyxDQUFDLG9CQUFELENBQWxCOztBQUE0QixJQUFJcUgsb0JBQW9CLEdBQUNySCxtQkFBTyxDQUFDLHlGQUFELENBQWhDOztBQUE0RCxNQUFNME8sdUJBQXVCLEdBQUMsT0FBT0Msb0JBQVAsS0FBOEIsV0FBNUQ7O0FBQXdFLFNBQVNwSyxlQUFULENBQXlCO0FBQUNDLFlBQUQ7QUFBWW9LO0FBQVosQ0FBekIsRUFBK0M7QUFBQyxRQUFNQyxVQUFVLEdBQUNELFFBQVEsSUFBRSxDQUFDRix1QkFBNUI7QUFBb0QsUUFBTUksU0FBUyxHQUFDLENBQUMsR0FBRTVPLE1BQU0sQ0FBQ21ELE1BQVYsR0FBaEI7QUFBb0MsUUFBSyxDQUFDMEwsT0FBRCxFQUFTQyxVQUFULElBQXFCLENBQUMsR0FBRTlPLE1BQU0sQ0FBQ3pDLFFBQVYsRUFBb0IsS0FBcEIsQ0FBMUI7QUFBcUQsUUFBTWdILE1BQU0sR0FBQyxDQUFDLEdBQUV2RSxNQUFNLENBQUN3RSxXQUFWLEVBQXVCQyxFQUFFLElBQUU7QUFBQyxRQUFHbUssU0FBUyxDQUFDeEwsT0FBYixFQUFxQjtBQUFDd0wsZUFBUyxDQUFDeEwsT0FBVjtBQUFvQndMLGVBQVMsQ0FBQ3hMLE9BQVYsR0FBa0IyTCxTQUFsQjtBQUE2Qjs7QUFBQSxRQUFHSixVQUFVLElBQUVFLE9BQWYsRUFBdUI7O0FBQU8sUUFBR3BLLEVBQUUsSUFBRUEsRUFBRSxDQUFDdUssT0FBVixFQUFrQjtBQUFDSixlQUFTLENBQUN4TCxPQUFWLEdBQWtCNkwsT0FBTyxDQUFDeEssRUFBRCxFQUFJTCxTQUFTLElBQUVBLFNBQVMsSUFBRTBLLFVBQVUsQ0FBQzFLLFNBQUQsQ0FBcEMsRUFBZ0Q7QUFBQ0U7QUFBRCxPQUFoRCxDQUF6QjtBQUF3RjtBQUFDLEdBQTdPLEVBQThPLENBQUNxSyxVQUFELEVBQVlySyxVQUFaLEVBQXVCdUssT0FBdkIsQ0FBOU8sQ0FBYjtBQUE0UixHQUFDLEdBQUU3TyxNQUFNLENBQUMwRSxTQUFWLEVBQXFCLE1BQUk7QUFBQyxRQUFHLENBQUM4Six1QkFBSixFQUE0QjtBQUFDLFVBQUcsQ0FBQ0ssT0FBSixFQUFZO0FBQUMsY0FBTUssWUFBWSxHQUFDLENBQUMsR0FBRS9ILG9CQUFvQixDQUFDakIsbUJBQXhCLEVBQTZDLE1BQUk0SSxVQUFVLENBQUMsSUFBRCxDQUEzRCxDQUFuQjtBQUFzRixlQUFNLE1BQUksQ0FBQyxHQUFFM0gsb0JBQW9CLENBQUNQLGtCQUF4QixFQUE0Q3NJLFlBQTVDLENBQVY7QUFBcUU7QUFBQztBQUFDLEdBQWpPLEVBQWtPLENBQUNMLE9BQUQsQ0FBbE87QUFBNk8sU0FBTSxDQUFDdEssTUFBRCxFQUFRc0ssT0FBUixDQUFOO0FBQXdCOztBQUFBLFNBQVNJLE9BQVQsQ0FBaUJFLE9BQWpCLEVBQXlCQyxRQUF6QixFQUFrQzNPLE9BQWxDLEVBQTBDO0FBQUMsUUFBSztBQUFDckQsTUFBRDtBQUFJaVMsWUFBSjtBQUFhQztBQUFiLE1BQXVCQyxjQUFjLENBQUM5TyxPQUFELENBQTFDO0FBQW9ENk8sVUFBUSxDQUFDdkgsR0FBVCxDQUFhb0gsT0FBYixFQUFxQkMsUUFBckI7QUFBK0JDLFVBQVEsQ0FBQ0osT0FBVCxDQUFpQkUsT0FBakI7QUFBMEIsU0FBTyxTQUFTUCxTQUFULEdBQW9CO0FBQUNVLFlBQVEsQ0FBQ0UsTUFBVCxDQUFnQkwsT0FBaEI7QUFBeUJFLFlBQVEsQ0FBQ1QsU0FBVCxDQUFtQk8sT0FBbkIsRUFBMUIsQ0FBc0Q7O0FBQ3ByQyxRQUFHRyxRQUFRLENBQUNHLElBQVQsS0FBZ0IsQ0FBbkIsRUFBcUI7QUFBQ0osY0FBUSxDQUFDSyxVQUFUO0FBQXNCQyxlQUFTLENBQUNILE1BQVYsQ0FBaUJwUyxFQUFqQjtBQUFzQjtBQUFDLEdBRGdpQztBQUM5aEM7O0FBQUEsTUFBTXVTLFNBQVMsR0FBQyxJQUFJN0UsR0FBSixFQUFoQjs7QUFBMEIsU0FBU3lFLGNBQVQsQ0FBd0I5TyxPQUF4QixFQUFnQztBQUFDLFFBQU1yRCxFQUFFLEdBQUNxRCxPQUFPLENBQUM2RCxVQUFSLElBQW9CLEVBQTdCO0FBQWdDLE1BQUk4SixRQUFRLEdBQUN1QixTQUFTLENBQUNsSSxHQUFWLENBQWNySyxFQUFkLENBQWI7O0FBQStCLE1BQUdnUixRQUFILEVBQVk7QUFBQyxXQUFPQSxRQUFQO0FBQWlCOztBQUFBLFFBQU1rQixRQUFRLEdBQUMsSUFBSXhFLEdBQUosRUFBZjtBQUF5QixRQUFNdUUsUUFBUSxHQUFDLElBQUlaLG9CQUFKLENBQXlCbUIsT0FBTyxJQUFFO0FBQUNBLFdBQU8sQ0FBQ2pOLE9BQVIsQ0FBZ0I2RSxLQUFLLElBQUU7QUFBQyxZQUFNNEgsUUFBUSxHQUFDRSxRQUFRLENBQUM3SCxHQUFULENBQWFELEtBQUssQ0FBQzlKLE1BQW5CLENBQWY7QUFBMEMsWUFBTTBHLFNBQVMsR0FBQ29ELEtBQUssQ0FBQ3FJLGNBQU4sSUFBc0JySSxLQUFLLENBQUNzSSxpQkFBTixHQUF3QixDQUE5RDs7QUFBZ0UsVUFBR1YsUUFBUSxJQUFFaEwsU0FBYixFQUF1QjtBQUFDZ0wsZ0JBQVEsQ0FBQ2hMLFNBQUQsQ0FBUjtBQUFxQjtBQUFDLEtBQWhMO0FBQW1MLEdBQXROLEVBQXVOM0QsT0FBdk4sQ0FBZjtBQUErT2tQLFdBQVMsQ0FBQzVILEdBQVYsQ0FBYzNLLEVBQWQsRUFBaUJnUixRQUFRLEdBQUM7QUFBQ2hSLE1BQUQ7QUFBSWlTLFlBQUo7QUFBYUM7QUFBYixHQUExQjtBQUFrRCxTQUFPbEIsUUFBUDtBQUFpQixDOzs7Ozs7Ozs7OztBQ0QzaEI7O0FBQUEsSUFBSXRILHNCQUFzQixHQUFDaEgsbUJBQU8sQ0FBQyxzSUFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCZ1EsVUFBaEI7O0FBQTJCLElBQUkvUCxNQUFNLEdBQUM4RyxzQkFBc0IsQ0FBQ2hILG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSUcsT0FBTyxHQUFDSCxtQkFBTyxDQUFDLDJEQUFELENBQW5COztBQUFnQyxTQUFTaVEsVUFBVCxDQUFvQkMsaUJBQXBCLEVBQXNDO0FBQUMsV0FBU0MsaUJBQVQsQ0FBMkJqTyxLQUEzQixFQUFpQztBQUFDLFdBQU0sYUFBYWhDLE1BQU0sQ0FBQ2tELE9BQVAsQ0FBZVcsYUFBZixDQUE2Qm1NLGlCQUE3QixFQUErQ3ZOLE1BQU0sQ0FBQzJKLE1BQVAsQ0FBYztBQUFDOUwsWUFBTSxFQUFDLENBQUMsR0FBRUwsT0FBTyxDQUFDc0QsU0FBWDtBQUFSLEtBQWQsRUFBK0N2QixLQUEvQyxDQUEvQyxDQUFuQjtBQUEwSDs7QUFBQWlPLG1CQUFpQixDQUFDQyxlQUFsQixHQUFrQ0YsaUJBQWlCLENBQUNFLGVBQXBELENBQW1FO0FBQW5FO0FBQ3phRCxtQkFBaUIsQ0FBQ0UsbUJBQWxCLEdBQXNDSCxpQkFBaUIsQ0FBQ0csbUJBQXhEOztBQUE0RSxZQUF1QztBQUFDLFVBQU1DLElBQUksR0FBQ0osaUJBQWlCLENBQUNLLFdBQWxCLElBQStCTCxpQkFBaUIsQ0FBQ0ksSUFBakQsSUFBdUQsU0FBbEU7QUFBNEVILHFCQUFpQixDQUFDSSxXQUFsQixHQUErQixjQUFhRCxJQUFLLEdBQWpEO0FBQXFEOztBQUFBLFNBQU9ILGlCQUFQO0FBQTBCLEM7Ozs7Ozs7Ozs7O0FDRG5ROztBQUFBbFEsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLDJCQUFBLEdBQTRCdVEsbUJBQTVCOztBQUFnRCxTQUFTQSxtQkFBVCxDQUE2QkMsUUFBN0IsRUFBc0NsTCxPQUF0QyxFQUE4QztBQUFDLE1BQUltTCxjQUFKLENBQUQsQ0FBb0I7O0FBQ3ZKLFFBQU1DLGFBQWEsR0FBQ0YsUUFBUSxDQUFDRyxLQUFULENBQWUsR0FBZixDQUFwQjtBQUF3QyxHQUFDckwsT0FBTyxJQUFFLEVBQVYsRUFBY3NMLElBQWQsQ0FBbUI3UCxNQUFNLElBQUU7QUFBQyxRQUFHMlAsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQkcsV0FBakIsT0FBaUM5UCxNQUFNLENBQUM4UCxXQUFQLEVBQXBDLEVBQXlEO0FBQUNKLG9CQUFjLEdBQUMxUCxNQUFmO0FBQXNCMlAsbUJBQWEsQ0FBQ0ksTUFBZCxDQUFxQixDQUFyQixFQUF1QixDQUF2QjtBQUEwQk4sY0FBUSxHQUFDRSxhQUFhLENBQUNLLElBQWQsQ0FBbUIsR0FBbkIsS0FBeUIsR0FBbEM7QUFBc0MsYUFBTyxJQUFQO0FBQWE7O0FBQUEsV0FBTyxLQUFQO0FBQWMsR0FBdk07QUFBeU0sU0FBTTtBQUFDUCxZQUFEO0FBQVVDO0FBQVYsR0FBTjtBQUFpQyxDOzs7Ozs7Ozs7OztBQ0RyUTs7QUFBQXpRLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCZ1IsSUFBaEI7QUFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUc7QUFDSDtBQUNBOztBQUNBLFNBQVNBLElBQVQsR0FBZTtBQUFDLFFBQU0vRSxHQUFHLEdBQUN2SixNQUFNLENBQUN1TyxNQUFQLENBQWMsSUFBZCxDQUFWO0FBQThCLFNBQU07QUFBQ3ZELE1BQUUsQ0FBQ3ZRLElBQUQsRUFBTStULE9BQU4sRUFBYztBQUFDO0FBQUMsT0FBQ2pGLEdBQUcsQ0FBQzlPLElBQUQsQ0FBSCxLQUFZOE8sR0FBRyxDQUFDOU8sSUFBRCxDQUFILEdBQVUsRUFBdEIsQ0FBRCxFQUE0QmdVLElBQTVCLENBQWlDRCxPQUFqQztBQUEyQyxLQUE5RDs7QUFBK0RFLE9BQUcsQ0FBQ2pVLElBQUQsRUFBTStULE9BQU4sRUFBYztBQUFDLFVBQUdqRixHQUFHLENBQUM5TyxJQUFELENBQU4sRUFBYTtBQUFDOE8sV0FBRyxDQUFDOU8sSUFBRCxDQUFILENBQVUyVCxNQUFWLENBQWlCN0UsR0FBRyxDQUFDOU8sSUFBRCxDQUFILENBQVU0RSxPQUFWLENBQWtCbVAsT0FBbEIsTUFBNkIsQ0FBOUMsRUFBZ0QsQ0FBaEQ7QUFBb0Q7QUFBQyxLQUFwSjs7QUFBcUpHLFFBQUksQ0FBQ2xVLElBQUQsRUFBTSxHQUFHbVUsSUFBVCxFQUFjO0FBQUM7QUFDNU47QUFBQyxPQUFDckYsR0FBRyxDQUFDOU8sSUFBRCxDQUFILElBQVcsRUFBWixFQUFnQjZJLEtBQWhCLEdBQXdCdUIsR0FBeEIsQ0FBNEIySixPQUFPLElBQUU7QUFBQ0EsZUFBTyxDQUFDLEdBQUdJLElBQUosQ0FBUDtBQUFrQixPQUF4RDtBQUEyRDs7QUFEUixHQUFOO0FBQ2lCLEM7Ozs7Ozs7Ozs7O0FDZGxEOztBQUFBdFIsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLHVCQUFBLEdBQXdCcUYsZUFBeEI7QUFBd0NyRixpQkFBQSxHQUFrQnlGLFNBQWxCO0FBQTRCekYsaUJBQUEsR0FBa0J1UixTQUFsQjtBQUE0QnZSLG1CQUFBLEdBQW9Cd1IsV0FBcEI7QUFBZ0N4UixtQkFBQSxHQUFvQndGLFdBQXBCO0FBQWdDeEYsbUJBQUEsR0FBb0J5UixXQUFwQjtBQUFnQ3pSLGtCQUFBLEdBQW1CVyxVQUFuQjtBQUE4QlgscUJBQUEsR0FBc0IwUixhQUF0QjtBQUFvQzFSLG1CQUFBLEdBQW9CNEQsV0FBcEI7QUFBZ0M1RCxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUkyUix1QkFBdUIsR0FBQzVSLG1CQUFPLENBQUMsNkdBQUQsQ0FBbkM7O0FBQWdGLElBQUk2UixZQUFZLEdBQUM3UixtQkFBTyxDQUFDLHFGQUFELENBQXhCOztBQUF5RCxJQUFJOFIsb0JBQW9CLEdBQUM5UixtQkFBTyxDQUFDLGdIQUFELENBQWhDOztBQUF1RSxJQUFJK1Isb0JBQW9CLEdBQUMvUixtQkFBTyxDQUFDLDZHQUFELENBQWhDOztBQUFrRSxJQUFJZ1MsS0FBSyxHQUFDaEwsc0JBQXNCLENBQUNoSCxtQkFBTyxDQUFDLGlFQUFELENBQVIsQ0FBaEM7O0FBQXFELElBQUlpUyxNQUFNLEdBQUNqUyxtQkFBTyxDQUFDLG1FQUFELENBQWxCOztBQUErQixJQUFJa1MsVUFBVSxHQUFDbFMsbUJBQU8sQ0FBQywrRkFBRCxDQUF0Qjs7QUFBNkMsSUFBSW1TLGlCQUFpQixHQUFDblMsbUJBQU8sQ0FBQywrR0FBRCxDQUE3Qjs7QUFBNEQsSUFBSW9TLFlBQVksR0FBQ3BTLG1CQUFPLENBQUMsaUdBQUQsQ0FBeEI7O0FBQWdELElBQUlxUyxnQkFBZ0IsR0FBQ3JMLHNCQUFzQixDQUFDaEgsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFSLENBQTNDOztBQUFpRixJQUFJc1MsYUFBYSxHQUFDdFMsbUJBQU8sQ0FBQyxxR0FBRCxDQUF6Qjs7QUFBbUQsSUFBSXVTLFdBQVcsR0FBQ3ZTLG1CQUFPLENBQUMsaUdBQUQsQ0FBdkI7O0FBQStDLFNBQVNnSCxzQkFBVCxDQUFnQ3dMLEdBQWhDLEVBQW9DO0FBQUMsU0FBT0EsR0FBRyxJQUFFQSxHQUFHLENBQUNDLFVBQVQsR0FBb0JELEdBQXBCLEdBQXdCO0FBQUNwUCxXQUFPLEVBQUNvUDtBQUFULEdBQS9CO0FBQThDLEMsQ0FBQTs7O0FBQ25tQyxJQUFJRSxrQkFBSjs7QUFBdUIsSUFBR3ZNLEtBQUgsRUFBbUMsRUFBZ0Y7O0FBQUEsTUFBTXdNLFFBQVEsR0FBQ3hNLE1BQUEsSUFBb0MsRUFBbkQ7O0FBQXNELFNBQVN5TSxzQkFBVCxHQUFpQztBQUFDLFNBQU9qUSxNQUFNLENBQUMySixNQUFQLENBQWMsSUFBSWpLLEtBQUosQ0FBVSxpQkFBVixDQUFkLEVBQTJDO0FBQUMwSCxhQUFTLEVBQUM7QUFBWCxHQUEzQyxDQUFQO0FBQXFFOztBQUFBLFNBQVM4SSxhQUFULENBQXVCOU0sSUFBdkIsRUFBNEIrTSxNQUE1QixFQUFtQztBQUFDLFNBQU9BLE1BQU0sSUFBRS9NLElBQUksQ0FBQ2dOLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBUixHQUE2QmhOLElBQUksS0FBRyxHQUFQLEdBQVcsQ0FBQyxHQUFFNkwsdUJBQXVCLENBQUMxTCwwQkFBM0IsRUFBdUQ0TSxNQUF2RCxDQUFYLEdBQTJFLEdBQUVBLE1BQU8sR0FBRUUsZUFBZSxDQUFDak4sSUFBRCxDQUFmLEtBQXdCLEdBQXhCLEdBQTRCQSxJQUFJLENBQUNnSSxTQUFMLENBQWUsQ0FBZixDQUE1QixHQUE4Q2hJLElBQUssRUFBdEssR0FBd0tBLElBQS9LO0FBQXFMOztBQUFBLFNBQVNULGVBQVQsQ0FBeUJTLElBQXpCLEVBQThCL0UsTUFBOUIsRUFBcUN1RSxPQUFyQyxFQUE2Q0MsYUFBN0MsRUFBMkQ7QUFBQyxNQUFHVyxLQUFILEVBQW1DLEVBQXVWOztBQUFBLFNBQU8sS0FBUDtBQUFjOztBQUFBLFNBQVNULFNBQVQsQ0FBbUJLLElBQW5CLEVBQXdCL0UsTUFBeEIsRUFBK0IyRSxhQUEvQixFQUE2QztBQUFDLE1BQUdRLEtBQUgsRUFBbUMsRUFBZ1I7O0FBQUEsU0FBT0osSUFBUDtBQUFhOztBQUFBLFNBQVN5TCxTQUFULENBQW1CekwsSUFBbkIsRUFBd0IvRSxNQUF4QixFQUErQjtBQUFDLE1BQUdtRixLQUFILEVBQW1DLEVBQWtTOztBQUFBLFNBQU9KLElBQVA7QUFBYTs7QUFBQSxTQUFTaU4sZUFBVCxDQUF5QmpOLElBQXpCLEVBQThCO0FBQUMsUUFBTWtOLFVBQVUsR0FBQ2xOLElBQUksQ0FBQy9ELE9BQUwsQ0FBYSxHQUFiLENBQWpCO0FBQW1DLFFBQU1rUixTQUFTLEdBQUNuTixJQUFJLENBQUMvRCxPQUFMLENBQWEsR0FBYixDQUFoQjs7QUFBa0MsTUFBR2lSLFVBQVUsR0FBQyxDQUFDLENBQVosSUFBZUMsU0FBUyxHQUFDLENBQUMsQ0FBN0IsRUFBK0I7QUFBQ25OLFFBQUksR0FBQ0EsSUFBSSxDQUFDZ0ksU0FBTCxDQUFlLENBQWYsRUFBaUJrRixVQUFVLEdBQUMsQ0FBQyxDQUFaLEdBQWNBLFVBQWQsR0FBeUJDLFNBQTFDLENBQUw7QUFBMkQ7O0FBQUEsU0FBT25OLElBQVA7QUFBYTs7QUFBQSxTQUFTMEwsV0FBVCxDQUFxQjFMLElBQXJCLEVBQTBCO0FBQUNBLE1BQUksR0FBQ2lOLGVBQWUsQ0FBQ2pOLElBQUQsQ0FBcEI7QUFBMkIsU0FBT0EsSUFBSSxLQUFHNE0sUUFBUCxJQUFpQjVNLElBQUksQ0FBQ2dOLFVBQUwsQ0FBZ0JKLFFBQVEsR0FBQyxHQUF6QixDQUF4QjtBQUF1RDs7QUFBQSxTQUFTbE4sV0FBVCxDQUFxQk0sSUFBckIsRUFBMEI7QUFBQztBQUN4L0QsU0FBTzhNLGFBQWEsQ0FBQzlNLElBQUQsRUFBTTRNLFFBQU4sQ0FBcEI7QUFBcUM7O0FBQUEsU0FBU2pCLFdBQVQsQ0FBcUIzTCxJQUFyQixFQUEwQjtBQUFDQSxNQUFJLEdBQUNBLElBQUksQ0FBQ0UsS0FBTCxDQUFXME0sUUFBUSxDQUFDUSxNQUFwQixDQUFMO0FBQWlDLE1BQUcsQ0FBQ3BOLElBQUksQ0FBQ2dOLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBSixFQUF5QmhOLElBQUksR0FBRSxJQUFHQSxJQUFLLEVBQWQ7QUFBZ0IsU0FBT0EsSUFBUDtBQUFhO0FBQUE7QUFDdko7QUFDQTs7O0FBQUcsU0FBU25GLFVBQVQsQ0FBb0J3UyxHQUFwQixFQUF3QjtBQUFDO0FBQzVCLE1BQUdBLEdBQUcsQ0FBQ0wsVUFBSixDQUFlLEdBQWYsS0FBcUJLLEdBQUcsQ0FBQ0wsVUFBSixDQUFlLEdBQWYsQ0FBckIsSUFBMENLLEdBQUcsQ0FBQ0wsVUFBSixDQUFlLEdBQWYsQ0FBN0MsRUFBaUUsT0FBTyxJQUFQOztBQUFZLE1BQUc7QUFBQztBQUNqRixVQUFNTSxjQUFjLEdBQUMsQ0FBQyxHQUFFcEIsTUFBTSxDQUFDcUIsaUJBQVYsR0FBckI7QUFBb0QsVUFBTUMsUUFBUSxHQUFDLElBQUlDLEdBQUosQ0FBUUosR0FBUixFQUFZQyxjQUFaLENBQWY7QUFBMkMsV0FBT0UsUUFBUSxDQUFDRSxNQUFULEtBQWtCSixjQUFsQixJQUFrQzVCLFdBQVcsQ0FBQzhCLFFBQVEsQ0FBQzlDLFFBQVYsQ0FBcEQ7QUFBeUUsR0FEM0YsQ0FDMkYsT0FBTTNOLENBQU4sRUFBUTtBQUFDLFdBQU8sS0FBUDtBQUFjO0FBQUM7O0FBQUEsU0FBUzZPLGFBQVQsQ0FBdUJySCxLQUF2QixFQUE2Qm9KLFVBQTdCLEVBQXdDQyxLQUF4QyxFQUE4QztBQUFDLE1BQUlDLGlCQUFpQixHQUFDLEVBQXRCO0FBQXlCLFFBQU1DLFlBQVksR0FBQyxDQUFDLEdBQUV0QixXQUFXLENBQUN1QixhQUFmLEVBQThCeEosS0FBOUIsQ0FBbkI7QUFBd0QsUUFBTXlKLGFBQWEsR0FBQ0YsWUFBWSxDQUFDRyxNQUFqQztBQUF3QyxRQUFNQyxjQUFjLEdBQUM7QUFDN1gsR0FBQ1AsVUFBVSxLQUFHcEosS0FBYixHQUFtQixDQUFDLEdBQUVnSSxhQUFhLENBQUM0QixlQUFqQixFQUFrQ0wsWUFBbEMsRUFBZ0RILFVBQWhELENBQW5CLEdBQStFLEVBQWhGLEtBQXFGO0FBQ3JGO0FBQ0FDLE9BSHdXO0FBR2xXQyxtQkFBaUIsR0FBQ3RKLEtBQWxCO0FBQXdCLFFBQU02SixNQUFNLEdBQUN4UixNQUFNLENBQUNDLElBQVAsQ0FBWW1SLGFBQVosQ0FBYjs7QUFBd0MsTUFBRyxDQUFDSSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsS0FBSyxJQUFFO0FBQUMsUUFBSTlXLEtBQUssR0FBQzBXLGNBQWMsQ0FBQ0ksS0FBRCxDQUFkLElBQXVCLEVBQWpDO0FBQW9DLFVBQUs7QUFBQ0MsWUFBRDtBQUFRQztBQUFSLFFBQWtCUixhQUFhLENBQUNNLEtBQUQsQ0FBcEMsQ0FBckMsQ0FBaUY7QUFDL0s7O0FBQ0EsUUFBSUcsUUFBUSxHQUFFLElBQUdGLE1BQU0sR0FBQyxLQUFELEdBQU8sRUFBRyxHQUFFRCxLQUFNLEdBQXpDOztBQUE0QyxRQUFHRSxRQUFILEVBQVk7QUFBQ0MsY0FBUSxHQUFFLEdBQUUsQ0FBQ2pYLEtBQUQsR0FBTyxHQUFQLEdBQVcsRUFBRyxJQUFHaVgsUUFBUyxHQUF0QztBQUEwQzs7QUFBQSxRQUFHRixNQUFNLElBQUUsQ0FBQzlGLEtBQUssQ0FBQ0MsT0FBTixDQUFjbFIsS0FBZCxDQUFaLEVBQWlDQSxLQUFLLEdBQUMsQ0FBQ0EsS0FBRCxDQUFOO0FBQWMsV0FBTSxDQUFDZ1gsUUFBUSxJQUFFRixLQUFLLElBQUlKLGNBQXBCLE9BQXNDO0FBQzlMTCxxQkFBaUIsR0FBQ0EsaUJBQWlCLENBQUNqUyxPQUFsQixDQUEwQjZTLFFBQTFCLEVBQW1DRixNQUFNLEdBQUMvVyxLQUFLLENBQUNpSyxHQUFOLEVBQVU7QUFDdEU7QUFDQTtBQUNBO0FBQ0FpTixXQUFPLElBQUVDLGtCQUFrQixDQUFDRCxPQUFELENBSmlDLEVBSXRCekQsSUFKc0IsQ0FJakIsR0FKaUIsQ0FBRCxHQUlYMEQsa0JBQWtCLENBQUNuWCxLQUFELENBSmhELEtBSTBELEdBTDRFLENBQU47QUFLaEUsR0FQUixDQUFKLEVBT2M7QUFBQ3FXLHFCQUFpQixHQUFDLEVBQWxCLENBQUQsQ0FBc0I7QUFDMUc7QUFDQTtBQUNDOztBQUFBLFNBQU07QUFBQ08sVUFBRDtBQUFRN1UsVUFBTSxFQUFDc1U7QUFBZixHQUFOO0FBQXlDOztBQUFBLFNBQVNlLGtCQUFULENBQTRCaEIsS0FBNUIsRUFBa0NRLE1BQWxDLEVBQXlDO0FBQUMsUUFBTVMsYUFBYSxHQUFDLEVBQXBCO0FBQXVCalMsUUFBTSxDQUFDQyxJQUFQLENBQVkrUSxLQUFaLEVBQW1COVEsT0FBbkIsQ0FBMkJQLEdBQUcsSUFBRTtBQUFDLFFBQUcsQ0FBQzZSLE1BQU0sQ0FBQ1UsUUFBUCxDQUFnQnZTLEdBQWhCLENBQUosRUFBeUI7QUFBQ3NTLG1CQUFhLENBQUN0UyxHQUFELENBQWIsR0FBbUJxUixLQUFLLENBQUNyUixHQUFELENBQXhCO0FBQStCO0FBQUMsR0FBM0Y7QUFBNkYsU0FBT3NTLGFBQVA7QUFBc0I7QUFBQTtBQUM5TjtBQUNBO0FBQ0E7OztBQUFHLFNBQVMvUSxXQUFULENBQXFCckQsTUFBckIsRUFBNEJDLElBQTVCLEVBQWlDcVUsU0FBakMsRUFBMkM7QUFBQztBQUMvQyxNQUFJQyxJQUFKO0FBQVMsUUFBTUMsV0FBVyxHQUFDLE9BQU92VSxJQUFQLEtBQWMsUUFBZCxHQUF1QkEsSUFBdkIsR0FBNEIsQ0FBQyxHQUFFd1IsTUFBTSxDQUFDZ0Qsb0JBQVYsRUFBZ0N4VSxJQUFoQyxDQUE5Qzs7QUFBb0YsTUFBRztBQUFDc1UsUUFBSSxHQUFDLElBQUl2QixHQUFKLENBQVF3QixXQUFXLENBQUNqQyxVQUFaLENBQXVCLEdBQXZCLElBQTRCdlMsTUFBTSxDQUFDMFUsTUFBbkMsR0FBMEMxVSxNQUFNLENBQUNpUSxRQUF6RCxFQUFrRSxVQUFsRSxDQUFMO0FBQW9GLEdBQXhGLENBQXdGLE9BQU0zTixDQUFOLEVBQVE7QUFBQztBQUM5TGlTLFFBQUksR0FBQyxJQUFJdkIsR0FBSixDQUFRLEdBQVIsRUFBWSxVQUFaLENBQUw7QUFBOEIsR0FGZ0IsQ0FFaEI7OztBQUM5QixNQUFHLENBQUM1UyxVQUFVLENBQUNvVSxXQUFELENBQWQsRUFBNEI7QUFBQyxXQUFPRixTQUFTLEdBQUMsQ0FBQ0UsV0FBRCxDQUFELEdBQWVBLFdBQS9CO0FBQTRDOztBQUFBLE1BQUc7QUFBQyxVQUFNRyxRQUFRLEdBQUMsSUFBSTNCLEdBQUosQ0FBUXdCLFdBQVIsRUFBb0JELElBQXBCLENBQWY7QUFBeUNJLFlBQVEsQ0FBQzFFLFFBQVQsR0FBa0IsQ0FBQyxHQUFFbUIsdUJBQXVCLENBQUMxTCwwQkFBM0IsRUFBdURpUCxRQUFRLENBQUMxRSxRQUFoRSxDQUFsQjtBQUE0RixRQUFJMkUsY0FBYyxHQUFDLEVBQW5COztBQUFzQixRQUFHLENBQUMsR0FBRWxELFVBQVUsQ0FBQ21ELGNBQWQsRUFBOEJGLFFBQVEsQ0FBQzFFLFFBQXZDLEtBQWtEMEUsUUFBUSxDQUFDRyxZQUEzRCxJQUF5RVIsU0FBNUUsRUFBc0Y7QUFBQyxZQUFNbkIsS0FBSyxHQUFDLENBQUMsR0FBRXZCLFlBQVksQ0FBQ21ELHNCQUFoQixFQUF3Q0osUUFBUSxDQUFDRyxZQUFqRCxDQUFaO0FBQTJFLFlBQUs7QUFBQ2hXLGNBQUQ7QUFBUTZVO0FBQVIsVUFBZ0J4QyxhQUFhLENBQUN3RCxRQUFRLENBQUMxRSxRQUFWLEVBQW1CMEUsUUFBUSxDQUFDMUUsUUFBNUIsRUFBcUNrRCxLQUFyQyxDQUFsQzs7QUFBOEUsVUFBR3JVLE1BQUgsRUFBVTtBQUFDOFYsc0JBQWMsR0FBQyxDQUFDLEdBQUVuRCxNQUFNLENBQUNnRCxvQkFBVixFQUFnQztBQUFDeEUsa0JBQVEsRUFBQ25SLE1BQVY7QUFBaUJrVyxjQUFJLEVBQUNMLFFBQVEsQ0FBQ0ssSUFBL0I7QUFBb0M3QixlQUFLLEVBQUNnQixrQkFBa0IsQ0FBQ2hCLEtBQUQsRUFBT1EsTUFBUDtBQUE1RCxTQUFoQyxDQUFmO0FBQTZIO0FBQUMsS0FBcmhCLENBQXFoQjs7O0FBQ2ptQixVQUFNeFEsWUFBWSxHQUFDd1IsUUFBUSxDQUFDMUIsTUFBVCxLQUFrQnNCLElBQUksQ0FBQ3RCLE1BQXZCLEdBQThCMEIsUUFBUSxDQUFDMVUsSUFBVCxDQUFjd0YsS0FBZCxDQUFvQmtQLFFBQVEsQ0FBQzFCLE1BQVQsQ0FBZ0JOLE1BQXBDLENBQTlCLEdBQTBFZ0MsUUFBUSxDQUFDMVUsSUFBdEc7QUFBMkcsV0FBT3FVLFNBQVMsR0FBQyxDQUFDblIsWUFBRCxFQUFjeVIsY0FBYyxJQUFFelIsWUFBOUIsQ0FBRCxHQUE2Q0EsWUFBN0Q7QUFBMkUsR0FEN0csQ0FDNkcsT0FBTWIsQ0FBTixFQUFRO0FBQUMsV0FBT2dTLFNBQVMsR0FBQyxDQUFDRSxXQUFELENBQUQsR0FBZUEsV0FBL0I7QUFBNEM7QUFBQzs7QUFBQSxTQUFTUyxXQUFULENBQXFCckMsR0FBckIsRUFBeUI7QUFBQyxRQUFNSyxNQUFNLEdBQUMsQ0FBQyxHQUFFeEIsTUFBTSxDQUFDcUIsaUJBQVYsR0FBYjtBQUE0QyxTQUFPRixHQUFHLENBQUNMLFVBQUosQ0FBZVUsTUFBZixJQUF1QkwsR0FBRyxDQUFDckYsU0FBSixDQUFjMEYsTUFBTSxDQUFDTixNQUFyQixDQUF2QixHQUFvREMsR0FBM0Q7QUFBZ0U7O0FBQUEsU0FBU3NDLFlBQVQsQ0FBc0JsVixNQUF0QixFQUE2QjRTLEdBQTdCLEVBQWlDMVMsRUFBakMsRUFBb0M7QUFBQztBQUN2WjtBQUNBLE1BQUcsQ0FBQ2lELFlBQUQsRUFBY0MsVUFBZCxJQUEwQkMsV0FBVyxDQUFDckQsTUFBRCxFQUFRNFMsR0FBUixFQUFZLElBQVosQ0FBeEM7QUFBMEQsUUFBTUssTUFBTSxHQUFDLENBQUMsR0FBRXhCLE1BQU0sQ0FBQ3FCLGlCQUFWLEdBQWI7QUFBNEMsUUFBTXFDLGFBQWEsR0FBQ2hTLFlBQVksQ0FBQ29QLFVBQWIsQ0FBd0JVLE1BQXhCLENBQXBCO0FBQW9ELFFBQU1tQyxXQUFXLEdBQUNoUyxVQUFVLElBQUVBLFVBQVUsQ0FBQ21QLFVBQVgsQ0FBc0JVLE1BQXRCLENBQTlCO0FBQTREOVAsY0FBWSxHQUFDOFIsV0FBVyxDQUFDOVIsWUFBRCxDQUF4QjtBQUF1Q0MsWUFBVSxHQUFDQSxVQUFVLEdBQUM2UixXQUFXLENBQUM3UixVQUFELENBQVosR0FBeUJBLFVBQTlDO0FBQXlELFFBQU1pUyxXQUFXLEdBQUNGLGFBQWEsR0FBQ2hTLFlBQUQsR0FBYzhCLFdBQVcsQ0FBQzlCLFlBQUQsQ0FBeEQ7QUFBdUUsUUFBTW1TLFVBQVUsR0FBQ3BWLEVBQUUsR0FBQytVLFdBQVcsQ0FBQzVSLFdBQVcsQ0FBQ3JELE1BQUQsRUFBUUUsRUFBUixDQUFaLENBQVosR0FBcUNrRCxVQUFVLElBQUVELFlBQXBFO0FBQWlGLFNBQU07QUFBQ3lQLE9BQUcsRUFBQ3lDLFdBQUw7QUFBaUJuVixNQUFFLEVBQUNrVixXQUFXLEdBQUNFLFVBQUQsR0FBWXJRLFdBQVcsQ0FBQ3FRLFVBQUQ7QUFBdEQsR0FBTjtBQUEyRTs7QUFBQSxTQUFTQyxtQkFBVCxDQUE2QnRGLFFBQTdCLEVBQXNDdUYsS0FBdEMsRUFBNEM7QUFBQyxRQUFNQyxhQUFhLEdBQUMsQ0FBQyxHQUFFckUsdUJBQXVCLENBQUM5TCx1QkFBM0IsRUFBb0QsQ0FBQyxHQUFFZ00sb0JBQW9CLENBQUNvRSxtQkFBeEIsRUFBNkN6RixRQUE3QyxDQUFwRCxDQUFwQjs7QUFBZ0ksTUFBR3dGLGFBQWEsS0FBRyxNQUFoQixJQUF3QkEsYUFBYSxLQUFHLFNBQTNDLEVBQXFEO0FBQUMsV0FBT3hGLFFBQVA7QUFBaUIsR0FBeE0sQ0FBd007OztBQUM3d0IsTUFBRyxDQUFDdUYsS0FBSyxDQUFDbkIsUUFBTixDQUFlb0IsYUFBZixDQUFKLEVBQWtDO0FBQUM7QUFDbkNELFNBQUssQ0FBQ25GLElBQU4sQ0FBV3NGLElBQUksSUFBRTtBQUFDLFVBQUcsQ0FBQyxHQUFFakUsVUFBVSxDQUFDbUQsY0FBZCxFQUE4QmMsSUFBOUIsS0FBcUMsQ0FBQyxHQUFFNUQsV0FBVyxDQUFDdUIsYUFBZixFQUE4QnFDLElBQTlCLEVBQW9DQyxFQUFwQyxDQUF1Q3pKLElBQXZDLENBQTRDc0osYUFBNUMsQ0FBeEMsRUFBbUc7QUFBQ3hGLGdCQUFRLEdBQUMwRixJQUFUO0FBQWMsZUFBTyxJQUFQO0FBQWE7QUFBQyxLQUFsSjtBQUFxSjs7QUFBQSxTQUFNLENBQUMsR0FBRXZFLHVCQUF1QixDQUFDOUwsdUJBQTNCLEVBQW9EMkssUUFBcEQsQ0FBTjtBQUFxRTs7QUFBQSxNQUFNNEYsdUJBQXVCLEdBQUNsUSxNQUFBLElBQTBHLENBQXhJO0FBQ3RJLE1BQU1tUSxrQkFBa0IsR0FBQ2hOLE1BQU0sQ0FBQyxvQkFBRCxDQUEvQjs7QUFBc0QsU0FBU2lOLFVBQVQsQ0FBb0JuRCxHQUFwQixFQUF3Qm9ELFFBQXhCLEVBQWlDO0FBQUMsU0FBT2xMLEtBQUssQ0FBQzhILEdBQUQsRUFBSztBQUFDO0FBQzlMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FxRCxlQUFXLEVBQUM7QUFYaUwsR0FBTCxDQUFMLENBV3ZKdk8sSUFYdUosQ0FXbEpVLEdBQUcsSUFBRTtBQUFDLFFBQUcsQ0FBQ0EsR0FBRyxDQUFDMkMsRUFBUixFQUFXO0FBQUMsVUFBR2lMLFFBQVEsR0FBQyxDQUFULElBQVk1TixHQUFHLENBQUM4TixNQUFKLElBQVksR0FBM0IsRUFBK0I7QUFBQyxlQUFPSCxVQUFVLENBQUNuRCxHQUFELEVBQUtvRCxRQUFRLEdBQUMsQ0FBZCxDQUFqQjtBQUFtQzs7QUFBQSxVQUFHNU4sR0FBRyxDQUFDOE4sTUFBSixLQUFhLEdBQWhCLEVBQW9CO0FBQUMsZUFBTzlOLEdBQUcsQ0FBQytOLElBQUosR0FBV3pPLElBQVgsQ0FBZ0IwTyxJQUFJLElBQUU7QUFBQyxjQUFHQSxJQUFJLENBQUNDLFFBQVIsRUFBaUI7QUFBQyxtQkFBTTtBQUFDQSxzQkFBUSxFQUFDUDtBQUFWLGFBQU47QUFBcUM7O0FBQUEsZ0JBQU0sSUFBSWpVLEtBQUosQ0FBVyw2QkFBWCxDQUFOO0FBQWdELFNBQTlILENBQVA7QUFBd0k7O0FBQUEsWUFBTSxJQUFJQSxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUFnRDs7QUFBQSxXQUFPdUcsR0FBRyxDQUFDK04sSUFBSixFQUFQO0FBQW1CLEdBWG5LLENBQVA7QUFXNks7O0FBQUEsU0FBU0csYUFBVCxDQUF1QkMsUUFBdkIsRUFBZ0NDLGNBQWhDLEVBQStDO0FBQUMsU0FBT1QsVUFBVSxDQUFDUSxRQUFELEVBQVVDLGNBQWMsR0FBQyxDQUFELEdBQUcsQ0FBM0IsQ0FBVixDQUF3Q25XLEtBQXhDLENBQThDQyxHQUFHLElBQUU7QUFBQztBQUNwYztBQUNBO0FBQ0EsUUFBRyxDQUFDa1csY0FBSixFQUFtQjtBQUFDLE9BQUMsR0FBRW5GLFlBQVksQ0FBQzVLLGNBQWhCLEVBQWdDbkcsR0FBaEM7QUFBc0M7O0FBQUEsVUFBTUEsR0FBTjtBQUFXLEdBSDJVLENBQVA7QUFHalU7O0FBQUEsTUFBTW1XLE1BQU4sQ0FBWTtBQUFDO0FBQ3JGO0FBQ0E7QUFBTTtBQUNOO0FBQ0FDLGFBQVcsQ0FBQ0MsU0FBRCxFQUFXQyxNQUFYLEVBQWtCQyxHQUFsQixFQUFzQjtBQUFDQyxnQkFBRDtBQUFjQyxjQUFkO0FBQXlCQyxPQUF6QjtBQUE2QkMsV0FBN0I7QUFBcUNDLGFBQXJDO0FBQStDNVcsT0FBL0M7QUFBbUQ2VyxnQkFBbkQ7QUFBZ0VDLGNBQWhFO0FBQTJFNVcsVUFBM0U7QUFBa0Z1RSxXQUFsRjtBQUEwRkksaUJBQTFGO0FBQXdHSCxpQkFBeEc7QUFBc0hxUztBQUF0SCxHQUF0QixFQUF1SjtBQUFDLFNBQUt2TixLQUFMLEdBQVcsS0FBSyxDQUFoQjtBQUFrQixTQUFLbUcsUUFBTCxHQUFjLEtBQUssQ0FBbkI7QUFBcUIsU0FBS2tELEtBQUwsR0FBVyxLQUFLLENBQWhCO0FBQWtCLFNBQUt1QixNQUFMLEdBQVksS0FBSyxDQUFqQjtBQUFtQixTQUFLdkMsUUFBTCxHQUFjLEtBQUssQ0FBbkI7QUFBcUIsU0FBS21GLFVBQUwsR0FBZ0IsS0FBSyxDQUFyQjtBQUF1QixTQUFLQyxHQUFMLEdBQVMsRUFBVDtBQUFZLFNBQUtDLEdBQUwsR0FBUyxFQUFUO0FBQVksU0FBS0MsR0FBTCxHQUFTLEtBQUssQ0FBZDtBQUFnQixTQUFLQyxHQUFMLEdBQVMsS0FBSyxDQUFkO0FBQWdCLFNBQUtYLFVBQUwsR0FBZ0IsS0FBSyxDQUFyQjtBQUF1QixTQUFLWSxJQUFMLEdBQVUsS0FBSyxDQUFmO0FBQWlCLFNBQUszSyxNQUFMLEdBQVksS0FBSyxDQUFqQjtBQUFtQixTQUFLNEssUUFBTCxHQUFjLEtBQUssQ0FBbkI7QUFBcUIsU0FBS0MsS0FBTCxHQUFXLEtBQUssQ0FBaEI7QUFBa0IsU0FBS1QsVUFBTCxHQUFnQixLQUFLLENBQXJCO0FBQXVCLFNBQUtVLGNBQUwsR0FBb0IsS0FBSyxDQUF6QjtBQUEyQixTQUFLQyxRQUFMLEdBQWMsS0FBSyxDQUFuQjtBQUFxQixTQUFLdlgsTUFBTCxHQUFZLEtBQUssQ0FBakI7QUFBbUIsU0FBS3VFLE9BQUwsR0FBYSxLQUFLLENBQWxCO0FBQW9CLFNBQUtJLGFBQUwsR0FBbUIsS0FBSyxDQUF4QjtBQUEwQixTQUFLSCxhQUFMLEdBQW1CLEtBQUssQ0FBeEI7QUFBMEIsU0FBS2dULE9BQUwsR0FBYSxLQUFLLENBQWxCO0FBQW9CLFNBQUtYLFNBQUwsR0FBZSxLQUFLLENBQXBCO0FBQXNCLFNBQUt4UyxjQUFMLEdBQW9CLEtBQUssQ0FBekI7QUFBMkIsU0FBS29ULElBQUwsR0FBVSxDQUFWOztBQUFZLFNBQUtDLFVBQUwsR0FBZ0IvYSxDQUFDLElBQUU7QUFBQyxZQUFNZ2IsS0FBSyxHQUFDaGIsQ0FBQyxDQUFDZ2IsS0FBZDs7QUFBb0IsVUFBRyxDQUFDQSxLQUFKLEVBQVU7QUFBQztBQUMzdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQUs7QUFBQ2xJLGtCQUFEO0FBQVVrRDtBQUFWLFlBQWlCLElBQXRCO0FBQTJCLGFBQUtpRixXQUFMLENBQWlCLGNBQWpCLEVBQWdDLENBQUMsR0FBRTNHLE1BQU0sQ0FBQ2dELG9CQUFWLEVBQWdDO0FBQUN4RSxrQkFBUSxFQUFDaEwsV0FBVyxDQUFDZ0wsUUFBRCxDQUFyQjtBQUFnQ2tEO0FBQWhDLFNBQWhDLENBQWhDLEVBQXdHLENBQUMsR0FBRTFCLE1BQU0sQ0FBQzRHLE1BQVYsR0FBeEc7QUFBNkg7QUFBUTs7QUFBQSxVQUFHLENBQUNGLEtBQUssQ0FBQ0csR0FBVixFQUFjO0FBQUM7QUFBUTs7QUFBQSxVQUFJQyxZQUFKO0FBQWlCLFlBQUs7QUFBQzNGLFdBQUQ7QUFBSzFTLFVBQUw7QUFBUUMsZUFBUjtBQUFnQnFZO0FBQWhCLFVBQXFCTCxLQUExQjs7QUFBZ0MsVUFBR3hTLEtBQUgsRUFBeUMsRUFFako7O0FBQUEsV0FBS3NTLElBQUwsR0FBVU8sR0FBVjtBQUFjLFlBQUs7QUFBQ3ZJO0FBQUQsVUFBVyxDQUFDLEdBQUUwQixpQkFBaUIsQ0FBQzhHLGdCQUFyQixFQUF1QzdGLEdBQXZDLENBQWhCLENBWDZpQixDQVdqZjtBQUMxTTs7QUFDQSxVQUFHLEtBQUtpRixLQUFMLElBQVkzWCxFQUFFLEtBQUcsS0FBS3dVLE1BQXRCLElBQThCekUsUUFBUSxLQUFHLEtBQUtBLFFBQWpELEVBQTBEO0FBQUM7QUFBUSxPQWJ3bkIsQ0FheG5CO0FBQ25FOzs7QUFDQSxVQUFHLEtBQUswSCxJQUFMLElBQVcsQ0FBQyxLQUFLQSxJQUFMLENBQVVRLEtBQVYsQ0FBZixFQUFnQztBQUFDO0FBQVE7O0FBQUEsV0FBS08sTUFBTCxDQUFZLGNBQVosRUFBMkI5RixHQUEzQixFQUErQjFTLEVBQS9CLEVBQWtDaUMsTUFBTSxDQUFDMkosTUFBUCxDQUFjLEVBQWQsRUFBaUIzTCxPQUFqQixFQUF5QjtBQUFDaUIsZUFBTyxFQUFDakIsT0FBTyxDQUFDaUIsT0FBUixJQUFpQixLQUFLMlcsUUFBL0I7QUFBd0N2WCxjQUFNLEVBQUNMLE9BQU8sQ0FBQ0ssTUFBUixJQUFnQixLQUFLMkU7QUFBcEUsT0FBekIsQ0FBbEMsRUFBK0lvVCxZQUEvSTtBQUE4SixLQWZpZSxDQUF0Z0IsQ0Flc0M7OztBQUN4TSxTQUFLek8sS0FBTCxHQUFXLENBQUMsR0FBRXNILHVCQUF1QixDQUFDOUwsdUJBQTNCLEVBQW9EcVIsU0FBcEQsQ0FBWCxDQWhCa0ssQ0FnQnhGOztBQUMxRSxTQUFLVyxVQUFMLEdBQWdCLEVBQWhCLENBakJrSyxDQWlCL0k7QUFDbkI7QUFDQTs7QUFDQSxRQUFHWCxTQUFTLEtBQUcsU0FBZixFQUF5QjtBQUFDLFdBQUtXLFVBQUwsQ0FBZ0IsS0FBS3hOLEtBQXJCLElBQTRCO0FBQUNvTixpQkFBRDtBQUFXeUIsZUFBTyxFQUFDLElBQW5CO0FBQXdCalgsYUFBSyxFQUFDb1YsWUFBOUI7QUFBMkN4VyxXQUEzQztBQUErQ3NZLGVBQU8sRUFBQzlCLFlBQVksSUFBRUEsWUFBWSxDQUFDOEIsT0FBbEY7QUFBMEZDLGVBQU8sRUFBQy9CLFlBQVksSUFBRUEsWUFBWSxDQUFDK0I7QUFBN0gsT0FBNUI7QUFBbUs7O0FBQUEsU0FBS3ZCLFVBQUwsQ0FBZ0IsT0FBaEIsSUFBeUI7QUFBQ0osZUFBUyxFQUFDRixHQUFYO0FBQWV0TSxpQkFBVyxFQUFDO0FBQUM7QUFBRDtBQUEzQixLQUF6QixDQXBCM0IsQ0FvQm9JO0FBQ3RTOztBQUNBLFNBQUtzQyxNQUFMLEdBQVl5SixNQUFNLENBQUN6SixNQUFuQjtBQUEwQixTQUFLK0osVUFBTCxHQUFnQkEsVUFBaEI7QUFBMkIsU0FBSzlHLFFBQUwsR0FBYzBHLFNBQWQ7QUFBd0IsU0FBS3hELEtBQUwsR0FBV3lELE1BQVgsQ0F0QnFGLENBc0JuRTtBQUMvRjs7QUFDQSxVQUFNa0MsaUJBQWlCLEdBQUMsQ0FBQyxHQUFFcEgsVUFBVSxDQUFDbUQsY0FBZCxFQUE4QjhCLFNBQTlCLEtBQTBDOVEsSUFBSSxDQUFDa1QsYUFBTCxDQUFtQkMsVUFBckY7O0FBQWdHLFNBQUt0RSxNQUFMLEdBQVlvRSxpQkFBaUIsR0FBQ25DLFNBQUQsR0FBV0UsR0FBeEM7QUFBNEMsU0FBSzFFLFFBQUwsR0FBY0EsUUFBZDtBQUF1QixTQUFLc0YsR0FBTCxHQUFTTixZQUFUO0FBQXNCLFNBQUtPLEdBQUwsR0FBUyxJQUFUO0FBQWMsU0FBS0UsUUFBTCxHQUFjWCxPQUFkLENBeEJyQyxDQXdCMkQ7QUFDN047O0FBQ0EsU0FBS1ksS0FBTCxHQUFXLElBQVg7QUFBZ0IsU0FBS1QsVUFBTCxHQUFnQkEsVUFBaEI7QUFBMkIsU0FBS1ksT0FBTCxHQUFhLENBQUMsRUFBRW5TLElBQUksQ0FBQ2tULGFBQUwsQ0FBbUJFLElBQW5CLElBQXlCcFQsSUFBSSxDQUFDa1QsYUFBTCxDQUFtQkcsR0FBNUMsSUFBaUQsQ0FBQ0osaUJBQUQsSUFBb0IsQ0FBQ2pULElBQUksQ0FBQ3NULFFBQUwsQ0FBY0MsTUFBbkMsSUFBMkMsQ0FBQ3pULEtBQS9GLENBQWQ7QUFBOEksU0FBSzBSLFNBQUwsR0FBZSxDQUFDLENBQUNBLFNBQWpCO0FBQTJCLFNBQUt4UyxjQUFMLEdBQW9CLEtBQXBCOztBQUEwQixRQUFHYyxLQUFILEVBQW1DLEVBQTJMOztBQUFBLGVBQStCLEVBTXhYO0FBQUM7O0FBQUEwVCxRQUFNLEdBQUU7QUFBQ2xhLFVBQU0sQ0FBQ2dhLFFBQVAsQ0FBZ0JFLE1BQWhCO0FBQTBCO0FBQUE7QUFDdko7QUFDQTs7O0FBQUtDLE1BQUksR0FBRTtBQUFDbmEsVUFBTSxDQUFDb2EsT0FBUCxDQUFlRCxJQUFmO0FBQXVCO0FBQUE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUsxSSxNQUFJLENBQUNnQyxHQUFELEVBQUsxUyxFQUFMLEVBQVFDLE9BQU8sR0FBQyxFQUFoQixFQUFtQjtBQUFDLFFBQUd3RixLQUFILEVBQXlDLEVBR3lEOztBQUFBO0FBQUMsS0FBQztBQUFDaU4sU0FBRDtBQUFLMVM7QUFBTCxRQUFTZ1YsWUFBWSxDQUFDLElBQUQsRUFBTXRDLEdBQU4sRUFBVTFTLEVBQVYsQ0FBdEI7QUFBcUMsV0FBTyxLQUFLd1ksTUFBTCxDQUFZLFdBQVosRUFBd0I5RixHQUF4QixFQUE0QjFTLEVBQTVCLEVBQStCQyxPQUEvQixDQUFQO0FBQWdEO0FBQUE7QUFDck47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUtnQixTQUFPLENBQUN5UixHQUFELEVBQUsxUyxFQUFMLEVBQVFDLE9BQU8sR0FBQyxFQUFoQixFQUFtQjtBQUFDO0FBQUMsS0FBQztBQUFDeVMsU0FBRDtBQUFLMVM7QUFBTCxRQUFTZ1YsWUFBWSxDQUFDLElBQUQsRUFBTXRDLEdBQU4sRUFBVTFTLEVBQVYsQ0FBdEI7QUFBcUMsV0FBTyxLQUFLd1ksTUFBTCxDQUFZLGNBQVosRUFBMkI5RixHQUEzQixFQUErQjFTLEVBQS9CLEVBQWtDQyxPQUFsQyxDQUFQO0FBQW1EOztBQUFBLFFBQU11WSxNQUFOLENBQWFjLE1BQWIsRUFBb0I1RyxHQUFwQixFQUF3QjFTLEVBQXhCLEVBQTJCQyxPQUEzQixFQUFtQ29ZLFlBQW5DLEVBQWdEO0FBQUMsUUFBRyxDQUFDblksVUFBVSxDQUFDd1MsR0FBRCxDQUFkLEVBQW9CO0FBQUN6VCxZQUFNLENBQUNnYSxRQUFQLENBQWdCbFosSUFBaEIsR0FBcUIyUyxHQUFyQjtBQUF5QixhQUFPLEtBQVA7QUFBYzs7QUFBQSxVQUFNNkcsaUJBQWlCLEdBQUM3RyxHQUFHLEtBQUcxUyxFQUFOLElBQVVDLE9BQU8sQ0FBQ3VaLEVBQWxCLElBQXNCdlosT0FBTyxDQUFDd1osa0JBQXRELENBQTdELENBQXNJO0FBQy9TOztBQUNBLFFBQUd4WixPQUFPLENBQUN1WixFQUFYLEVBQWM7QUFBQyxXQUFLMUIsT0FBTCxHQUFhLElBQWI7QUFBbUI7O0FBQUEsUUFBSTRCLFlBQVksR0FBQ3paLE9BQU8sQ0FBQ0ssTUFBUixLQUFpQixLQUFLQSxNQUF2Qzs7QUFBOEMsUUFBR21GLEtBQUgsRUFBbUMsc0JBV25EOztBQUFBLFFBQUcsQ0FBQ3hGLE9BQU8sQ0FBQ3VaLEVBQVosRUFBZTtBQUFDLFdBQUs3QixLQUFMLEdBQVcsS0FBWDtBQUFrQixLQWJ1RSxDQWF2RTs7O0FBQ2xHLFFBQUdwRyxNQUFNLENBQUNvSSxFQUFWLEVBQWE7QUFBQ0MsaUJBQVcsQ0FBQ0MsSUFBWixDQUFpQixhQUFqQjtBQUFpQzs7QUFBQSxVQUFLO0FBQUMzWSxhQUFPLEdBQUM7QUFBVCxRQUFnQmpCLE9BQXJCO0FBQTZCLFVBQU02WixVQUFVLEdBQUM7QUFBQzVZO0FBQUQsS0FBakI7O0FBQTJCLFFBQUcsS0FBSzBXLGNBQVIsRUFBdUI7QUFBQyxXQUFLbUMsa0JBQUwsQ0FBd0IsS0FBS25DLGNBQTdCLEVBQTRDa0MsVUFBNUM7QUFBeUQ7O0FBQUE5WixNQUFFLEdBQUMrRSxXQUFXLENBQUNDLFNBQVMsQ0FBQytMLFdBQVcsQ0FBQy9RLEVBQUQsQ0FBWCxHQUFnQmdSLFdBQVcsQ0FBQ2hSLEVBQUQsQ0FBM0IsR0FBZ0NBLEVBQWpDLEVBQW9DQyxPQUFPLENBQUNLLE1BQTVDLEVBQW1ELEtBQUsyRSxhQUF4RCxDQUFWLENBQWQ7QUFBZ0csVUFBTStVLFNBQVMsR0FBQ2xKLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDL1EsRUFBRCxDQUFYLEdBQWdCZ1IsV0FBVyxDQUFDaFIsRUFBRCxDQUEzQixHQUFnQ0EsRUFBakMsRUFBb0MsS0FBS00sTUFBekMsQ0FBekI7QUFBMEUsU0FBS3NYLGNBQUwsR0FBb0I1WCxFQUFwQixDQWR6TCxDQWNnTjtBQUN6WDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFHLENBQUNDLE9BQU8sQ0FBQ3VaLEVBQVQsSUFBYSxLQUFLUyxlQUFMLENBQXFCRCxTQUFyQixDQUFoQixFQUFnRDtBQUFDLFdBQUt4RixNQUFMLEdBQVl3RixTQUFaO0FBQXNCekQsWUFBTSxDQUFDekosTUFBUCxDQUFjOEQsSUFBZCxDQUFtQixpQkFBbkIsRUFBcUM1USxFQUFyQyxFQUF3QzhaLFVBQXhDLEVBQXZCLENBQTJFOztBQUMzSCxXQUFLNUIsV0FBTCxDQUFpQm9CLE1BQWpCLEVBQXdCNUcsR0FBeEIsRUFBNEIxUyxFQUE1QixFQUErQkMsT0FBL0I7QUFBd0MsV0FBS2lhLFlBQUwsQ0FBa0JGLFNBQWxCO0FBQTZCLFdBQUtHLE1BQUwsQ0FBWSxLQUFLL0MsVUFBTCxDQUFnQixLQUFLeE4sS0FBckIsQ0FBWixFQUF3QyxJQUF4QztBQUE4QzJNLFlBQU0sQ0FBQ3pKLE1BQVAsQ0FBYzhELElBQWQsQ0FBbUIsb0JBQW5CLEVBQXdDNVEsRUFBeEMsRUFBMkM4WixVQUEzQztBQUF1RCxhQUFPLElBQVA7QUFBYTs7QUFBQSxRQUFJL2IsTUFBTSxHQUFDLENBQUMsR0FBRTBULGlCQUFpQixDQUFDOEcsZ0JBQXJCLEVBQXVDN0YsR0FBdkMsQ0FBWDtBQUF1RCxRQUFHO0FBQUMzQyxjQUFEO0FBQVVrRDtBQUFWLFFBQWlCbFYsTUFBcEIsQ0FwQnJFLENBb0JnRztBQUN6UTtBQUNBOztBQUNBLFFBQUl1WCxLQUFKLEVBQVU4RSxRQUFWOztBQUFtQixRQUFHO0FBQUM5RSxXQUFLLEdBQUMsTUFBTSxLQUFLdUIsVUFBTCxDQUFnQndELFdBQWhCLEVBQVo7QUFBMEMsT0FBQztBQUFDQyxrQkFBVSxFQUFDRjtBQUFaLFVBQXNCLE1BQUssQ0FBQyxHQUFFakosWUFBWSxDQUFDMUssc0JBQWhCLEdBQTVCO0FBQXdFLEtBQXRILENBQXNILE9BQU1yRyxHQUFOLEVBQVU7QUFBQztBQUNwSjtBQUNBbkIsWUFBTSxDQUFDZ2EsUUFBUCxDQUFnQmxaLElBQWhCLEdBQXFCQyxFQUFyQjtBQUF3QixhQUFPLEtBQVA7QUFBYyxLQXpCbUksQ0F5Qm5JO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxRQUFHLENBQUMsS0FBS3VhLFFBQUwsQ0FBY1AsU0FBZCxDQUFELElBQTJCLENBQUNOLFlBQS9CLEVBQTRDO0FBQUNKLFlBQU0sR0FBQyxjQUFQO0FBQXVCLEtBOUJxRyxDQThCckc7QUFDcEU7OztBQUNBLFFBQUlwVyxVQUFVLEdBQUNsRCxFQUFmLENBaEN5SyxDQWdDdko7QUFDbEI7QUFDQTs7QUFDQStQLFlBQVEsR0FBQ0EsUUFBUSxHQUFDLENBQUMsR0FBRW1CLHVCQUF1QixDQUFDOUwsdUJBQTNCLEVBQW9ENEwsV0FBVyxDQUFDakIsUUFBRCxDQUEvRCxDQUFELEdBQTRFQSxRQUE3Rjs7QUFBc0csUUFBR3dKLGlCQUFpQixJQUFFeEosUUFBUSxLQUFHLFNBQWpDLEVBQTJDO0FBQUM7QUFBQzlQLGFBQU8sQ0FBQ3daLGtCQUFSLEdBQTJCLElBQTNCOztBQUFnQyxVQUFHaFUsS0FBSCxFQUF1RCxFQUF2RCxNQUV0RDtBQUFDMUgsY0FBTSxDQUFDZ1MsUUFBUCxHQUFnQnNGLG1CQUFtQixDQUFDdEYsUUFBRCxFQUFVdUYsS0FBVixDQUFuQzs7QUFBb0QsWUFBR3ZYLE1BQU0sQ0FBQ2dTLFFBQVAsS0FBa0JBLFFBQXJCLEVBQThCO0FBQUNBLGtCQUFRLEdBQUNoUyxNQUFNLENBQUNnUyxRQUFoQjtBQUF5QmhTLGdCQUFNLENBQUNnUyxRQUFQLEdBQWdCaEwsV0FBVyxDQUFDZ0wsUUFBRCxDQUEzQjtBQUFzQzJDLGFBQUcsR0FBQyxDQUFDLEdBQUVuQixNQUFNLENBQUNnRCxvQkFBVixFQUFnQ3hXLE1BQWhDLENBQUo7QUFBNkM7QUFBQztBQUFDOztBQUFBLFVBQU02TCxLQUFLLEdBQUMsQ0FBQyxHQUFFc0gsdUJBQXVCLENBQUM5TCx1QkFBM0IsRUFBb0QySyxRQUFwRCxDQUFaOztBQUEwRSxRQUFHLENBQUM3UCxVQUFVLENBQUNGLEVBQUQsQ0FBZCxFQUFtQjtBQUFDLGdCQUF1QztBQUFDLGNBQU0sSUFBSTJCLEtBQUosQ0FBVyxrQkFBaUIrUSxHQUFJLGNBQWExUyxFQUFHLDJDQUF0QyxHQUFrRixvRkFBNUYsQ0FBTjtBQUF3TDs7QUFBQWYsWUFBTSxDQUFDZ2EsUUFBUCxDQUFnQmxaLElBQWhCLEdBQXFCQyxFQUFyQjtBQUF3QixhQUFPLEtBQVA7QUFBYzs7QUFBQWtELGNBQVUsR0FBQzROLFNBQVMsQ0FBQ0UsV0FBVyxDQUFDOU4sVUFBRCxDQUFaLEVBQXlCLEtBQUs1QyxNQUE5QixDQUFwQjs7QUFBMEQsUUFBRyxDQUFDLEdBQUVrUixVQUFVLENBQUNtRCxjQUFkLEVBQThCL0ssS0FBOUIsQ0FBSCxFQUF3QztBQUFDLFlBQU00USxRQUFRLEdBQUMsQ0FBQyxHQUFFL0ksaUJBQWlCLENBQUM4RyxnQkFBckIsRUFBdUNyVixVQUF2QyxDQUFmO0FBQWtFLFlBQU04UCxVQUFVLEdBQUN3SCxRQUFRLENBQUN6SyxRQUExQjtBQUFtQyxZQUFNMEssVUFBVSxHQUFDLENBQUMsR0FBRTVJLFdBQVcsQ0FBQ3VCLGFBQWYsRUFBOEJ4SixLQUE5QixDQUFqQjtBQUFzRCxZQUFNOFEsVUFBVSxHQUFDLENBQUMsR0FBRTlJLGFBQWEsQ0FBQzRCLGVBQWpCLEVBQWtDaUgsVUFBbEMsRUFBOEN6SCxVQUE5QyxDQUFqQjtBQUEyRSxZQUFNMkgsaUJBQWlCLEdBQUMvUSxLQUFLLEtBQUdvSixVQUFoQztBQUEyQyxZQUFNMEIsY0FBYyxHQUFDaUcsaUJBQWlCLEdBQUMxSixhQUFhLENBQUNySCxLQUFELEVBQU9vSixVQUFQLEVBQWtCQyxLQUFsQixDQUFkLEdBQXVDLEVBQTdFOztBQUFnRixVQUFHLENBQUN5SCxVQUFELElBQWFDLGlCQUFpQixJQUFFLENBQUNqRyxjQUFjLENBQUM5VixNQUFuRCxFQUEwRDtBQUFDLGNBQU1nYyxhQUFhLEdBQUMzWSxNQUFNLENBQUNDLElBQVAsQ0FBWXVZLFVBQVUsQ0FBQ25ILE1BQXZCLEVBQStCcEosTUFBL0IsQ0FBc0N5SixLQUFLLElBQUUsQ0FBQ1YsS0FBSyxDQUFDVSxLQUFELENBQW5ELENBQXBCOztBQUFnRixZQUFHaUgsYUFBYSxDQUFDbkksTUFBZCxHQUFxQixDQUF4QixFQUEwQjtBQUFDLG9CQUF1QztBQUFDMVQsbUJBQU8sQ0FBQzhELElBQVIsQ0FBYyxHQUFFOFgsaUJBQWlCLEdBQUUsb0JBQUYsR0FBdUIsaUNBQWlDLDhCQUE1RSxHQUEyRyxlQUFjQyxhQUFhLENBQUN0SyxJQUFkLENBQW1CLElBQW5CLENBQXlCLDhCQUEvSjtBQUErTDs7QUFBQSxnQkFBTSxJQUFJM08sS0FBSixDQUFVLENBQUNnWixpQkFBaUIsR0FBRSwwQkFBeUJqSSxHQUFJLG9DQUFtQ2tJLGFBQWEsQ0FBQ3RLLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsaUNBQTNGLEdBQTZILDhCQUE2QjBDLFVBQVcsOENBQTZDcEosS0FBTSxLQUExTyxJQUFpUCwrQ0FBOEMrUSxpQkFBaUIsR0FBQywyQkFBRCxHQUE2QixzQkFBdUIsRUFBOVcsQ0FBTjtBQUF3WDtBQUFDLE9BQXR3QixNQUEyd0IsSUFBR0EsaUJBQUgsRUFBcUI7QUFBQzNhLFVBQUUsR0FBQyxDQUFDLEdBQUV1UixNQUFNLENBQUNnRCxvQkFBVixFQUFnQ3RTLE1BQU0sQ0FBQzJKLE1BQVAsQ0FBYyxFQUFkLEVBQWlCNE8sUUFBakIsRUFBMEI7QUFBQ3pLLGtCQUFRLEVBQUMyRSxjQUFjLENBQUM5VixNQUF6QjtBQUFnQ3FVLGVBQUssRUFBQ2dCLGtCQUFrQixDQUFDaEIsS0FBRCxFQUFPeUIsY0FBYyxDQUFDakIsTUFBdEI7QUFBeEQsU0FBMUIsQ0FBaEMsQ0FBSDtBQUF1SixPQUE3SyxNQUFpTDtBQUFDO0FBQ3BpRXhSLGNBQU0sQ0FBQzJKLE1BQVAsQ0FBY3FILEtBQWQsRUFBb0J5SCxVQUFwQjtBQUFpQztBQUFDOztBQUFBbkUsVUFBTSxDQUFDekosTUFBUCxDQUFjOEQsSUFBZCxDQUFtQixrQkFBbkIsRUFBc0M1USxFQUF0QyxFQUF5QzhaLFVBQXpDOztBQUFxRCxRQUFHO0FBQUMsVUFBSWUscUJBQUosRUFBMEJDLHNCQUExQixFQUFpREMsZUFBakQ7O0FBQWlFLFVBQUlDLFNBQVMsR0FBQyxNQUFNLEtBQUtDLFlBQUwsQ0FBa0JyUixLQUFsQixFQUF3Qm1HLFFBQXhCLEVBQWlDa0QsS0FBakMsRUFBdUNqVCxFQUF2QyxFQUEwQ2tELFVBQTFDLEVBQXFENFcsVUFBckQsQ0FBcEI7QUFBcUYsVUFBRztBQUFDek8sYUFBRDtBQUFPN0osYUFBUDtBQUFha1gsZUFBYjtBQUFxQkM7QUFBckIsVUFBOEJxQyxTQUFqQyxDQUF2SixDQUFrTTs7QUFDNVIsVUFBRyxDQUFDdEMsT0FBTyxJQUFFQyxPQUFWLEtBQW9CblgsS0FBdkIsRUFBNkI7QUFBQyxZQUFHQSxLQUFLLENBQUMwWixTQUFOLElBQWlCMVosS0FBSyxDQUFDMFosU0FBTixDQUFnQkMsWUFBcEMsRUFBaUQ7QUFBQyxnQkFBTUMsV0FBVyxHQUFDNVosS0FBSyxDQUFDMFosU0FBTixDQUFnQkMsWUFBbEMsQ0FBRCxDQUFnRDtBQUMvSDtBQUNBOztBQUNBLGNBQUdDLFdBQVcsQ0FBQy9JLFVBQVosQ0FBdUIsR0FBdkIsQ0FBSCxFQUErQjtBQUFDLGtCQUFNZ0osVUFBVSxHQUFDLENBQUMsR0FBRTVKLGlCQUFpQixDQUFDOEcsZ0JBQXJCLEVBQXVDNkMsV0FBdkMsQ0FBakI7QUFBcUVDLHNCQUFVLENBQUN0TCxRQUFYLEdBQW9Cc0YsbUJBQW1CLENBQUNnRyxVQUFVLENBQUN0TCxRQUFaLEVBQXFCdUYsS0FBckIsQ0FBdkM7QUFBbUUsa0JBQUs7QUFBQzVDLGlCQUFHLEVBQUM0SSxNQUFMO0FBQVl0YixnQkFBRSxFQUFDdWI7QUFBZixnQkFBc0J2RyxZQUFZLENBQUMsSUFBRCxFQUFNb0csV0FBTixFQUFrQkEsV0FBbEIsQ0FBdkM7QUFBc0UsbUJBQU8sS0FBSzVDLE1BQUwsQ0FBWWMsTUFBWixFQUFtQmdDLE1BQW5CLEVBQTBCQyxLQUExQixFQUFnQ3RiLE9BQWhDLENBQVA7QUFBaUQ7O0FBQUFoQixnQkFBTSxDQUFDZ2EsUUFBUCxDQUFnQmxaLElBQWhCLEdBQXFCcWIsV0FBckI7QUFBaUMsaUJBQU8sSUFBSWpVLE9BQUosQ0FBWSxNQUFJLENBQUUsQ0FBbEIsQ0FBUDtBQUE0Qjs7QUFBQSxhQUFLZ1EsU0FBTCxHQUFlLENBQUMsQ0FBQzNWLEtBQUssQ0FBQ2dhLFdBQXZCLENBSC9ULENBR2tXOztBQUMvWCxZQUFHaGEsS0FBSyxDQUFDMlUsUUFBTixLQUFpQlAsa0JBQXBCLEVBQXVDO0FBQUMsY0FBSTZGLGFBQUo7O0FBQWtCLGNBQUc7QUFBQyxrQkFBTSxLQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQU47QUFBa0NELHlCQUFhLEdBQUMsTUFBZDtBQUFzQixXQUE1RCxDQUE0RCxPQUFNclosQ0FBTixFQUFRO0FBQUNxWix5QkFBYSxHQUFDLFNBQWQ7QUFBeUI7O0FBQUFULG1CQUFTLEdBQUMsTUFBTSxLQUFLQyxZQUFMLENBQWtCUSxhQUFsQixFQUFnQ0EsYUFBaEMsRUFBOEN4SSxLQUE5QyxFQUFvRGpULEVBQXBELEVBQXVEa0QsVUFBdkQsRUFBa0U7QUFBQ2hDLG1CQUFPLEVBQUM7QUFBVCxXQUFsRSxDQUFoQjtBQUFvRztBQUFDOztBQUFBcVYsWUFBTSxDQUFDekosTUFBUCxDQUFjOEQsSUFBZCxDQUFtQixxQkFBbkIsRUFBeUM1USxFQUF6QyxFQUE0QzhaLFVBQTVDO0FBQXdELFdBQUs1QixXQUFMLENBQWlCb0IsTUFBakIsRUFBd0I1RyxHQUF4QixFQUE0QjFTLEVBQTVCLEVBQStCQyxPQUEvQjs7QUFBd0MsZ0JBQXVDO0FBQUMsY0FBTTBiLE9BQU8sR0FBQyxLQUFLdkUsVUFBTCxDQUFnQixPQUFoQixFQUF5QkosU0FBdkM7QUFBaUQvWCxjQUFNLENBQUMyYyxJQUFQLENBQVlDLGFBQVosR0FBMEJGLE9BQU8sQ0FBQ2pNLGVBQVIsS0FBMEJpTSxPQUFPLENBQUNoTSxtQkFBbEMsSUFBdUQsQ0FBQ3FMLFNBQVMsQ0FBQ2hFLFNBQVYsQ0FBb0J0SCxlQUF0RztBQUF1SDs7QUFBQSxVQUFHelAsT0FBTyxDQUFDdVosRUFBUixJQUFZekosUUFBUSxLQUFHLFNBQXZCLElBQWtDLENBQUMsQ0FBQzhLLHFCQUFxQixHQUFDbFYsSUFBSSxDQUFDa1QsYUFBTCxDQUFtQnJYLEtBQTFDLEtBQWtELElBQWxELEdBQXVELEtBQUssQ0FBNUQsR0FBOEQsQ0FBQ3NaLHNCQUFzQixHQUFDRCxxQkFBcUIsQ0FBQ0ssU0FBOUMsS0FBMEQsSUFBMUQsR0FBK0QsS0FBSyxDQUFwRSxHQUFzRUosc0JBQXNCLENBQUNnQixVQUE1SixNQUEwSyxHQUE1TSxJQUFpTnRhLEtBQUssSUFBRSxJQUF4TixJQUE4TkEsS0FBSyxDQUFDMFosU0FBdk8sRUFBaVA7QUFBQztBQUMveEI7QUFDQTFaLGFBQUssQ0FBQzBaLFNBQU4sQ0FBZ0JZLFVBQWhCLEdBQTJCLEdBQTNCO0FBQWdDLE9BUDBELENBTzFEOzs7QUFDaEMsWUFBTUMsbUJBQW1CLEdBQUM5YixPQUFPLENBQUNpQixPQUFSLElBQWlCLEtBQUswSSxLQUFMLEtBQWFBLEtBQXhEO0FBQThELFlBQU1vUyxZQUFZLEdBQUMsQ0FBQ2pCLGVBQWUsR0FBQzlhLE9BQU8sQ0FBQ2tCLE1BQXpCLEtBQWtDLElBQWxDLEdBQXVDNFosZUFBdkMsR0FBdUQsQ0FBQ2dCLG1CQUEzRTtBQUErRixZQUFNRSxXQUFXLEdBQUNELFlBQVksR0FBQztBQUFDRSxTQUFDLEVBQUMsQ0FBSDtBQUFLQyxTQUFDLEVBQUM7QUFBUCxPQUFELEdBQVcsSUFBekM7QUFBOEMsWUFBTSxLQUFLNVUsR0FBTCxDQUFTcUMsS0FBVCxFQUFlbUcsUUFBZixFQUF3QmtELEtBQXhCLEVBQThCK0csU0FBOUIsRUFBd0NnQixTQUF4QyxFQUFrRDNDLFlBQVksSUFBRSxJQUFkLEdBQW1CQSxZQUFuQixHQUFnQzRELFdBQWxGLEVBQStGOWIsS0FBL0YsQ0FBcUdsRCxDQUFDLElBQUU7QUFBQyxZQUFHQSxDQUFDLENBQUNvTSxTQUFMLEVBQWVnQyxLQUFLLEdBQUNBLEtBQUssSUFBRXBPLENBQWIsQ0FBZixLQUFtQyxNQUFNQSxDQUFOO0FBQVMsT0FBckosQ0FBTjs7QUFBNkosVUFBR29PLEtBQUgsRUFBUztBQUFDa0wsY0FBTSxDQUFDekosTUFBUCxDQUFjOEQsSUFBZCxDQUFtQixrQkFBbkIsRUFBc0N2RixLQUF0QyxFQUE0QzJPLFNBQTVDLEVBQXNERixVQUF0RDtBQUFrRSxjQUFNek8sS0FBTjtBQUFhOztBQUFBLFVBQUc1RixLQUFILEVBQW1DLEVBQTZEOztBQUFBOFEsWUFBTSxDQUFDekosTUFBUCxDQUFjOEQsSUFBZCxDQUFtQixxQkFBbkIsRUFBeUM1USxFQUF6QyxFQUE0QzhaLFVBQTVDO0FBQXdELGFBQU8sSUFBUDtBQUFhLEtBUi9nQixDQVErZ0IsT0FBTTFaLEdBQU4sRUFBVTtBQUFDLFVBQUdBLEdBQUcsQ0FBQ2lKLFNBQVAsRUFBaUI7QUFBQyxlQUFPLEtBQVA7QUFBYzs7QUFBQSxZQUFNakosR0FBTjtBQUFXO0FBQUM7O0FBQUE4WCxhQUFXLENBQUNvQixNQUFELEVBQVE1RyxHQUFSLEVBQVkxUyxFQUFaLEVBQWVDLE9BQU8sR0FBQyxFQUF2QixFQUEwQjtBQUFDLGNBQXVDO0FBQUMsVUFBRyxPQUFPaEIsTUFBTSxDQUFDb2EsT0FBZCxLQUF3QixXQUEzQixFQUF1QztBQUFDdGEsZUFBTyxDQUFDc00sS0FBUixDQUFlLDJDQUFmO0FBQTJEO0FBQVE7O0FBQUEsVUFBRyxPQUFPcE0sTUFBTSxDQUFDb2EsT0FBUCxDQUFlQyxNQUFmLENBQVAsS0FBZ0MsV0FBbkMsRUFBK0M7QUFBQ3ZhLGVBQU8sQ0FBQ3NNLEtBQVIsQ0FBZSwyQkFBMEJpTyxNQUFPLG1CQUFoRDtBQUFvRTtBQUFRO0FBQUM7O0FBQUEsUUFBR0EsTUFBTSxLQUFHLFdBQVQsSUFBc0IsQ0FBQyxHQUFFL0gsTUFBTSxDQUFDNEcsTUFBVixRQUFzQm5ZLEVBQS9DLEVBQWtEO0FBQUMsV0FBSzZYLFFBQUwsR0FBYzVYLE9BQU8sQ0FBQ2lCLE9BQXRCO0FBQThCakMsWUFBTSxDQUFDb2EsT0FBUCxDQUFlQyxNQUFmLEVBQXVCO0FBQUM1RyxXQUFEO0FBQUsxUyxVQUFMO0FBQVFDLGVBQVI7QUFBZ0JtWSxXQUFHLEVBQUMsSUFBcEI7QUFBeUJFLFdBQUcsRUFBQyxLQUFLUCxJQUFMLEdBQVV1QixNQUFNLEtBQUcsV0FBVCxHQUFxQixLQUFLdkIsSUFBMUIsR0FBK0IsS0FBS0EsSUFBTCxHQUFVO0FBQWhGLE9BQXZCLEVBQTBHO0FBQzlvQztBQUNBO0FBQ0EsUUFIb2lDLEVBR2ppQy9YLEVBSGlpQztBQUc1aEM7QUFBQzs7QUFBQSxRQUFNb2Msb0JBQU4sQ0FBMkJoYyxHQUEzQixFQUErQjJQLFFBQS9CLEVBQXdDa0QsS0FBeEMsRUFBOENqVCxFQUE5QyxFQUFpRDhaLFVBQWpELEVBQTREdUMsYUFBNUQsRUFBMEU7QUFBQyxRQUFHamMsR0FBRyxDQUFDaUosU0FBUCxFQUFpQjtBQUFDO0FBQ3RHLFlBQU1qSixHQUFOO0FBQVc7O0FBQUEsUUFBRyxDQUFDLEdBQUUrUSxZQUFZLENBQUMzSyxZQUFoQixFQUE4QnBHLEdBQTlCLEtBQW9DaWMsYUFBdkMsRUFBcUQ7QUFBQzlGLFlBQU0sQ0FBQ3pKLE1BQVAsQ0FBYzhELElBQWQsQ0FBbUIsa0JBQW5CLEVBQXNDeFEsR0FBdEMsRUFBMENKLEVBQTFDLEVBQTZDOFosVUFBN0MsRUFBRCxDQUEwRDtBQUMxSDtBQUNBO0FBQ0E7QUFDQTs7QUFDQTdhLFlBQU0sQ0FBQ2dhLFFBQVAsQ0FBZ0JsWixJQUFoQixHQUFxQkMsRUFBckIsQ0FMZ0UsQ0FLeEM7QUFDeEI7O0FBQ0EsWUFBTWtTLHNCQUFzQixFQUE1QjtBQUFnQzs7QUFBQSxRQUFHO0FBQUMsVUFBSThFLFNBQUo7QUFBYyxVQUFJeE0sV0FBSjtBQUFnQixVQUFJaEosS0FBSjs7QUFBVSxVQUFHLE9BQU93VixTQUFQLEtBQW1CLFdBQW5CLElBQWdDLE9BQU94TSxXQUFQLEtBQXFCLFdBQXhELEVBQW9FO0FBQUM7QUFBQyxTQUFDO0FBQUNpTCxjQUFJLEVBQUN1QixTQUFOO0FBQWdCeE07QUFBaEIsWUFBNkIsTUFBTSxLQUFLa1IsY0FBTCxDQUFvQixTQUFwQixDQUFwQztBQUFxRTs7QUFBQSxZQUFNVixTQUFTLEdBQUM7QUFBQ3haLGFBQUQ7QUFBT3dWLGlCQUFQO0FBQWlCeE0sbUJBQWpCO0FBQTZCcEssV0FBN0I7QUFBaUNpTCxhQUFLLEVBQUNqTDtBQUF2QyxPQUFoQjs7QUFBNEQsVUFBRyxDQUFDNGEsU0FBUyxDQUFDeFosS0FBZCxFQUFvQjtBQUFDLFlBQUc7QUFBQ3daLG1CQUFTLENBQUN4WixLQUFWLEdBQWdCLE1BQU0sS0FBS2tPLGVBQUwsQ0FBcUJzSCxTQUFyQixFQUErQjtBQUFDNVcsZUFBRDtBQUFLMlAsb0JBQUw7QUFBY2tEO0FBQWQsV0FBL0IsQ0FBdEI7QUFBNEUsU0FBaEYsQ0FBZ0YsT0FBTXFKLE1BQU4sRUFBYTtBQUFDdmQsaUJBQU8sQ0FBQ3NNLEtBQVIsQ0FBYyx5Q0FBZCxFQUF3RGlSLE1BQXhEO0FBQWdFdEIsbUJBQVMsQ0FBQ3haLEtBQVYsR0FBZ0IsRUFBaEI7QUFBb0I7QUFBQzs7QUFBQSxhQUFPd1osU0FBUDtBQUFrQixLQUE3YyxDQUE2YyxPQUFNdUIsWUFBTixFQUFtQjtBQUFDLGFBQU8sS0FBS0gsb0JBQUwsQ0FBMEJHLFlBQTFCLEVBQXVDeE0sUUFBdkMsRUFBZ0RrRCxLQUFoRCxFQUFzRGpULEVBQXRELEVBQXlEOFosVUFBekQsRUFBb0UsSUFBcEUsQ0FBUDtBQUFrRjtBQUFDOztBQUFBLFFBQU1tQixZQUFOLENBQW1CclIsS0FBbkIsRUFBeUJtRyxRQUF6QixFQUFrQ2tELEtBQWxDLEVBQXdDalQsRUFBeEMsRUFBMkNrRCxVQUEzQyxFQUFzRDRXLFVBQXRELEVBQWlFO0FBQUMsUUFBRztBQUFDLFlBQU0wQyxpQkFBaUIsR0FBQyxLQUFLcEYsVUFBTCxDQUFnQnhOLEtBQWhCLENBQXhCOztBQUErQyxVQUFHa1EsVUFBVSxDQUFDNVksT0FBWCxJQUFvQnNiLGlCQUFwQixJQUF1QyxLQUFLNVMsS0FBTCxLQUFhQSxLQUF2RCxFQUE2RDtBQUFDLGVBQU80UyxpQkFBUDtBQUEwQjs7QUFBQSxZQUFNQyxlQUFlLEdBQUNELGlCQUFpQixJQUFFLGFBQVlBLGlCQUEvQixHQUFpRGpPLFNBQWpELEdBQTJEaU8saUJBQWpGO0FBQW1HLFlBQU14QixTQUFTLEdBQUN5QixlQUFlLEdBQUNBLGVBQUQsR0FBaUIsTUFBTSxLQUFLZixjQUFMLENBQW9COVIsS0FBcEIsRUFBMkJwQyxJQUEzQixDQUFnQ1UsR0FBRyxLQUFHO0FBQUM4TyxpQkFBUyxFQUFDOU8sR0FBRyxDQUFDdU4sSUFBZjtBQUFvQmpMLG1CQUFXLEVBQUN0QyxHQUFHLENBQUNzQyxXQUFwQztBQUFnRGtPLGVBQU8sRUFBQ3hRLEdBQUcsQ0FBQ3dVLEdBQUosQ0FBUWhFLE9BQWhFO0FBQXdFQyxlQUFPLEVBQUN6USxHQUFHLENBQUN3VSxHQUFKLENBQVEvRDtBQUF4RixPQUFILENBQW5DLENBQXREO0FBQStMLFlBQUs7QUFBQzNCLGlCQUFEO0FBQVcwQixlQUFYO0FBQW1CQztBQUFuQixVQUE0QnFDLFNBQWpDOztBQUEyQyxnQkFBdUM7QUFBQyxjQUFLO0FBQUMyQjtBQUFELFlBQXFCcmQsbUJBQU8sQ0FBQywwQkFBRCxDQUFqQzs7QUFBOEMsWUFBRyxDQUFDcWQsa0JBQWtCLENBQUMzRixTQUFELENBQXRCLEVBQWtDO0FBQUMsZ0JBQU0sSUFBSXJWLEtBQUosQ0FBVyx5REFBd0RvTyxRQUFTLEdBQTVFLENBQU47QUFBdUY7QUFBQzs7QUFBQSxVQUFJc0csUUFBSjs7QUFBYSxVQUFHcUMsT0FBTyxJQUFFQyxPQUFaLEVBQW9CO0FBQUN0QyxnQkFBUSxHQUFDLEtBQUtRLFVBQUwsQ0FBZ0IrRixXQUFoQixDQUE0QixDQUFDLEdBQUVyTCxNQUFNLENBQUNnRCxvQkFBVixFQUFnQztBQUFDeEUsa0JBQUQ7QUFBVWtEO0FBQVYsU0FBaEMsQ0FBNUIsRUFBOEUvUCxVQUE5RSxFQUF5RndWLE9BQXpGLEVBQWlHLEtBQUtwWSxNQUF0RyxDQUFUO0FBQXdIOztBQUFBLFlBQU1rQixLQUFLLEdBQUMsTUFBTSxLQUFLcWIsUUFBTCxDQUFjLE1BQUluRSxPQUFPLEdBQUMsS0FBS29FLGNBQUwsQ0FBb0J6RyxRQUFwQixDQUFELEdBQStCc0MsT0FBTyxHQUFDLEtBQUtvRSxjQUFMLENBQW9CMUcsUUFBcEIsQ0FBRCxHQUErQixLQUFLM0csZUFBTCxDQUFxQnNILFNBQXJCLEVBQStCO0FBQ3htRDtBQUFDakgsZ0JBQUQ7QUFBVWtELGFBQVY7QUFBZ0J1QixjQUFNLEVBQUN4VSxFQUF2QjtBQUEwQk0sY0FBTSxFQUFDLEtBQUtBLE1BQXRDO0FBQTZDdUUsZUFBTyxFQUFDLEtBQUtBLE9BQTFEO0FBQWtFSSxxQkFBYSxFQUFDLEtBQUtBO0FBQXJGLE9BRHlrRCxDQUE5RixDQUFsQjtBQUNuM0MrVixlQUFTLENBQUN4WixLQUFWLEdBQWdCQSxLQUFoQjtBQUFzQixXQUFLNFYsVUFBTCxDQUFnQnhOLEtBQWhCLElBQXVCb1IsU0FBdkI7QUFBaUMsYUFBT0EsU0FBUDtBQUFrQixLQUR1ZSxDQUN2ZSxPQUFNNWEsR0FBTixFQUFVO0FBQUMsYUFBTyxLQUFLZ2Msb0JBQUwsQ0FBMEJoYyxHQUExQixFQUE4QjJQLFFBQTlCLEVBQXVDa0QsS0FBdkMsRUFBNkNqVCxFQUE3QyxFQUFnRDhaLFVBQWhELENBQVA7QUFBb0U7QUFBQzs7QUFBQXZTLEtBQUcsQ0FBQ3FDLEtBQUQsRUFBT21HLFFBQVAsRUFBZ0JrRCxLQUFoQixFQUFzQmpULEVBQXRCLEVBQXlCa1csSUFBekIsRUFBOEIrRixXQUE5QixFQUEwQztBQUFDLFNBQUsvRSxVQUFMLEdBQWdCLEtBQWhCO0FBQXNCLFNBQUt0TixLQUFMLEdBQVdBLEtBQVg7QUFBaUIsU0FBS21HLFFBQUwsR0FBY0EsUUFBZDtBQUF1QixTQUFLa0QsS0FBTCxHQUFXQSxLQUFYO0FBQWlCLFNBQUt1QixNQUFMLEdBQVl4VSxFQUFaO0FBQWUsV0FBTyxLQUFLbWEsTUFBTCxDQUFZakUsSUFBWixFQUFpQitGLFdBQWpCLENBQVA7QUFBc0M7QUFBQTtBQUNqYjtBQUNBO0FBQ0E7OztBQUFLZSxnQkFBYyxDQUFDcFgsRUFBRCxFQUFJO0FBQUMsU0FBSzZSLElBQUwsR0FBVTdSLEVBQVY7QUFBYzs7QUFBQXFVLGlCQUFlLENBQUNqYSxFQUFELEVBQUk7QUFBQyxRQUFHLENBQUMsS0FBS3dVLE1BQVQsRUFBZ0IsT0FBTyxLQUFQO0FBQWEsVUFBSyxDQUFDeUksWUFBRCxFQUFjQyxPQUFkLElBQXVCLEtBQUsxSSxNQUFMLENBQVl0RSxLQUFaLENBQWtCLEdBQWxCLENBQTVCO0FBQW1ELFVBQUssQ0FBQ2lOLFlBQUQsRUFBY0MsT0FBZCxJQUF1QnBkLEVBQUUsQ0FBQ2tRLEtBQUgsQ0FBUyxHQUFULENBQTVCLENBQWpGLENBQTJIOztBQUNwTCxRQUFHa04sT0FBTyxJQUFFSCxZQUFZLEtBQUdFLFlBQXhCLElBQXNDRCxPQUFPLEtBQUdFLE9BQW5ELEVBQTJEO0FBQUMsYUFBTyxJQUFQO0FBQWEsS0FEaEIsQ0FDZ0I7OztBQUN6RSxRQUFHSCxZQUFZLEtBQUdFLFlBQWxCLEVBQStCO0FBQUMsYUFBTyxLQUFQO0FBQWMsS0FGVyxDQUVYO0FBQzlDO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0QsT0FBTyxLQUFHRSxPQUFqQjtBQUEwQjs7QUFBQWxELGNBQVksQ0FBQ2xhLEVBQUQsRUFBSTtBQUFDLFVBQUssR0FBRThVLElBQUYsSUFBUTlVLEVBQUUsQ0FBQ2tRLEtBQUgsQ0FBUyxHQUFULENBQWIsQ0FBRCxDQUE0QjtBQUN0RTs7QUFDQSxRQUFHNEUsSUFBSSxLQUFHLEVBQVAsSUFBV0EsSUFBSSxLQUFHLEtBQXJCLEVBQTJCO0FBQUM3VixZQUFNLENBQUNvZSxRQUFQLENBQWdCLENBQWhCLEVBQWtCLENBQWxCO0FBQXFCO0FBQVEsS0FGZixDQUVlOzs7QUFDekQsVUFBTUMsSUFBSSxHQUFDcGUsUUFBUSxDQUFDcWUsY0FBVCxDQUF3QnpJLElBQXhCLENBQVg7O0FBQXlDLFFBQUd3SSxJQUFILEVBQVE7QUFBQ0EsVUFBSSxDQUFDRSxjQUFMO0FBQXNCO0FBQVEsS0FIdEMsQ0FHc0M7QUFDaEY7OztBQUNBLFVBQU1DLE1BQU0sR0FBQ3ZlLFFBQVEsQ0FBQ3dlLGlCQUFULENBQTJCNUksSUFBM0IsRUFBaUMsQ0FBakMsQ0FBYjs7QUFBaUQsUUFBRzJJLE1BQUgsRUFBVTtBQUFDQSxZQUFNLENBQUNELGNBQVA7QUFBeUI7QUFBQzs7QUFBQWpELFVBQVEsQ0FBQy9GLE1BQUQsRUFBUTtBQUFDLFdBQU8sS0FBS0EsTUFBTCxLQUFjQSxNQUFyQjtBQUE2QjtBQUFBO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFLLFFBQU0zVSxRQUFOLENBQWU2UyxHQUFmLEVBQW1COEIsTUFBTSxHQUFDOUIsR0FBMUIsRUFBOEJ6UyxPQUFPLEdBQUMsRUFBdEMsRUFBeUM7QUFBQyxRQUFJbEMsTUFBTSxHQUFDLENBQUMsR0FBRTBULGlCQUFpQixDQUFDOEcsZ0JBQXJCLEVBQXVDN0YsR0FBdkMsQ0FBWDtBQUF1RCxRQUFHO0FBQUMzQztBQUFELFFBQVdoUyxNQUFkOztBQUFxQixRQUFHMEgsS0FBSCxFQUFtQyxFQUF5Zjs7QUFBQSxVQUFNNlAsS0FBSyxHQUFDLE1BQU0sS0FBS3VCLFVBQUwsQ0FBZ0J3RCxXQUFoQixFQUFsQjtBQUFnRCxRQUFJblgsVUFBVSxHQUFDc1IsTUFBZjs7QUFBc0IsUUFBRy9PLEtBQUgsRUFBMkQsRUFBM0QsTUFFN21CO0FBQUMxSCxZQUFNLENBQUNnUyxRQUFQLEdBQWdCc0YsbUJBQW1CLENBQUN0WCxNQUFNLENBQUNnUyxRQUFSLEVBQWlCdUYsS0FBakIsQ0FBbkM7O0FBQTJELFVBQUd2WCxNQUFNLENBQUNnUyxRQUFQLEtBQWtCQSxRQUFyQixFQUE4QjtBQUFDQSxnQkFBUSxHQUFDaFMsTUFBTSxDQUFDZ1MsUUFBaEI7QUFBeUJoUyxjQUFNLENBQUNnUyxRQUFQLEdBQWdCQSxRQUFoQjtBQUF5QjJDLFdBQUcsR0FBQyxDQUFDLEdBQUVuQixNQUFNLENBQUNnRCxvQkFBVixFQUFnQ3hXLE1BQWhDLENBQUo7QUFBNkM7QUFBQzs7QUFBQSxVQUFNNkwsS0FBSyxHQUFDLENBQUMsR0FBRXNILHVCQUF1QixDQUFDOUwsdUJBQTNCLEVBQW9EMkssUUFBcEQsQ0FBWixDQUY3UCxDQUV1VTs7QUFDclgsY0FBdUM7QUFBQztBQUFROztBQUFBLFVBQU01SSxPQUFPLENBQUNxRSxHQUFSLENBQVksQ0FBQyxLQUFLcUwsVUFBTCxDQUFnQjhHLE1BQWhCLENBQXVCL1QsS0FBdkIsRUFBOEJwQyxJQUE5QixDQUFtQ29XLEtBQUssSUFBRTtBQUFDLGFBQU9BLEtBQUssR0FBQyxLQUFLZCxjQUFMLENBQW9CLEtBQUtqRyxVQUFMLENBQWdCK0YsV0FBaEIsQ0FBNEJsSyxHQUE1QixFQUFnQ3hQLFVBQWhDLEVBQTJDLElBQTNDLEVBQWdELE9BQU9qRCxPQUFPLENBQUNLLE1BQWYsS0FBd0IsV0FBeEIsR0FBb0NMLE9BQU8sQ0FBQ0ssTUFBNUMsR0FBbUQsS0FBS0EsTUFBeEcsQ0FBcEIsQ0FBRCxHQUFzSSxLQUFsSjtBQUF5SixLQUFwTSxDQUFELEVBQXVNLEtBQUt1VyxVQUFMLENBQWdCNVcsT0FBTyxDQUFDd0UsUUFBUixHQUFpQixVQUFqQixHQUE0QixVQUE1QyxFQUF3RG1GLEtBQXhELENBQXZNLENBQVosQ0FBTjtBQUEyUjs7QUFBQSxRQUFNOFIsY0FBTixDQUFxQjlSLEtBQXJCLEVBQTJCO0FBQUMsUUFBSVAsU0FBUyxHQUFDLEtBQWQ7O0FBQW9CLFVBQU13VSxNQUFNLEdBQUMsS0FBS3JHLEdBQUwsR0FBUyxNQUFJO0FBQUNuTyxlQUFTLEdBQUMsSUFBVjtBQUFnQixLQUEzQzs7QUFBNEMsVUFBTXlVLGVBQWUsR0FBQyxNQUFNLEtBQUtqSCxVQUFMLENBQWdCa0gsUUFBaEIsQ0FBeUJuVSxLQUF6QixDQUE1Qjs7QUFBNEQsUUFBR1AsU0FBSCxFQUFhO0FBQUMsWUFBTWdDLEtBQUssR0FBQyxJQUFJMUosS0FBSixDQUFXLHdDQUF1Q2lJLEtBQU0sR0FBeEQsQ0FBWjtBQUF3RXlCLFdBQUssQ0FBQ2hDLFNBQU4sR0FBZ0IsSUFBaEI7QUFBcUIsWUFBTWdDLEtBQU47QUFBYTs7QUFBQSxRQUFHd1MsTUFBTSxLQUFHLEtBQUtyRyxHQUFqQixFQUFxQjtBQUFDLFdBQUtBLEdBQUwsR0FBUyxJQUFUO0FBQWU7O0FBQUEsV0FBT3NHLGVBQVA7QUFBd0I7O0FBQUFqQixVQUFRLENBQUMxUixFQUFELEVBQUk7QUFBQyxRQUFJOUIsU0FBUyxHQUFDLEtBQWQ7O0FBQW9CLFVBQU13VSxNQUFNLEdBQUMsTUFBSTtBQUFDeFUsZUFBUyxHQUFDLElBQVY7QUFBZ0IsS0FBbEM7O0FBQW1DLFNBQUttTyxHQUFMLEdBQVNxRyxNQUFUO0FBQWdCLFdBQU8xUyxFQUFFLEdBQUczRCxJQUFMLENBQVUwTyxJQUFJLElBQUU7QUFBQyxVQUFHMkgsTUFBTSxLQUFHLEtBQUtyRyxHQUFqQixFQUFxQjtBQUFDLGFBQUtBLEdBQUwsR0FBUyxJQUFUO0FBQWU7O0FBQUEsVUFBR25PLFNBQUgsRUFBYTtBQUFDLGNBQU1qSixHQUFHLEdBQUMsSUFBSXVCLEtBQUosQ0FBVSxpQ0FBVixDQUFWO0FBQXVEdkIsV0FBRyxDQUFDaUosU0FBSixHQUFjLElBQWQ7QUFBbUIsY0FBTWpKLEdBQU47QUFBVzs7QUFBQSxhQUFPOFYsSUFBUDtBQUFhLEtBQXRLLENBQVA7QUFBZ0w7O0FBQUE0RyxnQkFBYyxDQUFDekcsUUFBRCxFQUFVO0FBQUMsVUFBSztBQUFDdFcsVUFBSSxFQUFDaWU7QUFBTixRQUFnQixJQUFJbEwsR0FBSixDQUFRdUQsUUFBUixFQUFpQnBYLE1BQU0sQ0FBQ2dhLFFBQVAsQ0FBZ0JsWixJQUFqQyxDQUFyQjs7QUFBNEQsUUFBRyxLQUFILEVBQTRFLEVBQTZDOztBQUFBLFdBQU9xVyxhQUFhLENBQUNDLFFBQUQsRUFBVSxLQUFLc0IsS0FBZixDQUFiLENBQW1DblEsSUFBbkMsQ0FBd0MwTyxJQUFJLElBQUU7QUFBQyxXQUFLbUIsR0FBTCxDQUFTMkcsUUFBVCxJQUFtQjlILElBQW5CO0FBQXdCLGFBQU9BLElBQVA7QUFBYSxLQUFwRixDQUFQO0FBQThGOztBQUFBNkcsZ0JBQWMsQ0FBQzFHLFFBQUQsRUFBVTtBQUFDLFVBQUs7QUFBQ3RXLFVBQUksRUFBQ2tlO0FBQU4sUUFBbUIsSUFBSW5MLEdBQUosQ0FBUXVELFFBQVIsRUFBaUJwWCxNQUFNLENBQUNnYSxRQUFQLENBQWdCbFosSUFBakMsQ0FBeEI7O0FBQStELFFBQUcsS0FBS3VYLEdBQUwsQ0FBUzJHLFdBQVQsQ0FBSCxFQUF5QjtBQUFDLGFBQU8sS0FBSzNHLEdBQUwsQ0FBUzJHLFdBQVQsQ0FBUDtBQUE4Qjs7QUFBQSxXQUFPLEtBQUszRyxHQUFMLENBQVMyRyxXQUFULElBQXNCN0gsYUFBYSxDQUFDQyxRQUFELEVBQVUsS0FBS3NCLEtBQWYsQ0FBYixDQUFtQ25RLElBQW5DLENBQXdDME8sSUFBSSxJQUFFO0FBQUMsYUFBTyxLQUFLb0IsR0FBTCxDQUFTMkcsV0FBVCxDQUFQO0FBQTZCLGFBQU8vSCxJQUFQO0FBQWEsS0FBekYsRUFBMkYvVixLQUEzRixDQUFpR0MsR0FBRyxJQUFFO0FBQUMsYUFBTyxLQUFLa1gsR0FBTCxDQUFTMkcsV0FBVCxDQUFQO0FBQTZCLFlBQU03ZCxHQUFOO0FBQVcsS0FBL0ksQ0FBN0I7QUFBK0s7O0FBQUFzUCxpQkFBZSxDQUFDc0gsU0FBRCxFQUFXa0gsR0FBWCxFQUFlO0FBQUMsVUFBSztBQUFDbEgsZUFBUyxFQUFDRjtBQUFYLFFBQWdCLEtBQUtNLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBckI7O0FBQThDLFVBQU0rRyxPQUFPLEdBQUMsS0FBS3pHLFFBQUwsQ0FBY1osR0FBZCxDQUFkOztBQUFpQ29ILE9BQUcsQ0FBQ0MsT0FBSixHQUFZQSxPQUFaO0FBQW9CLFdBQU0sQ0FBQyxHQUFFNU0sTUFBTSxDQUFDNk0sbUJBQVYsRUFBK0J0SCxHQUEvQixFQUFtQztBQUFDcUgsYUFBRDtBQUFTbkgsZUFBVDtBQUFtQmxYLFlBQU0sRUFBQyxJQUExQjtBQUErQm9lO0FBQS9CLEtBQW5DLENBQU47QUFBK0U7O0FBQUFuRSxvQkFBa0IsQ0FBQy9aLEVBQUQsRUFBSThaLFVBQUosRUFBZTtBQUFDLFFBQUcsS0FBS3RDLEdBQVIsRUFBWTtBQUFDakIsWUFBTSxDQUFDekosTUFBUCxDQUFjOEQsSUFBZCxDQUFtQixrQkFBbkIsRUFBc0NzQixzQkFBc0IsRUFBNUQsRUFBK0RsUyxFQUEvRCxFQUFrRThaLFVBQWxFO0FBQThFLFdBQUt0QyxHQUFMO0FBQVcsV0FBS0EsR0FBTCxHQUFTLElBQVQ7QUFBZTtBQUFDOztBQUFBMkMsUUFBTSxDQUFDakUsSUFBRCxFQUFNK0YsV0FBTixFQUFrQjtBQUFDLFdBQU8sS0FBSzFFLEdBQUwsQ0FBU3JCLElBQVQsRUFBYyxLQUFLa0IsVUFBTCxDQUFnQixPQUFoQixFQUF5QkosU0FBdkMsRUFBaURpRixXQUFqRCxDQUFQO0FBQXNFOztBQW5JMzNEOztBQW1JNDNEMWMsZUFBQSxHQUFnQmdYLE1BQWhCO0FBQXVCQSxNQUFNLENBQUN6SixNQUFQLEdBQWMsQ0FBQyxHQUFFd0UsS0FBSyxDQUFDNU8sT0FBVCxHQUFkLEM7Ozs7Ozs7Ozs7O0FDaEwxOUQ7O0FBQUFuRCxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsaUJBQUEsR0FBa0I4ZSxTQUFsQjs7QUFBNEIsSUFBSUMsV0FBVyxHQUFDamYsdUJBQXVCLENBQUNDLG1CQUFPLENBQUMsMkZBQUQsQ0FBUixDQUF2Qzs7QUFBa0UsU0FBU2lmLHdCQUFULEdBQW1DO0FBQUMsTUFBRyxPQUFPQyxPQUFQLEtBQWlCLFVBQXBCLEVBQStCLE9BQU8sSUFBUDtBQUFZLE1BQUlDLEtBQUssR0FBQyxJQUFJRCxPQUFKLEVBQVY7O0FBQXdCRCwwQkFBd0IsR0FBQyxZQUFVO0FBQUMsV0FBT0UsS0FBUDtBQUFjLEdBQWxEOztBQUFtRCxTQUFPQSxLQUFQO0FBQWM7O0FBQUEsU0FBU3BmLHVCQUFULENBQWlDeVMsR0FBakMsRUFBcUM7QUFBQyxNQUFHQSxHQUFHLElBQUVBLEdBQUcsQ0FBQ0MsVUFBWixFQUF1QjtBQUFDLFdBQU9ELEdBQVA7QUFBWTs7QUFBQSxNQUFHQSxHQUFHLEtBQUcsSUFBTixJQUFZLE9BQU9BLEdBQVAsS0FBYSxRQUFiLElBQXVCLE9BQU9BLEdBQVAsS0FBYSxVQUFuRCxFQUE4RDtBQUFDLFdBQU07QUFBQ3BQLGFBQU8sRUFBQ29QO0FBQVQsS0FBTjtBQUFxQjs7QUFBQSxNQUFJMk0sS0FBSyxHQUFDRix3QkFBd0IsRUFBbEM7O0FBQXFDLE1BQUdFLEtBQUssSUFBRUEsS0FBSyxDQUFDaFQsR0FBTixDQUFVcUcsR0FBVixDQUFWLEVBQXlCO0FBQUMsV0FBTzJNLEtBQUssQ0FBQ3hYLEdBQU4sQ0FBVTZLLEdBQVYsQ0FBUDtBQUF1Qjs7QUFBQSxNQUFJNE0sTUFBTSxHQUFDLEVBQVg7QUFBYyxNQUFJQyxxQkFBcUIsR0FBQzFjLE1BQU0sQ0FBQzRHLGNBQVAsSUFBdUI1RyxNQUFNLENBQUMyYyx3QkFBeEQ7O0FBQWlGLE9BQUksSUFBSWhkLEdBQVIsSUFBZWtRLEdBQWYsRUFBbUI7QUFBQyxRQUFHN1AsTUFBTSxDQUFDNGMsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDak4sR0FBckMsRUFBeUNsUSxHQUF6QyxDQUFILEVBQWlEO0FBQUMsVUFBSW9kLElBQUksR0FBQ0wscUJBQXFCLEdBQUMxYyxNQUFNLENBQUMyYyx3QkFBUCxDQUFnQzlNLEdBQWhDLEVBQW9DbFEsR0FBcEMsQ0FBRCxHQUEwQyxJQUF4RTs7QUFBNkUsVUFBR29kLElBQUksS0FBR0EsSUFBSSxDQUFDL1gsR0FBTCxJQUFVK1gsSUFBSSxDQUFDelgsR0FBbEIsQ0FBUCxFQUE4QjtBQUFDdEYsY0FBTSxDQUFDNEcsY0FBUCxDQUFzQjZWLE1BQXRCLEVBQTZCOWMsR0FBN0IsRUFBaUNvZCxJQUFqQztBQUF3QyxPQUF2RSxNQUEyRTtBQUFDTixjQUFNLENBQUM5YyxHQUFELENBQU4sR0FBWWtRLEdBQUcsQ0FBQ2xRLEdBQUQsQ0FBZjtBQUFzQjtBQUFDO0FBQUM7O0FBQUE4YyxRQUFNLENBQUNoYyxPQUFQLEdBQWVvUCxHQUFmOztBQUFtQixNQUFHMk0sS0FBSCxFQUFTO0FBQUNBLFNBQUssQ0FBQ2xYLEdBQU4sQ0FBVXVLLEdBQVYsRUFBYzRNLE1BQWQ7QUFBdUI7O0FBQUEsU0FBT0EsTUFBUDtBQUFlLEMsQ0FBQTtBQUN4N0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTU8sZ0JBQWdCLEdBQUMsd0JBQXZCOztBQUFnRCxTQUFTWixTQUFULENBQW1CYSxNQUFuQixFQUEwQjtBQUFDLE1BQUc7QUFBQ0MsUUFBRDtBQUFNQztBQUFOLE1BQWdCRixNQUFuQjtBQUEwQixNQUFJRyxRQUFRLEdBQUNILE1BQU0sQ0FBQ0csUUFBUCxJQUFpQixFQUE5QjtBQUFpQyxNQUFJdFAsUUFBUSxHQUFDbVAsTUFBTSxDQUFDblAsUUFBUCxJQUFpQixFQUE5QjtBQUFpQyxNQUFJK0UsSUFBSSxHQUFDb0ssTUFBTSxDQUFDcEssSUFBUCxJQUFhLEVBQXRCO0FBQXlCLE1BQUk3QixLQUFLLEdBQUNpTSxNQUFNLENBQUNqTSxLQUFQLElBQWMsRUFBeEI7QUFBMkIsTUFBSXFNLElBQUksR0FBQyxLQUFUO0FBQWVILE1BQUksR0FBQ0EsSUFBSSxHQUFDbkwsa0JBQWtCLENBQUNtTCxJQUFELENBQWxCLENBQXlCbGUsT0FBekIsQ0FBaUMsTUFBakMsRUFBd0MsR0FBeEMsSUFBNkMsR0FBOUMsR0FBa0QsRUFBM0Q7O0FBQThELE1BQUdpZSxNQUFNLENBQUNJLElBQVYsRUFBZTtBQUFDQSxRQUFJLEdBQUNILElBQUksR0FBQ0QsTUFBTSxDQUFDSSxJQUFqQjtBQUF1QixHQUF2QyxNQUE0QyxJQUFHRixRQUFILEVBQVk7QUFBQ0UsUUFBSSxHQUFDSCxJQUFJLElBQUUsQ0FBQ0MsUUFBUSxDQUFDOWQsT0FBVCxDQUFpQixHQUFqQixDQUFELEdBQXdCLElBQUc4ZCxRQUFTLEdBQXBDLEdBQXVDQSxRQUF6QyxDQUFUOztBQUE0RCxRQUFHRixNQUFNLENBQUNLLElBQVYsRUFBZTtBQUFDRCxVQUFJLElBQUUsTUFBSUosTUFBTSxDQUFDSyxJQUFqQjtBQUF1QjtBQUFDOztBQUFBLE1BQUd0TSxLQUFLLElBQUUsT0FBT0EsS0FBUCxLQUFlLFFBQXpCLEVBQWtDO0FBQUNBLFNBQUssR0FBQ3VNLE1BQU0sQ0FBQ2xCLFdBQVcsQ0FBQ21CLHNCQUFaLENBQW1DeE0sS0FBbkMsQ0FBRCxDQUFaO0FBQXlEOztBQUFBLE1BQUlpRyxNQUFNLEdBQUNnRyxNQUFNLENBQUNoRyxNQUFQLElBQWVqRyxLQUFLLElBQUcsSUFBR0EsS0FBTSxFQUFoQyxJQUFtQyxFQUE5QztBQUFpRCxNQUFHb00sUUFBUSxJQUFFQSxRQUFRLENBQUNLLE1BQVQsQ0FBZ0IsQ0FBQyxDQUFqQixNQUFzQixHQUFuQyxFQUF1Q0wsUUFBUSxJQUFFLEdBQVY7O0FBQWMsTUFBR0gsTUFBTSxDQUFDUyxPQUFQLElBQWdCLENBQUMsQ0FBQ04sUUFBRCxJQUFXSixnQkFBZ0IsQ0FBQ2hULElBQWpCLENBQXNCb1QsUUFBdEIsQ0FBWixLQUE4Q0MsSUFBSSxLQUFHLEtBQXhFLEVBQThFO0FBQUNBLFFBQUksR0FBQyxRQUFNQSxJQUFJLElBQUUsRUFBWixDQUFMO0FBQXFCLFFBQUd2UCxRQUFRLElBQUVBLFFBQVEsQ0FBQyxDQUFELENBQVIsS0FBYyxHQUEzQixFQUErQkEsUUFBUSxHQUFDLE1BQUlBLFFBQWI7QUFBdUIsR0FBMUosTUFBK0osSUFBRyxDQUFDdVAsSUFBSixFQUFTO0FBQUNBLFFBQUksR0FBQyxFQUFMO0FBQVM7O0FBQUEsTUFBR3hLLElBQUksSUFBRUEsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFVLEdBQW5CLEVBQXVCQSxJQUFJLEdBQUMsTUFBSUEsSUFBVDtBQUFjLE1BQUdvRSxNQUFNLElBQUVBLE1BQU0sQ0FBQyxDQUFELENBQU4sS0FBWSxHQUF2QixFQUEyQkEsTUFBTSxHQUFDLE1BQUlBLE1BQVg7QUFBa0JuSixVQUFRLEdBQUNBLFFBQVEsQ0FBQzlPLE9BQVQsQ0FBaUIsT0FBakIsRUFBeUIrUyxrQkFBekIsQ0FBVDtBQUFzRGtGLFFBQU0sR0FBQ0EsTUFBTSxDQUFDalksT0FBUCxDQUFlLEdBQWYsRUFBbUIsS0FBbkIsQ0FBUDtBQUFpQyxTQUFPLEdBQUVvZSxRQUFTLEdBQUVDLElBQUssR0FBRXZQLFFBQVMsR0FBRW1KLE1BQU8sR0FBRXBFLElBQUssRUFBcEQ7QUFBdUQsQzs7Ozs7Ozs7Ozs7QUNyQjVnQzs7QUFBQXZWLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxzQkFBQSxHQUF1Qm9WLGNBQXZCLEMsQ0FBc0M7O0FBQzNFLE1BQU1pTCxVQUFVLEdBQUMsc0JBQWpCOztBQUF3QyxTQUFTakwsY0FBVCxDQUF3Qi9LLEtBQXhCLEVBQThCO0FBQUMsU0FBT2dXLFVBQVUsQ0FBQzNULElBQVgsQ0FBZ0JyQyxLQUFoQixDQUFQO0FBQStCLEM7Ozs7Ozs7Ozs7O0FDRHpGOztBQUFBckssa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLHdCQUFBLEdBQXlCZ1osZ0JBQXpCOztBQUEwQyxJQUFJaEgsTUFBTSxHQUFDalMsbUJBQU8sQ0FBQyxzRUFBRCxDQUFsQjs7QUFBa0MsSUFBSW9TLFlBQVksR0FBQ3BTLG1CQUFPLENBQUMsMkZBQUQsQ0FBeEI7QUFBMEM7QUFDM0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUcsU0FBU2laLGdCQUFULENBQTBCN0YsR0FBMUIsRUFBOEIyQixJQUE5QixFQUFtQztBQUFDLFFBQU13TCxVQUFVLEdBQUMsSUFBSS9NLEdBQUosQ0FBUSxRQUE0QixVQUE1QixHQUF1QyxDQUEvQyxDQUFqQjtBQUFnRyxRQUFNZ04sWUFBWSxHQUFDekwsSUFBSSxHQUFDLElBQUl2QixHQUFKLENBQVF1QixJQUFSLEVBQWF3TCxVQUFiLENBQUQsR0FBMEJBLFVBQWpEO0FBQTRELFFBQUs7QUFBQzlQLFlBQUQ7QUFBVTZFLGdCQUFWO0FBQXVCc0UsVUFBdkI7QUFBOEJwRSxRQUE5QjtBQUFtQy9VLFFBQW5DO0FBQXdDZ1Q7QUFBeEMsTUFBZ0QsSUFBSUQsR0FBSixDQUFRSixHQUFSLEVBQVlvTixZQUFaLENBQXJEOztBQUErRSxNQUFHL00sTUFBTSxLQUFHOE0sVUFBVSxDQUFDOU0sTUFBdkIsRUFBOEI7QUFBQyxVQUFNLElBQUlwUixLQUFKLENBQVcsb0RBQW1EK1EsR0FBSSxFQUFsRSxDQUFOO0FBQTRFOztBQUFBLFNBQU07QUFBQzNDLFlBQUQ7QUFBVWtELFNBQUssRUFBQyxDQUFDLEdBQUV2QixZQUFZLENBQUNtRCxzQkFBaEIsRUFBd0NELFlBQXhDLENBQWhCO0FBQXNFc0UsVUFBdEU7QUFBNkVwRSxRQUE3RTtBQUFrRi9VLFFBQUksRUFBQ0EsSUFBSSxDQUFDd0YsS0FBTCxDQUFXc2EsVUFBVSxDQUFDOU0sTUFBWCxDQUFrQk4sTUFBN0I7QUFBdkYsR0FBTjtBQUFvSSxDOzs7Ozs7Ozs7OztBQ0xwZjs7QUFBQWxULGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSw4QkFBQSxHQUErQnNWLHNCQUEvQjtBQUFzRHRWLDhCQUFBLEdBQStCa2dCLHNCQUEvQjtBQUFzRGxnQixjQUFBLEdBQWVxTSxNQUFmOztBQUFzQixTQUFTaUosc0JBQVQsQ0FBZ0NELFlBQWhDLEVBQTZDO0FBQUMsUUFBTTNCLEtBQUssR0FBQyxFQUFaO0FBQWUyQixjQUFZLENBQUN6UyxPQUFiLENBQXFCLENBQUN0RixLQUFELEVBQU8rRSxHQUFQLEtBQWE7QUFBQyxRQUFHLE9BQU9xUixLQUFLLENBQUNyUixHQUFELENBQVosS0FBb0IsV0FBdkIsRUFBbUM7QUFBQ3FSLFdBQUssQ0FBQ3JSLEdBQUQsQ0FBTCxHQUFXL0UsS0FBWDtBQUFrQixLQUF0RCxNQUEyRCxJQUFHaVIsS0FBSyxDQUFDQyxPQUFOLENBQWNrRixLQUFLLENBQUNyUixHQUFELENBQW5CLENBQUgsRUFBNkI7QUFBQztBQUFDcVIsV0FBSyxDQUFDclIsR0FBRCxDQUFMLENBQVc4TyxJQUFYLENBQWdCN1QsS0FBaEI7QUFBd0IsS0FBdkQsTUFBMkQ7QUFBQ29XLFdBQUssQ0FBQ3JSLEdBQUQsQ0FBTCxHQUFXLENBQUNxUixLQUFLLENBQUNyUixHQUFELENBQU4sRUFBWS9FLEtBQVosQ0FBWDtBQUErQjtBQUFDLEdBQTFMO0FBQTRMLFNBQU9vVyxLQUFQO0FBQWM7O0FBQUEsU0FBUzhNLHNCQUFULENBQWdDcE0sS0FBaEMsRUFBc0M7QUFBQyxNQUFHLE9BQU9BLEtBQVAsS0FBZSxRQUFmLElBQXlCLE9BQU9BLEtBQVAsS0FBZSxRQUFmLElBQXlCLENBQUNxTSxLQUFLLENBQUNyTSxLQUFELENBQXhELElBQWlFLE9BQU9BLEtBQVAsS0FBZSxTQUFuRixFQUE2RjtBQUFDLFdBQU82TCxNQUFNLENBQUM3TCxLQUFELENBQWI7QUFBc0IsR0FBcEgsTUFBd0g7QUFBQyxXQUFNLEVBQU47QUFBVTtBQUFDOztBQUFBLFNBQVM4TCxzQkFBVCxDQUFnQ1EsUUFBaEMsRUFBeUM7QUFBQyxRQUFNcmhCLE1BQU0sR0FBQyxJQUFJc2hCLGVBQUosRUFBYjtBQUFtQ2plLFFBQU0sQ0FBQ21OLE9BQVAsQ0FBZTZRLFFBQWYsRUFBeUI5ZCxPQUF6QixDQUFpQyxDQUFDLENBQUNQLEdBQUQsRUFBSy9FLEtBQUwsQ0FBRCxLQUFlO0FBQUMsUUFBR2lSLEtBQUssQ0FBQ0MsT0FBTixDQUFjbFIsS0FBZCxDQUFILEVBQXdCO0FBQUNBLFdBQUssQ0FBQ3NGLE9BQU4sQ0FBY2dlLElBQUksSUFBRXZoQixNQUFNLENBQUN3aEIsTUFBUCxDQUFjeGUsR0FBZCxFQUFrQm1lLHNCQUFzQixDQUFDSSxJQUFELENBQXhDLENBQXBCO0FBQXNFLEtBQS9GLE1BQW1HO0FBQUN2aEIsWUFBTSxDQUFDMkksR0FBUCxDQUFXM0YsR0FBWCxFQUFlbWUsc0JBQXNCLENBQUNsakIsS0FBRCxDQUFyQztBQUErQztBQUFDLEdBQXJNO0FBQXVNLFNBQU8rQixNQUFQO0FBQWU7O0FBQUEsU0FBU2dOLE1BQVQsQ0FBZ0IxTyxNQUFoQixFQUF1QixHQUFHbWpCLGdCQUExQixFQUEyQztBQUFDQSxrQkFBZ0IsQ0FBQ2xlLE9BQWpCLENBQXlCeVMsWUFBWSxJQUFFO0FBQUM5RyxTQUFLLENBQUN3UyxJQUFOLENBQVcxTCxZQUFZLENBQUMxUyxJQUFiLEVBQVgsRUFBZ0NDLE9BQWhDLENBQXdDUCxHQUFHLElBQUUxRSxNQUFNLENBQUM4UixNQUFQLENBQWNwTixHQUFkLENBQTdDO0FBQWlFZ1QsZ0JBQVksQ0FBQ3pTLE9BQWIsQ0FBcUIsQ0FBQ3RGLEtBQUQsRUFBTytFLEdBQVAsS0FBYTFFLE1BQU0sQ0FBQ2tqQixNQUFQLENBQWN4ZSxHQUFkLEVBQWtCL0UsS0FBbEIsQ0FBbEM7QUFBNkQsR0FBdEs7QUFBd0ssU0FBT0ssTUFBUDtBQUFlLEM7Ozs7Ozs7Ozs7O0FDQWxsQzs7QUFBQXFDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSx1QkFBQSxHQUF3QmlVLGVBQXhCOztBQUF3QyxTQUFTQSxlQUFULENBQXlCaUgsVUFBekIsRUFBb0M7QUFBQyxRQUFLO0FBQUMvRSxNQUFEO0FBQUlwQztBQUFKLE1BQVltSCxVQUFqQjtBQUE0QixTQUFPMUssUUFBUSxJQUFFO0FBQUMsVUFBTTJLLFVBQVUsR0FBQ2hGLEVBQUUsQ0FBQzZLLElBQUgsQ0FBUXhRLFFBQVIsQ0FBakI7O0FBQW1DLFFBQUcsQ0FBQzJLLFVBQUosRUFBZTtBQUFDLGFBQU8sS0FBUDtBQUFjOztBQUFBLFVBQU04RixNQUFNLEdBQUM3TSxLQUFLLElBQUU7QUFBQyxVQUFHO0FBQUMsZUFBTzhNLGtCQUFrQixDQUFDOU0sS0FBRCxDQUF6QjtBQUFrQyxPQUF0QyxDQUFzQyxPQUFNdlIsQ0FBTixFQUFRO0FBQUMsY0FBTWhDLEdBQUcsR0FBQyxJQUFJdUIsS0FBSixDQUFVLHdCQUFWLENBQVY7QUFBOEN2QixXQUFHLENBQUNzZ0IsSUFBSixHQUFTLGVBQVQ7QUFBeUIsY0FBTXRnQixHQUFOO0FBQVc7QUFBQyxLQUF2Sjs7QUFBd0osVUFBTXFULE1BQU0sR0FBQyxFQUFiO0FBQWdCeFIsVUFBTSxDQUFDQyxJQUFQLENBQVlvUixNQUFaLEVBQW9CblIsT0FBcEIsQ0FBNEJ3ZSxRQUFRLElBQUU7QUFBQyxZQUFNQyxDQUFDLEdBQUN0TixNQUFNLENBQUNxTixRQUFELENBQWQ7QUFBeUIsWUFBTUUsQ0FBQyxHQUFDbkcsVUFBVSxDQUFDa0csQ0FBQyxDQUFDRSxHQUFILENBQWxCOztBQUEwQixVQUFHRCxDQUFDLEtBQUd0UyxTQUFQLEVBQWlCO0FBQUNrRixjQUFNLENBQUNrTixRQUFELENBQU4sR0FBaUIsQ0FBQ0UsQ0FBQyxDQUFDdmYsT0FBRixDQUFVLEdBQVYsQ0FBRCxHQUFnQnVmLENBQUMsQ0FBQzNRLEtBQUYsQ0FBUSxHQUFSLEVBQWFwSixHQUFiLENBQWlCRSxLQUFLLElBQUV3WixNQUFNLENBQUN4WixLQUFELENBQTlCLENBQWhCLEdBQXVENFosQ0FBQyxDQUFDaE4sTUFBRixHQUFTLENBQUM0TSxNQUFNLENBQUNLLENBQUQsQ0FBUCxDQUFULEdBQXFCTCxNQUFNLENBQUNLLENBQUQsQ0FBbkc7QUFBd0c7QUFBQyxLQUFyTjtBQUF1TixXQUFPcE4sTUFBUDtBQUFlLEdBQWplO0FBQW1lLEM7Ozs7Ozs7Ozs7O0FDQXBtQjs7QUFBQWxVLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxxQkFBQSxHQUFzQjZULGFBQXRCLEMsQ0FBb0M7QUFDekU7O0FBQ0EsU0FBUzJOLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQXlCO0FBQUMsU0FBT0EsR0FBRyxDQUFDL2YsT0FBSixDQUFZLHNCQUFaLEVBQW1DLE1BQW5DLENBQVA7QUFBbUQ7O0FBQUEsU0FBU2dnQixjQUFULENBQXdCdE4sS0FBeEIsRUFBOEI7QUFBQyxRQUFNRSxRQUFRLEdBQUNGLEtBQUssQ0FBQ3RCLFVBQU4sQ0FBaUIsR0FBakIsS0FBdUJzQixLQUFLLENBQUNyTyxRQUFOLENBQWUsR0FBZixDQUF0Qzs7QUFBMEQsTUFBR3VPLFFBQUgsRUFBWTtBQUFDRixTQUFLLEdBQUNBLEtBQUssQ0FBQ3BPLEtBQU4sQ0FBWSxDQUFaLEVBQWMsQ0FBQyxDQUFmLENBQU47QUFBeUI7O0FBQUEsUUFBTXFPLE1BQU0sR0FBQ0QsS0FBSyxDQUFDdEIsVUFBTixDQUFpQixLQUFqQixDQUFiOztBQUFxQyxNQUFHdUIsTUFBSCxFQUFVO0FBQUNELFNBQUssR0FBQ0EsS0FBSyxDQUFDcE8sS0FBTixDQUFZLENBQVosQ0FBTjtBQUFzQjs7QUFBQSxTQUFNO0FBQUMzRCxPQUFHLEVBQUMrUixLQUFMO0FBQVdDLFVBQVg7QUFBa0JDO0FBQWxCLEdBQU47QUFBbUM7O0FBQUEsU0FBU1QsYUFBVCxDQUF1QjhOLGVBQXZCLEVBQXVDO0FBQUMsUUFBTUMsUUFBUSxHQUFDLENBQUNELGVBQWUsQ0FBQ2pnQixPQUFoQixDQUF3QixLQUF4QixFQUE4QixFQUE5QixLQUFtQyxHQUFwQyxFQUF5Q3NFLEtBQXpDLENBQStDLENBQS9DLEVBQWtEMkssS0FBbEQsQ0FBd0QsR0FBeEQsQ0FBZjtBQUE0RSxRQUFNb0QsTUFBTSxHQUFDLEVBQWI7QUFBZ0IsTUFBSThOLFVBQVUsR0FBQyxDQUFmO0FBQWlCLFFBQU1DLGtCQUFrQixHQUFDRixRQUFRLENBQUNyYSxHQUFULENBQWFpTixPQUFPLElBQUU7QUFBQyxRQUFHQSxPQUFPLENBQUMxQixVQUFSLENBQW1CLEdBQW5CLEtBQXlCMEIsT0FBTyxDQUFDek8sUUFBUixDQUFpQixHQUFqQixDQUE1QixFQUFrRDtBQUFDLFlBQUs7QUFBQzFELFdBQUQ7QUFBS2lTLGdCQUFMO0FBQWNEO0FBQWQsVUFBc0JxTixjQUFjLENBQUNsTixPQUFPLENBQUN4TyxLQUFSLENBQWMsQ0FBZCxFQUFnQixDQUFDLENBQWpCLENBQUQsQ0FBekM7QUFBK0QrTixZQUFNLENBQUMxUixHQUFELENBQU4sR0FBWTtBQUFDa2YsV0FBRyxFQUFDTSxVQUFVLEVBQWY7QUFBa0J4TixjQUFsQjtBQUF5QkM7QUFBekIsT0FBWjtBQUErQyxhQUFPRCxNQUFNLEdBQUNDLFFBQVEsR0FBQyxhQUFELEdBQWUsUUFBeEIsR0FBaUMsV0FBOUM7QUFBMkQsS0FBNU4sTUFBZ087QUFBQyxhQUFPLElBQUdrTixXQUFXLENBQUNoTixPQUFELENBQVUsRUFBL0I7QUFBa0M7QUFBQyxHQUEzUixFQUE2UnpELElBQTdSLENBQWtTLEVBQWxTLENBQXpCLENBQTlHLENBQTZhO0FBQ3p3Qjs7QUFDQSxZQUErQjtBQUFDLFFBQUlnUixnQkFBZ0IsR0FBQyxFQUFyQjtBQUF3QixRQUFJQyxrQkFBa0IsR0FBQyxDQUF2QixDQUF6QixDQUFrRDs7QUFDakYsVUFBTUMsZUFBZSxHQUFDLE1BQUk7QUFBQyxVQUFJQyxRQUFRLEdBQUMsRUFBYjs7QUFBZ0IsV0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNILGtCQUFkLEVBQWlDRyxDQUFDLEVBQWxDLEVBQXFDO0FBQUNELGdCQUFRLElBQUVqQyxNQUFNLENBQUNtQyxZQUFQLENBQW9CTCxnQkFBcEIsQ0FBVjtBQUFnREEsd0JBQWdCOztBQUFHLFlBQUdBLGdCQUFnQixHQUFDLEdBQXBCLEVBQXdCO0FBQUNDLDRCQUFrQjtBQUFHRCwwQkFBZ0IsR0FBQyxFQUFqQjtBQUFxQjtBQUFDOztBQUFBLGFBQU9HLFFBQVA7QUFBaUIsS0FBek87O0FBQTBPLFVBQU1HLFNBQVMsR0FBQyxFQUFoQjtBQUFtQixRQUFJQyx1QkFBdUIsR0FBQ1YsUUFBUSxDQUFDcmEsR0FBVCxDQUFhaU4sT0FBTyxJQUFFO0FBQUMsVUFBR0EsT0FBTyxDQUFDMUIsVUFBUixDQUFtQixHQUFuQixLQUF5QjBCLE9BQU8sQ0FBQ3pPLFFBQVIsQ0FBaUIsR0FBakIsQ0FBNUIsRUFBa0Q7QUFBQyxjQUFLO0FBQUMxRCxhQUFEO0FBQUtpUyxrQkFBTDtBQUFjRDtBQUFkLFlBQXNCcU4sY0FBYyxDQUFDbE4sT0FBTyxDQUFDeE8sS0FBUixDQUFjLENBQWQsRUFBZ0IsQ0FBQyxDQUFqQixDQUFELENBQXpDLENBQUQsQ0FBZ0U7QUFDbGE7O0FBQ0EsWUFBSXVjLFVBQVUsR0FBQ2xnQixHQUFHLENBQUNYLE9BQUosQ0FBWSxLQUFaLEVBQWtCLEVBQWxCLENBQWY7QUFBcUMsWUFBSThnQixVQUFVLEdBQUMsS0FBZixDQUY2VCxDQUV4UztBQUMxRDs7QUFDQSxZQUFHRCxVQUFVLENBQUNyUCxNQUFYLEtBQW9CLENBQXBCLElBQXVCcVAsVUFBVSxDQUFDclAsTUFBWCxHQUFrQixFQUE1QyxFQUErQztBQUFDc1Asb0JBQVUsR0FBQyxJQUFYO0FBQWlCOztBQUFBLFlBQUcsQ0FBQy9CLEtBQUssQ0FBQ2dDLFFBQVEsQ0FBQ0YsVUFBVSxDQUFDcEMsTUFBWCxDQUFrQixDQUFsQixFQUFvQixDQUFwQixDQUFELENBQVQsQ0FBVCxFQUE0QztBQUFDcUMsb0JBQVUsR0FBQyxJQUFYO0FBQWlCOztBQUFBLFlBQUdBLFVBQUgsRUFBYztBQUFDRCxvQkFBVSxHQUFDTixlQUFlLEVBQTFCO0FBQThCOztBQUFBSSxpQkFBUyxDQUFDRSxVQUFELENBQVQsR0FBc0JsZ0IsR0FBdEI7QUFBMEIsZUFBT2dTLE1BQU0sR0FBQ0MsUUFBUSxHQUFFLFVBQVNpTyxVQUFXLFNBQXRCLEdBQWdDLE9BQU1BLFVBQVcsT0FBMUQsR0FBa0UsT0FBTUEsVUFBVyxVQUFoRztBQUEyRyxPQUpELE1BSUs7QUFBQyxlQUFPLElBQUdmLFdBQVcsQ0FBQ2hOLE9BQUQsQ0FBVSxFQUEvQjtBQUFrQztBQUFDLEtBSmhFLEVBSWtFekQsSUFKbEUsQ0FJdUUsRUFKdkUsQ0FBNUI7QUFJdUcsV0FBTTtBQUFDb0YsUUFBRSxFQUFDLElBQUl1TSxNQUFKLENBQVksSUFBR1osa0JBQW1CLFNBQWxDLENBQUo7QUFBZ0QvTixZQUFoRDtBQUF1RHNPLGVBQXZEO0FBQWlFTSxnQkFBVSxFQUFFLElBQUdMLHVCQUF3QjtBQUF4RyxLQUFOO0FBQXlIOztBQUFBLFNBQU07QUFBQ25NLE1BQUUsRUFBQyxJQUFJdU0sTUFBSixDQUFZLElBQUdaLGtCQUFtQixTQUFsQyxDQUFKO0FBQWdEL047QUFBaEQsR0FBTjtBQUErRCxDOzs7Ozs7Ozs7OztBQ1QvZ0I7O0FBQUEvVCxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsZ0JBQUEsR0FBaUI0aUIsUUFBakI7QUFBMEI1aUIseUJBQUEsR0FBMEJxVCxpQkFBMUI7QUFBNENyVCxjQUFBLEdBQWU0WSxNQUFmO0FBQXNCNVksc0JBQUEsR0FBdUI2aUIsY0FBdkI7QUFBc0M3aUIsaUJBQUEsR0FBa0I4aUIsU0FBbEI7QUFBNEI5aUIsMkJBQUEsR0FBNEI2ZSxtQkFBNUI7QUFBZ0Q3ZSw0QkFBQSxHQUE2QmdWLG9CQUE3QjtBQUFrRGhWLFVBQUEsR0FBV0EsVUFBQSxHQUFXQSxxQkFBQSxHQUFzQixLQUFLLENBQWpEOztBQUFtRCxJQUFJK2lCLFVBQVUsR0FBQ2hqQixtQkFBTyxDQUFDLHNHQUFELENBQXRCO0FBQW9EO0FBQzVZO0FBQ0E7OztBQUFHLFNBQVM2aUIsUUFBVCxDQUFrQmhYLEVBQWxCLEVBQXFCO0FBQUMsTUFBSW9YLElBQUksR0FBQyxLQUFUO0FBQWUsTUFBSTNqQixNQUFKO0FBQVcsU0FBTSxDQUFDLEdBQUc4QyxJQUFKLEtBQVc7QUFBQyxRQUFHLENBQUM2Z0IsSUFBSixFQUFTO0FBQUNBLFVBQUksR0FBQyxJQUFMO0FBQVUzakIsWUFBTSxHQUFDdU0sRUFBRSxDQUFDLEdBQUd6SixJQUFKLENBQVQ7QUFBb0I7O0FBQUEsV0FBTzlDLE1BQVA7QUFBZSxHQUF6RTtBQUEyRTs7QUFBQSxTQUFTZ1UsaUJBQVQsR0FBNEI7QUFBQyxRQUFLO0FBQUN5TSxZQUFEO0FBQVVELFlBQVY7QUFBbUJHO0FBQW5CLE1BQXlCdGdCLE1BQU0sQ0FBQ2dhLFFBQXJDO0FBQThDLFNBQU8sR0FBRW9HLFFBQVMsS0FBSUQsUUFBUyxHQUFFRyxJQUFJLEdBQUMsTUFBSUEsSUFBTCxHQUFVLEVBQUcsRUFBbEQ7QUFBcUQ7O0FBQUEsU0FBU3BILE1BQVQsR0FBaUI7QUFBQyxRQUFLO0FBQUNwWTtBQUFELE1BQU9kLE1BQU0sQ0FBQ2dhLFFBQW5CO0FBQTRCLFFBQU1sRyxNQUFNLEdBQUNILGlCQUFpQixFQUE5QjtBQUFpQyxTQUFPN1MsSUFBSSxDQUFDc04sU0FBTCxDQUFlMEYsTUFBTSxDQUFDTixNQUF0QixDQUFQO0FBQXNDOztBQUFBLFNBQVMyUCxjQUFULENBQXdCcEwsU0FBeEIsRUFBa0M7QUFBQyxTQUFPLE9BQU9BLFNBQVAsS0FBbUIsUUFBbkIsR0FBNEJBLFNBQTVCLEdBQXNDQSxTQUFTLENBQUNuSCxXQUFWLElBQXVCbUgsU0FBUyxDQUFDcEgsSUFBakMsSUFBdUMsU0FBcEY7QUFBK0Y7O0FBQUEsU0FBU3lTLFNBQVQsQ0FBbUJuYSxHQUFuQixFQUF1QjtBQUFDLFNBQU9BLEdBQUcsQ0FBQ3NhLFFBQUosSUFBY3RhLEdBQUcsQ0FBQ3VhLFdBQXpCO0FBQXNDOztBQUFBLGVBQWVyRSxtQkFBZixDQUFtQ3RILEdBQW5DLEVBQXVDb0gsR0FBdkMsRUFBMkM7QUFBQyxZQUF1QztBQUFDLFFBQUl3RSxjQUFKOztBQUFtQixRQUFHLENBQUNBLGNBQWMsR0FBQzVMLEdBQUcsQ0FBQytILFNBQXBCLEtBQWdDLElBQWhDLElBQXNDNkQsY0FBYyxDQUFDaFQsZUFBeEQsRUFBd0U7QUFBQyxZQUFNbkMsT0FBTyxHQUFFLElBQUc2VSxjQUFjLENBQUN0TCxHQUFELENBQU0sNkpBQXRDO0FBQW1NLFlBQU0sSUFBSW5WLEtBQUosQ0FBVTRMLE9BQVYsQ0FBTjtBQUEwQjtBQUFDLEdBQW5XLENBQW1XOzs7QUFDajhCLFFBQU1yRixHQUFHLEdBQUNnVyxHQUFHLENBQUNoVyxHQUFKLElBQVNnVyxHQUFHLENBQUNBLEdBQUosSUFBU0EsR0FBRyxDQUFDQSxHQUFKLENBQVFoVyxHQUFwQzs7QUFBd0MsTUFBRyxDQUFDNE8sR0FBRyxDQUFDcEgsZUFBUixFQUF3QjtBQUFDLFFBQUd3TyxHQUFHLENBQUNBLEdBQUosSUFBU0EsR0FBRyxDQUFDbEgsU0FBaEIsRUFBMEI7QUFBQztBQUM1RixhQUFNO0FBQUNrRSxpQkFBUyxFQUFDLE1BQU1rRCxtQkFBbUIsQ0FBQ0YsR0FBRyxDQUFDbEgsU0FBTCxFQUFla0gsR0FBRyxDQUFDQSxHQUFuQjtBQUFwQyxPQUFOO0FBQW9FOztBQUFBLFdBQU0sRUFBTjtBQUFVOztBQUFBLFFBQU0xYyxLQUFLLEdBQUMsTUFBTXNWLEdBQUcsQ0FBQ3BILGVBQUosQ0FBb0J3TyxHQUFwQixDQUFsQjs7QUFBMkMsTUFBR2hXLEdBQUcsSUFBRW1hLFNBQVMsQ0FBQ25hLEdBQUQsQ0FBakIsRUFBdUI7QUFBQyxXQUFPMUcsS0FBUDtBQUFjOztBQUFBLE1BQUcsQ0FBQ0EsS0FBSixFQUFVO0FBQUMsVUFBTStMLE9BQU8sR0FBRSxJQUFHNlUsY0FBYyxDQUFDdEwsR0FBRCxDQUFNLCtEQUE4RHRWLEtBQU0sWUFBMUc7QUFBc0gsVUFBTSxJQUFJRyxLQUFKLENBQVU0TCxPQUFWLENBQU47QUFBMEI7O0FBQUEsWUFBdUM7QUFBQyxRQUFHdEwsTUFBTSxDQUFDQyxJQUFQLENBQVlWLEtBQVosRUFBbUJpUixNQUFuQixLQUE0QixDQUE1QixJQUErQixDQUFDeUwsR0FBRyxDQUFDQSxHQUF2QyxFQUEyQztBQUFDbmYsYUFBTyxDQUFDOEQsSUFBUixDQUFjLEdBQUV1ZixjQUFjLENBQUN0TCxHQUFELENBQU0saUxBQXBDO0FBQXVOO0FBQUM7O0FBQUEsU0FBT3RWLEtBQVA7QUFBYzs7QUFBQSxNQUFNbWhCLGFBQWEsR0FBQyxDQUFDLE1BQUQsRUFBUSxNQUFSLEVBQWUsTUFBZixFQUFzQixVQUF0QixFQUFpQyxNQUFqQyxFQUF3QyxNQUF4QyxFQUErQyxVQUEvQyxFQUEwRCxNQUExRCxFQUFpRSxVQUFqRSxFQUE0RSxPQUE1RSxFQUFvRixRQUFwRixFQUE2RixTQUE3RixDQUFwQjtBQUE0SHBqQixxQkFBQSxHQUFzQm9qQixhQUF0Qjs7QUFBb0MsU0FBU3BPLG9CQUFULENBQThCN0IsR0FBOUIsRUFBa0M7QUFBQyxZQUF3QztBQUFDLFFBQUdBLEdBQUcsS0FBRyxJQUFOLElBQVksT0FBT0EsR0FBUCxLQUFhLFFBQTVCLEVBQXFDO0FBQUN6USxZQUFNLENBQUNDLElBQVAsQ0FBWXdRLEdBQVosRUFBaUJ2USxPQUFqQixDQUF5QlAsR0FBRyxJQUFFO0FBQUMsWUFBRytnQixhQUFhLENBQUNyaEIsT0FBZCxDQUFzQk0sR0FBdEIsTUFBNkIsQ0FBQyxDQUFqQyxFQUFtQztBQUFDN0MsaUJBQU8sQ0FBQzhELElBQVIsQ0FBYyxxREFBb0RqQixHQUFJLEVBQXRFO0FBQTBFO0FBQUMsT0FBOUk7QUFBaUo7QUFBQzs7QUFBQSxTQUFNLENBQUMsR0FBRTBnQixVQUFVLENBQUNqRSxTQUFkLEVBQXlCM0wsR0FBekIsQ0FBTjtBQUFxQzs7QUFBQSxNQUFNa1EsRUFBRSxHQUFDLE9BQU9oSixXQUFQLEtBQXFCLFdBQTlCO0FBQTBDcmEsVUFBQSxHQUFXcWpCLEVBQVg7QUFBYyxNQUFNakosRUFBRSxHQUFDaUosRUFBRSxJQUFFLE9BQU9oSixXQUFXLENBQUNDLElBQW5CLEtBQTBCLFVBQTlCLElBQTBDLE9BQU9ELFdBQVcsQ0FBQ2lKLE9BQW5CLEtBQTZCLFVBQWhGO0FBQTJGdGpCLFVBQUEsR0FBV29hLEVBQVgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0podEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVlLFNBQVNtSixPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUNsQyxRQUFNO0FBQUV6bEIsWUFBRjtBQUFZMGxCO0FBQVosTUFBOEJDLCtEQUFXLENBQUMsUUFBRCxDQUEvQztBQUNBLFFBQU1uakIsTUFBTSxHQUFHaUQsc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ3RGLE9BQUQ7QUFBQSxPQUFVeWxCO0FBQVYsTUFBd0JubUIsK0NBQVEsQ0FBQyxDQUFDLENBQUYsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ29tQixJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQnJtQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3NtQixTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QnZtQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ3dtQixXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ3ptQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ3VCLEtBQUQ7QUFBQSxPQUFRbWxCO0FBQVIsTUFBb0IxbUIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUMybUIsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0I1bUIsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUM2bUIsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0I5bUIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUMrbUIsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJobkIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNpbkIsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JsbkIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNtbkIsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NwbkIsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNxbkIsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0J0bkIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUN1bkIsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJ4bkIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUN5bkIsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEIxbkIsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBRUEsUUFBTTtBQUFBLE9BQUMybkIsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEI1bkIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUM2bkIsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEI5bkIsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBRUEsUUFBTStuQixTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQzdDQyx5QkFBcUIsRUFBRSxDQURzQjtBQUU3Q0MseUJBQXFCLEVBQUU7QUFGc0IsR0FBL0IsQ0FBbEI7O0FBS0EsV0FBU0MsUUFBVCxDQUFrQkMsUUFBbEIsRUFBNEI7QUFDeEIsUUFBSUMsQ0FBQyxHQUFHLElBQUlqbkIsSUFBSixDQUFTZ25CLFFBQVQsRUFBbUJFLE9BQW5CLEVBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUcsSUFBSW5uQixJQUFKLEdBQVdrbkIsT0FBWCxFQUFSO0FBQ0EsUUFBSUUsQ0FBQyxHQUFHSCxDQUFDLEdBQUdFLENBQVo7QUFDQSxRQUFJRSxFQUFFLEdBQUd2ZixJQUFJLENBQUN3ZixLQUFMLENBQVdGLENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQVosQ0FBVDtBQUNBLFFBQUlHLENBQUMsR0FBR3pmLElBQUksQ0FBQ3dmLEtBQUwsQ0FBWUYsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBRixJQUErQixPQUFPLEVBQVAsR0FBWSxFQUEzQyxDQUFYLENBQVI7QUFDQSxRQUFJM0UsQ0FBQyxHQUFHM2EsSUFBSSxDQUFDd2YsS0FBTCxDQUFZRixDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBRixJQUEwQixPQUFPLEVBQWpDLENBQVgsQ0FBUjtBQUNBLFFBQUlJLENBQUMsR0FBRzFmLElBQUksQ0FBQ3dmLEtBQUwsQ0FBWUYsQ0FBQyxJQUFJLE9BQU8sRUFBWCxDQUFGLEdBQW9CLElBQS9CLENBQVI7QUFDQSxXQUFRQyxFQUFFLENBQUNJLFFBQUgsS0FBZ0IsUUFBaEIsR0FBMkJGLENBQUMsQ0FBQ0UsUUFBRixFQUEzQixHQUEwQyxTQUExQyxHQUFzRGhGLENBQUMsQ0FBQ2dGLFFBQUYsRUFBdEQsR0FBcUUsV0FBckUsR0FBbUZELENBQUMsQ0FBQ0MsUUFBRixFQUFuRixHQUFrRyxVQUExRztBQUNIOztBQUNELFdBQVNDLFdBQVQsQ0FBcUJWLFFBQXJCLEVBQStCO0FBQzNCLFFBQUlDLENBQUMsR0FBRyxJQUFJam5CLElBQUosQ0FBU2duQixRQUFULEVBQW1CRSxPQUFuQixFQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLElBQUlubkIsSUFBSixHQUFXa25CLE9BQVgsRUFBUjtBQUNBLFFBQUlFLENBQUMsR0FBR0gsQ0FBQyxHQUFHRSxDQUFaO0FBQ0EsUUFBSUUsRUFBRSxHQUFHdmYsSUFBSSxDQUFDd2YsS0FBTCxDQUFXRixDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFaLENBQVQ7QUFDQSxRQUFJRyxDQUFDLEdBQUd6ZixJQUFJLENBQUN3ZixLQUFMLENBQVlGLENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQUYsSUFBK0IsT0FBTyxFQUFQLEdBQVksRUFBM0MsQ0FBWCxDQUFSO0FBQ0EsUUFBSTNFLENBQUMsR0FBRzNhLElBQUksQ0FBQ3dmLEtBQUwsQ0FBWUYsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQUYsSUFBMEIsT0FBTyxFQUFqQyxDQUFYLENBQVI7QUFDQSxRQUFJSSxDQUFDLEdBQUcxZixJQUFJLENBQUN3ZixLQUFMLENBQVlGLENBQUMsSUFBSSxPQUFPLEVBQVgsQ0FBRixHQUFvQixJQUEvQixDQUFSO0FBQ0EsV0FBUUMsRUFBRSxDQUFDSSxRQUFILEtBQWdCLElBQWhCLEdBQXVCRixDQUFDLENBQUNFLFFBQUYsRUFBdkIsR0FBc0MsSUFBdEMsR0FBNkNoRixDQUFDLENBQUNnRixRQUFGLEVBQTdDLEdBQTRELElBQTVELEdBQW1FRCxDQUFDLENBQUNDLFFBQUYsRUFBbkUsR0FBa0YsR0FBMUY7QUFDSDs7QUFDRCxpQkFBZUUsaUJBQWYsR0FBbUM7QUFDL0IsUUFBSTtBQUNBLFlBQU07QUFBRW5wQjtBQUFGLFVBQVNrRCxNQUFNLENBQUNtVCxLQUF0Qjs7QUFDQSxVQUFJM1YsUUFBUSxJQUFJVixFQUFoQixFQUFvQjtBQUNoQnNtQixrQkFBVSxDQUFDdG1CLEVBQUQsQ0FBVjtBQUNBLGNBQU1DLEtBQUssR0FBRyxNQUFNUyxRQUFRLENBQUMwb0IsUUFBVCxDQUFrQnBwQixFQUFsQixDQUFwQjtBQUNBLGNBQU1xcEIsR0FBRyxHQUFHLEVBQVo7QUFDQSxjQUFNQyxXQUFXLEdBQUcsTUFBTTVvQixRQUFRLENBQUM2b0Isd0JBQVQsQ0FBa0N2cEIsRUFBbEMsQ0FBMUI7O0FBQ0EsYUFBSyxJQUFJOGtCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd4akIsTUFBTSxDQUFDLEVBQUQsQ0FBMUIsRUFBZ0N3akIsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQyxnQkFBTTVQLEdBQUcsR0FBRyxNQUFNb1UsV0FBVyxDQUFDeEUsQ0FBRCxDQUE3QjtBQUVBLGdCQUFNMEUsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsY0FBSTtBQUFFQSxrQkFBTSxHQUFHLE1BQU1wb0IsSUFBSSxDQUFDQyxLQUFMLENBQVc2VCxHQUFYLENBQWY7QUFBZ0MsV0FBdEMsQ0FBdUMsTUFBTSxDQUFHOztBQUNoRCxjQUFJc1UsTUFBTSxDQUFDOW5CLEtBQVgsRUFBa0I7QUFDZCxnQkFBSStuQixTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsZ0JBQUk7QUFBRUEsdUJBQVMsR0FBR3ZCLFNBQVMsQ0FBQ3dCLE1BQVYsQ0FBaUJwb0IsTUFBTSxDQUFDa29CLE1BQU0sQ0FBQzduQixVQUFQLENBQWtCZ29CLEtBQWxCLENBQXdCOW5CLFdBQXhCLEdBQXNDLE9BQXZDLENBQXZCLENBQVo7QUFBcUYsYUFBM0YsQ0FBNEYsT0FBTytuQixFQUFQLEVBQVcsQ0FBRzs7QUFDMUcsa0JBQU1DLE9BQU8sR0FBR3ZvQixNQUFNLENBQUMsTUFBTVosUUFBUSxDQUFDb3BCLGVBQVQsQ0FBeUI1VSxHQUF6QixDQUFQLENBQXRCO0FBQ0EvUyxtQkFBTyxDQUFDQyxHQUFSLENBQVl5bkIsT0FBWjtBQUNBUixlQUFHLENBQUN2VixJQUFKLENBQVM7QUFDTGlXLGdCQUFFLEVBQUVGLE9BREM7QUFFTDdXLGtCQUFJLEVBQUV3VyxNQUFNLENBQUM3bkIsVUFBUCxDQUFrQnFSLElBQWxCLENBQXVCblIsV0FGeEI7QUFHTEEseUJBQVcsRUFBRTJuQixNQUFNLENBQUM3bkIsVUFBUCxDQUFrQkUsV0FBbEIsQ0FBOEJBLFdBSHRDO0FBSUxtb0Isc0JBQVEsRUFBRVAsU0FKTDtBQUtMRSxtQkFBSyxFQUFFcm9CLE1BQU0sQ0FBQ2tvQixNQUFNLENBQUM3bkIsVUFBUCxDQUFrQmdvQixLQUFsQixDQUF3QjluQixXQUF6QixDQUxSO0FBTUwvQixrQkFBSSxFQUFFMHBCLE1BQU0sQ0FBQzduQixVQUFQLENBQWtCc29CLE9BQWxCLENBQTBCcG9CLFdBTjNCO0FBT0xxb0IsbUJBQUssRUFBRVYsTUFBTSxDQUFDN25CLFVBQVAsQ0FBa0J1b0IsS0FBbEIsQ0FBd0Jyb0I7QUFQMUIsYUFBVDtBQVNIO0FBRUo7O0FBRUQya0IsZUFBTyxDQUFDNkMsR0FBRCxDQUFQO0FBQ0EsWUFBSS9tQixRQUFRLENBQUNxZSxjQUFULENBQXdCLFNBQXhCLENBQUosRUFDSXJlLFFBQVEsQ0FBQ3FlLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUN3SixLQUFuQyxHQUEyQyxjQUEzQztBQUdKcEMsbUJBQVcsQ0FBQzluQixLQUFELENBQVg7QUFFQSxjQUFNdXBCLE1BQU0sR0FBR3BvQixJQUFJLENBQUNDLEtBQUwsQ0FBV3BCLEtBQVgsQ0FBZjtBQUNBNG1CLGdCQUFRLENBQUMyQyxNQUFNLENBQUM3bkIsVUFBUCxDQUFrQnlvQixLQUFsQixDQUF3QnZvQixXQUF6QixDQUFSO0FBQ0FrbEIsa0JBQVUsQ0FBQ21CLFNBQVMsQ0FBQ3dCLE1BQVYsQ0FBaUJwb0IsTUFBTSxDQUFDa29CLE1BQU0sQ0FBQzduQixVQUFQLENBQWtCMG9CLElBQWxCLENBQXVCeG9CLFdBQXZCLEdBQXFDLE9BQXRDLENBQXZCLENBQUQsQ0FBVjtBQUNBb2xCLGVBQU8sQ0FBQzNsQixNQUFNLENBQUNrb0IsTUFBTSxDQUFDN25CLFVBQVAsQ0FBa0Iwb0IsSUFBbEIsQ0FBdUJ4b0IsV0FBeEIsQ0FBUCxDQUFQO0FBQ0FzbEIsbUJBQVcsQ0FBQ29CLFFBQVEsQ0FBQ2lCLE1BQU0sQ0FBQzduQixVQUFQLENBQWtCSCxJQUFsQixDQUF1QkssV0FBeEIsQ0FBVCxDQUFYO0FBQ0F3bEIsZUFBTyxDQUFDbUMsTUFBTSxDQUFDN25CLFVBQVAsQ0FBa0JILElBQWxCLENBQXVCSyxXQUF4QixDQUFQO0FBQ0EwbEIsc0JBQWMsQ0FBQzJCLFdBQVcsQ0FBQ00sTUFBTSxDQUFDN25CLFVBQVAsQ0FBa0JILElBQWxCLENBQXVCSyxXQUF4QixDQUFaLENBQWQ7QUFDQTRsQixlQUFPLENBQUMrQixNQUFNLENBQUM3bkIsVUFBUCxDQUFrQjZsQixJQUFsQixDQUF1QjNsQixXQUF4QixDQUFQO0FBQ0E2a0Isb0JBQVksQ0FBQyxNQUFNaG1CLFFBQVEsQ0FBQ3NTLElBQVQsRUFBUCxDQUFaO0FBQ0E0VCxzQkFBYyxDQUFDLE1BQU1sbUIsUUFBUSxDQUFDNHBCLE1BQVQsRUFBUCxDQUFkO0FBRUg7QUFDSixLQWpERCxDQWlERSxPQUFPN2IsS0FBUCxFQUFjO0FBQ1p0TSxhQUFPLENBQUNzTSxLQUFSLENBQWNBLEtBQWQ7QUFDSDtBQUNKOztBQUNEbkgsa0RBQVMsQ0FBQyxNQUFNO0FBQ1o2aEIscUJBQWlCO0FBRXBCLEdBSFEsRUFHTixDQUFDam1CLE1BQU0sQ0FBQ21ULEtBQVIsRUFBZTNWLFFBQWYsQ0FITSxDQUFUO0FBS0E2cEIsYUFBVyxDQUFDLFlBQVk7QUFDcEJDLHFCQUFpQjtBQUNwQixHQUZVLEVBRVIsSUFGUSxDQUFYOztBQUtBLFdBQVNBLGlCQUFULEdBQTZCO0FBQ3pCLFFBQUk7QUFDQSxVQUFJQyxRQUFRLEdBQUdub0IsUUFBUSxDQUFDd2UsaUJBQVQsQ0FBMkIsVUFBM0IsQ0FBZjs7QUFDQSxXQUFLLElBQUlnRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMkYsUUFBUSxDQUFDNVUsTUFBN0IsRUFBcUNpUCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFlBQUlzQyxJQUFJLEdBQUlxRCxRQUFRLENBQUMzRixDQUFELENBQVQsQ0FBYzRGLFlBQWQsQ0FBMkIsTUFBM0IsQ0FBWDtBQUNBRCxnQkFBUSxDQUFDM0YsQ0FBRCxDQUFSLENBQVk2RixTQUFaLEdBQXdCcEMsUUFBUSxDQUFDbkIsSUFBRCxDQUFoQztBQUNIOztBQUNELFVBQUlxRCxRQUFRLEdBQUdub0IsUUFBUSxDQUFDd2UsaUJBQVQsQ0FBMkIsTUFBM0IsQ0FBZjs7QUFDQSxXQUFLLElBQUlnRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMkYsUUFBUSxDQUFDNVUsTUFBN0IsRUFBcUNpUCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFlBQUlzQyxJQUFJLEdBQUlxRCxRQUFRLENBQUMzRixDQUFELENBQVQsQ0FBYzRGLFlBQWQsQ0FBMkIsTUFBM0IsQ0FBWDtBQUNBRCxnQkFBUSxDQUFDM0YsQ0FBRCxDQUFSLENBQVk2RixTQUFaLEdBQXdCekIsV0FBVyxDQUFDOUIsSUFBRCxDQUFuQztBQUNIO0FBQ0osS0FYRCxDQVdFLE9BQU8zWSxLQUFQLEVBQWMsQ0FFZjtBQUVKOztBQUlELFdBQVNtYyxtQkFBVCxDQUE2QnZxQixDQUE3QixFQUFnQztBQUM1QnNuQixlQUFXLENBQUN0bkIsQ0FBQyxDQUFDQyxNQUFGLENBQVNvcUIsWUFBVCxDQUFzQixTQUF0QixDQUFELENBQVg7QUFDQTdDLGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FJLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0g7O0FBQ0QsV0FBUzRDLDJCQUFULENBQXFDeHFCLENBQXJDLEVBQXdDO0FBQ3BDc25CLGVBQVcsQ0FBQ3RuQixDQUFDLENBQUNDLE1BQUYsQ0FBU29xQixZQUFULENBQXNCLFNBQXRCLENBQUQsQ0FBWDtBQUNBN0MsaUJBQWEsQ0FBQyxZQUFELENBQWI7QUFDQUksZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBQSxrQkFBUXZtQjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFPSTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDZCQUNJO0FBQUssYUFBSyxFQUFFO0FBQUUscUJBQVc7QUFBYixTQUFaO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLEVBQUU4bEIsSUFBVjtBQUFnQixtQkFBUyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBQSxrQ0FDSTtBQUFBLHNCQUFLOWxCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUdJO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsb0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBLCtCQUFPb2xCLE9BQVAsUUFBa0JFLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFPSTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG1DQUNJO0FBQUksa0JBQUksRUFBQyxVQUFUO0FBQW9CLGtCQUFJLEVBQUVJLElBQTFCO0FBQUEsd0JBQWlDRjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBdUJJO0FBQUssUUFBRSxFQUFDLFNBQVI7QUFBa0IsZUFBUyxFQUFDLGFBQTVCO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJKLEVBMEJLWCxJQUFJLENBQUNyYyxHQUFMLENBQVU0Z0IsUUFBRCxpQkFDTjtBQUF1QixlQUFTLEVBQUMsK0JBQWpDO0FBQUEsNkJBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBRSxxQkFBVztBQUFiLFNBQVo7QUFBQSxtQkFDS0EsUUFBUSxDQUFDaHJCLElBQVQsSUFBaUIsWUFBakIsZ0JBQ0c7QUFBSyxhQUFHLEVBQUVnckIsUUFBUSxDQUFDWixLQUFuQjtBQUEwQixtQkFBUyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREgsZ0JBR0c7QUFBSyxhQUFHLEVBQUVZLFFBQVEsQ0FBQ1osS0FBbkI7QUFBMEIsbUJBQVMsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpSLGVBT0k7QUFBSyxlQUFLLEVBQUU7QUFBRWEsaUJBQUssRUFBRTtBQUFULFdBQVo7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBa0MsaUJBQUssRUFBRTtBQUFFQyxvQkFBTSxFQUFFO0FBQVYsYUFBekM7QUFBQSxvQ0FDSTtBQUFBLHdCQUFLRixRQUFRLENBQUM5WDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFHSTtBQUFJLG1CQUFLLEVBQUU7QUFBRWlZLHFCQUFLLEVBQUU7QUFBVCxlQUFYO0FBQUEsbUNBQW1ESCxRQUFRLENBQUNockIsSUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKLGVBS0k7QUFBSyx1QkFBUyxFQUFDLGVBQWY7QUFBQSxxQ0FDSTtBQUFJLHFCQUFLLEVBQUU7QUFBRW1yQix1QkFBSyxFQUFFO0FBQVQsaUJBQVg7QUFBQSwwQkFBa0NILFFBQVEsQ0FBQ2pwQjtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFVSTtBQUFLLHFCQUFTLEVBQUMsd0JBQWY7QUFBQSxvQ0FDSTtBQUFLLG1CQUFLLEVBQUU7QUFBRWtwQixxQkFBSyxFQUFFO0FBQVQsZUFBWjtBQUFBLHNDQUNJO0FBQUkseUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBSSx5QkFBUyxFQUFDLFVBQWQ7QUFBQSxpQ0FBNEJELFFBQVEsQ0FBQ2QsUUFBckMsUUFBaURjLFFBQVEsQ0FBQ25CLEtBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJO0FBQUksb0JBQUksRUFBQyxNQUFUO0FBQWdCLG9CQUFJLEVBQUV2QyxJQUF0QjtBQUE0Qix5QkFBUyxFQUFDLFdBQXRDO0FBQUEsMEJBQW1ERTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQU1JO0FBQUssdUJBQVMsRUFBQyxpQkFBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxZQUFmO0FBQUEsd0NBQ0ksOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFHLGlCQUFnQndELFFBQVEsQ0FBQ2YsRUFBRyxFQUF6QztBQUFBLHlDQUNJO0FBQUssMkJBQU8sRUFBRWUsUUFBUSxDQUFDZixFQUF2QjtBQUEyQiw2QkFBUyxFQUFDLGtCQUFyQztBQUFBLDJDQUNJO0FBQUssNkJBQU8sRUFBRWUsUUFBUSxDQUFDZixFQUF2QjtBQUEyQiwrQkFBUyxFQUFDLHVCQUFyQztBQUFBLDZDQUNJO0FBQUssK0JBQU8sRUFBRWUsUUFBUSxDQUFDZixFQUF2QjtBQUEyQixpQ0FBUyxFQUFDLHlCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQVNLZSxRQUFRLENBQUNockIsSUFBVCxJQUFpQixZQUFqQixnQkFDRztBQUFLLHlCQUFPLEVBQUVnckIsUUFBUSxDQUFDZixFQUF2QjtBQUEyQix5QkFBTyxFQUFFYywyQkFBcEM7QUFBaUUsMkJBQVMsRUFBQyxrQkFBM0U7QUFBQSx5Q0FDSTtBQUFLLDJCQUFPLEVBQUVDLFFBQVEsQ0FBQ2YsRUFBdkI7QUFBMkIsNkJBQVMsRUFBQyx1QkFBckM7QUFBQSwyQ0FDSTtBQUFLLDZCQUFPLEVBQUVlLFFBQVEsQ0FBQ2YsRUFBdkI7QUFBMkIsK0JBQVMsRUFBQyx5QkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESCxnQkFPRztBQUFLLHlCQUFPLEVBQUVlLFFBQVEsQ0FBQ2YsRUFBdkI7QUFBMkIseUJBQU8sRUFBRWEsbUJBQXBDO0FBQXlELDJCQUFTLEVBQUMsa0JBQW5FO0FBQUEseUNBQ0k7QUFBSywyQkFBTyxFQUFFRSxRQUFRLENBQUNmLEVBQXZCO0FBQTJCLDZCQUFTLEVBQUMsdUJBQXJDO0FBQUEsMkNBQ0k7QUFBSyw2QkFBTyxFQUFFZSxRQUFRLENBQUNmLEVBQXZCO0FBQTJCLCtCQUFTLEVBQUMseUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBaEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixPQUFVZSxRQUFRLENBQUNmLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxDQTFCTCxlQXNGSSw4REFBQyxvRUFBRDtBQUNJLFVBQUksRUFBRS9CLFNBRFY7QUFFSSxZQUFNLEVBQUUsTUFBTTtBQUNWQyxvQkFBWSxDQUFDLEtBQUQsQ0FBWixDQURVLENBRVY7O0FBQ0FrQix5QkFBaUI7QUFDcEIsT0FOTDtBQU9JLGNBQVEsRUFBRXpvQixRQVBkO0FBUUksWUFBTSxFQUFFMGxCLGFBUlo7QUFTSSxhQUFPLEVBQUVzQixRQVRiO0FBVUksbUJBQWEsRUFBRXRCLGFBVm5CO0FBV0ksVUFBSSxFQUFFd0IsVUFYVjtBQVlJLGFBQU8sRUFBRS9tQjtBQVpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0Rko7QUFBQSxrQkFESjtBQXdHSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuUUQ7QUFFQTtBQUVlLFNBQVNxcUIsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDL0MsTUFBSSxDQUFDRCxlQUFlLENBQUNFLFNBQXJCLEVBQWdDO0FBQy9CRixtQkFBZSxDQUFDRSxTQUFoQixHQUE0QixJQUFJQyxtREFBSixDQUMzQkMsa0ZBRDJCLEVBRTNCQSw4RUFGMkIsRUFHM0JILE1BSDJCLENBQTVCO0FBS0E7O0FBRUQsU0FBT0QsZUFBZSxDQUFDRSxTQUF2QjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFDQTtBQUVBO0FBRWUsU0FBUy9FLFdBQVQsQ0FBcUJrRixZQUFyQixFQUFtQztBQUNqRCxRQUFNO0FBQUEsT0FBQ0MsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBMEN0ckIsK0NBQVEsQ0FBQztBQUN4RE8sWUFBUSxFQUFFLElBRDhDO0FBRXhEMGxCLGlCQUFhLEVBQUU7QUFGeUMsR0FBRCxDQUF4RDtBQUtBOWUsa0RBQVMsQ0FBQyxNQUFNO0FBQ2YsVUFBTW9rQixTQUFTLEdBQUcsWUFBWTtBQUM3QixVQUFJO0FBQ0gsY0FBTUMsUUFBUSxHQUFHLElBQUlOLGlFQUFKLENBQWtDaHBCLE1BQU0sQ0FBQ3VwQixRQUF6QyxDQUFqQjtBQUNBLGNBQU1ULE1BQU0sR0FBR1EsUUFBUSxDQUFDRSxTQUFULEVBQWY7QUFDQSxjQUFNbnJCLFFBQVEsR0FBRztBQUFFQSxrQkFBUSxFQUFFLElBQVo7QUFBa0IwbEIsdUJBQWEsRUFBRTtBQUFqQyxTQUFqQixDQUhHLENBS0g7QUFDQTs7QUFDQSxnQkFBUW1GLFlBQVI7QUFDQyxlQUFLLFFBQUw7QUFDQzdxQixvQkFBUSxDQUFDQSxRQUFULEdBQW9Cd3FCLHlEQUFlLENBQUNDLE1BQUQsQ0FBbkM7QUFDQTs7QUFDRDtBQUNDaHBCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBO0FBTkY7O0FBU0ExQixnQkFBUSxDQUFDMGxCLGFBQVQsR0FBeUIsTUFBTStFLE1BQU0sQ0FBQ1csVUFBUCxFQUEvQjtBQUVBTCwyQkFBbUIsQ0FBQy9xQixRQUFELENBQW5CO0FBQ0EsT0FuQkQsQ0FtQkUsT0FBTytOLEtBQVAsRUFBYztBQUNmdE0sZUFBTyxDQUFDc00sS0FBUixDQUFjQSxLQUFkO0FBQ0E7QUFDRCxLQXZCRDs7QUF5QkFpZCxhQUFTO0FBRVRycEIsVUFBTSxDQUFDdXBCLFFBQVAsQ0FBZ0J2YixFQUFoQixDQUFtQixpQkFBbkIsRUFBc0NxYixTQUF0QztBQUNBcnBCLFVBQU0sQ0FBQ3VwQixRQUFQLENBQWdCdmIsRUFBaEIsQ0FBbUIsY0FBbkIsRUFBbUNxYixTQUFuQztBQUVBLFdBQU8sTUFBTTtBQUNacnBCLFlBQU0sQ0FBQ3VwQixRQUFQLENBQWdCRyxjQUFoQixDQUErQixpQkFBL0IsRUFBa0RMLFNBQWxEO0FBQ0FycEIsWUFBTSxDQUFDdXBCLFFBQVAsQ0FBZ0JHLGNBQWhCLENBQStCLGNBQS9CLEVBQStDTCxTQUEvQztBQUNBLEtBSEQ7QUFJQSxHQW5DUSxFQW1DTixFQW5DTSxDQUFUO0FBcUNBLFNBQU9GLGdCQUFQO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNqRFksa0JBQWtCLE1BQU0sd0JBQXdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLGdDQUFnQyxnQ0FBZ0MsbUNBQW1DLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHlCQUF5QixVQUFVO0FBQ3BWLGlEOzs7Ozs7Ozs7O0FDREEseUdBQThDOzs7Ozs7Ozs7OztBQ0E5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHdHQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7OztBQ2hCQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VGb3JtSW5wdXQoeyBkZWZhdWx0VmFsdWUsIHR5cGUsIHBsYWNlaG9sZGVyLCBpZCB9KSB7XG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlIHx8ICcnKTtcblx0Y29uc3QgaW5wdXQgPSAoXG5cdFx0PEZvcm0uQ29udHJvbFxuXHRcdFx0dmFsdWU9e3ZhbHVlIHx8ICcnfVxuXHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHR0eXBlPXt0eXBlfVxuXHRcdFx0aWQ9e2lkfVxuXHRcdC8+XG5cdCk7XG5cdHJldHVybiBbdmFsdWUsIGlucHV0LCBzZXRWYWx1ZV07XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRjb250cmFjdCxcblx0c2VuZGVyQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0ZXZlbnRJZCxcblx0dHlwZVxuXG59KSB7XG5cdGNvbnN0IFtBbW91bnQsIEFtb3VudElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQW1vdW50Jyxcblx0fSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXHRcdGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkodG9rZW5JZCk7XG5cdFx0dmFyIHBhcnNlZCA9IGF3YWl0IEpTT04ucGFyc2UodG9rZW5VcmkpO1xuXHRcdGlmIChOdW1iZXIocGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10pIDwgTnVtYmVyKEFtb3VudCkpIHtcblx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddID0gQW1vdW50O1xuXHRcdFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ2hpZ2hlcmJpZGFkZCddWydkZXNjcmlwdGlvbiddID0gc2VuZGVyQWRkcmVzcztcblxuXHRcdH1cblx0XHRsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHR0aXRsZTogJ0Fzc2V0IE1ldGFkYXRhIEJpZHMnLFxuXHRcdFx0dHlwZTogJ29iamVjdCcsXG5cdFx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdHVzZXJuYW1lOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHNlbmRlckFkZHJlc3Ncblx0XHRcdFx0fSxcblx0XHRcdFx0YmlkOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IEFtb3VudFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aW1lOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IGN1cnJlbnREYXRlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUJpZCh0b2tlbklkLCBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KSwgSlNPTi5zdHJpbmdpZnkocGFyc2VkKSwgZXZlbnRJZCk7XG5cblxuXHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT4pIDogKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0KX1cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxGb3JtPlxuXG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4gRVRIPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXG5cdFx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4pIDogKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbCc7XHJcblxyXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld05GVCh1c2VyKSB7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvYWx1c2QsIHNldGdvYWx1c2RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGVsZWZ0LCBzZXRkYXRlbGVmdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGF0ZSwgc2V0ZGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGF0ZWxlZnRCaWQsIHNldGRhdGVsZWZ0QmlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2dvLCBzZXRsb2dvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdHR5cGUsIHNldHNlbGVjdHR5cGVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtldmVudHVyaSwgc2V0RXZlbnR1cmldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZUJpZChkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICAgICAgICBpZiAoY29udHJhY3QgJiYgaWQpIHtcclxuICAgICAgICAgICAgICAgIHNldEV2ZW50SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjb250cmFjdC5ldmVudFVSSShpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsVG9rZW5zID0gYXdhaXQgY29udHJhY3QuZ2V0dG9rZW5TZWFyY2hFdmVudFRvdGFsKGlkKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtYmVyKDEwKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gYXdhaXQgdG90YWxUb2tlbnNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7IG9iamVjdCA9IGF3YWl0IEpTT04ucGFyc2Uob2JqKSB9IGNhdGNoIHsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlZGVzMSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7IHByaWNlZGVzMSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLnByaWNlLmRlc2NyaXB0aW9uICogMzgxNy4wOSkpIH0gY2F0Y2ggKGV4KSB7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgVG9rZW5JZCA9IE51bWJlcihhd2FpdCBjb250cmFjdC5nZXR0b2tlbklkQnlVcmkob2JqKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFRva2VuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZDogVG9rZW5JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9iamVjdC5wcm9wZXJ0aWVzLm5hbWUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogb2JqZWN0LnByb3BlcnRpZXMuZGVzY3JpcHRpb24uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWRwcmljZTogcHJpY2VkZXMxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IE51bWJlcihvYmplY3QucHJvcGVydGllcy5wcmljZS5kZXNjcmlwdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBvYmplY3QucHJvcGVydGllcy50eXBlaW1nLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG9iamVjdC5wcm9wZXJ0aWVzLmltYWdlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RXZlbnR1cmkodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUob2JqZWN0LnByb3BlcnRpZXMuVGl0bGUuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgc2V0Z29hbHVzZChmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uICogMzgxNy4wOSkpKTtcclxuICAgICAgICAgICAgICAgIHNldGdvYWwoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0KExlZnREYXRlKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgICAgIHNldGRhdGUob2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdEJpZChMZWZ0RGF0ZUJpZChvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRsb2dvKG9iamVjdC5wcm9wZXJ0aWVzLmxvZ28uZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgc2V0VG9rZW5OYW1lKGF3YWl0IGNvbnRyYWN0Lm5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlblN5bWJvbChhd2FpdCBjb250cmFjdC5zeW1ib2woKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xyXG5cclxuICAgIH0sIFtyb3V0ZXIucXVlcnksIGNvbnRyYWN0XSk7XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGVCaWQoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRORlRNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XHJcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcclxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZENyeXB0b3B1bmtUTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJDcnlwdG9wdW5rXCIpO1xyXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IEV2ZW50Q29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cIkF1Y3Rpb25JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57dGl0bGV9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Hb2FsOiA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiQge2dvYWx1c2R9ICh7Z29hbH0gRVRIKTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgbmFtZT0nZGF0ZWxlZnQnIGRhdGU9e2RhdGV9PntkYXRlbGVmdH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwicm93IEVsZW1lbnRzQ29udGFpbmVyIGJnV2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnR5cGUgPT0gXCJDcnlwdG9wdW5rXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZSBwaXhlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogXCI1cHhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntsaXN0SXRlbS5uYW1lfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTM5LCAxMzksIDEzOSlcIiB9fT5UeXBlOiB7bGlzdEl0ZW0udHlwZX08L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiM4QjhCOEJcIiB9fT57bGlzdEl0ZW0uZGVzY3JpcHRpb259PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0VsZW1lbnRCb3R0b21Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTE2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPkN1cnJlbnQgYmlkPC9oNz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlfSAoe2xpc3RJdGVtLnByaWNlfSBFVEgpPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IG5hbWU9XCJkYXRlXCIgZGF0ZT17ZGF0ZX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+e2RhdGVsZWZ0QmlkfTwvaDc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZEFsbGNvbnRhaW5lcicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkc2J1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RvbmF0aW9uL2JpZC8ke2xpc3RJdGVtLklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPlZpZXc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnR5cGUgPT0gXCJDcnlwdG9wdW5rXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gb25DbGljaz17YWN0aXZhdGVCaWRDcnlwdG9wdW5rVE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IG9uQ2xpY2s9e2FjdGl2YXRlQmlkTkZUTW9kYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPkJpZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuXHJcbiAgICAgICAgICAgIDxCaWRORlRNb2RhbFxyXG4gICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgcG9vciBpbXBsZW1lbnRhdGlvbiwgYmV0dGVyIHRvIGltcGxlbWVudCBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxyXG4gICAgICAgICAgICAgICAgQW1vdW50PXtzaWduZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgdG9rZW5JZD17c2VsZWN0aWR9XHJcbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0dHlwZX1cclxuICAgICAgICAgICAgICAgIGV2ZW50SWQ9e2V2ZW50SWR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuXG5pbXBvcnQgZXJjNzIxIGZyb20gJy4uL2NvbnRyYWN0cy9kZXBsb3ltZW50cy9tZXRpcy9NZXRpc0VSQzcyMS5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRVJDNzIxU2luZ2xldG9uKHNpZ25lcikge1xuXHRpZiAoIUVSQzcyMVNpbmdsZXRvbi5faW5zdGFuY2UpIHtcblx0XHRFUkM3MjFTaW5nbGV0b24uX2luc3RhbmNlID0gbmV3IGV0aGVycy5Db250cmFjdChcblx0XHRcdGVyYzcyMS5hZGRyZXNzLFxuXHRcdFx0ZXJjNzIxLmFiaSxcblx0XHRcdHNpZ25lclxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gRVJDNzIxU2luZ2xldG9uLl9pbnN0YW5jZTtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuXG5pbXBvcnQgRVJDNzIxU2luZ2xldG9uIGZyb20gJy4vRVJDNzIxU2luZ2xldG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ29udHJhY3QoY29udHJhY3ROYW1lKSB7XG5cdGNvbnN0IFtjb250cmFjdEluc3RhbmNlLCBzZXRDb250cmFjdEluc3RhbmNlXSA9IHVzZVN0YXRlKHtcblx0XHRjb250cmFjdDogbnVsbCxcblx0XHRzaWduZXJBZGRyZXNzOiBudWxsLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG5cdFx0XHRcdGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuXHRcdFx0XHRjb25zdCBjb250cmFjdCA9IHsgY29udHJhY3Q6IG51bGwsIHNpZ25lckFkZHJlc3M6IG51bGwgfTtcblxuXHRcdFx0XHQvLyBTZXRzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgc3BlY2lmaWMgY29udHJhY3QgcGVyIGFwcGxpY2F0aW9uXG5cdFx0XHRcdC8vIFVzZWZ1bCBmb3Igc3dpdGNoaW5nIGFjcm9zcyBtdWx0aXBsZSBjb250cmFjdHMgaW4gYSBzaW5nbGUgYXBwbGljYXRpb25cblx0XHRcdFx0c3dpdGNoIChjb250cmFjdE5hbWUpIHtcblx0XHRcdFx0XHRjYXNlICdFUkM3MjEnOlxuXHRcdFx0XHRcdFx0Y29udHJhY3QuY29udHJhY3QgPSBFUkM3MjFTaW5nbGV0b24oc2lnbmVyKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnSW52YWxpZCBjb250cmFjdCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb250cmFjdC5zaWduZXJBZGRyZXNzID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcblxuXHRcdFx0XHRzZXRDb250cmFjdEluc3RhbmNlKGNvbnRyYWN0KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmZXRjaERhdGEoKTtcblxuXHRcdHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgZmV0Y2hEYXRhKTtcblx0XHR3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIGZldGNoRGF0YSk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LmV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdhY2NvdW50c0NoYW5nZWQnLCBmZXRjaERhdGEpO1xuXHRcdFx0d2luZG93LmV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBmZXRjaERhdGEpO1xuXHRcdH07XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gY29udHJhY3RJbnN0YW5jZTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV0aGVyc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Db2xcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==