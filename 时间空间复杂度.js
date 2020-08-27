/***
 * 1.若两段算法分别有复杂度T1(n)=O(f(n))和T2(n)=O(f(n))
 *    则  T1(n)+T2(n) = max(O(f1(n)), O(f2(n)))
 *        T1(n)*T2(n) = O(f1(n)*f2(n))
 * 2.for循环时间复杂度等于 循环次数乘以循环体代码复杂度
 * 3.if-else复杂度分为条件判断复杂度和两分支复杂度，总体取三者最大
 *    
 *  O(1)
 *  O(log(n))
 *  O(n)
 *  O(nlog(n))
 *  O(n²)
 *  O(2的n次方)，幂函数
 * 
 *  - n是数据量
 *  - f(n)是执行次数
 *  - T(n)是复杂度
 * 
 */