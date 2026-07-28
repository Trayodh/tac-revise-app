const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('extra_bank_data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const bank = sandbox.window.EXTRA_QUESTION_BANK;
for (let sub in bank) {
  console.log(sub, ':', Object.keys(bank[sub]));
}
