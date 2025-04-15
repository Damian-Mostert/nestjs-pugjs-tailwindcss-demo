module.exports = function Form({
    fields = [],
    input = { size: "md", variant: "default" },
    button = { size: "md", variant: "default" },
    variant = "default",
    action = "/",
    method = "POST"
}) {
    const formId = `form_${Math.random().toString(36).substring(2, 8)}`;

    let formMarkup = `
    <form 
        x-data="{
            form: {},
            errors: {},
            validate() {
                this.errors = {};
                ${fields.map(field => {
                    if (field.required) {
                        return 
                        if (!this.form['${field.name}']) {
                            this.errors['${field.name}'] = '${field.label} is required.';
                        }
                        ;
                    }
                    return '';
                }).join('\n')}
                return Object.keys(this.errors).length === 0;
            },
            submit(e) {
                if (!this.validate()) {
                    e.preventDefault();
                }
            }
        }" 
        @submit="submit"
        action="${action}" 
        method="${method}" 
        variant="${variant}"
        id="${formId}"
        novalidate
    >`
    ;

    fields.forEach(field => {
        const isTextarea = field.type === 'textarea';
        const fieldEl = isTextarea
            ? `<textarea 
                    x-model="form['${field.name}']"
                    size="${input.size}" 
                    variant="${input.variant}"
                    id="${field.name}" 
                    name="${field.name}" 
                    rows="${field.rows || 4}" 
                    cols="${field.cols || 50}"
                ></textarea>`
            : `<input
                    x-model="form['${field.name}']"
                    size="${input.size}" 
                    variant="${input.variant}"
                    type="${field.type}" 
                    id="${field.name}" 
                    name="${field.name}" 
                />`;

        formMarkup += `
        <div class="form-section">
            <label for="${field.name}">${field.label}</label>
            ${fieldEl}
            <div error="true" x-if="errors['${field.name}']">
                <span class="error-message" x-text="errors['${field.name}']"></span>
            </div>
        </div>`
        ;
    });

    formMarkup += 
        `<button 
            size="${button.size}" 
            variant="${button.variant}" 
            type="submit"
        >Submit</button>
    </form>`
    ;

    return formMarkup;
};
