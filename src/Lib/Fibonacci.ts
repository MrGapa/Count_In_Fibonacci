
/**
 * Calc Fibonacci
 * 
 * The next number is found by adding up the two numbers before it
 * 
 * x6 = (x6 - 1) + (x6 - 2)
 * 
 * x6 = x5 + x4
 * 
 * x6 = 5 + 3
 * 
 * x6 = 8
 * 
 * https://www.mathsisfun.com/numbers/fibonacci-sequence.html#:~:text=a%20longer%20list%3A-,0%2C%201%2C%201%2C%202%2C%203%2C%205%2C,out%20the%20next%20few%20numbers%3F
 */

export default function calculateFibonacci(number: number): number {

    let n1 = 0, n2 = 1
    
    for (let i = 1; i <= number; i++) {
        let n3 = n1 + n2
        n1 = n2
        n2 = n3
    }

    return n1
}
