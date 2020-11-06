---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[airDrop](#airdrop)**

- **[auction](#auction)**

- **[auctionManager](#auctionmanager)**

- **[balances](#balances)**

- **[cdpEngine](#cdpengine)**

- **[cdpTreasury](#cdptreasury)**

- **[currencies](#currencies)**

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

- **[operatorMembership](#operatormembership)**

- **[oracle](#oracle)**

- **[palletTreasury](#pallettreasury)**

- **[polkadotBridge](#polkadotbridge)**

- **[prices](#prices)**

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

- **[tokens](#tokens)**

- **[utility](#utility)**

- **[vesting](#vesting)**


___


## airDrop
 
### Airdrop(`AccountId`, `AirDropCurrencyId`, `Balance`)
 
### UpdateAirdrop(`AccountId`, `AirDropCurrencyId`, `Balance`)

___


## auction
 
### Bid(`AuctionId`, `AccountId`, `Balance`)
- **summary**:   A bid is placed (auction_id, bidder, bidding_amount) 

___


## auctionManager
 
### CancelAuction(`AuctionId`)
- **summary**:   Cancel a specific active auction (auction_id) 
 
### CollateralAuctionDealed(`AuctionId`, `CurrencyId`, `Balance`, `AccountId`, `Balance`)
- **summary**:   Collateral auction dealed (auction_id, collateral_type, collateral_amount, winner, payment_amount). 
 
### DebitAuctionDealed(`AuctionId`, `Balance`, `AccountId`, `Balance`)
- **summary**:   Debit auction dealed (auction_id, debit_currency_amount, winner, payment_amount). 
 
### DEXTakeCollateralAuction(`AuctionId`, `CurrencyId`, `Balance`, `Balance`)
- **summary**:   Dex take collateral auction (auction_id, collateral_type, collateral_amount, turnover, refund) 
 
### NewCollateralAuction(`AuctionId`, `CurrencyId`, `Balance`, `Balance`)
- **summary**:   Create a collateral auction (auction_id, collateral_type, collateral_amount, target_bid_price) 
 
### NewDebitAuction(`AuctionId`, `Balance`, `Balance`)
- **summary**:   Create a debit auction (auction_id, initial_supply_amount, fix_payment_amount) 
 
### NewSurplusAuction(`AuctionId`, `Balance`)
- **summary**:   Create a surplus auction (auction_id, fix_surplus_amount) 
 
### SurplusAuctionDealed(`AuctionId`, `Balance`, `AccountId`, `Balance`)
- **summary**:   Surplus auction dealed (auction_id, surplus_amount, winner, payment_amount). 

___


## balances
 
### BalanceSet(`AccountId`, `Balance`, `Balance`)
- **summary**:   A balance was set by root (who, free, reserved). 
 
### Deposit(`AccountId`, `Balance`)
- **summary**:   Some amount was deposited (e.g. for transaction fees). 
 
### DustLost(`AccountId`, `Balance`)
- **summary**:   An account was removed whose balance was non-zero but below ExistentialDeposit, resulting in an outright loss. 
 
### Endowed(`AccountId`, `Balance`)
- **summary**:   An account was created with some free balance. 
 
### Reserved(`AccountId`, `Balance`)
- **summary**:   Some balance was reserved (moved from free to reserved). 
 
### ReserveRepatriated(`AccountId`, `AccountId`, `Balance`, `BalanceStatus`)
- **summary**:   Some balance was moved from the reserve of the first account to the second account. Final argument indicates the destination balance type. 
 
### Transfer(`AccountId`, `AccountId`, `Balance`)
- **summary**:   Transfer succeeded (from, to, value). 
 
### Unreserved(`AccountId`, `Balance`)
- **summary**:   Some balance was unreserved (moved from reserved to free). 

___


## cdpEngine
 
### GlobalStabilityFeeUpdated(`Rate`)
- **summary**:   The global stability fee for all types of collateral updated (new_global_stability_fee) 
 
### LiquidateUnsafeCDP(`CurrencyId`, `AccountId`, `Balance`, `Balance`, `LiquidationStrategy`)
- **summary**:   Liquidate the unsafe CDP (collateral_type, owner, collateral_amount, bad_debt_value, liquidation_strategy) 
 
### LiquidationPenaltyUpdated(`CurrencyId`, `Option<Rate>`)
- **summary**:   The liquidation penalty rate for specific collateral type updated (collateral_type, new_liquidation_panelty) 
 
### LiquidationRatioUpdated(`CurrencyId`, `Option<Ratio>`)
- **summary**:   The liquidation fee for specific collateral type updated (collateral_type, new_liquidation_ratio) 
 
### MaximumTotalDebitValueUpdated(`CurrencyId`, `Balance`)
- **summary**:   The hard cap of total debit value for specific collateral type updated (collateral_type, new_total_debit_value) 
 
### RequiredCollateralRatioUpdated(`CurrencyId`, `Option<Ratio>`)
- **summary**:   The required collateral penalty rate for specific collateral type updated (collateral_type, new_required_collateral_ratio) 
 
### SettleCDPInDebit(`CurrencyId`, `AccountId`)
- **summary**:   Settle the CDP has debit (collateral_type, owner) 
 
### StabilityFeeUpdated(`CurrencyId`, `Option<Rate>`)
- **summary**:   The stability fee for specific collateral type updated (collateral_type, new_stability_fee) 

___


## cdpTreasury
 
### CollateralAuctionMaximumSizeUpdated(`CurrencyId`, `Balance`)
- **summary**:   The fixed size for collateral auction under specific collateral type updated (collateral_type, new_size) 
 
### DebitAuctionFixedSizeUpdated(`Balance`)
- **summary**:   The fixed size for debit auction updated (new_size) 
 
### InitialAmountPerDebitAuctionUpdated(`Balance`)
- **summary**:   The initial supply amount of a debit auction updated (new_amount) 
 
### SurplusAuctionFixedSizeUpdated(`Balance`)
- **summary**:   The fixed size for surplus auction updated (new_size) 
 
### SurplusBufferSizeUpdated(`Balance`)
- **summary**:   The buffer size of surplus pool updated (new_size) 

___


## currencies
 
### BalanceUpdated(`CurrencyId`, `AccountId`, `Amount`)
- **summary**:   Update balance success (currency_id, who, amount) 
 
### Deposited(`CurrencyId`, `AccountId`, `Balance`)
- **summary**:   Deposit success (currency_id, who, amount) 
 
### Transferred(`CurrencyId`, `AccountId`, `AccountId`, `Balance`)
- **summary**:   Currency transfer success (currency_id, from, to, amount) 
 
### Withdrawn(`CurrencyId`, `AccountId`, `Balance`)
- **summary**:   Withdraw success (currency_id, who, amount) 

___


## dex
 
### AddLiquidity(`AccountId`, `CurrencyId`, `Balance`, `Balance`, `Share`)
- **summary**:   Add liquidity success (who, currency_type, added_currency_amount, added_base_currency_amount, increment_share_amount) 
 
### LiquidityIncentiveRateUpdated(`CurrencyId`, `Rate`)
- **summary**:   Incentive reward rate updated (currency_type, new_rate) 
 
### Swap(`AccountId`, `CurrencyId`, `Balance`, `CurrencyId`, `Balance`)
- **summary**:   Use supply currency to swap target currency (trader, supply_currency_type, supply_currency_amount, target_currency_type, target_currency_amount) 
 
### WithdrawLiquidity(`AccountId`, `CurrencyId`, `Balance`, `Balance`, `Share`)
- **summary**:   Withdraw liquidity from the trading pool success (who, currency_type, withdrawn_currency_amount, withdrawn_base_currency_amount, burned_share_amount) 

___


## emergencyShutdown
 
### OpenRefund(`BlockNumber`)
- **summary**:   The final redemption opened (block_number) 
 
### Refund(`AccountId`, `Balance`, `Vec<(CurrencyId,Balance)>`)
- **summary**:   Refund info (caller, stable_coin_amount, refund_list) 
 
### Shutdown(`BlockNumber`)
- **summary**:   Emergency shutdown occurs (block_number) 

___


## generalCouncil
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). 

___


## generalCouncilMembership
 
### Dummy(`PhantomData`)
- **summary**:   Phantom member, never used. 
 
### KeyChanged()
- **summary**:   One of the members' keys changed. 
 
### MemberAdded()
- **summary**:   The given member was added; see the transaction for who. 
 
### MemberRemoved()
- **summary**:   The given member was removed; see the transaction for who. 
 
### MembersReset()
- **summary**:   The membership was reset; see the transaction for who the new set is. 
 
### MembersSwapped()
- **summary**:   Two members were swapped; see the transaction for who. 

___


## graduallyUpdate
 
### GraduallyUpdateAdded(`StorageKey`, `StorageValue`, `StorageValue`)
- **summary**:   Gradually update added (key, per_block, target_value) 
 
### GraduallyUpdateCancelled(`StorageKey`)
- **summary**:   Gradually update cancelled (key) 
 
### Updated(`BlockNumber`, `StorageKey`, `StorageValue`)
- **summary**:   Gradually update applied (block_number, key, target_value) 

___


## grandpa
 
### NewAuthorities(`AuthorityList`)
- **summary**:   New authority set has been applied. 
 
### Paused()
- **summary**:   Current authority set has been paused. 
 
### Resumed()
- **summary**:   Current authority set has been resumed. 

___


## homaCouncil
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). 

___


## homaCouncilMembership
 
### Dummy(`PhantomData`)
- **summary**:   Phantom member, never used. 
 
### KeyChanged()
- **summary**:   One of the members' keys changed. 
 
### MemberAdded()
- **summary**:   The given member was added; see the transaction for who. 
 
### MemberRemoved()
- **summary**:   The given member was removed; see the transaction for who. 
 
### MembersReset()
- **summary**:   The membership was reset; see the transaction for who the new set is. 
 
### MembersSwapped()
- **summary**:   Two members were swapped; see the transaction for who. 

___


## honzon
 
### Authorization(`AccountId`, `AccountId`, `CurrencyId`)
- **summary**:   Authorize someone to operate the loan of specific collateral (authorizer, authorizee, collateral_type) 
 
### UnAuthorization(`AccountId`, `AccountId`, `CurrencyId`)
- **summary**:   Cancel the authorization of specific collateral for someone  (authorizer, authorizee, collateral_type) 
 
### UnAuthorizationAll(`AccountId`)
- **summary**:   Cancel all authorization (authorizer) 

___


## honzonCouncil
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). 

___


## honzonCouncilMembership
 
### Dummy(`PhantomData`)
- **summary**:   Phantom member, never used. 
 
### KeyChanged()
- **summary**:   One of the members' keys changed. 
 
### MemberAdded()
- **summary**:   The given member was added; see the transaction for who. 
 
### MemberRemoved()
- **summary**:   The given member was removed; see the transaction for who. 
 
### MembersReset()
- **summary**:   The membership was reset; see the transaction for who the new set is. 
 
### MembersSwapped()
- **summary**:   Two members were swapped; see the transaction for who. 

___


## indices
 
### IndexAssigned(`AccountId`, `AccountIndex`)
- **summary**:   A account index was assigned. 
 
### IndexFreed(`AccountIndex`)
- **summary**:   A account index has been freed up (unassigned). 
 
### IndexFrozen(`AccountIndex`, `AccountId`)
- **summary**:   A account index has been frozen to its current account ID. 

___


## loans
 
### ConfiscateCollateralAndDebit(`AccountId`, `CurrencyId`, `Balance`, `DebitBalance`)
- **summary**:   Confiscate CDP's collateral assets and eliminate its debit (owner, collateral_type, confiscated_collateral_amount, deduct_debit_amount) 
 
### PositionUpdated(`AccountId`, `CurrencyId`, `Amount`, `DebitAmount`)
- **summary**:   Position updated (owner, collateral_type, collateral_adjustment, debit_adjustment) 
 
### TransferLoan(`AccountId`, `AccountId`, `CurrencyId`)
- **summary**:   Transfer loan (from, to) 

___


## multisig
 
### MultisigApproval(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **summary**:   A multisig operation has been approved by someone. First param is the account that is approving, third is the multisig account, fourth is hash of the call. 
 
### MultisigCancelled(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **summary**:   A multisig operation has been cancelled. First param is the account that is cancelling, third is the multisig account, fourth is hash of the call. 
 
### MultisigExecuted(`AccountId`, `Timepoint`, `AccountId`, `CallHash`, `DispatchResult`)
- **summary**:   A multisig operation has been executed. First param is the account that is approving, third is the multisig account, fourth is hash of the call to be executed. 
 
### NewMultisig(`AccountId`, `AccountId`, `CallHash`)
- **summary**:   A new multisig operation has begun. First param is the account that is approving, second is the multisig account, third is hash of the call. 

___


## operatorMembership
 
### Dummy(`PhantomData`)
- **summary**:   Phantom member, never used. 
 
### KeyChanged()
- **summary**:   One of the members' keys changed. 
 
### MemberAdded()
- **summary**:   The given member was added; see the transaction for who. 
 
### MemberRemoved()
- **summary**:   The given member was removed; see the transaction for who. 
 
### MembersReset()
- **summary**:   The membership was reset; see the transaction for who the new set is. 
 
### MembersSwapped()
- **summary**:   Two members were swapped; see the transaction for who. 

___


## oracle
 
### NewFeedData(`AccountId`, `Vec<(OracleKey,OracleValue)>`)
- **summary**:   New feed data is submitted (sender, values) 

___


## palletTreasury
 
### Awarded(`ProposalIndex`, `Balance`, `AccountId`)
- **summary**:   Some funds have been allocated. 
 
### Burnt(`Balance`)
- **summary**:   Some of our funds have been burnt. 
 
### Deposit(`Balance`)
- **summary**:   Some funds have been deposited. 
 
### NewTip(`Hash`)
- **summary**:   A new tip suggestion has been opened. 
 
### Proposed(`ProposalIndex`)
- **summary**:   New proposal. 
 
### Rejected(`ProposalIndex`, `Balance`)
- **summary**:   A proposal was rejected; funds were slashed. 
 
### Rollover(`Balance`)
- **summary**:   Spending has finished; this is the amount that rolls over until next spend. 
 
### Spending(`Balance`)
- **summary**:   We have ended a spend period and will now allocate funds. 
 
### TipClosed(`Hash`, `AccountId`, `Balance`)
- **summary**:   A tip suggestion has been closed. 
 
### TipClosing(`Hash`)
- **summary**:   A tip suggestion has reached threshold and is closing. 
 
### TipRetracted(`Hash`)
- **summary**:   A tip suggestion has been retracted. 

___


## polkadotBridge
 
### Mint(`AccountId`, `Balance`)

___


## prices
 
### LockPrice(`CurrencyId`, `Price`)
- **summary**:   Lock price (currency_id, locked_price) 
 
### UnlockPrice(`CurrencyId`)
- **summary**:   Unlock price (currency_id) 

___


## recovery
 
### AccountRecovered(`AccountId`, `AccountId`)
- **summary**:   Account_1 has been successfully recovered by account_2 
 
### RecoveryClosed(`AccountId`, `AccountId`)
- **summary**:   A recovery process for account_1 by account_2 has been closed 
 
### RecoveryCreated(`AccountId`)
- **summary**:   A recovery process has been set up for an account 
 
### RecoveryInitiated(`AccountId`, `AccountId`)
- **summary**:   A recovery process has been initiated for account_1 by account_2 
 
### RecoveryRemoved(`AccountId`)
- **summary**:   A recovery process has been removed for an account 
 
### RecoveryVouched(`AccountId`, `AccountId`, `AccountId`)
- **summary**:   A recovery process for account_1 by account_2 has been vouched for by account_3 

___


## renVmBridge
 
### Burnt(`AccountId`, `DestAddress`, `Balance`)
- **summary**:   Asset burnt in this chain (owner, dest, amount) 
 
### Minted(`AccountId`, `Balance`)
- **summary**:   Asset minted (owner, amount) 

___


## scheduleUpdate
 
### CancelDelayedDispatch(`DispatchId`)
- **summary**:   Cancel delayed dispatch success (DispatchId) 
 
### ScheduleDispatch(`BlockNumber`, `DispatchId`)
- **summary**:   Add schedule dispatch success (BlockNumber, DispatchId) 
 
### ScheduleDispatchFail(`DispatchId`, `DispatchError`)
- **summary**:   Schedule dispatch failed (DispatchId, DispatchError) 
 
### ScheduleDispatchSuccess(`BlockNumber`, `DispatchId`)
- **summary**:   Schedule dispatch success (BlockNumber, DispatchId) 

___


## session
 
### NewSession(`SessionIndex`)
- **summary**:   New session has happened. Note that the argument is the session index, not the block number as the type might suggest. 

___


## staking
 
### Bonded(`AccountId`, `Balance`)
- **summary**:   An account has bonded this amount. 

  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably, it will not be emitted for staking rewards when they are added to stake. 
 
### EraPayout(`EraIndex`, `Balance`, `Balance`)
- **summary**:   The era payout has been set; the first balance is the validator-payout; the second is the remainder from the maximum amount of reward. 
 
### OldSlashingReportDiscarded(`SessionIndex`)
- **summary**:   An old slashing report from a prior era was discarded because it could not be processed. 
 
### Reward(`AccountId`, `Balance`)
- **summary**:   The staker has been rewarded by this amount. `AccountId` is the stash account. 
 
### Slash(`AccountId`, `Balance`)
- **summary**:   One validator (and its nominators) has been slashed by the given amount. 
 
### SolutionStored(`ElectionCompute`)
- **summary**:   A new solution for the upcoming election has been stored. 
 
### StakingElection(`ElectionCompute`)
- **summary**:   A new set of stakers was elected with the given computation method. 
 
### Unbonded(`AccountId`, `Balance`)
- **summary**:   An account has unbonded this amount. 
 
### Withdrawn(`AccountId`, `Balance`)
- **summary**:   An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance` from the unlocking queue. 

___


## stakingPool
 
### BondAndMint(`AccountId`, `Balance`, `Balance`)
 
### RedeemByClaimUnbonding(`AccountId`, `EraIndex`, `Balance`, `Balance`, `Balance`)
 
### RedeemByFreeUnbonded(`AccountId`, `Balance`, `Balance`, `Balance`)
 
### RedeemByUnbond(`AccountId`, `Balance`)

___


## sudo
 
### KeyChanged(`AccountId`)
- **summary**:   The sudoer just switched identity; the old key is supplied. 
 
### Sudid(`DispatchResult`)
- **summary**:   A sudo just took place. 
 
### SudoAsDone(`bool`)
- **summary**:   A sudo just took place. 

___


## system
 
### CodeUpdated()
- **summary**:   `:code` was updated. 
 
### ExtrinsicFailed(`DispatchError`, `DispatchInfo`)
- **summary**:   An extrinsic failed. 
 
### ExtrinsicSuccess(`DispatchInfo`)
- **summary**:   An extrinsic completed successfully. 
 
### KilledAccount(`AccountId`)
- **summary**:   An account was reaped. 
 
### NewAccount(`AccountId`)
- **summary**:   A new account was created. 

___


## technicalCouncil
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). 

___


## technicalCouncilMembership
 
### Dummy(`PhantomData`)
- **summary**:   Phantom member, never used. 
 
### KeyChanged()
- **summary**:   One of the members' keys changed. 
 
### MemberAdded()
- **summary**:   The given member was added; see the transaction for who. 
 
### MemberRemoved()
- **summary**:   The given member was removed; see the transaction for who. 
 
### MembersReset()
- **summary**:   The membership was reset; see the transaction for who the new set is. 
 
### MembersSwapped()
- **summary**:   Two members were swapped; see the transaction for who. 

___


## tokens
 
### Transferred(`CurrencyId`, `AccountId`, `AccountId`, `Balance`)
- **summary**:   Token transfer success (currency_id, from, to, amount) 

___


## utility
 
### BatchCompleted()
- **summary**:   Batch of dispatches completed fully with no error. 
 
### BatchInterrupted(`u32`, `DispatchError`)
- **summary**:   Batch of dispatches did not complete fully. Index of first failing dispatch given, as well as the error. 

___


## vesting
 
### Claimed(`AccountId`, `Balance`)
- **summary**:   Claimed vesting (who, locked_amount) 
 
### VestingScheduleAdded(`AccountId`, `AccountId`, `VestingSchedule`)
- **summary**:   Added new vesting schedule (from, to, vesting_schedule) 
 
### VestingSchedulesUpdated(`AccountId`)
- **summary**:   Updated vesting schedules (who) 
