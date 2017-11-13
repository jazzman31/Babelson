export class Template {
    constructor(templateName, data = {}) {
        this.templateName = templateName;
        this.data = data;
    }
    
    render(data, targetEl) {
        let templateContent = document.querySelector(`#${this.templateName}`);
        if (!templateContent) {
            throw "Template could not be found, or is empty";
        }
        var markup = templateContent.innerHTML;

        if (data || this.data) {
            Object.keys(data || this.data).forEach((keyName)=> {
                templateContent.innerHTML = markup.replace(`{{${keyName}}}`, data[keyName]);
            });

            if (targetEl) {
                var clone = document.importNode(templateContent.content, true);
                targetEl.appendChild(clone);
            } else {
                return markup
            }
        }
    }
}