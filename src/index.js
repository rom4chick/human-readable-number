module.exports = function toReadable (num) {
    let res = '';
    let numStr = String(num);
    let power = numStr.length - 1;
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const nums1 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
    const nums2 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    for (let i = 0; i <= numStr.length; i++) {
        if (power === 0) {
            res += nums[num % 10];
            break;
         } else if (power === 1) {
            if (numStr[i] === "1" && numStr[i + 1] > "0") {
                res += nums1[num % 10 - 1];
                break;
            } else if (numStr[i] !== "0") {
                power--;
                res += nums2[Math.trunc(num / 10) - 1];
                if (num % 10 === 0)
                    break;
                num -= Number(numStr[i]) * 10;
                res += ' ';
            } else {
                power--;
            }  
        } else if (power === 2) {
            res += nums[Math.trunc(num / 100)] + ' hundred';
            if (num % 100 === 0) 
                break;
            res += ' ';
            num -= Number(numStr[i]) * 100;
            power--;
        }
    }
    return res;
}