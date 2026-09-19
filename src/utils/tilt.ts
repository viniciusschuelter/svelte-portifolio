import { inView } from "motion";

export interface Settings {
    scale?: number;
    max?: number;
    reverse?: boolean;
}

function getSettings(settings = {}): Settings {
    return { scale: 1.05, max: 15, reverse: false, ...settings };
}

const TRANSITION_MS = 150;

export default function tilt(node: HTMLElement, settingsObj: Settings): any {
    let settings = getSettings(settingsObj);
    let reverse = settings.reverse ? -1 : 1;
    let transitionId: any = null;
    let cleanupInView: (() => void) | null = null;

    function onMouseMove(e: MouseEvent) {
        const rect = node.getBoundingClientRect();
        
        const absoluteX = e.clientX - rect.left;
        const absoluteY = e.clientY - rect.top;
        
        const percX = absoluteX / rect.width;
        const percY = absoluteY / rect.height;
        
        const { scale } = settings;

        const tiltX = (settings.max! * (percX - 0.5) * 2);
        const tiltY = (settings.max! * (percY - 0.5) * 2);
        
        node.style.transform = `perspective(1000px) ` +
            `rotateX(${-reverse * tiltY}deg) ` +
            `rotateY(${reverse * tiltX}deg) ` +
            `scale3d(${scale}, ${scale}, 1)`;
    }
    
    function smoothTransition() {
        clearTimeout(transitionId);
        node.style.willChange = 'transform';
        node.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(0.25, 1, 0.5, 1)`;
        transitionId = setTimeout(() => {
            node.style.transition = 'unset';
        }, TRANSITION_MS);
    }
    
    function onMouseEnter() {
        smoothTransition();
    }
    
    function onMouseLeave() {
        smoothTransition();
        node.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }

    cleanupInView = inView(node, () => {
        node.addEventListener('mousemove', onMouseMove);
        node.addEventListener('mouseleave', onMouseLeave);
        node.addEventListener('mouseenter', onMouseEnter);
        
        return () => {
            node.removeEventListener('mousemove', onMouseMove);
            node.removeEventListener('mouseleave', onMouseLeave);
            node.removeEventListener('mouseenter', onMouseEnter);
        };
    });
    
    // Retorno correto da Svelte Action no nível raiz da função
    return {
        destroy() {
            if (cleanupInView) cleanupInView();
            clearTimeout(transitionId);
        },
        update(newSettingsObj: Settings) {
            settings = getSettings(newSettingsObj);
            reverse = settings.reverse ? -1 : 1;
        }
    };
}