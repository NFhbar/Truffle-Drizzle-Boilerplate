pragma solidity ^0.4.18;

contract SimpleStorage {

  /*
  * Events
  */
  event StorageSet(string _message);

  /*
  * Storage
  */
  uint public storedData;

  /*
   * Public functions
   */
  /// @dev sets integer data
  /// @param x integer to store.
  function set(uint x)
    public
  {
    storedData = x;
    StorageSet("Data stored successfully!");
  }
  
}
