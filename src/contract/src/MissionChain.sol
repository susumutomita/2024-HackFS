// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MissionChain {
    struct Mission {
        string companyName;
        string missionCid;
    }

    mapping(address => Mission) private missions;

    function setMission(
        string memory _companyName,
        string memory _missionCid
    ) public {
        missions[msg.sender] = Mission(_companyName, _missionCid);
    }

    function getMission(
        address _companyAddress
    ) public view returns (string memory, string memory) {
        Mission memory mission = missions[_companyAddress];
        return (mission.companyName, mission.missionCid);
    }
}
