module.exports = function Modal({ 
    openKey = 'modalOpen', 
    title = 'Modal Title', 
    content = '', 
    size = 'md' 
}) {
    return `
<div 
    class="modal-backdrop" 
    x-show="${openKey}" 
    x-transition.opacity 
    x-cloak
>
    <div class="modal modal-size-${size}" @click.outside="${openKey} = false">
        <header class="modal-header">
            <h2>${title}</h2>
            <button class="modal-close" @click="${openKey} = false">×</button>
        </header>
        <main class="modal-content">
            ${content}
        </main>
    </div>
</div>
    `;
};
