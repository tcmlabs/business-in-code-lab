import pytest

def fibonacci(n):
    if(n <= 1):
        return n
    else:
        return (fibonacci(n-1) + fibonacci(n-2))

def test_fibonacci_minus_1():
    assert fibonacci(-1) == -1

@pytest.mark.parametrize("test_input,expected", [(0,0), (1,1), (10, 55)])
def test_eval(test_input, expected):
    assert fibonacci(test_input) == expected
