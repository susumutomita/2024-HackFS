# MissionChain Smart Contract

This repository contains the smart contract code for the MissionChain decentralized application. The smart contract is developed using [Foundry](https://book.getfoundry.sh/), a fast, portable, and modular toolkit for Ethereum application development.

## Documentation

For detailed documentation on Foundry, visit [Foundry Book](https://book.getfoundry.sh/).

## Usage

### Build

To compile the smart contracts, run:

```shell
forge build
```

### Test

To run the tests for the smart contracts, use:

```shell
forge test
```

### Format

To format the smart contract code, execute:

```shell
forge fmt
```

### Gas Snapshots

To create gas snapshots, run:

```shell
forge snapshot
```

### Anvil

To start a local Ethereum node, use:

```shell
anvil
```

### Deploy

To deploy the smart contract to a network, use the following command:

```shell
forge script script/MissionChain.s.sol:MissionChainScript --rpc-url $RPC_URL --broadcast --sender $YOUR_ADDRESS --private-key $PRIVATE_KEY
```

### Cast

To interact with the EVM smart contracts, send transactions, and get chain data, use:

```shell
cast <subcommand>
```

### Help

For help with Foundry commands, run:

```shell
forge --help
anvil --help
cast --help
```

## Smart Contract

The `MissionChain` smart contract allows users to set and get missions for their companies.

### Functions

- **setMission**: Adds a new mission for a company.
- **getMissionCount**: Returns the total number of missions.
- **getMissionByIndex**: Retrieves the mission details by index.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MissionChain {
    struct Mission {
        string companyName;
        string missionCid;
    }

    Mission[] private missions;

    function setMission(
        string memory _companyName,
        string memory _missionCid
    ) public {
        missions.push(Mission(_companyName, _missionCid));
    }

    function getMissionCount() public view returns (uint256) {
        return missions.length;
    }

    function getMissionByIndex(
        uint256 index
    ) public view returns (string memory, string memory) {
        require(index < missions.length, "Index out of bounds");
        Mission storage mission = missions[index];
        return (mission.companyName, mission.missionCid);
    }
}
```

## License

This project is licensed under the MIT License.
