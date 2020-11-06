---
title: Extrinsics
---

The following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via `api.tx.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[accounts](#accounts)**

- **[airDrop](#airdrop)**

- **[auction](#auction)**

- **[auctionManager](#auctionmanager)**

- **[cdpEngine](#cdpengine)**

- **[cdpTreasury](#cdptreasury)**

- **[currencies](#currencies)**

- **[dex](#dex)**

- **[emergencyShutdown](#emergencyshutdown)**

- **[generalCouncil](#generalcouncil)**

- **[generalCouncilMembership](#generalcouncilmembership)**

- **[graduallyUpdate](#graduallyupdate)**

- **[grandpa](#grandpa)**

- **[homa](#homa)**

- **[homaCouncil](#homacouncil)**

- **[homaCouncilMembership](#homacouncilmembership)**

- **[honzon](#honzon)**

- **[honzonCouncil](#honzoncouncil)**

- **[honzonCouncilMembership](#honzoncouncilmembership)**

- **[indices](#indices)**

- **[multisig](#multisig)**

- **[nomineesElection](#nomineeselection)**

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

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCouncil](#technicalcouncil)**

- **[technicalCouncilMembership](#technicalcouncilmembership)**

- **[timestamp](#timestamp)**

- **[utility](#utility)**

- **[vesting](#vesting)**


___


## accounts
 
### closeAccount(recipient: `Option<AccountId>`)
- **interface**: `api.tx.accounts.closeAccount`
- **summary**:   Kill self account from system. 

  The dispatch origin of this call must be Signed. 

  - `recipient`: the account as recipient to receive remaining currencies of the account will be killed, 				None means no recipient is specified. 
 
### disableFreeTransfers()
- **interface**: `api.tx.accounts.disableFreeTransfers`
- **summary**:   Unlock free transfer deposit. 

  The dispatch origin of this call must be Signed. 
 
### enableFreeTransfer()
- **interface**: `api.tx.accounts.enableFreeTransfer`
- **summary**:   Freeze some native currency to be able to free transfer. 

  The dispatch origin of this call must be Signed. 

___


## airDrop
 
### airdrop(to: `AccountId`, currency_id: `AirDropCurrencyId`, amount: `Balance`)
- **interface**: `api.tx.airDrop.airdrop`
 
### updateAirdrop(to: `AccountId`, currency_id: `AirDropCurrencyId`, amount: `Balance`)
- **interface**: `api.tx.airDrop.updateAirdrop`

___


## auction
 
### bid(id: `AuctionId`, value: `Compact<Balance>`)
- **interface**: `api.tx.auction.bid`
- **summary**:    

___


## auctionManager
 
### cancel(id: `AuctionIdOf`)
- **interface**: `api.tx.auctionManager.cancel`
- **summary**:   Cancel active auction after system shutdown 

  The dispatch origin of this call must be _None_. 

  - `auction_id`: auction id 

   

___


## cdpEngine
 
### liquidate(currency_id: `CurrencyId`, who: `AccountId`)
- **interface**: `api.tx.cdpEngine.liquidate`
- **summary**:   Liquidate unsafe CDP 

  The dispatch origin of this call must be _None_. 

  - `currency_id`: CDP's collateral type. 

  - `who`: CDP's owner.

   
 
### setCollateralParams(currency_id: `CurrencyId`, stability_fee: `ChangeOptionRate`, liquidation_ratio: `ChangeOptionRatio`, liquidation_penalty: `ChangeOptionRate`, required_collateral_ratio: `ChangeOptionRatio`, maximum_total_debit_value: `ChangeBalance`)
- **interface**: `api.tx.cdpEngine.setCollateralParams`
- **summary**:   Update parameters related to risk management of CDP under specific collateral type 

  The dispatch origin of this call must be `UpdateOrigin`. 

  - `currency_id`: collateral type. 

  - `stability_fee`: extra stability fee rate, `None` means do not update, `Some(None)` means update it to `None`.

  - `liquidation_ratio`: liquidation ratio, `None` means do not update, `Some(None)` means update it to `None`.

  - `liquidation_penalty`: liquidation penalty, `None` means do not update, `Some(None)` means update it to `None`.

  - `required_collateral_ratio`: required collateral ratio, `None` means do not update, `Some(None)` means update it to `None`.

  - `maximum_total_debit_value`: maximum total debit value.

   
 
### setGlobalParams(global_stability_fee: `Rate`)
- **interface**: `api.tx.cdpEngine.setGlobalParams`
- **summary**:   Update global parameters related to risk management of CDP 

  The dispatch origin of this call must be `UpdateOrigin`. 

  - `global_stability_fee`: global stability fee rate. 

   
 
### settle(currency_id: `CurrencyId`, who: `AccountId`)
- **interface**: `api.tx.cdpEngine.settle`
- **summary**:   Settle CDP has debit after system shutdown 

  The dispatch origin of this call must be _None_. 

  - `currency_id`: CDP's collateral type. 

  - `who`: CDP's owner.

   

___


## cdpTreasury
 
### setCollateralAuctionMaximumSize(currency_id: `CurrencyId`, size: `Balance`)
- **interface**: `api.tx.cdpTreasury.setCollateralAuctionMaximumSize`
- **summary**:   Update parameters related to collateral auction under specific collateral type 

  The dispatch origin of this call must be `UpdateOrigin`. 

  - `currency_id`: collateral type 

  - `surplus_buffer_size`: collateral auction maximum size

   
 
### setDebitAndSurplusHandleParams(surplus_auction_fixed_size: `Option<Balance>`, surplus_buffer_size: `Option<Balance>`, initial_amount_per_debit_auction: `Option<Balance>`, debit_auction_fixed_size: `Option<Balance>`)
- **interface**: `api.tx.cdpTreasury.setDebitAndSurplusHandleParams`
- **summary**:   Update parameters related to surplus and debit auction 

  The dispatch origin of this call must be `UpdateOrigin`. 

  - `surplus_auction_fixed_size`: new fixed amount of stable coin for sale per surplus auction, `None` means do not update 

  - `surplus_buffer_size`: new buffer size of surplus pool, `None` means do not update

  - `initial_amount_per_debit_auction`: initial amount of native token for sale per debit auction, `None` means do not update

  - `debit_auction_fixed_size`: the fixed amount of stable coin per collateral auction wants to get, `None` means do not update

   

___


## currencies
 
### transfer(dest: `LookupSource`, currency_id: `CurrencyIdOf`, amount: `Compact<BalanceOf>`)
- **interface**: `api.tx.currencies.transfer`
- **summary**:   Transfer some balance to another account under `currency_id`. 

  The dispatch origin for this call must be `Signed` by the transactor. 

   
 
### transferNativeCurrency(dest: `LookupSource`, amount: `Compact<BalanceOf>`)
- **interface**: `api.tx.currencies.transferNativeCurrency`
- **summary**:   Transfer some native currency to another account. 

  The dispatch origin for this call must be `Signed` by the transactor. 

   
 
### updateBalance(who: `LookupSource`, currency_id: `CurrencyIdOf`, amount: `AmountOf`)
- **interface**: `api.tx.currencies.updateBalance`
- **summary**:   update amount of account `who` under `currency_id`. 

  The dispatch origin of this call must be _Root_. 

   

___


## dex
 
### addLiquidity(other_currency_id: `CurrencyId`, max_other_currency_amount: `Compact<Balance>`, max_base_currency_amount: `Compact<Balance>`)
- **interface**: `api.tx.dex.addLiquidity`
- **summary**:   Injecting liquidity to specific liquidity pool in the form of depositing currencies in trading pairs into liquidity pool, and issue shares in proportion to the caller. Shares are temporarily not allowed to transfer and trade, it represents the proportion of assets in liquidity pool. 

  - `other_currency_id`: currency type to determine the type of liquidity pool. 

  - `max_other_currency_amount`: maximum currency amount allowed to inject to liquidity pool.

  - `max_base_currency_amount`: maximum base currency(stable coin) amount allowed to inject to liquidity pool.

   
 
### setLiquidityIncentiveRate(currency_id: `CurrencyId`, liquidity_incentive_rate: `Rate`)
- **interface**: `api.tx.dex.setLiquidityIncentiveRate`
- **summary**:   Update liquidity incentive rate of specific liquidity pool 

  The dispatch origin of this call must be `UpdateOrigin`. 

  - `currency_id`: currency type to determine the type of liquidity pool. 

  - `liquidity_incentive_rate`: liquidity incentive rate.

   
 
### swapCurrency(supply_currency_id: `CurrencyId`, supply_amount: `Compact<Balance>`, target_currency_id: `CurrencyId`, acceptable_target_amount: `Compact<Balance>`)
- **interface**: `api.tx.dex.swapCurrency`
- **summary**:   Trading with DEX, swap supply currency to target currency 

  - `supply_currency_id`: supply currency type. 

  - `supply_amount`: supply currency amount.

  - `target_currency_id`: target currency type.

  - `acceptable_target_amount`: acceptable target amount, if actual amount is under it, swap will not happen

   
 
### withdrawIncentiveInterest(currency_id: `CurrencyId`)
- **interface**: `api.tx.dex.withdrawIncentiveInterest`
- **summary**:   Just withdraw liquidity incentive interest as the additional reward for liquidity contribution 

  - `currency_id`: currency type to determine the type of liquidity pool. 

   
 
### withdrawLiquidity(currency_id: `CurrencyId`, share_amount: `Compact<Share>`)
- **interface**: `api.tx.dex.withdrawLiquidity`
- **summary**:   Withdraw liquidity from specific liquidity pool in the form of burning shares, and withdrawing currencies in trading pairs from liquidity pool in proportion, and withdraw liquidity incentive interest. 

  - `currency_id`: currency type to determine the type of liquidity pool. 

  - `share_amount`: share amount to burn.

   

___


## emergencyShutdown
 
### emergencyShutdown()
- **interface**: `api.tx.emergencyShutdown.emergencyShutdown`
- **summary**:   Start emergency shutdown 

  The dispatch origin of this call must be `ShutdownOrigin`. 

   
 
### openCollateralRefund()
- **interface**: `api.tx.emergencyShutdown.openCollateralRefund`
- **summary**:   Open final redemption if settlement is completed. 

  The dispatch origin of this call must be `ShutdownOrigin`. 

   
 
### refundCollaterals(amount: `Compact<Balance>`)
- **interface**: `api.tx.emergencyShutdown.refundCollaterals`
- **summary**:   Refund a basket of remaining collateral assets to caller 

  - `amount`: stable coin amount used to refund. 

   

___


## generalCouncil
 
### close(proposal_hash: `Hash`, index: `Compact<ProposalIndex>`, proposal_weight_bound: `Compact<Weight>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.generalCouncil.close`
- **summary**:   Close a vote that is either approved, disapproved or whose voting period has ended. 

  May be called by any signed account in order to finish voting and close the proposal. 

  If called before the end of the voting period it will only close the vote if it is has enough votes to be approved or disapproved. 

  If called after the end of the voting period abstentions are counted as rejections unless there is a prime member set and the prime member cast an approval. 

  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal. + `length_bound`: The upper bound for the length of the proposal in storage. Checked via                   `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length. 

   
 
