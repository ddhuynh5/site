export type ComponentType = string;

export type IconDivideProps = {
    switchComponent: (newComponent: ComponentType) => void;
    activeComponent: ComponentType;
};

export type ActiveProps = {
    isActive: boolean;
};