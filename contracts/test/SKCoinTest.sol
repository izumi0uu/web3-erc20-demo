// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import {SKCoin} from "../src/SKCoin.sol";

contract SKCoinTest is Test {
    SKCoin public skCoin;
    address owner = vm.addr(1);
    address user = vm.addr(2);

    function setUp() public {
        skCoin = new SKCoin(owner);
        vm.deal(address(skCoin), 1000 ether);
    }

    function testSuccessIfOwnerMint() public {
        uint256 amount = 100 ether;

        vm.startPrank(owner);
        skCoin.mint(amount);
        vm.stopPrank();

        assertEq(skCoin.balanceOf(owner), amount);
    }

    function testSuccessIfOwnerBurn() public {
        uint256 amount = 100 ether;

        vm.startPrank(owner);
        skCoin.mint(amount);
        vm.stopPrank();

        assertEq(skCoin.balanceOf(owner), amount);

        vm.startPrank(owner);
        skCoin.burn(50 ether);
        vm.stopPrank();

        assertEq(skCoin.balanceOf(owner), 50 ether);
    }

    function testRevertIfUserMint() public {
        uint256 amount = 100 ether;

        vm.startPrank(user);
        vm.expectRevert();
        skCoin.mint(amount);
        vm.stopPrank();

        assertEq(skCoin.balanceOf(user), 0);
    }

    function testRevertIfUserBurn() public {
        vm.startPrank(owner);
        skCoin.mint(100 ether);
        vm.stopPrank();

        assertEq(skCoin.balanceOf(owner), 100 ether);

        vm.startPrank(user);
        vm.expectRevert();
        skCoin.burn(50 ether);
        vm.stopPrank();

        assertEq(skCoin.balanceOf(owner), 100 ether);

        assertEq(skCoin.balanceOf(user), 0);
    }
}
