import { useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const Navigation = forwardRef((props, ref) => {
  const pinItem = useRef();
  const pinTrigger = useRef();
  const animation = useRef();

  const init = () => {
    animation.current = gsap.to(pinItem.current, {
      opacity: 1,
      rotation: 360,
      y: 500,
      scrollTrigger: {
        trigger: pinTrigger.current,
        end: 900,
        pin: true,
        scrub: true,
        pinSpacing: false
      }
    });
  };

  useImperativeHandle(ref, () => {
    return {
      init: () => {
        if (!animation.current) {
          init();
        }
      }
    };
  });

  return (
    <div ref={pinTrigger}>
      <h1 ref={pinItem} style={{ display: "inline-block" }}>
        hello..
      </h1>
    </div>
  );
});

export default Navigation;
