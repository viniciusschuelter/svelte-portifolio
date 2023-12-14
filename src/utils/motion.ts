import { inView, animate } from "motion";


export function textVariant(node: HTMLElement, delay = 0.1): void {
  inView(node, ({ target }) => {
    animate(node, { y: 0, opacity: 1 }, { duration: 1.5, delay: delay });
  });
  animate(node, { y: -70, opacity: 0 });
};

export function fadeIn(node: HTMLElement, options = { delay: 0.1, duration: 1, direction: 'right'} ): any {
  inView(node, ({ target }) => {
    animate(node, { x: 0, y: 0, opacity: 1 }, { delay: options.delay, duration: options.duration });
  });
  animate(node, {
    x: options.direction === "left" ? 100 : options.direction === "right" ? -100 : 0,
    y: options.direction === "up" ? 100 : options.direction === "down" ? -100 : 0,
    opacity: 0}
  );
};

export function zoomIn(node: HTMLElement, delay: number = 0.1, duration: number = 1): any {
  inView(node, ({ target }) => {
    animate(node, { scale: [1.4, 1], opacity: 1 }, { delay: delay, duration: duration });
  });
  animate(node, { scale: 0, opacity: 0 });
};

// export const textVariant = (delay?: number) => {
//   console.log('here')
//     return {
//       active: {
//         y: 0,
//         opacity: 1,
//         transition: {
//           type: "spring",
//           duration: 1.25,
//           delay: delay,
//         },
//       },
//       inactive: {
//         y: -50,
//         opacity: 0,
//       }
//     }
//   };
  
  // export const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
  //   return {
  //     hidden: {
  //       x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
  //       y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
  //       opacity: 0,
  //     },
  //     show: {
  //       x: 0,
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         type: type,
  //         delay: delay,
  //         duration: duration,
  //         ease: "easeOut",
  //       },
  //     },
  //   };
  // };
  
  // export const zoomIn = (delay: number, duration: number) => {
  //   return {
  //     hidden: {
  //       scale: 0,
  //       opacity: 0,
  //     },
  //     show: {
  //       scale: 1,
  //       opacity: 1,
  //       transition: {
  //         type: "tween",
  //         delay: delay,
  //         duration: duration,
  //         ease: "easeOut",
  //       },
  //     },
  //   };
  // };
  
  export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren?: any, delayChildren?: any) => {
    return {
      inactive: {},
      active: {
        transition: {
          staggerChildren: staggerChildren || 0,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };