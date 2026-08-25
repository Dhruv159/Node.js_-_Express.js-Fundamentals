const os =  require('os');
const userInfo = os.userInfo();

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    free: os.freemem()
}
console.log(userInfo)
console.log(currentOs)