---
title: Constants
---

The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via `api.consts.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[acalaTreasury](#acalatreasury)**

- **[auctionManager](#auctionmanager)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[cdpEngine](#cdpengine)**

- **[cdpTreasury](#cdptreasury)**

- **[contracts](#contracts)**

- **[dex](#dex)**

- **[electionsPhragmen](#electionsphragmen)**

- **[emergencyShutdown](#emergencyshutdown)**

- **[eVm](#evm)**

- **[graduallyUpdate](#graduallyupdate)**

- **[incentives](#incentives)**

- **[indices](#indices)**

- **[loans](#loans)**

- **[multisig](#multisig)**

- **[nFt](#nft)**

- **[nomineesElection](#nomineeselection)**

- **[polkadotBridge](#polkadotbridge)**

- **[prices](#prices)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[staking](#staking)**

- **[stakingPool](#stakingpool)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[transactionPayment](#transactionpayment)**

- **[vesting](#vesting)**


___


## acalaTreasury
 
### bountyCuratorDeposit: `Permill`
- **interface**: `api.consts.acalaTreasury.bountyCuratorDeposit`
- **summary**:   Percentage of the curator fee that will be reserved upfront as deposit for bounty curator. 
 
### bountyDepositBase: `BalanceOf`
- **interface**: `api.consts.acalaTreasury.bountyDepositBase`
- **summary**:   The amount held on deposit for placing a bounty proposal. 
 
### bountyDepositPayoutDelay: `BlockNumber`
- **interface**: `api.consts.acalaTreasury.bountyDepositPayoutDelay`
- **summary**:   The delay period for which a bounty beneficiary need to wait before claim the payout. 
 
### bountyValueMinimum: `BalanceOf`
- **interface**: `api.consts.acalaTreasury.bountyValueMinimum`
 
### burn: `Permill`
- **interface**: `api.consts.acalaTreasury.burn`
- **summary**:   Percentage of spare funds (if any) that are burnt per spend period. 
 
### dataDepositPerByte: `BalanceOf`
- **interface**: `api.consts.acalaTreasury.dataDepositPerByte`
- **summary**:   The amount held on deposit per byte within the tip report reason or bounty description. 
 
### maximumReasonLength: `u32`
- **interface**: `api.consts.acalaTreasury.maximumReasonLength`
- **summary**:   Maximum acceptable reason length. 
 
### moduleId: `ModuleId`
- **interface**: `api.consts.acalaTreasury.moduleId`
- **summary**:   The treasury's module id, used for deriving its sovereign account ID. 
 
### proposalBond: `Permill`
- **interface**: `api.consts.acalaTreasury.proposalBond`
- **summary**:   Fraction of a proposal's value that should be bonded in order to place the proposal. An accepted proposal gets these back. A rejected proposal does not. 
 
### proposalBondMinimum: `BalanceOf`
- **interface**: `api.consts.acalaTreasury.proposalBondMinimum`
- **summary**:   Minimum amount of funds that should be placed in a deposit for making a proposal. 
 
### spendPeriod: `BlockNumber`
- **interface**: `api.consts.acalaTreasury.spendPeriod`
- **summary**:   Period between successive spends. 
 
### tipCountdown: `BlockNumber`
- **interface**: `api.consts.acalaTreasury.tipCountdown`
- **summary**:   The period for which a tip remains open after is has achieved threshold tippers. 
 
### tipFindersFee: `Percent`
- **interface**: `api.consts.acalaTreasury.tipFindersFee`
- **summary**:   The amount of the final tip which goes to the original reporter of the tip. 
 
### tipReportDepositBase: `BalanceOf`
- **interface**: `api.consts.acalaTreasury.tipReportDepositBase`
- **summary**:   The amount held on deposit for placing a tip report. 

___


## auctionManager
 
### auctionDurationSoftCap: `BlockNumber`
- **interface**: `api.consts.auctionManager.auctionDurationSoftCap`
- **summary**:   When the total duration of the auction exceeds this soft cap, double the effect of `MinimumIncrementSize`, halve the effect of `AuctionTimeToClose` 
 
### auctionTimeToClose: `BlockNumber`
- **interface**: `api.consts.auctionManager.auctionTimeToClose`
- **summary**:   The extended time for the auction to end after each successful bid 
 
### getNativeCurrencyId: `CurrencyId`
- **interface**: `api.consts.auctionManager.getNativeCurrencyId`
- **summary**:   The native currency id 
 
### getStableCurrencyId: `CurrencyId`
- **interface**: `api.consts.auctionManager.getStableCurrencyId`
- **summary**:   The stable currency id 
 
### minimumIncrementSize: `Rate`
- **interface**: `api.consts.auctionManager.minimumIncrementSize`
- **summary**:   The minimum increment size of each bid compared to the previous one 

___


## babe
 
### epochDuration: `u64`
- **interface**: `api.consts.babe.epochDuration`
- **summary**:   The number of **slots** that an epoch takes. We couple sessions to epochs, i.e. we start a new session once the new epoch begins. 
 
### expectedBlockTime: `Moment`
- **interface**: `api.consts.babe.expectedBlockTime`
- **summary**:   The expected average block time at which BABE should be creating blocks. Since BABE is probabilistic it is not trivial to figure out what the expected average block time should be based on the slot duration and the security parameter `c` (where `1 - c` represents the probability of a slot being empty). 

___


## balances
 
### existentialDeposit: `Balance`
- **interface**: `api.consts.balances.existentialDeposit`
- **summary**:   The minimum amount required to keep an account open. 

___


## cdpEngine
 
### collateralCurrencyIds: `Vec<CurrencyId>`
- **interface**: `api.consts.cdpEngine.collateralCurrencyIds`
- **summary**:   The list of valid collateral currency types 
 
### defaultDebitExchangeRate: `ExchangeRate`
- **interface**: `api.consts.cdpEngine.defaultDebitExchangeRate`
- **summary**:   The default debit exchange rate for all collateral types, if the debit exchange rate for specific collateral is `None`, it works. 
 
### defaultLiquidationPenalty: `Rate`
- **interface**: `api.consts.cdpEngine.defaultLiquidationPenalty`
- **summary**:   The default liquidation penalty rate when liquidate unsafe CDP, if the liquidation penalty rate for specific collateral is `None`, it works. 
 
### defaultLiquidationRatio: `Ratio`
- **interface**: `api.consts.cdpEngine.defaultLiquidationRatio`
- **summary**:   The default liquidation ratio for all collateral types of CDP, if the liquidation ratio for specific collateral is `None`, it works. 
 
### getStableCurrencyId: `CurrencyId`
- **interface**: `api.consts.cdpEngine.getStableCurrencyId`
- **summary**:   The stable currency id 
 
### maxSlippageSwapWithDex: `Ratio`
- **interface**: `api.consts.cdpEngine.maxSlippageSwapWithDex`
- **summary**:   The max slippage allowed when liquidate an unsafe CDP by swap with DEX 
 
### minimumDebitValue: `Balance`
- **interface**: `api.consts.cdpEngine.minimumDebitValue`
- **summary**:   The minimum debit value allowed exists in CDP which has debit amount to avoid dust 

___


## cdpTreasury
 
### getStableCurrencyId: `CurrencyId`
- **interface**: `api.consts.cdpTreasury.getStableCurrencyId`
- **summary**:   Stablecoin currency id 
 
### maxAuctionsCount: `u32`
- **interface**: `api.consts.cdpTreasury.maxAuctionsCount`
- **summary**:   Lots cap when create auction 
 
### moduleId: `ModuleId`
- **interface**: `api.consts.cdpTreasury.moduleId`
- **summary**:   The CDP treasury's module id, keep surplus and collateral assets from liquidation. 

___


## contracts
 
### maxDepth: `u32`
- **interface**: `api.consts.contracts.maxDepth`
- **summary**:   The maximum nesting level of a call/instantiate stack. A reasonable default value is 100. 
 
### maxValueSize: `u32`
- **interface**: `api.consts.contracts.maxValueSize`
- **summary**:   The maximum size of a storage value in bytes. A reasonable default is 16 KiB. 
 
### rentByteFee: `BalanceOf`
- **interface**: `api.consts.contracts.rentByteFee`
- **summary**:   Price of a byte of storage per one block interval. Should be greater than 0. 
 
### rentDepositOffset: `BalanceOf`
- **interface**: `api.consts.contracts.rentDepositOffset`
- **summary**:   The amount of funds a contract should deposit in order to offset the cost of one byte. 

  Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day, then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent. But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000, then it would pay 500 BU/day. 
 
### signedClaimHandicap: `BlockNumber`
- **interface**: `api.consts.contracts.signedClaimHandicap`
- **summary**:   Number of block delay an extrinsic claim surcharge has. 

  When claim surcharge is called by an extrinsic the rent is checked for current_block - delay 
 
### storageSizeOffset: `u32`
- **interface**: `api.consts.contracts.storageSizeOffset`
- **summary**:   A size offset for an contract. A just created account with untouched storage will have that much of storage from the perspective of the state rent. 

  This is a simple way to ensure that contracts with empty storage eventually get deleted by making them pay rent. This creates an incentive to remove them early in order to save rent. 
 
### surchargeReward: `BalanceOf`
- **interface**: `api.consts.contracts.surchargeReward`
- **summary**:   Reward that is received by the party whose touch has led to removal of a contract. 
 
### tombstoneDeposit: `BalanceOf`
- **interface**: `api.consts.contracts.tombstoneDeposit`
- **summary**:   The minimum amount required to generate a tombstone. 

___


## dex
 
### getExchangeFee: `(u32,u32)`
- **interface**: `api.consts.dex.getExchangeFee`
- **summary**:   Trading fee rate 
 
### moduleId: `ModuleId`
- **interface**: `api.consts.dex.moduleId`
- **summary**:   The DEX's module id, keep all assets in DEX. 
 
### tradingPathLimit: `u32`
- **interface**: `api.consts.dex.tradingPathLimit`
- **summary**:   The limit for length of trading path 

___


## electionsPhragmen
 
### candidacyBond: `BalanceOf`
- **interface**: `api.consts.electionsPhragmen.candidacyBond`
 
### desiredMembers: `u32`
- **interface**: `api.consts.electionsPhragmen.desiredMembers`
 
### desiredRunnersUp: `u32`
- **interface**: `api.consts.electionsPhragmen.desiredRunnersUp`
 
### moduleId: `LockIdentifier`
- **interface**: `api.consts.electionsPhragmen.moduleId`
 
### termDuration: `BlockNumber`
- **interface**: `api.consts.electionsPhragmen.termDuration`
 
### votingBond: `BalanceOf`
- **interface**: `api.consts.electionsPhragmen.votingBond`

___


## emergencyShutdown
 
### collateralCurrencyIds: `Vec<CurrencyId>`
- **interface**: `api.consts.emergencyShutdown.collateralCurrencyIds`
- **summary**:   The list of valid collateral currency types 

___


## eVM
 
### contractExistentialDeposit: `BalanceOf`
- **interface**: `api.consts.eVM.contractExistentialDeposit`
- **summary**:   Deploy a contract need the existential deposit. 
 
### storageDefaultQuota: `u32`
- **interface**: `api.consts.eVM.storageDefaultQuota`
- **summary**:   Storage quota default value. 
 
### storageDepositPerByte: `BalanceOf`
- **interface**: `api.consts.eVM.storageDepositPerByte`
- **summary**:   Storage required for per byte. 
 
### transferMaintainerDeposit: `BalanceOf`
- **interface**: `api.consts.eVM.transferMaintainerDeposit`
- **summary**:   Deposit for transferring the maintainer of the contract. 

___


## graduallyUpdate
 
### updateFrequency: `BlockNumber`
- **interface**: `api.consts.graduallyUpdate.updateFrequency`

___


## incentives
 
### accumulatePeriod: `BlockNumber`
- **interface**: `api.consts.incentives.accumulatePeriod`
- **summary**:   The period to accumulate rewards 
 
### dexIncentivePool: `AccountId`
- **interface**: `api.consts.incentives.dexIncentivePool`
- **summary**:   The vault account to keep rewards for type DexIncentive and DexSaving PoolId 
 
### homaIncentivePool: `AccountId`
- **interface**: `api.consts.incentives.homaIncentivePool`
- **summary**:   The vault account to keep rewards for type HomaIncentive PoolId 
 
### incentiveCurrencyId: `CurrencyId`
- **interface**: `api.consts.incentives.incentiveCurrencyId`
- **summary**:   The incentive reward type (should be ACA) 
 
### loansIncentivePool: `AccountId`
- **interface**: `api.consts.incentives.loansIncentivePool`
- **summary**:   The vault account to keep rewards for type LoansIncentive PoolId 
 
### savingCurrencyId: `CurrencyId`
- **interface**: `api.consts.incentives.savingCurrencyId`
- **summary**:   The saving reward type (should be AUSD) 

___


## indices
 
### deposit: `BalanceOf`
- **interface**: `api.consts.indices.deposit`
- **summary**:   The deposit needed for reserving an index. 

___


## loans
 
### moduleId: `ModuleId`
- **interface**: `api.consts.loans.moduleId`
- **summary**:   The loan's module id, keep all collaterals of CDPs. 

___


## multisig
 
### depositBase: `BalanceOf`
- **interface**: `api.consts.multisig.depositBase`
- **summary**:   The base amount of currency needed to reserve for creating a multisig execution or to store a dispatch call for later. 
 
### depositFactor: `BalanceOf`
- **interface**: `api.consts.multisig.depositFactor`
- **summary**:   The amount of currency needed per unit threshold when creating a multisig execution. 
 
### maxSignatories: `u16`
- **interface**: `api.consts.multisig.maxSignatories`
- **summary**:   The maximum amount of signatories allowed for a given multisig. 

___


## nFT
 
### createClassDeposit: `Balance`
- **interface**: `api.consts.nFT.createClassDeposit`
- **summary**:   The minimum balance to create class 
 
### createTokenDeposit: `Balance`
- **interface**: `api.consts.nFT.createTokenDeposit`
- **summary**:   The minimum balance to create token 
 
### moduleId: `ModuleId`
- **interface**: `api.consts.nFT.moduleId`
- **summary**:   The NFT's module id 

___


## nomineesElection
 
### maxUnlockingChunks: `u32`
- **interface**: `api.consts.nomineesElection.maxUnlockingChunks`
 
### minBondThreshold: `Balance`
- **interface**: `api.consts.nomineesElection.minBondThreshold`
 
### nominateesCount: `u32`
- **interface**: `api.consts.nomineesElection.nominateesCount`

___


## polkadotBridge
 
### bondingDuration: `EraIndex`
- **interface**: `api.consts.polkadotBridge.bondingDuration`
 
### eraLength: `BlockNumber`
- **interface**: `api.consts.polkadotBridge.eraLength`

___


## prices
 
### getLiquidCurrencyId: `CurrencyId`
- **interface**: `api.consts.prices.getLiquidCurrencyId`
 
### getStableCurrencyId: `CurrencyId`
- **interface**: `api.consts.prices.getStableCurrencyId`
 
### getStakingCurrencyId: `CurrencyId`
- **interface**: `api.consts.prices.getStakingCurrencyId`
 
### stableCurrencyFixedPrice: `Price`
- **interface**: `api.consts.prices.stableCurrencyFixedPrice`

___


## proxy
 
### announcementDepositBase: `BalanceOf`
- **interface**: `api.consts.proxy.announcementDepositBase`
- **summary**:   `AnnouncementDepositBase` metadata shadow. 
 
### announcementDepositFactor: `BalanceOf`
- **interface**: `api.consts.proxy.announcementDepositFactor`
- **summary**:   `AnnouncementDepositFactor` metadata shadow. 
 
### maxPending: `u32`
- **interface**: `api.consts.proxy.maxPending`
- **summary**:   `MaxPending` metadata shadow. 
 
### maxProxies: `u16`
- **interface**: `api.consts.proxy.maxProxies`
- **summary**:   The maximum amount of proxies allowed for a single account. 
 
### proxyDepositBase: `BalanceOf`
- **interface**: `api.consts.proxy.proxyDepositBase`
- **summary**:   The base amount of currency needed to reserve for creating a proxy. 
 
### proxyDepositFactor: `BalanceOf`
- **interface**: `api.consts.proxy.proxyDepositFactor`
- **summary**:   The amount of currency needed per proxy added. 

___


## recovery
 
### configDepositBase: `BalanceOf`
- **interface**: `api.consts.recovery.configDepositBase`
- **summary**:   The base amount of currency needed to reserve for creating a recovery configuration. 
 
### friendDepositFactor: `BalanceOf`
- **interface**: `api.consts.recovery.friendDepositFactor`
- **summary**:   The amount of currency needed per additional user when creating a recovery configuration. 
 
### maxFriends: `u16`
- **interface**: `api.consts.recovery.maxFriends`
- **summary**:   The maximum amount of friends allowed in a recovery configuration. 
 
### recoveryDeposit: `BalanceOf`
- **interface**: `api.consts.recovery.recoveryDeposit`
- **summary**:   The base amount of currency needed to reserve for starting a recovery. 

___


## staking
 
### bondingDuration: `EraIndex`
- **interface**: `api.consts.staking.bondingDuration`
- **summary**:   Number of eras that staked funds must remain bonded for. 
 
### electionLookahead: `BlockNumber`
- **interface**: `api.consts.staking.electionLookahead`
- **summary**:   The number of blocks before the end of the era from which election submissions are allowed. 

  Setting this to zero will disable the offchain compute and only on-chain seq-phragmen will be used. 

  This is bounded by being within the last session. Hence, setting it to a value more than the length of a session will be pointless. 
 
### maxIterations: `u32`
- **interface**: `api.consts.staking.maxIterations`
- **summary**:   Maximum number of balancing iterations to run in the offchain submission. 

  If set to 0, balance_solution will not be executed at all. 
 
### maxNominatorRewardedPerValidator: `u32`
- **interface**: `api.consts.staking.maxNominatorRewardedPerValidator`
- **summary**:   The maximum number of nominators rewarded for each validator. 

  For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can claim their reward. This used to limit the i/o cost for the nominator payout. 
 
### minSolutionScoreBump: `Perbill`
- **interface**: `api.consts.staking.minSolutionScoreBump`
- **summary**:   The threshold of improvement that should be provided for a new solution to be accepted. 
 
### sessionsPerEra: `SessionIndex`
- **interface**: `api.consts.staking.sessionsPerEra`
- **summary**:   Number of sessions per era. 
 
### slashDeferDuration: `EraIndex`
- **interface**: `api.consts.staking.slashDeferDuration`
- **summary**:   Number of eras that slashes are deferred by, after computation. 

  This should be less than the bonding duration. Set to 0 if slashes should be applied immediately, without opportunity for intervention. 

___


## stakingPool
 
### defaultExchangeRate: `ExchangeRate`
- **interface**: `api.consts.stakingPool.defaultExchangeRate`
- **summary**:   The default exchange rate for liquid currency to staking currency. 
 
### liquidCurrencyId: `CurrencyId`
- **interface**: `api.consts.stakingPool.liquidCurrencyId`
- **summary**:   The liquid currency id(should be LDOT in acala) 
 
### moduleId: `ModuleId`
- **interface**: `api.consts.stakingPool.moduleId`
- **summary**:   The staking pool's module id, keep all staking currency belong to Homa protocol. 
 
### poolAccountIndexes: `Vec<u32>`
- **interface**: `api.consts.stakingPool.poolAccountIndexes`
- **summary**:   The sub account indexs of parachain to vault assets of Homa protocol in Polkadot. 
 
### stakingCurrencyId: `CurrencyId`
- **interface**: `api.consts.stakingPool.stakingCurrencyId`
- **summary**:   The staking currency id(should be DOT in acala) 

___


## system
 
### blockHashCount: `BlockNumber`
- **interface**: `api.consts.system.blockHashCount`
- **summary**:   The maximum number of blocks to allow in mortal eras. 
 
### blockWeights: `BlockWeights`
- **interface**: `api.consts.system.blockWeights`
- **summary**:   The weight configuration (limits & base values) for each class of extrinsics and block. 
 
### dbWeight: `RuntimeDbWeight`
- **interface**: `api.consts.system.dbWeight`
- **summary**:   The weight of runtime database operations the runtime can invoke. 

___


## timestamp
 
### minimumPeriod: `Moment`
- **interface**: `api.consts.timestamp.minimumPeriod`
- **summary**:   The minimum period between blocks. Beware that this is different to the *expected* period that the block production apparatus provides. Your chosen consensus system will generally work with this to determine a sensible block time. e.g. For Aura, it will be double this period on default settings. 

___


## transactionPayment
 
### allNonNativeCurrencyIds: `Vec<CurrencyId>`
- **interface**: `api.consts.transactionPayment.allNonNativeCurrencyIds`
- **summary**:   All non-native currency ids in Acala. 
 
### maxSlippageSwapWithDex: `Ratio`
- **interface**: `api.consts.transactionPayment.maxSlippageSwapWithDex`
- **summary**:   The max slippage allowed when swap fee with DEX 
 
### nativeCurrencyId: `CurrencyId`
- **interface**: `api.consts.transactionPayment.nativeCurrencyId`
- **summary**:   Native currency id, the actual received currency type as fee for treasury. 
 
### stableCurrencyId: `CurrencyId`
- **interface**: `api.consts.transactionPayment.stableCurrencyId`
- **summary**:   Stable currency id. 
 
### transactionByteFee: `PalletBalanceOf`
- **interface**: `api.consts.transactionPayment.transactionByteFee`
- **summary**:   The fee to be paid for making a transaction; the per-byte portion. 
 
### weightToFee: `Vec<WeightToFeeCoefficient>`
- **interface**: `api.consts.transactionPayment.weightToFee`
- **summary**:   The polynomial that is applied in order to derive fee from weight. 

___


## vesting
 
### minVestedTransfer: `BalanceOf`
- **interface**: `api.consts.vesting.minVestedTransfer`
- **summary**:   The minimum amount to be transferred to create a new vesting schedule. 
