---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[accounts](#accounts)**

- **[auction](#auction)**

- **[auctionManager](#auctionmanager)**

- **[balances](#balances)**

- **[cdpEngine](#cdpengine)**

- **[cdpTreasury](#cdptreasury)**

- **[currencies](#currencies)**

- **[dex](#dex)**

- **[emergencyShutdown](#emergencyshutdown)**

- **[generalCouncil](#generalcouncil)**

- **[graduallyUpdate](#graduallyupdate)**

- **[grandpa](#grandpa)**

- **[homaCouncil](#homacouncil)**

- **[honzon](#honzon)**

- **[honzonCouncil](#honzoncouncil)**

- **[loans](#loans)**

- **[multisig](#multisig)**

- **[nomineesElection](#nomineeselection)**

- **[oracle](#oracle)**

- **[palletTreasury](#pallettreasury)**

- **[polkadotBridge](#polkadotbridge)**

- **[recovery](#recovery)**

- **[renVmBridge](#renvmbridge)**

- **[scheduleUpdate](#scheduleupdate)**

- **[session](#session)**

- **[staking](#staking)**

- **[stakingPool](#stakingpool)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCouncil](#technicalcouncil)**

- **[tokens](#tokens)**

- **[vesting](#vesting)**


___


## accounts
 
### NonZeroRefCount
- **summary**:   Account ref count is not zero 
 
### NotEnoughBalance
- **summary**:   Balance is not sufficient 

___


## auction
 
### AuctionNotExist
 
### AuctionNotStarted
 
### BidNotAccepted
 
### InvalidBidPrice
 
### NoAvailableAuctionId

___


## auctionManager
 
### AuctionNotExsits
- **summary**:   The auction dose not exist 
 
### InReservedStage
- **summary**:   The collateral auction is in reserved stage now 
 
### InvalidBidPrice
- **summary**:   Bid price is invalid 
 
### InvalidFeedPrice
- **summary**:   Feed price is invalid 
 
### MustAfterShutdown
- **summary**:   Must after system shutdown 

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
 
### CollateralOverflow
- **summary**:   Collateral Amount overflow 
 
### DebitPoolOverflow
- **summary**:   debit pool overflow 
 
### SurplusPoolOverflow
- **summary**:   Surplus pool overflow 

___


## currencies
 
### AmountIntoBalanceFailed
- **summary**:   Unable to convert the Amount type into Balance. 
 
### BalanceTooLow
- **summary**:   Balance is too low. 

___


## dex
 
### CurrencyIdNotAllowed
- **summary**:   Not the tradable currency type 
 
### InacceptablePrice
- **summary**:   The actual transaction price will be lower than the acceptable price 
 
### InvalidLiquidityIncrement
- **summary**:   The increament of liquidity is invalid 
 
### ShareNotEnough
- **summary**:   Share amount is not enough 
 
### SharesOverflow
- **summary**:   Share amount overflow 

___


## emergencyShutdown
 
### AlreadyShutdown
- **summary**:   System has already been shutdown 
 
### CanNotRefund
- **summary**:   Final redeption is still not opened 
 
### ExistPotentialSurplus
- **summary**:   Exist optential surplus, means settlement has not been completed 
 
### ExistUnhandleDebit
- **summary**:   Exist unhandled debit, means settlement has not been completed 
 
### MustAfterShutdown
- **summary**:   Must after system shutdown 

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


## nomineesElection
 
### BelowMinBondThreshold
 
### InvalidTargetsLength
 
### NoBonded
 
### NoUnlockChunk
 
### TooManyChunks

___


## oracle
 
### NoPermission
- **summary**:   Sender does not have permission 

___


## palletTreasury
 
### AlreadyKnown
- **summary**:   The tip was already found/started. 
 
### InsufficientProposersBalance
- **summary**:   Proposer's balance is too low. 
 
### InvalidProposalIndex
- **summary**:   No proposal at that index. 
 
### NotFinder
- **summary**:   The account attempting to retract the tip is not the finder of the tip. 
 
### Premature
- **summary**:   The tip cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **summary**:   The reason given is just too big. 
 
### StillOpen
- **summary**:   The tip cannot be claimed/closed because there are not enough tippers yet. 
 
### UnknownTip
- **summary**:   The tip hash is unknown. 

___


## polkadotBridge
 
### NotEnough
 
### Overflow

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
 
### InvalidMintSignature
- **summary**:   The mint signature is invalid. 
 
### SignatureAlreadyUsed
- **summary**:   The mint signature has already been used. 

___


## scheduleUpdate
 
### BadOrigin
 
### BlockNumberOverflow
 
### CannotGetNextId
 
### DispatchNotExisted
 
### ExceedMaxScheduleDispatchWeight
 
### InvalidDelayedDispatchTime
 
### NoPermission

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
 
### PhragmenBogusCompact
- **summary**:   Error while building the assignment type from the compact. This can happen if an index is invalid, or if the weights _overflow_. 
 
### PhragmenBogusEdge
- **summary**:   The submitted result has unknown edges that are not among the presented winners. 
 
### PhragmenBogusElectionSize
- **summary**:   The election size is invalid. 
 
### PhragmenBogusNomination
- **summary**:   One of the submitted nominators has an edge to which they have not voted on chain. 
 
### PhragmenBogusNominator
- **summary**:   One of the submitted nominators is not an active nominator on chain. 
 
### PhragmenBogusScore
- **summary**:   The claimed score does not match with the one computed from the data. 
 
### PhragmenBogusSelfVote
- **summary**:   A self vote must only be originated from a validator to ONLY themselves. 
 
### PhragmenBogusWinner
- **summary**:   One of the submitted winners is not an active candidate on chain (index is out of range in snapshot). 
 
### PhragmenBogusWinnerCount
- **summary**:   Incorrect number of winners were presented. 
 
### PhragmenEarlySubmission
- **summary**:   The submitted result is received out of the open window. 
 
### PhragmenSlashedNomination
- **summary**:   One of the submitted nominators has an edge which is submitted before the last non-zero slash of the target. 
 
### PhragmenWeakSubmission
- **summary**:   The submitted result is not as good as the one stored on chain. 
 
### SnapshotUnavailable
- **summary**:   The snapshot data of the current window is missing. 

___


## stakingPool
 
### InvalidEra
 
### LiquidCurrencyNotEnough
 
### StakingCurrencyNotEnough

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


## technicalCouncil
 
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
 
### BalanceTooLow
- **summary**:   The balance is too low 
 
### LiquidityRestrictions
- **summary**:   Failed because liquidity restrictions due to locking 
 
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
