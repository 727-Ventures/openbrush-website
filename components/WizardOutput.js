import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {useEffect, useState} from "react";
import wizardOutput from "./../styles/WizardOutput.module.scss";


const WizardOutput = ({data}) => {
    const [output, setOutPut] = useState(data)
    const [selectedTab, setSelectedTab] = useState('rust')

    useEffect(() => {
        setOutPut(data);
    }, [data, output])

    //Totally unreadable and unoptimized approach. TODO: Make three separate modules with placeholders, refactor
    if (output)
     switch (output.type) {
        case 'psp22':
            return (
                <div>
                    <div className={wizardOutput.tabsSwitch}>
                        <div onClick={() => setSelectedTab('rust')} className={ selectedTab === 'rust' ? wizardOutput.activeTab : ''}>lib.rs</div>
                        <div onClick={() => setSelectedTab('toml')} className={ selectedTab === 'toml' ? wizardOutput.activeTab : ''}>Cargo.toml</div>
                    </div>
                    <div className={wizardOutput.mainContent}>
                        {
                            selectedTab === 'rust' ?
                             (<SyntaxHighlighter language="rust" wrapLongLines={true} style={vscDarkPlus}>
                                {`#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]
                                
#[brush::contract]
pub mod my_token {
    use ink_prelude::{
        string::String,
        vec::Vec,
    };
    use brush::contracts::psp22::*; ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `
    use brush::contracts::psp22::extensions::metadata::*;` : ''} ${output.currentControlsState.find(x => x.name === 'Burnable').state ? `
    use brush::contracts::psp22::extensions::burnable::*;` : ''} ${output.currentControlsState.find(x => x.name === 'Mintable').state ? `
    use brush::contracts::psp22::extensions::mintable::*;` : ''} ${output.currentControlsState.find(x => x.name === 'Wrapper').state ? `
    use brush::contracts::psp22::extensions::wrapper::*;` : ''} ${output.currentControlsState.find(x => x.name === 'FlashMint').state ? `
    use brush::contracts::psp22::extensions::flashmint::*;` : ''} ${output.currentControlsState.find(x => x.name === 'Pausable').state ? `
    use brush::{
        contracts::pausable::*,
        modifiers,
    };`: ''}

    #[ink(storage)]
    #[derive(Default, PSP22Storage${output.currentControlsState.find(x => x.name === 'Metadata').state ? `, PSP22MetadataStorage` : ''}${output.currentControlsState.find(x => x.name === 'Wrapper').state ? `, PSP22WrapperStorage` : ''}${output.currentControlsState.find(x => x.name == 'Pausable').state ? `, PausableStorage` : ''})]
    pub struct ${output.currentControlsState.find(x => x.name === 'Name').state} {
        #[PSP22StorageField]
        psp22: PSP22Data, ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `
        #[PSP22MetadataStorageField]
        metadata: PSP22MetadataData,` : ''} ${output.currentControlsState.find(x => x.name === 'Wrapper').state ? `
        #[PSP22WrapperStorageField]
        wrapper: PSP22WrapperData,` : ''} ${output.currentControlsState.find(x => x.name === 'Pausable').state ? `
        #[PausableStorageField]
        pause: PausableData,` : ''} ${output.currentControlsState.find(x => x.name === 'Capped').state ? `
        cap: Balance,`: ''}
    }
        
    impl PSP22 for ${output.currentControlsState.find(x => x.name === 'Name').state} {} ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `
    impl PSP22Metadata for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ''} ${output.currentControlsState.find(x => x.name === 'Burnable').state ? `
    impl PSP22Burnable for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ''} ${output.currentControlsState.find(x => x.name === 'Mintable').state ? `
    impl PSP22Mintable for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ''} ${output.currentControlsState.find(x => x.name === 'Wrapper').state ? `
    impl PSP22Wrapper for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ''} ${output.currentControlsState.find(x => x.name === 'FlashMint').state ? `
    impl FlashLender for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ''} ${output.currentControlsState.find(x => x.name === 'Pausable').state ? `
    impl Pausable for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ''}
        
    impl ${output.currentControlsState.find(x => x.name === 'Name').state} {
        #[ink(constructor)]
        pub fn new(initial_supply: Balance${output.currentControlsState.find(x => x.name === 'Metadata').state ? `, name: Option<String>, symbol: Option<String>, decimal: u8` : ''}${output.currentControlsState.find(x => x.name === 'Capped').state ? `, cap: Balance` : ''}) -> Self {
            let mut instance = Self::default(); ${output.currentControlsState.find(x => x.name === 'Capped').state ? `
            assert!(instance.init_cap(cap).is_ok());` : ''} ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `
            instance.metadata.name = name;
            instance.metadata.symbol = symbol;
            instance.metadata.decimals = decimal;` : '' }
            assert!(instance._mint(instance.env().caller(), initial_supply).is_ok());
            instance
        }  ${output.currentControlsState.find(x => x.name === 'Burnable').state ? `
            
        #[ink(message)]
        pub fn burn_from_many(&mut self, accounts: Vec<(AccountId, Balance)>) {
            for account in accounts.iter() {
                self.burn(account.0, account.1);
            }
        }` : ''} ${output.currentControlsState.find(x => x.name === 'Mintable').state ? `
            
        #[ink(message)]
        pub fn mint_to(&mut self, account: AccountId, amount: Balance) {
            self.mint(account, amount);
        }` : ''} ${output.currentControlsState.find(x => x.name === 'Pausable').state ? `
        
        #[ink(message)]
        pub fn change_state(&mut self) -> Result<(), PSP22Error> {
            if self.paused() {
                self._unpause()
            } else {
                self._pause()
            }
        }` : ''} ${output.currentControlsState.find(x => x.name === 'Capped').state ? `
        
        /// Method to return token's cap
        #[ink(message)]
        pub fn cap(&self) -> Balance {
            self.cap
        }
        
        /// Overrides the \`_mint\` function to check for cap overflow before minting tokens
        /// Performs \`PSP22Internal::_mint\` after the check succeeds
        fn _mint(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
            if (self.total_supply() + amount) > self.cap() {
                return Err(PSP22Error::Custom(String::from("Cap exceeded")))
            }
            PSP22Internal::_mint(self, account, amount)
        }

        /// Initializes the token's cap
        fn init_cap(&mut self, cap: Balance) -> Result<(), PSP22Error> {
            if cap <= 0 {
                return Err(PSP22Error::Custom(String::from("Cap must be above 0")))
            }
            self.cap = cap;
            Ok(())
        }` : ''}
    }
}`}
                            </SyntaxHighlighter>) :
                             (<SyntaxHighlighter language="toml" wrapLongLines={true} style={vscDarkPlus}>
                                {`[package]
name = "my_token"
version = "1.0.0"
edition = "2018"

[dependencies]
ink_primitives = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_metadata = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false, features = ["derive"], optional = true }
ink_env = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_storage = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_lang = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_prelude = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }

scale = { package = "parity-scale-codec", version = "2.1", default-features = false, features = ["derive"] }
scale-info = { version = "1.0.0", default-features = false, features = ["derive"], optional = true }

# Include brush as a dependency and enable default implementation for PSP22 via brush feature
brush = { tag = "v1.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22"${output.currentControlsState.find(x => x.name === 'Pausable').state ? `, "pausable"` : ''}] }

[lib]
name = "my_psp22"
path = "lib.rs"
crate-type = [
    # Used for normal contract Wasm blobs.
    "cdylib",
]

[features]
default = ["std"]
std = [
    "ink_primitives/std",
    "ink_metadata",
    "ink_metadata/std",
    "ink_env/std",
    "ink_storage/std",
    "ink_lang/std",
    "scale/std",
    "scale-info",
    "scale-info/std",

    "brush/std",
]
`}
                            </SyntaxHighlighter>)
                        }
                    </div>
                </div>
            )        
        case 'psp1155':
            return (
                <div>
                    <div className={wizardOutput.tabsSwitch}>
                        <div onClick={() => setSelectedTab('rust')} className={ selectedTab === 'rust' ? wizardOutput.activeTab : ''}>lib.rs</div>
                        <div onClick={() => setSelectedTab('toml')} className={ selectedTab === 'toml' ? wizardOutput.activeTab : ''}>Cargo.toml</div>
                    </div>
                    <div className={wizardOutput.mainContent}>
                        {
                            selectedTab === 'rust' ?
                                (<SyntaxHighlighter language="rust" wrapLongLines={true} style={vscDarkPlus}>
                                    {`#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[brush::contract]
pub mod my_psp1155 {
    use ink_prelude::{
        string::String,
        vec,
    };
    use ink_storage::collections::HashMap as StorageHashMap;
    use brush::contracts::psp1155::*; ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `
    use brush::contracts::psp1155::extensions::metadata::*;` : ''} ${output.currentControlsState.find(x => x.name === 'Burnable').state ? `
    use brush::contracts::psp1155::extensions::burnable::*;` : ''} ${output.currentControlsState.find(x => x.name === 'Mintable').state ? `
    use brush::contracts::psp1155::extensions::mintable::*;` : ''}

    #[ink(storage)]
    #[derive(Default, PSP1155Storage${output.currentControlsState.find(x => x.name === 'Metadata').state ? `, PSP1155MetadataStorage` : ``})]
    pub struct ${output.currentControlsState.find(x => x.name === 'Name').state} {
        #[PSP1155StorageField]
        psp1155: PSP1155Data,
        denied_ids: StorageHashMap<Id, ()>, ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `
        #[PSP1155MetadataStorageField]
        metadata: PSP1155MetadataData,` : ``}  
    }
    
    impl PSP1155 for ${output.currentControlsState.find(x => x.name === 'Name').state} {} ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `
    impl PSP1155Metadata for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ''} ${output.currentControlsState.find(x => x.name === 'Burnable').state ? `
    impl PSP1155Burnable for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ''} ${output.currentControlsState.find(x => x.name === 'Mintable').state ? `
    impl PSP1155Mintable for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ''}
    
    impl ${output.currentControlsState.find(x => x.name === 'Name').state} {
        #[ink(constructor)]
        pub fn new(${output.currentControlsState.find(x => x.name === 'Metadata').state ? `uri: Option<String>` : ''}) -> Self {
            ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `let mut instance = Self::default();
            instance.metadata.uri = uri;
            instance` : `Self::default()`}
        }

        #[ink(message)]
        pub fn deny(&mut self, id: Id) {
            self.denied_ids.insert(id, ());
        } ${output.currentControlsState.find(x => x.name === 'Mintable').state ? `
        #[ink(message)]
        pub fn mint_tokens(&mut self, id: Id, amount: Balance) -> Result<(), PSP1155Error> {
            if self.denied_ids.get(&id).is_some() {
                return Err(PSP1155Error::Custom(String::from("Id is denied")))
            }
            self._mint_to(Self::env().caller(), vec![(id, amount)])
        }` : ''}
    } 
}
`}
                                </SyntaxHighlighter>) :
                                (<SyntaxHighlighter language="toml" wrapLongLines={true} style={vscDarkPlus}>
                                    {`[package]
name = "my_psp1155"
version = "1.0.0"
edition = "2018"

[dependencies]
ink_primitives = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_metadata = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false, features = ["derive"], optional = true }
ink_env = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_storage = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_lang = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_prelude = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }

scale = { package = "parity-scale-codec", version = "2.1", default-features = false, features = ["derive"] }
scale-info = { version = "1.0.0", default-features = false, features = ["derive"], optional = true }

# These dependencies
brush = { tag = "v1.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp1155"] }

