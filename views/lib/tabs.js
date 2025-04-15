module.exports = function Tabs({ tabs = [] }) {
    const tabKeys = tabs.map((_, i) => `'tab${i}'`).join(',');
    const tabContent = tabs.map((tab, i) => `
        <div x-show="active === 'tab${i}'" class="tab-content">${tab.content}</div>
    `).join('\n');

    const tabButtons = tabs.map((tab, i) => `
        <button :class="{ 'active': active === 'tab${i}' }" @click="active = 'tab${i}'">${tab.label}</button>
    `).join('\n');

    return `
<div x-data="{ active: 'tab0' }" class="tabs">
    <div class="tab-buttons">
        ${tabButtons}
    </div>
    <div class="tab-contents">
        ${tabContent}
    </div>
</div>
    `;
};
