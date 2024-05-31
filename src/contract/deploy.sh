#!/bin/bash

# 環境変数の読み込み
RPC_URL=${RPC_URL}
PRIVATE_KEY=${PRIVATE_KEY}

# デプロイコマンドの実行
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/MissionChain.sol:MissionChain
