// App.tsx

// React 및 필요한 라이브러리에서 필요한 모듈을 임포트합니다.
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// App 컴포넌트를 정의합니다.
const App = () => {
  // 상태 훅을 사용하여 countNum 상태 변수를 정의하고 초기값을 0으로 설정합니다.
  const [countNum, setCount] = useState(0);

  // countNum을 1 증가시키는 함수입니다.
  const increment = () => {
    setCount(countNum + 1);
  };

  // countNum을 1 감소시키는 함수입니다.
  const decrement = () => {
    setCount(countNum - 1);
  };

  // countNum을 0으로 리셋하는 함수입니다.
  const reset = () => {
    setCount(0);
  };

  // 컴포넌트의 UI를 반환합니다.
  return (
    <View style={styles.container}>
      {/* 현재 카운트 값을 표시하는 텍스트입니다. */}
      <Text style={styles.counterText}>카운트: {countNum}</Text>
      <View style={styles.buttonContainer}>
        {/* 증가 버튼: 클릭 시 increment 함수 호출 */}
        <Button title="증가" onPress={increment} />
        {/* 감소 버튼: 클릭 시 decrement 함수 호출 */}
        <Button title="감소" onPress={decrement} />
        {/* 리셋 버튼: 클릭 시 reset 함수 호출 */}
        <Button title="리셋" onPress={reset} />
      </View>
    </View>
  );
};

// 스타일을 정의합니다.
const styles = StyleSheet.create({
  // 전체 화면을 중앙 정렬하고 배경색을 설정합니다.
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1a1a1',
  },
  // 카운트 텍스트의 크기와 여백을 설정합니다.
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  // 버튼들을 가로 방향으로 정렬하고 여백을 설정합니다.
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

// App 컴포넌트를 내보냅니다.
export default App;