### disapproveProposal(proposal_hash: `Hash`)
- **interface**: `api.tx.generalCouncil.disapproveProposal`
- **summary**:   Disapprove a proposal, close, and remove it from the system, regardless of its current state. 

  Must be called by the Root origin. 

  Parameters: 

  * `proposal_hash`: The hash of the proposal that should be disapproved.

   
 
### execute(proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.generalCouncil.execute`
- **summary**:   Dispatch a proposal from a member using the `Member` origin. 

  Origin must be a member of the collective. 

   
 
### propose(threshold: `Compact<MemberCount>`, proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.generalCouncil.propose`
- **summary**:   Add a new proposal to either be voted on or executed directly. 

  Requires the sender to be member. 

  `threshold` determines whether `proposal` is executed directly (`threshold < 2`) or put up for voting. 

   
 
### setMembers(new_members: `Vec<AccountId>`, prime: `Option<AccountId>`, old_count: `MemberCount`)
- **interface**: `api.tx.generalCouncil.setMembers`
- **summary**:   Set the collective's membership. 

  - `new_members`: The new member list. Be nice to the chain and provide it sorted. 

  - `prime`: The prime member whose vote sets the default.

  - `old_count`: The upper bound for the previous number of members in storage.               Used for weight estimation. 

  Requires root origin. 

  NOTE: Does not enforce the expected `MAX_MEMBERS` limit on the amount of members, but       the weight estimations rely on it to estimate dispatchable weight. 

   
 
### vote(proposal: `Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)
- **interface**: `api.tx.generalCouncil.vote`
- **summary**:   Add an aye or nay vote for the sender to the given proposal. 

  Requires the sender to be a member. 

   

___


## generalCouncilMembership
 
### addMember(who: `AccountId`)
- **interface**: `api.tx.generalCouncilMembership.addMember`
- **summary**:   Add a member `who` to the set. 

  May only be called from `T::AddOrigin`. 
 
### changeKey(new: `AccountId`)
- **interface**: `api.tx.generalCouncilMembership.changeKey`
- **summary**:   Swap out the sending member for some other key `new`. 

  May only be called from `Signed` origin of a current member. 

  Prime membership is passed from the origin account to `new`, if extant. 
 
### clearPrime()
- **interface**: `api.tx.generalCouncilMembership.clearPrime`
- **summary**:   Remove the prime member if it exists. 

  May only be called from `T::PrimeOrigin`. 
 
### removeMember(who: `AccountId`)
- **interface**: `api.tx.generalCouncilMembership.removeMember`
- **summary**:   Remove a member `who` from the set. 

  May only be called from `T::RemoveOrigin`. 
 
### resetMembers(members: `Vec<AccountId>`)
- **interface**: `api.tx.generalCouncilMembership.resetMembers`
- **summary**:   Change the membership to a new set, disregarding the existing membership. Be nice and pass `members` pre-sorted. 

  May only be called from `T::ResetOrigin`. 
 
### setPrime(who: `AccountId`)
- **interface**: `api.tx.generalCouncilMembership.setPrime`
- **summary**:   Set the prime member. Must be a current member. 

  May only be called from `T::PrimeOrigin`. 
 
### swapMember(remove: `AccountId`, add: `AccountId`)
- **interface**: `api.tx.generalCouncilMembership.swapMember`
- **summary**:   Swap out one member `remove` for another `add`. 

  May only be called from `T::SwapOrigin`. 

  Prime membership is *not* passed from `remove` to `add`, if extant. 

___


## graduallyUpdate
 
### cancelGraduallyUpdate(key: `StorageKey`)
- **interface**: `api.tx.graduallyUpdate.cancelGraduallyUpdate`
- **summary**:   Cancel gradually_update to adjust numeric parameter. 
 
### graduallyUpdate(update: `GraduallyUpdate`)
- **interface**: `api.tx.graduallyUpdate.graduallyUpdate`
- **summary**:   Add gradually_update to adjust numeric parameter. 

___


## grandpa
 
### reportEquivocation(equivocation_proof: `GrandpaEquivocationProof`, key_owner_proof: `KeyOwnerProof`)
- **interface**: `api.tx.grandpa.reportEquivocation`
- **summary**:   Report voter equivocation/misbehavior. This method will verify the equivocation proof and validate the given key ownership proof against the extracted offender. If both are valid, the offence will be reported. 

  Since the weight of the extrinsic is 0, in order to avoid DoS by submission of invalid equivocation reports, a mandatory pre-validation of the extrinsic is implemented in a `SignedExtension`. 

___


## homa
 
### mint(amount: `Compact<Balance>`)
- **interface**: `api.tx.homa.mint`
 
### redeem(amount: `Compact<Balance>`, strategy: `RedeemStrategy`)
- **interface**: `api.tx.homa.redeem`
 
