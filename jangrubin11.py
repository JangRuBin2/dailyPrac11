# example이라는 배열 안에 각각의 데이터가 담겨있음
example = [[1,2,3], [4,[5,6]],7, [8,9]]
# 함수는 data를 가지고 실행하는데
def flatten(data):
    # 빈 배열
output = []
# for in 반복문 
for item in data:
    # item이 리스트 형태라면
if type(item) == List:
  # 재귀적으로 처리
  # ?? 함수 또는 알고리즘에서 자기 자신을 호출해 
  # ?? 문제를 해결하는 방법??
output += flatten(item)
# else
else:
# append?? push같은 느낌을 사용 하는 건가?
output.append(item)
# output을 return 한다 
return output
# 콘솔로그에 flatten된 배열을 보여준다
print(flatten(example))