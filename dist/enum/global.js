"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbol = exports.Token = void 0;
var Token;
(function (Token) {
    Token["BITCOIN"] = "bitcoin";
    Token["ETHEREUM"] = "ethereum";
    Token["LITECOIN"] = "litecoin";
    Token["AVALANCHE"] = "avalanche-2";
    Token["SOLANA"] = "solana";
    Token["NEAR"] = "near";
    Token["ARBITRUM"] = "arbitrum";
    Token["COSMOS"] = "cosmos";
    Token["APTOS"] = "aptos";
    Token["CHAINLINK"] = "chainlink";
    // 10
    Token["POLKADOT"] = "polkadot";
    Token["INJECTIVE"] = "injective-protocol";
    Token["ALGORAND"] = "algorand";
    Token["GRAPH"] = "the-graph";
    Token["FILECOIN"] = "filecoin";
    Token["STARKNET"] = "starknet";
    Token["POLYGON"] = "matic-network";
    Token["MULTIVERSX"] = "elrond-erd-2";
    Token["HEDERA"] = "hedera-hashgraph";
    Token["OSMOSIS"] = "osmosis";
    // 20
    Token["MINA"] = "mina-protocol";
    Token["AXIE"] = "axie-infinity";
    Token["TRUSTWALLET"] = "trust-wallet-token";
    Token["DOGECOIN"] = "dogecoin";
    Token["UNISWAP"] = "uniswap";
    Token["GMX"] = "gmx";
    Token["FLOW"] = "flow";
    Token["RONIN"] = "ronin";
    Token["JASMY"] = "jasmycoin";
    Token["CARDANO"] = "cardano";
    // 30
    Token["ETHEREUM_CLASSIC"] = "ethereum-classic";
    Token["SHIBA"] = "shiba-inu";
    Token["SUSHI"] = "sushi";
    Token["BOOK_OF_MEME"] = "book-of-meme";
    Token["SAND"] = "the-sandbox";
    Token["RAYDIUM"] = "raydium";
    Token["RIPPLE"] = "ripple";
    Token["SUI"] = "sui";
    Token["CETUS_PROTOCOL"] = "cetus-protocol";
    Token["BAND_PROTOCOL"] = "band-protocol";
    // 40
    Token["AUTOMATA"] = "automata";
    Token["MOBOX"] = "mobox";
    Token["AAVE"] = "aave";
    Token["APE_COIN"] = "apecoin";
    Token["THETA"] = "theta-token";
    Token["COMPOUND_GOVERNANCE"] = "compound-governance-token";
    Token["SYNTHETIX_NETWORK"] = "havven";
    Token["PANCAKE_SWAP"] = "pancakeswap-token";
    Token["DIA"] = "dia-data";
    Token["ONE_INCH"] = "1inch";
    // 50
    Token["MANTA_NETWORK"] = "manta-network";
    Token["REEF"] = "reef";
    Token["NEO"] = "neo";
    Token["NERVOS_NETWORK"] = "nervos-network";
    Token["KUSAMA"] = "kusama";
    Token["STELLAR"] = "stellar";
    Token["RADIANT_CAPITAL"] = "radiant-capital";
    Token["YEARN_FINANCE"] = "yearn-finance";
    Token["INTERNET_COMPUTER"] = "internet-computer";
    Token["WORMHOLE"] = "wormhole";
    // 60
    Token["ALIEN_WORLDS"] = "alien-worlds";
    Token["JUPITER"] = "jupiter";
    Token["SAFEPAL"] = "safepal";
    Token["ONTOLOGY"] = "ontology";
    Token["VERGE"] = "verge";
    Token["BISWAP"] = "biswap";
    Token["KAVA"] = "kava";
    Token["MY_NEIGHBOR_ALICE"] = "my-neighbor-alice";
    Token["VANAR_CHAIN"] = "vanar-chain";
    Token["MINES_OF_DALARNIA"] = "mines-of-dalarnia";
    // 70
    Token["THETA_FUEL"] = "theta-fuel";
    Token["ASTAR"] = "astar";
    Token["DODO"] = "dodo";
    Token["CHIA"] = "chia";
    Token["LINEAR"] = "linear";
    Token["LITENTRY"] = "litentry";
    Token["MOONBEAM"] = "moonbeam";
    Token["RAVENCOIN"] = "ravencoin";
    Token["CELO"] = "celo";
    Token["ANKR"] = "ankr";
    // 80
    Token["OASIS_NETWORK"] = "oasis-network";
    Token["DECENTRALAND"] = "decentraland";
    Token["ZILLIQA"] = "zilliqa";
    Token["EOS"] = "eos";
    Token["EVMOS"] = "evmos";
    Token["IOTA"] = "iota";
})(Token || (exports.Token = Token = {}));
var Symbol;
(function (Symbol) {
    Symbol["BTC"] = "btc";
    Symbol["ETH"] = "eth";
    Symbol["LTC"] = "ltc";
    Symbol["AVAX"] = "avax";
    Symbol["SOL"] = "sol";
    Symbol["NEAR"] = "near";
    Symbol["ARB"] = "arb";
    Symbol["ATOM"] = "atom";
    Symbol["APT"] = "apt";
    Symbol["LINK"] = "link";
    // 10
    Symbol["DOT"] = "dot";
    Symbol["INJ"] = "inj";
    Symbol["ALGO"] = "algo";
    Symbol["GRT"] = "grt";
    Symbol["FIL"] = "fil";
    Symbol["STRK"] = "strk";
    Symbol["MATIC"] = "matic";
    Symbol["EGLD"] = "egld";
    Symbol["HBAR"] = "hbar";
    Symbol["OSMO"] = "osmo";
    // 20
    Symbol["MINA"] = "mina";
    Symbol["AXS"] = "axs";
    Symbol["TWT"] = "twt";
    Symbol["DOGE"] = "doge";
    Symbol["UNI"] = "uni";
    Symbol["GMX"] = "gmx";
    Symbol["FLOW"] = "flow";
    Symbol["RON"] = "ron";
    Symbol["JASMY"] = "jasmy";
    Symbol["ADA"] = "ada";
    // 30
    Symbol["ETC"] = "etc";
    Symbol["SHIBA"] = "shiba";
    Symbol["SUSHI"] = "sushi";
    Symbol["BOME"] = "bome";
    Symbol["SAND"] = "sand";
    Symbol["RAY"] = "ray";
    Symbol["XRP"] = "xrp";
    Symbol["SUI"] = "sui";
    Symbol["CETUS"] = "cetus";
    Symbol["BAND"] = "band";
    // 40
    Symbol["ATA"] = "ata";
    Symbol["MBOX"] = "mbox";
    Symbol["AAVE"] = "aave";
    Symbol["APE"] = "ape";
    Symbol["THETA"] = "theta";
    Symbol["COMP"] = "comp";
    Symbol["SNX"] = "snx";
    Symbol["CAKE"] = "cake";
    Symbol["DIA"] = "dia";
    Symbol["ONE_INCH"] = "1inch";
    // 50
    Symbol["MANTA"] = "manta";
    Symbol["REEF"] = "reef";
    Symbol["NEO"] = "neo";
    Symbol["CKB"] = "ckb";
    Symbol["KSM"] = "ksm";
    Symbol["XLM"] = "xlm";
    Symbol["RDNT"] = "rdnt";
    Symbol["YFI"] = "yfi";
    Symbol["ICP"] = "icp";
    Symbol["W"] = "w";
    // 60
    Symbol["TLM"] = "tlm";
    Symbol["JUP"] = "jup";
    Symbol["SFP"] = "sfp";
    Symbol["ONT"] = "ont";
    Symbol["XVG"] = "xvg";
    Symbol["BSW"] = "bsw";
    Symbol["KAVA"] = "kava";
    Symbol["ALICE"] = "alice";
    Symbol["VANRY"] = "vanry";
    Symbol["DAR"] = "dar";
    // 70
    Symbol["TFUEL"] = "tfuel";
    Symbol["ASTR"] = "astr";
    Symbol["DODO"] = "dodo";
    Symbol["XCH"] = "xch";
    Symbol["LINA"] = "lina";
    Symbol["LIT"] = "lit";
    Symbol["GLMR"] = "glmr";
    Symbol["RVN"] = "rvn";
    Symbol["CELO"] = "celo";
    Symbol["ANKR"] = "ankr";
    // 80
    Symbol["ROSE"] = "rose";
    Symbol["MANA"] = "mana";
    Symbol["ZIL"] = "zil";
    Symbol["EOS"] = "eos";
    Symbol["EVMOS"] = "evmos";
    Symbol["IOTA"] = "iota";
})(Symbol || (exports.Symbol = Symbol = {}));
//# sourceMappingURL=global.js.map