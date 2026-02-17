const os=require("os");

//basic system info
console.log(`os platform: ${os.platform()}`);
console.log(`os type: ${os.type()}`);
console.log(`os release: ${os.release()}`);
console.log(`cpu architecture: ${os.arch()}`);
console.log(`hostname: ${os.hostname()}`);


//memory info
const totalmemgb=(os.totalmem()/(1024*1024*1024)).toFixed(2);
const freememgb=(os.freemem()/(1024*1024*1024)).toFixed(2);
console.log(`memory: ${freememgb}GB free of ${totalmemgb}gb`);

//user info

const userinfo=os.userInfo();
console.log(`current user: ${userinfo.username}`);
console.log(`home directory: ${os.homedir}`);