[lib]
name = "my_psp1155"
path = "lib.rs"
crate-type = [
    # Used for normal contract Wasm blobs.
    "cdylib",
]

[features]
default = ["std"]
std = [
    "ink_primitives/std",
    "ink_metadata",
    "ink_metadata/std",
    "ink_env/std",
    "ink_storage/std",
    "ink_lang/std",
    "scale/std",
    "scale-info",
    "scale-info/std",

    # These dependencies
    "brush/std",
]
ink-as-dependency = []`}
                                </SyntaxHighlighter>)
                        }
                    </div>
                </div>)
        case 'psp34':
            return (<>
                <div>
                    <div className={wizardOutput.tabsSwitch}>
                        <div onClick={() => setSelectedTab('rust')} className={ selectedTab === 'rust' ? wizardOutput.activeTab : ''}>lib.rs</div>
                        <div onClick={() => setSelectedTab('toml')} className={ selectedTab === 'toml' ? wizardOutput.activeTab : ''}>Cargo.toml</div>
                    </div>
                    <div className={wizardOutput.mainContent}>
                        {
                            selectedTab === 'rust' ?
                                (<SyntaxHighlighter language='rust' wrapLongLines={true} style={vscDarkPlus}>
                                        {`#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]
                    
#[brush::contract]
pub mod my_psp34 {
    use ink_prelude::string::String;
    use brush::contracts::psp34::*; ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `
    use brush::contracts::psp34::extensions::metadata::*;` : ''} ${output.currentControlsState.find(x => x.name === 'Burnable').state ? `
    use brush::contracts::psp34::extensions::burnable::*;` : ''} ${output.currentControlsState.find(x => x.name === 'Mintable').state ? `
    use brush::contracts::psp34::extensions::mintable::*;` : ''}
    

    #[derive(Default, PSP34Storage${output.currentControlsState.find(x => x.name === 'Metadata').state ? `, PSP34MetadataStorage` : ''})]
    #[ink(storage)]
    pub struct ${output.currentControlsState.find(x => x.name === 'Name').state}{
        #[PSP34StorageField]
        psp34: PSP34Data,
        next_id: u8, ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `
        #[PSP34MetadataStorageField]
        metadata: PSP34MetadataData,` : ''}
    }

    impl PSP34 for ${output.currentControlsState.find(x => x.name === 'Name').state} {}${output.currentControlsState.find(x => x.name === 'Burnable').state ? `
    impl PSP34Burnable for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ''} ${output.currentControlsState.find(x => x.name === 'Mintable').state ? `
    impl PSP34Mintable for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ''} ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `
    impl PSP34Metadata for ${output.currentControlsState.find(x => x.name === 'Name').state} {}
    impl PSP34Internal for ${output.currentControlsState.find(x => x.name === 'Name').state} {}` : ``}

    impl ${output.currentControlsState.find(x => x.name === 'Name').state} {
        #[ink(constructor)]
        pub fn new(id: Id) -> Self {
            ${output.currentControlsState.find(x => x.name === 'Metadata').state ? `let mut instance = Self::default();
            instance._set_attribute(id.clone(), String::from("name").into_bytes(), String::from("${output.currentControlsState.find(x => x.name === 'Name').state}").into_bytes());
            instance._set_attribute(id, String::from("symbol").into_bytes(), String::from("${output.currentControlsState.find(x => x.name === 'Symbol').state}").into_bytes());${output.currentControlsState.find(x => x.name === 'Mintable').state ? `
            instance.mint_token();` : ''}
            instance` : 'Self::default()'}
        } ${output.currentControlsState.find(x => x.name === 'Mintable').state ? `
        /// Mint method which mints a token and updates the id of next token
        #[ink(message)]
        pub fn mint_token(&mut self) {
            self.mint(Self::env().account_id(), Id::U8(self.next_id));
            self.next_id += 1;
        }` : ''}
    }
}`}
                                    </SyntaxHighlighter>) :
                                (<SyntaxHighlighter language="toml" wrapLongLines={true} style={vscDarkPlus}>
                                    {`[package]
name = "my_psp34"
version = "1.0.0"
edition = "2018"

[dependencies]
ink_primitives = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_metadata = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false, features = ["derive"], optional = true }
ink_env = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_storage = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_lang = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }
ink_prelude = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }

scale = { package = "parity-scale-codec", version = "2.1", default-features = false, features = ["derive"] }
scale-info = { version = "1.0.0", default-features = false, features = ["derive"], optional = true }

# These dependencies
brush = { tag = "v1.3.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp34"] }

[lib]
name = "my_psp34"
path = "lib.rs"
crate-type = [
    # Used for normal contract Wasm blobs.
    "cdylib",
]

[features]
default = ["std"]
std = [
    "ink_primitives/std",
    "ink_metadata",
    "ink_metadata/std",
    "ink_env/std",
    "ink_storage/std",
    "ink_lang/std",
    "scale/std",
    "scale-info",
    "scale-info/std",

    # These dependencies
    "brush/std",
]
ink-as-dependency = []`}
                                </SyntaxHighlighter>)
                        }
                    </div>
                </div>
            </>)
        default:
          return (<></>)
    }
    return (<></>)

}

export default WizardOutput;