### withdrawRedemption()
- **interface**: `api.tx.homa.withdrawRedemption`

___


## homaCouncil
 
### close(proposal_hash: `Hash`, index: `Compact<ProposalIndex>`, proposal_weight_bound: `Compact<Weight>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.homaCouncil.close`
- **summary**:   Close a vote that is either approved, disapproved or whose voting period has ended. 

  May be called by any signed account in order to finish voting and close the proposal. 

  If called before the end of the voting period it will only close the vote if it is has enough votes to be approved or disapproved. 

  If called after the end of the voting period abstentions are counted as rejections unless there is a prime member set and the prime member cast an approval. 

  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal. + `length_bound`: The upper bound for the length of the proposal in storage. Checked via                   `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length. 

   
 
### disapproveProposal(proposal_hash: `Hash`)
- **interface**: `api.tx.homaCouncil.disapproveProposal`
- **summary**:   Disapprove a proposal, close, and remove it from the system, regardless of its current state. 

  Must be called by the Root origin. 

  Parameters: 

  * `proposal_hash`: The hash of the proposal that should be disapproved.

   
 
### execute(proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.homaCouncil.execute`
- **summary**:   Dispatch a proposal from a member using the `Member` origin. 

  Origin must be a member of the collective. 

   
 
### propose(threshold: `Compact<MemberCount>`, proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.homaCouncil.propose`
- **summary**:   Add a new proposal to either be voted on or executed directly. 

  Requires the sender to be member. 

  `threshold` determines whether `proposal` is executed directly (`threshold < 2`) or put up for voting. 

   
 
### setMembers(new_members: `Vec<AccountId>`, prime: `Option<AccountId>`, old_count: `MemberCount`)
- **interface**: `api.tx.homaCouncil.setMembers`
- **summary**:   Set the collective's membership. 

  - `new_members`: The new member list. Be nice to the chain and provide it sorted. 

  - `prime`: The prime member whose vote sets the default.

  - `old_count`: The upper bound for the previous number of members in storage.               Used for weight estimation. 

  Requires root origin. 

  NOTE: Does not enforce the expected `MAX_MEMBERS` limit on the amount of members, but       the weight estimations rely on it to estimate dispatchable weight. 

   
 
### vote(proposal: `Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)
- **interface**: `api.tx.homaCouncil.vote`
- **summary**:   Add an aye or nay vote for the sender to the given proposal. 

  Requires the sender to be a member. 

   

___


## homaCouncilMembership
 
### addMember(who: `AccountId`)
- **interface**: `api.tx.homaCouncilMembership.addMember`
- **summary**:   Add a member `who` to the set. 

  May only be called from `T::AddOrigin`. 
 
### changeKey(new: `AccountId`)
- **interface**: `api.tx.homaCouncilMembership.changeKey`
- **summary**:   Swap out the sending member for some other key `new`. 

  May only be called from `Signed` origin of a current member. 

  Prime membership is passed from the origin account to `new`, if extant. 
 
### clearPrime()
- **interface**: `api.tx.homaCouncilMembership.clearPrime`
- **summary**:   Remove the prime member if it exists. 

  May only be called from `T::PrimeOrigin`. 
 
### removeMember(who: `AccountId`)
- **interface**: `api.tx.homaCouncilMembership.removeMember`
- **summary**:   Remove a member `who` from the set. 

  May only be called from `T::RemoveOrigin`. 
 
### resetMembers(members: `Vec<AccountId>`)
- **interface**: `api.tx.homaCouncilMembership.resetMembers`
- **summary**:   Change the membership to a new set, disregarding the existing membership. Be nice and pass `members` pre-sorted. 

  May only be called from `T::ResetOrigin`. 
 
### setPrime(who: `AccountId`)
- **interface**: `api.tx.homaCouncilMembership.setPrime`
- **summary**:   Set the prime member. Must be a current member. 

  May only be called from `T::PrimeOrigin`. 
 
### swapMember(remove: `AccountId`, add: `AccountId`)
- **interface**: `api.tx.homaCouncilMembership.swapMember`
- **summary**:   Swap out one member `remove` for another `add`. 

  May only be called from `T::SwapOrigin`. 

  Prime membership is *not* passed from `remove` to `add`, if extant. 

___


## honzon
 
### adjustLoan(currency_id: `CurrencyId`, collateral_adjustment: `Amount`, debit_adjustment: `DebitAmount`)
- **interface**: `api.tx.honzon.adjustLoan`
- **summary**:   Adjust the loans of `currency_id` by specific `collateral_adjustment` and `debit_adjustment` 

  - `currency_id`: collateral currency id. 

  - `collateral_adjustment`: signed amount, positive means to deposit collateral currency into CDP,		negative means withdraw collateral currency from CDP. 

  - `debit_adjustment`: signed amount, positive means to issue some amount of stablecoin to caller according to the debit adjustment,		negative means caller will payback some amount of stablecoin to CDP according to to the debit adjustment. 

   
 
### authorize(currency_id: `CurrencyId`, to: `AccountId`)
- **interface**: `api.tx.honzon.authorize`
- **summary**:   Authorize `to` to manipulate the loan under `currency_id` 

  - `currency_id`: collateral currency id. 

  - `to`: authorizee account

   
 
### transferLoanFrom(currency_id: `CurrencyId`, from: `AccountId`)
- **interface**: `api.tx.honzon.transferLoanFrom`
- **summary**:   Transfer the whole CDP of `from` under `currency_id` to caller's CDP under the same `currency_id`, caller must have the authrization of `from` for the specific collateral type 

  - `currency_id`: collateral currency id. 

  - `from`: authorizer account

   
 
### unauthorize(currency_id: `CurrencyId`, to: `AccountId`)
- **interface**: `api.tx.honzon.unauthorize`
- **summary**:   Cancel the authorization for `to` under `currency_id` 

  - `currency_id`: collateral currency id. 

  - `to`: authorizee account

   
 
### unauthorizeAll()
- **interface**: `api.tx.honzon.unauthorizeAll`
- **summary**:   Cancel all authorization of caller 

   

___


## honzonCouncil
 
### close(proposal_hash: `Hash`, index: `Compact<ProposalIndex>`, proposal_weight_bound: `Compact<Weight>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.honzonCouncil.close`
- **summary**:   Close a vote that is either approved, disapproved or whose voting period has ended. 

  May be called by any signed account in order to finish voting and close the proposal. 

  If called before the end of the voting period it will only close the vote if it is has enough votes to be approved or disapproved. 

  If called after the end of the voting period abstentions are counted as rejections unless there is a prime member set and the prime member cast an approval. 

  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal. + `length_bound`: The upper bound for the length of the proposal in storage. Checked via                   `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length. 

   
 
### disapproveProposal(proposal_hash: `Hash`)
- **interface**: `api.tx.honzonCouncil.disapproveProposal`
- **summary**:   Disapprove a proposal, close, and remove it from the system, regardless of its current state. 

  Must be called by the Root origin. 

  Parameters: 

  * `proposal_hash`: The hash of the proposal that should be disapproved.

   
 
### execute(proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.honzonCouncil.execute`
- **summary**:   Dispatch a proposal from a member using the `Member` origin. 

  Origin must be a member of the collective. 

   
 
### propose(threshold: `Compact<MemberCount>`, proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.honzonCouncil.propose`
- **summary**:   Add a new proposal to either be voted on or executed directly. 

  Requires the sender to be member. 

  `threshold` determines whether `proposal` is executed directly (`threshold < 2`) or put up for voting. 

   
 
### setMembers(new_members: `Vec<AccountId>`, prime: `Option<AccountId>`, old_count: `MemberCount`)
- **interface**: `api.tx.honzonCouncil.setMembers`
- **summary**:   Set the collective's membership. 

  - `new_members`: The new member list. Be nice to the chain and provide it sorted. 

  - `prime`: The prime member whose vote sets the default.

  - `old_count`: The upper bound for the previous number of members in storage.               Used for weight estimation. 

  Requires root origin. 

  NOTE: Does not enforce the expected `MAX_MEMBERS` limit on the amount of members, but       the weight estimations rely on it to estimate dispatchable weight. 

   
 
