// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract SKCoin is ERC20, Ownable {
    event Mint(uint256 indexed amount, address indexed minter);
    event Burn(uint256 indexed amount, address indexed burner);

    string public _name = "SKCoin";
    string public _symbol = "SKC";

    constructor(address initialOwner) ERC20(_name, _symbol) Ownable(initialOwner) {}

    function mint(uint256 _amount) public onlyOwner {
        _mint(owner(), _amount);

        emit Mint(_amount, _msgSender());
    }

    function burn(uint256 _amount) public onlyOwner {
        _burn(_msgSender(), _amount);

        emit Burn(_amount, _msgSender());
    }
}
