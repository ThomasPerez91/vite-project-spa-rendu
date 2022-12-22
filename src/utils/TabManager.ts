interface ComponentMappingProps {
    [key: string]: {
        component: () => Promise<HTMLElement>;
        params?: [];
    };
}

class TabManager {
    private rootElement: HTMLElement;
    private componentMapping: ComponentMappingProps;

    constructor(rootElement: HTMLElement = null, componentMapping: ComponentMappingProps = null) {
        if (!rootElement) {
            throw new Error('Missing root element');
        }

        if (!componentMapping) {
            throw new Error('Missing component mapping object');
        }

        this.rootElement = rootElement;
        this.componentMapping = componentMapping;
    }

    async openTabById(tabId) {
        if (!(tabId in this.componentMapping)) {
            throw new Error('Invalid id provided');
        }

        const tab = this.componentMapping[tabId];
        const Component = await tab.component(...tab?.params);

        this.rootElement.innerHTML = '';
        this.rootElement.appendChild(Component);
    }
}

export default TabManager;
