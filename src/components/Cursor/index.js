import { useEffect, useRef } from "react";
import * as S from './style';

const Cursor = () => {
    const delay = 15;

    const dot = useRef(null);
    const dotOutline = useRef(null);

    const CursorVisible = useRef(true);
    const CursorEnlarged = useRef(false);

    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);
    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);

        animateDotOutline();

        return () => {
            document.removeEventListener('mousedown', mouseOverEvent);
            document.removeEventListener('mouseup', mouseOutEvent);
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseenter', mouseEnterEvent);
            document.removeEventListener('mouseleave', mouseLeaveEvent);

            cancelAnimationFrame(requestRef.current);
        }
    })

    const toggleCursorVisibility = () => {
        if(CursorVisible.current) {
            dot.current.style.opacity = 1;
            dotOutline.current.style.opacity = .5;
        } else {
            dot.current.style.opacity = 0;
            dotOutline.current.style.opacity = 0;
        }
    }

    const toggleCursorSize = () => {
        if(CursorEnlarged.current) {
            dot.current.style.transform = 'translate(-50%, 50%) scale(.75)';
            dotOutline.current.style.transform = 'translate(-50%, 50%) scale(1.5)';
        } else {
            dot.current.style.transform = 'translate(-50%, 50%) scale(1)';
            dotOutline.current.style.transform = 'translate(-50%, 50%) scale(1)';
        }
    }

    const mouseOverEvent = () => {
        CursorEnlarged.current = true;
        toggleCursorSize();
    }

    const mouseOutEvent = () => {
        CursorEnlarged.current = false;
        toggleCursorSize();
    }

    const mouseEnterEvent = () => {
        CursorVisible.current = true;
        toggleCursorVisibility();
    }

    const mouseLeaveEvent = () => {
        CursorVisible.current = false;
        toggleCursorVisibility();
    }

    const mouseMoveEvent = e => {
        CursorVisible.current = true;
        toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;

        dot.current.style.top = endY.current + 'px';
        dot.current.style.left = endX.current + 'px';
    }

    const animateDotOutline = () => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;

        dotOutline.current.style.top = _y.current + 'px';
        dotOutline.current.style.left = _x.current + 'px';

        requestRef.current = requestAnimationFrame(animateDotOutline);
    }

    return (
        <S.Cursors>
            <section ref={dotOutline} className="cursor-dot-outline" />
            <section ref={dot} className="cursor-dot" />
        </S.Cursors>
    )
}

export default Cursor;