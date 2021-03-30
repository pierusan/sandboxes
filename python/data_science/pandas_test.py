import pandas as pd

# Any curried function can also be used in the regular way with the normal
# amount of positional arguments. You might then prefer to mostly import the
# curried version
from toolz import pipe
from toolz.curried import map

print(pd.__version__)

filepath = "https://raw.githubusercontent.com/aaronmcdaid/P2---Data-Analytics-With-Python/master/Berlin/WS%202019/5.%20Datasets/dataset_mountains/countries%20of%20the%20world.csv"
df = pd.read_csv(filepath_or_buffer=filepath).iloc[:, 1:]

print(df.head(3))
print(df.tail(3))

test_list = range(10)
squared = pipe(test_list, map(lambda x: x * x), list)
print(squared)
