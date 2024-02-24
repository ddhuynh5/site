export type ComponentType = string;

export type IconDivideProps = {
    switchComponent: (newComponent: ComponentType) => void;
    activeComponent: ComponentType;
};

export type ActiveProps = {
    isActive: boolean;
};

export type ProjectBoxProps = {
    title: string;
    content: string;
    image: string;
    git: string;
    tag: JSX.Element[];
    video: boolean;
    gif: string;
    handleWheelScroll: (event: WheelEvent) => void;
    info: string;
}

export type GalleryProps = {
    slides: JSX.Element[];
    handleWheelScroll: (event: WheelEvent) => void;
}

export type handleWheelScrollProps = {
    handleWheelScroll: (event: WheelEvent) => void;
}