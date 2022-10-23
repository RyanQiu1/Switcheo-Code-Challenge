

import { BigNumber, ethers, providers } from "ethers";
let balance =   BigNumber.from(0);

const provider = ethers.providers.getDefaultProvider();
const getBalance_chan = async (address: string) => {
    balance = await provider.getBalance(address);
    console.log(address + " " + balance);
}
const ERC20_ABI = [
    "function name() view returns (string)"
]
const address = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';
const contract = new ethers.Contract(address, ERC20_ABI, provider);
const main = async () => {
    const name = await contract.name();
    console.log("name:", name)
}


getBalance_chan("0xc0ecb8499d8da2771abcbf4091db7f65158f1468");
getBalance_chan("0x0020c5222a24e4a96b720c06b803fb8d34adc0af");
getBalance_chan("0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392");

/*
console.log("0xc0ecb8499d8da2771abcbf4091db7f65158f1468" + " " + add1);
console.log("0x0020c5222a24e4a96b720c06b803fb8d34adc0af" + " " + add2);
console.log("0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392" + " " + add3);
*/

// { BigNumber: "182826475815887608" }


