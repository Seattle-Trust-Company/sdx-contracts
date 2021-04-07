pragma solidity 0.4.24;
pragma experimental "v0.5.0";

/// @file  TeslaShare.sol
/// @desc  TeslaShare inherits from GenericShare

/** IMPORTS **/

import { Generic } from "../Generic/Generic.sol";


/** @title TeslaShare **/
contract Tesla is Generic {
    string public constant name = "Tesla SDX"; // solium-disable-line
    string public constant symbol = "TSLA"; // solium-disable-line uppercase
}
