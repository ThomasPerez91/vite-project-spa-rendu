class TabManager {
    constructor(rootElement, componentMapping) {
        this.rootElement = rootElement;
        this.componentMapping = componentMapping;
    }

    async openTabById(tabId) {
        if (tabId in this.componentMapping) {
            const { component, params: [...props] } = this.componentMapping[tabId];
            const Component = await component(...props);
            this.rootElement.innerHTML = '';
            this.rootElement.appendChild(Component);
        } else {
            console.error('Invalid id provided');
        }
    }
}

export default TabManager;
