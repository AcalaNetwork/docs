---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[acalaOracle](#acalaoracle)**

- **[acalaTreasury](#acalatreasury)**

- **[auction](#auction)**

- **[auctionManager](#auctionmanager)**

- **[authority](#authority)**

- **[authorship](#authorship)**

- **[balances](#balances)**

- **[bandOracle](#bandoracle)**

- **[cdpEngine](#cdpengine)**

- **[cdpTreasury](#cdptreasury)**

- **[contracts](#contracts)**

- **[currencies](#currencies)**

- **[dex](#dex)**

- **[electionsPhragmen](#electionsphragmen)**

- **[emergencyShutdown](#emergencyshutdown)**

- **[eVm](#evm)**

- **[evmAccounts](#evmaccounts)**

- **[eVmBridge](#evmbridge)**

- **[generalCouncil](#generalcouncil)**

- **[graduallyUpdate](#graduallyupdate)**

- **[grandpa](#grandpa)**

- **[homaCouncil](#homacouncil)**

- **[honzon](#honzon)**

- **[honzonCouncil](#honzoncouncil)**

- **[incentives](#incentives)**

- **[loans](#loans)**

- **[multisig](#multisig)**

- **[nFt](#nft)**

- **[nomineesElection](#nomineeselection)**

- **[polkadotBridge](#polkadotbridge)**

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

- **[tokens](#tokens)**

- **[vesting](#vesting)**


___


## acalaOracle
 
### AlreadyFeeded
- **summary**:   Feeder has already feeded at this block 
 
### NoPermission
- **summary**:   Sender does not have permission 

___


## acalaTreasury
 
### AlreadyKnown
- **summary**:   The tip was already found/started. 
 
### InsufficientProposersBalance
- **summary**:   Proposer's balance is too low. 
 
### InvalidFee
- **summary**:   Invalid bounty fee. 
 
### InvalidIndex
- **summary**:   No proposal or bounty at that index. 
 
### InvalidValue
- **summary**:   Invalid bounty value. 
 
### NotFinder
- **summary**:   The account attempting to retract the tip is not the finder of the tip. 
 
### PendingPayout
- **summary**:   A bounty payout is pending. To cancel the bounty, you must unassign and slash the curator. 
 
### Premature
- **summary**:   The tip cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **summary**:   The reason given is just too big. 
 
### RequireCurator
- **summary**:   Require bounty curator. 
 
### StillOpen
- **summary**:   The tip cannot be claimed/closed because there are not enough tippers yet. 
 
### UnexpectedStatus
- **summary**:   The bounty status is unexpected. 
 
### UnknownTip
- **summary**:   The tip hash is unknown. 

___


## auction
 
### AuctionNotExist
 
### AuctionNotStarted
 
### BidNotAccepted
 
### InvalidBidPrice
 
### NoAvailableAuctionId

___


## auctionManager
 
### AuctionNotExists
- **summary**:   The auction dose not exist 
 
### InReverseStage
- **summary**:   The collateral auction is in reverse stage now 
 
### InvalidAmount
- **summary**:   Invalid input amount 
 
### InvalidBidPrice
- **summary**:   Bid price is invalid 
 
### InvalidFeedPrice
- **summary**:   Feed price is invalid 
 
### MustAfterShutdown
- **summary**:   Must after system shutdown 

___


## authority
 
### FailedToCancel
- **summary**:   Failed to cancel a task. 
 
### FailedToDelay
- **summary**:   Failed to delay a task. 
 
### FailedToFastTrack
- **summary**:   Failed to fast track a task. 
 
### FailedToSchedule
- **summary**:   Failed to schedule a task. 
 
### Overflow
- **summary**:   Calculation overflow. 

___


## authorship
 
### GenesisUncle
- **summary**:   The uncle is genesis. 
 
### InvalidUncleParent
- **summary**:   The uncle parent not in the chain. 
 
### OldUncle
- **summary**:   The uncle isn't recent enough to be included. 
 
### TooHighUncle
- **summary**:   The uncle is too high in chain. 
 
### TooManyUncles
- **summary**:   Too many uncles. 
 
### UncleAlreadyIncluded
- **summary**:   The uncle is already included. 
 
### UnclesAlreadySet
- **summary**:   Uncles already set in the block. 

___


## balances
 
### DeadAccount
- **summary**:   Beneficiary account must pre-exist 
 
### ExistentialDeposit
- **summary**:   Value too low to create account due to existential deposit 
 
### ExistingVestingSchedule
- **summary**:   A vesting schedule already exists for this account 
 
### InsufficientBalance
- **summary**:   Balance too low to send value 
 
### KeepAlive
- **summary**:   Transfer/payment would kill account 
 
### LiquidityRestrictions
- **summary**:   Account liquidity restrictions prevent withdrawal 
 
### Overflow
- **summary**:   Got an overflow after adding 
 
### VestingBalance
- **summary**:   Vesting balance too high to send value 

___


## bandOracle
 
### AlreadyFeeded
- **summary**:   Feeder has already feeded at this block 
 
### NoPermission
- **summary**:   Sender does not have permission 

___


## cdpEngine
 
### AlreadyShutdown
- **summary**:   System has already been shutdown 
 
### BelowLiquidationRatio
- **summary**:   The collateral ratio below the liquidation ratio 
 
### BelowRequiredCollateralRatio
- **summary**:   The collateral ratio below the required collateral ratio 
 
### ExceedDebitValueHardCap
- **summary**:   The total debit value of specific collateral type already exceed the hard cap 
 
### InvalidCollateralType
- **summary**:   Invalid collateral type 
 
### InvalidFeedPrice
- **summary**:   Feed price is invalid 
 
### MustAfterShutdown
- **summary**:   Must after system shutdown 
 
### MustBeUnsafe
- **summary**:   The CDP must be unsafe to be liquidated 
 
### NoDebitValue
- **summary**:   No debit value in CDP so that it cannot be settled 
 
### RemainDebitValueTooSmall
- **summary**:   Remain debit value in CDP below the dust amount 

___


## cdpTreasury
 
### CollateralNotEnough
- **summary**:   The collateral amount of CDP treasury is not enough 
 
### DebitPoolNotEnough
- **summary**:   The debit pool of CDP treasury is not enough 
 
### DebitPoolOverflow
- **summary**:   debit pool overflow 
 
### SurplusPoolNotEnough
- **summary**:   The surplus pool of CDP treasury is not enough 

___


## contracts
 
### BelowSubsistenceThreshold
- **summary**:   Performing the requested transfer would have brought the contract below the subsistence threshold. No transfer is allowed to do this in order to allow for a tombstone to be created. Use `seal_terminate` to remove a contract without leaving a tombstone behind. 
 
### CodeNotFound
- **summary**:   No code could be found at the supplied code hash. 
 
### CodeTooLarge
- **summary**:   The code supplied to `put_code` exceeds the limit specified in the current schedule. 
 
### ContractTrapped
- **summary**:   Contract trapped during execution. 
 
### DecodingFailed
- **summary**:   Input passed to a contract API function failed to decode as expected type. 
 
### InvalidContractOrigin
- **summary**:   An origin TrieId written in the current block. 
 
### InvalidDestinationContract
- **summary**:   Cannot restore to nonexisting or alive contract. 
 
### InvalidScheduleVersion
- **summary**:   A new schedule must have a greater version than the current one. 
 
### InvalidSourceContract
- **summary**:   Cannot restore from nonexisting or tombstone contract. 
 
### InvalidSurchargeClaim
- **summary**:   An origin must be signed or inherent and auxiliary sender only provided on inherent. 
 
### InvalidTombstone
- **summary**:   Tombstones don't match. 
 
### MaxCallDepthReached
- **summary**:   Performing a call was denied because the calling depth reached the limit of what is specified in the schedule. 
 
### NewContractNotFunded
- **summary**:   The newly created contract is below the subsistence threshold after executing its contructor. No contracts are allowed to exist below that threshold. 
 
### NotCallable
- **summary**:   The contract that was called is either no contract at all (a plain account) or is a tombstone. 
 
### OutOfBounds
- **summary**:   A buffer outside of sandbox memory was passed to a contract API function. 
 
### OutOfGas
- **summary**:   The executed contract exhausted its gas limit. 
 
### OutputBufferTooSmall
- **summary**:   The output buffer supplied to a contract API call was too small. 
 
### ReentranceDenied
- **summary**:   The action performed is not allowed while the contract performing it is already on the call stack. Those actions are contract self destruction and restoration of a tombstone. 
 
### TransferFailed
- **summary**:   Performing the requested transfer failed for a reason originating in the chosen currency implementation of the runtime. Most probably the balance is too low or locks are placed on it. 
 
### ValueTooLarge
- **summary**:   The size defined in `T::MaxValueSize` was exceeded. 

___


## currencies
 
### AccountNotFound
- **summary**:   EVM account not found 
 
### AmountIntoBalanceFailed
- **summary**:   Unable to convert the Amount type into Balance. 
 
### BalanceTooLow
- **summary**:   Balance is too low. 
 
### ERC20InvalidOperation
- **summary**:   ERC20 invalid operation 

___


## dex
 
### ExceedPriceImpactLimit
- **summary**:   The swap will cause unacceptable price impact 
 
### ExcessiveSupplyAmount
- **summary**:   Supply amount is more than max_supply_amount 
 
### InsufficientLiquidity
- **summary**:   Liquidity is not enough 
 
### InsufficientTargetAmount
- **summary**:   Target amount is less to min_target_amount 
 
### InvalidContributionIncrement
- **summary**:   The increment of provision is invalid 
 
### InvalidCurrencyId
- **summary**:   Invalid currency id 
 
### InvalidLiquidityIncrement
- **summary**:   The increment of liquidity is invalid 
 
### InvalidTradingPathLength
- **summary**:   Invalid trading path length 
 
### MustBeEnabled
- **summary**:   Trading pair must be in Enabled status 
 
### MustBeNotEnabled
- **summary**:   Trading pair must be in NotEnabled status 
 
### MustBeProvisioning
- **summary**:   Trading pair must be in Provisioning status 
 
### NotAllowedList
- **summary**:   This trading pair is not allowed to be listed 
 
### NotEnabledTradingPair
- **summary**:   Trading pair is in NotEnabled status 
 
### ZeroSupplyAmount
- **summary**:   The supply amount is zero 
 
### ZeroTargetAmount
- **summary**:   The target amount is zero 

___


## electionsPhragmen
 
### DuplicatedCandidate
- **summary**:   Duplicated candidate submission. 
 
### InsufficientCandidateFunds
- **summary**:   Candidate does not have enough funds. 
 
### InvalidCandidateCount
- **summary**:   The provided count of number of candidates is incorrect. 
 
### InvalidRenouncing
- **summary**:   The renouncing origin presented a wrong `Renouncing` parameter. 
 
### InvalidReplacement
- **summary**:   Prediction regarding replacement after member removal is wrong. 
 
### InvalidVoteCount
- **summary**:   The provided count of number of votes is incorrect. 
 
### LowBalance
- **summary**:   Cannot vote with stake less than minimum balance. 
 
### MaximumVotesExceeded
- **summary**:   Cannot vote more than maximum allowed. 
 
### MemberSubmit
- **summary**:   Member cannot re-submit candidacy. 
 
### MustBeVoter
- **summary**:   Must be a voter. 
 
### NotMember
- **summary**:   Not a member. 
 
### NoVotes
- **summary**:   Must vote for at least one candidate. 
 
### ReportSelf
- **summary**:   Cannot report self. 
 
### RunnerSubmit
- **summary**:   Runner cannot re-submit candidacy. 
 
### TooManyVotes
- **summary**:   Cannot vote more than candidates. 
 
### UnableToPayBond
- **summary**:   Voter can not pay voting bond. 
 
### UnableToVote
- **summary**:   Cannot vote when no candidates or members exist. 

___


## emergencyShutdown
 
### AlreadyShutdown
- **summary**:   System has already been shutdown 
 
### CanNotRefund
- **summary**:   Final redemption is still not opened 
 
### ExistPotentialSurplus
- **summary**:   Exist potential surplus, means settlement has not been completed 
 
### ExistUnhandledDebit
- **summary**:   Exist unhandled debit, means settlement has not been completed 
 
### MustAfterShutdown
- **summary**:   Must after system shutdown 

___


## eVM
 
### AddressNotMapped
- **summary**:   Address not mapped 
 
### ContractAlreadyDeployed
- **summary**:   Contract already deployed 
 
### ContractDevelopmentAlreadyEnabled
- **summary**:   Contract development is already enabled 
 
### ContractDevelopmentNotEnabled
- **summary**:   Contract development is not enabled 
 
### ContractNotFound
- **summary**:   Contract not found 
 
### NoPermission
- **summary**:   No permission 
 
### NumOutOfBound
- **summary**:   Number out of bound in calculation. 
 
### PendingTransferMaintainersExists
- **summary**:   Pending transfer maintainers exists 
 
### PendingTransferMaintainersNotExists
- **summary**:   Pending transfer maintainers not exists 
 
### StorageQuotaNotEnough
- **summary**:   Storage quota not enough 
 
### UnreserveFailed
- **summary**:   Unreserve failed 

___


## evmAccounts
 
### AccountIdHasMapped
- **summary**:   AccountId has mapped 
 
### BadSignature
- **summary**:   Bad signature 
 
### EthAddressHasMapped
- **summary**:   Eth address has mapped 
 
### InvalidSignature
- **summary**:   Invalid signature 
 
### NonZeroRefCount
- **summary**:   Account ref count is not zero 
 
### StillHasActiveReserved
- **summary**:   Account still has active reserved 

___


## eVMBridge
 
### ExecutionError
 
### ExecutionFail
 
### ExecutionFatal
 
### ExecutionRevert

___


## generalCouncil
 
### AlreadyInitialized
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **summary**:   Account is not a member 
 
### ProposalMissing
- **summary**:   Proposal must exist 
 
### TooEarly
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **summary**:   The given weight bound for the proposal was too low. 

___


## graduallyUpdate
 
### GraduallyUpdateHasExisted
- **summary**:   Another update is already been scheduled for this key. 
 
### GraduallyUpdateNotFound
- **summary**:   No update exists to cancel. 
 
### InvalidPerBlockOrTargetValue
- **summary**:   The `per_block` or `target_value` is invalid. 
 
### InvalidTargetValue
- **summary**:   The `target_value` is invalid. 

___


## grandpa
 
### ChangePending
- **summary**:   Attempt to signal GRANDPA change with one already pending. 
 
### DuplicateOffenceReport
- **summary**:   A given equivocation report is valid but already previously reported. 
 
### InvalidEquivocationProof
- **summary**:   An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **summary**:   A key ownership proof provided as part of an equivocation report is invalid. 
 
### PauseFailed
- **summary**:   Attempt to signal GRANDPA pause when the authority set isn't live (either paused or already pending pause). 
 
### ResumeFailed
- **summary**:   Attempt to signal GRANDPA resume when the authority set isn't paused (either live or already pending resume). 
 
### TooSoon
- **summary**:   Cannot signal forced change so soon after last. 

___


## homaCouncil
 
### AlreadyInitialized
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **summary**:   Account is not a member 
 
### ProposalMissing
- **summary**:   Proposal must exist 
 
### TooEarly
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **summary**:   The given weight bound for the proposal was too low. 

___


## honzon
 
### AlreadyShutdown
 
### NoAuthorization

___


## honzonCouncil
 
### AlreadyInitialized
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **summary**:   Account is not a member 
 
### ProposalMissing
- **summary**:   Proposal must exist 
 
### TooEarly
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **summary**:   The given weight bound for the proposal was too low. 

___


## incentives
 
### InvalidCurrencyId
- **summary**:   Invalid currency id 
 
### NotEnough
- **summary**:   Share amount is not enough 

___


## loans
 
### AmountConvertFailed
 
### CollateralOverflow
 
### CollateralTooLow
 
### DebitOverflow
 
### DebitTooLow

___


## multisig
 
### AlreadyApproved
- **summary**:   Call is already approved by this signatory. 
 
### AlreadyStored
- **summary**:   The data to be stored is already stored. 
 
### MinimumThreshold
- **summary**:   Threshold must be 2 or greater. 
 
### NoApprovalsNeeded
- **summary**:   Call doesn't need any (more) approvals. 
 
### NotFound
- **summary**:   Multisig operation not found when attempting to cancel. 
 
### NoTimepoint
- **summary**:   No timepoint was given, yet the multisig operation is already underway. 
 
### NotOwner
- **summary**:   Only the account that originally created the multisig is able to cancel it. 
 
### SenderInSignatories
- **summary**:   The sender was contained in the other signatories; it shouldn't be. 
 
### SignatoriesOutOfOrder
- **summary**:   The signatories were provided out of order; they should be ordered. 
 
### TooFewSignatories
- **summary**:   There are too few signatories in the list. 
 
### TooManySignatories
- **summary**:   There are too many signatories in the list. 
 
### UnexpectedTimepoint
- **summary**:   A timepoint was given, yet no multisig operation is underway. 
 
### WeightTooLow
- **summary**:   The maximum weight information provided was too low. 
 
### WrongTimepoint
- **summary**:   A different timepoint was given to the multisig operation that is underway. 

___


## nFT
 
### CannotDestroyClass
- **summary**:   Can not destroy class Total issuance is not 0 
 
### ClassIdNotFound
- **summary**:   ClassId not found 
 
### InvalidQuantity
- **summary**:   Quantity is invalid. need >= 1 
 
### NonBurnable
- **summary**:   Property of class don't support burn 
 
### NonTransferable
- **summary**:   Property of class don't support transfer 
 
### NoPermission
- **summary**:   The operator is not the owner of the token and has no permission 
 
### TokenIdNotFound
- **summary**:   TokenId not found 

___


## nomineesElection
 
### BelowMinBondThreshold
 
### InvalidTargetsLength
 
### NoBonded
 
### NoUnlockChunk
 
### TooManyChunks

___


## polkadotBridge
 
### NotEnough
 
### Overflow

___


## proxy
 
### Duplicate
- **summary**:   Account is already a proxy. 
 
### NoPermission
- **summary**:   Call may not be made by proxy because it may escalate its privileges. 
 
### NotFound
- **summary**:   Proxy registration not found. 
 
### NotProxy
- **summary**:   Sender is not a proxy of the account to be proxied. 
 
### TooMany
- **summary**:   There are too many proxies registered or too many announcements pending. 
 
### Unannounced
- **summary**:   Announcement, if made at all, was made too recently. 
 
### Unproxyable
- **summary**:   A call which is incompatible with the proxy type's filter was attempted. 

___


## recovery
 
### AlreadyProxy
- **summary**:   This account is already set up for recovery 
 
### AlreadyRecoverable
- **summary**:   This account is already set up for recovery 
 
### AlreadyStarted
- **summary**:   A recovery process has already started for this account 
 
### AlreadyVouched
- **summary**:   This user has already vouched for this recovery 
 
### DelayPeriod
- **summary**:   The friend must wait until the delay period to vouch for this recovery 
 
### MaxFriends
- **summary**:   Friends list must be less than max friends 
 
### NotAllowed
- **summary**:   User is not allowed to make a call on behalf of this account 
 
### NotEnoughFriends
- **summary**:   Friends list must be greater than zero and threshold 
 
### NotFriend
- **summary**:   This account is not a friend who can vouch 
 
### NotRecoverable
- **summary**:   This account is not set up for recovery 
 
### NotSorted
- **summary**:   Friends list must be sorted and free of duplicates 
 
### NotStarted
- **summary**:   A recovery process has not started for this rescuer 
 
### Overflow
- **summary**:   There was an overflow in a calculation 
 
### StillActive
- **summary**:   There are still active recovery attempts that need to be closed 
 
### Threshold
- **summary**:   The threshold for recovering this account has not been met 
 
### ZeroThreshold
- **summary**:   Threshold must be greater than zero 

___


## renVmBridge
 
### BurnIdOverflow
- **summary**:   Burn ID overflow. 
 
### InvalidMintSignature
- **summary**:   The mint signature is invalid. 
 
### SignatureAlreadyUsed
- **summary**:   The mint signature has already been used. 

___


## scheduler
 
### FailedToSchedule
- **summary**:   Failed to schedule a call 
 
### NotFound
- **summary**:   Cannot find the scheduled call. 
 
### RescheduleNoChange
- **summary**:   Reschedule failed because it does not change scheduled time. 
 
### TargetBlockNumberInPast
- **summary**:   Given target block number is in the past. 

___


## session
 
### DuplicatedKey
- **summary**:   Registered duplicate key. 
 
### InvalidProof
- **summary**:   Invalid ownership proof. 
 
### NoAssociatedValidatorId
- **summary**:   No associated validator ID for account. 
 
### NoKeys
- **summary**:   No keys are associated with this account. 

___


## staking
 
### AlreadyBonded
- **summary**:   Stash is already bonded. 
 
### AlreadyClaimed
- **summary**:   Rewards for this era have already been claimed for this validator. 
 
### AlreadyPaired
- **summary**:   Controller is already paired. 
 
### CallNotAllowed
- **summary**:   The call is not allowed at the given time due to restrictions of election period. 
 
### DuplicateIndex
- **summary**:   Duplicate index. 
 
### EmptyTargets
- **summary**:   Targets cannot be empty. 
 
### FundedTarget
- **summary**:   Attempting to target a stash that still has funds. 
 
### IncorrectHistoryDepth
- **summary**:   Incorrect previous history depth input provided. 
 
### IncorrectSlashingSpans
- **summary**:   Incorrect number of slashing spans provided. 
 
### InsufficientValue
- **summary**:   Can not bond with value less than minimum balance. 
 
### InvalidEraToReward
- **summary**:   Invalid era to reward. 
 
### InvalidNumberOfNominations
- **summary**:   Invalid number of nominations. 
 
### InvalidSlashIndex
- **summary**:   Slash record index out of bounds. 
 
### NoMoreChunks
- **summary**:   Can not schedule more unlock chunks. 
 
### NotController
- **summary**:   Not a controller account. 
 
### NotSortedAndUnique
- **summary**:   Items are not sorted and unique. 
 
### NotStash
- **summary**:   Not a stash account. 
 
### NoUnlockChunk
- **summary**:   Can not rebond without unlocking chunks. 
 
### OffchainElectionBogusCompact
- **summary**:   Error while building the assignment type from the compact. This can happen if an index is invalid, or if the weights _overflow_. 
 
### OffchainElectionBogusEdge
- **summary**:   The submitted result has unknown edges that are not among the presented winners. 
 
### OffchainElectionBogusElectionSize
- **summary**:   The election size is invalid. 
 
### OffchainElectionBogusNomination
- **summary**:   One of the submitted nominators has an edge to which they have not voted on chain. 
 
### OffchainElectionBogusNominator
- **summary**:   One of the submitted nominators is not an active nominator on chain. 
 
### OffchainElectionBogusScore
- **summary**:   The claimed score does not match with the one computed from the data. 
 
### OffchainElectionBogusSelfVote
- **summary**:   A self vote must only be originated from a validator to ONLY themselves. 
 
### OffchainElectionBogusWinner
- **summary**:   One of the submitted winners is not an active candidate on chain (index is out of range in snapshot). 
 
### OffchainElectionBogusWinnerCount
- **summary**:   Incorrect number of winners were presented. 
 
### OffchainElectionEarlySubmission
- **summary**:   The submitted result is received out of the open window. 
 
### OffchainElectionSlashedNomination
- **summary**:   One of the submitted nominators has an edge which is submitted before the last non-zero slash of the target. 
 
### OffchainElectionWeakSubmission
- **summary**:   The submitted result is not as good as the one stored on chain. 
 
### SnapshotUnavailable
- **summary**:   The snapshot data of the current window is missing. 

___


## stakingPool
 
### GetFeeFailed
- **summary**:   Failed to calculate redemption fee. 
 
### InvalidConfig
- **summary**:   Invalid config. 
 
### InvalidEra
- **summary**:   The era index is invalid. 
 
### Overflow
- **summary**:   Overflow. 

___


## sudo
 
### RequireSudo
- **summary**:   Sender must be the Sudo account 

___


## system
 
### FailedToExtractRuntimeVersion
- **summary**:   Failed to extract the runtime version from the new runtime. 

  Either calling `Core_version` or decoding `RuntimeVersion` failed. 
 
### InvalidSpecName
- **summary**:   The name of specification does not match between the current runtime and the new runtime. 
 
### NonDefaultComposite
- **summary**:   Suicide called when the account has non-default composite data. 
 
### NonZeroRefCount
- **summary**:   There is a non-zero reference count preventing the account from being purged. 
 
### SpecVersionNeedsToIncrease
- **summary**:   The specification version is not allowed to decrease between the current runtime and the new runtime. 

___


## technicalCommittee
 
### AlreadyInitialized
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **summary**:   Account is not a member 
 
### ProposalMissing
- **summary**:   Proposal must exist 
 
### TooEarly
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **summary**:   The given weight bound for the proposal was too low. 

___


## tokens
 
### AmountIntoBalanceFailed
- **summary**:   Cannot convert Amount into Balance type 
 
### BalanceOverflow
- **summary**:   This operation will cause balance to overflow 
 
### BalanceTooLow
- **summary**:   The balance is too low 
 
### LiquidityRestrictions
- **summary**:   Failed because liquidity restrictions due to locking 
 
### StillHasActiveReserved
- **summary**:   Account still has active reserved 
 
### TotalIssuanceOverflow
- **summary**:   This operation will cause total issuance to overflow 

___


## vesting
 
### AmountLow
- **summary**:   The vested transfer amount is too low 
 
### InsufficientBalanceToLock
- **summary**:   Insufficient amount of balance to lock 
 
### NumOverflow
- **summary**:   Arithmetic calculation overflow 
 
### TooManyVestingSchedules
- **summary**:   This account have too many vesting schedules 
 
### ZeroVestingPeriod
- **summary**:   Vesting period is zero 
 
### ZeroVestingPeriodCount
- **summary**:   Number of vests is zero 
