import { spring, animate } from "motion";


export default function elevator(node: HTMLElement, position = 0): void {
    animate(node, { y: [0, 35, 0] }, { duration: 1.5, repeat: Infinity });
}

// export default function elevator(node: HTMLElement, position = 0): void {
//     animate(node, { y: [0, 35, 0] }, { duration: 1.25, delay: 'delay' });
// }
// export const textVariant = (delay?: number) => {
//     console.log('here')
//       return {
//         hidden: {
//           y: -50,
//           opacity: 0,
//         },
//         show: {
//           y: 0,
//           opacity: 1,
//           transition: {
//             type: "spring",
//             duration: 1.25,
//             delay: delay,
//           },
//         },
//       };
//     };