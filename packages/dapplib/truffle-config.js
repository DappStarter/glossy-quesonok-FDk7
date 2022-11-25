require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name reward stereo purpose hunt inflict suspect gesture'; 
let testAccounts = [
"0xbdd0ebe3facb7aa069e1c9b3233132b84f6d08a2755c92e00211003f439180b4",
"0x889647b711d43573d4f2c444a2e0c239b04045ded3db8ad254eb1dc01dd50c40",
"0x11e35ab3dde6eb710086558043c1146b3d4db2eb5ab522b466d357eba4adc555",
"0x5a77e67e5b4c08ecff73d60c895268e18e2e74d2ae25cb2428c0246b78977527",
"0x1b1d97c858a0ce081408ad1181270f72d95de3e07e49d654da541ff2b9d25404",
"0xef1fd035aa46f1274f30de84b3ea7dc0ba378692d8a2f249116cbaf92eaf4a3b",
"0x6ef4717fc4d6e9c351f3c1b28b7d4d9d2c586c24139558c3b40cd363c2ec8d09",
"0xf24593770566c77c81a4023360ab2a07a8f207897fb5d80741be5412b8a35e21",
"0xefc3418a32f2ad0da4cf47f3a5393a7f45151c84a88b1c202c21913a6c4926ba",
"0x7536229d089508c9a173dbd8f2dbc3678885117fa36956501e4268b6274b944d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

