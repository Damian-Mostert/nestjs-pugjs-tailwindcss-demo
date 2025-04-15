module.exports = function Accordion({ variant= "default", items = [] }) {
    return items.map(({ title, content }, idx) => `
    <div x-data="{ open: false }" class="accordion-item accordion-variant-${variant}">
        <button @click="open = !open">${title}</button>
        <div x-show="open" class="accordion-content">
            ${content}
        </div>
    </div>
    `).join('');
};
