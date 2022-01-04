(function() {
var exports = {};
exports.id = "pages/projects/erc-721/view/[id]";
exports.ids = ["pages/projects/erc-721/view/[id]"];
exports.modules = {

/***/ "./contracts/deployments/metis/MetisERC721.json":
/*!******************************************************!*\
  !*** ./contracts/deployments/metis/MetisERC721.json ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"address":"0x6e69A1C6189fe348791D073Cf6F4452D7cC31b74","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"},{"internalType":"string","name":"_eventURI","type":"string"}],"name":"_setEventURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"EventTokenId","type":"uint256"},{"internalType":"uint256","name":"EventId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"_setTokenEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"_setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allbidstoken","outputs":[{"internalType":"uint256","name":"TokenID","type":"uint256"},{"internalType":"string","name":"bid","type":"string"},{"internalType":"address","name":"bidderHash","type":"address"},{"internalType":"string","name":"date","type":"string"},{"internalType":"string","name":"status","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bidCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_claimer","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint256","name":"_eventid","type":"uint256"}],"name":"claimToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"_bid","type":"string"},{"internalType":"string","name":"_updatedURI","type":"string"},{"internalType":"address","name":"bidder","type":"address"}],"name":"createBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_claimer","type":"address"},{"internalType":"string","name":"_eventURI","type":"string"}],"name":"createEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"eventURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}],"transactionHash":"0xf5a79afd9f61da2ad1a7aa002c104082771c1b366a435a05ef961ccb98f39601","receipt":{"to":null,"from":"0x168e007d9f5a794794E40035C5214963cb16BFB7","contractAddress":"0x6e69A1C6189fe348791D073Cf6F4452D7cC31b74","transactionIndex":0,"gasUsed":"22050583","logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","blockHash":"0xdd6201664d18219e2f37b1731002a56fb97be2008d6e82dc124842e4842ef61d","transactionHash":"0xf5a79afd9f61da2ad1a7aa002c104082771c1b366a435a05ef961ccb98f39601","logs":[],"blockNumber":91810,"cumulativeGasUsed":"22050583","status":1,"byzantium":true},"args":["Metis","MET"],"solcInputHash":"cd16827d89d619a8b6270c8d15b0bed8","metadata":"{\\"compiler\\":{\\"version\\":\\"0.8.6+commit.11564f7e\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"symbol\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"approved\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"ApprovalForAll\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"eventId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_eventURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setEventURI\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"EventTokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"EventId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setTokenEvent\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setTokenURI\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"allbidstoken\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"TokenID\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"bid\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"bidderHash\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"date\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"status\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"bidCount\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_claimer\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_eventid\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"claimToken\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_bid\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_updatedURI\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"bidder\\",\\"type\\":\\"address\\"}],\\"name\\":\\"createBid\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_claimer\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_eventURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"createEvent\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"eventId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"eventURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getApproved\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"}],\\"name\\":\\"isApprovedForAll\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"ownerOf\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"bytes\\",\\"name\\":\\"_data\\",\\"type\\":\\"bytes\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"setApprovalForAll\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bytes4\\",\\"name\\":\\"interfaceId\\",\\"type\\":\\"bytes4\\"}],\\"name\\":\\"supportsInterface\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"tokenURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalEvent\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{\\"approve(address,uint256)\\":{\\"details\\":\\"See {IERC721-approve}.\\"},\\"balanceOf(address)\\":{\\"details\\":\\"See {IERC721-balanceOf}.\\"},\\"getApproved(uint256)\\":{\\"details\\":\\"See {IERC721-getApproved}.\\"},\\"isApprovedForAll(address,address)\\":{\\"details\\":\\"See {IERC721-isApprovedForAll}.\\"},\\"name()\\":{\\"details\\":\\"See {IERC721Metadata-name}.\\"},\\"ownerOf(uint256)\\":{\\"details\\":\\"See {IERC721-ownerOf}.\\"},\\"safeTransferFrom(address,address,uint256)\\":{\\"details\\":\\"See {IERC721-safeTransferFrom}.\\"},\\"safeTransferFrom(address,address,uint256,bytes)\\":{\\"details\\":\\"See {IERC721-safeTransferFrom}.\\"},\\"setApprovalForAll(address,bool)\\":{\\"details\\":\\"See {IERC721-setApprovalForAll}.\\"},\\"supportsInterface(bytes4)\\":{\\"details\\":\\"See {IERC165-supportsInterface}.\\"},\\"symbol()\\":{\\"details\\":\\"See {IERC721Metadata-symbol}.\\"},\\"tokenURI(uint256)\\":{\\"details\\":\\"See {IERC721Metadata-tokenURI}.\\"},\\"transferFrom(address,address,uint256)\\":{\\"details\\":\\"See {IERC721-transferFrom}.\\"}},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"contracts/MetisERC721.sol\\":\\"MetisERC721\\"},\\"evmVersion\\":\\"berlin\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\",\\"useLiteralContent\\":true},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"@openzeppelin/contracts/token/ERC721/ERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/ERC721.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"./IERC721.sol\\\\\\";\\\\nimport \\\\\\"./IERC721Receiver.sol\\\\\\";\\\\nimport \\\\\\"./extensions/IERC721Metadata.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Address.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Context.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Strings.sol\\\\\\";\\\\nimport \\\\\\"../../utils/introspection/ERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\\\\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\\\\n * {ERC721Enumerable}.\\\\n */\\\\ncontract ERC721 is Context, ERC165, IERC721, IERC721Metadata {\\\\n    using Address for address;\\\\n    using Strings for uint256;\\\\n\\\\n    // Token name\\\\n    string private _name;\\\\n\\\\n    // Token symbol\\\\n    string private _symbol;\\\\n\\\\n    // Mapping from token ID to owner address\\\\n    mapping(uint256 => address) private _owners;\\\\n\\\\n    // Mapping owner address to token count\\\\n    mapping(address => uint256) private _balances;\\\\n\\\\n    // Mapping from token ID to approved address\\\\n    mapping(uint256 => address) private _tokenApprovals;\\\\n\\\\n    // Mapping from owner to operator approvals\\\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\\\n\\\\n    /**\\\\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\\\\n     */\\\\n    constructor(string memory name_, string memory symbol_) {\\\\n        _name = name_;\\\\n        _symbol = symbol_;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC165-supportsInterface}.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\\\\n        return\\\\n            interfaceId == type(IERC721).interfaceId ||\\\\n            interfaceId == type(IERC721Metadata).interfaceId ||\\\\n            super.supportsInterface(interfaceId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-balanceOf}.\\\\n     */\\\\n    function balanceOf(address owner) public view virtual override returns (uint256) {\\\\n        require(owner != address(0), \\\\\\"ERC721: balance query for the zero address\\\\\\");\\\\n        return _balances[owner];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-ownerOf}.\\\\n     */\\\\n    function ownerOf(uint256 tokenId) public view virtual override returns (address) {\\\\n        address owner = _owners[tokenId];\\\\n        require(owner != address(0), \\\\\\"ERC721: owner query for nonexistent token\\\\\\");\\\\n        return owner;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-name}.\\\\n     */\\\\n    function name() public view virtual override returns (string memory) {\\\\n        return _name;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-symbol}.\\\\n     */\\\\n    function symbol() public view virtual override returns (string memory) {\\\\n        return _symbol;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-tokenURI}.\\\\n     */\\\\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721Metadata: URI query for nonexistent token\\\\\\");\\\\n\\\\n        string memory baseURI = _baseURI();\\\\n        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : \\\\\\"\\\\\\";\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\\\\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\\\\n     * by default, can be overriden in child contracts.\\\\n     */\\\\n    function _baseURI() internal view virtual returns (string memory) {\\\\n        return \\\\\\"\\\\\\";\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-approve}.\\\\n     */\\\\n    function approve(address to, uint256 tokenId) public virtual override {\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n        require(to != owner, \\\\\\"ERC721: approval to current owner\\\\\\");\\\\n\\\\n        require(\\\\n            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\\\\n            \\\\\\"ERC721: approve caller is not owner nor approved for all\\\\\\"\\\\n        );\\\\n\\\\n        _approve(to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-getApproved}.\\\\n     */\\\\n    function getApproved(uint256 tokenId) public view virtual override returns (address) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721: approved query for nonexistent token\\\\\\");\\\\n\\\\n        return _tokenApprovals[tokenId];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-setApprovalForAll}.\\\\n     */\\\\n    function setApprovalForAll(address operator, bool approved) public virtual override {\\\\n        _setApprovalForAll(_msgSender(), operator, approved);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-isApprovedForAll}.\\\\n     */\\\\n    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {\\\\n        return _operatorApprovals[owner][operator];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-transferFrom}.\\\\n     */\\\\n    function transferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) public virtual override {\\\\n        //solhint-disable-next-line max-line-length\\\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\\\\\"ERC721: transfer caller is not owner nor approved\\\\\\");\\\\n\\\\n        _transfer(from, to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-safeTransferFrom}.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) public virtual override {\\\\n        safeTransferFrom(from, to, tokenId, \\\\\\"\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-safeTransferFrom}.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) public virtual override {\\\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\\\\\"ERC721: transfer caller is not owner nor approved\\\\\\");\\\\n        _safeTransfer(from, to, tokenId, _data);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\\\n     *\\\\n     * `_data` is additional data, it has no specified format and it is sent in call to `to`.\\\\n     *\\\\n     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.\\\\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _safeTransfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) internal virtual {\\\\n        _transfer(from, to, tokenId);\\\\n        require(_checkOnERC721Received(from, to, tokenId, _data), \\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns whether `tokenId` exists.\\\\n     *\\\\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\\\\n     *\\\\n     * Tokens start existing when they are minted (`_mint`),\\\\n     * and stop existing when they are burned (`_burn`).\\\\n     */\\\\n    function _exists(uint256 tokenId) internal view virtual returns (bool) {\\\\n        return _owners[tokenId] != address(0);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns whether `spender` is allowed to manage `tokenId`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721: operator query for nonexistent token\\\\\\");\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Safely mints `tokenId` and transfers it to `to`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must not exist.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _safeMint(address to, uint256 tokenId) internal virtual {\\\\n        _safeMint(to, tokenId, \\\\\\"\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\\\\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\\\\n     */\\\\n    function _safeMint(\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) internal virtual {\\\\n        _mint(to, tokenId);\\\\n        require(\\\\n            _checkOnERC721Received(address(0), to, tokenId, _data),\\\\n            \\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\"\\\\n        );\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Mints `tokenId` and transfers it to `to`.\\\\n     *\\\\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must not exist.\\\\n     * - `to` cannot be the zero address.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _mint(address to, uint256 tokenId) internal virtual {\\\\n        require(to != address(0), \\\\\\"ERC721: mint to the zero address\\\\\\");\\\\n        require(!_exists(tokenId), \\\\\\"ERC721: token already minted\\\\\\");\\\\n\\\\n        _beforeTokenTransfer(address(0), to, tokenId);\\\\n\\\\n        _balances[to] += 1;\\\\n        _owners[tokenId] = to;\\\\n\\\\n        emit Transfer(address(0), to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Destroys `tokenId`.\\\\n     * The approval is cleared when the token is burned.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _burn(uint256 tokenId) internal virtual {\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n\\\\n        _beforeTokenTransfer(owner, address(0), tokenId);\\\\n\\\\n        // Clear approvals\\\\n        _approve(address(0), tokenId);\\\\n\\\\n        _balances[owner] -= 1;\\\\n        delete _owners[tokenId];\\\\n\\\\n        emit Transfer(owner, address(0), tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Transfers `tokenId` from `from` to `to`.\\\\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must be owned by `from`.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _transfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) internal virtual {\\\\n        require(ERC721.ownerOf(tokenId) == from, \\\\\\"ERC721: transfer of token that is not own\\\\\\");\\\\n        require(to != address(0), \\\\\\"ERC721: transfer to the zero address\\\\\\");\\\\n\\\\n        _beforeTokenTransfer(from, to, tokenId);\\\\n\\\\n        // Clear approvals from the previous owner\\\\n        _approve(address(0), tokenId);\\\\n\\\\n        _balances[from] -= 1;\\\\n        _balances[to] += 1;\\\\n        _owners[tokenId] = to;\\\\n\\\\n        emit Transfer(from, to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Approve `to` to operate on `tokenId`\\\\n     *\\\\n     * Emits a {Approval} event.\\\\n     */\\\\n    function _approve(address to, uint256 tokenId) internal virtual {\\\\n        _tokenApprovals[tokenId] = to;\\\\n        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\\\n     *\\\\n     * Emits a {ApprovalForAll} event.\\\\n     */\\\\n    function _setApprovalForAll(\\\\n        address owner,\\\\n        address operator,\\\\n        bool approved\\\\n    ) internal virtual {\\\\n        require(owner != operator, \\\\\\"ERC721: approve to caller\\\\\\");\\\\n        _operatorApprovals[owner][operator] = approved;\\\\n        emit ApprovalForAll(owner, operator, approved);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.\\\\n     * The call is not executed if the target address is not a contract.\\\\n     *\\\\n     * @param from address representing the previous owner of the given token ID\\\\n     * @param to target address that will receive the tokens\\\\n     * @param tokenId uint256 ID of the token to be transferred\\\\n     * @param _data bytes optional data to send along with the call\\\\n     * @return bool whether the call correctly returned the expected magic value\\\\n     */\\\\n    function _checkOnERC721Received(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) private returns (bool) {\\\\n        if (to.isContract()) {\\\\n            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {\\\\n                return retval == IERC721Receiver.onERC721Received.selector;\\\\n            } catch (bytes memory reason) {\\\\n                if (reason.length == 0) {\\\\n                    revert(\\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\");\\\\n                } else {\\\\n                    assembly {\\\\n                        revert(add(32, reason), mload(reason))\\\\n                    }\\\\n                }\\\\n            }\\\\n        } else {\\\\n            return true;\\\\n        }\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Hook that is called before any token transfer. This includes minting\\\\n     * and burning.\\\\n     *\\\\n     * Calling conditions:\\\\n     *\\\\n     * - When `from` and `to` are both non-zero, ``from``\'s `tokenId` will be\\\\n     * transferred to `to`.\\\\n     * - When `from` is zero, `tokenId` will be minted for `to`.\\\\n     * - When `to` is zero, ``from``\'s `tokenId` will be burned.\\\\n     * - `from` and `to` are never both zero.\\\\n     *\\\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\\\n     */\\\\n    function _beforeTokenTransfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) internal virtual {}\\\\n}\\\\n\\",\\"keccak256\\":\\"0x81c02855bc239e16ec09eee000a8bec691424c715188d6d881037e69c45414c4\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/IERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../../utils/introspection/IERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Required interface of an ERC721 compliant contract.\\\\n */\\\\ninterface IERC721 is IERC165 {\\\\n    /**\\\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\\\n     */\\\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\\\n\\\\n    /**\\\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\\\n     */\\\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\\\n\\\\n    /**\\\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\\\n     */\\\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\\\n\\\\n    /**\\\\n     * @dev Returns the number of tokens in ``owner``\'s account.\\\\n     */\\\\n    function balanceOf(address owner) external view returns (uint256 balance);\\\\n\\\\n    /**\\\\n     * @dev Returns the owner of the `tokenId` token.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) external;\\\\n\\\\n    /**\\\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\\\n     *\\\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must be owned by `from`.\\\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function transferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) external;\\\\n\\\\n    /**\\\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\\\n     * The approval is cleared when the token is transferred.\\\\n     *\\\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - The caller must own the token or be an approved operator.\\\\n     * - `tokenId` must exist.\\\\n     *\\\\n     * Emits an {Approval} event.\\\\n     */\\\\n    function approve(address to, uint256 tokenId) external;\\\\n\\\\n    /**\\\\n     * @dev Returns the account approved for `tokenId` token.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\\\n\\\\n    /**\\\\n     * @dev Approve or remove `operator` as an operator for the caller.\\\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - The `operator` cannot be the caller.\\\\n     *\\\\n     * Emits an {ApprovalForAll} event.\\\\n     */\\\\n    function setApprovalForAll(address operator, bool _approved) external;\\\\n\\\\n    /**\\\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\\\n     *\\\\n     * See {setApprovalForAll}\\\\n     */\\\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes calldata data\\\\n    ) external;\\\\n}\\\\n\\",\\"keccak256\\":\\"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721Receiver.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @title ERC721 token receiver interface\\\\n * @dev Interface for any contract that wants to support safeTransfers\\\\n * from ERC721 asset contracts.\\\\n */\\\\ninterface IERC721Receiver {\\\\n    /**\\\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\\\n     * by `operator` from `from`, this function is called.\\\\n     *\\\\n     * It must return its Solidity selector to confirm the token transfer.\\\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\\\\n     *\\\\n     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\\\\n     */\\\\n    function onERC721Received(\\\\n        address operator,\\\\n        address from,\\\\n        uint256 tokenId,\\\\n        bytes calldata data\\\\n    ) external returns (bytes4);\\\\n}\\\\n\\",\\"keccak256\\":\\"0xd5fa74b4fb323776fa4a8158800fec9d5ac0fec0d6dd046dd93798632ada265f\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Metadata.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../IERC721.sol\\\\\\";\\\\n\\\\n/**\\\\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\\\n * @dev See https://eips.ethereum.org/EIPS/eip-721\\\\n */\\\\ninterface IERC721Metadata is IERC721 {\\\\n    /**\\\\n     * @dev Returns the token collection name.\\\\n     */\\\\n    function name() external view returns (string memory);\\\\n\\\\n    /**\\\\n     * @dev Returns the token collection symbol.\\\\n     */\\\\n    function symbol() external view returns (string memory);\\\\n\\\\n    /**\\\\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\\\\n     */\\\\n    function tokenURI(uint256 tokenId) external view returns (string memory);\\\\n}\\\\n\\",\\"keccak256\\":\\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Address.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Address.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Collection of functions related to the address type\\\\n */\\\\nlibrary Address {\\\\n    /**\\\\n     * @dev Returns true if `account` is a contract.\\\\n     *\\\\n     * [IMPORTANT]\\\\n     * ====\\\\n     * It is unsafe to assume that an address for which this function returns\\\\n     * false is an externally-owned account (EOA) and not a contract.\\\\n     *\\\\n     * Among others, `isContract` will return false for the following\\\\n     * types of addresses:\\\\n     *\\\\n     *  - an externally-owned account\\\\n     *  - a contract in construction\\\\n     *  - an address where a contract will be created\\\\n     *  - an address where a contract lived, but was destroyed\\\\n     * ====\\\\n     */\\\\n    function isContract(address account) internal view returns (bool) {\\\\n        // This method relies on extcodesize, which returns 0 for contracts in\\\\n        // construction, since the code is only stored at the end of the\\\\n        // constructor execution.\\\\n\\\\n        uint256 size;\\\\n        assembly {\\\\n            size := extcodesize(account)\\\\n        }\\\\n        return size > 0;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\\\n     * `recipient`, forwarding all available gas and reverting on errors.\\\\n     *\\\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\\\n     * imposed by `transfer`, making them unable to receive funds via\\\\n     * `transfer`. {sendValue} removes this limitation.\\\\n     *\\\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\\\n     *\\\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\\\n     * taken to not create reentrancy vulnerabilities. Consider using\\\\n     * {ReentrancyGuard} or the\\\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\\\n     */\\\\n    function sendValue(address payable recipient, uint256 amount) internal {\\\\n        require(address(this).balance >= amount, \\\\\\"Address: insufficient balance\\\\\\");\\\\n\\\\n        (bool success, ) = recipient.call{value: amount}(\\\\\\"\\\\\\");\\\\n        require(success, \\\\\\"Address: unable to send value, recipient may have reverted\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Performs a Solidity function call using a low level `call`. A\\\\n     * plain `call` is an unsafe replacement for a function call: use this\\\\n     * function instead.\\\\n     *\\\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\\\n     * function (like regular Solidity function calls).\\\\n     *\\\\n     * Returns the raw returned data. To convert to the expected return value,\\\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `target` must be a contract.\\\\n     * - calling `target` with `data` must not revert.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\\\n        return functionCall(target, data, \\\\\\"Address: low-level call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        return functionCallWithValue(target, data, 0, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but also transferring `value` wei to `target`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - the calling contract must have an ETH balance of at least `value`.\\\\n     * - the called Solidity function must be `payable`.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCallWithValue(\\\\n        address target,\\\\n        bytes memory data,\\\\n        uint256 value\\\\n    ) internal returns (bytes memory) {\\\\n        return functionCallWithValue(target, data, value, \\\\\\"Address: low-level call with value failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCallWithValue(\\\\n        address target,\\\\n        bytes memory data,\\\\n        uint256 value,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        require(address(this).balance >= value, \\\\\\"Address: insufficient balance for call\\\\\\");\\\\n        require(isContract(target), \\\\\\"Address: call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but performing a static call.\\\\n     *\\\\n     * _Available since v3.3._\\\\n     */\\\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\\\n        return functionStaticCall(target, data, \\\\\\"Address: low-level static call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\\\n     * but performing a static call.\\\\n     *\\\\n     * _Available since v3.3._\\\\n     */\\\\n    function functionStaticCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal view returns (bytes memory) {\\\\n        require(isContract(target), \\\\\\"Address: static call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but performing a delegate call.\\\\n     *\\\\n     * _Available since v3.4._\\\\n     */\\\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\\\n        return functionDelegateCall(target, data, \\\\\\"Address: low-level delegate call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\\\n     * but performing a delegate call.\\\\n     *\\\\n     * _Available since v3.4._\\\\n     */\\\\n    function functionDelegateCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        require(isContract(target), \\\\\\"Address: delegate call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\\\n     * revert reason using the provided one.\\\\n     *\\\\n     * _Available since v4.3._\\\\n     */\\\\n    function verifyCallResult(\\\\n        bool success,\\\\n        bytes memory returndata,\\\\n        string memory errorMessage\\\\n    ) internal pure returns (bytes memory) {\\\\n        if (success) {\\\\n            return returndata;\\\\n        } else {\\\\n            // Look for revert reason and bubble it up if present\\\\n            if (returndata.length > 0) {\\\\n                // The easiest way to bubble the revert reason is using memory via assembly\\\\n\\\\n                assembly {\\\\n                    let returndata_size := mload(returndata)\\\\n                    revert(add(32, returndata), returndata_size)\\\\n                }\\\\n            } else {\\\\n                revert(errorMessage);\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x51b758a8815ecc9596c66c37d56b1d33883a444631a3f916b9fe65cb863ef7c4\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Context.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Provides information about the current execution context, including the\\\\n * sender of the transaction and its data. While these are generally available\\\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\\\n * manner, since when dealing with meta-transactions the account sending and\\\\n * paying for execution may not be the actual sender (as far as an application\\\\n * is concerned).\\\\n *\\\\n * This contract is only required for intermediate, library-like contracts.\\\\n */\\\\nabstract contract Context {\\\\n    function _msgSender() internal view virtual returns (address) {\\\\n        return msg.sender;\\\\n    }\\\\n\\\\n    function _msgData() internal view virtual returns (bytes calldata) {\\\\n        return msg.data;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Strings.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev String operations.\\\\n */\\\\nlibrary Strings {\\\\n    bytes16 private constant _HEX_SYMBOLS = \\\\\\"0123456789abcdef\\\\\\";\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\\\n     */\\\\n    function toString(uint256 value) internal pure returns (string memory) {\\\\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\\\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\\\n\\\\n        if (value == 0) {\\\\n            return \\\\\\"0\\\\\\";\\\\n        }\\\\n        uint256 temp = value;\\\\n        uint256 digits;\\\\n        while (temp != 0) {\\\\n            digits++;\\\\n            temp /= 10;\\\\n        }\\\\n        bytes memory buffer = new bytes(digits);\\\\n        while (value != 0) {\\\\n            digits -= 1;\\\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\\\n            value /= 10;\\\\n        }\\\\n        return string(buffer);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\\\n     */\\\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\\\n        if (value == 0) {\\\\n            return \\\\\\"0x00\\\\\\";\\\\n        }\\\\n        uint256 temp = value;\\\\n        uint256 length = 0;\\\\n        while (temp != 0) {\\\\n            length++;\\\\n            temp >>= 8;\\\\n        }\\\\n        return toHexString(value, length);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\\\n     */\\\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\\\n        bytes memory buffer = new bytes(2 * length + 2);\\\\n        buffer[0] = \\\\\\"0\\\\\\";\\\\n        buffer[1] = \\\\\\"x\\\\\\";\\\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\\\n            value >>= 4;\\\\n        }\\\\n        require(value == 0, \\\\\\"Strings: hex length insufficient\\\\\\");\\\\n        return string(buffer);\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x32c202bd28995dd20c4347b7c6467a6d3241c74c8ad3edcbb610cd9205916c45\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/introspection/ERC165.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"./IERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Implementation of the {IERC165} interface.\\\\n *\\\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\\\n * for the additional interface id that will be supported. For example:\\\\n *\\\\n * ```solidity\\\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\\\n * }\\\\n * ```\\\\n *\\\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\\\n */\\\\nabstract contract ERC165 is IERC165 {\\\\n    /**\\\\n     * @dev See {IERC165-supportsInterface}.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\\\n        return interfaceId == type(IERC165).interfaceId;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/introspection/IERC165.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Interface of the ERC165 standard, as defined in the\\\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\\\n *\\\\n * Implementers can declare support of contract interfaces, which can then be\\\\n * queried by others ({ERC165Checker}).\\\\n *\\\\n * For an implementation, see {ERC165}.\\\\n */\\\\ninterface IERC165 {\\\\n    /**\\\\n     * @dev Returns true if this contract implements the interface defined by\\\\n     * `interfaceId`. See the corresponding\\\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\\\n     * to learn more about how these ids are created.\\\\n     *\\\\n     * This function call must use less than 30 000 gas.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\\\n}\\\\n\\",\\"keccak256\\":\\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\\",\\"license\\":\\"MIT\\"},\\"contracts/MetisERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"@openzeppelin/contracts/token/ERC721/ERC721.sol\\\\\\";\\\\nimport \\\\\\"@openzeppelin/contracts/utils/Strings.sol\\\\\\";\\\\n\\\\ncontract MetisERC721 is ERC721 {\\\\n\\\\tuint256 private _tokenIds;\\\\n\\\\tuint256 private _eventIds;\\\\n\\\\tuint256 private _EventTokenIds;\\\\n\\\\tmapping(uint256 => string[2]) private AllEventTokens;\\\\n\\\\n\\\\tmapping(uint256 => string) private _tokenURIs;\\\\n\\\\tmapping(uint256 => string) private _eventURIs;\\\\n\\\\tmapping(string => string) private _eventTokens;\\\\n\\\\n\\\\tmapping(uint256 => Bid) public allbidstoken;\\\\n\\\\n\\\\tuint256 public bidCount = 0;\\\\n\\\\tstruct Bid {\\\\n\\\\t\\\\tuint256 TokenID;\\\\n\\\\t\\\\tstring bid;\\\\n\\\\t\\\\taddress bidderHash;\\\\n\\\\t\\\\tstring date;\\\\n\\\\t\\\\tstring status;\\\\n\\\\t}\\\\n\\\\tstruct Bidder {\\\\n\\\\t\\\\tuint256 id;\\\\n\\\\t\\\\tstring username;\\\\n\\\\t}\\\\n\\\\n\\\\tconstructor(string memory name, string memory symbol)\\\\n\\\\t\\\\tERC721(name, symbol)\\\\n\\\\t{}\\\\n\\\\n\\\\tfunction claimToken(\\\\n\\\\t\\\\taddress _claimer,\\\\n\\\\t\\\\tstring memory _tokenURI,\\\\n\\\\t\\\\tuint256 _eventid\\\\n\\\\t) public returns (uint256) {\\\\n\\\\t\\\\t_mint(_claimer, _tokenIds);\\\\n\\\\t\\\\t_setTokenURI(_tokenIds, _tokenURI);\\\\n\\\\t\\\\t_setTokenEvent(_EventTokenIds, _eventid, _tokenURI);\\\\n\\\\t\\\\t_tokenIds++;\\\\n\\\\t\\\\t_EventTokenIds++;\\\\n\\\\t\\\\treturn _tokenIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction _setTokenEvent(\\\\n\\\\t\\\\tuint256 EventTokenId,\\\\n\\\\t\\\\tuint256 EventId,\\\\n\\\\t\\\\tstring memory _tokenURI\\\\n\\\\t) public virtual {\\\\n\\\\t\\\\tAllEventTokens[EventTokenId] = [\\\\n\\\\t\\\\t\\\\tStrings.toString(EventId),\\\\n\\\\t\\\\t\\\\tstring(_tokenURI)\\\\n\\\\t\\\\t];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction createEvent(address _claimer, string memory _eventURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\treturns (uint256)\\\\n\\\\t{\\\\n\\\\t\\\\t_mint(_claimer, _eventIds);\\\\n\\\\t\\\\t_setEventURI(_eventIds, _eventURI);\\\\n\\\\n\\\\t\\\\t_eventIds++;\\\\n\\\\n\\\\t\\\\treturn _eventIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction _setEventURI(uint256 eventId, string memory _eventURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tvirtual\\\\n\\\\t{\\\\n\\\\t\\\\t_eventURIs[eventId] = _eventURI;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction _setTokenURI(uint256 tokenId, string memory _tokenURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tvirtual\\\\n\\\\t{\\\\n\\\\t\\\\trequire(\\\\n\\\\t\\\\t\\\\t_exists(tokenId),\\\\n\\\\t\\\\t\\\\t\\\\\\"ERC721Metadata: URI set of nonexistent token\\\\\\"\\\\n\\\\t\\\\t);\\\\n\\\\t\\\\t_tokenURIs[tokenId] = _tokenURI;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction eventURI(uint256 eventId) public view returns (string memory) {\\\\n\\\\t\\\\treturn _eventURIs[eventId];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction tokenURI(uint256 tokenId)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tview\\\\n\\\\t\\\\tvirtual\\\\n\\\\t\\\\toverride\\\\n\\\\t\\\\treturns (string memory)\\\\n\\\\t{\\\\n\\\\t\\\\trequire(\\\\n\\\\t\\\\t\\\\t_exists(tokenId),\\\\n\\\\t\\\\t\\\\t\\\\\\"ERC721Metadata: URI query for nonexistent token\\\\\\"\\\\n\\\\t\\\\t);\\\\n\\\\n\\\\t\\\\treturn _tokenURIs[tokenId];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction totalSupply() public view returns (uint256) {\\\\n\\\\t\\\\treturn _tokenIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction totalEvent() public view returns (uint256) {\\\\n\\\\t\\\\treturn _eventIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction createBid(\\\\n\\\\t\\\\tuint256 _tokenId,\\\\n\\\\t\\\\tstring memory _bid,\\\\n\\\\t\\\\tstring memory _updatedURI,\\\\n\\\\t\\\\taddress bidder\\\\n\\\\t) public {\\\\n\\\\t\\\\tbidCount++;\\\\n\\\\t\\\\t_tokenURIs[_tokenId] = _updatedURI;\\\\n\\\\n\\\\t\\\\tallbidstoken[bidCount] = Bid(_tokenId, _bid, bidder, \\\\\\"date\\\\\\", \\\\\\"Bid\\\\\\");\\\\n\\\\t}\\\\n}\\\\n\\",\\"keccak256\\":\\"0x389f05362b5c29cd02a59dc3d1ce2409a8b5c484fd1e9385f787fe3e102f594f\\",\\"license\\":\\"MIT\\"}},\\"version\\":1}","bytecode":"0x60806040526000600e553480156200001657600080fd5b50604051620037233803806200372383398181016040528101906200003c9190620001a8565b81818160009080519060200190620000569291906200007a565b5080600190805190602001906200006f9291906200007a565b5050505050620003b1565b8280546200008890620002c2565b90600052602060002090601f016020900481019282620000ac5760008555620000f8565b82601f10620000c757805160ff1916838001178555620000f8565b82800160010185558215620000f8579182015b82811115620000f7578251825591602001919060010190620000da565b5b5090506200010791906200010b565b5090565b5b80821115620001265760008160009055506001016200010c565b5090565b6000620001416200013b8462000256565b6200022d565b90508281526020810184848401111562000160576200015f62000391565b5b6200016d8482856200028c565b509392505050565b600082601f8301126200018d576200018c6200038c565b5b81516200019f8482602086016200012a565b91505092915050565b60008060408385031215620001c257620001c16200039b565b5b600083015167ffffffffffffffff811115620001e357620001e262000396565b5b620001f18582860162000175565b925050602083015167ffffffffffffffff81111562000215576200021462000396565b5b620002238582860162000175565b9150509250929050565b6000620002396200024c565b9050620002478282620002f8565b919050565b6000604051905090565b600067ffffffffffffffff8211156200027457620002736200035d565b5b6200027f82620003a0565b9050602081019050919050565b60005b83811015620002ac5780820151818401526020810190506200028f565b83811115620002bc576000848401525b50505050565b60006002820490506001821680620002db57607f821691505b60208210811415620002f257620002f16200032e565b5b50919050565b6200030382620003a0565b810181811067ffffffffffffffff821117156200032557620003246200035d565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61336280620003c16000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80636352211e116100c3578063a0fd0c6a1161007c578063a0fd0c6a146103ed578063a22cb4651461041d578063b40a562714610439578063b88d4fde14610457578063c87b56dd14610473578063e985e9c5146104a357610158565b80636352211e14610305578063652d47251461033557806370a08231146103655780637eadfa6a146103955780638b591073146103b357806395d89b41146103cf57610158565b806318160ddd1161011557806318160ddd146102475780631cd043d61461026557806323b872dd1461028157806335011d901461029d5780633592dd80146102cd57806342842e0e146102e957610158565b8063015388681461015d578063019524e71461017957806301ffc9a7146101ad57806306fdde03146101dd578063081812fc146101fb578063095ea7b31461022b575b600080fd5b61017760048036038101906101729190612367565b6104d3565b005b610193600480360381019061018e919061233a565b610547565b6040516101a4959493929190612a1c565b60405180910390f35b6101c760048036038101906101c291906122e0565b610735565b6040516101d491906127e4565b60405180910390f35b6101e5610817565b6040516101f291906127ff565b60405180910390f35b6102156004803603810190610210919061233a565b6108a9565b604051610222919061277d565b60405180910390f35b610245600480360381019061024091906122a0565b61092e565b005b61024f610a46565b60405161025c9190612a01565b60405180910390f35b61027f600480360381019061027a9190612367565b610a50565b005b61029b600480360381019061029691906120bf565b610a7c565b005b6102b760048036038101906102b29190612231565b610adc565b6040516102c49190612a01565b60405180910390f35b6102e760048036038101906102e29190612462565b610b3f565b005b61030360048036038101906102fe91906120bf565b610b83565b005b61031f600480360381019061031a919061233a565b610ba3565b60405161032c919061277d565b60405180910390f35b61034f600480360381019061034a91906121d5565b610c55565b60405161035c9190612a01565b60405180910390f35b61037f600480360381019061037a9190612052565b610c92565b60405161038c9190612a01565b60405180910390f35b61039d610d4a565b6040516103aa9190612a01565b60405180910390f35b6103cd60048036038101906103c891906123c3565b610d54565b005b6103d7610f01565b6040516103e491906127ff565b60405180910390f35b6104076004803603810190610402919061233a565b610f93565b60405161041491906127ff565b60405180910390f35b61043760048036038101906104329190612195565b611038565b005b61044161104e565b60405161044e9190612a01565b60405180910390f35b610471600480360381019061046c9190612112565b611054565b005b61048d6004803603810190610488919061233a565b6110b6565b60405161049a91906127ff565b60405180910390f35b6104bd60048036038101906104b8919061207f565b6111a3565b6040516104ca91906127e4565b60405180910390f35b6104dc82611237565b61051b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051290612961565b60405180910390fd5b80600a60008481526020019081526020016000209080519060200190610542929190611daf565b505050565b600d60205280600052604060002060009150905080600001549080600101805461057090612cb4565b80601f016020809104026020016040519081016040528092919081815260200182805461059c90612cb4565b80156105e95780601f106105be576101008083540402835291602001916105e9565b820191906000526020600020905b8154815290600101906020018083116105cc57829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600301805461062490612cb4565b80601f016020809104026020016040519081016040528092919081815260200182805461065090612cb4565b801561069d5780601f106106725761010080835404028352916020019161069d565b820191906000526020600020905b81548152906001019060200180831161068057829003601f168201915b5050505050908060040180546106b290612cb4565b80601f01602080910402602001604051908101604052809291908181526020018280546106de90612cb4565b801561072b5780601f106107005761010080835404028352916020019161072b565b820191906000526020600020905b81548152906001019060200180831161070e57829003601f168201915b5050505050905085565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061080057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610810575061080f826112a3565b5b9050919050565b60606000805461082690612cb4565b80601f016020809104026020016040519081016040528092919081815260200182805461085290612cb4565b801561089f5780601f106108745761010080835404028352916020019161089f565b820191906000526020600020905b81548152906001019060200180831161088257829003601f168201915b5050505050905090565b60006108b482611237565b6108f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ea90612941565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061093982610ba3565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a1906129c1565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166109c961130d565b73ffffffffffffffffffffffffffffffffffffffff1614806109f857506109f7816109f261130d565b6111a3565b5b610a37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2e906128c1565b60405180910390fd5b610a418383611315565b505050565b6000600654905090565b80600b60008481526020019081526020016000209080519060200190610a77929190611daf565b505050565b610a8d610a8761130d565b826113ce565b610acc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac3906129e1565b60405180910390fd5b610ad78383836114ac565b505050565b6000610aea84600654611708565b610af6600654846104d3565b610b036008548385610b3f565b60066000815480929190610b1690612d17565b919050555060086000815480929190610b2e90612d17565b919050555060065490509392505050565b6040518060400160405280610b53846118d6565b81526020018281525060096000858152602001908152602001600020906002610b7d929190611e35565b50505050565b610b9e83838360405180602001604052806000815250611054565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4390612901565b60405180910390fd5b80915050919050565b6000610c6383600754611708565b610c6f60075483610a50565b60076000815480929190610c8290612d17565b9190505550600754905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cfa906128e1565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600754905090565b600e6000815480929190610d6790612d17565b919050555081600a60008681526020019081526020016000209080519060200190610d93929190611daf565b506040518060a001604052808581526020018481526020018273ffffffffffffffffffffffffffffffffffffffff1681526020016040518060400160405280600481526020017f646174650000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f4269640000000000000000000000000000000000000000000000000000000000815250815250600d6000600e548152602001908152602001600020600082015181600001556020820151816001019080519060200190610e76929190611daf565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019080519060200190610eda929190611daf565b506080820151816004019080519060200190610ef7929190611daf565b5090505050505050565b606060018054610f1090612cb4565b80601f0160208091040260200160405190810160405280929190818152602001828054610f3c90612cb4565b8015610f895780601f10610f5e57610100808354040283529160200191610f89565b820191906000526020600020905b815481529060010190602001808311610f6c57829003601f168201915b5050505050905090565b6060600b60008381526020019081526020016000208054610fb390612cb4565b80601f0160208091040260200160405190810160405280929190818152602001828054610fdf90612cb4565b801561102c5780601f106110015761010080835404028352916020019161102c565b820191906000526020600020905b81548152906001019060200180831161100f57829003601f168201915b50505050509050919050565b61104a61104361130d565b8383611a37565b5050565b600e5481565b61106561105f61130d565b836113ce565b6110a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109b906129e1565b60405180910390fd5b6110b084848484611ba4565b50505050565b60606110c182611237565b611100576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f7906129a1565b60405180910390fd5b600a6000838152602001908152602001600020805461111e90612cb4565b80601f016020809104026020016040519081016040528092919081815260200182805461114a90612cb4565b80156111975780601f1061116c57610100808354040283529160200191611197565b820191906000526020600020905b81548152906001019060200180831161117a57829003601f168201915b50505050509050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661138883610ba3565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006113d982611237565b611418576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140f906128a1565b60405180910390fd5b600061142383610ba3565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061149257508373ffffffffffffffffffffffffffffffffffffffff1661147a846108a9565b73ffffffffffffffffffffffffffffffffffffffff16145b806114a357506114a281856111a3565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166114cc82610ba3565b73ffffffffffffffffffffffffffffffffffffffff1614611522576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151990612981565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611592576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158990612861565b60405180910390fd5b61159d838383611c00565b6115a8600082611315565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115f89190612bca565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461164f9190612b43565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611778576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176f90612921565b60405180910390fd5b61178181611237565b156117c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117b890612841565b60405180910390fd5b6117cd60008383611c00565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461181d9190612b43565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6060600082141561191e576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611a32565b600082905060005b6000821461195057808061193990612d17565b915050600a826119499190612b99565b9150611926565b60008167ffffffffffffffff81111561196c5761196b612e4d565b5b6040519080825280601f01601f19166020018201604052801561199e5781602001600182028036833780820191505090505b5090505b60008514611a2b576001826119b79190612bca565b9150600a856119c69190612d60565b60306119d29190612b43565b60f81b8183815181106119e8576119e7612e1e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611a249190612b99565b94506119a2565b8093505050505b919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611aa6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9d90612881565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611b9791906127e4565b60405180910390a3505050565b611baf8484846114ac565b611bbb84848484611c05565b611bfa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bf190612821565b60405180910390fd5b50505050565b505050565b6000611c268473ffffffffffffffffffffffffffffffffffffffff16611d9c565b15611d8f578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611c4f61130d565b8786866040518563ffffffff1660e01b8152600401611c719493929190612798565b602060405180830381600087803b158015611c8b57600080fd5b505af1925050508015611cbc57506040513d601f19601f82011682018060405250810190611cb9919061230d565b60015b611d3f573d8060008114611cec576040519150601f19603f3d011682016040523d82523d6000602084013e611cf1565b606091505b50600081511415611d37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d2e90612821565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611d94565b600190505b949350505050565b600080823b905060008111915050919050565b828054611dbb90612cb4565b90600052602060002090601f016020900481019282611ddd5760008555611e24565b82601f10611df657805160ff1916838001178555611e24565b82800160010185558215611e24579182015b82811115611e23578251825591602001919060010190611e08565b5b509050611e319190611e88565b5090565b8260028101928215611e77579160200282015b82811115611e76578251829080519060200190611e66929190611daf565b5091602001919060010190611e48565b5b509050611e849190611ea5565b5090565b5b80821115611ea1576000816000905550600101611e89565b5090565b5b80821115611ec55760008181611ebc9190611ec9565b50600101611ea6565b5090565b508054611ed590612cb4565b6000825580601f10611ee75750611f06565b601f016020900490600052602060002090810190611f059190611e88565b5b50565b6000611f1c611f1784612aa9565b612a84565b905082815260208101848484011115611f3857611f37612e81565b5b611f43848285612c72565b509392505050565b6000611f5e611f5984612ada565b612a84565b905082815260208101848484011115611f7a57611f79612e81565b5b611f85848285612c72565b509392505050565b600081359050611f9c816132d0565b92915050565b600081359050611fb1816132e7565b92915050565b600081359050611fc6816132fe565b92915050565b600081519050611fdb816132fe565b92915050565b600082601f830112611ff657611ff5612e7c565b5b8135612006848260208601611f09565b91505092915050565b600082601f83011261202457612023612e7c565b5b8135612034848260208601611f4b565b91505092915050565b60008135905061204c81613315565b92915050565b60006020828403121561206857612067612e8b565b5b600061207684828501611f8d565b91505092915050565b6000806040838503121561209657612095612e8b565b5b60006120a485828601611f8d565b92505060206120b585828601611f8d565b9150509250929050565b6000806000606084860312156120d8576120d7612e8b565b5b60006120e686828701611f8d565b93505060206120f786828701611f8d565b92505060406121088682870161203d565b9150509250925092565b6000806000806080858703121561212c5761212b612e8b565b5b600061213a87828801611f8d565b945050602061214b87828801611f8d565b935050604061215c8782880161203d565b925050606085013567ffffffffffffffff81111561217d5761217c612e86565b5b61218987828801611fe1565b91505092959194509250565b600080604083850312156121ac576121ab612e8b565b5b60006121ba85828601611f8d565b92505060206121cb85828601611fa2565b9150509250929050565b600080604083850312156121ec576121eb612e8b565b5b60006121fa85828601611f8d565b925050602083013567ffffffffffffffff81111561221b5761221a612e86565b5b6122278582860161200f565b9150509250929050565b60008060006060848603121561224a57612249612e8b565b5b600061225886828701611f8d565b935050602084013567ffffffffffffffff81111561227957612278612e86565b5b6122858682870161200f565b92505060406122968682870161203d565b9150509250925092565b600080604083850312156122b7576122b6612e8b565b5b60006122c585828601611f8d565b92505060206122d68582860161203d565b9150509250929050565b6000602082840312156122f6576122f5612e8b565b5b600061230484828501611fb7565b91505092915050565b60006020828403121561232357612322612e8b565b5b600061233184828501611fcc565b91505092915050565b6000602082840312156123505761234f612e8b565b5b600061235e8482850161203d565b91505092915050565b6000806040838503121561237e5761237d612e8b565b5b600061238c8582860161203d565b925050602083013567ffffffffffffffff8111156123ad576123ac612e86565b5b6123b98582860161200f565b9150509250929050565b600080600080608085870312156123dd576123dc612e8b565b5b60006123eb8782880161203d565b945050602085013567ffffffffffffffff81111561240c5761240b612e86565b5b6124188782880161200f565b935050604085013567ffffffffffffffff81111561243957612438612e86565b5b6124458782880161200f565b925050606061245687828801611f8d565b91505092959194509250565b60008060006060848603121561247b5761247a612e8b565b5b60006124898682870161203d565b935050602061249a8682870161203d565b925050604084013567ffffffffffffffff8111156124bb576124ba612e86565b5b6124c78682870161200f565b9150509250925092565b6124da81612bfe565b82525050565b6124e981612c10565b82525050565b60006124fa82612b0b565b6125048185612b21565b9350612514818560208601612c81565b61251d81612e90565b840191505092915050565b600061253382612b16565b61253d8185612b32565b935061254d818560208601612c81565b61255681612e90565b840191505092915050565b600061256e603283612b32565b915061257982612ea1565b604082019050919050565b6000612591601c83612b32565b915061259c82612ef0565b602082019050919050565b60006125b4602483612b32565b91506125bf82612f19565b604082019050919050565b60006125d7601983612b32565b91506125e282612f68565b602082019050919050565b60006125fa602c83612b32565b915061260582612f91565b604082019050919050565b600061261d603883612b32565b915061262882612fe0565b604082019050919050565b6000612640602a83612b32565b915061264b8261302f565b604082019050919050565b6000612663602983612b32565b915061266e8261307e565b604082019050919050565b6000612686602083612b32565b9150612691826130cd565b602082019050919050565b60006126a9602c83612b32565b91506126b4826130f6565b604082019050919050565b60006126cc602c83612b32565b91506126d782613145565b604082019050919050565b60006126ef602983612b32565b91506126fa82613194565b604082019050919050565b6000612712602f83612b32565b915061271d826131e3565b604082019050919050565b6000612735602183612b32565b915061274082613232565b604082019050919050565b6000612758603183612b32565b915061276382613281565b604082019050919050565b61277781612c68565b82525050565b600060208201905061279260008301846124d1565b92915050565b60006080820190506127ad60008301876124d1565b6127ba60208301866124d1565b6127c7604083018561276e565b81810360608301526127d981846124ef565b905095945050505050565b60006020820190506127f960008301846124e0565b92915050565b600060208201905081810360008301526128198184612528565b905092915050565b6000602082019050818103600083015261283a81612561565b9050919050565b6000602082019050818103600083015261285a81612584565b9050919050565b6000602082019050818103600083015261287a816125a7565b9050919050565b6000602082019050818103600083015261289a816125ca565b9050919050565b600060208201905081810360008301526128ba816125ed565b9050919050565b600060208201905081810360008301526128da81612610565b9050919050565b600060208201905081810360008301526128fa81612633565b9050919050565b6000602082019050818103600083015261291a81612656565b9050919050565b6000602082019050818103600083015261293a81612679565b9050919050565b6000602082019050818103600083015261295a8161269c565b9050919050565b6000602082019050818103600083015261297a816126bf565b9050919050565b6000602082019050818103600083015261299a816126e2565b9050919050565b600060208201905081810360008301526129ba81612705565b9050919050565b600060208201905081810360008301526129da81612728565b9050919050565b600060208201905081810360008301526129fa8161274b565b9050919050565b6000602082019050612a16600083018461276e565b92915050565b600060a082019050612a31600083018861276e565b8181036020830152612a438187612528565b9050612a5260408301866124d1565b8181036060830152612a648185612528565b90508181036080830152612a788184612528565b90509695505050505050565b6000612a8e612a9f565b9050612a9a8282612ce6565b919050565b6000604051905090565b600067ffffffffffffffff821115612ac457612ac3612e4d565b5b612acd82612e90565b9050602081019050919050565b600067ffffffffffffffff821115612af557612af4612e4d565b5b612afe82612e90565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000612b4e82612c68565b9150612b5983612c68565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612b8e57612b8d612d91565b5b828201905092915050565b6000612ba482612c68565b9150612baf83612c68565b925082612bbf57612bbe612dc0565b5b828204905092915050565b6000612bd582612c68565b9150612be083612c68565b925082821015612bf357612bf2612d91565b5b828203905092915050565b6000612c0982612c48565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612c9f578082015181840152602081019050612c84565b83811115612cae576000848401525b50505050565b60006002820490506001821680612ccc57607f821691505b60208210811415612ce057612cdf612def565b5b50919050565b612cef82612e90565b810181811067ffffffffffffffff82111715612d0e57612d0d612e4d565b5b80604052505050565b6000612d2282612c68565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612d5557612d54612d91565b5b600182019050919050565b6000612d6b82612c68565b9150612d7683612c68565b925082612d8657612d85612dc0565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6132d981612bfe565b81146132e457600080fd5b50565b6132f081612c10565b81146132fb57600080fd5b50565b61330781612c1c565b811461331257600080fd5b50565b61331e81612c68565b811461332957600080fd5b5056fea2646970667358221220ce74ca91c8bb6815688b9a79bc6413a338e6537a3331f52de1878174ba3f992664736f6c63430008060033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106101585760003560e01c80636352211e116100c3578063a0fd0c6a1161007c578063a0fd0c6a146103ed578063a22cb4651461041d578063b40a562714610439578063b88d4fde14610457578063c87b56dd14610473578063e985e9c5146104a357610158565b80636352211e14610305578063652d47251461033557806370a08231146103655780637eadfa6a146103955780638b591073146103b357806395d89b41146103cf57610158565b806318160ddd1161011557806318160ddd146102475780631cd043d61461026557806323b872dd1461028157806335011d901461029d5780633592dd80146102cd57806342842e0e146102e957610158565b8063015388681461015d578063019524e71461017957806301ffc9a7146101ad57806306fdde03146101dd578063081812fc146101fb578063095ea7b31461022b575b600080fd5b61017760048036038101906101729190612367565b6104d3565b005b610193600480360381019061018e919061233a565b610547565b6040516101a4959493929190612a1c565b60405180910390f35b6101c760048036038101906101c291906122e0565b610735565b6040516101d491906127e4565b60405180910390f35b6101e5610817565b6040516101f291906127ff565b60405180910390f35b6102156004803603810190610210919061233a565b6108a9565b604051610222919061277d565b60405180910390f35b610245600480360381019061024091906122a0565b61092e565b005b61024f610a46565b60405161025c9190612a01565b60405180910390f35b61027f600480360381019061027a9190612367565b610a50565b005b61029b600480360381019061029691906120bf565b610a7c565b005b6102b760048036038101906102b29190612231565b610adc565b6040516102c49190612a01565b60405180910390f35b6102e760048036038101906102e29190612462565b610b3f565b005b61030360048036038101906102fe91906120bf565b610b83565b005b61031f600480360381019061031a919061233a565b610ba3565b60405161032c919061277d565b60405180910390f35b61034f600480360381019061034a91906121d5565b610c55565b60405161035c9190612a01565b60405180910390f35b61037f600480360381019061037a9190612052565b610c92565b60405161038c9190612a01565b60405180910390f35b61039d610d4a565b6040516103aa9190612a01565b60405180910390f35b6103cd60048036038101906103c891906123c3565b610d54565b005b6103d7610f01565b6040516103e491906127ff565b60405180910390f35b6104076004803603810190610402919061233a565b610f93565b60405161041491906127ff565b60405180910390f35b61043760048036038101906104329190612195565b611038565b005b61044161104e565b60405161044e9190612a01565b60405180910390f35b610471600480360381019061046c9190612112565b611054565b005b61048d6004803603810190610488919061233a565b6110b6565b60405161049a91906127ff565b60405180910390f35b6104bd60048036038101906104b8919061207f565b6111a3565b6040516104ca91906127e4565b60405180910390f35b6104dc82611237565b61051b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051290612961565b60405180910390fd5b80600a60008481526020019081526020016000209080519060200190610542929190611daf565b505050565b600d60205280600052604060002060009150905080600001549080600101805461057090612cb4565b80601f016020809104026020016040519081016040528092919081815260200182805461059c90612cb4565b80156105e95780601f106105be576101008083540402835291602001916105e9565b820191906000526020600020905b8154815290600101906020018083116105cc57829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600301805461062490612cb4565b80601f016020809104026020016040519081016040528092919081815260200182805461065090612cb4565b801561069d5780601f106106725761010080835404028352916020019161069d565b820191906000526020600020905b81548152906001019060200180831161068057829003601f168201915b5050505050908060040180546106b290612cb4565b80601f01602080910402602001604051908101604052809291908181526020018280546106de90612cb4565b801561072b5780601f106107005761010080835404028352916020019161072b565b820191906000526020600020905b81548152906001019060200180831161070e57829003601f168201915b5050505050905085565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061080057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610810575061080f826112a3565b5b9050919050565b60606000805461082690612cb4565b80601f016020809104026020016040519081016040528092919081815260200182805461085290612cb4565b801561089f5780601f106108745761010080835404028352916020019161089f565b820191906000526020600020905b81548152906001019060200180831161088257829003601f168201915b5050505050905090565b60006108b482611237565b6108f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ea90612941565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061093982610ba3565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a1906129c1565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166109c961130d565b73ffffffffffffffffffffffffffffffffffffffff1614806109f857506109f7816109f261130d565b6111a3565b5b610a37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2e906128c1565b60405180910390fd5b610a418383611315565b505050565b6000600654905090565b80600b60008481526020019081526020016000209080519060200190610a77929190611daf565b505050565b610a8d610a8761130d565b826113ce565b610acc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac3906129e1565b60405180910390fd5b610ad78383836114ac565b505050565b6000610aea84600654611708565b610af6600654846104d3565b610b036008548385610b3f565b60066000815480929190610b1690612d17565b919050555060086000815480929190610b2e90612d17565b919050555060065490509392505050565b6040518060400160405280610b53846118d6565b81526020018281525060096000858152602001908152602001600020906002610b7d929190611e35565b50505050565b610b9e83838360405180602001604052806000815250611054565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4390612901565b60405180910390fd5b80915050919050565b6000610c6383600754611708565b610c6f60075483610a50565b60076000815480929190610c8290612d17565b9190505550600754905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cfa906128e1565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600754905090565b600e6000815480929190610d6790612d17565b919050555081600a60008681526020019081526020016000209080519060200190610d93929190611daf565b506040518060a001604052808581526020018481526020018273ffffffffffffffffffffffffffffffffffffffff1681526020016040518060400160405280600481526020017f646174650000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f4269640000000000000000000000000000000000000000000000000000000000815250815250600d6000600e548152602001908152602001600020600082015181600001556020820151816001019080519060200190610e76929190611daf565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019080519060200190610eda929190611daf565b506080820151816004019080519060200190610ef7929190611daf565b5090505050505050565b606060018054610f1090612cb4565b80601f0160208091040260200160405190810160405280929190818152602001828054610f3c90612cb4565b8015610f895780601f10610f5e57610100808354040283529160200191610f89565b820191906000526020600020905b815481529060010190602001808311610f6c57829003601f168201915b5050505050905090565b6060600b60008381526020019081526020016000208054610fb390612cb4565b80601f0160208091040260200160405190810160405280929190818152602001828054610fdf90612cb4565b801561102c5780601f106110015761010080835404028352916020019161102c565b820191906000526020600020905b81548152906001019060200180831161100f57829003601f168201915b50505050509050919050565b61104a61104361130d565b8383611a37565b5050565b600e5481565b61106561105f61130d565b836113ce565b6110a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109b906129e1565b60405180910390fd5b6110b084848484611ba4565b50505050565b60606110c182611237565b611100576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f7906129a1565b60405180910390fd5b600a6000838152602001908152602001600020805461111e90612cb4565b80601f016020809104026020016040519081016040528092919081815260200182805461114a90612cb4565b80156111975780601f1061116c57610100808354040283529160200191611197565b820191906000526020600020905b81548152906001019060200180831161117a57829003601f168201915b50505050509050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661138883610ba3565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006113d982611237565b611418576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140f906128a1565b60405180910390fd5b600061142383610ba3565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061149257508373ffffffffffffffffffffffffffffffffffffffff1661147a846108a9565b73ffffffffffffffffffffffffffffffffffffffff16145b806114a357506114a281856111a3565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166114cc82610ba3565b73ffffffffffffffffffffffffffffffffffffffff1614611522576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151990612981565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611592576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158990612861565b60405180910390fd5b61159d838383611c00565b6115a8600082611315565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115f89190612bca565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461164f9190612b43565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611778576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176f90612921565b60405180910390fd5b61178181611237565b156117c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117b890612841565b60405180910390fd5b6117cd60008383611c00565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461181d9190612b43565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6060600082141561191e576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611a32565b600082905060005b6000821461195057808061193990612d17565b915050600a826119499190612b99565b9150611926565b60008167ffffffffffffffff81111561196c5761196b612e4d565b5b6040519080825280601f01601f19166020018201604052801561199e5781602001600182028036833780820191505090505b5090505b60008514611a2b576001826119b79190612bca565b9150600a856119c69190612d60565b60306119d29190612b43565b60f81b8183815181106119e8576119e7612e1e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611a249190612b99565b94506119a2565b8093505050505b919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611aa6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9d90612881565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611b9791906127e4565b60405180910390a3505050565b611baf8484846114ac565b611bbb84848484611c05565b611bfa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bf190612821565b60405180910390fd5b50505050565b505050565b6000611c268473ffffffffffffffffffffffffffffffffffffffff16611d9c565b15611d8f578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611c4f61130d565b8786866040518563ffffffff1660e01b8152600401611c719493929190612798565b602060405180830381600087803b158015611c8b57600080fd5b505af1925050508015611cbc57506040513d601f19601f82011682018060405250810190611cb9919061230d565b60015b611d3f573d8060008114611cec576040519150601f19603f3d011682016040523d82523d6000602084013e611cf1565b606091505b50600081511415611d37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d2e90612821565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611d94565b600190505b949350505050565b600080823b905060008111915050919050565b828054611dbb90612cb4565b90600052602060002090601f016020900481019282611ddd5760008555611e24565b82601f10611df657805160ff1916838001178555611e24565b82800160010185558215611e24579182015b82811115611e23578251825591602001919060010190611e08565b5b509050611e319190611e88565b5090565b8260028101928215611e77579160200282015b82811115611e76578251829080519060200190611e66929190611daf565b5091602001919060010190611e48565b5b509050611e849190611ea5565b5090565b5b80821115611ea1576000816000905550600101611e89565b5090565b5b80821115611ec55760008181611ebc9190611ec9565b50600101611ea6565b5090565b508054611ed590612cb4565b6000825580601f10611ee75750611f06565b601f016020900490600052602060002090810190611f059190611e88565b5b50565b6000611f1c611f1784612aa9565b612a84565b905082815260208101848484011115611f3857611f37612e81565b5b611f43848285612c72565b509392505050565b6000611f5e611f5984612ada565b612a84565b905082815260208101848484011115611f7a57611f79612e81565b5b611f85848285612c72565b509392505050565b600081359050611f9c816132d0565b92915050565b600081359050611fb1816132e7565b92915050565b600081359050611fc6816132fe565b92915050565b600081519050611fdb816132fe565b92915050565b600082601f830112611ff657611ff5612e7c565b5b8135612006848260208601611f09565b91505092915050565b600082601f83011261202457612023612e7c565b5b8135612034848260208601611f4b565b91505092915050565b60008135905061204c81613315565b92915050565b60006020828403121561206857612067612e8b565b5b600061207684828501611f8d565b91505092915050565b6000806040838503121561209657612095612e8b565b5b60006120a485828601611f8d565b92505060206120b585828601611f8d565b9150509250929050565b6000806000606084860312156120d8576120d7612e8b565b5b60006120e686828701611f8d565b93505060206120f786828701611f8d565b92505060406121088682870161203d565b9150509250925092565b6000806000806080858703121561212c5761212b612e8b565b5b600061213a87828801611f8d565b945050602061214b87828801611f8d565b935050604061215c8782880161203d565b925050606085013567ffffffffffffffff81111561217d5761217c612e86565b5b61218987828801611fe1565b91505092959194509250565b600080604083850312156121ac576121ab612e8b565b5b60006121ba85828601611f8d565b92505060206121cb85828601611fa2565b9150509250929050565b600080604083850312156121ec576121eb612e8b565b5b60006121fa85828601611f8d565b925050602083013567ffffffffffffffff81111561221b5761221a612e86565b5b6122278582860161200f565b9150509250929050565b60008060006060848603121561224a57612249612e8b565b5b600061225886828701611f8d565b935050602084013567ffffffffffffffff81111561227957612278612e86565b5b6122858682870161200f565b92505060406122968682870161203d565b9150509250925092565b600080604083850312156122b7576122b6612e8b565b5b60006122c585828601611f8d565b92505060206122d68582860161203d565b9150509250929050565b6000602082840312156122f6576122f5612e8b565b5b600061230484828501611fb7565b91505092915050565b60006020828403121561232357612322612e8b565b5b600061233184828501611fcc565b91505092915050565b6000602082840312156123505761234f612e8b565b5b600061235e8482850161203d565b91505092915050565b6000806040838503121561237e5761237d612e8b565b5b600061238c8582860161203d565b925050602083013567ffffffffffffffff8111156123ad576123ac612e86565b5b6123b98582860161200f565b9150509250929050565b600080600080608085870312156123dd576123dc612e8b565b5b60006123eb8782880161203d565b945050602085013567ffffffffffffffff81111561240c5761240b612e86565b5b6124188782880161200f565b935050604085013567ffffffffffffffff81111561243957612438612e86565b5b6124458782880161200f565b925050606061245687828801611f8d565b91505092959194509250565b60008060006060848603121561247b5761247a612e8b565b5b60006124898682870161203d565b935050602061249a8682870161203d565b925050604084013567ffffffffffffffff8111156124bb576124ba612e86565b5b6124c78682870161200f565b9150509250925092565b6124da81612bfe565b82525050565b6124e981612c10565b82525050565b60006124fa82612b0b565b6125048185612b21565b9350612514818560208601612c81565b61251d81612e90565b840191505092915050565b600061253382612b16565b61253d8185612b32565b935061254d818560208601612c81565b61255681612e90565b840191505092915050565b600061256e603283612b32565b915061257982612ea1565b604082019050919050565b6000612591601c83612b32565b915061259c82612ef0565b602082019050919050565b60006125b4602483612b32565b91506125bf82612f19565b604082019050919050565b60006125d7601983612b32565b91506125e282612f68565b602082019050919050565b60006125fa602c83612b32565b915061260582612f91565b604082019050919050565b600061261d603883612b32565b915061262882612fe0565b604082019050919050565b6000612640602a83612b32565b915061264b8261302f565b604082019050919050565b6000612663602983612b32565b915061266e8261307e565b604082019050919050565b6000612686602083612b32565b9150612691826130cd565b602082019050919050565b60006126a9602c83612b32565b91506126b4826130f6565b604082019050919050565b60006126cc602c83612b32565b91506126d782613145565b604082019050919050565b60006126ef602983612b32565b91506126fa82613194565b604082019050919050565b6000612712602f83612b32565b915061271d826131e3565b604082019050919050565b6000612735602183612b32565b915061274082613232565b604082019050919050565b6000612758603183612b32565b915061276382613281565b604082019050919050565b61277781612c68565b82525050565b600060208201905061279260008301846124d1565b92915050565b60006080820190506127ad60008301876124d1565b6127ba60208301866124d1565b6127c7604083018561276e565b81810360608301526127d981846124ef565b905095945050505050565b60006020820190506127f960008301846124e0565b92915050565b600060208201905081810360008301526128198184612528565b905092915050565b6000602082019050818103600083015261283a81612561565b9050919050565b6000602082019050818103600083015261285a81612584565b9050919050565b6000602082019050818103600083015261287a816125a7565b9050919050565b6000602082019050818103600083015261289a816125ca565b9050919050565b600060208201905081810360008301526128ba816125ed565b9050919050565b600060208201905081810360008301526128da81612610565b9050919050565b600060208201905081810360008301526128fa81612633565b9050919050565b6000602082019050818103600083015261291a81612656565b9050919050565b6000602082019050818103600083015261293a81612679565b9050919050565b6000602082019050818103600083015261295a8161269c565b9050919050565b6000602082019050818103600083015261297a816126bf565b9050919050565b6000602082019050818103600083015261299a816126e2565b9050919050565b600060208201905081810360008301526129ba81612705565b9050919050565b600060208201905081810360008301526129da81612728565b9050919050565b600060208201905081810360008301526129fa8161274b565b9050919050565b6000602082019050612a16600083018461276e565b92915050565b600060a082019050612a31600083018861276e565b8181036020830152612a438187612528565b9050612a5260408301866124d1565b8181036060830152612a648185612528565b90508181036080830152612a788184612528565b90509695505050505050565b6000612a8e612a9f565b9050612a9a8282612ce6565b919050565b6000604051905090565b600067ffffffffffffffff821115612ac457612ac3612e4d565b5b612acd82612e90565b9050602081019050919050565b600067ffffffffffffffff821115612af557612af4612e4d565b5b612afe82612e90565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000612b4e82612c68565b9150612b5983612c68565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612b8e57612b8d612d91565b5b828201905092915050565b6000612ba482612c68565b9150612baf83612c68565b925082612bbf57612bbe612dc0565b5b828204905092915050565b6000612bd582612c68565b9150612be083612c68565b925082821015612bf357612bf2612d91565b5b828203905092915050565b6000612c0982612c48565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612c9f578082015181840152602081019050612c84565b83811115612cae576000848401525b50505050565b60006002820490506001821680612ccc57607f821691505b60208210811415612ce057612cdf612def565b5b50919050565b612cef82612e90565b810181811067ffffffffffffffff82111715612d0e57612d0d612e4d565b5b80604052505050565b6000612d2282612c68565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612d5557612d54612d91565b5b600182019050919050565b6000612d6b82612c68565b9150612d7683612c68565b925082612d8657612d85612dc0565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6132d981612bfe565b81146132e457600080fd5b50565b6132f081612c10565b81146132fb57600080fd5b50565b61330781612c1c565b811461331257600080fd5b50565b61331e81612c68565b811461332957600080fd5b5056fea2646970667358221220ce74ca91c8bb6815688b9a79bc6413a338e6537a3331f52de1878174ba3f992664736f6c63430008060033","devdoc":{"kind":"dev","methods":{"approve(address,uint256)":{"details":"See {IERC721-approve}."},"balanceOf(address)":{"details":"See {IERC721-balanceOf}."},"getApproved(uint256)":{"details":"See {IERC721-getApproved}."},"isApprovedForAll(address,address)":{"details":"See {IERC721-isApprovedForAll}."},"name()":{"details":"See {IERC721Metadata-name}."},"ownerOf(uint256)":{"details":"See {IERC721-ownerOf}."},"safeTransferFrom(address,address,uint256)":{"details":"See {IERC721-safeTransferFrom}."},"safeTransferFrom(address,address,uint256,bytes)":{"details":"See {IERC721-safeTransferFrom}."},"setApprovalForAll(address,bool)":{"details":"See {IERC721-setApprovalForAll}."},"supportsInterface(bytes4)":{"details":"See {IERC165-supportsInterface}."},"symbol()":{"details":"See {IERC721Metadata-symbol}."},"tokenURI(uint256)":{"details":"See {IERC721Metadata-tokenURI}."},"transferFrom(address,address,uint256)":{"details":"See {IERC721-transferFrom}."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1},"storageLayout":{"storage":[{"astId":25,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_name","offset":0,"slot":"0","type":"t_string_storage"},{"astId":27,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_symbol","offset":0,"slot":"1","type":"t_string_storage"},{"astId":31,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_owners","offset":0,"slot":"2","type":"t_mapping(t_uint256,t_address)"},{"astId":35,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_balances","offset":0,"slot":"3","type":"t_mapping(t_address,t_uint256)"},{"astId":39,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_tokenApprovals","offset":0,"slot":"4","type":"t_mapping(t_uint256,t_address)"},{"astId":45,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_operatorApprovals","offset":0,"slot":"5","type":"t_mapping(t_address,t_mapping(t_address,t_bool))"},{"astId":1557,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_tokenIds","offset":0,"slot":"6","type":"t_uint256"},{"astId":1559,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_eventIds","offset":0,"slot":"7","type":"t_uint256"},{"astId":1561,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_EventTokenIds","offset":0,"slot":"8","type":"t_uint256"},{"astId":1567,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"AllEventTokens","offset":0,"slot":"9","type":"t_mapping(t_uint256,t_array(t_string_storage)2_storage)"},{"astId":1571,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_tokenURIs","offset":0,"slot":"10","type":"t_mapping(t_uint256,t_string_storage)"},{"astId":1575,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_eventURIs","offset":0,"slot":"11","type":"t_mapping(t_uint256,t_string_storage)"},{"astId":1579,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_eventTokens","offset":0,"slot":"12","type":"t_mapping(t_string_memory_ptr,t_string_storage)"},{"astId":1584,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"allbidstoken","offset":0,"slot":"13","type":"t_mapping(t_uint256,t_struct(Bid)1598_storage)"},{"astId":1587,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"bidCount","offset":0,"slot":"14","type":"t_uint256"}],"types":{"t_address":{"encoding":"inplace","label":"address","numberOfBytes":"20"},"t_array(t_string_storage)2_storage":{"base":"t_string_storage","encoding":"inplace","label":"string[2]","numberOfBytes":"64"},"t_bool":{"encoding":"inplace","label":"bool","numberOfBytes":"1"},"t_mapping(t_address,t_bool)":{"encoding":"mapping","key":"t_address","label":"mapping(address => bool)","numberOfBytes":"32","value":"t_bool"},"t_mapping(t_address,t_mapping(t_address,t_bool))":{"encoding":"mapping","key":"t_address","label":"mapping(address => mapping(address => bool))","numberOfBytes":"32","value":"t_mapping(t_address,t_bool)"},"t_mapping(t_address,t_uint256)":{"encoding":"mapping","key":"t_address","label":"mapping(address => uint256)","numberOfBytes":"32","value":"t_uint256"},"t_mapping(t_string_memory_ptr,t_string_storage)":{"encoding":"mapping","key":"t_string_memory_ptr","label":"mapping(string => string)","numberOfBytes":"32","value":"t_string_storage"},"t_mapping(t_uint256,t_address)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => address)","numberOfBytes":"32","value":"t_address"},"t_mapping(t_uint256,t_array(t_string_storage)2_storage)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => string[2])","numberOfBytes":"32","value":"t_array(t_string_storage)2_storage"},"t_mapping(t_uint256,t_string_storage)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => string)","numberOfBytes":"32","value":"t_string_storage"},"t_mapping(t_uint256,t_struct(Bid)1598_storage)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => struct MetisERC721.Bid)","numberOfBytes":"32","value":"t_struct(Bid)1598_storage"},"t_string_memory_ptr":{"encoding":"bytes","label":"string","numberOfBytes":"32"},"t_string_storage":{"encoding":"bytes","label":"string","numberOfBytes":"32"},"t_struct(Bid)1598_storage":{"encoding":"inplace","label":"struct MetisERC721.Bid","members":[{"astId":1589,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"TokenID","offset":0,"slot":"0","type":"t_uint256"},{"astId":1591,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"bid","offset":0,"slot":"1","type":"t_string_storage"},{"astId":1593,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"bidderHash","offset":0,"slot":"2","type":"t_address"},{"astId":1595,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"date","offset":0,"slot":"3","type":"t_string_storage"},{"astId":1597,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"status","offset":0,"slot":"4","type":"t_string_storage"}],"numberOfBytes":"160"},"t_uint256":{"encoding":"inplace","label":"uint256","numberOfBytes":"32"}}}}');

/***/ }),

/***/ "./components/TokenMetadata.jsx":
/*!**************************************!*\
  !*** ./components/TokenMetadata.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TokenMetadata; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\components\\TokenMetadata.jsx";



function TokenMetadata({
  tokenName,
  tokenSymbol
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: [tokenName, " - ", tokenSymbol]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this)
  }, void 0, false);
}

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
  tokenUri,
  type
}) {
  const [Amount, AmountInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Amount'
  });

  async function bidNFT() {
    var parsed = JSON.parse(tokenUri);

    if (Number(parsed['properties']['price']['description']) < Number(Amount)) {
      parsed['properties']['price']['description'] = Amount;
      parsed['properties']['higherbidadd']['description'] = senderAddress;
    }

    const result = await contract.createBid(tokenId, Amount, JSON.stringify(parsed), senderAddress);
    console.log(result);
    var getallbids = await contract.allbidstoken(1);
    console.log(getallbids);
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
        lineNumber: 46,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Title), {
        id: "contained-modal-title-vcenter",
        children: "Bid NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
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
            lineNumber: 58,
            columnNumber: 7
          }, this), AmountInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "d-grid",
          children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid Cryptopunk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 8
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 3
  }, this);
}

/***/ }),