### vote(proposal: `Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)
- **interface**: `api.tx.honzonCouncil.vote`
- **summary**:   Add an aye or nay vote for the sender to the given proposal. 

  Requires the sender to be a member. 

   

___


## honzonCouncilMembership
 
### addMember(who: `AccountId`)
- **interface**: `api.tx.honzonCouncilMembership.addMember`
- **summary**:   Add a member `who` to the set. 

  May only be called from `T::AddOrigin`. 
 
### changeKey(new: `AccountId`)
- **interface**: `api.tx.honzonCouncilMembership.changeKey`
- **summary**:   Swap out the sending member for some other key `new`. 

  May only be called from `Signed` origin of a current member. 

  Prime membership is passed from the origin account to `new`, if extant. 
 
### clearPrime()
- **interface**: `api.tx.honzonCouncilMembership.clearPrime`
- **summary**:   Remove the prime member if it exists. 

  May only be called from `T::PrimeOrigin`. 
 
### removeMember(who: `AccountId`)
- **interface**: `api.tx.honzonCouncilMembership.removeMember`
- **summary**:   Remove a member `who` from the set. 

  May only be called from `T::RemoveOrigin`. 
 
### resetMembers(members: `Vec<AccountId>`)
- **interface**: `api.tx.honzonCouncilMembership.resetMembers`
- **summary**:   Change the membership to a new set, disregarding the existing membership. Be nice and pass `members` pre-sorted. 

  May only be called from `T::ResetOrigin`. 
 
### setPrime(who: `AccountId`)
- **interface**: `api.tx.honzonCouncilMembership.setPrime`
- **summary**:   Set the prime member. Must be a current member. 

  May only be called from `T::PrimeOrigin`. 
 
### swapMember(remove: `AccountId`, add: `AccountId`)
- **interface**: `api.tx.honzonCouncilMembership.swapMember`
- **summary**:   Swap out one member `remove` for another `add`. 

  May only be called from `T::SwapOrigin`. 

  Prime membership is *not* passed from `remove` to `add`, if extant. 

___


## indices
 
### claim(index: `AccountIndex`)
- **interface**: `api.tx.indices.claim`
- **summary**:   Assign an previously unassigned index. 

  Payment: `Deposit` is reserved from the sender account. 

  The dispatch origin for this call must be _Signed_. 

  - `index`: the index to be claimed. This must not be in use. 

  Emits `IndexAssigned` if successful. 

   
 
### forceTransfer(new: `AccountId`, index: `AccountIndex`, freeze: `bool`)
- **interface**: `api.tx.indices.forceTransfer`
- **summary**:   Force an index to an account. This doesn't require a deposit. If the index is already held, then any deposit is reimbursed to its current owner. 

  The dispatch origin for this call must be _Root_. 

  - `index`: the index to be (re-)assigned. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.

  Emits `IndexAssigned` if successful. 

   
 
### free(index: `AccountIndex`)
- **interface**: `api.tx.indices.free`
- **summary**:   Free up an index owned by the sender. 

  Payment: Any previous deposit placed for the index is unreserved in the sender account. 

  The dispatch origin for this call must be _Signed_ and the sender must own the index. 

  - `index`: the index to be freed. This must be owned by the sender. 

  Emits `IndexFreed` if successful. 

   
 
### freeze(index: `AccountIndex`)
- **interface**: `api.tx.indices.freeze`
- **summary**:   Freeze an index so it will always point to the sender account. This consumes the deposit. 

  The dispatch origin for this call must be _Signed_ and the signing account must have a non-frozen account `index`. 

  - `index`: the index to be frozen in place. 

  Emits `IndexFrozen` if successful. 

   
 
### transfer(new: `AccountId`, index: `AccountIndex`)
- **interface**: `api.tx.indices.transfer`
- **summary**:   Assign an index already owned by the sender to another account. The balance reservation is effectively transferred to the new account. 

  The dispatch origin for this call must be _Signed_. 

  - `index`: the index to be re-assigned. This must be owned by the sender. 

  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.

  Emits `IndexAssigned` if successful. 

   

___


## multisig
 
### approveAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId>`, maybe_timepoint: `Option<Timepoint>`, call_hash: `[u8;32]`, max_weight: `Weight`)
- **interface**: `api.tx.multisig.approveAsMulti`
- **summary**:   Register approval for a dispatch to be made from a deterministic composite account if approved by a total of `threshold - 1` of `other_signatories`. 

  Payment: `DepositBase` will be reserved if this is the first approval, plus `threshold` times `DepositFactor`. It is returned once this dispatch happens or is cancelled. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it isnot the first approval, then it must be `Some`, with the timepoint (block number and transaction index) of the first approval transaction. 

  - `call_hash`: The hash of the call to be executed.

  NOTE: If this is the final approval, you will want to use `as_multi` instead. 

   
 
### asMulti(threshold: `u16`, other_signatories: `Vec<AccountId>`, maybe_timepoint: `Option<Timepoint>`, call: `Bytes`, store_call: `bool`, max_weight: `Weight`)
- **interface**: `api.tx.multisig.asMulti`
- **summary**:   Register approval for a dispatch to be made from a deterministic composite account if approved by a total of `threshold - 1` of `other_signatories`. 

  If there are enough, then dispatch the call. 

  Payment: `DepositBase` will be reserved if this is the first approval, plus `threshold` times `DepositFactor`. It is returned once this dispatch happens or is cancelled. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it isnot the first approval, then it must be `Some`, with the timepoint (block number and transaction index) of the first approval transaction. 

  - `call`: The call to be executed.

  NOTE: Unless this is the final approval, you will generally want to use `approve_as_multi` instead, since it only requires a hash of the call. 

  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise on success, result is `Ok` and the result from the interior call, if it was executed, may be found in the deposited `MultisigExecuted` event. 

   
 
### asMultiThreshold1(other_signatories: `Vec<AccountId>`, call: `Call`)
- **interface**: `api.tx.multisig.asMultiThreshold1`
- **summary**:   Immediately dispatch a multi-signature call using a single approval from the caller. 

  The dispatch origin for this call must be _Signed_. 

  - `other_signatories`: The accounts (other than the sender) who are part of the multi-signature, but do not participate in the approval process. 

  - `call`: The call to be executed.

  Result is equivalent to the dispatched result. 

   
 
### cancelAsMulti(threshold: `u16`, other_signatories: `Vec<AccountId>`, timepoint: `Timepoint`, call_hash: `[u8;32]`)
- **interface**: `api.tx.multisig.cancelAsMulti`
- **summary**:   Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously for this operation will be unreserved on success. 

  The dispatch origin for this call must be _Signed_. 

  - `threshold`: The total number of approvals for this dispatch before it is executed. 

  - `other_signatories`: The accounts (other than the sender) who can approve thisdispatch. May not be empty. 

  - `timepoint`: The timepoint (block number and transaction index) of the first approvaltransaction for this dispatch. 

  - `call_hash`: The hash of the call to be executed.

   

___


## nomineesElection
 
### bond(amount: `Compact<Balance>`)
- **interface**: `api.tx.nomineesElection.bond`
 
### chill()
- **interface**: `api.tx.nomineesElection.chill`
 
### nominate(targets: `Vec<PolkadotAccountId>`)
- **interface**: `api.tx.nomineesElection.nominate`
 
### rebond(amount: `Balance`)
- **interface**: `api.tx.nomineesElection.rebond`
 
### unbond(amount: `Balance`)
- **interface**: `api.tx.nomineesElection.unbond`
 
### withdrawUnbonded()
- **interface**: `api.tx.nomineesElection.withdrawUnbonded`

___


## operatorMembership
 
### addMember(who: `AccountId`)
- **interface**: `api.tx.operatorMembership.addMember`
- **summary**:   Add a member `who` to the set. 

  May only be called from `T::AddOrigin`. 
 
