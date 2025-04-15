module.exports = function InputField({
    type = "text",
    name,
    label,
    required = false,
    variant = "default",
    size = "md",
    rows,
    cols
}) {
    const isTextarea = type === 'textarea';
    const fieldEl = isTextarea
        ? `<textarea x-model="form['${name}']" rows="${rows || 4}" cols="${cols || 50}" name="${name}" id="${name}" size="${size}" variant="${variant}"></textarea>`
        : `<input x-model="form['${name}']" type="${type}" name="${name}" id="${name}" size="${size}" variant="${variant}" />`;

    return `
    <div class="form-section">
        <label for="${name}">${label}</label>
        ${fieldEl}
        <div error="true" x-if="errors['${name}']">
            <span class="error-message" x-text="errors['${name}']"></span>
        </div>
    </div>
    `;
};
