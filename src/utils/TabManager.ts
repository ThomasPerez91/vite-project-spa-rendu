interface ComponentMappingProps {
    [key: string]: {
        component: () => Promise<HTMLElement>;
        params?: [];
    };
}

class TabManager {
    private rootElement: HTMLElement;
    private componentMapping: ComponentMappingProps;

    constructor(rootElement: HTMLElement, componentMapping: ComponentMappingProps) {
        if (!rootElement) {
            throw new Error('Missing root element');
        }

        if (!componentMapping) {
            throw new Error('Missing component mapping object');
        }

        this.rootElement = rootElement;
        this.componentMapping = componentMapping;
    }

    async openTabById(tabId: string) {
        const key = tabId in this.componentMapping ? tabId : 'notFound';
        const tab = this.componentMapping[key];
        const Component = await tab.component(...(tab?.params as []));

        this.rootElement.innerHTML = '';
        this.rootElement.appendChild(Component);
    }
}

export default TabManager;