### changeKey(new: `AccountId`)
- **interface**: `api.tx.operatorMembership.changeKey`
- **summary**:   Swap out the sending member for some other key `new`. 

  May only be called from `Signed` origin of a current member. 

  Prime membership is passed from the origin account to `new`, if extant. 
 
### clearPrime()
- **interface**: `api.tx.operatorMembership.clearPrime`
- **summary**:   Remove the prime member if it exists. 

  May only be called from `T::PrimeOrigin`. 
 
### removeMember(who: `AccountId`)
- **interface**: `api.tx.operatorMembership.removeMember`
- **summary**:   Remove a member `who` from the set. 

  May only be called from `T::RemoveOrigin`. 
 
### resetMembers(members: `Vec<AccountId>`)
- **interface**: `api.tx.operatorMembership.resetMembers`
- **summary**:   Change the membership to a new set, disregarding the existing membership. Be nice and pass `members` pre-sorted. 

  May only be called from `T::ResetOrigin`. 
 
### setPrime(who: `AccountId`)
- **interface**: `api.tx.operatorMembership.setPrime`
- **summary**:   Set the prime member. Must be a current member. 

  May only be called from `T::PrimeOrigin`. 
 
### swapMember(remove: `AccountId`, add: `AccountId`)
- **interface**: `api.tx.operatorMembership.swapMember`
- **summary**:   Swap out one member `remove` for another `add`. 

  May only be called from `T::SwapOrigin`. 

  Prime membership is *not* passed from `remove` to `add`, if extant. 

___


## oracle
 
### feedValues(values: `Vec<(OracleKey,OracleValue)>`, index: `Compact<u32>`, _block: `BlockNumber`, _signature: `Signature`)
- **interface**: `api.tx.oracle.feedValues`
- **summary**:   Feed the external value. 

  Require unsigned. However a valid signature signed by session key is required along with payload. 
 
### setSessionKey(key: `AuthorityId`)
- **interface**: `api.tx.oracle.setSessionKey`
- **summary**:   Update the session key. 

___


## palletTreasury
 
### approveProposal(proposal_id: `Compact<ProposalIndex>`)
- **interface**: `api.tx.palletTreasury.approveProposal`
- **summary**:   Approve a proposal. At a later time, the proposal will be allocated to the beneficiary and the original deposit will be returned. 

  May only be called from `T::ApproveOrigin`. 

   
 
### closeTip(hash: `Hash`)
- **interface**: `api.tx.palletTreasury.closeTip`
- **summary**:   Close and payout a tip. 

  The dispatch origin for this call must be _Signed_. 

  The tip identified by `hash` must have finished its countdown period. 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the original tip `reason` and the beneficiary account ID. 

   
 
### proposeSpend(value: `Compact<BalanceOf>`, beneficiary: `LookupSource`)
- **interface**: `api.tx.palletTreasury.proposeSpend`
- **summary**:   Put forward a suggestion for spending. A deposit proportional to the value is reserved and slashed if the proposal is rejected. It is returned once the proposal is awarded. 

   
 
### rejectProposal(proposal_id: `Compact<ProposalIndex>`)
- **interface**: `api.tx.palletTreasury.rejectProposal`
- **summary**:   Reject a proposed spend. The original deposit will be slashed. 

  May only be called from `T::RejectOrigin`. 

   
 
### reportAwesome(reason: `Bytes`, who: `AccountId`)
- **interface**: `api.tx.palletTreasury.reportAwesome`
- **summary**:   Report something `reason` that deserves a tip and claim any eventual the finder's fee. 

  The dispatch origin for this call must be _Signed_. 

  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as `TipReportDepositPerByte` for each byte in `reason`. 

  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be   a UTF-8-encoded URL. 

  - `who`: The account which should be credited for the tip.

  Emits `NewTip` if successful. 

   
 
### retractTip(hash: `Hash`)
- **interface**: `api.tx.palletTreasury.retractTip`
- **summary**:   Retract a prior tip-report from `report_awesome`, and cancel the process of tipping. 

  If successful, the original deposit will be unreserved. 

  The dispatch origin for this call must be _Signed_ and the tip identified by `hash` must have been reported by the signing account through `report_awesome` (and not through `tip_new`). 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the original tip `reason` and the beneficiary account ID. 

  Emits `TipRetracted` if successful. 

   
 
### tip(hash: `Hash`, tip_value: `BalanceOf`)
- **interface**: `api.tx.palletTreasury.tip`
- **summary**:   Declare a tip value for an already-open tip. 

  The dispatch origin for this call must be _Signed_ and the signing account must be a member of the `Tippers` set. 

  - `hash`: The identity of the open tip for which a tip value is declared. This is formed   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary   account ID. 

  - `tip_value`: The amount of tip that the sender would like to give. The median tip  value of active tippers will be given to the `who`. 

  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period has started. 

   
 
### tipNew(reason: `Bytes`, who: `AccountId`, tip_value: `BalanceOf`)
- **interface**: `api.tx.palletTreasury.tipNew`
- **summary**:   Give a tip for something new; no finder's fee will be taken. 

  The dispatch origin for this call must be _Signed_ and the signing account must be a member of the `Tippers` set. 

  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be   a UTF-8-encoded URL. 

  - `who`: The account which should be credited for the tip.

  - `tip_value`: The amount of tip that the sender would like to give. The median tip  value of active tippers will be given to the `who`. 

  Emits `NewTip` if successful. 

   

___


## polkadotBridge
 
### forceEra(at: `BlockNumber`)
- **interface**: `api.tx.polkadotBridge.forceEra`
 
### setMockRewardRate(mock_reward_rate: `Option<Rate>`)
- **interface**: `api.tx.polkadotBridge.setMockRewardRate`
 
### simualteReceive(to: `AccountId`, amount: `Balance`)
- **interface**: `api.tx.polkadotBridge.simualteReceive`
 
### simulateBond(amount: `Balance`)
- **interface**: `api.tx.polkadotBridge.simulateBond`
 
### simulateRedeem(_to: `PolkadotAccountId`, amount: `Balance`)
- **interface**: `api.tx.polkadotBridge.simulateRedeem`
 
### simulateSlash(amount: `Balance`)
- **interface**: `api.tx.polkadotBridge.simulateSlash`
 
### simulateUnbond(amount: `Balance`)
- **interface**: `api.tx.polkadotBridge.simulateUnbond`
 
### simulateWithdrawUnbonded()
- **interface**: `api.tx.polkadotBridge.simulateWithdrawUnbonded`

___


## prices
 
### lockPrice(currency_id: `CurrencyId`)
- **interface**: `api.tx.prices.lockPrice`
- **summary**:   Lock the price and feed it to system. 

  The dispatch origin of this call must be `LockOrigin`. 

  - `currency_id`: currency type. 
 
### unlockPrice(currency_id: `CurrencyId`)
- **interface**: `api.tx.prices.unlockPrice`
- **summary**:   Unlock the price and get the price from `PriceProvider` again 

  The dispatch origin of this call must be `LockOrigin`. 

  - `currency_id`: currency type. 

___


## recovery
 
### asRecovered(account: `AccountId`, call: `Call`)
- **interface**: `api.tx.recovery.asRecovered`
- **summary**:   Send a call through a recovered account. 

  The dispatch origin for this call must be _Signed_ and registered to be able to make calls on behalf of the recovered account. 

  Parameters: 

  - `account`: The recovered account you want to make a call on-behalf-of.

  - `call`: The call you want to make with the recovered account.

   
 
### cancelRecovered(account: `AccountId`)
- **interface**: `api.tx.recovery.cancelRecovered`
- **summary**:   Cancel the ability to use `as_recovered` for `account`. 

  The dispatch origin for this call must be _Signed_ and registered to be able to make calls on behalf of the recovered account. 

  Parameters: 

  - `account`: The recovered account you are able to call on-behalf-of.

   
 
