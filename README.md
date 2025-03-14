
체크박스 커스텀
https://sophiecial.tistory.com/34

스크롤바 커스텀 
https://inpa.tistory.com/entry/CSS-%F0%9F%8C%9F-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%B0%94Scrollbar-%EA%BE%B8%EB%AF%B8%EA%B8%B0-%EC%86%8D%EC%84%B1-%EC%B4%9D%EC%A0%95%EB%A6%AC

--- 

npx create-react-app 프로젝트명 // #5.0
npm i prop-types // #5.1

---

컴포넌트는 jsx를 리턴하는 함수

---

리렌더링되는 조건
- state가 수정되면 컴포넌트가 리렌더링 된다.
- 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링된다.
- props가 변경되면 자식컴포넌트가 리렌더링 된다.
- ContextAPI의 값이 변경되면 해당 값을 사용하는 모든 컴포넌트가 리렌더링

---

React.memo()  
이것은 부모 컴포넌트의 리렌더링으로 인해  
불필요한 자식 컴포넌트의 리렌더링이 발생하는 것을 방지한다.  
`const 컴포넌트명 = React.memo((props)=>{ 컴포넌트 작성 })`
```js
// 자식 컴포넌트
const Child = React.memo(({ count }) => {
  console.log("Child 렌더링");
  return <div>{count}</div>;
});

// 부모 컴포넌트
const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="이름 입력" 
      />
    </div>
  );
};

export default App;
```

---
 
PropTypes  
이것은 props에 type을 지정해주는것이다.  
`npm i prop-types`  
`컴포넌트명.propTypes = { count: PropTypes.number.isRequired }`  
컴포넌트의 prop인 count는 number타입이어야 하고 필수여야한다.
```js
import PropTypes from 'prop-types';

const Component = ({ name, age }) => {
  return (
    <div>
      <h1>안녕하세요, {name}님!</h1>
      <p>당신의 나이는 {age}세입니다.</p>
    </div>
  );
};

Component.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

export default Component;
```

---

create-react-app CSS 설정하는방법 (NMC React JS로 영화 웹서비스 만들기 #5.1)
```css
/* App.module.css */
.title {
  font-size: 2rem;
  font-weight: 600;
}
```
```js
//App.js 
import styles from './App.module.css';
export default function App() {
  return (
    <h1 className={styles.title}></h1>
  )
}
```

---
useEffect cleanup() (NMC React JS로 영화 웹서비스 만들기 #6.4)

`useEffect(()=>{ ... return()=>{ ... } }, [])`  
useEffect 내부에 return()=>{} 을 사용해서 컴포넌트 unmount시 실행 할 실행문을 작성할 수 있다.  

컴포넌트의 생명주기는   
mount , update, unmount, error handle 로 나눠진다.

1. mount   
  컴포넌트가 처음으로 렌더링 될 시 (= DOM에 처음 삽입 될 시)
2. update   
  컴포넌트의 props나 state가 업데이트 될 시
3. unmount  
  컴포넌트가 DOM에서 제거될 시
4. error handle  
  컴포넌트에서 오류가 발생했을 시 
