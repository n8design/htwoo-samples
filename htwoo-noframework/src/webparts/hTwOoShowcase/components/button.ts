export default class HooButton {

    public static primary = (label?: any) => {
        return `<button class="hoo-button-primary">
            <span class="hoo-button-label">${label || "Button"}</span>
        </button>`;
    }
    public static standard = (label?: any) => {
        return `<button class="hoo-button">
            <span class="hoo-button-label">${label || "Button"}</span>
        </button>`;
    }

}