/***/ "./components/modals/SendNFTModal.jsx":
/*!********************************************!*\
  !*** ./components/modals/SendNFTModal.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SendNFTModal; }
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

var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\components\\modals\\SendNFTModal.jsx";





function SendNFTModal({
  show,
  onHide,
  contract,
  senderAddress,
  tokenId
}) {
  const [receiverAddress, receiverAddressInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Address'
  });

  async function sendNFT() {
    const result = await contract['safeTransferFrom(address,address,uint256)'](senderAddress, receiverAddress, tokenId);
    console.log(result);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Header), {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Title), {
        id: "contained-modal-title-vcenter",
        children: "Send NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
      className: "show-grid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Receiver Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 7
          }, this), receiverAddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "d-grid",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "primary",
            onClick: sendNFT,
            children: "Send NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, this);
}

/***/ }),

/***/ "./pages/projects/erc-721/view/[id].jsx":
/*!**********************************************!*\
  !*** ./pages/projects/erc-721/view/[id].jsx ***!
  \**********************************************/
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
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_TokenMetadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/TokenMetadata */ "./components/TokenMetadata.jsx");
/* harmony import */ var _components_modals_SendNFTModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/modals/SendNFTModal */ "./components/modals/SendNFTModal.jsx");
/* harmony import */ var _components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/modals/BidNFTModal */ "./components/modals/BidNFTModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");


