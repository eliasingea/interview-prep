#Bottom Up approach. Used to avoid recursion on the call stack 

def fib_memo(n, memo):
    if n in memo:
        return memo[n]
    elif n == 1 or n == 2:
        result = 1
    else:
        result = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    memo[n] = result
    return result

n = 4
memo = [0] * (n + 1)
print(fib_memo(n, memo))

def fib(n):
    arr = [0] * (n + 1)
    arr[1] = 1
    arr[2] = 1
    if n == 1 or n == 2:
        return 1
    else:
        for i in range(3, n + 1):
            arr[i] = arr[i - 1] + arr[i - 2]
    return arr[n]

print(fib(400))