### claimRecovery(account: `AccountId`)
- **interface**: `api.tx.recovery.claimRecovery`
- **summary**:   Allow a successful rescuer to claim their recovered account. 

  The dispatch origin for this call must be _Signed_ and must be a "rescuer" who has successfully completed the account recovery process: collected `threshold` or more vouches, waited `delay_period` blocks since initiation. 

  Parameters: 

  - `account`: The lost account that you want to claim has been successfully  recovered by you. 

   
 
### closeRecovery(rescuer: `AccountId`)
- **interface**: `api.tx.recovery.closeRecovery`
- **summary**:   As the controller of a recoverable account, close an active recovery process for your account. 

  Payment: By calling this function, the recoverable account will receive the recovery deposit `RecoveryDeposit` placed by the rescuer. 

  The dispatch origin for this call must be _Signed_ and must be a recoverable account with an active recovery process for it. 

  Parameters: 

  - `rescuer`: The account trying to rescue this recoverable account.

   
 
### createRecovery(friends: `Vec<AccountId>`, threshold: `u16`, delay_period: `BlockNumber`)
- **interface**: `api.tx.recovery.createRecovery`
- **summary**:   Create a recovery configuration for your account. This makes your account recoverable. 

  Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance will be reserved for storing the recovery configuration. This deposit is returned in full when the user calls `remove_recovery`. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `friends`: A list of friends you trust to vouch for recovery attempts.  Should be ordered and contain no duplicate values. 

  - `threshold`: The number of friends that must vouch for a recovery attempt  before the account can be recovered. Should be less than or equal to   the length of the list of friends. 

  - `delay_period`: The number of blocks after a recovery attempt is initialized  that needs to pass before the account can be recovered. 

   
 
### initiateRecovery(account: `AccountId`)
- **interface**: `api.tx.recovery.initiateRecovery`
- **summary**:   Initiate the process for recovering a recoverable account. 

  Payment: `RecoveryDeposit` balance will be reserved for initiating the recovery process. This deposit will always be repatriated to the account trying to be recovered. See `close_recovery`. 

  The dispatch origin for this call must be _Signed_. 

  Parameters: 

  - `account`: The lost account that you want to recover. This account  needs to be recoverable (i.e. have a recovery configuration). 

   
 
### removeRecovery()
- **interface**: `api.tx.recovery.removeRecovery`
- **summary**:   Remove the recovery process for your account. Recovered accounts are still accessible. 

  NOTE: The user must make sure to call `close_recovery` on all active recovery attempts before calling this function else it will fail. 

  Payment: By calling this function the recoverable account will unreserve their recovery configuration deposit. (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends) 

  The dispatch origin for this call must be _Signed_ and must be a recoverable account (i.e. has a recovery configuration). 

   
 
### setRecovered(lost: `AccountId`, rescuer: `AccountId`)
- **interface**: `api.tx.recovery.setRecovered`
- **summary**:   Allow ROOT to bypass the recovery process and set an a rescuer account for a lost account directly. 

  The dispatch origin for this call must be _ROOT_. 

  Parameters: 

  - `lost`: The "lost account" to be recovered.

  - `rescuer`: The "rescuer account" which can call as the lost account.

   
 
### vouchRecovery(lost: `AccountId`, rescuer: `AccountId`)
- **interface**: `api.tx.recovery.vouchRecovery`
- **summary**:   Allow a "friend" of a recoverable account to vouch for an active recovery process for that account. 

  The dispatch origin for this call must be _Signed_ and must be a "friend" for the recoverable account. 

  Parameters: 

  - `lost`: The lost account that you want to recover.

  - `rescuer`: The account trying to rescue the lost account that you  want to vouch for. 

  The combination of these two parameters must point to an active recovery process. 

   

___


## renVmBridge
 
### burn(to: `[u8;20]`, amount: `Compact<Balance>`)
- **interface**: `api.tx.renVmBridge.burn`
- **summary**:   Allow a user to burn assets. 
 
### mint(p_hash: `[u8;32]`, amount: `Compact<Balance>`, n_hash: `[u8;32]`, sig: `EcdsaSignature`)
- **interface**: `api.tx.renVmBridge.mint`
- **summary**:   Allow a user to mint if they have a valid signature from RenVM. 

___


## scheduleUpdate
 
### cancelDelayedDispatch(at: `BlockNumber`, id: `DispatchId`)
- **interface**: `api.tx.scheduleUpdate.cancelDelayedDispatch`
- **summary**:   Cancel schedule_update 
 
### scheduleDispatch(call: `CallOf`, when: `DelayedDispatchTime`)
- **interface**: `api.tx.scheduleUpdate.scheduleDispatch`
- **summary**:   Add schedule_update at block_number 

___


## session
 
### purgeKeys()
- **interface**: `api.tx.session.purgeKeys`
- **summary**:   Removes any session key(s) of the function caller. This doesn't take effect until the next session. 

  The dispatch origin of this function must be signed. 

   
 
### setKeys(keys: `Keys`, proof: `Bytes`)
- **interface**: `api.tx.session.setKeys`
- **summary**:   Sets the session key(s) of the function caller to `keys`. Allows an account to set its session key prior to becoming a validator. This doesn't take effect until the next session. 

  The dispatch origin of this function must be signed. 

   

___


## staking
 
### bond(controller: `LookupSource`, value: `Compact<BalanceOf>`, payee: `RewardDestination`)
- **interface**: `api.tx.staking.bond`
- **summary**:   Take the origin account as a stash and lock up `value` of its balance. `controller` will be the account that controls it. 

  `value` must be more than the `minimum_balance` specified by `T::Currency`. 

  The dispatch origin for this call must be _Signed_ by the stash account. 

  Emits `Bonded`. 

   
 
### bondExtra(max_additional: `Compact<BalanceOf>`)
- **interface**: `api.tx.staking.bondExtra`
- **summary**:   Add some extra amount that have appeared in the stash `free_balance` into the balance up for staking. 

  Use this if there are additional funds in your stash account that you wish to bond. Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount that can be added. 

  The dispatch origin for this call must be _Signed_ by the stash, not the controller and it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Bonded`. 

   
 
### cancelDeferredSlash(era: `EraIndex`, slash_indices: `Vec<u32>`)
- **interface**: `api.tx.staking.cancelDeferredSlash`
- **summary**:   Cancel enactment of a deferred slash. 

  Can be called by the `T::SlashCancelOrigin`. 

  Parameters: era and indices of the slashes for that era to kill. 

   
 
### chill()
- **interface**: `api.tx.staking.chill`
- **summary**:   Declare no desire to either validate or nominate. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

   
 
### forceNewEra()
- **interface**: `api.tx.staking.forceNewEra`
- **summary**:   Force there to be a new era at the end of the next session. After this, it will be reset to normal (non-forced) behaviour. 

  The dispatch origin must be Root. 

   
 
### forceNewEraAlways()
- **interface**: `api.tx.staking.forceNewEraAlways`
- **summary**:   Force there to be a new era at the end of sessions indefinitely. 

  The dispatch origin must be Root. 

   
 
### forceNoEras()
- **interface**: `api.tx.staking.forceNoEras`
- **summary**:   Force there to be no new eras indefinitely. 

  The dispatch origin must be Root. 

   
 
### forceUnstake(stash: `AccountId`, num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.forceUnstake`
- **summary**:   Force a current staker to become completely unstaked, immediately. 

  The dispatch origin must be Root. 

   
 
### increaseValidatorCount(additional: `Compact<u32>`)
- **interface**: `api.tx.staking.increaseValidatorCount`
- **summary**:   Increments the ideal number of validators. 

  The dispatch origin must be Root. 

   
 
### nominate(targets: `Vec<LookupSource>`)
- **interface**: `api.tx.staking.nominate`
- **summary**:   Declare the desire to nominate `targets` for the origin controller. 

  Effects will be felt at the beginning of the next era. This can only be called when [`EraElectionStatus`] is `Closed`. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

   
 
