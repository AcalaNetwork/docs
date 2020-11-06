---
title: Storage
---

The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via `api.query.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[accounts](#accounts)**

- **[airDrop](#airdrop)**

- **[auction](#auction)**

- **[auctionManager](#auctionmanager)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[cdpEngine](#cdpengine)**

- **[cdpTreasury](#cdptreasury)**

- **[dex](#dex)**

- **[emergencyShutdown](#emergencyshutdown)**

- **[generalCouncil](#generalcouncil)**

- **[generalCouncilMembership](#generalcouncilmembership)**

- **[graduallyUpdate](#graduallyupdate)**

- **[grandpa](#grandpa)**

- **[homaCouncil](#homacouncil)**

- **[homaCouncilMembership](#homacouncilmembership)**

- **[honzon](#honzon)**

- **[honzonCouncil](#honzoncouncil)**

- **[honzonCouncilMembership](#honzoncouncilmembership)**

- **[indices](#indices)**

- **[loans](#loans)**

- **[multisig](#multisig)**

- **[nomineesElection](#nomineeselection)**

- **[operatorMembership](#operatormembership)**

- **[oracle](#oracle)**

- **[palletTreasury](#pallettreasury)**

- **[polkadotBridge](#polkadotbridge)**

- **[prices](#prices)**

- **[randomnessCollectiveFlip](#randomnesscollectiveflip)**

- **[recovery](#recovery)**

- **[renVmBridge](#renvmbridge)**

- **[scheduleUpdate](#scheduleupdate)**

- **[session](#session)**

- **[staking](#staking)**

- **[stakingPool](#stakingpool)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCouncil](#technicalcouncil)**

- **[technicalCouncilMembership](#technicalcouncilmembership)**

- **[timestamp](#timestamp)**

- **[tokens](#tokens)**

- **[transactionPayment](#transactionpayment)**

- **[vesting](#vesting)**

- **[substrate](#substrate)**


___


## accounts
 
### freeTransferEnabledAccounts(`AccountId`): `Option<bool>`
- **interface**: `api.query.accounts.freeTransferEnabledAccounts`
- **summary**:   Mapping from account id to flag for free transfer. 
 
### lastFreeTransfers(`AccountId`): `Vec<MomentOf>`
- **interface**: `api.query.accounts.lastFreeTransfers`
- **summary**:   Mapping from account id to free transfer records, record moment when a transfer tx occurs. 

___


## airDrop
 
### airDrops(`AccountId, AirDropCurrencyId`): `Balance`
- **interface**: `api.query.airDrop.airDrops`

___


## auction
 
### auctionEndTime(`BlockNumber, AuctionId`): `Option<()>`
- **interface**: `api.query.auction.auctionEndTime`
- **summary**:   Index auctions by end time. 
 
### auctions(`AuctionId`): `Option<AuctionInfo>`
- **interface**: `api.query.auction.auctions`
- **summary**:   Stores on-going and future auctions. Closed auction are removed. 
 
### auctionsIndex(): `AuctionId`
- **interface**: `api.query.auction.auctionsIndex`
- **summary**:   Track the next auction ID. 

___


## auctionManager
 
### collateralAuctions(`AuctionIdOf`): `Option<CollateralAuctionItem>`
- **interface**: `api.query.auctionManager.collateralAuctions`
- **summary**:   Mapping from auction id to collateral auction info 
 
### debitAuctions(`AuctionIdOf`): `Option<DebitAuctionItem>`
- **interface**: `api.query.auctionManager.debitAuctions`
- **summary**:   Mapping from auction id to debit auction info 
 
### isShutdown(): `bool`
- **interface**: `api.query.auctionManager.isShutdown`
- **summary**:   System shutdown flag 
 
### surplusAuctions(`AuctionIdOf`): `Option<SurplusAuctionItem>`
- **interface**: `api.query.auctionManager.surplusAuctions`
- **summary**:   Mapping from auction id to surplus auction info 
 
### totalCollateralInAuction(`CurrencyId`): `Balance`
- **interface**: `api.query.auctionManager.totalCollateralInAuction`
- **summary**:   Record of the total collateral amount of all ative collateral auctions under specific collateral type CollateralType -> TotalAmount 
 
### totalDebitInAuction(): `Balance`
- **interface**: `api.query.auctionManager.totalDebitInAuction`
- **summary**:   Record of total fix amount of all ative debit auctions 
 
### totalSurplusInAuction(): `Balance`
- **interface**: `api.query.auctionManager.totalSurplusInAuction`
- **summary**:   Record of total surplus amount of all ative surplus auctions 
 
### totalTargetInAuction(): `Balance`
- **interface**: `api.query.auctionManager.totalTargetInAuction`
- **summary**:   Record of total target sales of all ative collateral auctions 

___


## babe
 
### authorities(): `Vec<(AuthorityId,BabeAuthorityWeight)>`
- **interface**: `api.query.babe.authorities`
- **summary**:   Current epoch authorities. 
 
### currentSlot(): `u64`
- **interface**: `api.query.babe.currentSlot`
- **summary**:   Current slot number. 
 
### epochIndex(): `u64`
- **interface**: `api.query.babe.epochIndex`
- **summary**:   Current epoch index. 
 
### genesisSlot(): `u64`
- **interface**: `api.query.babe.genesisSlot`
- **summary**:   The slot at which the first epoch actually started. This is 0 until the first block of the chain. 
 
### initialized(): `Option<MaybeRandomness>`
- **interface**: `api.query.babe.initialized`
- **summary**:   Temporary value (cleared at block finalization) which is `Some` if per-block initialization has already been called for current block. 
 
### lateness(): `BlockNumber`
- **interface**: `api.query.babe.lateness`
- **summary**:   How late the current block is compared to its parent. 

  This entry is populated as part of block execution and is cleaned up on block finalization. Querying this storage entry outside of block execution context should always yield zero. 
 
### nextEpochConfig(): `Option<NextConfigDescriptor>`
- **interface**: `api.query.babe.nextEpochConfig`
- **summary**:   Next epoch configuration, if changed. 
 
### nextRandomness(): `Randomness`
- **interface**: `api.query.babe.nextRandomness`
- **summary**:   Next epoch randomness. 
 
### randomness(): `Randomness`
- **interface**: `api.query.babe.randomness`
- **summary**:   The epoch randomness for the *current* epoch. 

  #### Security 

  This MUST NOT be used for gambling, as it can be influenced by a malicious validator in the short term. It MAY be used in many cryptographic protocols, however, so long as one remembers that this (like everything else on-chain) it is public. For example, it can be used where a number is needed that cannot have been chosen by an adversary, for purposes such as public-coin zero-knowledge proofs. 
 
### segmentIndex(): `u32`
- **interface**: `api.query.babe.segmentIndex`
- **summary**:   Randomness under construction. 

  We make a tradeoff between storage accesses and list length. We store the under-construction randomness in segments of up to `UNDER_CONSTRUCTION_SEGMENT_LENGTH`. 

  Once a segment reaches this length, we begin the next one. We reset all segments and return to `0` at the beginning of every epoch. 
 
### underConstruction(`u32`): `Vec<Randomness>`
- **interface**: `api.query.babe.underConstruction`
- **summary**:   TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay. 

___


## balances
 
### account(`AccountId`): `AccountData`
- **interface**: `api.query.balances.account`
- **summary**:   The balance of an account. 

  NOTE: This is only used in the case that this module is used to store balances. 
 
### locks(`AccountId`): `Vec<BalanceLock>`
- **interface**: `api.query.balances.locks`
- **summary**:   Any liquidity locks on some account balances. NOTE: Should only be accessed when setting, changing and freeing a lock. 
 
### storageVersion(): `Releases`
- **interface**: `api.query.balances.storageVersion`
- **summary**:   Storage version of the pallet. 

  This is set to v2.0.0 for new networks. 
 
### totalIssuance(): `Balance`
- **interface**: `api.query.balances.totalIssuance`
- **summary**:   The total units issued in the system. 

___


## cdpEngine
 
### collateralParams(`CurrencyId`): `RiskManagementParams`
- **interface**: `api.query.cdpEngine.collateralParams`
- **summary**:   Mapping from collateral type to its risk management params 
 
### debitExchangeRate(`CurrencyId`): `Option<ExchangeRate>`
- **interface**: `api.query.cdpEngine.debitExchangeRate`
- **summary**:   Mapping from collateral type to its exchange rate of debit units and debit value 
 
### globalStabilityFee(): `Rate`
- **interface**: `api.query.cdpEngine.globalStabilityFee`
- **summary**:   Global stability fee rate for all types of collateral 
 
### isShutdown(): `bool`
- **interface**: `api.query.cdpEngine.isShutdown`
- **summary**:   System shutdown flag 

___


## cdpTreasury
 
### collateralAuctionMaximumSize(`CurrencyId`): `Balance`
- **interface**: `api.query.cdpTreasury.collateralAuctionMaximumSize`
- **summary**:   The maximum amount of collateral amount for sale per collateral auction 
 
### debitAuctionFixedSize(): `Balance`
- **interface**: `api.query.cdpTreasury.debitAuctionFixedSize`
- **summary**:   The fixed amount of stable coin per surplus auction wants to get 
 
### debitPool(): `Balance`
- **interface**: `api.query.cdpTreasury.debitPool`
- **summary**:   Current total debit value of system. It's not same as debit in CDP engine, it is the bad debt of the system. 
 
### initialAmountPerDebitAuction(): `Balance`
- **interface**: `api.query.cdpTreasury.initialAmountPerDebitAuction`
- **summary**:   Initial amount of native token for sale per debit auction 
 
### isShutdown(): `bool`
- **interface**: `api.query.cdpTreasury.isShutdown`
- **summary**:   System shutdown flag 
 
### surplusAuctionFixedSize(): `Balance`
- **interface**: `api.query.cdpTreasury.surplusAuctionFixedSize`
- **summary**:   The fixed amount of stable coin for sale per surplus auction 
 
### surplusBufferSize(): `Balance`
- **interface**: `api.query.cdpTreasury.surplusBufferSize`
- **summary**:   The buffer size of surplus pool, the system will process the surplus through surplus auction when above this value 
 
### surplusPool(): `Balance`
- **interface**: `api.query.cdpTreasury.surplusPool`
- **summary**:   Current total surplus of system. 
 
### totalCollaterals(`CurrencyId`): `Balance`
- **interface**: `api.query.cdpTreasury.totalCollaterals`
- **summary**:   Mapping from collateral type to collateral assets amount kept in CDP treasury 

___


## dex
 
### isShutdown(): `bool`
- **interface**: `api.query.dex.isShutdown`
- **summary**:   System shutdown flag 
 
### liquidityIncentiveRate(`CurrencyId`): `Rate`
- **interface**: `api.query.dex.liquidityIncentiveRate`
- **summary**:   Incentive reward rate for different currency type CurrencyType -> IncentiveRate 
 
### liquidityPool(`CurrencyId`): `(Balance,Balance)`
- **interface**: `api.query.dex.liquidityPool`
- **summary**:   Liquidity pool, which is the trading pair for specific currency type to base currency type. CurrencyType -> (OtherCurrencyAmount, BaseCurrencyAmount) 
 
### shares(`CurrencyId, AccountId`): `Share`
- **interface**: `api.query.dex.shares`
- **summary**:   Shares records indexed by currency type and account id CurrencyType -> Owner -> ShareAmount 
 
### totalInterest(`CurrencyId`): `(Balance,Balance)`
- **interface**: `api.query.dex.totalInterest`
- **summary**:   Total interest(include total withdrawn) and total withdrawn interest for different currency type CurrencyType -> (TotalInterest, TotalWithdrawnInterest) 
 
### totalShares(`CurrencyId`): `Share`
- **interface**: `api.query.dex.totalShares`
- **summary**:   Total shares amount of liquidity pool specificed by currency type CurrencyType -> TotalSharesAmount 
 
### withdrawnInterest(`CurrencyId, AccountId`): `Balance`
- **interface**: `api.query.dex.withdrawnInterest`
- **summary**:   Withdrawn interest indexed by currency type and account id CurrencyType -> Owner -> WithdrawnInterest 

___


## emergencyShutdown
 
### canRefund(): `bool`
- **interface**: `api.query.emergencyShutdown.canRefund`
- **summary**:   Open final redemption flag 
 
### isShutdown(): `bool`
- **interface**: `api.query.emergencyShutdown.isShutdown`
- **summary**:   Emergency shutdown flag 

___


## generalCouncil
 
### members(): `Vec<AccountId>`
- **interface**: `api.query.generalCouncil.members`
- **summary**:   The current members of the collective. This is stored sorted (just by value). 
 
### prime(): `Option<AccountId>`
- **interface**: `api.query.generalCouncil.prime`
- **summary**:   The member who provides the default vote for any other members that do not vote before the timeout. If None, then no member has that privilege. 
 
### proposalCount(): `u32`
- **interface**: `api.query.generalCouncil.proposalCount`
- **summary**:   Proposals so far. 
 
### proposalOf(`Hash`): `Option<Proposal>`
- **interface**: `api.query.generalCouncil.proposalOf`
- **summary**:   Actual proposal for a given hash, if it's current. 
 
### proposals(): `Vec<Hash>`
- **interface**: `api.query.generalCouncil.proposals`
- **summary**:   The hashes of the active proposals. 
 
### voting(`Hash`): `Option<Votes>`
- **interface**: `api.query.generalCouncil.voting`
- **summary**:   Votes on a given proposal, if it is ongoing. 

___


## generalCouncilMembership
 
### members(): `Vec<AccountId>`
- **interface**: `api.query.generalCouncilMembership.members`
- **summary**:   The current membership, stored as an ordered Vec. 
 
### prime(): `Option<AccountId>`
- **interface**: `api.query.generalCouncilMembership.prime`
- **summary**:   The current prime member, if one exists. 

___


## graduallyUpdate
 
### graduallyUpdates(): `Vec<GraduallyUpdate>`
- **interface**: `api.query.graduallyUpdate.graduallyUpdates`
- **summary**:   All the on-going updates 
 
### lastUpdatedAt(): `BlockNumber`
- **interface**: `api.query.graduallyUpdate.lastUpdatedAt`
- **summary**:   The last updated block number 

___


## grandpa
 
### currentSetId(): `SetId`
- **interface**: `api.query.grandpa.currentSetId`
- **summary**:   The number of changes (both in terms of keys and underlying economic responsibilities) in the "set" of Grandpa validators from genesis. 
 
### nextForced(): `Option<BlockNumber>`
- **interface**: `api.query.grandpa.nextForced`
- **summary**:   next block number where we can force a change. 
 
### pendingChange(): `Option<StoredPendingChange>`
- **interface**: `api.query.grandpa.pendingChange`
- **summary**:   Pending change: (signaled at, scheduled change). 
 
### setIdSession(`SetId`): `Option<SessionIndex>`
- **interface**: `api.query.grandpa.setIdSession`
- **summary**:   A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible. 

  TWOX-NOTE: `SetId` is not under user control. 
 
### stalled(): `Option<(BlockNumber,BlockNumber)>`
- **interface**: `api.query.grandpa.stalled`
- **summary**:   `true` if we are currently stalled. 
 
### state(): `StoredState`
- **interface**: `api.query.grandpa.state`
- **summary**:   State of the current authority set. 

___


## homaCouncil
 
### members(): `Vec<AccountId>`
- **interface**: `api.query.homaCouncil.members`
- **summary**:   The current members of the collective. This is stored sorted (just by value). 
 
### prime(): `Option<AccountId>`
- **interface**: `api.query.homaCouncil.prime`
- **summary**:   The member who provides the default vote for any other members that do not vote before the timeout. If None, then no member has that privilege. 
 
### proposalCount(): `u32`
- **interface**: `api.query.homaCouncil.proposalCount`
- **summary**:   Proposals so far. 
 
### proposalOf(`Hash`): `Option<Proposal>`
- **interface**: `api.query.homaCouncil.proposalOf`
- **summary**:   Actual proposal for a given hash, if it's current. 
 
### proposals(): `Vec<Hash>`
- **interface**: `api.query.homaCouncil.proposals`
- **summary**:   The hashes of the active proposals. 
 
### voting(`Hash`): `Option<Votes>`
- **interface**: `api.query.homaCouncil.voting`
- **summary**:   Votes on a given proposal, if it is ongoing. 

___


## homaCouncilMembership
 
### members(): `Vec<AccountId>`
- **interface**: `api.query.homaCouncilMembership.members`
- **summary**:   The current membership, stored as an ordered Vec. 
 
### prime(): `Option<AccountId>`
- **interface**: `api.query.homaCouncilMembership.prime`
- **summary**:   The current prime member, if one exists. 

___


## honzon
 
### authorization(`AccountId, (CurrencyId,AccountId)`): `bool`
- **interface**: `api.query.honzon.authorization`
- **summary**:   The authorization relationship map from Authorizer -> (CollateralType, Authorizee) -> Authorized 
 
### isShutdown(): `bool`
- **interface**: `api.query.honzon.isShutdown`
- **summary**:   System shutdown flag 

___


## honzonCouncil
 
### members(): `Vec<AccountId>`
- **interface**: `api.query.honzonCouncil.members`
- **summary**:   The current members of the collective. This is stored sorted (just by value). 
 
### prime(): `Option<AccountId>`
- **interface**: `api.query.honzonCouncil.prime`
- **summary**:   The member who provides the default vote for any other members that do not vote before the timeout. If None, then no member has that privilege. 
 
### proposalCount(): `u32`
- **interface**: `api.query.honzonCouncil.proposalCount`
- **summary**:   Proposals so far. 
 
### proposalOf(`Hash`): `Option<Proposal>`
- **interface**: `api.query.honzonCouncil.proposalOf`
- **summary**:   Actual proposal for a given hash, if it's current. 
 
### proposals(): `Vec<Hash>`
- **interface**: `api.query.honzonCouncil.proposals`
- **summary**:   The hashes of the active proposals. 
 
### voting(`Hash`): `Option<Votes>`
- **interface**: `api.query.honzonCouncil.voting`
- **summary**:   Votes on a given proposal, if it is ongoing. 

___


## honzonCouncilMembership
 
### members(): `Vec<AccountId>`
- **interface**: `api.query.honzonCouncilMembership.members`
- **summary**:   The current membership, stored as an ordered Vec. 
 
### prime(): `Option<AccountId>`
- **interface**: `api.query.honzonCouncilMembership.prime`
- **summary**:   The current prime member, if one exists. 

___


## indices
 
### accounts(`AccountIndex`): `Option<(AccountId,BalanceOf,bool)>`
- **interface**: `api.query.indices.accounts`
- **summary**:   The lookup from index to account. 

___


## loans
 
### collaterals(`AccountId, CurrencyId`): `Balance`
- **interface**: `api.query.loans.collaterals`
- **summary**:   The collateral asset amount of CDPs, map from Owner -> CollateralType -> CollateralAmount 
 
### debits(`CurrencyId, AccountId`): `DebitBalance`
- **interface**: `api.query.loans.debits`
- **summary**:   The debit amount records of CDPs, map from CollateralType -> Owner -> DebitAmount 
 
### totalCollaterals(`CurrencyId`): `Balance`
- **interface**: `api.query.loans.totalCollaterals`
- **summary**:   The total collateral asset amount, map from CollateralType -> TotalCollateralAmount 
 
### totalDebits(`CurrencyId`): `DebitBalance`
- **interface**: `api.query.loans.totalDebits`
- **summary**:   The total debit amount, map from CollateralType -> TotalDebitAmount 

___


## multisig
 
### calls(`[u8;32]`): `Option<(Bytes,AccountId,BalanceOf)>`
- **interface**: `api.query.multisig.calls`
 
### multisigs(`AccountId, [u8;32]`): `Option<Multisig>`
- **interface**: `api.query.multisig.multisigs`
- **summary**:   The set of open multisig operations. 

___


## nomineesElection
 
### currentEra(): `EraIndex`
- **interface**: `api.query.nomineesElection.currentEra`
 
### ledger(`AccountId`): `BondingLedger`
- **interface**: `api.query.nomineesElection.ledger`
 
### nominations(`AccountId`): `Vec<PolkadotAccountId>`
- **interface**: `api.query.nomineesElection.nominations`
 
### nominees(): `Vec<PolkadotAccountId>`
- **interface**: `api.query.nomineesElection.nominees`
 
### votes(`PolkadotAccountId`): `Balance`
- **interface**: `api.query.nomineesElection.votes`

___


## operatorMembership
 
### members(): `Vec<AccountId>`
- **interface**: `api.query.operatorMembership.members`
- **summary**:   The current membership, stored as an ordered Vec. 
 
### prime(): `Option<AccountId>`
- **interface**: `api.query.operatorMembership.prime`
- **summary**:   The current prime member, if one exists. 

___


## oracle
 
### hasDispatched(): `OrderedSet`
- **interface**: `api.query.oracle.hasDispatched`
- **summary**:   If an oracle operator has feed a value in this block 
 
### isUpdated(`OracleKey`): `bool`
- **interface**: `api.query.oracle.isUpdated`
- **summary**:   True if Self::values(key) is up to date, otherwise the value is stale 
 
### members(): `OrderedSet`
- **interface**: `api.query.oracle.members`
- **summary**:   The current members of the collective. This is stored sorted (just by value). 
 
### nonces(`AccountId`): `u32`
- **interface**: `api.query.oracle.nonces`
 
### rawValues(`AccountId, OracleKey`): `Option<TimestampedValueOf>`
- **interface**: `api.query.oracle.rawValues`
- **summary**:   Raw values for each oracle operators 
 
### sessionKeys(`AccountId`): `Option<AuthorityId>`
- **interface**: `api.query.oracle.sessionKeys`
- **summary**:   Session key for oracle operators 
 
### values(`OracleKey`): `Option<TimestampedValueOf>`
- **interface**: `api.query.oracle.values`
- **summary**:   Combined value, may not be up to date 

___


## palletTreasury
 
### approvals(): `Vec<ProposalIndex>`
- **interface**: `api.query.palletTreasury.approvals`
- **summary**:   Proposal indices that have been approved but not yet awarded. 
 
### proposalCount(): `ProposalIndex`
- **interface**: `api.query.palletTreasury.proposalCount`
- **summary**:   Number of proposals that have been made. 
 
### proposals(`ProposalIndex`): `Option<Proposal>`
- **interface**: `api.query.palletTreasury.proposals`
- **summary**:   Proposals that have been made. 
 
### reasons(`Hash`): `Option<Bytes>`
- **interface**: `api.query.palletTreasury.reasons`
- **summary**:   Simple preimage lookup from the reason's hash to the original data. Again, has an insecure enumerable hash since the key is guaranteed to be the result of a secure hash. 
 
### tips(`Hash`): `Option<OpenTip>`
- **interface**: `api.query.palletTreasury.tips`
- **summary**:   Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value. This has the insecure enumerable hash function since the key itself is already guaranteed to be a secure hash. 

___


## polkadotBridge
 
### available(): `Balance`
- **interface**: `api.query.polkadotBridge.available`
 
### bonded(): `Balance`
- **interface**: `api.query.polkadotBridge.bonded`
 
### currentEra(): `EraIndex`
- **interface**: `api.query.polkadotBridge.currentEra`
 
### eraStartBlockNumber(): `BlockNumber`
- **interface**: `api.query.polkadotBridge.eraStartBlockNumber`
 
### forcedEra(): `Option<BlockNumber>`
- **interface**: `api.query.polkadotBridge.forcedEra`
 
### mockRewardRate(): `Option<Rate>`
- **interface**: `api.query.polkadotBridge.mockRewardRate`
 
### unbonding(): `Vec<(Balance,EraIndex)>`
- **interface**: `api.query.polkadotBridge.unbonding`

___


## prices
 
### lockedPrice(`CurrencyId`): `Option<Price>`
- **interface**: `api.query.prices.lockedPrice`
- **summary**:   Mapping from currency id to it's locked price 

___


## randomnessCollectiveFlip
 
### randomMaterial(): `Vec<Hash>`
- **interface**: `api.query.randomnessCollectiveFlip.randomMaterial`
- **summary**:   Series of block headers from the last 81 blocks that acts as random seed material. This is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of the oldest hash. 

___


## recovery
 
### activeRecoveries(`AccountId, AccountId`): `Option<ActiveRecovery>`
- **interface**: `api.query.recovery.activeRecoveries`
- **summary**:   Active recovery attempts. 

  First account is the account to be recovered, and the second account is the user trying to recover the account. 
 
### proxy(`AccountId`): `Option<AccountId>`
- **interface**: `api.query.recovery.proxy`
- **summary**:   The list of allowed proxy accounts. 

  Map from the user who can access it to the recovered account. 
 
### recoverable(`AccountId`): `Option<RecoveryConfig>`
- **interface**: `api.query.recovery.recoverable`
- **summary**:   The set of recoverable accounts and their recovery configuration. 

___


## renVmBridge
 
### signatures(`EcdsaSignature`): `Option<()>`
- **interface**: `api.query.renVmBridge.signatures`
- **summary**:   Signature blacklist. This is required to prevent double claim. 

___


## scheduleUpdate
 
### delayedNormalDispatches(`BlockNumber, DispatchId`): `Option<(Option<AccountId>,CallOf,DispatchId)>`
- **interface**: `api.query.scheduleUpdate.delayedNormalDispatches`
 
### delayedOperationalDispatches(`BlockNumber, DispatchId`): `Option<(Option<AccountId>,CallOf,DispatchId)>`
- **interface**: `api.query.scheduleUpdate.delayedOperationalDispatches`
 
### nextId(): `DispatchId`
- **interface**: `api.query.scheduleUpdate.nextId`

___


## session
 
### currentIndex(): `SessionIndex`
- **interface**: `api.query.session.currentIndex`
- **summary**:   Current index of the session. 
 
### disabledValidators(): `Vec<u32>`
- **interface**: `api.query.session.disabledValidators`
- **summary**:   Indices of disabled validators. 

  The set is cleared when `on_session_ending` returns a new set of identities. 
 
### keyOwner(`(KeyTypeId,Bytes)`): `Option<ValidatorId>`
- **interface**: `api.query.session.keyOwner`
- **summary**:   The owner of a key. The key is the `KeyTypeId` + the encoded key. 
 
### nextKeys(`ValidatorId`): `Option<Keys>`
- **interface**: `api.query.session.nextKeys`
- **summary**:   The next session keys for a validator. 
 
### queuedChanged(): `bool`
- **interface**: `api.query.session.queuedChanged`
- **summary**:   True if the underlying economic identities or weighting behind the validators has changed in the queued validator set. 
 
### queuedKeys(): `Vec<(ValidatorId,Keys)>`
- **interface**: `api.query.session.queuedKeys`
- **summary**:   The queued keys for the next session. When the next session begins, these keys will be used to determine the validator's session keys. 
 
### validators(): `Vec<ValidatorId>`
- **interface**: `api.query.session.validators`
- **summary**:   The current set of validators. 

___


## staking
 
### activeEra(): `Option<ActiveEraInfo>`
- **interface**: `api.query.staking.activeEra`
- **summary**:   The active era information, it holds index and start. 

  The active era is the era currently rewarded. Validator set of this era must be equal to `SessionInterface::validators`. 
 
### bonded(`AccountId`): `Option<AccountId>`
- **interface**: `api.query.staking.bonded`
- **summary**:   Map from all locked "stash" accounts to the controller account. 
 
### bondedEras(): `Vec<(EraIndex,SessionIndex)>`
- **interface**: `api.query.staking.bondedEras`
- **summary**:   A mapping from still-bonded eras to the first session index of that era. 

  Must contains information for eras for the range: `[active_era - bounding_duration; active_era]` 
 
### canceledSlashPayout(): `BalanceOf`
- **interface**: `api.query.staking.canceledSlashPayout`
- **summary**:   The amount of currency given to reporters of a slash event which was canceled by extraordinary circumstances (e.g. governance). 
 
### currentEra(): `Option<EraIndex>`
- **interface**: `api.query.staking.currentEra`
- **summary**:   The current era index. 

  This is the latest planned era, depending on how the Session pallet queues the validator set, it might be active or not. 
 
### earliestUnappliedSlash(): `Option<EraIndex>`
- **interface**: `api.query.staking.earliestUnappliedSlash`
- **summary**:   The earliest era for which we have a pending, unapplied slash. 
 
### eraElectionStatus(): `ElectionStatus`
- **interface**: `api.query.staking.eraElectionStatus`
- **summary**:   Flag to control the execution of the offchain election. When `Open(_)`, we accept solutions to be submitted. 
 
### erasRewardPoints(`EraIndex`): `EraRewardPoints`
- **interface**: `api.query.staking.erasRewardPoints`
- **summary**:   Rewards for the last `HISTORY_DEPTH` eras. If reward hasn't been set or has been removed then 0 reward is returned. 
 
### erasStakers(`EraIndex, AccountId`): `Exposure`
- **interface**: `api.query.staking.erasStakers`
- **summary**:   Exposure of validator at era. 

  This is keyed first by the era index to allow bulk deletion and then the stash account. 

  Is it removed after `HISTORY_DEPTH` eras. If stakers hasn't been set or has been removed then empty exposure is returned. 
 
### erasStakersClipped(`EraIndex, AccountId`): `Exposure`
- **interface**: `api.query.staking.erasStakersClipped`
- **summary**:   Clipped Exposure of validator at era. 

  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the `T::MaxNominatorRewardedPerValidator` biggest stakers. (Note: the field `total` and `own` of the exposure remains unchanged). This is used to limit the i/o cost for the nominator payout. 

  This is keyed fist by the era index to allow bulk deletion and then the stash account. 

  Is it removed after `HISTORY_DEPTH` eras. If stakers hasn't been set or has been removed then empty exposure is returned. 
 
### erasStartSessionIndex(`EraIndex`): `Option<SessionIndex>`
- **interface**: `api.query.staking.erasStartSessionIndex`
- **summary**:   The session index at which the era start for the last `HISTORY_DEPTH` eras. 
 
### erasTotalStake(`EraIndex`): `BalanceOf`
- **interface**: `api.query.staking.erasTotalStake`
- **summary**:   The total amount staked for the last `HISTORY_DEPTH` eras. If total hasn't been set or has been removed then 0 stake is returned. 
 
### erasValidatorPrefs(`EraIndex, AccountId`): `ValidatorPrefs`
- **interface**: `api.query.staking.erasValidatorPrefs`
- **summary**:   Similar to `ErasStakers`, this holds the preferences of validators. 

  This is keyed first by the era index to allow bulk deletion and then the stash account. 

  Is it removed after `HISTORY_DEPTH` eras. 
 
### erasValidatorReward(`EraIndex`): `Option<BalanceOf>`
- **interface**: `api.query.staking.erasValidatorReward`
- **summary**:   The total validator era payout for the last `HISTORY_DEPTH` eras. 

  Eras that haven't finished yet or has been removed doesn't have reward. 
 
### forceEra(): `Forcing`
- **interface**: `api.query.staking.forceEra`
- **summary**:   Mode of era forcing. 
 
### historyDepth(): `u32`
- **interface**: `api.query.staking.historyDepth`
- **summary**:   Number of eras to keep in history. 

  Information is kept for eras in `[current_era - history_depth; current_era]`. 

  Must be more than the number of eras delayed by session otherwise. I.e. active era must always be in history. I.e. `active_era > current_era - history_depth` must be guaranteed. 
 
### invulnerables(): `Vec<AccountId>`
- **interface**: `api.query.staking.invulnerables`
- **summary**:   Any validators that may never be slashed or forcibly kicked. It's a Vec since they're easy to initialize and the performance hit is minimal (we expect no more than four invulnerables) and restricted to testnets. 
 
### isCurrentSessionFinal(): `bool`
- **interface**: `api.query.staking.isCurrentSessionFinal`
- **summary**:   True if the current **planned** session is final. Note that this does not take era forcing into account. 
 
### ledger(`AccountId`): `Option<StakingLedger>`
- **interface**: `api.query.staking.ledger`
- **summary**:   Map from all (unlocked) "controller" accounts to the info regarding the staking. 
 
### minimumValidatorCount(): `u32`
- **interface**: `api.query.staking.minimumValidatorCount`
- **summary**:   Minimum number of staking participants before emergency conditions are imposed. 
 
### nominators(`AccountId`): `Option<Nominations>`
- **interface**: `api.query.staking.nominators`
- **summary**:   The map from nominator stash key to the set of stash keys of all validators to nominate. 
 
### nominatorSlashInEra(`EraIndex, AccountId`): `Option<BalanceOf>`
- **interface**: `api.query.staking.nominatorSlashInEra`
- **summary**:   All slashing events on nominators, mapped by era to the highest slash value of the era. 
 
### payee(`AccountId`): `RewardDestination`
- **interface**: `api.query.staking.payee`
- **summary**:   Where the reward payment should be made. Keyed by stash. 
 
### queuedElected(): `Option<ElectionResult>`
- **interface**: `api.query.staking.queuedElected`
- **summary**:   The next validator set. At the end of an era, if this is available (potentially from the result of an offchain worker), it is immediately used. Otherwise, the on-chain election is executed. 
 
### queuedScore(): `Option<ElectionScore>`
- **interface**: `api.query.staking.queuedScore`
- **summary**:   The score of the current [`QueuedElected`]. 
 
### slashingSpans(`AccountId`): `Option<SlashingSpans>`
- **interface**: `api.query.staking.slashingSpans`
- **summary**:   Slashing spans for stash accounts. 
 
### slashRewardFraction(): `Perbill`
- **interface**: `api.query.staking.slashRewardFraction`
- **summary**:   The percentage of the slash that is distributed to reporters. 

  The rest of the slashed value is handled by the `Slash`. 
 
### snapshotNominators(): `Option<Vec<AccountId>>`
- **interface**: `api.query.staking.snapshotNominators`
- **summary**:   Snapshot of nominators at the beginning of the current election window. This should only have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`. 
 
