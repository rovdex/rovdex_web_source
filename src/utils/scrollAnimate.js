import ScrollReveal from "scrollreveal";

const aniClasses = [
    "ani-top",
    "ani-bottom",
    "ani-left",
    "ani-right",
    "ani-rotate",
];

export const scrollAnimate = {
    init: () => {
        for (let aniClass of aniClasses) {
            // 需要添加动画的节点
            const domClass = `.${aniClass}`;
            const action = aniClass.split("-")[1];

            ScrollReveal().reveal(domClass, {
                // 动画的时长
                duration: 600,
                // 延迟时间
                delay: 100,
                origin: action == "rotate" ? "left" : action,
                distance: "90px",
                easing: "ease-in-out",
                rotate: {
                    x: 0,
                    y: 0,
                    z: action == "rotate" ? 90 : 0,
                },
                scale: 1,
                // 回滚的时候是否再次触发动画
                reset: true,
                // 在移动端是否使用动画
                mobile: true,
            });
        }
    },
};
