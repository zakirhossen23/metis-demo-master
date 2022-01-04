// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MetisERC721 is ERC721 {
	uint256 private _tokenIds;
	uint256 private _eventIds;
	uint256 private _EventTokenIds;
	string[2] data1;
	uint256 public _EventTokenSearchIds;
	mapping(uint256 => string[2]) private AllEventTokens;
	mapping(uint256 => string[2]) public _SearchedStore;
	mapping(uint256 => string) private _tokenURIs;
	mapping(uint256 => string) private _eventURIs;
	mapping(string => string) private _eventTokens;

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

	function claimToken(
		address _claimer,
		string memory _tokenURI,
		uint256 _eventid
	) public returns (uint256) {
		_mint(_claimer, _tokenIds);
		_setTokenURI(_tokenIds, _tokenURI);
		_setTokenEvent(_EventTokenIds, _eventid, _tokenURI);
		_tokenIds++;
		_EventTokenIds++;
		return _tokenIds;
	}

	function _setTokenEvent(
		uint256 EventTokenId,
		uint256 EventId,
		string memory _tokenURI
	) public virtual {
		AllEventTokens[EventTokenId] = [
			Strings.toString(EventId),
			string(_tokenURI)
		];
	}

	function createEvent(address _claimer, string memory _eventURI)
		public
		returns (uint256)
	{
		_setEventURI(_eventIds, _eventURI);

		_eventIds++;

		return _eventIds;
	}

	function gettokenSearchEventTotal(uint256 EventID)
		public
		view
		virtual
		returns (string[] memory)
	{
		string[] memory _SearchedStoreToken = new string[](10);

		uint256 _EventTokenSearchIds2 = 0;

		for (uint256 i = 0; i < _EventTokenIds; i++) {
			if (
				keccak256(bytes(AllEventTokens[i][0])) ==
				keccak256(bytes(Strings.toString(EventID)))
			) {
				_SearchedStoreToken[_EventTokenSearchIds2] = AllEventTokens[i][
					1
				];
				_EventTokenSearchIds2++;
			}
		}

		return _SearchedStoreToken;
	}

	function _getSearchedTokenURI(uint256 _tokenId)
		public
		view
		virtual
		returns (string memory)
	{
		return _SearchedStore[_tokenId][0];
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
