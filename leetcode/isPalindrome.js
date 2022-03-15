const isPalindrome = (s) => {
   s = s.replace(/[\W_]/gi,'');
   let flag = true;
   let left = 0;
   let right = s.length - 1;
   while (left < right) {
     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
       flag = false;
       break;
     }
     left++;
     right--;
   }
   return flag;
}

const s = 'A mAn, a plan, a canal: Panama ';
//const s = "race a car";
console.log(isPalindrome(s));