### payoutStakers(validator_stash: `AccountId`, era: `EraIndex`)
- **interface**: `api.tx.staking.payoutStakers`
- **summary**:   Pay out all the stakers behind a single validator for a single era. 

  - `validator_stash` is the stash account of the validator. Their nominators, up to   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards. 

  - `era` may be any era between `[current_era - history_depth; current_era]`.

  The origin of this call must be _Signed_. Any account can call this function, even if it is not one of the stakers. 

  This can only be called when [`EraElectionStatus`] is `Closed`. 

   
 
### reapStash(stash: `AccountId`, num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.reapStash`
- **summary**:   Remove all data structure concerning a staker/stash once its balance is zero. This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone and the target `stash` must have no funds left. 

  This can be called from any origin. 

  - `stash`: The stash account to reap. Its balance must be zero. 

   
 
### rebond(value: `Compact<BalanceOf>`)
- **interface**: `api.tx.staking.rebond`
- **summary**:   Rebond a portion of the stash scheduled to be unlocked. 

  The dispatch origin must be signed by the controller, and it can be only called when [`EraElectionStatus`] is `Closed`. 

   
 
### scaleValidatorCount(factor: `Percent`)
- **interface**: `api.tx.staking.scaleValidatorCount`
- **summary**:   Scale up the ideal number of validators by a factor. 

  The dispatch origin must be Root. 

   
 
### setController(controller: `LookupSource`)
- **interface**: `api.tx.staking.setController`
- **summary**:   (Re-)set the controller of a stash. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the stash, not the controller. 

   
 
### setHistoryDepth(new_history_depth: `Compact<EraIndex>`, _era_items_deleted: `Compact<u32>`)
- **interface**: `api.tx.staking.setHistoryDepth`
- **summary**:   Set `HistoryDepth` value. This function will delete any history information when `HistoryDepth` is reduced. 

  Parameters: 

  - `new_history_depth`: The new history depth you would like to set.

  - `era_items_deleted`: The number of items that will be deleted by this dispatch.   This should report all the storage items that will be deleted by clearing old    era history. Needed to report an accurate weight for the dispatch. Trusted by    `Root` to report an accurate number. 

  Origin must be root. 

   
 
### setInvulnerables(validators: `Vec<AccountId>`)
- **interface**: `api.tx.staking.setInvulnerables`
- **summary**:   Set the validators who cannot be slashed (if any). 

  The dispatch origin must be Root. 

   
 
### setPayee(payee: `RewardDestination`)
- **interface**: `api.tx.staking.setPayee`
- **summary**:   (Re-)set the payment target for a controller. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. 

   
 
### setValidatorCount(new: `Compact<u32>`)
- **interface**: `api.tx.staking.setValidatorCount`
- **summary**:   Sets the ideal number of validators. 

  The dispatch origin must be Root. 

   
 
