/**
 * 
 * Provide 3 unique implementations of the following function in TypeScript.
    - Comment on the complexity or efficiency of each function.
    - Input**: `n` - any integer
    - Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
 * 
 */

function validateInput(n: number): void{
    if (n<1){
        throw new Error('invalid input n')
    }
}
function sum_to_n_a(n: number): number {
    // use the mathematical formula s= n*(n+1)/2, the best solution

    // const hrtime = process.hrtime();
    const s = n*(n+1)/2
    // const diff = process.hrtime(hrtime);
    // console.log(`method A: ${diff} in nano-seconds`)
    return s
}

function sum_to_n_b(n: number): number {
    // loop from 1 to n
    // complexity is O(n)

    const hrtime = process.hrtime();
    let s = 0
    for (let i =1; i<=n; i++){
        s += i
    }
    const diff = process.hrtime(hrtime);
    // console.log(`Start At: ${hrtime}`)
    // console.log(`End At: ${diff} in nano-seconds`)
    // console.log(`method B: ${diff} in nano-seconds`)
    return s
}

function sumByRange(start: number, end: number): number {
  if (start === end) return start;
  const mid = Math.floor((start + end) / 2);
  return sumByRange(start, mid) + sumByRange(mid + 1, end);
}

function sum_to_n_c(n: number): number {
    // recursive method
    // complexity is O(n)


    // const hrtime = process.hrtime();
    const s = sumByRange(1, n)
    // const diff = process.hrtime(hrtime);
    // console.log(`method C: ${diff} in nano-seconds`)
    return s
}


function main(){
    const n = 23157878

    // validate input if needed
    validateInput(n)

    // method A
    const sa = sum_to_n_a(n)
    console.log(`SA=${sa}`)

    // method B
    const sb = sum_to_n_b(n)
    console.log(`SB=${sb}`)

    // method C
    const sc = sum_to_n_c(n)
    console.log(`SC=${sc}`)
}
main()