var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\projects\\erc-721\\view\\[id].jsx";












function ViewNFT(user) {
  const {
    contract,
    signerAddress
  } = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_12__.default)('ERC721');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: tokenId,
    1: setTokenId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
  const {
    0: tokenName,
    1: setTokenName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: tokenSymbol,
    1: setTokenSymbol
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: bid,
    1: setBid
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: higherbid,
    1: setHigherBid
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: description,
    1: setDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: owner,
    1: setOwner
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: url,
    1: setUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: tokenuri,
    1: setTokentokenuri
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: modalShow,
    1: setModalShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  async function fetchContractData() {
    try {
      const {
        id
      } = router.query;

      if (contract && id) {
        const value = await contract.tokenURI(id);
        setTokentokenuri(value);
        console.log(tokenuri);
        const object = JSON.parse(value);
        console.log(object);
        setName(object.properties.name.description);
        var price = "0";

        try {
          price = object.properties.price.description;
        } catch {}

        setBid(price + " ETH");
        var higherbidadd = "None";

        try {
          higherbidadd = object.properties.higherbidadd.description;
        } catch {}

        setHigherBid(higherbidadd);
        setDescription(object.properties.description.description);
        setUrl(object.properties.image.description);
        setTokenName(await contract.name());
        setTokenSymbol(await contract.symbol());
        const owner = await contract.ownerOf(id);
        setOwner(owner);
        setTokenId(id);
        console.log(id);
      }
    } catch (error) {
      console.error(error);
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchContractData();
    window.ethereum.on('chainChanged', fetchContractData);
    return () => {
      window.ethereum.removeListener('chainChanged', fetchContractData);
    };
  }, [router.query, contract]);

  function activateBidNFTModal() {
    setModalShow(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TokenMetadata__WEBPACK_IMPORTED_MODULE_9__.default, {
      tokenName: tokenName,
      tokenSymbol: "NFT"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
        children: signerAddress != owner && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
          className: "float-end",
          onClick: activateBidNFTModal,
          children: "Bid NFT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
        as: (react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default()),
        className: "mb-3",
        controlId: "formPlaintextName",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
          column: true,
          sm: "2",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
            plaintext: true,
            readOnly: true,
            defaultValue: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
        as: (react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default()),
        className: "mb-3",
        controlId: "formPlaintextName",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
          column: true,
          sm: "2",
          children: "Higher Bid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
            plaintext: true,
            readOnly: true,
            defaultValue: bid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
        as: (react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default()),
        className: "mb-3",
        controlId: "formPlaintextName",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
          column: true,
          sm: "2",
          children: "Higher Bid Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
            plaintext: true,
            readOnly: true,
            defaultValue: higherbid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
        as: (react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default()),
        className: "mb-3",
        controlId: "formPlaintextDescription",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
          column: true,
          sm: "2",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
            plaintext: true,
            readOnly: true,
            defaultValue: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
        as: (react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default()),
        className: "mb-3",
        controlId: "formPlaintextOwner",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
          column: true,
          sm: "2",
          children: "Owner"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {
            plaintext: true,
            readOnly: true,
            defaultValue: owner
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
        as: (react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default()),
        className: "mb-3",
        controlId: "formPlaintextImage",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
          column: true,
          sm: "2",
          children: "Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default()), {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7___default()), {
            src: url,
            alt: "An NFT Image",
            rounded: true,
            fluid: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_11__.default, {
      show: modalShow,
      onHide: () => {
        setModalShow(false); // This is a poor implementation, better to implement an event listener

        fetchContractData();
      },
      contract: contract,
      Amount: signerAddress,
      tokenId: tokenId,
      senderAddress: signerAddress,
      tokenUri: tokenuri
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 4
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

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("ethers");;

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/projects/erc-721/view/[id].jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vY29tcG9uZW50cy9Ub2tlbk1ldGFkYXRhLmpzeCIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQuanN4Iiwid2VicGFjazovL21ldGlzLWRlbW8vLi9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL2NvbXBvbmVudHMvbW9kYWxzL1NlbmRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL3BhZ2VzL3Byb2plY3RzL2VyYy03MjEvdmlldy9baWRdLmpzeCIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vc2VydmljZXMvRVJDNzIxU2luZ2xldG9uLmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9zZXJ2aWNlcy91c2VDb250cmFjdC5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwiZXRoZXJzXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0ltYWdlXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvUm93XCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlRva2VuTWV0YWRhdGEiLCJ0b2tlbk5hbWUiLCJ0b2tlblN5bWJvbCIsIlVzZUZvcm1JbnB1dCIsImRlZmF1bHRWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwiQmlkTkZUTW9kYWwiLCJzaG93Iiwib25IaWRlIiwiY29udHJhY3QiLCJzZW5kZXJBZGRyZXNzIiwidG9rZW5JZCIsInRva2VuVXJpIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJiaWRORlQiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJOdW1iZXIiLCJyZXN1bHQiLCJjcmVhdGVCaWQiLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZ2V0YWxsYmlkcyIsImFsbGJpZHN0b2tlbiIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWNrIiwiU2VuZE5GVE1vZGFsIiwicmVjZWl2ZXJBZGRyZXNzIiwicmVjZWl2ZXJBZGRyZXNzSW5wdXQiLCJzZW5kTkZUIiwiVmlld05GVCIsInVzZXIiLCJzaWduZXJBZGRyZXNzIiwidXNlQ29udHJhY3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZXRUb2tlbklkIiwic2V0VG9rZW5OYW1lIiwic2V0VG9rZW5TeW1ib2wiLCJuYW1lIiwic2V0TmFtZSIsImJpZCIsInNldEJpZCIsImhpZ2hlcmJpZCIsInNldEhpZ2hlckJpZCIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJvd25lciIsInNldE93bmVyIiwidXJsIiwic2V0VXJsIiwidG9rZW51cmkiLCJzZXRUb2tlbnRva2VudXJpIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiZmV0Y2hDb250cmFjdERhdGEiLCJxdWVyeSIsInRva2VuVVJJIiwib2JqZWN0IiwicHJvcGVydGllcyIsInByaWNlIiwiaGlnaGVyYmlkYWRkIiwiaW1hZ2UiLCJzeW1ib2wiLCJvd25lck9mIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJldGhlcmV1bSIsIm9uIiwicmVtb3ZlTGlzdGVuZXIiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwiUm93IiwiRVJDNzIxU2luZ2xldG9uIiwic2lnbmVyIiwiX2luc3RhbmNlIiwiZXRoZXJzIiwiZXJjNzIxIiwiY29udHJhY3ROYW1lIiwiY29udHJhY3RJbnN0YW5jZSIsInNldENvbnRyYWN0SW5zdGFuY2UiLCJmZXRjaERhdGEiLCJwcm92aWRlciIsImdldFNpZ25lciIsImdldEFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLGFBQVQsQ0FBdUI7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQXZCLEVBQW1EO0FBQ2pFLHNCQUNDO0FBQUEsMkJBQ0MsOERBQUMsNERBQUQ7QUFBQSw2QkFDQyw4REFBQyw0REFBRDtBQUFBLCtCQUNDO0FBQUEscUJBQ0VELFNBREYsU0FDZ0JDLFdBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFXQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUNBO0FBRWUsU0FBU0MsWUFBVCxDQUFzQjtBQUFFQyxjQUFGO0FBQWdCQyxNQUFoQjtBQUFzQkMsYUFBdEI7QUFBbUNDO0FBQW5DLENBQXRCLEVBQStEO0FBQzdFLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQ04sWUFBWSxJQUFJLEVBQWpCLENBQWxDOztBQUNBLFFBQU1PLEtBQUssZ0JBQ1YsOERBQUMscUVBQUQ7QUFDQyxTQUFL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QUFORjs7QUFTQWYsZ0JBQVEsQ0FBQzRCLGFBQVQsR0FBeUIsTUFBTXlDLE1BQU0sQ0FBQ1UsVUFBUCxFQUEvQjtBQUVBSiwyQkFBbUIsQ0FBQzNFLFFBQUQsQ0FBbkI7QUFDQSxPQW5CRCxDQW1CRSxPQUFPNkQsS0FBUCxFQUFjO0FBQ2YvQyxlQUFPLENBQUMrQyxLQUFSLENBQWNBLEtBQWQ7QUFDQTtBQUNELEtBdkJEOztBQXlCQWUsYUFBUztBQUVUMUQsVUFBTSxDQUFDNkMsUUFBUCxDQUFnQkMsRUFBaEIsQ0FBbUIsaUJBQW5CLEVBQXNDWSxTQUF0QztBQUNBMUQsVUFBTSxDQUFDNkMsUUFBUCxDQUFnQkMsRUFBaEIsQ0FBbUIsY0FBbkIsRUFBbUNZLFNBQW5DO0FBRUEsV0FBTyxNQUFNO0FBQ1oxRCxZQUFNLENBQUM2QyxRQUFQLENBQWdCRSxjQUFoQixDQUErQixpQkFBL0IsRUFBa0RXLFNBQWxEO0FBQ0ExRCxZQUFNLENBQUM2QyxRQUFQLENBQWdCRSxjQUFoQixDQUErQixjQUEvQixFQUErQ1csU0FBL0M7QUFDQSxLQUhEO0FBSUEsR0FuQ1EsRUFtQ04sRUFuQ00sQ0FBVDtBQXFDQSxTQUFPRixnQkFBUDtBQUNBLEM7Ozs7Ozs7Ozs7O0FDakRELG9DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3Byb2plY3RzL2VyYy03MjEvdmlldy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRva2VuTWV0YWRhdGEoeyB0b2tlbk5hbWUsIHRva2VuU3ltYm9sIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFJvdz5cblx0XHRcdFx0PENvbD5cblx0XHRcdFx0XHQ8aDE+XG5cdFx0XHRcdFx0XHR7dG9rZW5OYW1lfSAtIHt0b2tlblN5bWJvbH1cblx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8L0NvbD5cblx0XHRcdDwvUm93PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VGb3JtSW5wdXQoeyBkZWZhdWx0VmFsdWUsIHR5cGUsIHBsYWNlaG9sZGVyLCBpZCB9KSB7XG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlIHx8ICcnKTtcblx0Y29uc3QgaW5wdXQgPSAoXG5cdFx0PEZvcm0uQ29udHJvbFxuXHRcdFx0dmFsdWU9e3ZhbHVlIHx8ICcnfVxuXHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHR0eXBlPXt0eXBlfVxuXHRcdFx0aWQ9e2lkfVxuXHRcdC8+XG5cdCk7XG5cdHJldHVybiBbdmFsdWUsIGlucHV0LCBzZXRWYWx1ZV07XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRjb250cmFjdCxcblx0c2VuZGVyQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0dG9rZW5VcmksXG5cdHR5cGVcbn0pIHtcblx0Y29uc3QgW0Ftb3VudCwgQW1vdW50SW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdBbW91bnQnLFxuXHR9KTtcblxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlQoKSB7XG5cblx0XHR2YXIgcGFyc2VkID0gSlNPTi5wYXJzZSh0b2tlblVyaSk7XG5cdFx0aWYgKE51bWJlcihwYXJzZWRbJ3Byb3BlcnRpZXMnXVsncHJpY2UnXVsnZGVzY3JpcHRpb24nXSkgPCBOdW1iZXIoQW1vdW50KSkge1xuXHRcdFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10gPSBBbW91bnQ7XG5cdFx0XHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsnaGlnaGVyYmlkYWRkJ11bJ2Rlc2NyaXB0aW9uJ10gPSBzZW5kZXJBZGRyZXNzO1xuXG5cdFx0fVxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUJpZCh0b2tlbklkLCBBbW91bnQsIEpTT04uc3RyaW5naWZ5KHBhcnNlZCksIHNlbmRlckFkZHJlc3MpO1xuXHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0dmFyIGdldGFsbGJpZHMgPSBhd2FpdCBjb250cmFjdC5hbGxiaWRzdG9rZW4oMSk7XG5cdFx0Y29uc29sZS5sb2coZ2V0YWxsYmlkcyk7XG5cdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT4pIDogKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0KX1cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxGb3JtPlxuXG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4gRVRIPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXG5cdFx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4pIDogKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbmRORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0Y29udHJhY3QsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHRva2VuSWQsXG59KSB7XG5cdGNvbnN0IFtyZWNlaXZlckFkZHJlc3MsIHJlY2VpdmVyQWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQWRkcmVzcycsXG5cdH0pO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIHNlbmRORlQoKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RbXG5cdFx0XHQnc2FmZVRyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1NiknXG5cdFx0XShzZW5kZXJBZGRyZXNzLCByZWNlaXZlckFkZHJlc3MsIHRva2VuSWQpO1xuXG5cdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0U2VuZCBORlRcblx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5SZWNlaXZlciBBZGRyZXNzPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e3JlY2VpdmVyQWRkcmVzc0lucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e3NlbmRORlR9PlxuXHRcdFx0XHRcdFx0XHRTZW5kIE5GVFxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCBUb2tlbk1ldGFkYXRhIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvVG9rZW5NZXRhZGF0YSc7XG5pbXBvcnQgU2VuZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL1NlbmRORlRNb2RhbCc7XG5pbXBvcnQgQmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwnO1xuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3TkZUKHVzZXIpIHtcblx0Y29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgW3Rva2VuSWQsIHNldFRva2VuSWRdID0gdXNlU3RhdGUoLTEpO1xuXHRjb25zdCBbdG9rZW5OYW1lLCBzZXRUb2tlbk5hbWVdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbYmlkLCBzZXRCaWRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbaGlnaGVyYmlkLCBzZXRIaWdoZXJCaWRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW293bmVyLCBzZXRPd25lcl0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFt0b2tlbnVyaSwgc2V0VG9rZW50b2tlbnVyaV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblx0XHRcdGlmIChjb250cmFjdCAmJiBpZCkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKGlkKTtcblxuXHRcdFx0XHRzZXRUb2tlbnRva2VudXJpKHZhbHVlKTtcblx0XHRcdFx0Y29uc29sZS5sb2codG9rZW51cmkpO1xuXHRcdFx0XHRjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcblx0XHRcdFx0Y29uc29sZS5sb2cob2JqZWN0KTtcblx0XHRcdFx0c2V0TmFtZShvYmplY3QucHJvcGVydGllcy5uYW1lLmRlc2NyaXB0aW9uKTtcblx0XHRcdFx0dmFyIHByaWNlID0gXCIwXCI7XG5cdFx0XHRcdHRyeSB7IHByaWNlID0gb2JqZWN0LnByb3BlcnRpZXMucHJpY2UuZGVzY3JpcHRpb24gfSBjYXRjaCB7IH1cblx0XHRcdFx0c2V0QmlkKHByaWNlICsgXCIgRVRIXCIpO1xuXHRcdFx0XHR2YXIgaGlnaGVyYmlkYWRkID0gXCJOb25lXCI7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aGlnaGVyYmlkYWRkID0gb2JqZWN0LnByb3BlcnRpZXMuaGlnaGVyYmlkYWRkLmRlc2NyaXB0aW9uO1xuXHRcdFx0XHR9IGNhdGNoIHsgfVxuXHRcdFx0XHRzZXRIaWdoZXJCaWQoaGlnaGVyYmlkYWRkKVxuXHRcdFx0XHRzZXREZXNjcmlwdGlvbihvYmplY3QucHJvcGVydGllcy5kZXNjcmlwdGlvbi5kZXNjcmlwdGlvbik7XG5cdFx0XHRcdHNldFVybChvYmplY3QucHJvcGVydGllcy5pbWFnZS5kZXNjcmlwdGlvbik7XG5cblx0XHRcdFx0c2V0VG9rZW5OYW1lKGF3YWl0IGNvbnRyYWN0Lm5hbWUoKSk7XG5cdFx0XHRcdHNldFRva2VuU3ltYm9sKGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpKTtcblxuXHRcdFx0XHRjb25zdCBvd25lciA9IGF3YWl0IGNvbnRyYWN0Lm93bmVyT2YoaWQpO1xuXG5cdFx0XHRcdHNldE93bmVyKG93bmVyKTtcblx0XHRcdFx0c2V0VG9rZW5JZChpZCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGlkKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaENvbnRyYWN0RGF0YSgpO1xuXG5cdFx0d2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LmV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XG5cdFx0fTtcblx0fSwgW3JvdXRlci5xdWVyeSwgY29udHJhY3RdKTtcblxuXG5cdGZ1bmN0aW9uIGFjdGl2YXRlQmlkTkZUTW9kYWwoKSB7XG5cdFx0c2V0TW9kYWxTaG93KHRydWUpO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+e25hbWV9PC90aXRsZT5cblx0XHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bmFtZX0gLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8VG9rZW5NZXRhZGF0YSB0b2tlbk5hbWU9e3Rva2VuTmFtZX0gdG9rZW5TeW1ib2w9XCJORlRcIiAvPlxuXG5cdFx0XHQ8Um93PlxuXHRcdFx0XHQ8Q29sPlxuXG5cdFx0XHRcdFx0e3NpZ25lckFkZHJlc3MgIT0gb3duZXIgJiYgKFxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJmbG9hdC1lbmRcIiBvbkNsaWNrPXthY3RpdmF0ZUJpZE5GVE1vZGFsfT5cblx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9Db2w+XG5cdFx0XHQ8L1Jvdz5cblxuXHRcdFx0PEZvcm0+XG5cdFx0XHRcdDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtUGxhaW50ZXh0TmFtZVwiPlxuXHRcdFx0XHRcdDxGb3JtLkxhYmVsIGNvbHVtbiBzbT1cIjJcIj5cblx0XHRcdFx0XHRcdE5hbWVcblx0XHRcdFx0XHQ8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0PENvbCBzbT1cIjEwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sIHBsYWludGV4dCByZWFkT25seSBkZWZhdWx0VmFsdWU9e25hbWV9IC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0PEZvcm0uR3JvdXAgYXM9e1Jvd30gY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1QbGFpbnRleHROYW1lXCI+XG5cdFx0XHRcdFx0PEZvcm0uTGFiZWwgY29sdW1uIHNtPVwiMlwiPlxuXHRcdFx0XHRcdFx0SGlnaGVyIEJpZFxuXHRcdFx0XHRcdDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHQ8Q29sIHNtPVwiMTBcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2wgcGxhaW50ZXh0IHJlYWRPbmx5IGRlZmF1bHRWYWx1ZT17YmlkfSAvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtUGxhaW50ZXh0TmFtZVwiPlxuXHRcdFx0XHRcdDxGb3JtLkxhYmVsIGNvbHVtbiBzbT1cIjJcIj5cblx0XHRcdFx0XHRcdEhpZ2hlciBCaWQgQWRkcmVzc1xuXHRcdFx0XHRcdDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHQ8Q29sIHNtPVwiMTBcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2wgcGxhaW50ZXh0IHJlYWRPbmx5IGRlZmF1bHRWYWx1ZT17aGlnaGVyYmlkfSAvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdDxGb3JtLkdyb3VwXG5cdFx0XHRcdFx0YXM9e1Jvd31cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYi0zXCJcblx0XHRcdFx0XHRjb250cm9sSWQ9XCJmb3JtUGxhaW50ZXh0RGVzY3JpcHRpb25cIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEZvcm0uTGFiZWwgY29sdW1uIHNtPVwiMlwiPlxuXHRcdFx0XHRcdFx0RGVzY3JpcHRpb25cblx0XHRcdFx0XHQ8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0PENvbCBzbT1cIjEwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5Db250cm9sIHBsYWludGV4dCByZWFkT25seSBkZWZhdWx0VmFsdWU9e2Rlc2NyaXB0aW9ufSAvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cblx0XHRcdFx0PEZvcm0uR3JvdXBcblx0XHRcdFx0XHRhcz17Um93fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1iLTNcIlxuXHRcdFx0XHRcdGNvbnRyb2xJZD1cImZvcm1QbGFpbnRleHRPd25lclwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Rm9ybS5MYWJlbCBjb2x1bW4gc209XCIyXCI+XG5cdFx0XHRcdFx0XHRPd25lclxuXHRcdFx0XHRcdDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHQ8Q29sIHNtPVwiMTBcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkNvbnRyb2wgcGxhaW50ZXh0IHJlYWRPbmx5IGRlZmF1bHRWYWx1ZT17b3duZXJ9IC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvRm9ybS5Hcm91cD5cblxuXHRcdFx0XHQ8Rm9ybS5Hcm91cFxuXHRcdFx0XHRcdGFzPXtSb3d9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWItM1wiXG5cdFx0XHRcdFx0Y29udHJvbElkPVwiZm9ybVBsYWludGV4dEltYWdlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxGb3JtLkxhYmVsIGNvbHVtbiBzbT1cIjJcIj5cblx0XHRcdFx0XHRcdEltYWdlXG5cdFx0XHRcdFx0PC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdDxDb2wgc209XCIxMFwiPlxuXHRcdFx0XHRcdFx0PEltYWdlIHNyYz17dXJsfSBhbHQ9XCJBbiBORlQgSW1hZ2VcIiByb3VuZGVkIGZsdWlkIC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdDwvRm9ybT5cblxuXG5cblx0XHRcdDxCaWRORlRNb2RhbFxuXHRcdFx0XHRzaG93PXttb2RhbFNob3d9XG5cdFx0XHRcdG9uSGlkZT17KCkgPT4ge1xuXHRcdFx0XHRcdHNldE1vZGFsU2hvdyhmYWxzZSk7XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcblx0XHRcdFx0XHRmZXRjaENvbnRyYWN0RGF0YSgpO1xuXHRcdFx0XHR9fVxuXHRcdFx0XHRjb250cmFjdD17Y29udHJhY3R9XG5cdFx0XHRcdEFtb3VudD17c2lnbmVyQWRkcmVzc31cblx0XHRcdFx0dG9rZW5JZD17dG9rZW5JZH1cblx0XHRcdFx0c2VuZGVyQWRkcmVzcz17c2lnbmVyQWRkcmVzc31cblx0XHRcdFx0dG9rZW5Vcmk9e3Rva2VudXJpfVxuXHRcdFx0Lz5cblxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcblxuaW1wb3J0IGVyYzcyMSBmcm9tICcuLi9jb250cmFjdHMvZGVwbG95bWVudHMvbWV0aXMvTWV0aXNFUkM3MjEuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVSQzcyMVNpbmdsZXRvbihzaWduZXIpIHtcblx0aWYgKCFFUkM3MjFTaW5nbGV0b24uX2luc3RhbmNlKSB7XG5cdFx0RVJDNzIxU2luZ2xldG9uLl9pbnN0YW5jZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG5cdFx0XHRlcmM3MjEuYWRkcmVzcyxcblx0XHRcdGVyYzcyMS5hYmksXG5cdFx0XHRzaWduZXJcblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIEVSQzcyMVNpbmdsZXRvbi5faW5zdGFuY2U7XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcblxuaW1wb3J0IEVSQzcyMVNpbmdsZXRvbiBmcm9tICcuL0VSQzcyMVNpbmdsZXRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNvbnRyYWN0KGNvbnRyYWN0TmFtZSkge1xuXHRjb25zdCBbY29udHJhY3RJbnN0YW5jZSwgc2V0Q29udHJhY3RJbnN0YW5jZV0gPSB1c2VTdGF0ZSh7XG5cdFx0Y29udHJhY3Q6IG51bGwsXG5cdFx0c2lnbmVyQWRkcmVzczogbnVsbCxcblx0fSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuXHRcdFx0XHRjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcblx0XHRcdFx0Y29uc3QgY29udHJhY3QgPSB7IGNvbnRyYWN0OiBudWxsLCBzaWduZXJBZGRyZXNzOiBudWxsIH07XG5cblx0XHRcdFx0Ly8gU2V0cyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHNwZWNpZmljIGNvbnRyYWN0IHBlciBhcHBsaWNhdGlvblxuXHRcdFx0XHQvLyBVc2VmdWwgZm9yIHN3aXRjaGluZyBhY3Jvc3MgbXVsdGlwbGUgY29udHJhY3RzIGluIGEgc2luZ2xlIGFwcGxpY2F0aW9uXG5cdFx0XHRcdHN3aXRjaCAoY29udHJhY3ROYW1lKSB7XG5cdFx0XHRcdFx0Y2FzZSAnRVJDNzIxJzpcblx0XHRcdFx0XHRcdGNvbnRyYWN0LmNvbnRyYWN0ID0gRVJDNzIxU2luZ2xldG9uKHNpZ25lcik7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ludmFsaWQgY29udHJhY3QnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udHJhY3Quc2lnbmVyQWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XG5cblx0XHRcdFx0c2V0Q29udHJhY3RJbnN0YW5jZShjb250cmFjdCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0ZmV0Y2hEYXRhKCk7XG5cblx0XHR3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGZldGNoRGF0YSk7XG5cdFx0d2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCBmZXRjaERhdGEpO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgZmV0Y2hEYXRhKTtcblx0XHRcdHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignY2hhaW5DaGFuZ2VkJywgZmV0Y2hEYXRhKTtcblx0XHR9O1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIGNvbnRyYWN0SW5zdGFuY2U7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldGhlcnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29sXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0ltYWdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==