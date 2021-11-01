(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1413:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return B}});var a=e(5893),r=e(9008),o=e(2833),i=e.n(o),s=e(1664),c=e(7294),l=function(n){var t=n.title,e=(n.illustration,(0,c.useState)(null)),r=e[0],o=e[1];(0,c.useEffect)((function(){o(document.getElementById("wizard"))}),[]);return(0,a.jsxs)("div",{className:i().bannerContainer,children:[(0,a.jsx)("div",{className:i().bannerInnerContentHolder,children:(0,a.jsx)("div",{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:i().headlineBlock,children:(0,a.jsx)("h1",{children:t})}),(0,a.jsxs)("div",{className:i().illustrationConstructor,children:[(0,a.jsxs)("div",{className:i().illustrationContainer,children:[(0,a.jsx)("img",{src:"/img/ink.svg",alt:"ink"}),(0,a.jsx)("span",{className:i().ink,children:"ink!"})]}),(0,a.jsx)("img",{src:"/img/plus.svg",alt:"plus"}),(0,a.jsxs)("div",{className:i().illustrationContainer,children:[(0,a.jsx)("img",{className:i().brushImg,src:"/img/brush.svg",alt:"brush"}),(0,a.jsx)("span",{className:i().openbrush,children:"OpenBrush"})]}),(0,a.jsx)("img",{src:"/img/equals.svg",alt:"equals"}),(0,a.jsxs)("div",{className:i().illustrationContainer,children:[(0,a.jsx)("img",{src:"/img/contract.svg",alt:"ink"}),(0,a.jsx)("span",{className:i().contracts,children:"Smart Contracts"})]})]})]})})}),(0,a.jsx)("div",{className:i().ctaContainer,children:(0,a.jsx)(s.default,{href:"/#wizard",children:(0,a.jsx)("a",{onClick:function(n){n.preventDefault(),r.scrollIntoView({behavior:"smooth",block:"start"})},children:"TRY IT OUT"})})}),(0,a.jsxs)("div",{className:i().bannerContainerDecorWrapper,children:[(0,a.jsx)("div",{className:i().leftBottom}),(0,a.jsx)("div",{className:i().rightBottom,children:(0,a.jsx)("div",{})})]})]})},u=e(8073),d=e.n(u),f=function(n){var t=n.title,e=n.data;return(0,a.jsxs)("div",{className:d().partnersContainer,children:[(0,a.jsx)("h2",{className:"primaryHeadline",children:t}),(0,a.jsx)("div",{className:d().logoWrapper,children:e&&e.map((function(n,t){return(0,a.jsx)(s.default,{href:n.link,children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:n.src,alt:n.alt},t)})},t.toString())}))})]})},m=e(5660),p=e.n(m),h=[{alt:"logo",src:"/img/partners/logo8.svg",link:"https://www.zokyo.io/"},{alt:"logo",src:"/img/partners/logo6.svg",link:"https://applicature.com/"},{alt:"alliance",src:"/img/partners/alliance.png",link:"https://allianceblock.io/"},{alt:"web3",src:"/img/partners/web3.svg",link:"https://web3.foundation.io/"}],S=e(3143),b=e(7246),_=e.n(b),g=[{name:"psp22",controls:[{sectionName:"Constructor",optionList:[{name:"Name",type:"text",initState:"MyPSP22",tooltip:""},{name:"Symbol",type:"text",initState:"MPSP",tooltip:""},{name:"Premint",type:"text",initState:"100",tooltip:""}]},{sectionName:"Extensions",optionList:[{name:"Metadata",type:"checkbox",initState:!1,tooltip:"Metadata for [`PSP22`] "},{name:"Burnable",type:"checkbox",initState:!1,tooltip:"Extension of [`PSP22`] that allows token holders to destroy both their own tokens and those that they have an allowance for."},{name:"Mintable",type:"checkbox",initState:!1,tooltip:"Extension of [`PSP22`] that allows create `amount` tokens and assigns them to `account`, increasing the total supply"},{name:"Ownable",type:"checkbox",initState:!1,tooltip:"Contract module which provides a basic access control mechanism, where there is an account (an owner) that can be granted exclusive access to specific functions."}]}]},{name:"psp1155",controls:[{sectionName:"Constructor",optionList:[{name:"Name",type:"text",initState:"MyPSP1155",tooltip:""},{name:"URI",type:"text",initState:"https://...",tooltip:""}]},{sectionName:"Extensions",optionList:[{name:"Metadata",type:"checkbox",initState:!1,tooltip:"Metadata for [`PSP1155`]"},{name:"Burnable",type:"checkbox",initState:!1,tooltip:"Extension of [`PSP1155`] that allows token holders to destroy their tokens"},{name:"Mintable",type:"checkbox",initState:!1,tooltip:"Extension of [`PSP1155`] that allows minting of new tokens"},{name:"Ownable",type:"checkbox",initState:!1,tooltip:"Contract module which provides a basic access control mechanism, where there is an account (an owner) that can be granted exclusive access to specific functions."}]}]},{name:"psp721",controls:[{sectionName:"Constructor",optionList:[{name:"Name",type:"text",initState:"MyPSP721",tooltip:""},{name:"Symbol",type:"text",initState:"MPSP",tooltip:""}]},{sectionName:"Extensions",optionList:[{name:"Metadata",type:"checkbox",initState:!1,tooltip:"Metadata for [`PSP721`]"},{name:"Burnable",type:"checkbox",initState:!1,tooltip:"Extension of [`PSP721`] that allows token holders to destroy their tokens"},{name:"Mintable",type:"checkbox",initState:!1,tooltip:"Extension of [`PSP721`] that exposes the mint function"},{name:"Ownable",type:"checkbox",initState:!1,tooltip:"Extension of [`PSP721`] that exposes the mint function"}]}]}],x=e(3961),k=e(4283),v=e(5345),C=e.n(v),j=function(n){var t,e=n.data,r=(0,c.useState)(e),o=r[0],i=r[1],s=(0,c.useState)("rust"),l=s[0],u=s[1];if((0,c.useEffect)((function(){i(e)}),[e,o]),o)switch(o.type){case"psp22":return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:C().tabsSwitch,children:[(0,a.jsx)("div",{onClick:function(){return u("rust")},className:"rust"===l?C().activeTab:"",children:"lib.rs"}),(0,a.jsx)("div",{onClick:function(){return u("toml")},className:"toml"===l?C().activeTab:"",children:"Cargo.toml"})]}),(0,a.jsx)("div",{className:C().mainContent,children:"rust"===l?(0,a.jsx)(x.Z,{language:"rust",wrapLongLines:!0,style:k.YC,children:'#![cfg_attr(not(feature = "std"), no_std)]\n                                \n#[brush::contract]\npub mod my_token { '.concat(o.currentControlsState.find((function(n){return"Burnable"===n.name})).state?"\n    use ink_prelude::vec::Vec;":""," ").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n    use ink_storage::Lazy;":"","\n    use psp22::{\n        traits::*, ").concat(o.currentControlsState.find((function(n){return"Burnable"===n.name})).state?"\n        extensions::burnable::*,":""," ").concat(o.currentControlsState.find((function(n){return"Mintable"===n.name})).state?"\n        extensions::mintable::*,":"","  \n        }; ").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n    use ownable::traits::*;\n    use brush::modifiers;":""," \n    #[ink(storage)]\n    #[derive(Default, PSP22Storage").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?", PSP22MetadataStorage":""," ").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?", OwnableStorage":"",")]\n    pub struct ").concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {\n        #[PSP22StorageField]\n        psp22: PSP22Data, ").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n        #[PSP22MetadataStorageField]\n        metadata: PSP22MetadataData,":""," ").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n        #[OwnableStorageField]\n        ownable: OwnableData,":"","\n    }\n        \n    impl PSP22 for ").concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {} ").concat(o.currentControlsState.find((function(n){return"Burnable"===n.name})).state?"\n    impl PSP22Burnable for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {}"):""," ").concat(o.currentControlsState.find((function(n){return"Mintable"===n.name})).state?"\n    impl PSP22Mintable for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {}"):""," ").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n    impl Ownable for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {}"):"","\n        \n    impl ").concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {\n        #[ink(constructor)]\n        pub fn new(decimal: u8) -> Self {\n            let mut instance = Self::default(); ").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n            Lazy::set(&mut instance.metadata.name, '".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state,"');\n            Lazy::set(&mut instance.metadata.symbol, '").concat(o.currentControlsState.find((function(n){return"Symbol"===n.name})).state,"');\n            Lazy::set(&mut instance.metadata.decimals, decimal); ").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n            instance._init_with_owner(instance.env().caller());":""):"","\n            instance._mint(instance.env().caller(), ").concat(o.currentControlsState.find((function(n){return"Premint"===n.name})).state,");\n            instance\n        }  ").concat(o.currentControlsState.find((function(n){return"Burnable"===n.name})).state?"\n            \n        #[ink(message)]\n        pub fn burn_from_many(&mut self, accounts: Vec<(AccountId, Balance)>) {\n            for account in accounts.iter() {\n                self.burn_from(account.0, account.1);\n            }\n        }":""," ").concat(o.currentControlsState.find((function(n){return"Mintable"===n.name})).state?"\n            \n        #[ink(message)] ".concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n        #[modifiers(only_owner)]":"","\n        pub fn mint_to(&mut self, account: AccountId, amount: Balance) {\n            self.mint(account, amount);\n        }"):"","\n    }\n}")}):(0,a.jsx)(x.Z,{language:"toml",wrapLongLines:!0,style:k.YC,children:'[package]\nname = "my_token"\nversion = "1.0.0"\nedition = "2018"\n\n[dependencies]\nink_primitives = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_metadata = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false, features = ["derive"], optional = true }\nink_env = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_storage = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_lang = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_prelude = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "2.1", default-features = false, features = ["derive"] }\nscale-info = { version = "0.6.0", default-features = false, features = ["derive"], optional = true }\n\n# These dependencies\npsp22 = { path = "../../contracts/token/psp22", default-features = false } '.concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?'\nownable = { path = "../../contracts/access/ownable", default-features = false }':"",'\nbrush = { path = "../../utils/brush", default-features = false }\n\n[lib]\nname = "my_psp22"\npath = "lib.rs"\ncrate-type = [\n    # Used for normal contract Wasm blobs.\n    "cdylib",\n]\n\n[features]\ndefault = ["std"]\nstd = [\n    "ink_primitives/std",\n    "ink_metadata",\n    "ink_metadata/std",\n    "ink_env/std",\n    "ink_storage/std",\n    "ink_lang/std",\n    "scale/std",\n    "scale-info",\n    "scale-info/std",\n\n    # These dependencies\n    "psp22/std",\n    "brush/std",\n]\nink-as-dependency = []')})})]});case"psp1155":return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:C().tabsSwitch,children:[(0,a.jsx)("div",{onClick:function(){return u("rust")},className:"rust"===l?C().activeTab:"",children:"lib.rs"}),(0,a.jsx)("div",{onClick:function(){return u("toml")},className:"toml"===l?C().activeTab:"",children:"Cargo.toml"})]}),(0,a.jsx)("div",{className:C().mainContent,children:"rust"===l?(0,a.jsx)(x.Z,{language:"rust",wrapLongLines:!0,style:k.YC,children:'#![cfg_attr(not(feature = "std"), no_std)]\n\n#[brush::contract]\npub mod my_nft_token {\n    use brush::{ '.concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n        modifiers,":"","\n        traits::InkStorage,\n    };\n    use ink_storage::collections::HashMap as StorageHashMap; ").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n    use ownable::traits::*;":"","\n    use psp1155::{ ").concat(o.currentControlsState.find((function(n){return"Burnable"===n.name})).state||o.currentControlsState.find((function(n){return"Mintable"===n.name})).state||o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n        extensions::{ ".concat(o.currentControlsState.find((function(n){return"Burnable"===n.name})).state?"\n            burnable::*,":""," ").concat(o.currentControlsState.find((function(n){return"Mintable"===n.name})).state?"\n            mintable::*,":""," ").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n            metadata::*, ":""," \n        }, "):"","\n        traits::*,\n    };\n\n    #[ink(storage)]\n    #[derive(Default, PSP1155Storage").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?", OwnableStorage":"").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?", PSP1155MetadataStorage":"",")]\n    pub struct ").concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {\n        #[PSP1155StorageField]\n        psp1155: PSP1155Data, ").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n        #[OwnableStorageField]\n        ownable: OwnableData,":""," ").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n        #[PSP1155MetadataStorageField]\n        metadata: PSP1155MetadataData,":"","  \n        registered_ids: StorageHashMap<Id, bool>,    \n    }\n    ").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n    impl PSP1155Metadata for MyPSP1155 {}":""," ").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n    impl Ownable for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {}"):"","\n    impl PSP1155 for ").concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {} ").concat(o.currentControlsState.find((function(n){return"Burnable"===n.name})).state&&o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n    \n    impl PSP1155Burnable for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {\n        #[ink(message)] \n        #[modifiers(only_owner)]\n        fn burn(&mut self, id: Id, amount: Balance) {\n            self._burn(Self::env().caller(), id, amount);\n        }\n    }\n    "):o.currentControlsState.find((function(n){return"Burnable"===n.name})).state?"\n    impl PSP1155Burnable for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {}"):""," ").concat(o.currentControlsState.find((function(n){return"Mintable"===n.name})).state&&o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n    \n    impl PSP1155Mintable for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {\n        #[ink(message)]\n        #[modifiers(only_owner)]\n        fn mint_to(&mut self, to: AccountId, id: Id, amount: Balance) {\n            self._mint(to, id, amount);\n        }\n        #[ink(message)]\n        #[modifiers(only_owner)]\n        fn mint(&mut self, id: Id, amount: Balance) {\n            self._mint(Self::env().caller(), id, amount);\n        }\n    }\n    "):o.currentControlsState.find((function(n){return"Mintable"===n.name})).state?"\n    impl PSP1155Mintable for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {}"):"","\n    \n    impl ").concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            let mut instance = Self::default(); ").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n            instance.metadata.uri = '".concat(null===(t=o.currentControlsState.find((function(n){return"URI"===n.name})))||void 0===t?void 0:t.state,"';"):""," \n            instance\n        }\n        \n        #[ink(message)]\n        pub fn add_type(&mut self, id: Id) {\n            self.registered_ids.insert(id, true);\n        }\n        ").concat(o.currentControlsState.find((function(n){return"Mintable"===n.name})).state?"\n        #[ink(message)] ".concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n        #[modifiers(only_owner)]":"","\n        pub fn mint_tokens(&mut self, id: Id, amount: Balance) {\n            assert!(*self.registered_ids.get(&id).unwrap_or(&false));\n            self.mint(id, amount);\n        }"):"","\n    } \n}\n")}):(0,a.jsx)(x.Z,{language:"toml",wrapLongLines:!0,style:k.YC,children:'[package]\nname = "my_nft_token"\nversion = "1.0.0"\nedition = "2018"\n\n[dependencies]\nink_primitives = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_metadata = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false, features = ["derive"], optional = true }\nink_env = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_storage = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_lang = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_prelude = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "2.1", default-features = false, features = ["derive"] }\nscale-info = { version = "0.6.0", default-features = false, features = ["derive"], optional = true }\n\n# These dependencies\npsp1155 = { path = "../../contracts/token/psp1155", default-features = false } '.concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?'\nownable = { path = "../../contracts/access/ownable", default-features = false }':"",'\nbrush = { path = "../../utils/brush", default-features = false }\n\n[lib]\nname = "my_psp1155"\npath = "lib.rs"\ncrate-type = [\n    # Used for normal contract Wasm blobs.\n    "cdylib",\n]\n\n[features]\ndefault = ["std"]\nstd = [\n    "ink_primitives/std",\n    "ink_metadata",\n    "ink_metadata/std",\n    "ink_env/std",\n    "ink_storage/std",\n    "ink_lang/std",\n    "scale/std",\n    "scale-info",\n    "scale-info/std",\n\n    # These dependencies\n    "psp1155/std",\n    "brush/std",\n]\nink-as-dependency = []')})})]});case"psp721":return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:C().tabsSwitch,children:[(0,a.jsx)("div",{onClick:function(){return u("rust")},className:"rust"===l?C().activeTab:"",children:"lib.rs"}),(0,a.jsx)("div",{onClick:function(){return u("toml")},className:"toml"===l?C().activeTab:"",children:"Cargo.toml"})]}),(0,a.jsx)("div",{className:C().mainContent,children:"rust"===l?(0,a.jsx)(x.Z,{language:"rust",wrapLongLines:!0,style:k.YC,children:'#![cfg_attr(not(feature = "std"), no_std)]\n                    \n#[brush::contract]\npub mod my_nft_token {\n    use ink_prelude::{\n        string::String,\n        vec::Vec,\n    };\n    use psp721::{ '.concat(o.currentControlsState.find((function(n){return"Burnable"===n.name})).state||o.currentControlsState.find((function(n){return"Mintable"===n.name})).state||o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n        extensions::{".concat(o.currentControlsState.find((function(n){return"Burnable"===n.name})).state?"\n            burnable::*,":"").concat(o.currentControlsState.find((function(n){return"Mintable"===n.name})).state?"\n            mintable::*,":""," ").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n            metadata::*,":"","\n        }, "):"","\n        traits::*,\n    }; ").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n    use ownable::traits::*;":"","\n\n    #[derive(Default, PSP721Storage").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?", PSP721MetadataStorage":"").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?", OwnableStorage":"",")]\n    #[ink(storage)]\n    pub struct ").concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state,"{\n        #[PSP721StorageField]\n        psp721: PSP721Data, ").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n        #[PSP721MetadataStorageField]\n        metadata: PSP721MetadataData,":""," ").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n        #[OwnableStorageField]\n        ownable: OwnableData,":"","\n        next_id: u8,\n    }\n\n    impl PSP721 for ").concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {}").concat(o.currentControlsState.find((function(n){return"Burnable"===n.name})).state?"\n    impl PSP721Burnable for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {}"):""," ").concat(o.currentControlsState.find((function(n){return"Mintable"===n.name})).state?"\n    impl PSP721Mintable for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {}"):""," ").concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?"\n    impl Ownable for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {}"):""," ").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n    impl PSP721Metadata for ".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {}"):"","\n\n    impl ").concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state," {\n        /// A constructor which mints the first token to the owner\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            let mut instance = Self::default(); ").concat(o.currentControlsState.find((function(n){return"Metadata"===n.name})).state?"\n            instance.metadata.name = '".concat(o.currentControlsState.find((function(n){return"Name"===n.name})).state,"';\n            instance.metadata.symbol = '").concat(o.currentControlsState.find((function(n){return"Symbol"===n.name})).state,"'; "):"","  ").concat(o.currentControlsState.find((function(n){return"Mintable"===n.name})).state?"\n            instance.mint_token();":"\n            instance._mint([instance.next_id; 32]);\n            instance.next_id += 1;","\n            instance\n        }\n        ").concat(o.currentControlsState.find((function(n){return"Mintable"===n.name})).state?"\n        /// Mint method which mints a token and updates the id of next token\n        #[ink(message)]\n        pub fn mint_token(&mut self) {\n            self.mint([self.next_id; 32]);\n            self.next_id += 1;\n        }":"","\n    }\n}")}):(0,a.jsx)(x.Z,{language:"toml",wrapLongLines:!0,style:k.YC,children:'[package]\nname = "my_nft_token"\nversion = "1.0.0"\nedition = "2018"\n\n[dependencies]\nink_primitives = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_metadata = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false, features = ["derive"], optional = true }\nink_env = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_storage = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_lang = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_prelude = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "2.1", default-features = false, features = ["derive"] }\nscale-info = { version = "0.6.0", default-features = false, features = ["derive"], optional = true }\n\n# These dependencies\npsp721 = { path = "../../contracts/token/psp721", default-features = false } '.concat(o.currentControlsState.find((function(n){return"Ownable"===n.name})).state?'\nownable = { path = "../../contracts/access/ownable", default-features = false }':"",'\nbrush = { path = "../../utils/brush", default-features = false }\n\n[lib]\nname = "my_psp721"\npath = "lib.rs"\ncrate-type = [\n    # Used for normal contract Wasm blobs.\n    "cdylib",\n]\n\n[features]\ndefault = ["std"]\nstd = [\n    "ink_primitives/std",\n    "ink_metadata",\n    "ink_metadata/std",\n    "ink_env/std",\n    "ink_storage/std",\n    "ink_lang/std",\n    "scale/std",\n    "scale-info",\n    "scale-info/std",\n\n    # These dependencies\n    "psp721/std",\n    "brush/std",\n]\nink-as-dependency = []')})})]})});default:return(0,a.jsx)(a.Fragment,{})}return(0,a.jsx)(a.Fragment,{})},w=e(1233),y=function(){var n=(0,c.useState)(0),t=n[0],e=n[1],r=(0,c.useState)(g),o=r[0],i=(r[1],(0,c.useState)([])),l=i[0],u=i[1],d=(0,c.useState)(!1),f=d[0],m=d[1];return(0,c.useEffect)((function(){var n=[];o.forEach((function(t,e){n.push({type:t.name,currentControlsState:[]}),t.controls.forEach((function(t){t.optionList.forEach((function(t){n[e].currentControlsState.push({name:t.name,state:t.initState})}))}))})),u(n)}),[o]),(0,a.jsxs)("div",{className:_().componentContainer,id:"wizard",children:[(0,a.jsx)("h2",{className:"primaryHeadline",children:"How to use: "}),(0,a.jsx)("div",{className:_().scrollWrapper,children:(0,a.jsxs)("div",{className:_().wizardWrapper,children:[(0,a.jsxs)("div",{className:_().header,children:[(0,a.jsxs)("div",{className:_().tokenStandardRow,children:[(0,a.jsx)("div",{className:"".concat(_().controlsDisplayingController," ").concat(f?"":_().open),onClick:function(){return m(!f)},children:(0,a.jsx)("img",{src:"/icons/arrowDown.svg",alt:"icon"})}),o.map((function(n,r){return(0,a.jsx)("div",{onClick:function(){e(r)},className:t===r?"".concat(_().active," ").concat(_().tokenStandard):"".concat(_().tokenStandard),children:n.name},r.toString())}))]}),(0,a.jsx)("div",{className:_().actionsRow})]}),(0,a.jsxs)("div",{className:_().body,children:[(0,a.jsx)("div",{className:f?"".concat(_().contractControls," ").concat(_().closed):"".concat(_().contractControls),children:o.map((function(n,e){return(0,a.jsx)("div",{style:{display:t!==e?"none":"block"},children:n.controls.map((function(n,t){return(0,a.jsxs)("div",{className:_().inputSection,children:[(0,a.jsx)("div",{className:_().controlsSectionName,children:n.sectionName}),(0,a.jsx)("div",{className:_().settingsInputs,children:n.optionList.map((function(n,t){var r,o;if("Symbol"===n.name||"URI"===n.name){var i,s,c,d=null===(i=l[e])||void 0===i?void 0:i.currentControlsState.map((function(n){return n.name})).indexOf("Metadata");if(!1===(null===(s=l[e])||void 0===s||null===(c=s.currentControlsState[d])||void 0===c?void 0:c.state))return}switch(n.type){case"text":return(0,a.jsxs)("div",{className:_().textInput,children:[(0,a.jsxs)("div",{className:_().checkboxContainerNested,children:[(0,a.jsxs)("label",{htmlFor:n.name.split(" ").join("_"),children:[n.name,":"]}),(0,a.jsx)("input",{type:n.type,id:n.name.split(" ").join("_"),name:n.name.split(" ").join("_"),value:null===(r=l[e])||void 0===r?void 0:r.currentControlsState[null===(o=l[e])||void 0===o?void 0:o.currentControlsState.map((function(n){return n.name})).indexOf(n.name)].state,onChange:function(t){var a=(0,S.Z)(l),r=a[e].currentControlsState.map((function(n){return n.name})).indexOf(n.name);a[e].currentControlsState[r].state=t.target.value,u(a)}})]}),n.tooltip&&n.tooltip.length>1?(0,a.jsxs)("div",{className:_().tooltipContainer,children:[(0,a.jsx)("div",{className:_().tooltipInfo,children:n.tooltip}),(0,a.jsx)("img",{className:_().infoIcon,src:"/icons/infoIcon.svg",alt:"icon"})]}):null]},t.toString());case"checkbox":return(0,a.jsxs)("label",{className:_().checkboxContainer,children:[(0,a.jsxs)("div",{className:_().checkboxContainerNested,children:[(0,a.jsx)("input",{type:n.type,id:n.name.split(" ").join("_"),name:n.name.split(" ").join("_"),onChange:function(t){var a=(0,S.Z)(l),r=a[e].currentControlsState.map((function(n){return n.name})).indexOf(n.name);a[e].currentControlsState[r].state=t.target.checked,u(a)}}),(0,a.jsx)("span",{children:n.name})]}),n.tooltip&&n.tooltip.length>1?(0,a.jsxs)("div",{className:_().tooltipContainer,children:[(0,a.jsx)("div",{className:_().tooltipInfo,children:n.tooltip}),(0,a.jsx)("img",{className:_().infoIcon,src:"/icons/infoIcon.svg",alt:"icon"})]}):null]},t.toString())}}))})]},t.toString())}))},e.toString())}))}),(0,a.jsx)("div",{className:_().contractOutput,children:o.map((function(n,e){return(0,a.jsx)("div",{style:{display:t!==e?"none":"block"},children:(0,a.jsx)(j,{data:l[e]})},e.toString())}))})]})]})}),(0,a.jsx)("div",{className:_().docsLink,children:(0,a.jsx)(s.default,{href:w.co,children:(0,a.jsx)("a",{children:"Documentation"})})})]})},P=e(690),N=e.n(P),M=function(){return(0,a.jsxs)("div",{className:N().informationBlockWrapper,children:[(0,a.jsx)("h2",{className:"primaryHeadline",children:"Openbrush provides:"}),(0,a.jsxs)("div",{className:N().contentWrapper,children:[(0,a.jsxs)("div",{className:N().contentUnit,children:[(0,a.jsxs)("h3",{children:["Implementation of ",(0,a.jsx)(s.default,{href:"https://github.com/w3f/PSPs",children:(0,a.jsx)("a",{children:"Polkadot Standards"})}),":"]}),(0,a.jsx)("img",{src:"/img/logo1.svg",alt:"illustration"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"PSP22: Fungible Token"})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"PSP721: Non-Fungible Token"})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"PSP1155: Multi-Token"})})]})]}),(0,a.jsxs)("div",{className:N().contentUnit,children:[(0,a.jsx)("h3",{children:"Useful extensions with custom logic:"}),(0,a.jsx)("img",{src:"/img/logo2.svg",alt:"illustration"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"Ownable, Roles"})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"Mintable, Burnable"})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"Timelock, Payment Splitter"})})]})]}),(0,a.jsxs)("div",{className:N().contentUnit,children:[(0,a.jsx)("h3",{children:"Useful macro which simplifies development:"}),(0,a.jsx)("img",{src:"/img/logo3.svg",alt:"illustration"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"Function modifiers"})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"Storage definition"})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"Trait definitions"})})]})]})]}),(0,a.jsx)("div",{className:N().informationBlockWrapperDecor})]})};function B(){return(0,c.useEffect)((function(){p().highlightAll()}),[]),(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:"Openbrush"}),(0,a.jsx)("meta",{name:"keywords",content:"openbrush"}),(0,a.jsx)("meta",{name:"description",content:"openbrush"})]}),(0,a.jsx)(l,{title:["Smart contracts library for",(0,a.jsx)("span",{style:{color:"#E6007A"},children:" Polkadot "},""),"on",(0,a.jsx)("span",{style:{color:"#B4BE68"},children:" Rust "},"")],illustration:"/img/bannerIllustration.svg"}),(0,a.jsx)(M,{}),(0,a.jsx)(f,{title:"The world\u2019s leading projects trust OpenBrush",data:h}),(0,a.jsx)(y,{})]})}},8581:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(1413)}])},2833:function(n){n.exports={bannerContainer:"Banner_bannerContainer__1q1ki",bannerContainerDecorWrapper:"Banner_bannerContainerDecorWrapper__nXf5G",leftBottom:"Banner_leftBottom__Y2H1S",rightBottom:"Banner_rightBottom__3hZEn",ctaContainer:"Banner_ctaContainer__31cMt",bannerInnerContentHolder:"Banner_bannerInnerContentHolder__1PK8L",headlineBlock:"Banner_headlineBlock__UmnJ1",illustrationConstructor:"Banner_illustrationConstructor__3fBom",brushImg:"Banner_brushImg__1b6LW",illustrationContainer:"Banner_illustrationContainer__2cQk9",ink:"Banner_ink__2uWTn",openbrush:"Banner_openbrush__23cWe",contracts:"Banner_contracts__3SBRS"}},690:function(n){n.exports={informationBlockWrapper:"Information_informationBlockWrapper__1dkxt",contentWrapper:"Information_contentWrapper__2XeRP",contentUnit:"Information_contentUnit__1t4Ch",informationBlockWrapperDecor:"Information_informationBlockWrapperDecor__3-VP9"}},8073:function(n){n.exports={partnersContainer:"Partners_partnersContainer__2RzlM",logoWrapper:"Partners_logoWrapper__3wu-0",partnersContainerDecor:"Partners_partnersContainerDecor__2GwuY"}},7246:function(n){n.exports={componentContainer:"Wizard_componentContainer__3zJFA",scrollWrapper:"Wizard_scrollWrapper__2Csdv",wizardWrapper:"Wizard_wizardWrapper__iyNAC",header:"Wizard_header__1HWND",tokenStandardRow:"Wizard_tokenStandardRow__1LGPX",controlsDisplayingController:"Wizard_controlsDisplayingController__1KGvw",open:"Wizard_open__33Pqm",tokenStandard:"Wizard_tokenStandard__3UODM",active:"Wizard_active__2-1H9",actionsRow:"Wizard_actionsRow__PZGP1",copyToClipboard:"Wizard_copyToClipboard__1iVhd",copyIcon:"Wizard_copyIcon__3pho0",body:"Wizard_body__20k8h",contractControls:"Wizard_contractControls__30QNB",closed:"Wizard_closed__dsA3j",inputSection:"Wizard_inputSection__hTxLh",settingsInputs:"Wizard_settingsInputs__WE65c",textInput:"Wizard_textInput__23e6v",checkboxContainerNested:"Wizard_checkboxContainerNested__3Bww1",controlsSectionName:"Wizard_controlsSectionName__3YTE0",checkboxContainer:"Wizard_checkboxContainer__1KL5V",tooltipContainer:"Wizard_tooltipContainer__FbqR4",tooltipInfo:"Wizard_tooltipInfo__DIVgG",infoIcon:"Wizard_infoIcon__2YE8v",contractOutput:"Wizard_contractOutput__11CLG",docsLink:"Wizard_docsLink__jXrXE"}},5345:function(n){n.exports={tabsSwitch:"WizardOutput_tabsSwitch__3-BOf",activeTab:"WizardOutput_activeTab__b4yTQ"}}},function(n){n.O(0,[905,774,888,179],(function(){return t=8581,n(n.s=t);var t}));var t=n.O();_N_E=t}]);