### submitElectionSolution(winners: `Vec<ValidatorIndex>`, compact: `CompactAssignments`, score: `ElectionScore`, era: `EraIndex`, size: `ElectionSize`)
- **interface**: `api.tx.staking.submitElectionSolution`
- **summary**:   Submit an election result to the chain. If the solution: 

  1. is valid. 2. has a better score than a potentially existing solution on chain. 

  then, it will be _put_ on chain. 

  A solution consists of two pieces of data: 

  1. `winners`: a flat vector of all the winners of the round. 2. `assignments`: the compact version of an assignment vector that encodes the edge    weights. 

  Both of which may be computed using _phragmen_, or any other algorithm. 

  Additionally, the submitter must provide: 

  - The `score` that they claim their solution has. 

  Both validators and nominators will be represented by indices in the solution. The indices should respect the corresponding types ([`ValidatorIndex`] and [`NominatorIndex`]). Moreover, they should be valid when used to index into [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the solution to be rejected. These two storage items are set during the election window and may be used to determine the indices. 

  A solution is valid if: 

  0. It is submitted when [`EraElectionStatus`] is `Open`. 1. Its claimed score is equal to the score computed on-chain. 2. Presents the correct number of winners. 3. All indexes must be value according to the snapshot vectors. All edge values must    also be correct and should not overflow the granularity of the ratio type (i.e. 256    or billion). 4. For each edge, all targets are actually nominated by the voter. 5. Has correct self-votes. 

  A solutions score is consisted of 3 parameters: 

  1. `min { support.total }` for each support of a winner. This value should be maximized. 2. `sum { support.total }` for each support of a winner. This value should be minimized. 3. `sum { support.total^2 }` for each support of a winner. This value should be    minimized (to ensure less variance) 

   
 
### submitElectionSolutionUnsigned(winners: `Vec<ValidatorIndex>`, compact: `CompactAssignments`, score: `ElectionScore`, era: `EraIndex`, size: `ElectionSize`)
- **interface**: `api.tx.staking.submitElectionSolutionUnsigned`
- **summary**:   Unsigned version of `submit_election_solution`. 

  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions from the local node to be included. In other words, only the block author can include a transaction in the block. 

   
 
### unbond(value: `Compact<BalanceOf>`)
- **interface**: `api.tx.staking.unbond`
- **summary**:   Schedule a portion of the stash to be unlocked ready for transfer out after the bond period ends. If this leaves an amount actively bonded less than T::Currency::minimum_balance(), then it is increased to the full amount. 

  Once the unlock period is done, you can call `withdraw_unbonded` to actually move the funds out of management ready for transfer. 

  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`) can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need to be called first to remove some of the chunks (if possible). 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Unbonded`. 

  See also [`Call::withdraw_unbonded`]. 

   
 
### validate(prefs: `ValidatorPrefs`)
- **interface**: `api.tx.staking.validate`
- **summary**:   Declare the desire to validate for the origin controller. 

  Effects will be felt at the beginning of the next era. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

   
 
### withdrawUnbonded(num_slashing_spans: `u32`)
- **interface**: `api.tx.staking.withdrawUnbonded`
- **summary**:   Remove any unlocked chunks from the `unlocking` queue from our management. 

  This essentially frees up that balance to be used by the stash account to do whatever it wants. 

  The dispatch origin for this call must be _Signed_ by the controller, not the stash. And, it can be only called when [`EraElectionStatus`] is `Closed`. 

  Emits `Withdrawn`. 

  See also [`Call::unbond`]. 

   

___


## sudo
 
### setKey(new: `LookupSource`)
- **interface**: `api.tx.sudo.setKey`
- **summary**:   Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key. 

  The dispatch origin for this call must be _Signed_. 

   
 
### sudo(call: `Call`)
- **interface**: `api.tx.sudo.sudo`
- **summary**:   Authenticates the sudo key and dispatches a function call with `Root` origin. 

  The dispatch origin for this call must be _Signed_. 

   
 
### sudoAs(who: `LookupSource`, call: `Call`)
- **interface**: `api.tx.sudo.sudoAs`
- **summary**:   Authenticates the sudo key and dispatches a function call with `Signed` origin from a given account. 

  The dispatch origin for this call must be _Signed_. 

   
 
### sudoUncheckedWeight(call: `Call`, _weight: `Weight`)
- **interface**: `api.tx.sudo.sudoUncheckedWeight`
- **summary**:   Authenticates the sudo key and dispatches a function call with `Root` origin. This function does not check the weight of the call, and instead allows the Sudo user to specify the weight of the call. 

  The dispatch origin for this call must be _Signed_. 

   

___


## system
 
### fillBlock(_ratio: `Perbill`)
- **interface**: `api.tx.system.fillBlock`
- **summary**:   A dispatch that will fill the block weight up to the given ratio. 
 
### killPrefix(prefix: `Key`, _subkeys: `u32`)
- **interface**: `api.tx.system.killPrefix`
- **summary**:   Kill all storage items with a key that starts with the given prefix. 

  **NOTE:** We rely on the Root origin to provide us the number of subkeys under the prefix we are removing to accurately calculate the weight of this function. 

   
 
### killStorage(keys: `Vec<Key>`)
- **interface**: `api.tx.system.killStorage`
- **summary**:   Kill some items from storage. 

   
 
### remark(_remark: `Bytes`)
- **interface**: `api.tx.system.remark`
- **summary**:   Make some on-chain remark. 

   
 
### setChangesTrieConfig(changes_trie_config: `Option<ChangesTrieConfiguration>`)
- **interface**: `api.tx.system.setChangesTrieConfig`
- **summary**:   Set the new changes trie configuration. 

   
 
### setCode(code: `Bytes`)
- **interface**: `api.tx.system.setCode`
- **summary**:   Set the new runtime code. 

   
 
### setCodeWithoutChecks(code: `Bytes`)
- **interface**: `api.tx.system.setCodeWithoutChecks`
- **summary**:   Set the new runtime code without doing any checks of the given `code`. 

   
 
### setHeapPages(pages: `u64`)
- **interface**: `api.tx.system.setHeapPages`
- **summary**:   Set the number of pages in the WebAssembly environment's heap. 

   
 
### setStorage(items: `Vec<KeyValue>`)
- **interface**: `api.tx.system.setStorage`
- **summary**:   Set some items of storage. 

   
 
### suicide()
- **interface**: `api.tx.system.suicide`
- **summary**:   Kill the sending account, assuming there are no references outstanding and the composite data is equal to its default value. 

   

___


## technicalCouncil
 
### close(proposal_hash: `Hash`, index: `Compact<ProposalIndex>`, proposal_weight_bound: `Compact<Weight>`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCouncil.close`
- **summary**:   Close a vote that is either approved, disapproved or whose voting period has ended. 

  May be called by any signed account in order to finish voting and close the proposal. 

  If called before the end of the voting period it will only close the vote if it is has enough votes to be approved or disapproved. 

  If called after the end of the voting period abstentions are counted as rejections unless there is a prime member set and the prime member cast an approval. 

  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal. + `length_bound`: The upper bound for the length of the proposal in storage. Checked via                   `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length. 

   
 
### disapproveProposal(proposal_hash: `Hash`)
- **interface**: `api.tx.technicalCouncil.disapproveProposal`
- **summary**:   Disapprove a proposal, close, and remove it from the system, regardless of its current state. 

  Must be called by the Root origin. 

  Parameters: 

  * `proposal_hash`: The hash of the proposal that should be disapproved.

   
 
### execute(proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCouncil.execute`
- **summary**:   Dispatch a proposal from a member using the `Member` origin. 

  Origin must be a member of the collective. 

   
 
### propose(threshold: `Compact<MemberCount>`, proposal: `Proposal`, length_bound: `Compact<u32>`)
- **interface**: `api.tx.technicalCouncil.propose`
- **summary**:   Add a new proposal to either be voted on or executed directly. 

  Requires the sender to be member. 

  `threshold` determines whether `proposal` is executed directly (`threshold < 2`) or put up for voting. 

   
 
### setMembers(new_members: `Vec<AccountId>`, prime: `Option<AccountId>`, old_count: `MemberCount`)
- **interface**: `api.tx.technicalCouncil.setMembers`
- **summary**:   Set the collective's membership. 

  - `new_members`: The new member list. Be nice to the chain and provide it sorted. 

  - `prime`: The prime member whose vote sets the default.

  - `old_count`: The upper bound for the previous number of members in storage.               Used for weight estimation. 

  Requires root origin. 

  NOTE: Does not enforce the expected `MAX_MEMBERS` limit on the amount of members, but       the weight estimations rely on it to estimate dispatchable weight. 

   
 
### vote(proposal: `Hash`, index: `Compact<ProposalIndex>`, approve: `bool`)
- **interface**: `api.tx.technicalCouncil.vote`
- **summary**:   Add an aye or nay vote for the sender to the given proposal. 

  Requires the sender to be a member. 

   

___


## technicalCouncilMembership
 
### addMember(who: `AccountId`)
- **interface**: `api.tx.technicalCouncilMembership.addMember`
- **summary**:   Add a member `who` to the set. 

  May only be called from `T::AddOrigin`. 
 
### changeKey(new: `AccountId`)
- **interface**: `api.tx.technicalCouncilMembership.changeKey`
- **summary**:   Swap out the sending member for some other key `new`. 

  May only be called from `Signed` origin of a current member. 

  Prime membership is passed from the origin account to `new`, if extant. 
 
### clearPrime()
- **interface**: `api.tx.technicalCouncilMembership.clearPrime`
- **summary**:   Remove the prime member if it exists. 

  May only be called from `T::PrimeOrigin`. 
 
### removeMember(who: `AccountId`)
- **interface**: `api.tx.technicalCouncilMembership.removeMember`
- **summary**:   Remove a member `who` from the set. 

  May only be called from `T::RemoveOrigin`. 
 
### resetMembers(members: `Vec<AccountId>`)
- **interface**: `api.tx.technicalCouncilMembership.resetMembers`
- **summary**:   Change the membership to a new set, disregarding the existing membership. Be nice and pass `members` pre-sorted. 

  May only be called from `T::ResetOrigin`. 
 
### setPrime(who: `AccountId`)
- **interface**: `api.tx.technicalCouncilMembership.setPrime`
- **summary**:   Set the prime member. Must be a current member. 

  May only be called from `T::PrimeOrigin`. 
 
### swapMember(remove: `AccountId`, add: `AccountId`)
- **interface**: `api.tx.technicalCouncilMembership.swapMember`
- **summary**:   Swap out one member `remove` for another `add`. 

  May only be called from `T::SwapOrigin`. 

  Prime membership is *not* passed from `remove` to `add`, if extant. 

___


## timestamp
 
### set(now: `Compact<Moment>`)
- **interface**: `api.tx.timestamp.set`
- **summary**:   Set the current time. 

  This call should be invoked exactly once per block. It will panic at the finalization phase, if this call hasn't been invoked by that time. 

  The timestamp should be greater than the previous one by the amount specified by `MinimumPeriod`. 

  The dispatch origin for this call must be `Inherent`. 

   

___


## utility
 
### asLimitedSub(index: `u16`, call: `Call`)
- **interface**: `api.tx.utility.asLimitedSub`
- **summary**:   Send a call through an indexed pseudonym of the sender. 

  Filter from origin are passed along. The call will be dispatched with an origin which use the same filter as the origin of this call. 

  NOTE: If you need to ensure that any account-based filtering is not honored (i.e. because you expect `proxy` to have been used prior in the call stack and you do not want the call restrictions to apply to any sub-accounts), then use `as_sub` instead. 

  The dispatch origin for this call must be _Signed_. 

   
 
### asSub(index: `u16`, call: `Call`)
- **interface**: `api.tx.utility.asSub`
- **summary**:   Send a call through an indexed pseudonym of the sender. 

  NOTE: If you need to ensure that any account-based filtering is honored (i.e. because you expect `proxy` to have been used prior in the call stack and you want it to apply to any sub-accounts), then use `as_limited_sub` instead. 

  The dispatch origin for this call must be _Signed_. 

   
 
### batch(calls: `Vec<Call>`)
- **interface**: `api.tx.utility.batch`
- **summary**:   Send a batch of dispatch calls. 

  May be called from any origin. 

  - `calls`: The calls to be dispatched from the same origin. 

  If origin is root then call are dispatch without checking origin filter. (This includes bypassing `frame_system::Trait::BaseCallFilter`). 

   

  This will return `Ok` in all circumstances. To determine the success of the batch, an event is deposited. If a call failed and the batch was interrupted, then the `BatchInterrupted` event is deposited, along with the number of successful calls made and the error of the failed call. If all were successful, then the `BatchCompleted` event is deposited. 

___


## vesting
 
### claim()
- **interface**: `api.tx.vesting.claim`
- **summary**:    
 
### updateVestingSchedules(who: `LookupSource`, vesting_schedules: `Vec<VestingScheduleOf>`)
- **interface**: `api.tx.vesting.updateVestingSchedules`
- **summary**:    
 
### vestedTransfer(dest: `LookupSource`, schedule: `VestingScheduleOf`)
- **interface**: `api.tx.vesting.vestedTransfer`
- **summary**:    