### snapshotValidators(): `Option<Vec<AccountId>>`
- **interface**: `api.query.staking.snapshotValidators`
- **summary**:   Snapshot of validators at the beginning of the current election window. This should only have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`. 
 
### spanSlash(`(AccountId,SpanIndex)`): `SpanRecord`
- **interface**: `api.query.staking.spanSlash`
- **summary**:   Records information about the maximum slash of a stash within a slashing span, as well as how much reward has been paid out. 
 
### storageVersion(): `Releases`
- **interface**: `api.query.staking.storageVersion`
- **summary**:   True if network has been upgraded to this version. Storage version of the pallet. 

  This is set to v3.0.0 for new networks. 
 
### unappliedSlashes(`EraIndex`): `Vec<UnappliedSlash>`
- **interface**: `api.query.staking.unappliedSlashes`
- **summary**:   All unapplied slashes that are queued for later. 
 
### validatorCount(): `u32`
- **interface**: `api.query.staking.validatorCount`
- **summary**:   The ideal number of staking participants. 
 
### validators(`AccountId`): `ValidatorPrefs`
- **interface**: `api.query.staking.validators`
- **summary**:   The map from (wannabe) validator stash key to the preferences of that validator. 
 
### validatorSlashInEra(`EraIndex, AccountId`): `Option<(Perbill,BalanceOf)>`
- **interface**: `api.query.staking.validatorSlashInEra`
- **summary**:   All slashing events on validators, mapped by era to the highest slash proportion and slash value of the era. 

___


## stakingPool
 
### claimedUnbond(`AccountId, EraIndex`): `Balance`
- **interface**: `api.query.stakingPool.claimedUnbond`
 
### currentEra(): `EraIndex`
- **interface**: `api.query.stakingPool.currentEra`
 
### freeUnbonded(): `Balance`
- **interface**: `api.query.stakingPool.freeUnbonded`
 
### nextEraUnbond(): `(Balance,Balance)`
- **interface**: `api.query.stakingPool.nextEraUnbond`
 
### totalBonded(): `Balance`
- **interface**: `api.query.stakingPool.totalBonded`
 
### totalClaimedUnbonded(): `Balance`
- **interface**: `api.query.stakingPool.totalClaimedUnbonded`
 
### unbonding(`EraIndex`): `(Balance,Balance)`
- **interface**: `api.query.stakingPool.unbonding`
 
### unbondingToFree(): `Balance`
- **interface**: `api.query.stakingPool.unbondingToFree`

___


## sudo
 
### key(): `AccountId`
- **interface**: `api.query.sudo.key`
- **summary**:   The `AccountId` of the sudo key. 

___


## system
 
### account(`AccountId`): `AccountInfo`
- **interface**: `api.query.system.account`
- **summary**:   The full account information for a particular account ID. 
 
### allExtrinsicsLen(): `Option<u32>`
- **interface**: `api.query.system.allExtrinsicsLen`
- **summary**:   Total length (in bytes) for all extrinsics put together, for the current block. 
 
### blockHash(`BlockNumber`): `Hash`
- **interface**: `api.query.system.blockHash`
- **summary**:   Map of block numbers to block hashes. 
 
### blockWeight(): `ExtrinsicsWeight`
- **interface**: `api.query.system.blockWeight`
- **summary**:   The current weight for the block. 
 
### digest(): `DigestOf`
- **interface**: `api.query.system.digest`
- **summary**:   Digest of the current block, also part of the block header. 
 
### eventCount(): `EventIndex`
- **interface**: `api.query.system.eventCount`
- **summary**:   The number of events in the `Events<T>` list. 
 
### events(): `Vec<EventRecord>`
- **interface**: `api.query.system.events`
- **summary**:   Events deposited for the current block. 
 
### eventTopics(`Hash`): `Vec<(BlockNumber,EventIndex)>`
- **interface**: `api.query.system.eventTopics`
- **summary**:   Mapping between a topic (represented by T::Hash) and a vector of indexes of events in the `<Events<T>>` list. 

  All topic vectors have deterministic storage locations depending on the topic. This allows light-clients to leverage the changes trie storage tracking mechanism and in case of changes fetch the list of events of interest. 

  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just the `EventIndex` then in case if the topic has the same contents on the next block no notification will be triggered thus the event might be lost. 
 
### executionPhase(): `Option<Phase>`
- **interface**: `api.query.system.executionPhase`
- **summary**:   The execution phase of the block. 
 
### extrinsicCount(): `Option<u32>`
- **interface**: `api.query.system.extrinsicCount`
- **summary**:   Total extrinsics count for the current block. 
 
### extrinsicData(`u32`): `Bytes`
- **interface**: `api.query.system.extrinsicData`
- **summary**:   Extrinsics data for the current block (maps an extrinsic's index to its data). 
 
### extrinsicsRoot(): `Hash`
- **interface**: `api.query.system.extrinsicsRoot`
- **summary**:   Extrinsics root of the current block, also part of the block header. 
 
### lastRuntimeUpgrade(): `Option<LastRuntimeUpgradeInfo>`
- **interface**: `api.query.system.lastRuntimeUpgrade`
- **summary**:   Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened. 
 
### number(): `BlockNumber`
- **interface**: `api.query.system.number`
- **summary**:   The current block number being processed. Set by `execute_block`. 
 
### parentHash(): `Hash`
- **interface**: `api.query.system.parentHash`
- **summary**:   Hash of the previous block. 

___


## technicalCouncil
 
### members(): `Vec<AccountId>`
- **interface**: `api.query.technicalCouncil.members`
- **summary**:   The current members of the collective. This is stored sorted (just by value). 
 
### prime(): `Option<AccountId>`
- **interface**: `api.query.technicalCouncil.prime`
- **summary**:   The member who provides the default vote for any other members that do not vote before the timeout. If None, then no member has that privilege. 
 
### proposalCount(): `u32`
- **interface**: `api.query.technicalCouncil.proposalCount`
- **summary**:   Proposals so far. 
 
### proposalOf(`Hash`): `Option<Proposal>`
- **interface**: `api.query.technicalCouncil.proposalOf`
- **summary**:   Actual proposal for a given hash, if it's current. 
 
### proposals(): `Vec<Hash>`
- **interface**: `api.query.technicalCouncil.proposals`
- **summary**:   The hashes of the active proposals. 
 
### voting(`Hash`): `Option<Votes>`
- **interface**: `api.query.technicalCouncil.voting`
- **summary**:   Votes on a given proposal, if it is ongoing. 

___


## technicalCouncilMembership
 
### members(): `Vec<AccountId>`
- **interface**: `api.query.technicalCouncilMembership.members`
- **summary**:   The current membership, stored as an ordered Vec. 
 
### prime(): `Option<AccountId>`
- **interface**: `api.query.technicalCouncilMembership.prime`
- **summary**:   The current prime member, if one exists. 

___


## timestamp
 
### didUpdate(): `bool`
- **interface**: `api.query.timestamp.didUpdate`
- **summary**:   Did the timestamp get updated in this block? 
 
### now(): `Moment`
- **interface**: `api.query.timestamp.now`
- **summary**:   Current time for the current block. 

___


## tokens
 
### accounts(`AccountId, CurrencyId`): `AccountData`
- **interface**: `api.query.tokens.accounts`
- **summary**:   The balance of a token type under an account. 

  NOTE: If the total is ever zero, decrease account ref account. 

  NOTE: This is only used in the case that this module is used to store balances. 
 
### locks(`AccountId, CurrencyId`): `Vec<BalanceLock>`
- **interface**: `api.query.tokens.locks`
- **summary**:   Any liquidity locks of a token type under an account. NOTE: Should only be accessed when setting, changing and freeing a lock. 
 
### totalIssuance(`CurrencyId`): `Balance`
- **interface**: `api.query.tokens.totalIssuance`
- **summary**:   The total issuance of a token type. 

___


## transactionPayment
 
### nextFeeMultiplier(): `Multiplier`
- **interface**: `api.query.transactionPayment.nextFeeMultiplier`
 
### storageVersion(): `Releases`
- **interface**: `api.query.transactionPayment.storageVersion`

___


## vesting
 
### vestingSchedules(`AccountId`): `Vec<VestingScheduleOf>`
- **interface**: `api.query.vesting.vestingSchedules`
- **summary**:   Vesting schedules of an account. 

___


## substrate

_These are keys that are always available to the runtime implementation_
 
### changesTrieConfig(): `u32`
- **summary**: Changes trie configuration is stored under this key.
 
### childStorageKeyPrefix(): `u32`
- **summary**: Prefix of child storage keys.
 
### code(): `Bytes`
- **summary**: Wasm code of the runtime.
 
### extrinsicIndex(): `u32`
- **summary**: Current extrinsic index (u32) is stored under this key.
 
### heapPages(): `u64`
- **summary**: Number of wasm linear memory pages required for execution of the runtime.
