export const wizardConfig = [
    {
        name: 'psp22',
        controls: [
            {
                sectionName: 'Constructor',
                optionList: [
                    {
                        name: 'Name',
                        type: 'text',
                        initState: 'MyPSP22',
                        tooltip: ''
                    },
                    {
                        name: 'Symbol',
                        type: 'text',
                        initState: 'MPSP',
                        tooltip: ''
                    },
                    {
                        name: 'Premint',
                        type: 'text',
                        initState: '100',
                        tooltip: ''
                    },
                ]
            },
            {
                sectionName: 'Extensions',
                optionList: [
                    {
                        name: 'Metadata',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Metadata for [`PSP22`] '
                    },
                    {
                        name: 'Mintable',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Extension of [`PSP22`] that allows create `amount` tokens and assigns them to `account`, increasing the total supply'
                    },
                    {
                        name: 'Burnable',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Extension of [`PSP22`] that allows token holders to destroy both their own tokens and those that they have an allowance for.'
                    },
                    {
                        name: 'Wrapper',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Extension of [`PSP22`] that allows you to wrap your PSP22 token in a PSP22Wrapper token which can be used for example for governance'
                    },
                    {
                        name: 'FlashMint',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Extension of [`PSP22`] that allows the user to perform a flash loan on the token my minting the borrowd amount and then burning it along with fees for the loan'
                    },
                    {
                        name: 'Pausable',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Extension of [`PSP22`] that allows you to pause all token operations'
                    },
                    {
                        name: 'Capped',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Extension of [`PSP22`] that allows you to implement with a supply cap, analogue to ERC20Capped'
                    },
                    {
                        name: 'Ownable',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Openbrush feature that allows you to manage the ownership of contract'
                    },
                    {
                        name: 'AccessControl',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Openbrush feature that allows you to manage the roles of users'
                    }
                ]
            }
        ],
    },
    {
        name: 'psp1155',
        controls: [
            {
                sectionName: 'Constructor',
                optionList: [
                    {
                        name: 'Name',
                        type: 'text',
                        initState: 'MyPSP1155',
                        tooltip: ''
                    },
                    {
                        name: 'URI',
                        type: 'text',
                        initState: 'https://...',
                        tooltip: ''
                    },
                ]
            },
            {
                sectionName: 'Extensions',
                optionList: [
                    {
                        name: 'Metadata',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Metadata for [`PSP1155`]'
                    },
                    {
                        name: 'Mintable',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Extension of [`PSP1155`] that allows minting of new tokens'
                    },
                    {
                        name: 'Burnable',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Extension of [`PSP1155`] that allows token holders to destroy their tokens'
                    },
                    {
                        name: 'Ownable',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Openbrush feature that allows you to manage the ownership of contract'
                    },
                    {
                        name: 'AccessControl',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Openbrush feature that allows you to manage the roles of users'
                    }
                ]
            }
        ],
    },
    {
        name: 'psp34',
        controls: [
            {
                sectionName: 'Constructor',
                optionList: [
                    {
                        name: 'Name',
                        type: 'text',
                        initState: 'MyPSP34',
                        tooltip: ''
                    },
                    {
                        name: 'Symbol',
                        type: 'text',
                        initState: 'MPSP',
                        tooltip: ''
                    },
                ]
            },
            {
                sectionName: 'Extensions',
                optionList: [
                    {
                        name: 'Metadata',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Metadata for [`PSP34`]'
                    },
                    {
                        name: 'Mintable',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Extension of [`PSP34`] that exposes the mint function'
                    },
                    {
                        name: 'Burnable',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Extension of [`PSP34`] that allows token holders to destroy their tokens'
                    },
                    {
                        name: 'Ownable',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Openbrush feature that allows you to manage the ownership of contract'
                    },
                    {
                        name: 'AccessControl',
                        type: 'checkbox',
                        initState: false,
                        tooltip: 'Openbrush feature that allows you to manage the roles of users'
                    }
                ]
            }
        ],
    },
]

