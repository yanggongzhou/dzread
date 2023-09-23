import React, { useEffect, useState } from 'react';
// 1. 导入动画组件
import { CSSTransition } from 'react-transition-group';

// 2. 导入动画样式

function Ctransition() {

  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setInProp(true)
  }, []);

  return (
    <>
      <h2>在前端开发中，通常使用CSSTransition来完成过渡动画效果,如果只有一个组件，直接使用这个即可</h2>
      <button className='button' onClick={() => setInProp(!inProp)}>Click to toggle</button>

      <CSSTransition
        in={inProp}
        // unmountOnExit={true}
        classNames={{
          enter: "animatexx__zz animate__animated animate__fadeInDown",
          // enterActive: "",
          exit: "animate__animated animate__fadeOutDown",
          // exitActive: "",
        }}

        timeout={{
          enter: 5000,
          exit: 5000
        }}

        // appear
        // onEnter={(e) => console.log('开始进入动画')}
        // onEntering={(e) => console.log('执行进入动画')}
        // onEntered={(e) => console.log('进入动画结束')}
        // onExit={(e) => console.log('开始离开动画')}
        // onExiting={(e) => console.log('正在离开动画')}
        // onExited={(e) => console.log('离开动画结束')}
      >
        <h2>CSSTransition组件内容</h2>
      </CSSTransition>
    </>
  );
}

export default Ctransition;
