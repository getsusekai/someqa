import re

url = 'https://www.ecwid.com/demo/#!/~/signIn/key=RtS1OMW9Tn2q&returnUrl=account/favorites'

key = r'key=(\w+)'

print(*re.findall(key, url))