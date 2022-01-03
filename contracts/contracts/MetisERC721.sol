// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MetisERC721 is ERC721 {
	uint256 private _tokenIds;
	uint256 private _eventIds;
	mapping(uint256 => string) private _tokenURIs;
	mapping(uint256 => string) private _eventURIs;

	mapping(uint256 => Bid) public allbidstoken;

	uint256 public bidCount = 0;
	struct Bid {
		uint256 TokenID;
		string bid;
		address bidderHash;
		string date;
		string status;
	}
	struct Bidder {
		uint256 id;
		string username;
	}

	constructor(string memory name, string memory symbol)
		ERC721(name, symbol)
	{}

	function claimToken(address _claimer, string memory _tokenURI)
		public
		returns (uint256)
	{
		_mint(_claimer, _tokenIds);
		_setTokenURI(_tokenIds, _tokenURI);

		_tokenIds++;

		return _tokenIds;
	}

	function createEvent(address _claimer, string memory _eventURI)
		public
		returns (uint256)
	{
		_mint(_claimer, _eventIds);
		_setEventURI(_eventIds, _eventURI);

		_eventIds++;

		return _eventIds;
	}

	function _setEventURI(uint256 eventId, string memory _eventURI)
		public
		virtual
	{
		_eventURIs[eventId] = _eventURI;
	}

	function _setTokenURI(uint256 tokenId, string memory _tokenURI)
		public
		virtual
	{
		require(
			_exists(tokenId),
			"ERC721Metadata: URI set of nonexistent token"
		);
		_tokenURIs[tokenId] = _tokenURI;
	}

	function eventURI(uint256 eventId) public view returns (string memory) {
		return _eventURIs[eventId];
	}

	function tokenURI(uint256 tokenId)
		public
		view
		virtual
		override
		returns (string memory)
	{
		require(
			_exists(tokenId),
			"ERC721Metadata: URI query for nonexistent token"
		);

		return _tokenURIs[tokenId];
	}

	function totalSupply() public view returns (uint256) {
		return _tokenIds;
	}

	function totalEvent() public view returns (uint256) {
		return _eventIds;
	}

	function createBid(
		uint256 _tokenId,
		string memory _bid,
		string memory _updatedURI,
		address bidder
	) public {
		bidCount++;
		_tokenURIs[_tokenId] = _updatedURI;

		allbidstoken[bidCount] = Bid(_tokenId, _bid, bidder, "date", "Bid");
	}
}
