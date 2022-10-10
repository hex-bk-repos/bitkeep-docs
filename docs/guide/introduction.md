# Introduction

Welcome to the developer documentation for BitKeep Wallet. The purpose of this document is to explain how to build a DApp using the BitKeep Wallent.

You can find the latest version of BitKeep Wallet on our [official website](https://bitkeep.com)

- [IOS Download](https://bitkeep.com/download?type=1)
- [Android Download](https://bitkeep.com/download?type=0)
- [Chrome Extension](https://bitkeep.com/download?type=2)

## Integrate

Once the BitKeep is installed and running (make sure to backup your Secret Recovery Phrase), you should find that the new browser tab `window.bitkeep` has an available object in the developer console. This is how your website interacts with BikKeep Wallet. This API allows websites to request users' `Ethereum Solana Tron...` accounts, read data from blockchains the user is connected to, and suggest that the user sign messages and transactions.

In order to facilitate special detection, the global object is attached with the `isBitKeep` `bitkeep` attribute.

<img src="../images/connect/isBitKeep.jpg" width="400px">
