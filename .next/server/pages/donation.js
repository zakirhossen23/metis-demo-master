(function() {
var exports = {};
exports.id = "pages/donation";
exports.ids = ["pages/donation"];
exports.modules = {

/***/ "./contracts/deployments/metis/MetisERC721.json":
/*!******************************************************!*\
  !*** ./contracts/deployments/metis/MetisERC721.json ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"address":"0x8F6bdf38B8265Eb4E955f7C3aDE4F8A9E3659B45","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"},{"internalType":"string","name":"_eventURI","type":"string"}],"name":"_setEventURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"_setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allbidstoken","outputs":[{"internalType":"uint256","name":"TokenID","type":"uint256"},{"internalType":"string","name":"bid","type":"string"},{"internalType":"address","name":"bidderHash","type":"address"},{"internalType":"string","name":"date","type":"string"},{"internalType":"string","name":"status","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bidCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_claimer","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"claimToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"string","name":"_bid","type":"string"},{"internalType":"string","name":"_updatedURI","type":"string"},{"internalType":"address","name":"bidder","type":"address"}],"name":"createBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_claimer","type":"address"},{"internalType":"string","name":"_eventURI","type":"string"}],"name":"createEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"eventURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}],"transactionHash":"0xd3606b89ececee3258d5bd3c81b3d8673e2283a1b42d62a4761741b20ba9497b","receipt":{"to":null,"from":"0x168e007d9f5a794794E40035C5214963cb16BFB7","contractAddress":"0x8F6bdf38B8265Eb4E955f7C3aDE4F8A9E3659B45","transactionIndex":0,"gasUsed":"20365855","logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","blockHash":"0x475a2d801c08e6f127252077fa06fff8dc2d8d98485a3fa5a49841988ba941e2","transactionHash":"0xd3606b89ececee3258d5bd3c81b3d8673e2283a1b42d62a4761741b20ba9497b","logs":[],"blockNumber":88605,"cumulativeGasUsed":"20365855","status":1,"byzantium":true},"args":["Metis","MET"],"solcInputHash":"e594003a143ab383f6199067353a259e","metadata":"{\\"compiler\\":{\\"version\\":\\"0.8.6+commit.11564f7e\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"symbol\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"approved\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"ApprovalForAll\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"eventId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_eventURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setEventURI\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setTokenURI\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"allbidstoken\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"TokenID\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"bid\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"bidderHash\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"date\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"status\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"bidCount\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_claimer\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"claimToken\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_bid\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_updatedURI\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"bidder\\",\\"type\\":\\"address\\"}],\\"name\\":\\"createBid\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_claimer\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_eventURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"createEvent\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"eventId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"eventURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getApproved\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"}],\\"name\\":\\"isApprovedForAll\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"ownerOf\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"bytes\\",\\"name\\":\\"_data\\",\\"type\\":\\"bytes\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"setApprovalForAll\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bytes4\\",\\"name\\":\\"interfaceId\\",\\"type\\":\\"bytes4\\"}],\\"name\\":\\"supportsInterface\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"tokenURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalEvent\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{\\"approve(address,uint256)\\":{\\"details\\":\\"See {IERC721-approve}.\\"},\\"balanceOf(address)\\":{\\"details\\":\\"See {IERC721-balanceOf}.\\"},\\"getApproved(uint256)\\":{\\"details\\":\\"See {IERC721-getApproved}.\\"},\\"isApprovedForAll(address,address)\\":{\\"details\\":\\"See {IERC721-isApprovedForAll}.\\"},\\"name()\\":{\\"details\\":\\"See {IERC721Metadata-name}.\\"},\\"ownerOf(uint256)\\":{\\"details\\":\\"See {IERC721-ownerOf}.\\"},\\"safeTransferFrom(address,address,uint256)\\":{\\"details\\":\\"See {IERC721-safeTransferFrom}.\\"},\\"safeTransferFrom(address,address,uint256,bytes)\\":{\\"details\\":\\"See {IERC721-safeTransferFrom}.\\"},\\"setApprovalForAll(address,bool)\\":{\\"details\\":\\"See {IERC721-setApprovalForAll}.\\"},\\"supportsInterface(bytes4)\\":{\\"details\\":\\"See {IERC165-supportsInterface}.\\"},\\"symbol()\\":{\\"details\\":\\"See {IERC721Metadata-symbol}.\\"},\\"tokenURI(uint256)\\":{\\"details\\":\\"See {IERC721Metadata-tokenURI}.\\"},\\"transferFrom(address,address,uint256)\\":{\\"details\\":\\"See {IERC721-transferFrom}.\\"}},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"contracts/MetisERC721.sol\\":\\"MetisERC721\\"},\\"evmVersion\\":\\"berlin\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\",\\"useLiteralContent\\":true},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"@openzeppelin/contracts/token/ERC721/ERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/ERC721.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"./IERC721.sol\\\\\\";\\\\nimport \\\\\\"./IERC721Receiver.sol\\\\\\";\\\\nimport \\\\\\"./extensions/IERC721Metadata.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Address.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Context.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Strings.sol\\\\\\";\\\\nimport \\\\\\"../../utils/introspection/ERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\\\\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\\\\n * {ERC721Enumerable}.\\\\n */\\\\ncontract ERC721 is Context, ERC165, IERC721, IERC721Metadata {\\\\n    using Address for address;\\\\n    using Strings for uint256;\\\\n\\\\n    // Token name\\\\n    string private _name;\\\\n\\\\n    // Token symbol\\\\n    string private _symbol;\\\\n\\\\n    // Mapping from token ID to owner address\\\\n    mapping(uint256 => address) private _owners;\\\\n\\\\n    // Mapping owner address to token count\\\\n    mapping(address => uint256) private _balances;\\\\n\\\\n    // Mapping from token ID to approved address\\\\n    mapping(uint256 => address) private _tokenApprovals;\\\\n\\\\n    // Mapping from owner to operator approvals\\\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\\\n\\\\n    /**\\\\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\\\\n     */\\\\n    constructor(string memory name_, string memory symbol_) {\\\\n        _name = name_;\\\\n        _symbol = symbol_;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC165-supportsInterface}.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\\\\n        return\\\\n            interfaceId == type(IERC721).interfaceId ||\\\\n            interfaceId == type(IERC721Metadata).interfaceId ||\\\\n            super.supportsInterface(interfaceId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-balanceOf}.\\\\n     */\\\\n    function balanceOf(address owner) public view virtual override returns (uint256) {\\\\n        require(owner != address(0), \\\\\\"ERC721: balance query for the zero address\\\\\\");\\\\n        return _balances[owner];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-ownerOf}.\\\\n     */\\\\n    function ownerOf(uint256 tokenId) public view virtual override returns (address) {\\\\n        address owner = _owners[tokenId];\\\\n        require(owner != address(0), \\\\\\"ERC721: owner query for nonexistent token\\\\\\");\\\\n        return owner;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-name}.\\\\n     */\\\\n    function name() public view virtual override returns (string memory) {\\\\n        return _name;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-symbol}.\\\\n     */\\\\n    function symbol() public view virtual override returns (string memory) {\\\\n        return _symbol;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-tokenURI}.\\\\n     */\\\\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721Metadata: URI query for nonexistent token\\\\\\");\\\\n\\\\n        string memory baseURI = _baseURI();\\\\n        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : \\\\\\"\\\\\\";\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\\\\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\\\\n     * by default, can be overriden in child contracts.\\\\n     */\\\\n    function _baseURI() internal view virtual returns (string memory) {\\\\n        return \\\\\\"\\\\\\";\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-approve}.\\\\n     */\\\\n    function approve(address to, uint256 tokenId) public virtual override {\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n        require(to != owner, \\\\\\"ERC721: approval to current owner\\\\\\");\\\\n\\\\n        require(\\\\n            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\\\\n            \\\\\\"ERC721: approve caller is not owner nor approved for all\\\\\\"\\\\n        );\\\\n\\\\n        _approve(to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-getApproved}.\\\\n     */\\\\n    function getApproved(uint256 tokenId) public view virtual override returns (address) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721: approved query for nonexistent token\\\\\\");\\\\n\\\\n        return _tokenApprovals[tokenId];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-setApprovalForAll}.\\\\n     */\\\\n    function setApprovalForAll(address operator, bool approved) public virtual override {\\\\n        _setApprovalForAll(_msgSender(), operator, approved);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-isApprovedForAll}.\\\\n     */\\\\n    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {\\\\n        return _operatorApprovals[owner][operator];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-transferFrom}.\\\\n     */\\\\n    function transferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) public virtual override {\\\\n        //solhint-disable-next-line max-line-length\\\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\\\\\"ERC721: transfer caller is not owner nor approved\\\\\\");\\\\n\\\\n        _transfer(from, to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-safeTransferFrom}.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) public virtual override {\\\\n        safeTransferFrom(from, to, tokenId, \\\\\\"\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-safeTransferFrom}.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) public virtual override {\\\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\\\\\"ERC721: transfer caller is not owner nor approved\\\\\\");\\\\n        _safeTransfer(from, to, tokenId, _data);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\\\n     *\\\\n     * `_data` is additional data, it has no specified format and it is sent in call to `to`.\\\\n     *\\\\n     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.\\\\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _safeTransfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) internal virtual {\\\\n        _transfer(from, to, tokenId);\\\\n        require(_checkOnERC721Received(from, to, tokenId, _data), \\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns whether `tokenId` exists.\\\\n     *\\\\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\\\\n     *\\\\n     * Tokens start existing when they are minted (`_mint`),\\\\n     * and stop existing when they are burned (`_burn`).\\\\n     */\\\\n    function _exists(uint256 tokenId) internal view virtual returns (bool) {\\\\n        return _owners[tokenId] != address(0);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns whether `spender` is allowed to manage `tokenId`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721: operator query for nonexistent token\\\\\\");\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Safely mints `tokenId` and transfers it to `to`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must not exist.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _safeMint(address to, uint256 tokenId) internal virtual {\\\\n        _safeMint(to, tokenId, \\\\\\"\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\\\\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\\\\n     */\\\\n    function _safeMint(\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) internal virtual {\\\\n        _mint(to, tokenId);\\\\n        require(\\\\n            _checkOnERC721Received(address(0), to, tokenId, _data),\\\\n            \\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\"\\\\n        );\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Mints `tokenId` and transfers it to `to`.\\\\n     *\\\\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must not exist.\\\\n     * - `to` cannot be the zero address.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _mint(address to, uint256 tokenId) internal virtual {\\\\n        require(to != address(0), \\\\\\"ERC721: mint to the zero address\\\\\\");\\\\n        require(!_exists(tokenId), \\\\\\"ERC721: token already minted\\\\\\");\\\\n\\\\n        _beforeTokenTransfer(address(0), to, tokenId);\\\\n\\\\n        _balances[to] += 1;\\\\n        _owners[tokenId] = to;\\\\n\\\\n        emit Transfer(address(0), to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Destroys `tokenId`.\\\\n     * The approval is cleared when the token is burned.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _burn(uint256 tokenId) internal virtual {\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n\\\\n        _beforeTokenTransfer(owner, address(0), tokenId);\\\\n\\\\n        // Clear approvals\\\\n        _approve(address(0), tokenId);\\\\n\\\\n        _balances[owner] -= 1;\\\\n        delete _owners[tokenId];\\\\n\\\\n        emit Transfer(owner, address(0), tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Transfers `tokenId` from `from` to `to`.\\\\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must be owned by `from`.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _transfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) internal virtual {\\\\n        require(ERC721.ownerOf(tokenId) == from, \\\\\\"ERC721: transfer of token that is not own\\\\\\");\\\\n        require(to != address(0), \\\\\\"ERC721: transfer to the zero address\\\\\\");\\\\n\\\\n        _beforeTokenTransfer(from, to, tokenId);\\\\n\\\\n        // Clear approvals from the previous owner\\\\n        _approve(address(0), tokenId);\\\\n\\\\n        _balances[from] -= 1;\\\\n        _balances[to] += 1;\\\\n        _owners[tokenId] = to;\\\\n\\\\n        emit Transfer(from, to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Approve `to` to operate on `tokenId`\\\\n     *\\\\n     * Emits a {Approval} event.\\\\n     */\\\\n    function _approve(address to, uint256 tokenId) internal virtual {\\\\n        _tokenApprovals[tokenId] = to;\\\\n        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\\\n     *\\\\n     * Emits a {ApprovalForAll} event.\\\\n     */\\\\n    function _setApprovalForAll(\\\\n        address owner,\\\\n        address operator,\\\\n        bool approved\\\\n    ) internal virtual {\\\\n        require(owner != operator, \\\\\\"ERC721: approve to caller\\\\\\");\\\\n        _operatorApprovals[owner][operator] = approved;\\\\n        emit ApprovalForAll(owner, operator, approved);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.\\\\n     * The call is not executed if the target address is not a contract.\\\\n     *\\\\n     * @param from address representing the previous owner of the given token ID\\\\n     * @param to target address that will receive the tokens\\\\n     * @param tokenId uint256 ID of the token to be transferred\\\\n     * @param _data bytes optional data to send along with the call\\\\n     * @return bool whether the call correctly returned the expected magic value\\\\n     */\\\\n    function _checkOnERC721Received(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) private returns (bool) {\\\\n        if (to.isContract()) {\\\\n            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {\\\\n                return retval == IERC721Receiver.onERC721Received.selector;\\\\n            } catch (bytes memory reason) {\\\\n                if (reason.length == 0) {\\\\n                    revert(\\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\");\\\\n                } else {\\\\n                    assembly {\\\\n                        revert(add(32, reason), mload(reason))\\\\n                    }\\\\n                }\\\\n            }\\\\n        } else {\\\\n            return true;\\\\n        }\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Hook that is called before any token transfer. This includes minting\\\\n     * and burning.\\\\n     *\\\\n     * Calling conditions:\\\\n     *\\\\n     * - When `from` and `to` are both non-zero, ``from``\'s `tokenId` will be\\\\n     * transferred to `to`.\\\\n     * - When `from` is zero, `tokenId` will be minted for `to`.\\\\n     * - When `to` is zero, ``from``\'s `tokenId` will be burned.\\\\n     * - `from` and `to` are never both zero.\\\\n     *\\\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\\\n     */\\\\n    function _beforeTokenTransfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) internal virtual {}\\\\n}\\\\n\\",\\"keccak256\\":\\"0x81c02855bc239e16ec09eee000a8bec691424c715188d6d881037e69c45414c4\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/IERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../../utils/introspection/IERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Required interface of an ERC721 compliant contract.\\\\n */\\\\ninterface IERC721 is IERC165 {\\\\n    /**\\\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\\\n     */\\\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\\\n\\\\n    /**\\\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\\\n     */\\\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\\\n\\\\n    /**\\\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\\\n     */\\\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\\\n\\\\n    /**\\\\n     * @dev Returns the number of tokens in ``owner``\'s account.\\\\n     */\\\\n    function balanceOf(address owner) external view returns (uint256 balance);\\\\n\\\\n    /**\\\\n     * @dev Returns the owner of the `tokenId` token.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) external;\\\\n\\\\n    /**\\\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\\\n     *\\\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must be owned by `from`.\\\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function transferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) external;\\\\n\\\\n    /**\\\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\\\n     * The approval is cleared when the token is transferred.\\\\n     *\\\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - The caller must own the token or be an approved operator.\\\\n     * - `tokenId` must exist.\\\\n     *\\\\n     * Emits an {Approval} event.\\\\n     */\\\\n    function approve(address to, uint256 tokenId) external;\\\\n\\\\n    /**\\\\n     * @dev Returns the account approved for `tokenId` token.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\\\n\\\\n    /**\\\\n     * @dev Approve or remove `operator` as an operator for the caller.\\\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - The `operator` cannot be the caller.\\\\n     *\\\\n     * Emits an {ApprovalForAll} event.\\\\n     */\\\\n    function setApprovalForAll(address operator, bool _approved) external;\\\\n\\\\n    /**\\\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\\\n     *\\\\n     * See {setApprovalForAll}\\\\n     */\\\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes calldata data\\\\n    ) external;\\\\n}\\\\n\\",\\"keccak256\\":\\"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721Receiver.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @title ERC721 token receiver interface\\\\n * @dev Interface for any contract that wants to support safeTransfers\\\\n * from ERC721 asset contracts.\\\\n */\\\\ninterface IERC721Receiver {\\\\n    /**\\\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\\\n     * by `operator` from `from`, this function is called.\\\\n     *\\\\n     * It must return its Solidity selector to confirm the token transfer.\\\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\\\\n     *\\\\n     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\\\\n     */\\\\n    function onERC721Received(\\\\n        address operator,\\\\n        address from,\\\\n        uint256 tokenId,\\\\n        bytes calldata data\\\\n    ) external returns (bytes4);\\\\n}\\\\n\\",\\"keccak256\\":\\"0xd5fa74b4fb323776fa4a8158800fec9d5ac0fec0d6dd046dd93798632ada265f\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Metadata.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../IERC721.sol\\\\\\";\\\\n\\\\n/**\\\\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\\\n * @dev See https://eips.ethereum.org/EIPS/eip-721\\\\n */\\\\ninterface IERC721Metadata is IERC721 {\\\\n    /**\\\\n     * @dev Returns the token collection name.\\\\n     */\\\\n    function name() external view returns (string memory);\\\\n\\\\n    /**\\\\n     * @dev Returns the token collection symbol.\\\\n     */\\\\n    function symbol() external view returns (string memory);\\\\n\\\\n    /**\\\\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\\\\n     */\\\\n    function tokenURI(uint256 tokenId) external view returns (string memory);\\\\n}\\\\n\\",\\"keccak256\\":\\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Address.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Address.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Collection of functions related to the address type\\\\n */\\\\nlibrary Address {\\\\n    /**\\\\n     * @dev Returns true if `account` is a contract.\\\\n     *\\\\n     * [IMPORTANT]\\\\n     * ====\\\\n     * It is unsafe to assume that an address for which this function returns\\\\n     * false is an externally-owned account (EOA) and not a contract.\\\\n     *\\\\n     * Among others, `isContract` will return false for the following\\\\n     * types of addresses:\\\\n     *\\\\n     *  - an externally-owned account\\\\n     *  - a contract in construction\\\\n     *  - an address where a contract will be created\\\\n     *  - an address where a contract lived, but was destroyed\\\\n     * ====\\\\n     */\\\\n    function isContract(address account) internal view returns (bool) {\\\\n        // This method relies on extcodesize, which returns 0 for contracts in\\\\n        // construction, since the code is only stored at the end of the\\\\n        // constructor execution.\\\\n\\\\n        uint256 size;\\\\n        assembly {\\\\n            size := extcodesize(account)\\\\n        }\\\\n        return size > 0;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\\\n     * `recipient`, forwarding all available gas and reverting on errors.\\\\n     *\\\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\\\n     * imposed by `transfer`, making them unable to receive funds via\\\\n     * `transfer`. {sendValue} removes this limitation.\\\\n     *\\\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\\\n     *\\\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\\\n     * taken to not create reentrancy vulnerabilities. Consider using\\\\n     * {ReentrancyGuard} or the\\\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\\\n     */\\\\n    function sendValue(address payable recipient, uint256 amount) internal {\\\\n        require(address(this).balance >= amount, \\\\\\"Address: insufficient balance\\\\\\");\\\\n\\\\n        (bool success, ) = recipient.call{value: amount}(\\\\\\"\\\\\\");\\\\n        require(success, \\\\\\"Address: unable to send value, recipient may have reverted\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Performs a Solidity function call using a low level `call`. A\\\\n     * plain `call` is an unsafe replacement for a function call: use this\\\\n     * function instead.\\\\n     *\\\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\\\n     * function (like regular Solidity function calls).\\\\n     *\\\\n     * Returns the raw returned data. To convert to the expected return value,\\\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `target` must be a contract.\\\\n     * - calling `target` with `data` must not revert.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\\\n        return functionCall(target, data, \\\\\\"Address: low-level call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        return functionCallWithValue(target, data, 0, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but also transferring `value` wei to `target`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - the calling contract must have an ETH balance of at least `value`.\\\\n     * - the called Solidity function must be `payable`.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCallWithValue(\\\\n        address target,\\\\n        bytes memory data,\\\\n        uint256 value\\\\n    ) internal returns (bytes memory) {\\\\n        return functionCallWithValue(target, data, value, \\\\\\"Address: low-level call with value failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCallWithValue(\\\\n        address target,\\\\n        bytes memory data,\\\\n        uint256 value,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        require(address(this).balance >= value, \\\\\\"Address: insufficient balance for call\\\\\\");\\\\n        require(isContract(target), \\\\\\"Address: call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but performing a static call.\\\\n     *\\\\n     * _Available since v3.3._\\\\n     */\\\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\\\n        return functionStaticCall(target, data, \\\\\\"Address: low-level static call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\\\n     * but performing a static call.\\\\n     *\\\\n     * _Available since v3.3._\\\\n     */\\\\n    function functionStaticCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal view returns (bytes memory) {\\\\n        require(isContract(target), \\\\\\"Address: static call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but performing a delegate call.\\\\n     *\\\\n     * _Available since v3.4._\\\\n     */\\\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\\\n        return functionDelegateCall(target, data, \\\\\\"Address: low-level delegate call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\\\n     * but performing a delegate call.\\\\n     *\\\\n     * _Available since v3.4._\\\\n     */\\\\n    function functionDelegateCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        require(isContract(target), \\\\\\"Address: delegate call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\\\n     * revert reason using the provided one.\\\\n     *\\\\n     * _Available since v4.3._\\\\n     */\\\\n    function verifyCallResult(\\\\n        bool success,\\\\n        bytes memory returndata,\\\\n        string memory errorMessage\\\\n    ) internal pure returns (bytes memory) {\\\\n        if (success) {\\\\n            return returndata;\\\\n        } else {\\\\n            // Look for revert reason and bubble it up if present\\\\n            if (returndata.length > 0) {\\\\n                // The easiest way to bubble the revert reason is using memory via assembly\\\\n\\\\n                assembly {\\\\n                    let returndata_size := mload(returndata)\\\\n                    revert(add(32, returndata), returndata_size)\\\\n                }\\\\n            } else {\\\\n                revert(errorMessage);\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x51b758a8815ecc9596c66c37d56b1d33883a444631a3f916b9fe65cb863ef7c4\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Context.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Provides information about the current execution context, including the\\\\n * sender of the transaction and its data. While these are generally available\\\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\\\n * manner, since when dealing with meta-transactions the account sending and\\\\n * paying for execution may not be the actual sender (as far as an application\\\\n * is concerned).\\\\n *\\\\n * This contract is only required for intermediate, library-like contracts.\\\\n */\\\\nabstract contract Context {\\\\n    function _msgSender() internal view virtual returns (address) {\\\\n        return msg.sender;\\\\n    }\\\\n\\\\n    function _msgData() internal view virtual returns (bytes calldata) {\\\\n        return msg.data;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Strings.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev String operations.\\\\n */\\\\nlibrary Strings {\\\\n    bytes16 private constant _HEX_SYMBOLS = \\\\\\"0123456789abcdef\\\\\\";\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\\\n     */\\\\n    function toString(uint256 value) internal pure returns (string memory) {\\\\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\\\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\\\n\\\\n        if (value == 0) {\\\\n            return \\\\\\"0\\\\\\";\\\\n        }\\\\n        uint256 temp = value;\\\\n        uint256 digits;\\\\n        while (temp != 0) {\\\\n            digits++;\\\\n            temp /= 10;\\\\n        }\\\\n        bytes memory buffer = new bytes(digits);\\\\n        while (value != 0) {\\\\n            digits -= 1;\\\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\\\n            value /= 10;\\\\n        }\\\\n        return string(buffer);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\\\n     */\\\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\\\n        if (value == 0) {\\\\n            return \\\\\\"0x00\\\\\\";\\\\n        }\\\\n        uint256 temp = value;\\\\n        uint256 length = 0;\\\\n        while (temp != 0) {\\\\n            length++;\\\\n            temp >>= 8;\\\\n        }\\\\n        return toHexString(value, length);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\\\n     */\\\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\\\n        bytes memory buffer = new bytes(2 * length + 2);\\\\n        buffer[0] = \\\\\\"0\\\\\\";\\\\n        buffer[1] = \\\\\\"x\\\\\\";\\\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\\\n            value >>= 4;\\\\n        }\\\\n        require(value == 0, \\\\\\"Strings: hex length insufficient\\\\\\");\\\\n        return string(buffer);\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x32c202bd28995dd20c4347b7c6467a6d3241c74c8ad3edcbb610cd9205916c45\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/introspection/ERC165.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"./IERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Implementation of the {IERC165} interface.\\\\n *\\\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\\\n * for the additional interface id that will be supported. For example:\\\\n *\\\\n * ```solidity\\\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\\\n * }\\\\n * ```\\\\n *\\\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\\\n */\\\\nabstract contract ERC165 is IERC165 {\\\\n    /**\\\\n     * @dev See {IERC165-supportsInterface}.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\\\n        return interfaceId == type(IERC165).interfaceId;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/introspection/IERC165.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Interface of the ERC165 standard, as defined in the\\\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\\\n *\\\\n * Implementers can declare support of contract interfaces, which can then be\\\\n * queried by others ({ERC165Checker}).\\\\n *\\\\n * For an implementation, see {ERC165}.\\\\n */\\\\ninterface IERC165 {\\\\n    /**\\\\n     * @dev Returns true if this contract implements the interface defined by\\\\n     * `interfaceId`. See the corresponding\\\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\\\n     * to learn more about how these ids are created.\\\\n     *\\\\n     * This function call must use less than 30 000 gas.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\\\n}\\\\n\\",\\"keccak256\\":\\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\\",\\"license\\":\\"MIT\\"},\\"contracts/MetisERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"@openzeppelin/contracts/token/ERC721/ERC721.sol\\\\\\";\\\\n\\\\ncontract MetisERC721 is ERC721 {\\\\n\\\\tuint256 private _tokenIds;\\\\n\\\\tuint256 private _eventIds;\\\\n\\\\tmapping(uint256 => string) private _tokenURIs;\\\\n\\\\tmapping(uint256 => string) private _eventURIs;\\\\n\\\\n\\\\tmapping(uint256 => Bid) public allbidstoken;\\\\n\\\\n\\\\tuint256 public bidCount = 0;\\\\n\\\\tstruct Bid {\\\\n\\\\t\\\\tuint256 TokenID;\\\\n\\\\t\\\\tstring bid;\\\\n\\\\t\\\\taddress bidderHash;\\\\n\\\\t\\\\tstring date;\\\\n\\\\t\\\\tstring status;\\\\n\\\\t}\\\\n\\\\tstruct Bidder {\\\\n\\\\t\\\\tuint256 id;\\\\n\\\\t\\\\tstring username;\\\\n\\\\t}\\\\n\\\\n\\\\tconstructor(string memory name, string memory symbol)\\\\n\\\\t\\\\tERC721(name, symbol)\\\\n\\\\t{}\\\\n\\\\n\\\\tfunction claimToken(address _claimer, string memory _tokenURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\treturns (uint256)\\\\n\\\\t{\\\\n\\\\t\\\\t_mint(_claimer, _tokenIds);\\\\n\\\\t\\\\t_setTokenURI(_tokenIds, _tokenURI);\\\\n\\\\n\\\\t\\\\t_tokenIds++;\\\\n\\\\n\\\\t\\\\treturn _tokenIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction createEvent(address _claimer, string memory _eventURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\treturns (uint256)\\\\n\\\\t{\\\\n\\\\t\\\\t_mint(_claimer, _eventIds);\\\\n\\\\t\\\\t_setEventURI(_eventIds, _eventURI);\\\\n\\\\n\\\\t\\\\t_eventIds++;\\\\n\\\\n\\\\t\\\\treturn _eventIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction _setEventURI(uint256 eventId, string memory _eventURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tvirtual\\\\n\\\\t{\\\\n\\\\t\\\\t_eventURIs[eventId] = _eventURI;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction _setTokenURI(uint256 tokenId, string memory _tokenURI)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tvirtual\\\\n\\\\t{\\\\n\\\\t\\\\trequire(\\\\n\\\\t\\\\t\\\\t_exists(tokenId),\\\\n\\\\t\\\\t\\\\t\\\\\\"ERC721Metadata: URI set of nonexistent token\\\\\\"\\\\n\\\\t\\\\t);\\\\n\\\\t\\\\t_tokenURIs[tokenId] = _tokenURI;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction eventURI(uint256 eventId) public view returns (string memory) {\\\\n\\\\t\\\\treturn _eventURIs[eventId];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction tokenURI(uint256 tokenId)\\\\n\\\\t\\\\tpublic\\\\n\\\\t\\\\tview\\\\n\\\\t\\\\tvirtual\\\\n\\\\t\\\\toverride\\\\n\\\\t\\\\treturns (string memory)\\\\n\\\\t{\\\\n\\\\t\\\\trequire(\\\\n\\\\t\\\\t\\\\t_exists(tokenId),\\\\n\\\\t\\\\t\\\\t\\\\\\"ERC721Metadata: URI query for nonexistent token\\\\\\"\\\\n\\\\t\\\\t);\\\\n\\\\n\\\\t\\\\treturn _tokenURIs[tokenId];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction totalSupply() public view returns (uint256) {\\\\n\\\\t\\\\treturn _tokenIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction totalEvent() public view returns (uint256) {\\\\n\\\\t\\\\treturn _eventIds;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction createBid(\\\\n\\\\t\\\\tuint256 _tokenId,\\\\n\\\\t\\\\tstring memory _bid,\\\\n\\\\t\\\\tstring memory _updatedURI,\\\\n\\\\t\\\\taddress bidder\\\\n\\\\t) public {\\\\n\\\\t\\\\tbidCount++;\\\\n\\\\t\\\\t_tokenURIs[_tokenId] = _updatedURI;\\\\n\\\\n\\\\t\\\\tallbidstoken[bidCount] = Bid(_tokenId, _bid, bidder, \\\\\\"date\\\\\\", \\\\\\"Bid\\\\\\");\\\\n\\\\t}\\\\n}\\\\n\\",\\"keccak256\\":\\"0x867f76a5055985ae166858e4fcf8b4a0810e2cfa6ea6ec3b0cf6e8341522469d\\",\\"license\\":\\"MIT\\"}},\\"version\\":1}","bytecode":"0x60806040526000600b553480156200001657600080fd5b50604051620032dc380380620032dc83398181016040528101906200003c9190620001a8565b81818160009080519060200190620000569291906200007a565b5080600190805190602001906200006f9291906200007a565b5050505050620003b1565b8280546200008890620002c2565b90600052602060002090601f016020900481019282620000ac5760008555620000f8565b82601f10620000c757805160ff1916838001178555620000f8565b82800160010185558215620000f8579182015b82811115620000f7578251825591602001919060010190620000da565b5b5090506200010791906200010b565b5090565b5b80821115620001265760008160009055506001016200010c565b5090565b6000620001416200013b8462000256565b6200022d565b90508281526020810184848401111562000160576200015f62000391565b5b6200016d8482856200028c565b509392505050565b600082601f8301126200018d576200018c6200038c565b5b81516200019f8482602086016200012a565b91505092915050565b60008060408385031215620001c257620001c16200039b565b5b600083015167ffffffffffffffff811115620001e357620001e262000396565b5b620001f18582860162000175565b925050602083015167ffffffffffffffff81111562000215576200021462000396565b5b620002238582860162000175565b9150509250929050565b6000620002396200024c565b9050620002478282620002f8565b919050565b6000604051905090565b600067ffffffffffffffff8211156200027457620002736200035d565b5b6200027f82620003a0565b9050602081019050919050565b60005b83811015620002ac5780820151818401526020810190506200028f565b83811115620002bc576000848401525b50505050565b60006002820490506001821680620002db57607f821691505b60208210811415620002f257620002f16200032e565b5b50919050565b6200030382620003a0565b810181811067ffffffffffffffff821117156200032557620003246200035d565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b612f1b80620003c16000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063652d4725116100c3578063a0fd0c6a1161007c578063a0fd0c6a146103c6578063a22cb465146103f6578063b40a562714610412578063b88d4fde14610430578063c87b56dd1461044c578063e985e9c51461047c5761014d565b8063652d4725146102de57806370a082311461030e5780637eadfa6a1461033e5780638b5910731461035c578063931b33851461037857806395d89b41146103a85761014d565b8063095ea7b311610115578063095ea7b31461022057806318160ddd1461023c5780631cd043d61461025a57806323b872dd1461027657806342842e0e146102925780636352211e146102ae5761014d565b80630153886814610152578063019524e71461016e57806301ffc9a7146101a257806306fdde03146101d2578063081812fc146101f0575b600080fd5b61016c6004803603810190610167919061204f565b6104ac565b005b61018860048036038101906101839190612022565b610520565b604051610199959493929190612695565b60405180910390f35b6101bc60048036038101906101b79190611fc8565b61070e565b6040516101c9919061245d565b60405180910390f35b6101da6107f0565b6040516101e79190612478565b60405180910390f35b61020a60048036038101906102059190612022565b610882565b60405161021791906123f6565b60405180910390f35b61023a60048036038101906102359190611f88565b610907565b005b610244610a1f565b604051610251919061267a565b60405180910390f35b610274600480360381019061026f919061204f565b610a29565b005b610290600480360381019061028b9190611e16565b610a55565b005b6102ac60048036038101906102a79190611e16565b610ab5565b005b6102c860048036038101906102c39190612022565b610ad5565b6040516102d591906123f6565b60405180910390f35b6102f860048036038101906102f39190611f2c565b610b87565b604051610305919061267a565b60405180910390f35b61032860048036038101906103239190611da9565b610bc4565b604051610335919061267a565b60405180910390f35b610346610c7c565b604051610353919061267a565b60405180910390f35b610376600480360381019061037191906120ab565b610c86565b005b610392600480360381019061038d9190611f2c565b610e33565b60405161039f919061267a565b60405180910390f35b6103b0610e70565b6040516103bd9190612478565b60405180910390f35b6103e060048036038101906103db9190612022565b610f02565b6040516103ed9190612478565b60405180910390f35b610410600480360381019061040b9190611eec565b610fa7565b005b61041a610fbd565b604051610427919061267a565b60405180910390f35b61044a60048036038101906104459190611e69565b610fc3565b005b61046660048036038101906104619190612022565b611025565b6040516104739190612478565b60405180910390f35b61049660048036038101906104919190611dd6565b611112565b6040516104a3919061245d565b60405180910390f35b6104b5826111a6565b6104f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104eb906125da565b60405180910390fd5b8060086000848152602001908152602001600020908051906020019061051b929190611bbd565b505050565b600a602052806000526040600020600091509050806000015490806001018054610549906128fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610575906128fc565b80156105c25780601f10610597576101008083540402835291602001916105c2565b820191906000526020600020905b8154815290600101906020018083116105a557829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030180546105fd906128fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610629906128fc565b80156106765780601f1061064b57610100808354040283529160200191610676565b820191906000526020600020905b81548152906001019060200180831161065957829003601f168201915b50505050509080600401805461068b906128fc565b80601f01602080910402602001604051908101604052809291908181526020018280546106b7906128fc565b80156107045780601f106106d957610100808354040283529160200191610704565b820191906000526020600020905b8154815290600101906020018083116106e757829003601f168201915b5050505050905085565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806107d957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806107e957506107e882611212565b5b9050919050565b6060600080546107ff906128fc565b80601f016020809104026020016040519081016040528092919081815260200182805461082b906128fc565b80156108785780601f1061084d57610100808354040283529160200191610878565b820191906000526020600020905b81548152906001019060200180831161085b57829003601f168201915b5050505050905090565b600061088d826111a6565b6108cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c3906125ba565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061091282610ad5565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610983576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097a9061263a565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166109a261127c565b73ffffffffffffffffffffffffffffffffffffffff1614806109d157506109d0816109cb61127c565b611112565b5b610a10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a079061253a565b60405180910390fd5b610a1a8383611284565b505050565b6000600654905090565b80600960008481526020019081526020016000209080519060200190610a50929190611bbd565b505050565b610a66610a6061127c565b8261133d565b610aa5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9c9061265a565b60405180910390fd5b610ab083838361141b565b505050565b610ad083838360405180602001604052806000815250610fc3565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b759061257a565b60405180910390fd5b80915050919050565b6000610b9583600754611677565b610ba160075483610a29565b60076000815480929190610bb49061295f565b9190505550600754905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2c9061255a565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600754905090565b600b6000815480929190610c999061295f565b919050555081600860008681526020019081526020016000209080519060200190610cc5929190611bbd565b506040518060a001604052808581526020018481526020018273ffffffffffffffffffffffffffffffffffffffff1681526020016040518060400160405280600481526020017f646174650000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f4269640000000000000000000000000000000000000000000000000000000000815250815250600a6000600b548152602001908152602001600020600082015181600001556020820151816001019080519060200190610da8929190611bbd565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019080519060200190610e0c929190611bbd565b506080820151816004019080519060200190610e29929190611bbd565b5090505050505050565b6000610e4183600654611677565b610e4d600654836104ac565b60066000815480929190610e609061295f565b9190505550600654905092915050565b606060018054610e7f906128fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610eab906128fc565b8015610ef85780601f10610ecd57610100808354040283529160200191610ef8565b820191906000526020600020905b815481529060010190602001808311610edb57829003601f168201915b5050505050905090565b6060600960008381526020019081526020016000208054610f22906128fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4e906128fc565b8015610f9b5780601f10610f7057610100808354040283529160200191610f9b565b820191906000526020600020905b815481529060010190602001808311610f7e57829003601f168201915b50505050509050919050565b610fb9610fb261127c565b8383611845565b5050565b600b5481565b610fd4610fce61127c565b8361133d565b611013576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100a9061265a565b60405180910390fd5b61101f848484846119b2565b50505050565b6060611030826111a6565b61106f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110669061261a565b60405180910390fd5b60086000838152602001908152602001600020805461108d906128fc565b80601f01602080910402602001604051908101604052809291908181526020018280546110b9906128fc565b80156111065780601f106110db57610100808354040283529160200191611106565b820191906000526020600020905b8154815290600101906020018083116110e957829003601f168201915b50505050509050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166112f783610ad5565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000611348826111a6565b611387576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137e9061251a565b60405180910390fd5b600061139283610ad5565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061140157508373ffffffffffffffffffffffffffffffffffffffff166113e984610882565b73ffffffffffffffffffffffffffffffffffffffff16145b8061141257506114118185611112565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661143b82610ad5565b73ffffffffffffffffffffffffffffffffffffffff1614611491576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611488906125fa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611501576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f8906124da565b60405180910390fd5b61150c838383611a0e565b611517600082611284565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115679190612812565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115be91906127bc565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116de9061259a565b60405180910390fd5b6116f0816111a6565b15611730576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611727906124ba565b60405180910390fd5b61173c60008383611a0e565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461178c91906127bc565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156118b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ab906124fa565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516119a5919061245d565b60405180910390a3505050565b6119bd84848461141b565b6119c984848484611a13565b611a08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ff9061249a565b60405180910390fd5b50505050565b505050565b6000611a348473ffffffffffffffffffffffffffffffffffffffff16611baa565b15611b9d578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611a5d61127c565b8786866040518563ffffffff1660e01b8152600401611a7f9493929190612411565b602060405180830381600087803b158015611a9957600080fd5b505af1925050508015611aca57506040513d601f19601f82011682018060405250810190611ac79190611ff5565b60015b611b4d573d8060008114611afa576040519150601f19603f3d011682016040523d82523d6000602084013e611aff565b606091505b50600081511415611b45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b3c9061249a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611ba2565b600190505b949350505050565b600080823b905060008111915050919050565b828054611bc9906128fc565b90600052602060002090601f016020900481019282611beb5760008555611c32565b82601f10611c0457805160ff1916838001178555611c32565b82800160010185558215611c32579182015b82811115611c31578251825591602001919060010190611c16565b5b509050611c3f9190611c43565b5090565b5b80821115611c5c576000816000905550600101611c44565b5090565b6000611c73611c6e84612722565b6126fd565b905082815260208101848484011115611c8f57611c8e612a3a565b5b611c9a8482856128ba565b509392505050565b6000611cb5611cb084612753565b6126fd565b905082815260208101848484011115611cd157611cd0612a3a565b5b611cdc8482856128ba565b509392505050565b600081359050611cf381612e89565b92915050565b600081359050611d0881612ea0565b92915050565b600081359050611d1d81612eb7565b92915050565b600081519050611d3281612eb7565b92915050565b600082601f830112611d4d57611d4c612a35565b5b8135611d5d848260208601611c60565b91505092915050565b600082601f830112611d7b57611d7a612a35565b5b8135611d8b848260208601611ca2565b91505092915050565b600081359050611da381612ece565b92915050565b600060208284031215611dbf57611dbe612a44565b5b6000611dcd84828501611ce4565b91505092915050565b60008060408385031215611ded57611dec612a44565b5b6000611dfb85828601611ce4565b9250506020611e0c85828601611ce4565b9150509250929050565b600080600060608486031215611e2f57611e2e612a44565b5b6000611e3d86828701611ce4565b9350506020611e4e86828701611ce4565b9250506040611e5f86828701611d94565b9150509250925092565b60008060008060808587031215611e8357611e82612a44565b5b6000611e9187828801611ce4565b9450506020611ea287828801611ce4565b9350506040611eb387828801611d94565b925050606085013567ffffffffffffffff811115611ed457611ed3612a3f565b5b611ee087828801611d38565b91505092959194509250565b60008060408385031215611f0357611f02612a44565b5b6000611f1185828601611ce4565b9250506020611f2285828601611cf9565b9150509250929050565b60008060408385031215611f4357611f42612a44565b5b6000611f5185828601611ce4565b925050602083013567ffffffffffffffff811115611f7257611f71612a3f565b5b611f7e85828601611d66565b9150509250929050565b60008060408385031215611f9f57611f9e612a44565b5b6000611fad85828601611ce4565b9250506020611fbe85828601611d94565b9150509250929050565b600060208284031215611fde57611fdd612a44565b5b6000611fec84828501611d0e565b91505092915050565b60006020828403121561200b5761200a612a44565b5b600061201984828501611d23565b91505092915050565b60006020828403121561203857612037612a44565b5b600061204684828501611d94565b91505092915050565b6000806040838503121561206657612065612a44565b5b600061207485828601611d94565b925050602083013567ffffffffffffffff81111561209557612094612a3f565b5b6120a185828601611d66565b9150509250929050565b600080600080608085870312156120c5576120c4612a44565b5b60006120d387828801611d94565b945050602085013567ffffffffffffffff8111156120f4576120f3612a3f565b5b61210087828801611d66565b935050604085013567ffffffffffffffff81111561212157612120612a3f565b5b61212d87828801611d66565b925050606061213e87828801611ce4565b91505092959194509250565b61215381612846565b82525050565b61216281612858565b82525050565b600061217382612784565b61217d818561279a565b935061218d8185602086016128c9565b61219681612a49565b840191505092915050565b60006121ac8261278f565b6121b681856127ab565b93506121c68185602086016128c9565b6121cf81612a49565b840191505092915050565b60006121e76032836127ab565b91506121f282612a5a565b604082019050919050565b600061220a601c836127ab565b915061221582612aa9565b602082019050919050565b600061222d6024836127ab565b915061223882612ad2565b604082019050919050565b60006122506019836127ab565b915061225b82612b21565b602082019050919050565b6000612273602c836127ab565b915061227e82612b4a565b604082019050919050565b60006122966038836127ab565b91506122a182612b99565b604082019050919050565b60006122b9602a836127ab565b91506122c482612be8565b604082019050919050565b60006122dc6029836127ab565b91506122e782612c37565b604082019050919050565b60006122ff6020836127ab565b915061230a82612c86565b602082019050919050565b6000612322602c836127ab565b915061232d82612caf565b604082019050919050565b6000612345602c836127ab565b915061235082612cfe565b604082019050919050565b60006123686029836127ab565b915061237382612d4d565b604082019050919050565b600061238b602f836127ab565b915061239682612d9c565b604082019050919050565b60006123ae6021836127ab565b91506123b982612deb565b604082019050919050565b60006123d16031836127ab565b91506123dc82612e3a565b604082019050919050565b6123f0816128b0565b82525050565b600060208201905061240b600083018461214a565b92915050565b6000608082019050612426600083018761214a565b612433602083018661214a565b61244060408301856123e7565b81810360608301526124528184612168565b905095945050505050565b60006020820190506124726000830184612159565b92915050565b6000602082019050818103600083015261249281846121a1565b905092915050565b600060208201905081810360008301526124b3816121da565b9050919050565b600060208201905081810360008301526124d3816121fd565b9050919050565b600060208201905081810360008301526124f381612220565b9050919050565b6000602082019050818103600083015261251381612243565b9050919050565b6000602082019050818103600083015261253381612266565b9050919050565b6000602082019050818103600083015261255381612289565b9050919050565b60006020820190508181036000830152612573816122ac565b9050919050565b60006020820190508181036000830152612593816122cf565b9050919050565b600060208201905081810360008301526125b3816122f2565b9050919050565b600060208201905081810360008301526125d381612315565b9050919050565b600060208201905081810360008301526125f381612338565b9050919050565b600060208201905081810360008301526126138161235b565b9050919050565b600060208201905081810360008301526126338161237e565b9050919050565b60006020820190508181036000830152612653816123a1565b9050919050565b60006020820190508181036000830152612673816123c4565b9050919050565b600060208201905061268f60008301846123e7565b92915050565b600060a0820190506126aa60008301886123e7565b81810360208301526126bc81876121a1565b90506126cb604083018661214a565b81810360608301526126dd81856121a1565b905081810360808301526126f181846121a1565b90509695505050505050565b6000612707612718565b9050612713828261292e565b919050565b6000604051905090565b600067ffffffffffffffff82111561273d5761273c612a06565b5b61274682612a49565b9050602081019050919050565b600067ffffffffffffffff82111561276e5761276d612a06565b5b61277782612a49565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006127c7826128b0565b91506127d2836128b0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612807576128066129a8565b5b828201905092915050565b600061281d826128b0565b9150612828836128b0565b92508282101561283b5761283a6129a8565b5b828203905092915050565b600061285182612890565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156128e75780820151818401526020810190506128cc565b838111156128f6576000848401525b50505050565b6000600282049050600182168061291457607f821691505b60208210811415612928576129276129d7565b5b50919050565b61293782612a49565b810181811067ffffffffffffffff8211171561295657612955612a06565b5b80604052505050565b600061296a826128b0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561299d5761299c6129a8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612e9281612846565b8114612e9d57600080fd5b50565b612ea981612858565b8114612eb457600080fd5b50565b612ec081612864565b8114612ecb57600080fd5b50565b612ed7816128b0565b8114612ee257600080fd5b5056fea264697066735822122082138d5bad76d6ba582adc97ab925375ebf05a19a09f45afafd123cd490875b464736f6c63430008060033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061014d5760003560e01c8063652d4725116100c3578063a0fd0c6a1161007c578063a0fd0c6a146103c6578063a22cb465146103f6578063b40a562714610412578063b88d4fde14610430578063c87b56dd1461044c578063e985e9c51461047c5761014d565b8063652d4725146102de57806370a082311461030e5780637eadfa6a1461033e5780638b5910731461035c578063931b33851461037857806395d89b41146103a85761014d565b8063095ea7b311610115578063095ea7b31461022057806318160ddd1461023c5780631cd043d61461025a57806323b872dd1461027657806342842e0e146102925780636352211e146102ae5761014d565b80630153886814610152578063019524e71461016e57806301ffc9a7146101a257806306fdde03146101d2578063081812fc146101f0575b600080fd5b61016c6004803603810190610167919061204f565b6104ac565b005b61018860048036038101906101839190612022565b610520565b604051610199959493929190612695565b60405180910390f35b6101bc60048036038101906101b79190611fc8565b61070e565b6040516101c9919061245d565b60405180910390f35b6101da6107f0565b6040516101e79190612478565b60405180910390f35b61020a60048036038101906102059190612022565b610882565b60405161021791906123f6565b60405180910390f35b61023a60048036038101906102359190611f88565b610907565b005b610244610a1f565b604051610251919061267a565b60405180910390f35b610274600480360381019061026f919061204f565b610a29565b005b610290600480360381019061028b9190611e16565b610a55565b005b6102ac60048036038101906102a79190611e16565b610ab5565b005b6102c860048036038101906102c39190612022565b610ad5565b6040516102d591906123f6565b60405180910390f35b6102f860048036038101906102f39190611f2c565b610b87565b604051610305919061267a565b60405180910390f35b61032860048036038101906103239190611da9565b610bc4565b604051610335919061267a565b60405180910390f35b610346610c7c565b604051610353919061267a565b60405180910390f35b610376600480360381019061037191906120ab565b610c86565b005b610392600480360381019061038d9190611f2c565b610e33565b60405161039f919061267a565b60405180910390f35b6103b0610e70565b6040516103bd9190612478565b60405180910390f35b6103e060048036038101906103db9190612022565b610f02565b6040516103ed9190612478565b60405180910390f35b610410600480360381019061040b9190611eec565b610fa7565b005b61041a610fbd565b604051610427919061267a565b60405180910390f35b61044a60048036038101906104459190611e69565b610fc3565b005b61046660048036038101906104619190612022565b611025565b6040516104739190612478565b60405180910390f35b61049660048036038101906104919190611dd6565b611112565b6040516104a3919061245d565b60405180910390f35b6104b5826111a6565b6104f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104eb906125da565b60405180910390fd5b8060086000848152602001908152602001600020908051906020019061051b929190611bbd565b505050565b600a602052806000526040600020600091509050806000015490806001018054610549906128fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610575906128fc565b80156105c25780601f10610597576101008083540402835291602001916105c2565b820191906000526020600020905b8154815290600101906020018083116105a557829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030180546105fd906128fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610629906128fc565b80156106765780601f1061064b57610100808354040283529160200191610676565b820191906000526020600020905b81548152906001019060200180831161065957829003601f168201915b50505050509080600401805461068b906128fc565b80601f01602080910402602001604051908101604052809291908181526020018280546106b7906128fc565b80156107045780601f106106d957610100808354040283529160200191610704565b820191906000526020600020905b8154815290600101906020018083116106e757829003601f168201915b5050505050905085565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806107d957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806107e957506107e882611212565b5b9050919050565b6060600080546107ff906128fc565b80601f016020809104026020016040519081016040528092919081815260200182805461082b906128fc565b80156108785780601f1061084d57610100808354040283529160200191610878565b820191906000526020600020905b81548152906001019060200180831161085b57829003601f168201915b5050505050905090565b600061088d826111a6565b6108cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c3906125ba565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061091282610ad5565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610983576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097a9061263a565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166109a261127c565b73ffffffffffffffffffffffffffffffffffffffff1614806109d157506109d0816109cb61127c565b611112565b5b610a10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a079061253a565b60405180910390fd5b610a1a8383611284565b505050565b6000600654905090565b80600960008481526020019081526020016000209080519060200190610a50929190611bbd565b505050565b610a66610a6061127c565b8261133d565b610aa5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9c9061265a565b60405180910390fd5b610ab083838361141b565b505050565b610ad083838360405180602001604052806000815250610fc3565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b759061257a565b60405180910390fd5b80915050919050565b6000610b9583600754611677565b610ba160075483610a29565b60076000815480929190610bb49061295f565b9190505550600754905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2c9061255a565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600754905090565b600b6000815480929190610c999061295f565b919050555081600860008681526020019081526020016000209080519060200190610cc5929190611bbd565b506040518060a001604052808581526020018481526020018273ffffffffffffffffffffffffffffffffffffffff1681526020016040518060400160405280600481526020017f646174650000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600381526020017f4269640000000000000000000000000000000000000000000000000000000000815250815250600a6000600b548152602001908152602001600020600082015181600001556020820151816001019080519060200190610da8929190611bbd565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019080519060200190610e0c929190611bbd565b506080820151816004019080519060200190610e29929190611bbd565b5090505050505050565b6000610e4183600654611677565b610e4d600654836104ac565b60066000815480929190610e609061295f565b9190505550600654905092915050565b606060018054610e7f906128fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610eab906128fc565b8015610ef85780601f10610ecd57610100808354040283529160200191610ef8565b820191906000526020600020905b815481529060010190602001808311610edb57829003601f168201915b5050505050905090565b6060600960008381526020019081526020016000208054610f22906128fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4e906128fc565b8015610f9b5780601f10610f7057610100808354040283529160200191610f9b565b820191906000526020600020905b815481529060010190602001808311610f7e57829003601f168201915b50505050509050919050565b610fb9610fb261127c565b8383611845565b5050565b600b5481565b610fd4610fce61127c565b8361133d565b611013576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100a9061265a565b60405180910390fd5b61101f848484846119b2565b50505050565b6060611030826111a6565b61106f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110669061261a565b60405180910390fd5b60086000838152602001908152602001600020805461108d906128fc565b80601f01602080910402602001604051908101604052809291908181526020018280546110b9906128fc565b80156111065780601f106110db57610100808354040283529160200191611106565b820191906000526020600020905b8154815290600101906020018083116110e957829003601f168201915b50505050509050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166112f783610ad5565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000611348826111a6565b611387576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137e9061251a565b60405180910390fd5b600061139283610ad5565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061140157508373ffffffffffffffffffffffffffffffffffffffff166113e984610882565b73ffffffffffffffffffffffffffffffffffffffff16145b8061141257506114118185611112565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661143b82610ad5565b73ffffffffffffffffffffffffffffffffffffffff1614611491576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611488906125fa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611501576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f8906124da565b60405180910390fd5b61150c838383611a0e565b611517600082611284565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115679190612812565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115be91906127bc565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116de9061259a565b60405180910390fd5b6116f0816111a6565b15611730576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611727906124ba565b60405180910390fd5b61173c60008383611a0e565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461178c91906127bc565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156118b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ab906124fa565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516119a5919061245d565b60405180910390a3505050565b6119bd84848461141b565b6119c984848484611a13565b611a08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ff9061249a565b60405180910390fd5b50505050565b505050565b6000611a348473ffffffffffffffffffffffffffffffffffffffff16611baa565b15611b9d578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611a5d61127c565b8786866040518563ffffffff1660e01b8152600401611a7f9493929190612411565b602060405180830381600087803b158015611a9957600080fd5b505af1925050508015611aca57506040513d601f19601f82011682018060405250810190611ac79190611ff5565b60015b611b4d573d8060008114611afa576040519150601f19603f3d011682016040523d82523d6000602084013e611aff565b606091505b50600081511415611b45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b3c9061249a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611ba2565b600190505b949350505050565b600080823b905060008111915050919050565b828054611bc9906128fc565b90600052602060002090601f016020900481019282611beb5760008555611c32565b82601f10611c0457805160ff1916838001178555611c32565b82800160010185558215611c32579182015b82811115611c31578251825591602001919060010190611c16565b5b509050611c3f9190611c43565b5090565b5b80821115611c5c576000816000905550600101611c44565b5090565b6000611c73611c6e84612722565b6126fd565b905082815260208101848484011115611c8f57611c8e612a3a565b5b611c9a8482856128ba565b509392505050565b6000611cb5611cb084612753565b6126fd565b905082815260208101848484011115611cd157611cd0612a3a565b5b611cdc8482856128ba565b509392505050565b600081359050611cf381612e89565b92915050565b600081359050611d0881612ea0565b92915050565b600081359050611d1d81612eb7565b92915050565b600081519050611d3281612eb7565b92915050565b600082601f830112611d4d57611d4c612a35565b5b8135611d5d848260208601611c60565b91505092915050565b600082601f830112611d7b57611d7a612a35565b5b8135611d8b848260208601611ca2565b91505092915050565b600081359050611da381612ece565b92915050565b600060208284031215611dbf57611dbe612a44565b5b6000611dcd84828501611ce4565b91505092915050565b60008060408385031215611ded57611dec612a44565b5b6000611dfb85828601611ce4565b9250506020611e0c85828601611ce4565b9150509250929050565b600080600060608486031215611e2f57611e2e612a44565b5b6000611e3d86828701611ce4565b9350506020611e4e86828701611ce4565b9250506040611e5f86828701611d94565b9150509250925092565b60008060008060808587031215611e8357611e82612a44565b5b6000611e9187828801611ce4565b9450506020611ea287828801611ce4565b9350506040611eb387828801611d94565b925050606085013567ffffffffffffffff811115611ed457611ed3612a3f565b5b611ee087828801611d38565b91505092959194509250565b60008060408385031215611f0357611f02612a44565b5b6000611f1185828601611ce4565b9250506020611f2285828601611cf9565b9150509250929050565b60008060408385031215611f4357611f42612a44565b5b6000611f5185828601611ce4565b925050602083013567ffffffffffffffff811115611f7257611f71612a3f565b5b611f7e85828601611d66565b9150509250929050565b60008060408385031215611f9f57611f9e612a44565b5b6000611fad85828601611ce4565b9250506020611fbe85828601611d94565b9150509250929050565b600060208284031215611fde57611fdd612a44565b5b6000611fec84828501611d0e565b91505092915050565b60006020828403121561200b5761200a612a44565b5b600061201984828501611d23565b91505092915050565b60006020828403121561203857612037612a44565b5b600061204684828501611d94565b91505092915050565b6000806040838503121561206657612065612a44565b5b600061207485828601611d94565b925050602083013567ffffffffffffffff81111561209557612094612a3f565b5b6120a185828601611d66565b9150509250929050565b600080600080608085870312156120c5576120c4612a44565b5b60006120d387828801611d94565b945050602085013567ffffffffffffffff8111156120f4576120f3612a3f565b5b61210087828801611d66565b935050604085013567ffffffffffffffff81111561212157612120612a3f565b5b61212d87828801611d66565b925050606061213e87828801611ce4565b91505092959194509250565b61215381612846565b82525050565b61216281612858565b82525050565b600061217382612784565b61217d818561279a565b935061218d8185602086016128c9565b61219681612a49565b840191505092915050565b60006121ac8261278f565b6121b681856127ab565b93506121c68185602086016128c9565b6121cf81612a49565b840191505092915050565b60006121e76032836127ab565b91506121f282612a5a565b604082019050919050565b600061220a601c836127ab565b915061221582612aa9565b602082019050919050565b600061222d6024836127ab565b915061223882612ad2565b604082019050919050565b60006122506019836127ab565b915061225b82612b21565b602082019050919050565b6000612273602c836127ab565b915061227e82612b4a565b604082019050919050565b60006122966038836127ab565b91506122a182612b99565b604082019050919050565b60006122b9602a836127ab565b91506122c482612be8565b604082019050919050565b60006122dc6029836127ab565b91506122e782612c37565b604082019050919050565b60006122ff6020836127ab565b915061230a82612c86565b602082019050919050565b6000612322602c836127ab565b915061232d82612caf565b604082019050919050565b6000612345602c836127ab565b915061235082612cfe565b604082019050919050565b60006123686029836127ab565b915061237382612d4d565b604082019050919050565b600061238b602f836127ab565b915061239682612d9c565b604082019050919050565b60006123ae6021836127ab565b91506123b982612deb565b604082019050919050565b60006123d16031836127ab565b91506123dc82612e3a565b604082019050919050565b6123f0816128b0565b82525050565b600060208201905061240b600083018461214a565b92915050565b6000608082019050612426600083018761214a565b612433602083018661214a565b61244060408301856123e7565b81810360608301526124528184612168565b905095945050505050565b60006020820190506124726000830184612159565b92915050565b6000602082019050818103600083015261249281846121a1565b905092915050565b600060208201905081810360008301526124b3816121da565b9050919050565b600060208201905081810360008301526124d3816121fd565b9050919050565b600060208201905081810360008301526124f381612220565b9050919050565b6000602082019050818103600083015261251381612243565b9050919050565b6000602082019050818103600083015261253381612266565b9050919050565b6000602082019050818103600083015261255381612289565b9050919050565b60006020820190508181036000830152612573816122ac565b9050919050565b60006020820190508181036000830152612593816122cf565b9050919050565b600060208201905081810360008301526125b3816122f2565b9050919050565b600060208201905081810360008301526125d381612315565b9050919050565b600060208201905081810360008301526125f381612338565b9050919050565b600060208201905081810360008301526126138161235b565b9050919050565b600060208201905081810360008301526126338161237e565b9050919050565b60006020820190508181036000830152612653816123a1565b9050919050565b60006020820190508181036000830152612673816123c4565b9050919050565b600060208201905061268f60008301846123e7565b92915050565b600060a0820190506126aa60008301886123e7565b81810360208301526126bc81876121a1565b90506126cb604083018661214a565b81810360608301526126dd81856121a1565b905081810360808301526126f181846121a1565b90509695505050505050565b6000612707612718565b9050612713828261292e565b919050565b6000604051905090565b600067ffffffffffffffff82111561273d5761273c612a06565b5b61274682612a49565b9050602081019050919050565b600067ffffffffffffffff82111561276e5761276d612a06565b5b61277782612a49565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006127c7826128b0565b91506127d2836128b0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612807576128066129a8565b5b828201905092915050565b600061281d826128b0565b9150612828836128b0565b92508282101561283b5761283a6129a8565b5b828203905092915050565b600061285182612890565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156128e75780820151818401526020810190506128cc565b838111156128f6576000848401525b50505050565b6000600282049050600182168061291457607f821691505b60208210811415612928576129276129d7565b5b50919050565b61293782612a49565b810181811067ffffffffffffffff8211171561295657612955612a06565b5b80604052505050565b600061296a826128b0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561299d5761299c6129a8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612e9281612846565b8114612e9d57600080fd5b50565b612ea981612858565b8114612eb457600080fd5b50565b612ec081612864565b8114612ecb57600080fd5b50565b612ed7816128b0565b8114612ee257600080fd5b5056fea264697066735822122082138d5bad76d6ba582adc97ab925375ebf05a19a09f45afafd123cd490875b464736f6c63430008060033","devdoc":{"kind":"dev","methods":{"approve(address,uint256)":{"details":"See {IERC721-approve}."},"balanceOf(address)":{"details":"See {IERC721-balanceOf}."},"getApproved(uint256)":{"details":"See {IERC721-getApproved}."},"isApprovedForAll(address,address)":{"details":"See {IERC721-isApprovedForAll}."},"name()":{"details":"See {IERC721Metadata-name}."},"ownerOf(uint256)":{"details":"See {IERC721-ownerOf}."},"safeTransferFrom(address,address,uint256)":{"details":"See {IERC721-safeTransferFrom}."},"safeTransferFrom(address,address,uint256,bytes)":{"details":"See {IERC721-safeTransferFrom}."},"setApprovalForAll(address,bool)":{"details":"See {IERC721-setApprovalForAll}."},"supportsInterface(bytes4)":{"details":"See {IERC165-supportsInterface}."},"symbol()":{"details":"See {IERC721Metadata-symbol}."},"tokenURI(uint256)":{"details":"See {IERC721Metadata-tokenURI}."},"transferFrom(address,address,uint256)":{"details":"See {IERC721-transferFrom}."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1},"storageLayout":{"storage":[{"astId":25,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_name","offset":0,"slot":"0","type":"t_string_storage"},{"astId":27,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_symbol","offset":0,"slot":"1","type":"t_string_storage"},{"astId":31,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_owners","offset":0,"slot":"2","type":"t_mapping(t_uint256,t_address)"},{"astId":35,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_balances","offset":0,"slot":"3","type":"t_mapping(t_address,t_uint256)"},{"astId":39,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_tokenApprovals","offset":0,"slot":"4","type":"t_mapping(t_uint256,t_address)"},{"astId":45,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_operatorApprovals","offset":0,"slot":"5","type":"t_mapping(t_address,t_mapping(t_address,t_bool))"},{"astId":1556,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_tokenIds","offset":0,"slot":"6","type":"t_uint256"},{"astId":1558,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_eventIds","offset":0,"slot":"7","type":"t_uint256"},{"astId":1562,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_tokenURIs","offset":0,"slot":"8","type":"t_mapping(t_uint256,t_string_storage)"},{"astId":1566,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"_eventURIs","offset":0,"slot":"9","type":"t_mapping(t_uint256,t_string_storage)"},{"astId":1571,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"allbidstoken","offset":0,"slot":"10","type":"t_mapping(t_uint256,t_struct(Bid)1585_storage)"},{"astId":1574,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"bidCount","offset":0,"slot":"11","type":"t_uint256"}],"types":{"t_address":{"encoding":"inplace","label":"address","numberOfBytes":"20"},"t_bool":{"encoding":"inplace","label":"bool","numberOfBytes":"1"},"t_mapping(t_address,t_bool)":{"encoding":"mapping","key":"t_address","label":"mapping(address => bool)","numberOfBytes":"32","value":"t_bool"},"t_mapping(t_address,t_mapping(t_address,t_bool))":{"encoding":"mapping","key":"t_address","label":"mapping(address => mapping(address => bool))","numberOfBytes":"32","value":"t_mapping(t_address,t_bool)"},"t_mapping(t_address,t_uint256)":{"encoding":"mapping","key":"t_address","label":"mapping(address => uint256)","numberOfBytes":"32","value":"t_uint256"},"t_mapping(t_uint256,t_address)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => address)","numberOfBytes":"32","value":"t_address"},"t_mapping(t_uint256,t_string_storage)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => string)","numberOfBytes":"32","value":"t_string_storage"},"t_mapping(t_uint256,t_struct(Bid)1585_storage)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => struct MetisERC721.Bid)","numberOfBytes":"32","value":"t_struct(Bid)1585_storage"},"t_string_storage":{"encoding":"bytes","label":"string","numberOfBytes":"32"},"t_struct(Bid)1585_storage":{"encoding":"inplace","label":"struct MetisERC721.Bid","members":[{"astId":1576,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"TokenID","offset":0,"slot":"0","type":"t_uint256"},{"astId":1578,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"bid","offset":0,"slot":"1","type":"t_string_storage"},{"astId":1580,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"bidderHash","offset":0,"slot":"2","type":"t_address"},{"astId":1582,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"date","offset":0,"slot":"3","type":"t_string_storage"},{"astId":1584,"contract":"contracts/MetisERC721.sol:MetisERC721","label":"status","offset":0,"slot":"4","type":"t_string_storage"}],"numberOfBytes":"160"},"t_uint256":{"encoding":"inplace","label":"uint256","numberOfBytes":"32"}}}}');

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

/***/ "./components/modals/DonateNFTModal.jsx":
/*!**********************************************!*\
  !*** ./components/modals/DonateNFTModal.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DonateNFTModal; }
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

var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\components\\modals\\DonateNFTModal.jsx";





function DonateNFTModal({
  show,
  onHide,
  contract,
  senderAddress,
  type,
  EventID,
  SelectedTitle
}) {
  console.log(EventID);
  const [name, nameInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter name'
  });
  const [description, descriptionInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    as: 'textarea',
    placeholder: 'Enter description'
  });
  const [url, urlInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter image url'
  });
  const [price, priceInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter Price'
  });
  const [NFTaddress, NFTaddressInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter NFT address'
  });
  const [Cryptopunkaddress, CryptopunkaddressInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter Cryptopunk address'
  });

  async function createNFT() {
    var Metistype = "NFT";
    var tokenAddress = NFTaddress;

    if ("Cryptopunk" == type) {
      Metistype = "Cryptopunk";
      tokenAddress = Cryptopunkaddress;
    }

    const createdObject = {
      title: 'Asset Metadata',
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: name
        },
        description: {
          type: 'string',
          description: description
        },
        image: {
          type: 'string',
          description: url
        },
        price: {
          type: 'string',
          description: price
        },
        typeimg: {
          type: 'string',
          description: Metistype
        },
        nftaddress: {
          type: 'string',
          description: tokenAddress
        },
        higherbidadd: {
          type: 'string',
          description: ""
        }
      },
      bids: []
    };
    const result = await contract.claimToken(senderAddress, JSON.stringify(createdObject));
    console.log(result);
    window.document.getElementsByClassName("btn-close")[0].click();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "lg",
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Header), {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Title), {
        id: "contained-modal-title-vcenter",
        children: ["Donate ", type, " - ", SelectedTitle]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
      className: "show-grid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 7
          }, this), nameInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Opening price in ETH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 7
          }, this), priceInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupDescription",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 7
          }, this), descriptionInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Image URL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, this), urlInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 6
        }, this), type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Cryptopunk address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 8
          }, this), CryptopunkaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 7
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "NFT address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 8
          }, this), NFTaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "d-grid",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "primary",
            onClick: createNFT,
            children: ["Donate ", type]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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

/***/ "./pages/donation/index.jsx":
/*!**********************************!*\
  !*** ./pages/donation/index.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Donation; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/useContract */ "./services/useContract.js");
/* harmony import */ var _components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/modals/DonateNFTModal */ "./components/modals/DonateNFTModal.jsx");


var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\donation\\index.jsx";








function Donation() {
  const {
    0: CreatemodalShow,
    1: setModalShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    contract,
    signerAddress
  } = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_7__.default)('ERC721');
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
    0: selectid,
    1: setselectid
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: selectedtype,
    1: setselectedtype
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: SelectedTitle,
    1: setSelectedTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchContractData();
    window.ethereum.on('accountsChanged', fetchContractData);
    window.ethereum.on('chainChanged', fetchContractData);
    return () => {
      window.ethereum.removeListener('accountsChanged', fetchContractData);
      window.ethereum.removeListener('chainChanged', fetchContractData);
    };
  }, [contract]);

  async function fetchContractData() {
    try {
      if (contract) {
        setTokenName(await contract.name());
        setTokenSymbol(await contract.symbol());
        const totalEvent = await contract.totalEvent();
        const arr = [];

        for (let i = 0; i < Number(totalEvent); i++) {
          const value = await contract.eventURI(i);

          if (value) {
            const object = JSON.parse(value);
            var pricedes1 = 0;

            try {
              pricedes1 = Number(object.properties.Goal.description * 3817.09);
            } catch (ex) {}

            arr.push({
              eventId: i,
              Title: object.properties.Title.description,
              Date: object.properties.Date.description,
              Goalusd: pricedes1,
              Goal: object.properties.Goal.description,
              logo: object.properties.logo.description
            });
          }

          console.log(value);
        }

        setList(arr);
        document.getElementById("Loading").style = "display:none";
      }
    } catch (error) {
      console.error(error);
    }
  }

  function activateCreateNFTModal(e) {
    setselectid(e.target.getAttribute("eventid"));
    setSelectedTitle(e.target.getAttribute("eventtitle"));
    setselectedtype("NFT");
    setModalShow(true);
  }

  function activateCreateCryptopunkModal(e) {
    setselectid(e.target.getAttribute("eventid"));
    setSelectedTitle(e.target.getAttribute("eventtitle"));
    setselectedtype("Cryptopunk");
    setModalShow(true);
  }

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Donation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Donation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/Logo.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6___default()), {
      className: "DonationBar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "?q=All",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "DonationBarLink active",
          children: "All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "?q=Today",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "DonationBarLink",
          children: "Today"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "?q=This Month",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "DonationBarLink",
          children: "This Month"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "Loading",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }, this), list.map(listItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      style: {
        height: "397px",
        margin: "28px",
        background: "white",
        color: "black",
        overflow: "hidden",
        padding: 0
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          children: LeftDate(listItem.Date)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 26
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          "display": "flex"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: listItem.logo,
          style: {
            maxWidth: "327px",
            maxHeight: "255px",
            minWidth: "327px",
            minHeight: "255px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            "paddingTop": "33px",
            "marginLeft": "82px",
            display: "flex",
            "flexDirection": "column",
            width: "100%",
            "rowGap": "10px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: listItem.Title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              display: "flex",
              "whiteSpace": "pre-wrap"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Goal:  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: ["$", listItem.Goalusd, " (", listItem.Goal, " ETH)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              display: "flex",
              height: "61px",
              float: "right",
              gap: "26px",
              right: 0,
              width: "100%",
              "marginTop": "50px",
              "marginLeft": 0,
              "flexDirection": "column"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "card",
              style: {
                "height": "100%",
                border: "0px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                "display": "flex",
                gap: "14px"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                eventid: listItem.eventId,
                eventtitle: listItem.Title,
                onClick: activateCreateNFTModal,
                className: "card",
                style: {
                  color: "white",
                  background: "rgb(0, 222, 205)",
                  "textAlign": "center",
                  cursor: "pointer",
                  height: "100%",
                  float: "right",
                  width: "290px"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  eventid: listItem.eventId,
                  eventtitle: listItem.Title,
                  className: "card-body",
                  style: {
                    height: "100%",
                    "paddingTop": "6px"
                  },
                  children: "Donate NFT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                eventid: listItem.eventId,
                eventtitle: listItem.Title,
                onClick: activateCreateCryptopunkModal,
                className: "card",
                style: {
                  color: "white",
                  background: "rgb(0, 222, 205)",
                  "textAlign": "center",
                  cursor: "pointer",
                  height: "100%",
                  float: "right",
                  width: "290px"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  eventid: listItem.eventId,
                  eventtitle: listItem.Title,
                  className: "card-body",
                  style: {
                    height: "100%",
                    "paddingTop": "6px"
                  },
                  children: "Donate Cryptopunk"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: `/donation/auction/${listItem.eventId}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "card",
                  style: {
                    color: "white",
                    background: "rgb(0, 222, 205)",
                    "textAlign": "center",
                    cursor: "pointer",
                    height: "100%",
                    float: "right",
                    width: "220px"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "card-body",
                    style: {
                      height: "100%",
                      "paddingTop": "6px"
                    },
                    children: "Go to auction"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }, this)]
    }, listItem.eventId, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_8__.default, {
      show: CreatemodalShow,
      onHide: () => {
        setModalShow(false); // This is a poor implementation, better to implement an event listener
      },
      contract: contract,
      senderAddress: signerAddress,
      EventID: selectid,
      type: selectedtype,
      SelectedTitle: SelectedTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
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

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Card");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/donation/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQuanN4Iiwid2VicGFjazovL21ldGlzLWRlbW8vLi9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL3BhZ2VzL2RvbmF0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vc2VydmljZXMvRVJDNzIxU2luZ2xldG9uLmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9zZXJ2aWNlcy91c2VDb250cmFjdC5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL21ldGlzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwiZXRoZXJzXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvUm93XCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL21ldGlzLWRlbW8vaWdub3JlZHxDOlxcVXNlcnNcXHpha2lyXFxEb2N1bWVudHNcXHRlc3RcXG1ldGlzLWRlbW8tbWFzdGVyXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiVXNlRm9ybUlucHV0IiwiZGVmYXVsdFZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJpbnB1dCIsImUiLCJ0YXJnZXQiLCJEb25hdGVORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJjb250cmFjdCIsInNlbmRlckFkZHJlc3MiLCJFdmVudElEIiwiU2VsZWN0ZWRUaXRsZSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwibmFtZUlucHV0IiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbklucHV0IiwiYXMiLCJ1cmwiLCJ1cmxJbnB1dCIsInByaWNlIiwicHJpY2VJbnB1dCIsIk5GVGFkZHJlc3MiLCJORlRhZGRyZXNzSW5wdXQiLCJDcnlwdG9wdW5rYWRkcmVzcyIsIkNyeXB0b3B1bmthZGRyZXNzSW5wdXQiLCJjcmVhdGVORlQiLCJNZXRpc3R5cGUiLCJ0b2tlbkFkZHJlc3MiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwiaW1hZ2UiLCJ0eXBlaW1nIiwibmZ0YWRkcmVzcyIsImhpZ2hlcmJpZGFkZCIsImJpZHMiLCJyZXN1bHQiLCJjbGFpbVRva2VuIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWNrIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsImRlZmF1bHQiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJtYXAiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsImhhc1ByZWZldGNoIiwibGluayIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpdCIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxlbmd0aCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieCIsInkiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJEb25hdGlvbiIsIkNyZWF0ZW1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsInNpZ25lckFkZHJlc3MiLCJ1c2VDb250cmFjdCIsImxpc3QiLCJzZXRMaXN0IiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5TeW1ib2wiLCJzZXRUb2tlblN5bWJvbCIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3RlZHR5cGUiLCJzZXRzZWxlY3RlZHR5cGUiLCJzZXRTZWxlY3RlZFRpdGxlIiwiZmV0Y2hDb250cmFjdERhdGEiLCJldGhlcmV1bSIsInJlbW92ZUxpc3RlbmVyIiwic3ltYm9sIiwidG90YWxFdmVudCIsImFyciIsIk51bWJlciIsImV2ZW50VVJJIiwib2JqZWN0IiwicGFyc2UiLCJwcmljZWRlczEiLCJHb2FsIiwiZXgiLCJldmVudElkIiwiVGl0bGUiLCJHb2FsdXNkIiwibG9nbyIsInN0eWxlIiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsImdldEF0dHJpYnV0ZSIsImFjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsIiwiTGVmdERhdGUiLCJkYXRldGV4dCIsImMiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsImZsb29yIiwiaCIsInMiLCJ0b1N0cmluZyIsImxpc3RJdGVtIiwiaGVpZ2h0IiwibWFyZ2luIiwiYmFja2dyb3VuZCIsImNvbG9yIiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJ3aWR0aCIsImZsb2F0IiwiZ2FwIiwicmlnaHQiLCJib3JkZXIiLCJjdXJzb3IiLCJFUkM3MjFTaW5nbGV0b24iLCJzaWduZXIiLCJfaW5zdGFuY2UiLCJldGhlcnMiLCJlcmM3MjEiLCJjb250cmFjdE5hbWUiLCJjb250cmFjdEluc3RhbmNlIiwic2V0Q29udHJhY3RJbnN0YW5jZSIsImZldGNoRGF0YSIsInByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiZ2V0QWRkcmVzcyJdLCJt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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7O0FDaEJBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9kb25hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlRm9ybUlucHV0KHsgZGVmYXVsdFZhbHVlLCB0eXBlLCBwbGFjZWhvbGRlciwgaWQgfSkge1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSB8fCAnJyk7XG5cdGNvbnN0IGlucHV0ID0gKFxuXHRcdDxGb3JtLkNvbnRyb2xcblx0XHRcdHZhbHVlPXt2YWx1ZSB8fCAnJ31cblx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0dHlwZT17dHlwZX1cblx0XHRcdGlkPXtpZH1cblx0XHQvPlxuXHQpO1xuXHRyZXR1cm4gW3ZhbHVlLCBpbnB1dCwgc2V0VmFsdWVdO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9uYXRlTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdGNvbnRyYWN0LFxuXHRzZW5kZXJBZGRyZXNzLFxuXHR0eXBlLFxuXHRFdmVudElELFxuXHRTZWxlY3RlZFRpdGxlLFxufSkge1xuXHRjb25zb2xlLmxvZyhFdmVudElEKTtcblx0Y29uc3QgW25hbWUsIG5hbWVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIG5hbWUnLFxuXHR9KTtcblx0Y29uc3QgW2Rlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbklucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0YXM6ICd0ZXh0YXJlYScsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBkZXNjcmlwdGlvbicsXG5cdH0pO1xuXHRjb25zdCBbdXJsLCB1cmxJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIGltYWdlIHVybCcsXG5cdH0pO1xuXHRjb25zdCBbcHJpY2UsIHByaWNlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBQcmljZScsXG5cdH0pO1xuXHRjb25zdCBbTkZUYWRkcmVzcywgTkZUYWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgTkZUIGFkZHJlc3MnLFxuXHR9KTtcblx0Y29uc3QgW0NyeXB0b3B1bmthZGRyZXNzLCBDcnlwdG9wdW5rYWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgQ3J5cHRvcHVuayBhZGRyZXNzJyxcblx0fSk7XG5cdGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5GVCgpIHtcblx0XHR2YXIgTWV0aXN0eXBlID0gXCJORlRcIjtcblx0XHR2YXIgdG9rZW5BZGRyZXNzID0gTkZUYWRkcmVzcztcblx0XHRpZiAoXCJDcnlwdG9wdW5rXCIgPT0gdHlwZSkge1xuXHRcdFx0TWV0aXN0eXBlID0gXCJDcnlwdG9wdW5rXCI7XG5cdFx0XHR0b2tlbkFkZHJlc3MgPSBDcnlwdG9wdW5rYWRkcmVzcztcblx0XHR9XG5cdFx0Y29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHRcdHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEnLFxuXHRcdFx0dHlwZTogJ29iamVjdCcsXG5cdFx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdG5hbWU6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogbmFtZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGVzY3JpcHRpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHVybCxcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJpY2U6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogcHJpY2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0dHlwZWltZzoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBNZXRpc3R5cGVcblx0XHRcdFx0fSxcblx0XHRcdFx0bmZ0YWRkcmVzczoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiB0b2tlbkFkZHJlc3Ncblx0XHRcdFx0fSxcblx0XHRcdFx0aGlnaGVyYmlkYWRkOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiXCJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGJpZHM6IFtdXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNsYWltVG9rZW4oXG5cdFx0XHRzZW5kZXJBZGRyZXNzLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdClcblx0XHQpO1xuXG5cdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdHNpemU9XCJsZ1wiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0RG9uYXRlIHt0eXBlfSAtIHtTZWxlY3RlZFRpdGxlfVxuXHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtuYW1lSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5PcGVuaW5nIHByaWNlIGluIEVUSDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtwcmljZUlucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwRGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkRlc2NyaXB0aW9uPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+SW1hZ2UgVVJMPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e3VybElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEltYWdlVXJsXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkNyeXB0b3B1bmsgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e0NyeXB0b3B1bmthZGRyZXNzSW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5ORlQgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e05GVGFkZHJlc3NJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQpXG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2NyZWF0ZU5GVH0+XG5cdFx0XHRcdFx0XHRcdERvbmF0ZSB7dHlwZX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0PC9Nb2RhbD5cblx0KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsJiZhcy5pbmRleE9mKCcjJyk+PTApe3Njcm9sbD1mYWxzZTt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5yb3V0ZXJbcmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93LGxvY2FsZSxzY3JvbGx9KTt9ZnVuY3Rpb24gTGluayhwcm9wcyl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2Z1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKXtyZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fS8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCByZXF1aXJlZFByb3BzR3VhcmQ9e2hyZWY6dHJ1ZX07Y29uc3QgcmVxdWlyZWRQcm9wcz1PYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO3JlcXVpcmVkUHJvcHMuZm9yRWFjaChrZXk9PntpZihrZXk9PT0naHJlZicpe2lmKHByb3BzW2tleV09PW51bGx8fHR5cGVvZiBwcm9wc1trZXldIT09J3N0cmluZycmJnR5cGVvZiBwcm9wc1trZXldIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnByb3BzW2tleV09PT1udWxsPydudWxsJzp0eXBlb2YgcHJvcHNba2V5XX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCBvcHRpb25hbFByb3BzR3VhcmQ9e2FzOnRydWUscmVwbGFjZTp0cnVlLHNjcm9sbDp0cnVlLHNoYWxsb3c6dHJ1ZSxwYXNzSHJlZjp0cnVlLHByZWZldGNoOnRydWUsbG9jYWxlOnRydWV9O2NvbnN0IG9wdGlvbmFsUHJvcHM9T2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtvcHRpb25hbFByb3BzLmZvckVhY2goa2V5PT57Y29uc3QgdmFsVHlwZT10eXBlb2YgcHJvcHNba2V5XTtpZihrZXk9PT0nYXMnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycmJnZhbFR5cGUhPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0nbG9jYWxlJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2AnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdyZXBsYWNlJ3x8a2V5PT09J3Njcm9sbCd8fGtleT09PSdzaGFsbG93J3x8a2V5PT09J3Bhc3NIcmVmJ3x8a2V5PT09J3ByZWZldGNoJyl7aWYocHJvcHNba2V5XSE9bnVsbCYmdmFsVHlwZSE9PSdib29sZWFuJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2Bib29sZWFuYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5jb25zdCBoYXNXYXJuZWQ9X3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtpZihwcm9wcy5wcmVmZXRjaCYmIWhhc1dhcm5lZC5jdXJyZW50KXtoYXNXYXJuZWQuY3VycmVudD10cnVlO2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fWNvbnN0IHA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTtjb25zdCByb3V0ZXI9KDAsX3JvdXRlcjIudXNlUm91dGVyKSgpO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmhyZWYsdHJ1ZSk7cmV0dXJue2hyZWY6cmVzb2x2ZWRIcmVmLGFzOnByb3BzLmFzPygwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5hcyk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmfTt9LFtyb3V0ZXIscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxubGV0IGNoaWxkO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dHJ5e2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y2F0Y2goZXJyKXt0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fX1lbHNle2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y29uc3QgY2hpbGRSZWY9Y2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWY7Y29uc3Rbc2V0SW50ZXJzZWN0aW9uUmVmLGlzVmlzaWJsZV09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCd9KTtjb25zdCBzZXRSZWY9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soZWw9PntzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO2lmKGNoaWxkUmVmKXtpZih0eXBlb2YgY2hpbGRSZWY9PT0nZnVuY3Rpb24nKWNoaWxkUmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZFJlZj09PSdvYmplY3QnKXtjaGlsZFJlZi5jdXJyZW50PWVsO319fSxbY2hpbGRSZWYsc2V0SW50ZXJzZWN0aW9uUmVmXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9Pntjb25zdCBzaG91bGRQcmVmZXRjaD1pc1Zpc2libGUmJnAmJigwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZik7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlO2NvbnN0IGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldO2lmKHNob3VsZFByZWZldGNoJiYhaXNQcmVmZXRjaGVkKXtwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7bG9jYWxlOmN1ckxvY2FsZX0pO319LFthcyxocmVmLGlzVmlzaWJsZSxsb2NhbGUscCxyb3V0ZXJdKTtjb25zdCBjaGlsZFByb3BzPXtyZWY6c2V0UmVmLG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe2xpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpO319fTtjaGlsZFByb3BzLm9uTW91c2VFbnRlcj1lPT57aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuO2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO31wcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7cHJpb3JpdHk6dHJ1ZX0pO307Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4vLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuY29uc3QgbG9jYWxlRG9tYWluPXJvdXRlciYmcm91dGVyLmlzTG9jYWxlRG9tYWluJiYoMCxfcm91dGVyLmdldERvbWFpbkxvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmxvY2FsZXMscm91dGVyJiZyb3V0ZXIuZG9tYWluTG9jYWxlcyk7Y2hpbGRQcm9wcy5ocmVmPWxvY2FsZURvbWFpbnx8KDAsX3JvdXRlci5hZGRCYXNlUGF0aCkoKDAsX3JvdXRlci5hZGRMb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5kZWZhdWx0TG9jYWxlKSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsY2hpbGRQcm9wcyk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbicsJ2RvbWFpbkxvY2FsZXMnXTtjb25zdCByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107Y29uc3QgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPSguLi5hcmdzKT0+e2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsKC4uLmFyZ3MpPT57Y29uc3QgZXZlbnRGaWVsZD1gb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7Y29uc3QgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe2NvbnN0IG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5jb25zdCBjcmVhdGVSb3V0ZXI9KC4uLmFyZ3MpPT57c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe2NvbnN0IF9yb3V0ZXI9cm91dGVyO2NvbnN0IGluc3RhbmNlPXt9O2Zvcihjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pP1tdOnt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT0oLi4uYXJncyk9PntyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPWB3aXRoUm91dGVyKCR7bmFtZX0pYDt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKSYmcGF0aExvd2VyIT09Jy8nK2xvY2FsZUxvd2VyP2FkZFBhdGhQcmVmaXgocGF0aCwnLycrbG9jYWxlKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsbG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiYocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJyl8fHBhdGhMb3dlcj09PScvJytsb2NhbGVMb3dlcik/KHBhdGhuYW1lLmxlbmd0aD09PWxvY2FsZS5sZW5ndGgrMT8nLyc6JycpK3BhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGgrMSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpfHx1cmwuc3RhcnRzV2l0aCgnPycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlcixocmVmLHJlc29sdmVBcyl7Ly8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbmxldCBiYXNlO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpO3RyeXtiYXNlPW5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpP3JvdXRlci5hc1BhdGg6cm91dGVyLnBhdGhuYW1lLCdodHRwOi8vbicpO31jYXRjaChfKXsvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuYmFzZT1uZXcgVVJMKCcvJywnaHR0cDovL24nKTt9Ly8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbmlmKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO310cnl7Y29uc3QgZmluYWxVcmw9bmV3IFVSTCh1cmxBc1N0cmluZyxiYXNlKTtmaW5hbFVybC5wYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkoZmluYWxVcmwucGF0aG5hbWUpO2xldCBpbnRlcnBvbGF0ZWRBcz0nJztpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShmaW5hbFVybC5wYXRobmFtZSkmJmZpbmFsVXJsLnNlYXJjaFBhcmFtcyYmcmVzb2x2ZUFzKXtjb25zdCBxdWVyeT0oMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtjb25zdHtyZXN1bHQscGFyYW1zfT1pbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLGZpbmFsVXJsLnBhdGhuYW1lLHF1ZXJ5KTtpZihyZXN1bHQpe2ludGVycG9sYXRlZEFzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOnJlc3VsdCxoYXNoOmZpbmFsVXJsLmhhc2gscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl9KTt9fS8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG5jb25zdCByZXNvbHZlZEhyZWY9ZmluYWxVcmwub3JpZ2luPT09YmFzZS5vcmlnaW4/ZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKTpmaW5hbFVybC5ocmVmO3JldHVybiByZXNvbHZlQXM/W3Jlc29sdmVkSHJlZixpbnRlcnBvbGF0ZWRBc3x8cmVzb2x2ZWRIcmVmXTpyZXNvbHZlZEhyZWY7fWNhdGNoKF8pe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9fWZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCl7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtyZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKT91cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpOnVybDt9ZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcix1cmwsYXMpey8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbmxldFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109cmVzb2x2ZUhyZWYocm91dGVyLHVybCx0cnVlKTtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IGhyZWZIYWRPcmlnaW49cmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtjb25zdCBhc0hhZE9yaWdpbj1yZXNvbHZlZEFzJiZyZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtyZXNvbHZlZEhyZWY9c3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtyZXNvbHZlZEFzPXJlc29sdmVkQXM/c3RyaXBPcmlnaW4ocmVzb2x2ZWRBcyk6cmVzb2x2ZWRBcztjb25zdCBwcmVwYXJlZFVybD1ocmVmSGFkT3JpZ2luP3Jlc29sdmVkSHJlZjphZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO2NvbnN0IHByZXBhcmVkQXM9YXM/c3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLGFzKSk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmO3JldHVybnt1cmw6cHJlcGFyZWRVcmwsYXM6YXNIYWRPcmlnaW4/cHJlcGFyZWRBczphZGRCYXNlUGF0aChwcmVwYXJlZEFzKX07fWZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpe2NvbnN0IGNsZWFuUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9kZW5vcm1hbGl6ZVBhZ2VQYXRoLmRlbm9ybWFsaXplUGFnZVBhdGgpKHBhdGhuYW1lKSk7aWYoY2xlYW5QYXRobmFtZT09PScvNDA0J3x8Y2xlYW5QYXRobmFtZT09PScvX2Vycm9yJyl7cmV0dXJuIHBhdGhuYW1lO30vLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG5pZighcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbnBhZ2VzLnNvbWUocGFnZT0+e2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHBhZ2UpJiYoMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKXtwYXRobmFtZT1wYWdlO3JldHVybiB0cnVlO319KTt9cmV0dXJuKDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTt9Y29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb249cHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiYnc2Nyb2xsUmVzdG9yYXRpb24naW4gd2luZG93Lmhpc3RvcnkmJiEhZnVuY3Rpb24oKXt0cnl7bGV0IHY9J19fbmV4dCc7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xucmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odix2KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLHRydWU7fWNhdGNoKG4pe319KCk7Y29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EPVN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7ZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMpe3JldHVybiBmZXRjaCh1cmwsey8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4vL1xuLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuLy8gPiBvcHRpb24uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4vL1xuLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbi8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2Bcbi8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuY3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7aWYoYXR0ZW1wdHM+MSYmcmVzLnN0YXR1cz49NTAwKXtyZXR1cm4gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMtMSk7fWlmKHJlcy5zdGF0dXM9PT00MDQpe3JldHVybiByZXMuanNvbigpLnRoZW4oZGF0YT0+e2lmKGRhdGEubm90Rm91bmQpe3JldHVybntub3RGb3VuZDpTU0dfREFUQV9OT1RfRk9VTkR9O310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO30pO310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO31yZXR1cm4gcmVzLmpzb24oKTt9KTt9ZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZixpc1NlcnZlclJlbmRlcil7cmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXI/MzoxKS5jYXRjaChlcnI9PnsvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbi8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4vLyBsb29wLlxuaWYoIWlzU2VydmVyUmVuZGVyKXsoMCxfcm91dGVMb2FkZXIubWFya0Fzc2V0RXJyb3IpKGVycik7fXRocm93IGVycjt9KTt9Y2xhc3MgUm91dGVyey8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqLyAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbmNvbnN0cnVjdG9yKF9wYXRobmFtZSxfcXVlcnksX2FzLHtpbml0aWFsUHJvcHMscGFnZUxvYWRlcixBcHAsd3JhcEFwcCxDb21wb25lbnQsZXJyLHN1YnNjcmlwdGlvbixpc0ZhbGxiYWNrLGxvY2FsZSxsb2NhbGVzLGRlZmF1bHRMb2NhbGUsZG9tYWluTG9jYWxlcyxpc1ByZXZpZXd9KXt0aGlzLnJvdXRlPXZvaWQgMDt0aGlzLnBhdGhuYW1lPXZvaWQgMDt0aGlzLnF1ZXJ5PXZvaWQgMDt0aGlzLmFzUGF0aD12b2lkIDA7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5jb21wb25lbnRzPXZvaWQgMDt0aGlzLnNkYz17fTt0aGlzLnNkcj17fTt0aGlzLnN1Yj12b2lkIDA7dGhpcy5jbGM9dm9pZCAwO3RoaXMucGFnZUxvYWRlcj12b2lkIDA7dGhpcy5fYnBzPXZvaWQgMDt0aGlzLmV2ZW50cz12b2lkIDA7dGhpcy5fd3JhcEFwcD12b2lkIDA7dGhpcy5pc1Nzcj12b2lkIDA7dGhpcy5pc0ZhbGxiYWNrPXZvaWQgMDt0aGlzLl9pbkZsaWdodFJvdXRlPXZvaWQgMDt0aGlzLl9zaGFsbG93PXZvaWQgMDt0aGlzLmxvY2FsZT12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmRlZmF1bHRMb2NhbGU9dm9pZCAwO3RoaXMuZG9tYWluTG9jYWxlcz12b2lkIDA7dGhpcy5pc1JlYWR5PXZvaWQgMDt0aGlzLmlzUHJldmlldz12b2lkIDA7dGhpcy5pc0xvY2FsZURvbWFpbj12b2lkIDA7dGhpcy5faWR4PTA7dGhpcy5vblBvcFN0YXRlPWU9Pntjb25zdCBzdGF0ZT1lLnN0YXRlO2lmKCFzdGF0ZSl7Ly8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4vLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbi8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbi8vXG4vLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4vLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4vLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbmNvbnN0e3BhdGhuYW1lLHF1ZXJ5fT10aGlzO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgocGF0aG5hbWUpLHF1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSk7cmV0dXJuO31pZighc3RhdGUuX19OKXtyZXR1cm47fWxldCBmb3JjZWRTY3JvbGw7Y29uc3R7dXJsLGFzLG9wdGlvbnMsaWR4fT1zdGF0ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7aWYodGhpcy5faWR4IT09aWR4KXsvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkKXt9Ly8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e2NvbnN0IHY9c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK2lkeCk7Zm9yY2VkU2Nyb2xsPUpTT04ucGFyc2Uodik7fWNhdGNoKF91bnVzZWQyKXtmb3JjZWRTY3JvbGw9e3g6MCx5OjB9O319fX10aGlzLl9pZHg9aWR4O2NvbnN0e3BhdGhuYW1lfT0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpOy8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG5pZih0aGlzLmlzU3NyJiZhcz09PXRoaXMuYXNQYXRoJiZwYXRobmFtZT09PXRoaXMucGF0aG5hbWUpe3JldHVybjt9Ly8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbmlmKHRoaXMuX2JwcyYmIXRoaXMuX2JwcyhzdGF0ZSkpe3JldHVybjt9dGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyx7c2hhbGxvdzpvcHRpb25zLnNoYWxsb3cmJnRoaXMuX3NoYWxsb3csbG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGV9KSxmb3JjZWRTY3JvbGwpO307Ly8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG50aGlzLnJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShfcGF0aG5hbWUpOy8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxudGhpcy5jb21wb25lbnRzPXt9Oy8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcbi8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4vLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG5pZihfcGF0aG5hbWUhPT0nL19lcnJvcicpe3RoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXT17Q29tcG9uZW50LGluaXRpYWw6dHJ1ZSxwcm9wczppbml0aWFsUHJvcHMsZXJyLF9fTl9TU0c6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTRyxfX05fU1NQOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU1B9O310aGlzLmNvbXBvbmVudHNbJy9fYXBwJ109e0NvbXBvbmVudDpBcHAsc3R5bGVTaGVldHM6Wy8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9dfTsvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbnRoaXMuZXZlbnRzPVJvdXRlci5ldmVudHM7dGhpcy5wYWdlTG9hZGVyPXBhZ2VMb2FkZXI7dGhpcy5wYXRobmFtZT1fcGF0aG5hbWU7dGhpcy5xdWVyeT1fcXVlcnk7Ly8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbi8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCBhdXRvRXhwb3J0RHluYW1pYz0oMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShfcGF0aG5hbWUpJiZzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDt0aGlzLmFzUGF0aD1hdXRvRXhwb3J0RHluYW1pYz9fcGF0aG5hbWU6X2FzO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5zdWI9c3Vic2NyaXB0aW9uO3RoaXMuY2xjPW51bGw7dGhpcy5fd3JhcEFwcD13cmFwQXBwOy8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbi8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG50aGlzLmlzU3NyPXRydWU7dGhpcy5pc0ZhbGxiYWNrPWlzRmFsbGJhY2s7dGhpcy5pc1JlYWR5PSEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwfHxzZWxmLl9fTkVYVF9EQVRBX18uZ2lwfHwhYXV0b0V4cG9ydER5bmFtaWMmJiFzZWxmLmxvY2F0aW9uLnNlYXJjaCYmIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbmNvbnN0IG9wdGlvbnM9e2xvY2FsZX07b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9X2FzIT09X3BhdGhuYW1lO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLG9wdGlvbnMpO313aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLHRoaXMub25Qb3BTdGF0ZSk7Ly8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbi8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuaWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3dpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPSdtYW51YWwnO319fX1yZWxvYWQoKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fS8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovYmFjaygpe3dpbmRvdy5oaXN0b3J5LmJhY2soKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3B1c2godXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pey8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbmlmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt0cnl7Ly8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkMyl7fX19Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcmVwbGFjZSh1cmwsYXMsb3B0aW9ucz17fSl7Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO31hc3luYyBjaGFuZ2UobWV0aG9kLHVybCxhcyxvcHRpb25zLGZvcmNlZFNjcm9sbCl7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Y29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWY9dXJsPT09YXN8fG9wdGlvbnMuX2h8fG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmOy8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG5pZihvcHRpb25zLl9oKXt0aGlzLmlzUmVhZHk9dHJ1ZTt9bGV0IGxvY2FsZUNoYW5nZT1vcHRpb25zLmxvY2FsZSE9PXRoaXMubG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPW9wdGlvbnMubG9jYWxlPT09ZmFsc2U/dGhpcy5kZWZhdWx0TG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmxvY2FsZTtpZih0eXBlb2Ygb3B0aW9ucy5sb2NhbGU9PT0ndW5kZWZpbmVkJyl7b3B0aW9ucy5sb2NhbGU9dGhpcy5sb2NhbGU7fWNvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtpZihsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXt0aGlzLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO3BhcnNlZEFzLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt1cmw9YWRkQmFzZVBhdGgoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoaGFzQmFzZVBhdGgodXJsKT9kZWxCYXNlUGF0aCh1cmwpOnVybCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTt9bGV0IGRpZE5hdmlnYXRlPWZhbHNlOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt2YXIgX3RoaXMkbG9jYWxlczsvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG5pZighKChfdGhpcyRsb2NhbGVzPXRoaXMubG9jYWxlcykhPW51bGwmJl90aGlzJGxvY2FsZXMuaW5jbHVkZXModGhpcy5sb2NhbGUpKSl7cGFyc2VkQXMucGF0aG5hbWU9YWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlKTt3aW5kb3cubG9jYXRpb24uaHJlZj0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1jb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLHVuZGVmaW5lZCx0aGlzLmxvY2FsZSk7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpey8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4vLyBjb3JyZWN0IGRvbWFpblxuaWYoIWRpZE5hdmlnYXRlJiZkZXRlY3RlZERvbWFpbiYmdGhpcy5pc0xvY2FsZURvbWFpbiYmc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSE9PWRldGVjdGVkRG9tYWluLmRvbWFpbil7Y29uc3QgYXNOb0Jhc2VQYXRoPWRlbEJhc2VQYXRoKGFzKTt3aW5kb3cubG9jYXRpb24uaHJlZj1gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGg9PT0nLyc/Jyc6YXNOb0Jhc2VQYXRofWB8fCcvJyl9YDsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1pZihkaWROYXZpZ2F0ZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fX1pZighb3B0aW9ucy5faCl7dGhpcy5pc1Nzcj1mYWxzZTt9Ly8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuaWYoX3V0aWxzLlNUKXtwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO31jb25zdHtzaGFsbG93PWZhbHNlfT1vcHRpb25zO2NvbnN0IHJvdXRlUHJvcHM9e3NoYWxsb3d9O2lmKHRoaXMuX2luRmxpZ2h0Um91dGUpe3RoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUscm91dGVQcm9wcyk7fWFzPWFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLG9wdGlvbnMubG9jYWxlLHRoaXMuZGVmYXVsdExvY2FsZSkpO2NvbnN0IGNsZWFuZWRBcz1kZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyx0aGlzLmxvY2FsZSk7dGhpcy5faW5GbGlnaHRSb3V0ZT1hczsvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG5pZighb3B0aW9ucy5faCYmdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSl7dGhpcy5hc1BhdGg9Y2xlYW5lZEFzO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTsvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xudGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO3RoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7dGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLG51bGwpO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZSxxdWVyeX09cGFyc2VkOy8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbi8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuLy8gd2hlbiByZXdyaXR0ZW4gdG9cbmxldCBwYWdlcyxyZXdyaXRlczt0cnl7cGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTt9Y2F0Y2goZXJyKXsvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3Rcbi8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9Ly8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2Vcbi8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbi8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbmlmKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykmJiFsb2NhbGVDaGFuZ2Upe21ldGhvZD0ncmVwbGFjZVN0YXRlJzt9Ly8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbi8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbmxldCByZXNvbHZlZEFzPWFzOy8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbi8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbi8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG5wYXRobmFtZT1wYXRobmFtZT8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoZGVsQmFzZVBhdGgocGF0aG5hbWUpKTpwYXRobmFtZTtpZihzaG91bGRSZXNvbHZlSHJlZiYmcGF0aG5hbWUhPT0nL19lcnJvcicpeztvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj10cnVlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMixfb3B0aW9ucyRzY3JvbGw7bGV0IHJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpO2xldHtlcnJvcixwcm9wcyxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbzsvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbmlmKChfX05fU1NHfHxfX05fU1NQKSYmcHJvcHMpe2lmKHByb3BzLnBhZ2VQcm9wcyYmcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCl7Y29uc3QgZGVzdGluYXRpb249cHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDsvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuLy8gaXQncyBub3RcbmlmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcGFyc2VkSHJlZj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7cGFyc2VkSHJlZi5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUscGFnZXMpO2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xyXG5pbXBvcnQgRG9uYXRlTkZUTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbmF0aW9uKCkge1xyXG4gICAgY29uc3QgW0NyZWF0ZW1vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkdHlwZSwgc2V0c2VsZWN0ZWR0eXBlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtTZWxlY3RlZFRpdGxlLCBzZXRTZWxlY3RlZFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xyXG5cclxuICAgICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcclxuICAgICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdhY2NvdW50c0NoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignY2hhaW5DaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbY29udHJhY3RdKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlbk5hbWUoYXdhaXQgY29udHJhY3QubmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRva2VuU3ltYm9sKGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbEV2ZW50ID0gYXdhaXQgY29udHJhY3QudG90YWxFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bWJlcih0b3RhbEV2ZW50KTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjb250cmFjdC5ldmVudFVSSShpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2VkZXMxID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHsgcHJpY2VkZXMxID0gTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24gKiAzODE3LjA5KSB9IGNhdGNoIChleCkgeyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudElkOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGU6IG9iamVjdC5wcm9wZXJ0aWVzLlRpdGxlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZTogb2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWx1c2Q6IHByaWNlZGVzMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWw6IG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBvYmplY3QucHJvcGVydGllcy5sb2dvLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudGlkXCIpKTtcclxuICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImV2ZW50dGl0bGVcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdGVkdHlwZShcIk5GVFwiKTtcclxuXHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImV2ZW50aWRcIikpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkVGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnR0aXRsZVwiKSk7XHJcbiAgICAgICAgc2V0c2VsZWN0ZWR0eXBlKFwiQ3J5cHRvcHVua1wiKTtcclxuXHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcclxuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZCA9IGMgLSBuO1xyXG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RG9uYXRpb248L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkRvbmF0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL0xvZ28uc3ZnXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J0RvbmF0aW9uQmFyJz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jz9xPUFsbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsgYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWxsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nP3E9VG9kYXknPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9kYXlcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPSc/cT1UaGlzIE1vbnRoJz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgTW9udGhcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJz5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uZXZlbnRJZH0gY2xhc3NOYW1lPSdyb3cnIHN0eWxlPXt7IGhlaWdodDogXCIzOTdweFwiLCBtYXJnaW46IFwiMjhweFwiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGNvbG9yOiBcImJsYWNrXCIsIG92ZXJmbG93OiBcImhpZGRlblwiLCBwYWRkaW5nOiAwLCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxoND57TGVmdERhdGUobGlzdEl0ZW0uRGF0ZSl9PC9oND48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmxvZ299IHN0eWxlPXt7IG1heFdpZHRoOiBcIjMyN3B4XCIsIG1heEhlaWdodDogXCIyNTVweFwiLCBtaW5XaWR0aDogXCIzMjdweFwiLCBtaW5IZWlnaHQ6IFwiMjU1cHhcIiwgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nVG9wXCI6IFwiMzNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IFwiODJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93R2FwXCI6IFwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntsaXN0SXRlbS5UaXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgXCJ3aGl0ZVNwYWNlXCI6IFwicHJlLXdyYXBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R29hbDogIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiR7bGlzdEl0ZW0uR29hbHVzZH0gKHtsaXN0SXRlbS5Hb2FsfSBFVEgpPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNjFweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiBcIjI2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgXCJoZWlnaHRcIjogXCIxMDAlXCIsIGJvcmRlcjogXCIwcHhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiwgZ2FwOiBcIjE0cHhcIiB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBiYWNrZ3JvdW5kOiBcInJnYigwLCAyMjIsIDIwNSlcIiwgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgZmxvYXQ6IFwicmlnaHRcIiwgd2lkdGg6IFwiMjkwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIFwicGFkZGluZ1RvcFwiOiBcIjZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbmF0ZSBORlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gb25DbGljaz17YWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWx9IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBiYWNrZ3JvdW5kOiBcInJnYigwLCAyMjIsIDIwNSlcIiwgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgZmxvYXQ6IFwicmlnaHRcIiwgd2lkdGg6IFwiMjkwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIFwicGFkZGluZ1RvcFwiOiBcIjZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbmF0ZSBDcnlwdG9wdW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZG9uYXRpb24vYXVjdGlvbi8ke2xpc3RJdGVtLmV2ZW50SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBiYWNrZ3JvdW5kOiBcInJnYigwLCAyMjIsIDIwNSlcIiwgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgZmxvYXQ6IFwicmlnaHRcIiwgd2lkdGg6IFwiMjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIFwicGFkZGluZ1RvcFwiOiBcIjZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyB0byBhdWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxEb25hdGVORlRNb2RhbFxyXG4gICAgICAgICAgICAgICAgc2hvdz17Q3JlYXRlbW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgcG9vciBpbXBsZW1lbnRhdGlvbiwgYmV0dGVyIHRvIGltcGxlbWVudCBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cclxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBFdmVudElEPXtzZWxlY3RpZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdGVkdHlwZX1cclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkVGl0bGU9e1NlbGVjdGVkVGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5cbmltcG9ydCBlcmM3MjEgZnJvbSAnLi4vY29udHJhY3RzL2RlcGxveW1lbnRzL21ldGlzL01ldGlzRVJDNzIxLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFUkM3MjFTaW5nbGV0b24oc2lnbmVyKSB7XG5cdGlmICghRVJDNzIxU2luZ2xldG9uLl9pbnN0YW5jZSkge1xuXHRcdEVSQzcyMVNpbmdsZXRvbi5faW5zdGFuY2UgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuXHRcdFx0ZXJjNzIxLmFkZHJlc3MsXG5cdFx0XHRlcmM3MjEuYWJpLFxuXHRcdFx0c2lnbmVyXG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiBFUkM3MjFTaW5nbGV0b24uX2luc3RhbmNlO1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5cbmltcG9ydCBFUkM3MjFTaW5nbGV0b24gZnJvbSAnLi9FUkM3MjFTaW5nbGV0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDb250cmFjdChjb250cmFjdE5hbWUpIHtcblx0Y29uc3QgW2NvbnRyYWN0SW5zdGFuY2UsIHNldENvbnRyYWN0SW5zdGFuY2VdID0gdXNlU3RhdGUoe1xuXHRcdGNvbnRyYWN0OiBudWxsLFxuXHRcdHNpZ25lckFkZHJlc3M6IG51bGwsXG5cdH0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcblx0XHRcdFx0Y29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0geyBjb250cmFjdDogbnVsbCwgc2lnbmVyQWRkcmVzczogbnVsbCB9O1xuXG5cdFx0XHRcdC8vIFNldHMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSBzcGVjaWZpYyBjb250cmFjdCBwZXIgYXBwbGljYXRpb25cblx0XHRcdFx0Ly8gVXNlZnVsIGZvciBzd2l0Y2hpbmcgYWNyb3NzIG11bHRpcGxlIGNvbnRyYWN0cyBpbiBhIHNpbmdsZSBhcHBsaWNhdGlvblxuXHRcdFx0XHRzd2l0Y2ggKGNvbnRyYWN0TmFtZSkge1xuXHRcdFx0XHRcdGNhc2UgJ0VSQzcyMSc6XG5cdFx0XHRcdFx0XHRjb250cmFjdC5jb250cmFjdCA9IEVSQzcyMVNpbmdsZXRvbihzaWduZXIpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdJbnZhbGlkIGNvbnRyYWN0Jyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnRyYWN0LnNpZ25lckFkZHJlc3MgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpO1xuXG5cdFx0XHRcdHNldENvbnRyYWN0SW5zdGFuY2UoY29udHJhY3QpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGZldGNoRGF0YSgpO1xuXG5cdFx0d2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBmZXRjaERhdGEpO1xuXHRcdHdpbmRvdy5ldGhlcmV1bS5vbignY2hhaW5DaGFuZ2VkJywgZmV0Y2hEYXRhKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2FjY291bnRzQ2hhbmdlZCcsIGZldGNoRGF0YSk7XG5cdFx0XHR3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGZldGNoRGF0YSk7XG5cdFx0fTtcblx0fSwgW10pO1xuXG5cdHJldHVybiBjb250cmFjdEluc3RhbmNlO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXRoZXJzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==