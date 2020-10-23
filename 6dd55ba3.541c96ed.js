(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(163)),c={title:"Contract"},o={unversionedId:"api-contract/start/contract",id:"api-contract/start/contract",isDocsHomePage:!1,title:"Contract",description:"The ContractPromise interface allows you to interact with a deployed contract. In the previous Blueprint example this instance was created via createContract. In general use, you can also create an instance via new, i.e. when you are attaching to an existing contract on-chain -",source:"@site/docs/api-contract/start/contract.md",slug:"/api-contract/start/contract",permalink:"/docs/api-contract/start/contract",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/start/contract.md",version:"current",sidebar:"reference",previous:{title:"Blueprint",permalink:"/docs/api-contract/start/blueprint"},next:{title:"FAQ",permalink:"/docs/api-contract/FAQ"}},s=[{value:"Reading contract values",id:"reading-contract-values",children:[]},{value:"Sending a transaction",id:"sending-a-transaction",children:[]},{value:"Weight estimation",id:"weight-estimation",children:[]},{value:"That is it... for now",id:"that-is-it-for-now",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ContractPromise")," interface allows you to interact with a deployed contract. In the previous ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-contract/start/blueprint"}),"Blueprint example")," this instance was created via ",Object(i.b)("inlineCode",{parentName:"p"},"createContract"),". In general use, you can also create an instance via ",Object(i.b)("inlineCode",{parentName:"p"},"new"),", i.e. when you are attaching to an existing contract on-chain -"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { ContractPromise } from '@polkadot/api-contract';\n\n// Attach to an existing contract with a known ABI and address\nconst contract = new ContractPromise(api, abi, address);\n\n// Read from the contract\n...\n")),Object(i.b)("p",null,"Either via a create above or via a call to ",Object(i.b)("inlineCode",{parentName:"p"},"createContract")," both instances are the same. The ",Object(i.b)("inlineCode",{parentName:"p"},"Contract")," provides a wrapper around the ",Object(i.b)("inlineCode",{parentName:"p"},"Abi")," and allows you to call either ",Object(i.b)("inlineCode",{parentName:"p"},"read")," or ",Object(i.b)("inlineCode",{parentName:"p"},"exec")," on a contract to interact with it."),Object(i.b)("h2",{id:"reading-contract-values"},"Reading contract values"),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"Blueprint")," example we have instantiated an incrementer contract. In the following examples we will continue using it to read from and execute transactions into, since it is a well-known entity. To read a value from the contract, we can do the following -"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Read from the contract via an RPC call\nconst value = 0; // only useful on isPayable messages\n\n// NOTE the apps UI specified these in mega units\nconst gasLimit = 3000n * 1000000n;\n\n// Perform the actual read (no params at the end, for the `get` message)\n// (We perform the send from an account, here using Alice's address)\nconst callValue = await contract.query.get(alicePair.address, value, gasLimit);\n\n// The actual result from RPC as `ContractExecResult`\nconsole.log(callValue.result.toHuman());\n\n// check if the call was successful\nif (callValue.result.isSuccess) {\n  // data from the enum\n  const success = callValue.result.asSuccess;\n\n  // should output 123 as per our initial set (output here is an i32)\n  console.log(callValue.output.toHuman());\n\n  // the amount of gas consumed (naturally a u64 value()\n  console.log(success.gasConsumed.toHuman());\n} else {\n  console.error('Call failed');\n}\n")),Object(i.b)("p",null,"Underlying the above ",Object(i.b)("inlineCode",{parentName:"p"},".query.<messageName>")," is using the ",Object(i.b)("inlineCode",{parentName:"p"},"api.rpc.contracts.call")," API on the contracts palette to retrieve the value. When executing it encodes the message using the selector and the input values to allow execution in the contract environment. This can be executed on any contract message, unlike the execution below it will only read state, not actually execute."),Object(i.b)("p",null,"An alternative for reading would be via the lower-level ",Object(i.b)("inlineCode",{parentName:"p"},".read")," method, in this case"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Perform the actual read (no params at the end, for the `get` message)\n// (We perform the send from an account address, it doesn't get executed)\nconst callValue = await contract\n  .read('get', value, gasLimit)\n  .send(alicePair.address);\n\n// The actual result from RPC as `ContractExecResult`\n...\n")),Object(i.b)("p",null,"In cases where the ABI messages have conflicting names, instead of the ",Object(i.b)("inlineCode",{parentName:"p"},"'get'")," string the actual message index (or message from the Abi itself) can be passed-through."),Object(i.b)("h2",{id:"sending-a-transaction"},"Sending a transaction"),Object(i.b)("p",null,"In addition to using the ",Object(i.b)("inlineCode",{parentName:"p"},".query.<messageName>")," on a contract, the ",Object(i.b)("inlineCode",{parentName:"p"},".tx.<messageName>")," method is provides to send an actual encoded transaction to the contract. Expanding on our above example, we can now execute and then retrieve the subsequent value -"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// We will use these values for the execution\nconst value = 0; // only useful on isPayable messages\nconst gasLimit = 3000n * 1000000n;\nconst incValue = 1;\n\n// Send the transaction, like elsewhere this is a normal submittable\n// extrinsic with the same rules as applied in the API\nawait contract.tx\n  .inc(value, gasLimit, incValue)\n  .signAndSend(alicePair, (result) => {\n    if (result.status.isInBlock) {\n      console.log('in a block');\n    } else if (result.status.isFinalized) {\n      console.log('finalized');\n    }\n  });\n")),Object(i.b)("p",null,"If we perform the same ",Object(i.b)("inlineCode",{parentName:"p"},"query.get")," read on the value now, it would be ",Object(i.b)("inlineCode",{parentName:"p"},"124"),". For lower-level access, like we have in the ",Object(i.b)("inlineCode",{parentName:"p"},"Blueprint")," via ",Object(i.b)("inlineCode",{parentName:"p"},".createContract")," you can also perform the execution via the ",Object(i.b)("inlineCode",{parentName:"p"},".exec")," function, which would yield equivalent results -"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Send the transaction, like elsewhere this is a normal submittable\n// extrinsic with the same rules as applied in the API\nawait contract\n  .exec('inc', value, gasLimit, incValue)\n  .signAndSend(alicePair, (result) => {\n    ...\n  });\n")),Object(i.b)("p",null,"For the above interface we can specify the message as the string name, the index of the actual message as retrieved via the Abi."),Object(i.b)("h2",{id:"weight-estimation"},"Weight estimation"),Object(i.b)("p",null,"To estimate the gasLimit (which in the Substrate context refers to the weight used), we can use the ",Object(i.b)("inlineCode",{parentName:"p"},".query")," (read) interfaces with a sufficiently large value to retrieve the actual gas consumed. The API makes this easy - with a ",Object(i.b)("inlineCode",{parentName:"p"},"gasLimit")," or ",Object(i.b)("inlineCode",{parentName:"p"},"-1")," passed to the query it will use the maximum gas limit available to transactions and the return value will have the actual gas used."),Object(i.b)("p",null,"To see this in practice -"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// We will use these values for the execution\nconst value = 0;\nconst incValue = 1;\n\n// Instead of sending we use the `call` interface via `.query` that will return\n// the gas consoumed (the API aut-fill the max block tx weight when -1 is the gasLimit)\nconst { result } = await contract.query.inc(value, -1, incValue)\n\nif (result.isSuccess) {\n  // extract the value from the Success portion of the enum\n  const gasConsumed = result.asSuccess.gasConsumed;\n\n  console.log(`Call execution will consume ${gasConsumed.toString()}`);\n}\n")),Object(i.b)("p",null,"We can use the ",Object(i.b)("inlineCode",{parentName:"p"},"gasConsumed")," input (potentially with a buffer for various execution paths) in any calls to ",Object(i.b)("inlineCode",{parentName:"p"},"contract.tx.inc(...)")," with the same input parameters specified on the ",Object(i.b)("inlineCode",{parentName:"p"},"query")," where the estimation was done."),Object(i.b)("h2",{id:"that-is-it-for-now"},"That is it... for now"),Object(i.b)("p",null,"This was a whirl-wind tour of what the API provides in terms of the ",Object(i.b)("inlineCode",{parentName:"p"},"@polkadot/api-contract")," interface. It is not perfect yet, we would like to expand it to allow for greater type-checking on the contracts (instead of read/exec wit messages), but hopefully in the current state it already enhances the way you can interact with contracts."))}u.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,b=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.a.createElement(b,o(o({ref:t},l),{},{components:n})):r.a.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);