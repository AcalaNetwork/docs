---
title: Events
---

Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[acalaOracle](#acalaoracle)**

- **[acalaTreasury](#acalatreasury)**

- **[airDrop](#airdrop)**

- **[auction](#auction)**

- **[auctionManager](#auctionmanager)**

- **[authority](#authority)**

- **[balances](#balances)**

- **[bandOracle](#bandoracle)**

- **[cdpEngine](#cdpengine)**

- **[cdpTreasury](#cdptreasury)**

- **[contracts](#contracts)**

- **[currencies](#currencies)**

- **[dex](#dex)**

- **[electionsPhragmen](#electionsphragmen)**

- **[emergencyShutdown](#emergencyshutdown)**

- **[evm](#evm)**

- **[evmAccounts](#evmaccounts)**

- **[generalCouncil](#generalcouncil)**

- **[generalCouncilMembership](#generalcouncilmembership)**

- **[graduallyUpdate](#graduallyupdate)**

- **[grandpa](#grandpa)**

- **[homaCouncil](#homacouncil)**

- **[homaCouncilMembership](#homacouncilmembership)**

- **[honzon](#honzon)**

- **[honzonCouncil](#honzoncouncil)**

- **[honzonCouncilMembership](#honzoncouncilmembership)**

- **[incentives](#incentives)**

- **[indices](#indices)**

- **[loans](#loans)**

- **[multisig](#multisig)**

- **[nft](#nft)**

- **[operatorMembershipAcala](#operatormembershipacala)**

- **[operatorMembershipBand](#operatormembershipband)**

- **[prices](#prices)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[renVmBridge](#renvmbridge)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[staking](#staking)**

- **[stakingPool](#stakingpool)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalCommitteeMembership](#technicalcommitteemembership)**

- **[tokens](#tokens)**

- **[utility](#utility)**

- **[vesting](#vesting)**


___


## acalaOracle
 
### NewFeedData(`AccountId`, `Vec<(OracleKey,OracleValue)>`)
- **summary**:   New feed data is submitted. [sender, values] 

___


## acalaTreasury
 
### Awarded(`ProposalIndex`, `Balance`, `AccountId`)
- **summary**:   Some funds have been allocated. \[proposal_index, award, beneficiary\] 
 
### BountyAwarded(`BountyIndex`, `AccountId`)
- **summary**:   A bounty is awarded to a beneficiary. [index, beneficiary] 
 
### BountyBecameActive(`BountyIndex`)
- **summary**:   A bounty proposal is funded and became active. [index] 
 
### BountyCanceled(`BountyIndex`)
- **summary**:   A bounty is cancelled. [index] 
 
### BountyClaimed(`BountyIndex`, `Balance`, `AccountId`)
- **summary**:   A bounty is claimed by beneficiary. [index, payout, beneficiary] 
 
### BountyExtended(`BountyIndex`)
- **summary**:   A bounty expiry is extended. [index] 
 
### BountyProposed(`BountyIndex`)
- **summary**:   New bounty proposal. [index] 
 
### BountyRejected(`BountyIndex`, `Balance`)
- **summary**:   A bounty proposal was rejected; funds were slashed. [index, bond] 
 
### Burnt(`Balance`)
- **summary**:   Some of our funds have been burnt. \[burn\] 
 
### Deposit(`Balance`)
- **summary**:   Some funds have been deposited. \[deposit\] 
 
### NewTip(`Hash`)
- **summary**:   A new tip suggestion has been opened. \[tip_hash\] 
 
### Proposed(`ProposalIndex`)
- **summary**:   New proposal. \[proposal_index\] 
 
### Rejected(`ProposalIndex`, `Balance`)
- **summary**:   A proposal was rejected; funds were slashed. \[proposal_index, slashed\] 
 
### Rollover(`Balance`)
- **summary**:   Spending has finished; this is the amount that rolls over until next spend. \[budget_remaining\] 
 
### Spending(`Balance`)
- **summary**:   We have ended a spend period and will now allocate funds. \[budget_remaining\] 
 
### TipClosed(`Hash`, `AccountId`, `Balance`)
- **summary**:   A tip suggestion has been closed. \[tip_hash, who, payout\] 
 
### TipClosing(`Hash`)
- **summary**:   A tip suggestion has reached threshold and is closing. \[tip_hash\] 
 
### TipRetracted(`Hash`)
- **summary**:   A tip suggestion has been retracted. \[tip_hash\] 

___


## airDrop
 
### Airdrop(`AccountId`, `AirDropCurrencyId`, `Balance`)
- **summary**:   \[to, currency_id, amount\] 
 
### UpdateAirdrop(`AccountId`, `AirDropCurrencyId`, `Balance`)
- **summary**:   \[to, currency_id, amount\] 

___


## auction
 
### Bid(`AuctionId`, `AccountId`, `Balance`)
- **summary**:   A bid is placed. [auction_id, bidder, bidding_amount] 

___


## auctionManager
 
### CancelAuction(`AuctionId`)
- **summary**:   Active auction cancelled. \[auction_id\] 
 
### CollateralAuctionDealt(`AuctionId`, `CurrencyId`, `Balance`, `AccountId`, `Balance`)
- **summary**:   Collateral auction dealt. \[auction_id, collateral_type, collateral_amount, winner, payment_amount\] 
 
### DebitAuctionDealt(`AuctionId`, `Balance`, `AccountId`, `Balance`)
- **summary**:   Debit auction dealt. \[auction_id, debit_currency_amount, winner, payment_amount\] 
 
### DEXTakeCollateralAuction(`AuctionId`, `CurrencyId`, `Balance`, `Balance`)
- **summary**:   Dex take collateral auction. \[auction_id, collateral_type, collateral_amount, turnover\] 
 
### NewCollateralAuction(`AuctionId`, `CurrencyId`, `Balance`, `Balance`)
- **summary**:   Collateral auction created. \[auction_id, collateral_type, collateral_amount, target_bid_price\] 
 
### NewDebitAuction(`AuctionId`, `Balance`, `Balance`)
- **summary**:   Debit auction created. \[auction_id, initial_supply_amount, fix_payment_amount\] 
 
### NewSurplusAuction(`AuctionId`, `Balance`)
- **summary**:   Surplus auction created. \[auction_id, fix_surplus_amount\] 
 
### SurplusAuctionDealt(`AuctionId`, `Balance`, `AccountId`, `Balance`)
- **summary**:   Surplus auction dealt. \[auction_id, surplus_amount, winner, payment_amount\] 

___


## authority
 
### Cancelled(`PalletsOrigin`, `ScheduleTaskIndex`)
- **summary**:   A scheduled call is cancelled. [origin, index] 
 
### Delayed(`PalletsOrigin`, `ScheduleTaskIndex`, `BlockNumber`)
- **summary**:   A scheduled call is delayed. [origin, index, when] 
 
### Dispatched(`DispatchResult`)
- **summary**:   A call is dispatched. [result] 
 
### FastTracked(`PalletsOrigin`, `ScheduleTaskIndex`, `BlockNumber`)
- **summary**:   A scheduled call is fast tracked. [origin, index, when] 
 
### Scheduled(`PalletsOrigin`, `ScheduleTaskIndex`)
- **summary**:   A call is scheduled. [origin, index] 

___


## balances
 
### BalanceSet(`AccountId`, `Balance`, `Balance`)
- **summary**:   A balance was set by root. \[who, free, reserved\] 
 
### Deposit(`AccountId`, `Balance`)
- **summary**:   Some amount was deposited (e.g. for transaction fees). \[who, deposit\] 
 
### DustLost(`AccountId`, `Balance`)
- **summary**:   An account was removed whose balance was non-zero but below ExistentialDeposit, resulting in an outright loss. \[account, balance\] 
 
### Endowed(`AccountId`, `Balance`)
- **summary**:   An account was created with some free balance. \[account, free_balance\] 
 
### Reserved(`AccountId`, `Balance`)
- **summary**:   Some balance was reserved (moved from free to reserved). \[who, value\] 
 
### ReserveRepatriated(`AccountId`, `AccountId`, `Balance`, `BalanceStatus`)
- **summary**:   Some balance was moved from the reserve of the first account to the second account. Final argument indicates the destination balance type. \[from, to, balance, destination_status\] 
 
### Transfer(`AccountId`, `AccountId`, `Balance`)
- **summary**:   Transfer succeeded. \[from, to, value\] 
 
### Unreserved(`AccountId`, `Balance`)
- **summary**:   Some balance was unreserved (moved from reserved to free). \[who, value\] 

___


## bandOracle
 
### NewFeedData(`AccountId`, `Vec<(OracleKey,OracleValue)>`)
- **summary**:   New feed data is submitted. [sender, values] 

___


## cdpEngine
 
### GlobalStabilityFeeUpdated(`Rate`)
- **summary**:   The global stability fee for all types of collateral updated. \[new_global_stability_fee\] 
 
### LiquidateUnsafeCDP(`CurrencyId`, `AccountId`, `Balance`, `Balance`, `LiquidationStrategy`)
- **summary**:   Liquidate the unsafe CDP. \[collateral_type, owner, collateral_amount, bad_debt_value, liquidation_strategy\] 
 
### LiquidationPenaltyUpdated(`CurrencyId`, `Option<Rate>`)
- **summary**:   The liquidation penalty rate for specific collateral type updated. \[collateral_type, new_liquidation_panelty\] 
 
### LiquidationRatioUpdated(`CurrencyId`, `Option<Ratio>`)
- **summary**:   The liquidation fee for specific collateral type updated. \[collateral_type, new_liquidation_ratio\] 
 
### MaximumTotalDebitValueUpdated(`CurrencyId`, `Balance`)
- **summary**:   The hard cap of total debit value for specific collateral type updated. \[collateral_type, new_total_debit_value\] 
 
### RequiredCollateralRatioUpdated(`CurrencyId`, `Option<Ratio>`)
- **summary**:   The required collateral penalty rate for specific collateral type updated. \[collateral_type, new_required_collateral_ratio\] 
 
### SettleCDPInDebit(`CurrencyId`, `AccountId`)
- **summary**:   Settle the CDP has debit. [collateral_type, owner] 
 
### StabilityFeeUpdated(`CurrencyId`, `Option<Rate>`)
- **summary**:   The stability fee for specific collateral type updated. \[collateral_type, new_stability_fee\] 

___


## cdpTreasury
 
### CollateralAuctionMaximumSizeUpdated(`CurrencyId`, `Balance`)
- **summary**:   The fixed size for collateral auction under specific collateral type updated. \[collateral_type, new_size\] 

___


## contracts
 
### CodeStored(`Hash`)
- **summary**:   Code with the specified hash has been stored. \[code_hash\] 
 
### ContractExecution(`AccountId`, `Bytes`)
- **summary**:   An event deposited upon execution of a contract from the account. \[account, data\] 
 
### Evicted(`AccountId`, `bool`)
- **summary**:   Contract has been evicted and is now in tombstone state. \[contract, tombstone\] 

  #### Params 

  - `contract`: `AccountId`: The account ID of the evicted contract. 

  - `tombstone`: `bool`: True if the evicted contract left behind a tombstone.
 
### Instantiated(`AccountId`, `AccountId`)
- **summary**:   Contract deployed by address at the specified address. \[owner, contract\] 
 
### Restored(`AccountId`, `AccountId`, `Hash`, `Balance`)
- **summary**:   Restoration for a contract has been successful. \[donor, dest, code_hash, rent_allowance\] 

  #### Params 

  - `donor`: `AccountId`: Account ID of the restoring contract 

  - `dest`: `AccountId`: Account ID of the restored contract

  - `code_hash`: `Hash`: Code hash of the restored contract

  - `rent_allowance: `Balance`: Rent allowance of the restored contract
 
### ScheduleUpdated(`u32`)
- **summary**:   Triggered when the current \[schedule\] is updated. 

___


## currencies
 
### BalanceUpdated(`CurrencyId`, `AccountId`, `Amount`)
- **summary**:   Update balance success. [currency_id, who, amount] 
 
### Deposited(`CurrencyId`, `AccountId`, `Balance`)
- **summary**:   Deposit success. [currency_id, who, amount] 
 
### Transferred(`CurrencyId`, `AccountId`, `AccountId`, `Balance`)
- **summary**:   Currency transfer success. [currency_id, from, to, amount] 
 
### Withdrawn(`CurrencyId`, `AccountId`, `Balance`)
- **summary**:   Withdraw success. [currency_id, who, amount] 

___


## dex
 
### AddLiquidity(`AccountId`, `CurrencyId`, `Balance`, `CurrencyId`, `Balance`, `Balance`)
- **summary**:   Add liquidity success. \[who, currency_id_0, pool_0_increment, currency_id_1, pool_1_increment, share_increment\] 
 
### AddProvision(`AccountId`, `CurrencyId`, `Balance`, `CurrencyId`, `Balance`)
- **summary**:   add provision success \[who, currency_id_0, contribution_0, currency_id_1, contribution_1\] 
 
### DisableTradingPair(`TradingPair`)
- **summary**:   Disable trading pair. \[trading_pair\] 
 
### EnableTradingPair(`TradingPair`)
- **summary**:   Enable trading pair. \[trading_pair\] 
 
### ListTradingPair(`TradingPair`)
- **summary**:   List trading pair. \[trading_pair\] 
 
### ProvisioningToEnabled(`TradingPair`, `Balance`, `Balance`, `Balance`)
- **summary**:   Provisioning trading pair convert to Enabled. \[trading_pair, pool_0_amount, pool_1_amount, total_share_amount\] 
 
### RemoveLiquidity(`AccountId`, `CurrencyId`, `Balance`, `CurrencyId`, `Balance`, `Balance`)
- **summary**:   Remove liquidity from the trading pool success. \[who, currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement, share_decrement\] 
 
### Swap(`AccountId`, `Vec<CurrencyId>`, `Balance`, `Balance`)
- **summary**:   Use supply currency to swap target currency. \[trader, trading_path, supply_currency_amount, target_currency_amount\] 

___


## electionsPhragmen
 
### CandidateSlashed(`AccountId`, `Balance`)
- **summary**:   A candidate was slashed due to failing to obtain a seat as member or runner-up 
 
### ElectionError()
- **summary**:   Internal error happened while trying to perform election. 
 
### EmptyTerm()
- **summary**:   No (or not enough) candidates existed for this round. This is different from `NewTerm(\[\])`. See the description of `NewTerm`. 
 
### MemberKicked(`AccountId`)
- **summary**:   A \[member\] has been removed. This should always be followed by either `NewTerm` or `EmptyTerm`. 
 
### MemberRenounced(`AccountId`)
- **summary**:   A \[member\] has renounced their candidacy. 
 
### NewTerm(`Vec<(AccountId,Balance)>`)
- **summary**:   A new term with \[new_members\]. This indicates that enough candidates existed to run the election, not that enough have has been elected. The inner value must be examined for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to begin with. 
 
### SeatHolderSlashed(`AccountId`, `Balance`)
- **summary**:   A seat holder (member or runner-up) was slashed due to failing to retaining their position. 
 
### VoterReported(`AccountId`, `AccountId`, `bool`)
- **summary**:   A voter was reported with the the report being successful or not. \[voter, reporter, success\] 

___


## emergencyShutdown
 
### OpenRefund(`BlockNumber`)
- **summary**:   The final redemption opened. \[block_number\] 
 
### Refund(`AccountId`, `Balance`, `Vec<(CurrencyId,Balance)>`)
- **summary**:   Refund info. \[caller, stable_coin_amount, refund_list\] 
 
### Shutdown(`BlockNumber`)
- **summary**:   Emergency shutdown occurs. \[block_number\] 

___


## evm
 
### AddStorageQuota(`EvmAddress`, `u32`)
- **summary**:   A quota has been added at a given address. \[address, bytes\] 
 
### BalanceDeposit(`AccountId`, `EvmAddress`, `U256`)
- **summary**:   A deposit has been made at a given address. \[sender, address, value\] 
 
### BalanceWithdraw(`AccountId`, `EvmAddress`, `U256`)
- **summary**:   A withdrawal has been made from a given address. \[sender, address, value\] 
 
### CanceledTransferMaintainer(`EvmAddress`, `EvmAddress`)
- **summary**:   Canceled the transfer maintainer. \[contract, address\] 
 
### ConfirmedTransferMaintainer(`EvmAddress`, `EvmAddress`)
- **summary**:   Confirmed the transfer maintainer. \[contract, address\] 
 
### ContractDeployed(`EvmAddress`)
- **summary**:   Deployed contract. \[contract\] 
 
### ContractDevelopmentDisabled(`AccountId`)
- **summary**:   Disabled contract development. \[who\] 
 
### ContractDevelopmentEnabled(`AccountId`)
- **summary**:   Enabled contract development. \[who\] 
 
### Created(`EvmAddress`)
- **summary**:   A contract has been created at given \[address\]. 
 
### CreatedFailed(`EvmAddress`, `ExitReason`, `Bytes`)
- **summary**:   A contract was attempted to be created, but the execution failed. \[contract, exit_reason, output\] 
 
### Executed(`EvmAddress`)
- **summary**:   A \[contract\] has been executed successfully with states applied. 
 
### ExecutedFailed(`EvmAddress`, `ExitReason`, `Bytes`)
- **summary**:   A contract has been executed with errors. States are reverted with only gas fees applied. \[contract, exit_reason, output\] 
 
### Log(`Log`)
- **summary**:   Ethereum events from contracts. 
 
### RejectedTransferMaintainer(`EvmAddress`, `EvmAddress`)
- **summary**:   Rejected the transfer maintainer. \[contract, address\] 
 
### RemoveStorageQuota(`EvmAddress`, `u32`)
- **summary**:   A quota has been removed at a given address. \[address, bytes\] 
 
### RequestedTransferMaintainer(`EvmAddress`, `EvmAddress`)
- **summary**:   Requested the transfer maintainer. \[contract, address\] 

___


## evmAccounts
 
### ClaimAccount(`AccountId`, `EvmAddress`)
- **summary**:   Mapping between Substrate accounts and EVM accounts claim account. \[account_id, evm_address\] 

___


## generalCouncil
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. \[proposal_hash\] 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. \[proposal_hash, yes, no\] 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. \[proposal_hash\] 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). \[account, proposal_index, proposal_hash, threshold\] 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). \[account, proposal_hash, voted, yes, no\] 

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
- **summary**:   Gradually update added. [key, per_block, target_value] 
 
### GraduallyUpdateCancelled(`StorageKey`)
- **summary**:   Gradually update cancelled. [key] 
 
### Updated(`BlockNumber`, `StorageKey`, `StorageValue`)
- **summary**:   Gradually update applied. [block_number, key, target_value] 

___


## grandpa
 
### NewAuthorities(`AuthorityList`)
- **summary**:   New authority set has been applied. \[authority_set\] 
 
### Paused()
- **summary**:   Current authority set has been paused. 
 
### Resumed()
- **summary**:   Current authority set has been resumed. 

___


## homaCouncil
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. \[proposal_hash\] 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. \[proposal_hash, yes, no\] 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. \[proposal_hash\] 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). \[account, proposal_index, proposal_hash, threshold\] 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). \[account, proposal_hash, voted, yes, no\] 

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
- **summary**:   Authorize someone to operate the loan of specific collateral. \[authorizer, authorizee, collateral_type\] 
 
### UnAuthorization(`AccountId`, `AccountId`, `CurrencyId`)
- **summary**:   Cancel the authorization of specific collateral for someone. \[authorizer, authorizee, collateral_type\] 
 
### UnAuthorizationAll(`AccountId`)
- **summary**:   Cancel all authorization. \[authorizer\] 

___


## honzonCouncil
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. \[proposal_hash\] 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. \[proposal_hash, yes, no\] 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. \[proposal_hash\] 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). \[account, proposal_index, proposal_hash, threshold\] 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). \[account, proposal_hash, voted, yes, no\] 

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


## incentives
 
### DepositDEXShare(`AccountId`, `CurrencyId`, `Balance`)
- **summary**:   Deposit DEX share. \[who, dex_share_type, deposit_amount\] 
 
### WithdrawDEXShare(`AccountId`, `CurrencyId`, `Balance`)
- **summary**:   Withdraw DEX share. \[who, dex_share_type, withdraw_amount\] 

___


## indices
 
### IndexAssigned(`AccountId`, `AccountIndex`)
- **summary**:   A account index was assigned. \[index, who\] 
 
### IndexFreed(`AccountIndex`)
- **summary**:   A account index has been freed up (unassigned). \[index\] 
 
### IndexFrozen(`AccountIndex`, `AccountId`)
- **summary**:   A account index has been frozen to its current account ID. \[index, who\] 

___


## loans
 
### ConfiscateCollateralAndDebit(`AccountId`, `CurrencyId`, `Balance`, `Balance`)
- **summary**:   Confiscate CDP's collateral assets and eliminate its debit. \[owner, collateral_type, confiscated_collateral_amount, deduct_debit_amount\] 
 
### PositionUpdated(`AccountId`, `CurrencyId`, `Amount`, `Amount`)
- **summary**:   Position updated. \[owner, collateral_type, collateral_adjustment, debit_adjustment\] 
 
### TransferLoan(`AccountId`, `AccountId`, `CurrencyId`)
- **summary**:   Transfer loan. \[from, to, currency_id\] 

___


## multisig
 
### MultisigApproval(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **summary**:   A multisig operation has been approved by someone. \[approving, timepoint, multisig, call_hash\] 
 
### MultisigCancelled(`AccountId`, `Timepoint`, `AccountId`, `CallHash`)
- **summary**:   A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\] 
 
### MultisigExecuted(`AccountId`, `Timepoint`, `AccountId`, `CallHash`, `DispatchResult`)
- **summary**:   A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\] 
 
### NewMultisig(`AccountId`, `AccountId`, `CallHash`)
- **summary**:   A new multisig operation has begun. \[approving, multisig, call_hash\] 

___


## nft
 
### BurnedToken(`AccountId`, `ClassId`, `TokenId`)
- **summary**:   Burned NFT token. \[owner, class_id, token_id\] 
 
### CreatedClass(`AccountId`, `ClassId`)
- **summary**:   Created NFT class. \[owner, class_id\] 
 
### DestroyedClass(`AccountId`, `ClassId`, `AccountId`)
- **summary**:   Destroyed NFT class. \[owner, class_id, dest\] 
 
### MintedToken(`AccountId`, `AccountId`, `ClassId`, `u32`)
- **summary**:   Minted NFT token. \[from, to, class_id, quantity\] 
 
### TransferedToken(`AccountId`, `AccountId`, `ClassId`, `TokenId`)
- **summary**:   Transfered NFT token. \[from, to, class_id, token_id\] 

___


## operatorMembershipAcala
 
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


## operatorMembershipBand
 
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


## prices
 
### LockPrice(`CurrencyId`, `Price`)
- **summary**:   Lock price. \[currency_id, locked_price\] 
 
### UnlockPrice(`CurrencyId`)
- **summary**:   Unlock price. \[currency_id\] 

___


## proxy
 
### Announced(`AccountId`, `AccountId`, `Hash`)
- **summary**:   An announcement was placed to make a call in the future. \[real, proxy, call_hash\] 
 
### AnonymousCreated(`AccountId`, `AccountId`, `ProxyType`, `u16`)
- **summary**:   Anonymous account has been created by new proxy with given disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\] 
 
### ProxyExecuted(`DispatchResult`)
- **summary**:   A proxy was executed correctly, with the given \[result\]. 

___


## recovery
 
### AccountRecovered(`AccountId`, `AccountId`)
- **summary**:   Lost account has been successfully recovered by rescuer account. \[lost, rescuer\] 
 
### RecoveryClosed(`AccountId`, `AccountId`)
- **summary**:   A recovery process for lost account by rescuer account has been closed. \[lost, rescuer\] 
 
### RecoveryCreated(`AccountId`)
- **summary**:   A recovery process has been set up for an \[account\]. 
 
### RecoveryInitiated(`AccountId`, `AccountId`)
- **summary**:   A recovery process has been initiated for lost account by rescuer account. \[lost, rescuer\] 
 
### RecoveryRemoved(`AccountId`)
- **summary**:   A recovery process has been removed for an \[account\]. 
 
### RecoveryVouched(`AccountId`, `AccountId`, `AccountId`)
- **summary**:   A recovery process for lost account by rescuer account has been vouched for by sender. \[lost, rescuer, sender\] 

___


## renVmBridge
 
### Burnt(`AccountId`, `DestAddress`, `Balance`)
- **summary**:   Asset burnt in this chain \[owner, dest, amount\] 
 
### Minted(`AccountId`, `Balance`)
- **summary**:   Asset minted. \[owner, amount\] 

___


## scheduler
 
### Canceled(`BlockNumber`, `u32`)
- **summary**:   Canceled some task. \[when, index\] 
 
### Dispatched(`TaskAddress`, `Option<Bytes>`, `DispatchResult`)
- **summary**:   Dispatched some task. \[task, id, result\] 
 
### Scheduled(`BlockNumber`, `u32`)
- **summary**:   Scheduled some task. \[when, index\] 

___


## session
 
### NewSession(`SessionIndex`)
- **summary**:   New session has happened. Note that the argument is the \[session_index\], not the block number as the type might suggest. 

___


## staking
 
### Bonded(`AccountId`, `Balance`)
- **summary**:   An account has bonded this amount. \[stash, amount\] 

  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably, it will not be emitted for staking rewards when they are added to stake. 
 
### EraPayout(`EraIndex`, `Balance`, `Balance`)
- **summary**:   The era payout has been set; the first balance is the validator-payout; the second is the remainder from the maximum amount of reward. \[era_index, validator_payout, remainder\] 
 
### OldSlashingReportDiscarded(`SessionIndex`)
- **summary**:   An old slashing report from a prior era was discarded because it could not be processed. \[session_index\] 
 
### Reward(`AccountId`, `Balance`)
- **summary**:   The staker has been rewarded by this amount. \[stash, amount\] 
 
### Slash(`AccountId`, `Balance`)
- **summary**:   One validator (and its nominators) has been slashed by the given amount. \[validator, amount\] 
 
### SolutionStored(`ElectionCompute`)
- **summary**:   A new solution for the upcoming election has been stored. \[compute\] 
 
### StakingElection(`ElectionCompute`)
- **summary**:   A new set of stakers was elected with the given \[compute\]. 
 
### Unbonded(`AccountId`, `Balance`)
- **summary**:   An account has unbonded this amount. \[stash, amount\] 
 
### Withdrawn(`AccountId`, `Balance`)
- **summary**:   An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance` from the unlocking queue. \[stash, amount\] 

___


## stakingPool
 
### MintLiquid(`AccountId`, `Balance`, `Balance`)
- **summary**:   Deposit staking currency(DOT) to staking pool and issue liquid currency(LDOT). \[who, staking_amount_deposited, liquid_amount_issued\] 
 
### RedeemByClaimUnbonding(`AccountId`, `EraIndex`, `Balance`, `Balance`, `Balance`)
- **summary**:   Burn liquid currency(LDOT) and redeem staking currency(DOT) by claim the unbonding_to_free of specific era. \[who, target_era, fee_in_staking, liquid_amount_burned, staking_amount_redeemed\] 
 
### RedeemByFreeUnbonded(`AccountId`, `Balance`, `Balance`, `Balance`)
- **summary**:   Burn liquid currency(LDOT) and redeem staking currency(DOT) by free pool immediately. \[who, fee_in_staking, liquid_amount_burned, staking_amount_redeemed\] 
 
### RedeemByUnbond(`AccountId`, `Balance`, `Balance`)
- **summary**:   Burn liquid currency(LDOT) and redeem staking currency(DOT) by waiting for complete unbond eras. \[who, liquid_amount_burned, staking_amount_redeemed\] 

___


## sudo
 
### KeyChanged(`AccountId`)
- **summary**:   The \[sudoer\] just switched identity; the old key is supplied. 
 
### Sudid(`DispatchResult`)
- **summary**:   A sudo just took place. \[result\] 
 
### SudoAsDone(`DispatchResult`)
- **summary**:   A sudo just took place. \[result\] 

___


## system
 
### CodeUpdated()
- **summary**:   `:code` was updated. 
 
### ExtrinsicFailed(`DispatchError`, `DispatchInfo`)
- **summary**:   An extrinsic failed. \[error, info\] 
 
### ExtrinsicSuccess(`DispatchInfo`)
- **summary**:   An extrinsic completed successfully. \[info\] 
 
### KilledAccount(`AccountId`)
- **summary**:   An \[account\] was reaped. 
 
### NewAccount(`AccountId`)
- **summary**:   A new \[account\] was created. 

___


## technicalCommittee
 
### Approved(`Hash`)
- **summary**:   A motion was approved by the required threshold. \[proposal_hash\] 
 
### Closed(`Hash`, `MemberCount`, `MemberCount`)
- **summary**:   A proposal was closed because its threshold was reached or after its duration was up. \[proposal_hash, yes, no\] 
 
### Disapproved(`Hash`)
- **summary**:   A motion was not approved by the required threshold. \[proposal_hash\] 
 
### Executed(`Hash`, `DispatchResult`)
- **summary**:   A motion was executed; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### MemberExecuted(`Hash`, `DispatchResult`)
- **summary**:   A single member did some action; result will be `Ok` if it returned without error. \[proposal_hash, result\] 
 
### Proposed(`AccountId`, `ProposalIndex`, `Hash`, `MemberCount`)
- **summary**:   A motion (given hash) has been proposed (by given account) with a threshold (given `MemberCount`). \[account, proposal_index, proposal_hash, threshold\] 
 
### Voted(`AccountId`, `Hash`, `bool`, `MemberCount`, `MemberCount`)
- **summary**:   A motion (given hash) has been voted on by given account, leaving a tally (yes votes and no votes given respectively as `MemberCount`). \[account, proposal_hash, voted, yes, no\] 

___


## technicalCommitteeMembership
 
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
 
### DustLost(`AccountId`, `CurrencyId`, `Balance`)
- **summary**:   An account was removed whose balance was non-zero but below ExistentialDeposit, resulting in an outright loss. \[account, currency_id, amount\] 
 
### Transferred(`CurrencyId`, `AccountId`, `AccountId`, `Balance`)
- **summary**:   Token transfer success. \[currency_id, from, to, amount\] 

___


## utility
 
### BatchCompleted()
- **summary**:   Batch of dispatches completed fully with no error. 
 
### BatchInterrupted(`u32`, `DispatchError`)
- **summary**:   Batch of dispatches did not complete fully. Index of first failing dispatch given, as well as the error. \[index, error\] 

___


## vesting
 
### Claimed(`AccountId`, `Balance`)
- **summary**:   Claimed vesting. [who, locked_amount] 
 
### VestingScheduleAdded(`AccountId`, `AccountId`, `VestingSchedule`)
- **summary**:   Added new vesting schedule. [from, to, vesting_schedule] 
 
### VestingSchedulesUpdated(`AccountId`)
- **summary**:   Updated vesting schedules. [who] 
