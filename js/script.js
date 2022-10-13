// Global Array
const NUMFACTORS = Array(150000).fill(0);
(function initFactors(num) {
    for (let i=2;i<num;i++) {
        if (NUMFACTORS[i] === 0) {
            for (let j=i;j<num;j+=i) {
                NUMFACTORS[j]++;
            }
        }
    }
})(150000);