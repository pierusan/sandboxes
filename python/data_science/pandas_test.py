import pandas as pd

print(pd.__version__)

filepath = "https://raw.githubusercontent.com/aaronmcdaid/P2---Data-Analytics-With-Python/master/Berlin/WS%202019/5.%20Datasets/dataset_mountains/countries%20of%20the%20world.csv"
df = pd.read_csv(filepath_or_buffer=filepath).iloc[:, 1:]

print(df.head(3))
print(df.tail(3))
