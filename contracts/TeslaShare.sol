pragma solidity 0.4.24;
pragma experimental "v0.5.0";

/// @file  TeslaShare.sol
/// @desc  TeslaShare inherits from GenericShare

/** @sect IMPORTS **/

import "./zeppelin/SafeMath.sol";
import { GenericShare } from "./GenericShare.sol";


/** @title TeslaShare **/
contract TeslaShare is GenericShare("Tesla SDX Share", "TSLASDX");
