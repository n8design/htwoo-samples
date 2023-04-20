export default class HooButton {

    public static primary = (label?: string): string => {
        return `<button class="hoo-button-primary">
            <span class="hoo-button-label">${label || "Button"}</span>
        </button>`;
    }

    public static standard = (label?: string, callback?: EventListener): HTMLButtonElement => {
        
        const _button = document.createElement("button");
        _button.classList.add("hoo-button");
        _button.innerHTML = `<span class="hoo-button-label">${label || "Button"}</span>`;

        if (callback) {
            _button.addEventListener("click", callback);
        }

        return _button;
    }

}